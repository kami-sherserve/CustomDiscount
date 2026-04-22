let url = "https://tate-wriest-france.ngrok-free.dev/";
let shop = Shopify.shop;
let isInternational = false;
let scriptReady = false;

function getCheckoutElements() {
    const elements = [];
    document.querySelectorAll('button').forEach(btn => {
        const text = (btn.innerText || btn.textContent || '').toLowerCase();
        if (text.includes('checkout')) elements.push(btn);
    });
    document.querySelectorAll('button[name="checkout"]').forEach(btn => elements.push(btn));
    document.querySelectorAll('a[href="/checkout"], a[href$="/checkout"], a[href*="/checkout"]').forEach(link => elements.push(link));
    return [...new Set(elements)]; 
}

// Disable all checkout elements
function disableCheckoutElements(disable = true) {
    const elements = getCheckoutElements();
    elements.forEach(el => {
        if (disable) {
            el.disabled = true;
            el.setAttribute('data-original-text', el.innerHTML);
            el.innerHTML = 'Loading...';
            if (el.tagName === 'A') {
                el.style.pointerEvents = 'none';
                el.style.opacity = '0.6';
            }
        } else {
            el.disabled = false;
            const original = el.getAttribute('data-original-text');
            if (original) el.innerHTML = original;
            if (el.tagName === 'A') {
                el.style.pointerEvents = '';
                el.style.opacity = '';
            }
        }
    });
}

function setupCheckoutElement(el) {
    const originalClick = el.onclick;
    const originalHref = el.href;
    el.addEventListener('click', (event) => {
        if (!scriptReady) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        if (isInternational) {
            event.preventDefault();
            event.stopPropagation();
            window.location.href = `/apps/myapp?CustomCheckout=DiscountCheckout&shop=${shop}`;
            return false;
        }
        if (originalClick) originalClick.call(el, event);
        else if (el.tagName === 'A' && originalHref && !event.defaultPrevented) {
      
        }
    });
}

function hideSpecificButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        const text = (btn.innerText || btn.textContent || '').toLowerCase();
        if (text.includes('buy it now') || text.includes('shop it now')) {
            btn.style.display = 'none';
        }
    });
}

function observeButtons() {
    const observer = new MutationObserver(() => {
        hideSpecificButtons();
        const elements = getCheckoutElements();
        elements.forEach(el => {
            if (!el.hasAttribute('data-redirect-setup')) {
                setupCheckoutElement(el);
                el.setAttribute('data-redirect-setup', 'true');
                if (scriptReady) {
                    if (el.disabled) el.disabled = false;
                    if (el.tagName === 'A') {
                        el.style.pointerEvents = '';
                        el.style.opacity = '';
                    }
                    const original = el.getAttribute('data-original-text');
                    if (original) el.innerHTML = original;
                }
            }
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

function fixCartNotificationButton() {
    const cartNotificationForm = document.getElementById('cart-notification-form');
    if (cartNotificationForm) {
        const btn = cartNotificationForm.querySelector('button[name="checkout"]');
        if (btn && (!btn.innerText || btn.innerText.trim() === '')) {
            btn.innerText = 'Check out';
        }
    }
}

//async function isInternationalOrder() {
//    try {
//        const shopResponse = await fetch(
//            `${url}GiftShip/ShopOrigin?ShopName=${shop}`,
//            { method: 'POST', headers: { 'ngrok-skip-browser-warning': 'true', 'Accept': 'application/json' } }
//        );
//        const shopData = await shopResponse.json();
//        const shopOrigin = shopData.shop?.billingAddress?.countryCode || 'US';

//        const locationResponse = await fetch(
//            window.Shopify.routes.root + 'browsing_context_suggestions.json?country[enabled]=true'
//        );
//        const locationData = await locationResponse.json();
//        const customerCountry = locationData.detected_values?.country?.handle;

//        return customerCountry !== shopOrigin;
//    } catch (error) {
//        console.error('Error:', error);
//        return false;
//    }
//}

async function isInternationalOrder() {
    try {
        let selectedCountry = null;
        const countryInput = document.querySelector('input[name="country_code"]');
        if (countryInput && typeof countryInput.value === 'string' && countryInput.value.trim() !== '') {
            selectedCountry = countryInput.value.trim();
        }

        let shopOrigin = 'US';
        try {
            const shopResponse = await fetch(
                `${url}GiftShip/ShopOrigin?ShopName=${shop}`,
                { method: 'POST', headers: { 'ngrok-skip-browser-warning': 'true', 'Accept': 'application/json' } }
            );
            const shopData = await shopResponse.json();
            shopOrigin = shopData.shop?.billingAddress?.countryCode || 'US';
        } catch (apiError) {
            console.warn('Shop origin API failed, using default US', apiError);
        }

        if (selectedCountry) {
            return selectedCountry !== shopOrigin;
        }

        let customerCountry = null;
        try {
            const locationResponse = await fetch(
                window.Shopify.routes.root + 'browsing_context_suggestions.json?country[enabled]=true'
            );
            const locationData = await locationResponse.json();
            customerCountry = locationData.detected_values?.country?.handle;
        } catch (locError) {
            console.warn('Location detection failed, assuming domestic', locError);
            return false;
        }

        return customerCountry !== shopOrigin;
    } catch (error) {
        console.error('Unexpected error in isInternationalOrder:', error);
        return false;
    }
}

function domReady() {
    return new Promise(resolve => {
        if (document.readyState === "complete" || document.readyState === "interactive") resolve();
        else document.addEventListener("DOMContentLoaded", resolve);
    });
}

function hideProductOptions() {
    const keywords = ['SequenceID:', 'parent_Order:', 'Address:', 'AdditionalDetail:'];
    const productOptions = document.querySelectorAll('.product-option, .product-details__item');
    productOptions.forEach(option => {
        const dtElement = option.querySelector('dt, .product-details__item-label');
        if (dtElement && keywords.includes(dtElement.textContent.trim())) {
            option.style.display = 'none';
        }
    });
}

(async () => {
    if (!(url && shop)) return;

    hideSpecificButtons();
    disableCheckoutElements(true);

    await domReady();
    fixCartNotificationButton();

    isInternational = await isInternationalOrder();
    scriptReady = true;

    if (window.location.pathname.endsWith('/cart') || window.location.pathname.endsWith('/cart/')) {
        hideProductOptions();
    }

    const elements = getCheckoutElements();
    elements.forEach(el => {
        setupCheckoutElement(el);
        el.disabled = false;
        if (el.tagName === 'A') {
            el.style.pointerEvents = '';
            el.style.opacity = '';
        }
        const original = el.getAttribute('data-original-text');
        if (original) el.innerHTML = original;
        el.setAttribute('data-redirect-setup', 'true');
    });

    observeButtons();
})();

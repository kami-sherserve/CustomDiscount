let url = "https://tate-wriest-france.ngrok-free.dev/";
let shop = Shopify.shop;
let isInternational = false;
let scriptReady = false;

let countries = [
    {
        "code": "AF",
        "name": "Afghanistan"
    },
    {
        "code": "AX",
        "name": "Aland Islands"
    },
    {
        "code": "AL",
        "name": "Albania"
    },
    {
        "code": "DZ",
        "name": "Algeria"
    },
    {
        "code": "AS",
        "name": "American Samoa"
    },
    {
        "code": "AD",
        "name": "Andorra"
    },
    {
        "code": "AO",
        "name": "Angola"
    },
    {
        "code": "AI",
        "name": "Anguilla"
    },
    {
        "code": "AQ",
        "name": "Antarctica"
    },
    {
        "code": "AG",
        "name": "Antigua and Barbuda"
    },
    {
        "code": "AR",
        "name": "Argentina"
    },
    {
        "code": "AM",
        "name": "Armenia"
    },
    {
        "code": "AW",
        "name": "Aruba"
    },
    {
        "code": "AU",
        "name": "Australia"
    },
    {
        "code": "AT",
        "name": "Austria"
    },
    {
        "code": "AZ",
        "name": "Azerbaijan"
    },
    {
        "code": "BS",
        "name": "Bahamas"
    },
    {
        "code": "BH",
        "name": "Bahrain"
    },
    {
        "code": "BD",
        "name": "Bangladesh"
    },
    {
        "code": "BB",
        "name": "Barbados"
    },
    {
        "code": "BY",
        "name": "Belarus"
    },
    {
        "code": "BE",
        "name": "Belgium"
    },
    {
        "code": "BZ",
        "name": "Belize"
    },
    {
        "code": "BJ",
        "name": "Benin"
    },
    {
        "code": "BM",
        "name": "Bermuda"
    },
    {
        "code": "BT",
        "name": "Bhutan"
    },
    {
        "code": "BO",
        "name": "Bolivia"
    },
    {
        "code": "BQ",
        "name": "Bonaire, Sint Eustatius and Saba"
    },
    {
        "code": "BA",
        "name": "Bosnia and Herzegovina"
    },
    {
        "code": "BW",
        "name": "Botswana"
    },
    {
        "code": "BV",
        "name": "Bouvet Island"
    },
    {
        "code": "BR",
        "name": "Brazil"
    },
    {
        "code": "IO",
        "name": "British Indian Ocean Territory"
    },
    {
        "code": "BN",
        "name": "Brunei Darussalam"
    },
    {
        "code": "BG",
        "name": "Bulgaria"
    },
    {
        "code": "BF",
        "name": "Burkina Faso"
    },
    {
        "code": "BI",
        "name": "Burundi"
    },
    {
        "code": "KH",
        "name": "Cambodia"
    },
    {
        "code": "CM",
        "name": "Cameroon"
    },
    {
        "code": "CA",
        "name": "Canada"
    },
    {
        "code": "CV",
        "name": "Cape Verde"
    },
    {
        "code": "KY",
        "name": "Cayman Islands"
    },
    {
        "code": "CF",
        "name": "Central African Republic"
    },
    {
        "code": "TD",
        "name": "Chad"
    },
    {
        "code": "CL",
        "name": "Chile"
    },
    {
        "code": "CN",
        "name": "China"
    },
    {
        "code": "CX",
        "name": "Christmas Island"
    },
    {
        "code": "CC",
        "name": "Cocos (Keeling) Islands"
    },
    {
        "code": "CO",
        "name": "Colombia"
    },
    {
        "code": "KM",
        "name": "Comoros"
    },
    {
        "code": "CG",
        "name": "Congo"
    },
    {
        "code": "CD",
        "name": "Congo, Democratic Republic of the Congo"
    },
    {
        "code": "CK",
        "name": "Cook Islands"
    },
    {
        "code": "CR",
        "name": "Costa Rica"
    },
    {
        "code": "CI",
        "name": "Cote D'Ivoire"
    },
    {
        "code": "HR",
        "name": "Croatia"
    },
    {
        "code": "CU",
        "name": "Cuba"
    },
    {
        "code": "CW",
        "name": "Curacao"
    },
    {
        "code": "CY",
        "name": "Cyprus"
    },
    {
        "code": "CZ",
        "name": "Czech Republic"
    },
    {
        "code": "DK",
        "name": "Denmark"
    },
    {
        "code": "DJ",
        "name": "Djibouti"
    },
    {
        "code": "DM",
        "name": "Dominica"
    },
    {
        "code": "DO",
        "name": "Dominican Republic"
    },
    {
        "code": "EC",
        "name": "Ecuador"
    },
    {
        "code": "EG",
        "name": "Egypt"
    },
    {
        "code": "SV",
        "name": "El Salvador"
    },
    {
        "code": "GQ",
        "name": "Equatorial Guinea"
    },
    {
        "code": "ER",
        "name": "Eritrea"
    },
    {
        "code": "EE",
        "name": "Estonia"
    },
    {
        "code": "ET",
        "name": "Ethiopia"
    },
    {
        "code": "FK",
        "name": "Falkland Islands (Malvinas)"
    },
    {
        "code": "FO",
        "name": "Faroe Islands"
    },
    {
        "code": "FJ",
        "name": "Fiji"
    },
    {
        "code": "FI",
        "name": "Finland"
    },
    {
        "code": "FR",
        "name": "France"
    },
    {
        "code": "GF",
        "name": "French Guiana"
    },
    {
        "code": "PF",
        "name": "French Polynesia"
    },
    {
        "code": "TF",
        "name": "French Southern Territories"
    },
    {
        "code": "GA",
        "name": "Gabon"
    },
    {
        "code": "GM",
        "name": "Gambia"
    },
    {
        "code": "GE",
        "name": "Georgia"
    },
    {
        "code": "DE",
        "name": "Germany"
    },
    {
        "code": "GH",
        "name": "Ghana"
    },
    {
        "code": "GI",
        "name": "Gibraltar"
    },
    {
        "code": "GR",
        "name": "Greece"
    },
    {
        "code": "GL",
        "name": "Greenland"
    },
    {
        "code": "GD",
        "name": "Grenada"
    },
    {
        "code": "GP",
        "name": "Guadeloupe"
    },
    {
        "code": "GU",
        "name": "Guam"
    },
    {
        "code": "GT",
        "name": "Guatemala"
    },
    {
        "code": "GG",
        "name": "Guernsey"
    },
    {
        "code": "GN",
        "name": "Guinea"
    },
    {
        "code": "GW",
        "name": "Guinea-Bissau"
    },
    {
        "code": "GY",
        "name": "Guyana"
    },
    {
        "code": "HT",
        "name": "Haiti"
    },
    {
        "code": "HM",
        "name": "Heard Island and Mcdonald Islands"
    },
    {
        "code": "VA",
        "name": "Holy See (Vatican City State)"
    },
    {
        "code": "HN",
        "name": "Honduras"
    },
    {
        "code": "HK",
        "name": "Hong Kong SAR"
    },
    {
        "code": "HU",
        "name": "Hungary"
    },
    {
        "code": "IS",
        "name": "Iceland"
    },
    {
        "code": "IN",
        "name": "India"
    },
    {
        "code": "ID",
        "name": "Indonesia"
    },
    {
        "code": "IR",
        "name": "Iran, Islamic Republic of"
    },
    {
        "code": "IQ",
        "name": "Iraq"
    },
    {
        "code": "IE",
        "name": "Ireland"
    },
    {
        "code": "IM",
        "name": "Isle of Man"
    },
    {
        "code": "IL",
        "name": "Israel"
    },
    {
        "code": "IT",
        "name": "Italy"
    },
    {
        "code": "JM",
        "name": "Jamaica"
    },
    {
        "code": "JP",
        "name": "Japan"
    },
    {
        "code": "JE",
        "name": "Jersey"
    },
    {
        "code": "JO",
        "name": "Jordan"
    },
    {
        "code": "KZ",
        "name": "Kazakhstan"
    },
    {
        "code": "KE",
        "name": "Kenya"
    },
    {
        "code": "KI",
        "name": "Kiribati"
    },
    {
        "code": "KP",
        "name": "Korea, Democratic People's Republic of"
    },
    {
        "code": "KR",
        "name": "Korea, Republic of"
    },
    {
        "code": "XK",
        "name": "Kosovo"
    },
    {
        "code": "KW",
        "name": "Kuwait"
    },
    {
        "code": "KG",
        "name": "Kyrgyzstan"
    },
    {
        "code": "LA",
        "name": "Lao People's Democratic Republic"
    },
    {
        "code": "LV",
        "name": "Latvia"
    },
    {
        "code": "LB",
        "name": "Lebanon"
    },
    {
        "code": "LS",
        "name": "Lesotho"
    },
    {
        "code": "LR",
        "name": "Liberia"
    },
    {
        "code": "LY",
        "name": "Libyan Arab Jamahiriya"
    },
    {
        "code": "LI",
        "name": "Liechtenstein"
    },
    {
        "code": "LT",
        "name": "Lithuania"
    },
    {
        "code": "LU",
        "name": "Luxembourg"
    },
    {
        "code": "MO",
        "name": "Macao"
    },
    {
        "code": "MK",
        "name": "Macedonia, the Former Yugoslav Republic of"
    },
    {
        "code": "MG",
        "name": "Madagascar"
    },
    {
        "code": "MW",
        "name": "Malawi"
    },
    {
        "code": "MY",
        "name": "Malaysia"
    },
    {
        "code": "MV",
        "name": "Maldives"
    },
    {
        "code": "ML",
        "name": "Mali"
    },
    {
        "code": "MT",
        "name": "Malta"
    },
    {
        "code": "MH",
        "name": "Marshall Islands"
    },
    {
        "code": "MQ",
        "name": "Martinique"
    },
    {
        "code": "MR",
        "name": "Mauritania"
    },
    {
        "code": "MU",
        "name": "Mauritius"
    },
    {
        "code": "YT",
        "name": "Mayotte"
    },
    {
        "code": "MX",
        "name": "Mexico"
    },
    {
        "code": "FM",
        "name": "Micronesia, Federated States of"
    },
    {
        "code": "MD",
        "name": "Moldova, Republic of"
    },
    {
        "code": "MC",
        "name": "Monaco"
    },
    {
        "code": "MN",
        "name": "Mongolia"
    },
    {
        "code": "ME",
        "name": "Montenegro"
    },
    {
        "code": "MS",
        "name": "Montserrat"
    },
    {
        "code": "MA",
        "name": "Morocco"
    },
    {
        "code": "MZ",
        "name": "Mozambique"
    },
    {
        "code": "MM",
        "name": "Myanmar"
    },
    {
        "code": "NA",
        "name": "Namibia"
    },
    {
        "code": "NR",
        "name": "Nauru"
    },
    {
        "code": "NP",
        "name": "Nepal"
    },
    {
        "code": "NL",
        "name": "Netherlands"
    },
    {
        "code": "AN",
        "name": "Netherlands Antilles"
    },
    {
        "code": "NC",
        "name": "New Caledonia"
    },
    {
        "code": "NZ",
        "name": "New Zealand"
    },
    {
        "code": "NI",
        "name": "Nicaragua"
    },
    {
        "code": "NE",
        "name": "Niger"
    },
    {
        "code": "NG",
        "name": "Nigeria"
    },
    {
        "code": "NU",
        "name": "Niue"
    },
    {
        "code": "NF",
        "name": "Norfolk Island"
    },
    {
        "code": "MP",
        "name": "Northern Mariana Islands"
    },
    {
        "code": "NO",
        "name": "Norway"
    },
    {
        "code": "OM",
        "name": "Oman"
    },
    {
        "code": "PK",
        "name": "Pakistan"
    },
    {
        "code": "PW",
        "name": "Palau"
    },
    {
        "code": "PS",
        "name": "Palestinian Territory, Occupied"
    },
    {
        "code": "PA",
        "name": "Panama"
    },
    {
        "code": "PG",
        "name": "Papua New Guinea"
    },
    {
        "code": "PY",
        "name": "Paraguay"
    },
    {
        "code": "PE",
        "name": "Peru"
    },
    {
        "code": "PH",
        "name": "Philippines"
    },
    {
        "code": "PN",
        "name": "Pitcairn"
    },
    {
        "code": "PL",
        "name": "Poland"
    },
    {
        "code": "PT",
        "name": "Portugal"
    },
    {
        "code": "PR",
        "name": "Puerto Rico"
    },
    {
        "code": "QA",
        "name": "Qatar"
    },
    {
        "code": "RE",
        "name": "Reunion"
    },
    {
        "code": "RO",
        "name": "Romania"
    },
    {
        "code": "RU",
        "name": "Russian Federation"
    },
    {
        "code": "RW",
        "name": "Rwanda"
    },
    {
        "code": "BL",
        "name": "Saint Barthelemy"
    },
    {
        "code": "SH",
        "name": "Saint Helena"
    },
    {
        "code": "KN",
        "name": "Saint Kitts and Nevis"
    },
    {
        "code": "LC",
        "name": "Saint Lucia"
    },
    {
        "code": "MF",
        "name": "Saint Martin"
    },
    {
        "code": "PM",
        "name": "Saint Pierre and Miquelon"
    },
    {
        "code": "VC",
        "name": "Saint Vincent and the Grenadines"
    },
    {
        "code": "WS",
        "name": "Samoa"
    },
    {
        "code": "SM",
        "name": "San Marino"
    },
    {
        "code": "ST",
        "name": "Sao Tome and Principe"
    },
    {
        "code": "SA",
        "name": "Saudi Arabia"
    },
    {
        "code": "SN",
        "name": "Senegal"
    },
    {
        "code": "RS",
        "name": "Serbia"
    },
    {
        "code": "CS",
        "name": "Serbia and Montenegro"
    },
    {
        "code": "SC",
        "name": "Seychelles"
    },
    {
        "code": "SL",
        "name": "Sierra Leone"
    },
    {
        "code": "SG",
        "name": "Singapore"
    },
    {
        "code": "SX",
        "name": "Sint Maarten"
    },
    {
        "code": "SK",
        "name": "Slovakia"
    },
    {
        "code": "SI",
        "name": "Slovenia"
    },
    {
        "code": "SB",
        "name": "Solomon Islands"
    },
    {
        "code": "SO",
        "name": "Somalia"
    },
    {
        "code": "ZA",
        "name": "South Africa"
    },
    {
        "code": "GS",
        "name": "South Georgia and the South Sandwich Islands"
    },
    {
        "code": "SS",
        "name": "South Sudan"
    },
    {
        "code": "ES",
        "name": "Spain"
    },
    {
        "code": "LK",
        "name": "Sri Lanka"
    },
    {
        "code": "SD",
        "name": "Sudan"
    },
    {
        "code": "SR",
        "name": "Suriname"
    },
    {
        "code": "SJ",
        "name": "Svalbard and Jan Mayen"
    },
    {
        "code": "SZ",
        "name": "Swaziland"
    },
    {
        "code": "SE",
        "name": "Sweden"
    },
    {
        "code": "CH",
        "name": "Switzerland"
    },
    {
        "code": "SY",
        "name": "Syrian Arab Republic"
    },
    {
        "code": "TW",
        "name": "Taiwan, Province of China"
    },
    {
        "code": "TJ",
        "name": "Tajikistan"
    },
    {
        "code": "TZ",
        "name": "Tanzania, United Republic of"
    },
    {
        "code": "TH",
        "name": "Thailand"
    },
    {
        "code": "TL",
        "name": "Timor-Leste"
    },
    {
        "code": "TG",
        "name": "Togo"
    },
    {
        "code": "TK",
        "name": "Tokelau"
    },
    {
        "code": "TO",
        "name": "Tonga"
    },
    {
        "code": "TT",
        "name": "Trinidad and Tobago"
    },
    {
        "code": "TN",
        "name": "Tunisia"
    },
    {
        "code": "TR",
        "name": "Turkey"
    },
    {
        "code": "TM",
        "name": "Turkmenistan"
    },
    {
        "code": "TC",
        "name": "Turks and Caicos Islands"
    },
    {
        "code": "TV",
        "name": "Tuvalu"
    },
    {
        "code": "UG",
        "name": "Uganda"
    },
    {
        "code": "UA",
        "name": "Ukraine"
    },
    {
        "code": "AE",
        "name": "United Arab Emirates"
    },
    {
        "code": "GB",
        "name": "United Kingdom"
    },
    {
        "code": "US",
        "name": "United States"
    },
    {
        "code": "UM",
        "name": "United States Minor Outlying Islands"
    },
    {
        "code": "UY",
        "name": "Uruguay"
    },
    {
        "code": "UZ",
        "name": "Uzbekistan"
    },
    {
        "code": "VU",
        "name": "Vanuatu"
    },
    {
        "code": "VE",
        "name": "Venezuela"
    },
    {
        "code": "VN",
        "name": "Vietnam"
    },
    {
        "code": "VG",
        "name": "Virgin Islands, British"
    },
    {
        "code": "VI",
        "name": "Virgin Islands, U.s."
    },
    {
        "code": "WF",
        "name": "Wallis and Futuna"
    },
    {
        "code": "EH",
        "name": "Western Sahara"
    },
    {
        "code": "YE",
        "name": "Yemen"
    },
    {
        "code": "ZM",
        "name": "Zambia"
    },
    {
        "code": "ZW",
        "name": "Zimbabwe"
    }
]

function getCheckoutElements() {
    const elements = [];
    document.querySelectorAll('button').forEach(btn => {
        const text = (btn.innerText || btn.textContent || '').toLowerCase();
        if (text.includes('checkout') || text.includes('check out') || text.includes('check-out') || text.includes('check_out')) {
            elements.push(btn);
        }
    });
    document.querySelectorAll('button[name="checkout"]').forEach(btn => elements.push(btn));
    document.querySelectorAll('a[href="/checkout"], a[href$="/checkout"], a[href*="/checkout"]').forEach(link => elements.push(link));
    return [...new Set(elements)];
}

function disableCheckoutElements(disable = true, customMessage = null) {
    const elements = getCheckoutElements();
    elements.forEach(el => {
        if (disable) {
            el.disabled = true;
            if (!el.hasAttribute('data-original-text')) {
                el.setAttribute('data-original-text', el.innerHTML);
            }
            el.innerHTML = customMessage || 'Loading...';
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
        // unconditional redirect (original behaviour)
        event.preventDefault();
        event.stopPropagation();
        window.location.href = `/apps/myapp?CustomCheckout=DiscountCheckout&shop=${shop}`;
        return false;
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
                    el.disabled = false;
                    if (el.tagName === 'A') {
                        el.style.pointerEvents = '';
                        el.style.opacity = '';
                    }
                    const original = el.getAttribute('data-original-text');
                    if (original) el.innerHTML = original;
                } else {
                    el.disabled = true;
                    if (el.tagName === 'A') {
                        el.style.pointerEvents = 'none';
                        el.style.opacity = '0.6';
                    }
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

// ----- Original isInternationalOrder (kept commented, as requested) -----
// async function isInternationalOrder() {
//     try {
//         const shopResponse = await fetch(
//             `${url}GiftShip/ShopOrigin?ShopName=${shop}`,
//             { method: 'POST', headers: { 'ngrok-skip-browser-warning': 'true', 'Accept': 'application/json' } }
//         );
//         const shopData = await shopResponse.json();
//         const shopOrigin = shopData.shop?.billingAddress?.countryCode || 'US';
//         const locationResponse = await fetch(
//             window.Shopify.routes.root + 'browsing_context_suggestions.json?country[enabled]=true'
//         );
//         const locationData = await locationResponse.json();
//         const customerCountry = locationData.detected_values?.country?.handle;
//         return customerCountry !== shopOrigin;
//     } catch (error) {
//         console.error('Error:', error);
//         return false;
//     }
// }

// ----- Country selector logic (waits for button to appear) -----
function createCountrySelect() {
    const select = document.createElement('select');
    select.id = 'gift-ship-country-select';
    select.style.margin = '10px 0';
    select.style.padding = '8px';
    select.style.width = '100%';
    select.style.maxWidth = '300px';
    select.style.border = '1px solid #ccc';
    select.style.borderRadius = '4px';

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '-- Select a country --';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = country.name;
        select.appendChild(option);
    });
    return select;
}

async function waitForCheckoutButton() {
    return new Promise((resolve) => {
        const check = () => {
            const btn = document.querySelector('.cart__ctas .cart__checkout-button');
            if (btn) {
                resolve(btn);
                return;
            }
            setTimeout(check, 100);
        };
        check();
    });
}

async function insertCountrySelector() {
    if (document.getElementById('gift-ship-country-select')) return null;
    const checkoutBtn = await waitForCheckoutButton();
    if (!checkoutBtn) return null;
    const parent = checkoutBtn.parentNode;
    const select = createCountrySelect();
    parent.insertBefore(select, checkoutBtn);
    return select;
}

async function getShopOrigin() {
    try {
        const shopResponse = await fetch(
            `${url}GiftShip/GetShopOrigin?ShopName=${shop}`,
            { method: 'POST', headers: { 'ngrok-skip-browser-warning': 'true', 'Accept': 'application/json' } }
        );
        const shopData = await shopResponse.json();
        return shopData.shop?.billingAddress?.countryCode || 'US';
    } catch (apiError) {
        console.warn('Shop origin API failed, using default US', apiError);
        return 'US';
    }
}

async function handleCountrySelection(selectedCode, shopOrigin) {
    if (!selectedCode) return false;
    isInternational = (selectedCode !== shopOrigin);
    scriptReady = true;
    disableCheckoutElements(false);
    return true;
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
    disableCheckoutElements(true, 'Select a country above');

    await domReady();
    fixCartNotificationButton();

    // Original 500ms delay – preserved exactly as you had it
    await new Promise(resolve => setTimeout(resolve, 500));

    // Wait for the checkout button to appear, then insert the country selector
    const countrySelect = await insertCountrySelector();
    if (!countrySelect) {
        console.warn('Could not insert country selector – checkout may stay disabled');
        return;
    }

    const shopOrigin = await getShopOrigin();

    countrySelect.addEventListener('change', async (e) => {
        const selectedCode = e.target.value;
        if (!selectedCode) {
            disableCheckoutElements(true, 'Select a country above');
            scriptReady = false;
            return;
        }
        await handleCountrySelection(selectedCode, shopOrigin);
    });

    observeButtons();

    if (window.location.pathname.endsWith('/cart') || window.location.pathname.endsWith('/cart/')) {
        hideProductOptions();
    }
})();

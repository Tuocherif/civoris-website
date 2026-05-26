/* =========================
   NAVBAR SCROLL
========================= */

window.addEventListener("scroll", () => {

document
.getElementById("navbar")
.classList.toggle(
"scrolled",
window.scrollY > 20
);

});

/* =========================
   TRANSLATIONS
========================= */

let currentLang =
localStorage.getItem("lang") || "en";

/* =========================
   LOAD JSON
========================= */

async function loadTranslations(lang){

try{

const response =
await fetch(`locales/${lang}/translation.json`);

const translations =
await response.json();

applyTranslations(translations, lang);

}
catch(error){

console.error(
"Translation loading error:",
error
);

}

}

/* =========================
   APPLY TRANSLATIONS
========================= */

function applyTranslations(translations, lang){

document.documentElement.lang = lang;

document
.querySelectorAll("[data-i18n]")
.forEach(element => {

const key =
element.getAttribute("data-i18n");

if(translations[key]){

element.textContent =
translations[key];

}

});

updateLanguageButtons(lang);

localStorage.setItem("lang", lang);

}

/* =========================
   UPDATE TOGGLE
========================= */

function updateLanguageButtons(lang){

const flag =
lang === "en"
? "🇬🇧"
: "🇫🇷";

const text =
lang === "en"
? "EN"
: "FR";

document
.querySelectorAll(
"#langToggle, #mobileLangToggle"
)
.forEach(button => {

button.innerHTML = `
<span class="lang-flag">
${flag}
</span>

<span class="lang-text">
${text}
</span>
`;

});

}

/* =========================
   SWITCH LANGUAGE
========================= */

function switchLanguage(){

currentLang =
currentLang === "en"
? "fr"
: "en";

loadTranslations(currentLang);

}

/* =========================
   EVENTS
========================= */

document
.getElementById("langToggle")
.addEventListener(
"click",
switchLanguage
);

document
.getElementById("mobileLangToggle")
.addEventListener(
"click",
switchLanguage
);

/* =========================
   INITIAL LOAD
========================= */

loadTranslations(currentLang);
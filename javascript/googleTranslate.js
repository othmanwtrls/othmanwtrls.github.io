/*
function setCookie(key, value, expiry) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}
*/

function googleTranslateElementInit() {
  //setCookie('googtrans', '/en/es',1);
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

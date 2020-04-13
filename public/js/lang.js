var lang;
var arrLang = {
    'EN': {
        'Pradzia': 'Home',
        'Kultura': 'Culture',
        'LankytinosVietos': 'To visit places',
        'KasVyksta': "What's happening",
        'Saviveiklos': 'Activities',
        'Register': 'Register',
        'Login': 'Login',
        'Logout': 'Logout',
        'Loging': 'Log In',
        'SignUp': 'Login',
        'xmlbtn': 'Show file',
        'info0': 'To see more content you need to log in',
        'info1': 'About Ukrinus',
        'medis': 'Tree'
    },
    'LT': {
        'Pradzia': 'Pradžia',
        'Kultura': 'Kultūra',
        'LankytinosVietos': 'Lankytinos Vietos',
        'KasVyksta': 'Kas Vyksta',
        'Saviveiklos': 'Saviveiklos',
        'Register': 'Registruotis',
        'Login': 'Prisijungti',
        'Logout': 'Atsijungti',
        'Loging': 'Prisijungimas',
        'SignUp': 'Prisiregistruoti',
        'KasVykstaHeader': 'Kas vyksta Ukrinuose',
        'xmlbtn': 'Parodyti failo turinį',
        'info0': 'Kad matytumete kituose puslapiuose esančia informacija turite prisijungti',
        'info1': 'Apie Ukrinus',
        'medis': 'Medis',
        '': '',

    }
};
$(function() {
    $('.language').click(function() {
        localStorage.setItem(lang, $(this).attr('id'))
        window.location.reload()
    });

    $('.menu').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.signup').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-header').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.sign-btn').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-header').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.sign-btn').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.signup').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.xmlparsing').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.mainas').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.text').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
});
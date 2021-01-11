'use strict';

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

const menu = document.querySelector('.menubar');
window.onscroll = function () {
    'use strict';
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
        menu.classList.add("menubar-white-bg");
    }
    else {
        menu.classList.remove("menubar-white-bg");
    }
};

import AOS from 'aos';

$(function() {
     AOS.init ({ 
        offset: 100, 
        duration: 300, 
        easing:"ease", 
        once: true,
        startEvent: 'DOMContentLoaded',

    }); 
    window.addEventListener('load', AOS.refresh); 
});
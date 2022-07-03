import AOS from 'aos';

AOS.init ({ 
    offset: 100,
    delay: 50,
    duration: 300, 
    easing:"ease", 
    once: true,
    startEvent: 'DOMContentLoaded',
    disable: 'mobile',
}); 

AOS.refresh();

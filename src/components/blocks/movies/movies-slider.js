$(function(){
  $('.movies').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,}
            },
            {
                breakpoint: 967,
                settings: {
                    slidesToShow: 4,}
            },
            {
                breakpoint: 676,
                settings: {
                    slidesToShow: 3,}
            },
            {
                breakpoint: 467,
                settings: {
                    slidesToShow: 2,}
            }
        ]
    })
});
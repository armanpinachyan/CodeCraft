const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

AOS.init();

$('.gradient-card-running-line').each((index, elem) => {
    const gradientCardRunningLine = $(elem).text();

    $(elem).text('');

    for (let i = 0; i < gradientCardRunningLine.length - 1; i++) {
        $(elem).append(`<span>${gradientCardRunningLine[i]}</span>`)
    }

    const thisChild = $(elem).children('span');

    let count = 0;
    thisChild.each((index, elemSpan) => count += $(elemSpan).width())

    $(elem).css('width', `${count}px`);
    $(elem).css('animation', `gradient-card-line ${count / 80}s linear`);
    $(elem).css('animation-iteration-count', `infinite`);
    $(elem).css('animation-play-state', `paused`);

})

const slider = $('.rich-commercial-slider');

slider.slick({
    centerMode: true,
    // prevArrow: $('#prev'),
    // nextArrow: $('#next'),
    centerPadding: '450px',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1352,
            settings: {
                centerPadding: '350px',
            }
        },
        {
            breakpoint: 1100,
            settings: {
                centerPadding: '250px',
            }
        },
        {
            breakpoint: 850,
            settings: {
                centerPadding: '150px',
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerPadding: '100px',
            }
        },
        {
            breakpoint: 576,
            settings: {
                centerPadding: '50px',
            }
        },
    ]
});



$(".fix-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "smoth");
    return false;
});


const logo_number = document.querySelector('.logo-number')

window.addEventListener('scroll', (e)=>{
    const scroly = window.scrollY;
    if(scroly >= 10){
        logo_number.classList.remove('active')
    } else if(scroly <= 10){
        logo_number.classList.add('active')
    }
})




//if ($(window).width() <= 768){

//     gsap.registerPlugin(ScrollTrigger);
//
//     gsap.to(".box-compromising", {
//         x: -350,
//         scrollTrigger: {
//             trigger: '.box-compromising',
//             scrub: true,
//             toggleActions: 'play none none none',
//         },
//         duration: 1
//     });
//
//
// }
//
//
//
//     gsap.registerPlugin(ScrollTrigger);
//
//     gsap.to(".gallery-box", {
//         x: -600,
//         duration: 3,
//         scrollTrigger: {
//             trigger: '.gallery-box',
//             scrub: true,
//         },
//         toggleActions : 'play none none none'
//     });
//
//
//     gsap.registerPlugin(ScrollTrigger);
//
//     gsap.to(".gallery-box-prev", {
//         x: 600,
//         duration: 3,
//         scrollTrigger: {
//             trigger: '.gallery-box-prev',
//             scrub: true,
//             end: '200%'
//         },
//         toggleActions : 'onEnter none none none'
//     });
//




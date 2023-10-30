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


// ....... Menu


const menu = document.querySelector('.menu')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const purple = document.querySelector('.purple')

window.onload = () => {
    setTimeout(() => {
        yellow.classList.add('active')
        green.classList.add('active')
        purple.classList.add('active')

        setTimeout(()=>{
            yellow.classList.add('no-trans')
            green.classList.add('no-trans')
            purple.classList.add('no-trans')
        },300)

        const tl = gsap.timeline({ease: "slow", duration: 1})
        document.addEventListener("mousemove", e => {
            gsap.utils.toArray(".circle").forEach(layer => {
                const depth = layer.dataset.depth;
                const moveX = ((e.pageX)-(window.innerWidth/2)) / 3;
                const moveY = ((e.pageY)-(window.innerHeight/2) / 3);
                tl.to(layer, {
                    x: moveX/depth,
                    y: moveY/depth,
                    rotate: 15
                }, 0);
            });
        });
    }, 1500)
}

$(window).height()
console.log($(window).width())

$(window).on('scroll', ()=>{
    const scroly = window.scrollY;
    if(scroly >= 10){
        menu.classList.add('active')
    } else if(scroly <= 10){
        menu.classList.remove('active')
    }
}).scroll()



const choose_green = $('#choose-green').offset().top


ScrollTrigger.create({
    start: `top -${choose_green - 400}`,
    end: 9999,
    toggleClass: {className: 'active', targets: '.choose-green '},
});


const mobileMenBoard = document.querySelector('.mobile-menu-board');
const menuItemMobile = document.querySelector('.menu-item-mobile');
mobileMenBoard.addEventListener('click', function (){
    if(this.classList.contains(active)){
        this.classList.remove(active);
        menuItemMobile.classList.remove(active);
        document.body.style.overflow = null;
    } else {
        this.classList.add(active);
        menuItemMobile.classList.add(active);
        document.body.style.overflow = 'hidden';
    }
})


//. Works

const Works  = [
    {
        name: "Sdney",
        imgUrl: '',
        links: {
            link: 'index.html'
        },
        created: 'HTML CSS JAVASCRIPT'
    },
    {
        name: "Aniox",
        imgUrl: '',
        links: [
            'confirm-email.html',
            'email.html',
            'index.html',
            'finish.html',
            'login.html',
            'new-ticket.html',
            'robo.html',
            'steps.html',
            'ticket.html',
            'ticket-message.html',
            'trial.html',

        ],
        created: 'HTML CSS JAVASCRIPT'
    },
    {
        name: "Lagom",
        imgUrl: '',
        links: [
            'index.html',

        ],
        created: 'HTML CSS JAVASCRIPT'
    },
    {
        name: "Artel",
        imgUrl: '',
        links: [
            'index.html',

        ],
        created: 'HTML CSS JAVASCRIPT'
    },
    {
        name: "Arthall-Synergy",
        imgUrl: '',
        links: [
            'index.html',

        ],
        created: 'HTML CSS JAVASCRIPT'
    },
    {
        name: "RimPlitka",
        imgUrl: '',
        links: [
            'index.html',

        ],
        created: 'HTML CSS JAVASCRIPT'
    },
    {
        name: "Arthall",
        imgUrl: '',
        links: [
            'applications-for-participation.html',
            'art-critic-profile.html',
            'art-critics.html',
            'art-dealer-profile.html',
            'artist-profile.html',
            'dealers.html',
            'exhibition-space-profile.html',
            'index.html',
            'inserts.html',
            'sign-up.html',

        ],
        created: 'HTML SCSS Bootstrap JAVASCRIPT'
    },
    {
        name: "Arthall-Synergy",
        imgUrl: '',
        links: [
            'index.html',

        ],
        created: 'HTML CSS JAVASCRIPT'
    },
    {
        name: "Max-Asfalt",
        imgUrl: '',
        links: [
            'index.html',

        ],
        created: 'HTML CSS JAVASCRIPT'
    },
    {
        name: "Easy Card",
        imgUrl: '',
        links: [
            'index.html',
            'bakai-card.html',
            'freedom-card.html',
            'kazakhstan.html',
            'kirghizia.html',
            'optimal-card.html',

        ],
        created: 'HTML CSS JAVASCRIPT'
    },
    {
        name: "Neural-Network",
        imgUrl: '',
        links: [
            'index.html',
            'widgets.html',
            'Classification-of-skin-diseases.html',
            'contacts.html',
            'Definition-of-baggage-security.html',
            'definition-of-hand-gestures.html',
            'Detection-of-free-parking-spaces.html',
            'fixing-the-movement-of-people.html',
            'neural-network-capabilities.html',
            'recognition-of-emotions-in-photo.html',
            'Removing-people-from-a-video.html',
            'Segmentation-bacteria-under-the-microscope.html',
            'segmentation-of-people-in-the-photo.html',
            'services.html',
            'Trash-detection.html',
            'widget.html'
        ],
        created: 'HTML CSS JAVASCRIPT'
    },
    {
        name: "Kupon",
        imgUrl: '',
        links: [
            'index.html',
            'product.html',
            'sale.html',
        ],
        created: 'HTML CSS JAVASCRIPT'
    },
    {
        name: "Neuron",
        imgUrl: '',
        links: [
            'index.html',
        ],
        created: 'HTML CSS Bootstrap JAVASCRIPT'
    },
    {
        name: "Neuron",
        imgUrl: '',
        links: [
            'index.html',
        ],
        created: 'HTML CSS Bootstrap JAVASCRIPT'
    },
    {
        name: "RosMigrant",
        imgUrl: '',
        links: [
            'index.html',
            'news.html',
            'wiframe.html',
        ],
        created: 'HTML CSS Bootstrap JAVASCRIPT'
    },
    {
        name: "Travel",
        imgUrl: '',
        links: [
            'index.html',
        ],
        created: 'HTML CSS JAVASCRIPT'
    },
]

console.log(Works.length)

// ... End  Works


//... Pages


$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


//... Pages End


// const slider = $('.rich-commercial-slider');
//
// slider.slick({
//     centerMode: true,
//     // prevArrow: $('#prev'),
//     // nextArrow: $('#next'),
//     centerPadding: '450px',
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: true,
//     speed: 1000,
//     autoplay: true,
//     responsive: [
//         {
//             breakpoint: 1352,
//             settings: {
//                 centerPadding: '350px',
//             }
//         },
//         {
//             breakpoint: 1100,
//             settings: {
//                 centerPadding: '250px',
//             }
//         },
//         {
//             breakpoint: 850,
//             settings: {
//                 centerPadding: '150px',
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 centerPadding: '100px',
//             }
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 centerPadding: '50px',
//             }
//         },
//     ]
// });
//
//

// $(".fix-top").click(function() {
//     $("html, body").animate({ scrollTop: 0 }, "smoth");
//     return false;
// });
//
//
// const logo_number = document.querySelector('.logo-number')
//
// window.addEventListener('scroll', (e)=>{
//     const scroly = window.scrollY;
//     if(scroly >= 10){
//         logo_number.classList.remove('active')
//     } else if(scroly <= 10){
//         logo_number.classList.add('active')
//     }
// })




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




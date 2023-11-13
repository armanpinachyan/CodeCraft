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
const yellowMobile = document.querySelector('.yellow-mobile')
const greenMobile = document.querySelector('.green-mobile')
const purpleMobile = document.querySelector('.purple-mobile')

window.onload = () => {
    setTimeout(() => {
        yellow.classList.add('active')
        green.classList.add('active')
        purple.classList.add('active')
        yellowMobile.classList.add('active')
        greenMobile.classList.add('active')
        purpleMobile.classList.add('active')

        setTimeout(()=>{
            yellow.classList.add('no-trans')
            green.classList.add('no-trans')
            purple.classList.add('no-trans')
        },300)
        const tl = gsap.timeline({ease: "slow", duration: 1})
          if(window.innerWidth > 992){

              document.addEventListener("mousemove", e => {
                  gsap.utils.toArray(".circle").forEach(layer => {
                      const depth = layer.dataset.depth * 2;
                      const moveX = ((e.pageX)-(window.innerWidth/2)) / 3;
                      const moveY = ((e.pageY)-(window.innerHeight/2) / 3);
                      tl.to(layer, {
                          x: moveX/depth,
                          y: moveY/depth,
                          rotate: 15
                      }, 0);
                  });

              });
          }
    }, 1500)
}

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

const buttons = gsap.utils.toArray('.etap-work-svg');
buttons.forEach((btn) => {
    gsap.from(btn, {
        scrollTrigger: {
            start: 'top bottom',
            end: 'bottom top',
            trigger: btn,
            toggleClass: 'active'
        }
    });
});


const mobileMenBoard = document.querySelector('.mobile-menu-board');
const menuItemMobile = document.querySelector('.menu-item-mobile');
const menuItemMobileLink = document.querySelectorAll('.menu-item-mobile ul .menu-item-mobile-link');
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

menuItemMobileLink.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(mobileMenBoard.classList.contains(active)){
            mobileMenBoard.classList.remove(active);
            menuItemMobile.classList.remove(active);
            document.body.style.overflow = null;
        } else {
            mobileMenBoard.classList.add(active);
            menuItemMobile.classList.add(active);
            document.body.style.overflow = 'hidden';
        }
    })
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

const tl = gsap.timeline({ease: "slow", duration: 1})
$(window).on('mousemove', function (e){
    gsap.utils.toArray(".calc-images-img").forEach(layer => {
        const depth = layer.dataset.depth * 2;
        const moveX = ((e.pageX)-(window.innerWidth/2)) / 5;
        const moveY = ((e.pageY)-(window.innerHeight/2) / 2);
        tl.to(layer, {
            x: moveX/depth,
            y: moveY/depth / 4,
            rotate: 0
        }, 0);
    });
})
// -------------- FOR DEFAULT INPUT FUNCTION -------------------


const defaultInput = $('.def-input input, .def-input textarea');
const inpLabel = $('.def-input');

defaultInput.on('blur', function (){
    inpLabel.map((index, e) => {
        if($(e).children('input').val() === ''){
            $(e).removeClass(active);
        }
        if($(e).children('textarea').val() === ''){
            $(e).removeClass(active);
        }
    })
})

defaultInput.on('focus', function (){
    $(this).parent().addClass(active);
})




// -------------- FOR DEFAULT INPUT FUNCTION -------------------


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
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 475,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
    ]
});



let $canvas = $('#blob canvas'),
    canvas = $canvas[0],
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        context: canvas.getContext('webgl2'),
        antialias: true,
        alpha: true
    }),
    simplex = new SimplexNoise();

renderer.setSize($canvas.width(), $canvas.height());
renderer.setPixelRatio(window.devicePixelRatio || 1);

let scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(45, $canvas.width() / $canvas.height(), 0.1, 1000);

camera.position.z = 5;

let geometry = new THREE.SphereGeometry(.8, 128, 128);

let material = new THREE.MeshPhongMaterial({
    color: 0xA60EDB,
    shininess: 100,
    opacity: 0.8
});

let lightTop = new THREE.DirectionalLight(0xFFFFFF, .7);
lightTop.position.set(0, 500, 200);
lightTop.castShadow = true;
scene.add(lightTop);

let lightBottom = new THREE.DirectionalLight(0xFF5FFF, .25);
lightBottom.position.set(0, -500, 400);
lightBottom.castShadow = true;
scene.add(lightBottom);

let ambientLight = new THREE.AmbientLight(0x798296);
scene.add(ambientLight);

let sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

let update = () => {

    let time = performance.now() * 0.0005,
        spikes = 0.75;

    for (let i = 0; i < sphere.geometry.vertices.length; i++) {
        let p = sphere.geometry.vertices[i];
        p.normalize().multiplyScalar(1 + 0.3 * simplex.noise3D(p.x * spikes, p.y * spikes, p.z * spikes + time));
    }

    sphere.geometry.computeVertexNormals();
    sphere.geometry.normalsNeedUpdate = true;
    sphere.geometry.verticesNeedUpdate = true;

}

function animate() {
    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;
    update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
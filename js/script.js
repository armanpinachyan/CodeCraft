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
        imgUrl: 'images/Empower-Prosper.png',
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
];


const works_row = document.querySelector('#works-row')

Works.forEach((elem =>{
    works_row.insertAdjacentHTML('beforeend', PrintWorks(elem))

}))


function PrintWorks (elem){
        return (
          `
          <div class="col-md-4 col-sm-6 col-12 mb-30 h-500">
            <div style="background-image: url(${elem.imgUrl})" class="works-box">
              <div class="works-box-pages-link">
                <a class="github-link" href="#">${elem.name}</a>
                <div class="link-box overflow-y-auto">
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                  <a class="link" href="#">index.html</a>
                </div>
                <p class="page-about">HTML5 SCSS JS</p>
              </div>
            </div>
          </div>

`
        )
}


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



// .... language

const flag2 = document.querySelectorAll('.dropdown-flag-body .imgs2')
const flag = document.querySelectorAll('.dropdown-flag-body .imgs')


flag2.forEach((elem, index) =>{
    elem.addEventListener('click', ()=>{
      flag.forEach((el, i) =>{
          if(elem.classList[1] === 'img-am'){
              el.classList.remove('active')
              flag[0].classList.add('active')
          }
          else if(elem.classList[1] === 'img-ru'){
              el.classList.remove('active')
              flag[1].classList.add('active')
          }
          else if(elem.classList[1] === 'img-en'){
              el.classList.remove('active')
              flag[2].classList.add('active')
          }
      })
    })
})

const translateKeys = [
    {
        key: 'about',
        am: 'Մեր Մասին',
        ru: `О нас`,
        en: `About`
    },
    {
        key: 'works',
        am: 'Մեր Աշխատանքները',
        ru: `Наши работы`,
        en: `english`
    },
    {
        key: 'contact',
        am: 'Կապ',
        ru: 'Контакт',
        en: `Contact`
    },
    {
        key: 'services',
        am: 'Ծառայություններ',
        ru: 'Услуги',
        en: `Services`
    },
    {
        key: 'calc',
        am: 'Հաշվիչ',
        ru: `Калькулятор`,
        en: 'Calculator'
    },
    {
        key: 'pages',
        am: 'Գործընկերներ',
        ru: 'коллеги',
    },
    {
        key: 'header_title',
        am: 'Վեբ Կայքերի Պատրաստում',
        ru: 'Подготовка Веб-Сайтов'
    },
    {
        key: 'key_2',
        am: `Ունեցիր քո կայքը, քո սեփական բիզնեսի համար, և ավելցրու քո եկամուտը.
             <br><br>
             Ցանկացած ժամանակակից բիզնես պետքե ունենա իր կայքը քանի որ այն կարող է եկամուտի մէջ մեծ տարբերություն տալ
        `,
        ru: `Имейте собственный сайт для своего бизнеса.
              и увеличивайте свой доход.
                <br><br>
              Любой современный бизнес должен иметь свой сайт
              потому что,это может существенно повлиять на доход.`
    },
    {
        key: 'btn-header1',
        am: `Կապ մեզ հետ
           <i class="fa-solid fa-phone ps-10"></i>`,
        ru: `Связаться с нами
        <i class="fa-solid fa-phone ps-10"></i>
        `,
    },
    {
        key: 'head1',
        am: `Ինչու ընտրել մեզ`,
        ru: 'Почему выбирают нас',
    },
    {
        key: 'p1',
        am: `<span>Նորարարություն և ստեղծագործականություն.</span> Մենք ստեղծում ենք ժամանակակից վեբ
                նախագծեր և կրթական ծրագրեր, որոնք միշտ մեկ քայլ առաջ են միտումներից:`,
        ru: `
        <span>Инновации и творчество.</span> Мы создаем современные веб-проекты и образовательные
         программы, которые всегда на шаг впереди тенденций.
        `,
        en: `English`
    },
    {
        key: 'p2',
        am: `<span>Պրոֆեսիոնալ թիմ.</span> Մեր փորձառու մշակողները և հրահանգիչները
                ապահովում են ամենաբարձր մակարդակի գիտելիքներն ու հմտությունները:`,
        ru: `
        <span>Профессиональная команда.</span> Наши опытные разработчики и преподаватели обеспечивают высочайший уровень знаний и навыков.
        `,
        en: `English`
    },
    {
        key: 'p3',
        am: `<span>Գործնական փորձ.</span> Սովորել անելով: Ուսանողները լուծում են իրական խնդիրներ՝
                պատրաստվելով հաջող կարիերայի։`,
        ru: `
        <span>Практический опыт.</span>
         Обучение в процессе работы. Студенты решают реальные проблемы, готовясь к успешной карьере.
        `,
        en: `English`
    },
    {
        key: 'p4',
        am: `<span>Ճկունություն և անհատականություն.</span> Մեր ծրագրերը հարմար են հմտությունների բոլոր մակարդակների
                համար, և ճկուն գրաֆիկները
                հարմարեցված են ձեզ համապատասխան:`,
        ru: `
        <span>Гибкость и индивидуальность.</span>
         Наши программы подходят для всех уровней квалификации, а гибкий график специально разработан для вас.
        `,
        en: `English`
    },
    {
        key: 'p5',
        am: `<span>Ոգեշնչող համայնք. </span> Դուք դառնում եք ակտիվ համայնքի մի մասը, որտեղ ձեր
                գաղափարները աջակցվում են:`,
        ru: `
        <span>Вдохновляющее сообщество.</span>
         Вы становитесь частью активного сообщества, где ваши идеи поддерживаются.
        `,
        en: `English`
    },
    {
        key: 'p6',
        am: `<span>Իրական արդյունքներ</span> շրջանավարտները հաջողությամբ կիրառում են գիտելիքները
                սկսելով կարիերա ՏՏ ոլորտում կամ սկսելով իրենց սեփական նախագծերը:`,
        ru: `
        <span>Реальные результаты. </span>
         выпускники успешно применяют полученные знания, чтобы начать карьеру в сфере SS или запустить собственные проекты
        `,
        en: `English`
    },
    {
        key: 'p7',
        am: `Միացե՛ք մեզ և դարձե՛ք հաջողության մի մասը վեբ մշակման և ՏՏ ոլորտում:`,
        ru: 'Присоединяйтесь к нам и станьте частью успеха в веб-разработке и SS.',
        en: `English`
    },
    {
        key: 'head2',
        am: `ՄԵՐ ԱՇԽԱՏԱՆՔՆԵՐԸ `,
        ru: 'НАШИ РАБОТЫ',
        en: "English"
    },
    {
        key: 'btn2',
        am: `Տեսնել Ավելին`,
        ru: 'Посмотреть больше',
        en: "English"
    },
    {
        key: 'head3',
        am: `ԿՈՆՏԱԿՏԱՅԻՆ ՏՎՅԱԼՆԵՐ`,
        ru: 'КОНТАКТЫ',
        en: "English"
    },
    {
        key: 'name',
        am: `ԱՆԴՐԱՆԻԿ ԹՈՐԳՈՄՅԱՆ`,
        ru: 'Андраник Торгомян ',
        en: "Andranik Torgomyan"
    },
    {
        key: 'head4',
        am: `Կայքը ըստ փուլերի`,
        ru: 'Сайт по этапам',
        en: "English"
    },
    {
        key: 'head5',
        am: `Մեր ծառայությունները`,
        ru: 'Наши сервисы',
        en: "English"
    },
    {
        key: 'head6',
        am: `ՀԱՇՎԻՉ`,
        ru: 'КАЛЬКУЛЯТОР',
        en: "English"
    },
    {
        key: 'calc-h3',
        am: ` Խնդրում եմ լրացրեք տվյալները`,
        ru: 'Пожалуйста, заполните информацию',
        en: "English"
    },
    {
        key: 'calc-sp1',
        am: `Ձեր Անունը`,
        ru: 'Ваше имя',
        en: "English"
    },
    {
        key: 'calc-sp2',
        am: `Հեռախոսահամար`,
        ru: 'Номер телефона',
        en: "English"
    },
    {
        key: 'calc-sp3',
        am: `Նկարագրություն`,
        ru: 'Описание',
        en: "English"
    },
    {
        key: 'calc-btn',
        am: `
        Ուղղարկել
        <i class="fa-regular fa-paper-plane ms-2"></i>`,
        ru: `Отправлять
        <i class="fa-regular fa-paper-plane ms-2"></i>
        `,
        en: "English"
    },
    {
        key: 'head7',
        am: `ՄԵԶ ՎՍՏԱՀՈՒՄ ԵՆ`,
        ru: 'НАМ ДОВЕРЯЮТ',
        en: "English"
    },
]

const elmTranslate = document.querySelectorAll('.tr-site');



function translateSite(isoCode){
    elmTranslate.forEach((item) => {
        const getKey = item.dataset.key;
        if(getKey){
            const getKeyTranslate = translateKeys.find((tr) => tr.key === getKey);

            if(getKeyTranslate){
                item.innerHTML = getKeyTranslate[isoCode]
            } else {
                console.error('No key for translateKeys Array');
            }
        } else {
            console.error('No Data Key');
        }
    })
}

function Request(url, option = {}){
    return fetch(url, option).then((res) => res.json());
}

Request('https://ipapi.co/json').then((res) => {
    console.log(res?.country_code)
    translateSite(res.country_code.toLowerCase());
})
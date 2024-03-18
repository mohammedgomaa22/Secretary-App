
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


// ********** Swiper Images **********
const swiperJS = () => {
    const swiper = new Swiper( '.swiper-container.two', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows : false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }         
    } );
};
swiperJS();
// -------------------------------------


// ********** Scroll Sections **********
const scrollSections = () => {
    // Start Variables
    // variables To Scroll To Top
    let sectionSt = document.querySelector("#stats"),
        textNum = document.querySelectorAll("#stats .num"),
        started = false;
    // End Variables
        // ------------------
    // Start Coding
    function startCount(ele) {
        let num = ele.dataset.number;
        let count = setInterval(() => {
            ele.textContent++;
            if (ele.textContent == num) {
                clearInterval(count);
            }
        }, 1800 / num);
    };
    // End Coding
        // ------------------
    // Start All Scrolling
    window.onscroll = () => {
        // Scroll To Stats
        if (window.scrollY >= sectionSt.offsetTop - 300) {
            if (!started) {
                textNum.forEach((text) => startCount(text));
            }
            started = true;
        };
    };
    // End All Scrolling
};
scrollSections();

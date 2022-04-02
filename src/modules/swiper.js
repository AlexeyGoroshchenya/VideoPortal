import Swiper, { Autoplay } from 'swiper';

export const swiper = () => {

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1.4,
        spaceBetween: 37,
        centeredSlides: true,
        loop: true,
        modules: [Autoplay],
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
            //  stopOnLastSlide: false,
        },

        /*
                breakpoints: {
                    576: {
                        slidesPerView: 3,
                    }
                }
        */
    }
    );



}


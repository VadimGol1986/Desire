"use strict"

//-------Rightside-menu
document.addEventListener("click", documentActions);
function documentActions(e) {
    const targetElement = e.target;
        if (targetElement.classList.contains ('header__btn--icon')) {
            document.querySelector('.rightside-menu').classList.remove('rightside-menu--close');
            }
        if (targetElement.classList.contains ('rightside-menu__close--icon')) {
                document.querySelector('.rightside-menu').classList.add('rightside-menu--close');
            }   
    }
//-------Slider
    if (document.querySelector('.top__slider')) {
        const swiper = new Swiper('.swiper', {
            /*direction: 'horizontal',*/
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            /*navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },*/
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            spaceBetween: 50,
            watchOverflow: true,
            speed: 800,
            loopAdditionalSlides: 5,
            preloadImages: false,
            parallax: true,

            /*navigation: none, */
            
            /*mousewheel: {
                sensitivity: 1,
                eventsTarget: ".page__main-slider",
            }*/
        });
    }

    //-------Contact Slider 
    if (document.querySelector('.contact__slider')) {
        const swiper = new Swiper('.swiper', {
            /*direction: 'horizontal',*/
            loop: true,
            pagination: {
                el: '.contact__pagination',
                clickable: true,
              },
            /*navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },*/
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            spaceBetween: 50,
            watchOverflow: true,
            speed: 800,
            loopAdditionalSlides: 5,
            preloadImages: false,
            parallax: true,

            /*navigation: none, */
            
            /*mousewheel: {
                sensitivity: 1,
                eventsTarget: ".page__main-slider",
            }*/
        });
    }



    if (document.querySelector('.gallery__inner')) {
    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
    });
}


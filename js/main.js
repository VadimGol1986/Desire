"use strict"

//-------Rightside-menu
document.addEventListener("click", documentActions);
function documentActions(e) {
    const targetElement = e.target;
    const buttonMenu = targetElement.parentElement;
    console.log(targetElement);
        if (targetElement.classList.contains ('header__btn--icon')) {
            document.querySelector('.rightside-menu').classList.remove('rightside-menu--close');
            }
        if (targetElement.classList.contains ('rightside-menu__close--icon')) {
                document.querySelector('.rightside-menu').classList.add('rightside-menu--close');
            }  

        if (buttonMenu.classList.contains ('header__btn-menu')) {
            let menuItems = document.querySelectorAll('.menu');
            for (let i = 0; i < menuItems.length; i++) {
               menuItems[i].classList.toggle('menu--open');
            } 
            }


    }

    /*document.addEventListener("click", documentActions);
    function documentActions(e) {
        const targetElement = e.target;
        const buttonMenu = targetElement.parentElement;
        console.log(targetElement);
        console.log(buttonMenu);
            if (buttonMenu.classList.contains ('header__btn-menu')) {
                document.querySelector('.menu').classList.toggle('menu--open');
                }
        }*/







//-------Slider
    if (document.querySelector('.top__inner')) {
        const swiper = new Swiper('.top__inner', {
            /*direction: 'horizontal',*/
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                grabCursor: true,
                navigation: false,
              },
            /*navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              slidesPerView: 1,
            observer: true,
            observeParents: true,*/
            /* slidesPerView: 1,
            observer: true,
            observeParents: true,
            spaceBetween: 50,
            watchOverflow: true,
            speed: 800,
            loopAdditionalSlides: 5,
            preloadImages: false,
            parallax: true,*/

            /*navigation: none, */
            
            /*mousewheel: {
                sensitivity: 1,
                eventsTarget: ".page__main-slider",
            }*/
        });
    }

    //-------Contact Slider 
    if (document.querySelector('.contact__slider')) {
        const swiper2 = new Swiper('.contact__slider', {
            loop: true,
            pagination: {
                el: '.contact__pagination',
                clickable: true,
              },
        });
    }

        //-------Article Slider 
        if (document.querySelector('.article-slider__swiper')) {
            const swiper2 = new Swiper('.article-slider__swiper', {
                loop: true,
                navigation: {
                nextEl: '.article-button-next',
                prevEl: '.article-button-prev',
                slidesPerView: 1,
              },
        });
    }



    if (document.querySelector('.gallery__inner')) {
    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
    });
}


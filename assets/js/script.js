/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    "use strict";

    if( $('.vertical-slider').length != 0 ) {
        const swiper = new Swiper('.vertical-slider', {
            // Optional parameters
            direction: 'horizontal',
            // loop: true,

            breakpoints: {
                0: {

                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
            },
    
            // Navigation arrows
            navigation: {
                nextEl: '.vertical-arrows .swiper-button-next',
                prevEl: '.vertical-arrows .swiper-button-prev',
            },
        });
    }

    if( $('.normal-slider').length != 0 ) {
        const swiper = new Swiper('.normal-slider', {
            // Optional parameters
            direction: 'horizontal',
            // loop: true,

            breakpoints: {
                0: {

                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 30,
                },
            },
    
            // Navigation arrows
            navigation: {
                nextEl: '.normal-arrows .swiper-button-next',
                prevEl: '.normal-arrows .swiper-button-prev',
            },
        });
    }

    if( $('.normal-slider1').length != 0 ) {
        const swiper = new Swiper('.normal-slider1', {
            // Optional parameters
            direction: 'horizontal',
            // loop: true,

            breakpoints: {
                0: {

                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 30,
                },
            },
    
            // Navigation arrows
            navigation: {
              nextEl: '.normal-arrows1 .swiper-button-next',
              prevEl: '.normal-arrows1 .swiper-button-prev',
            },
        });
    }

    if( $('.bundle-slider').length != 0 ) {
        const swiper = new Swiper('.bundle-slider', {
            // Optional parameters
            direction: 'horizontal',
            // loop: true,

            breakpoints: {
                0: {

                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 40,
                },
            },
        });
    }

});


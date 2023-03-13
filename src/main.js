import './styles/all.scss'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import TweenMax from "gsap/all"
import { Power2, Elastic, CSSPlugin, Expo } from "gsap/all"
import Swiper from 'swiper/bundle'
import 'swiper/css'
import './vanilla-tilt.js'

gsap.registerPlugin(ScrollTrigger, TweenMax);

window.onload = function () {
    TweenMax.to('.overlay-logo', 1.5, {
        delay: 0,
        y: 0,
        ease: Expo.easeInOut
    })

    TweenMax.to('.overlay-logo', 1.5, {
        delay: 2,
        y: -100,
        ease: Expo.easeInOut
    })

    TweenMax.to('.firts', 1.5, {
        delay: .7,
        height: "0%",
        ease: Expo.easeInOut
    })

    TweenMax.to('.second', 1.5, {
        delay: .9,
        height: "0%",
        ease: Expo.easeInOut
    })

    TweenMax.to('.third', 1.5, {
        delay: 1.1,
        height: "0%",
        ease: Expo.easeInOut
    })


    TweenMax.to('.four', 1.5, {
        delay: 1.3,
        height: "0%",
        ease: Expo.easeInOut
    })

    TweenMax.to('.five', 1.5, {
        delay: 1.5,
        height: "0%",
        ease: Expo.easeInOut
    })


    TweenMax.to('.six', 1.5, {
        delay: 1.7,
        height: "0%",
        ease: Expo.easeInOut
    })
}

VanillaTilt.init(document.querySelectorAll(".home__content-wrapper"), {
	max: 2,
	speed: 100,
	reverse: true,
    transition: true,
});

        
// Clone Element Carousel
function carouselGallery() {
    let track = document.querySelectorAll(".gallery__item-wrapper");
    let list = document.querySelectorAll(".gallery__item-track");
    let list01;
    let list02;
    let list03;
    let list04;
    let list05;

    const width = list[0].offsetWidth;

    function clone01() {
        list01 = list[0].cloneNode(true);
        track[0].appendChild(list01);
    }

    // function clone02() {
    //     list02 = list[1].cloneNode(true);
    //     track[1].appendChild(list02);
    //   }

    //   function clone03() {
    //     list03 = list[2].cloneNode(true);
    //     track[2].appendChild(list03);
    //   }

    //   function clone04() {
    //     list04 = list[3].cloneNode(true);
    //     track[3].appendChild(list04);
    //   }

    //   function clone05() {
    //     list05 = list[4].cloneNode(true);
    //     track[4].appendChild(list05);
    //   }

    clone01();
    // clone02();
    // clone03();
    // clone04();
    // clone05();
};

function carouselPrepods() {
    function cloneItem() {
        let list = document.querySelector(".prepods__item-content");
        let track = document.querySelector(".prepods__item-track");
        let list2;

        const width = list.offsetWidth;

    list2 = list.cloneNode(true);
    track.appendChild(list2);
    list2.style.left = `${width + 25}px`;
    }

    function cloneUnderItem() {
        let list = document.querySelector(".prepods__under-block");
        let track = document.querySelector(".prepods__under-track");
        let list2;
    
        const width = list.offsetWidth;
    
        list2 = list.cloneNode(true);
        track.appendChild(list2);
        list2.style.left = `${width + 25}px`;
    }

    cloneItem();
    cloneUnderItem()
};

function carouselComment() {
    let list = document.querySelector(".comment__item-block");
    let track = document.querySelector(".comment__item-track");
    let list2;

    const width = list.offsetWidth;

    function clone() {
    list2 = list.cloneNode(true);
    track.appendChild(list2);
    list2.style.left = `${width + 25}px`;
    }

    clone();
};

carouselGallery();
carouselPrepods();
carouselComment();

  document.addEventListener('DOMContentLoaded', () => {
    const widthS = window.innerWidth;
    console.log(widthS)
    if (widthS > 500){
        
        function carouselCourse() {
            let list = document.querySelector(".course__item-content");
            let track = document.querySelector(".course__item-track");
            let list2;
        
            const width = list.offsetWidth;
        
            function clone() {
            list2 = list.cloneNode(true);
            track.appendChild(list2);
            list2.style.left = `${width + 0}px`;
            }
        
            clone();
        };

        
        carouselCourse();

    }
  })
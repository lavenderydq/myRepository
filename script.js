/**
 * Created by Lzhang on 2017/12/11.
 */
import Swiper from '../../../static/js/swiper-4.1.0.min.js'
import axios from 'axios'
export default {
    name: 'swiper',
    props: ["banners", "flag", "detailImages", "gamebanners"],
    data() {
    return {
        // isInstall:true
        isInstall: false,
        gameId:'',
    }
},
watch: {
    example:'getBanners'
    //// console.log('123',example)
},
mounted() {
    const _this = this
    this.$nextTick(() => {
        _this.getBanners()
})

},
methods: {
    getBanners() {
        this.$nextTick(() => {
            if (this.flag == 2) {
            setTimeout(()=>{
                var pageGame=new Swiper('.page-game',{
                    observer:true,
                    observeParents:true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    autoplay: {
                        // stopOnLastSlide: true,
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                })
            },1000)
        }else if (this.flag == 3) {
            //var galleryTop = new Swiper('.gallery-top', {
            //    //on:{
            //    //    slideChange: function(){
            //    //
            //    //    },
            //    //},
            //    spaceBetween: 10,
            //    //loop: true,
            //    //loopedSlides: 5,
            //    pagination: {
            //        el: '.swiper-pagination',
            //        clickable: true
            //    },
            //    autoplay: {
            //        stopOnLastSlide: true,
            //        delay: 2000,
            //        disableOnInteraction: false,
            //    },
            //    //looped slides should be the same
            //    //navigation: {
            //    //    nextEl: '.swiper-button-next',
            //    //    prevEl: '.swiper-button-prev',
            //    //},
            //});
            //var galleryThumbs = new Swiper('.gallery-thumbs', {
            //    spaceBetween: 10,
            //    //touchRatio: 0.2,
            //    //loop: true,
            //    // loopedSlides: 4, //looped slides should be the same
            //    slideToClickedSlide: false,
            //    centeredSlides: true,
            //    slidesPerView: 5,
            //    //navigation: {
            //    //    nextEl: '.swiper-button-next',
            //    //    prevEl: '.swiper-button-prev',
            //    //},
            //});
            //$('.swiper-button-next').on('click', function () {
            //    if (galleryTop.realIndex === galleryTop.slides.length - 1){
            //        galleryTop.slideTo(0)
            //        //galleryThumbs.slideTo(0)
            //        galleryThumbs.slidePrev()
            //    } else {
            //        galleryTop.slideTo(galleryTop.realIndex + 1)
            //        galleryThumbs.slideTo(galleryTop.realIndex)
            //    }
            //})
            //$('.swiper-button-prev').on('click', function () {
            //    if (galleryTop.realIndex === 0){
            //        galleryTop.slideTo(galleryTop.slides.length)
            //        galleryThumbs.slideTo(galleryTop.slides.length)
            //    } else {
            //        galleryTop.slideTo(galleryTop.realIndex - 1)
            //        galleryThumbs.slideTo(galleryTop.realIndex)
            //    }
            //})
            ////var timer1;
            ////var timer2;
            ////clearTimeout(timer1)
            //    //galleryTop.on('slideChange', function() {
            //    //    timer1 = setTimeout(function () {
            //    //        var imgNum = galleryTop.slides.length/2
            //    //        //console.log(galleryTop.activeIndex)
            //    //        if(galleryTop.realIndex > imgNum){
            //    //            galleryThumbs.slideTo(0)
            //    //        } else {
            //    //            galleryThumbs.slideTo(galleryTop.realIndex)
            //    //        }
            //    //    },20)
            //    //})
            //galleryTop.on('slideChange', function() {
            //    if(galleryTop.realIndex === galleryTop.slides.length - 1){
            //        galleryThumbs.slideTo(galleryTop.realIndex)
            //        let timer;
            //        clearTimeout(timer)
            //        timer = setTimeout(function () {
            //            galleryTop.slideTo(0)
            //            galleryThumbs.slideTo(0)
            //        }, 2000)
            //    } else {
            //        galleryThumbs.slideTo(galleryTop.realIndex)
            //    }
            //})
            //galleryThumbs.on('click', function() {
            //    galleryTop.slideTo(galleryThumbs.realIndex)
            //})
            ////clearTimeout(timer2)
            //    //galleryThumbs.on('click', function() {
            //    //    timer2 = setTimeout(function () {
            //    //        console.log(galleryThumbs.realIndex)
            //    //        galleryTop.slideTo(galleryThumbs.realIndex)
            //    //    }, 20)
            //    //})
            setTimeout(()=>function(){
                var galleryTop = new Swiper('.gallery-top', {
                    spaceBetween: 10,
                    loop:true,
                    autoplay: {
                        delay: 3000,
                    },
                    loopedSlides: 5, //looped slides should be the same
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },

                });
            },1000)

        } else if (this.flag == 1) {
            setTimeout(()=>{
                var gameImg = new Swiper('.game-img', {
                    observer:true,
                    observeParents:true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    loop: true,

                    navigation: {
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    },
                });
            },1000)
        } else if(this.flag == 4){
            setTimeout(()=>{
                var gameBanner = new Swiper('.game-banner4', {
                    observer:true,
                    observeParents:true,
                    autoplay: {
                        delay: 8000
                    },
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 5,
                });
            },2000)
        }else if(this.flag == 5){
            setTimeout(()=>{
                var gameBanner = new Swiper('.game-banner5', {
                    observer:true,
                    observeParents:true,
                    autoplay: {
                        delay: 8000
                    },
                    loop: true,
                    //loopFillGroupWithBlank: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 5,
                });
            },2000)
        }else if(this.flag==6){
           setTimeout(()=>{
               var gameBanner = new Swiper('.game-banner6', {
                   observer:true,
                   observeParents:true,
                   autoplay: {
                       delay: 8000
                   },
                   loop: true,
                   navigation: {
                       nextEl: '.swiper-button-next',
                       prevEl: '.swiper-button-prev'
                   },
                   slidesPerView: 4,
                   slidesPerGroup: 4,
                   spaceBetween: 5,
               });
           },2000)
        }
    })
},
goDetails(id){
    //ÂÖ²¥Í¼Ìø×ªÏêÇé
    this.$router.push({name: 'details', query: {id: id}})
   // this.$router.push({name: 'details', query: {id: 1}})
    console.log(id,'123456')
},
twoSwiper(c) {
    return 'url(' + c + ') no-repeat center center'
}
},
created() {
  this.getBanners()
}
}
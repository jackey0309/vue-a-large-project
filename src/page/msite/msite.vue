<template>
    <div>
       <header id="head_top">
           <a href="#" class="link_search">
                <svg  width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <circle  cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none">
                </circle> 
                <line  x1="14" y1="14" x2="20" y2="20" style="stroke: rgb(255, 255, 255); stroke-width: 2;"></line>
                </svg>
            </a> 
            <a href="" class="head_login">
                <span class="login_span">登录|注册</span>
            </a>
            <a href="" class="msite_title">
                <span class="title_text ellipsis">
                    江岸区武汉市第十六中学(友益街西)
                </span>
            </a>
       </header>
       <nav class="msite_nav">
            <div class="swiper-container swiper-container-horizontal">
                <div class="swiper-wrapper">
                    <div class="swiper-slide food_types_container">
                        <a href="" class="link_to_food">
                            <figure>
                                <img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                                <figcaption>川湘菜</figcaption>
                            </figure>  
                        </a>
                         <a href="" class="link_to_food">
                            <figure>
                                <img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                                <figcaption>川湘菜</figcaption>
                            </figure>  
                        </a>
                         <a href="" class="link_to_food">
                            <figure>
                                <img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                                <figcaption>川湘菜</figcaption>
                            </figure>  
                        </a>
                         <a href="" class="link_to_food">
                            <figure>
                                <img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                                <figcaption>川湘菜</figcaption>
                            </figure>  
                        </a>
                         <a href="" class="link_to_food">
                            <figure>
                                <img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                                <figcaption>川湘菜</figcaption>
                            </figure>  
                        </a>
                         <a href="" class="link_to_food">
                            <figure>
                                <img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                                <figcaption>川湘菜</figcaption>
                            </figure>  
                        </a>
                         <a href="" class="link_to_food">
                            <figure>
                                <img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                                <figcaption>川湘菜</figcaption>
                            </figure>  
                        </a>
                         <a href="" class="link_to_food">
                            <figure>
                                <img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg" alt="">
                                <figcaption>川湘菜</figcaption>
                            </figure>  
                        </a>
                        
                    </div>
                </div> 
                <div class="swiper-pagination swiper-pagination-bullets  ">
                    <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                     <span class="swiper-pagination-bullet"></span>
                    </div>       
            </div>                                    
       </nav>
       
    </div>
</template>

<script>
import Swiper from 'swiper';
import '../../../node_modules/swiper/dist/css/swiper.min.css';
export default {
    mounted(){
        new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        loop: true
		    });
    }
    }
</script>

<style lang="scss" scoped>

    #head_top{
        background-color: #3190e8;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100%;
        height: 1.95rem;
    }
    .link_search{
        left: .8rem;
        width: .9rem;
        height: .9rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .head_login{
        right: .55rem;
        font-size: .65rem;
        color: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        .login_span{
            color: #fff;
        }
    }
    .msite_title{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 50%;
        color: #fff;
        text-align: center;
        margin-left: -.5rem;
    }
    .title_text{    
        font-size: .8rem;
        color: #fff;
        text-align: center;
        display: block;
    }
    .msite_nav{
        padding-top: 2.1rem;
        background-color: #fff;
        border-bottom: .025rem solid #e4e4e4;
        height: 10.6rem;
        .swiper-container{
            width: 100%;
            height: auto;
            padding-bottom: .6rem;
        }
    }
    .food_types_container{
        display: flex;
        flex-wrap: wrap;
        .link_to_food{
            width: 25%;
            padding: .3rem 0;
            display: flex;
            justify-content: center;
                figure{
                    img{
                        margin-bottom: .3rem;
                        width: 1.8rem;
                        height: 1.8rem;
                            }
                } 
                figcaption{
                    text-align: center;
                    font-size: .55rem;
                    color: #666;
                    }
            }
        }   
</style>
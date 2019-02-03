<template>
    <div>
        <head-top>

        </head-top>
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位城市：</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
            <a href="#" class="guess_city">
                <span>武汉</span> 
                <svg class="arrow_right">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                </svg>
            </a>
        </nav> 
        <section id="hot_city_container">
            <h4 class="city_title">热门城市</h4>
            <ul class="citylistul clear">
                <li>上海</li>
                <li>哈尔滨</li>
                <li>南京</li>
                <li>广州</li>
                <li>厦门</li>
                <li>杭州</li>
                <li>天津</li>
                <li>青岛</li>        
            </ul>
        </section>
        <section class="group_city_container">
            <ul class=letter_classify>
                <li class="letter_classify_li">
                    <h4 class="city_title">
                        A
                        <span>（按字母排序）</span>
                    </h4>
                    <ul class="groupcity_name_container citylistul clear">
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆安庆安庆安庆安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                    </ul>
                </li>
                 <li class="letter_classify_li">
                    <h4 class="city_title">
                        B
                        <span>（按字母排序）</span>
                    </h4>
                    <ul class="groupcity_name_container citylistul clear">
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                    </ul>
                </li>
                 <li class="letter_classify_li">
                    <h4 class="city_title">
                        C
                        <span>（按字母排序）</span>
                    </h4>
                    <ul class="groupcity_name_container citylistul clear">
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                    </ul>
                </li>
                 <li class="letter_classify_li">
                    <h4 class="city_title">
                        D
                        <span>（按字母排序）</span>
                    </h4>
                    <ul class="groupcity_name_container citylistul clear">
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                        <li href="#" class="ellipsis">安庆</li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import headTop from '../../components/header/head'
export default {
    name: 'home',
    components:{
        headTop
    }
    
}
</script>
    

<style lang="scss" scoped>
    @import '../../style/mixin';
    .city_nav{
        padding-top: 2.35rem;
        border-top: 1px solid #e4e4e4;
        background-color: #fff;
        margin-bottom: 0.4rem;
        .city_tip{
            display: flex;
            justify-content: space-between;
            line-height: 1.45rem;
            padding: 0 0.45rem;
            span:nth-of-type(1){
                font-size: 0.55rem;
                color: #666;
            }
            span:nth-of-type(2){
                font-weight: 900;
                font-size: 0.475rem;
                color: #9f9f9f;
            }
                }
        .guess_city{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1.8rem;
            padding: 0 0.45rem;
            border-top: 1px solid #e4e4e4;
            border-bottom: 2px solid #e4e4e4;
            font-size: 0.75rem;
            line-height: 1.8rem;
            font-family: "Microsoft YaHei";
            span:nth-of-type(1) {
                color: #3190e8;
                }    
            .arrow_right{
                width: 0.6rem;
                height: 0.6rem;
                fill: #999;
                    }
        }   
    }
    #hot_city_container{
        background-color: #fff;
        margin-bottom: 0.4rem;
    }
    .city_title{
        color: #666;
        font-weight: 400;
        text-indent: 0.45rem;
        border-top: 2px solid $bc;
        border-bottom: 1px solid $bc;
        @include font(0.55rem, 1.45rem, "Helvetica Neue");
        span{
            @include sc(0.475rem,#999);
        }
    }
    .citylistul{
        li{
            float: left;
            text-align: center;
            color: $blue;
            border-bottom: 0.025rem solid $bc;
            border-right: 0.025rem solid $bc;
            @include wh(25%,1.75rem);
            @include font(0.6rem, 1.75rem);
        }
        li:nth-of-type(4n){
            border-right: none;
        }
    }
    .letter_classify_li{
        margin-bottom: .4rem;
        background-color: #fff;
        border-bottom: 1px solid $bc;
        .groupcity_name_container li {
            color: #666;
        }
    } 
    
</style>


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
       
</style>


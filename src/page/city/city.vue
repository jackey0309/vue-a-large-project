<template>
    <div class="city_container">
        <header id='head_top'>
            <section class='head_goback'>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
            </section>
            <section class="title_head ellipsis">
                <span class="title_text">武汉</span>
            </section>
            <a  href="#/home" class="change_city" >切换城市</a>
        </header>
        <form class="city_form">
            <div>
                <input type="search" name="city" placeholder="输入学校,商务楼,地址" required="required" class="city_input input_style" v-model='inputVaule'>
            </div>
             <div>
                <input type="submit" name="submit" value="提交" class="city_submit input_style" @click='postpois'>
            </div>
        </form>

        <header v-if="historytitle" class="pois_search_history">搜索历史</header>
        <ul class="getpois_ul" v-show='inputVaule'>
            <li @click='nextpage'>
                <h4 class="pois_name ellipsis">武汉市第十六中学</h4>
                <p class="pois_address ellipsis">湖北省武汉市江岸区第十六中学东南(中山大道西)</p>
            </li>
             <li>
                <h4 class="pois_name ellipsis">武汉市第十六中学</h4>
                <p class="pois_address ellipsis">湖北省武汉市江岸区第十六中学东南(中山大道西)</p>
            </li>
             <li>
                <h4 class="pois_name ellipsis">武汉市第十六中学</h4>
                <p class="pois_address ellipsis">湖北省武汉市江岸区第十六中学东南(中山大道西)</p>
            </li>
             <li>
                <h4 class="pois_name ellipsis">武汉市第十六中学</h4>
                <p class="pois_address ellipsis">湖北省武汉市江岸区第十六中学东南(中山大道西)</p>
            </li>
             <li>
                <h4 class="pois_name ellipsis">武汉市第十六中学</h4>
                <p class="pois_address ellipsis">湖北省武汉市江岸区第十六中学东南(中山大道西)</p>
            </li>
             <li>
                <h4 class="pois_name ellipsis">武汉市第十六中学</h4>
                <p class="pois_address ellipsis">湖北省武汉市江岸区第十六中学东南(中山大道西)</p>
            </li>

        </ul>
       
    </div>
</template>

<script>

export default {
    data(){
        return{
            inputVaule:'', //搜索地址
            historytitle: true, // 默认显示搜索历史头部，点击搜索后隐藏
        }
    },
    methods:{
        //发送搜索信息inputVaule
        postpois(){
            if (this.inputVaule) {
                    this.historytitle = false;
                }
            },
        nextpage(){
            this.$router.push({path:'/msite'})
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .city_container{
        padding-top: 2.35rem;
    }
    #head_top{
        background-color: #3190e8;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100%;
        height: 1.95rem;
        }
    .head_goback{
        left: 0.4rem;
        width: 0.6rem;
        height: 1rem;
        line-height: 2.2rem;
        margin-left: .4rem;
    }
    .title_head{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
        .title_text{
            font-size: 0.8rem;
            color: #fff;
            text-align: center;
            font-weight: bold;
        }      
    }
    .change_city{
        right: 0.4rem;
        font-size: 0.6rem;
        color: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        }
    .city_form{
        background-color: #fff;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        padding-top: 0.4rem;
        div{
            width: 90%;
            margin: 0 auto;
            text-align: center;
            .city_input{
                border: 1px solid #e4e4e4;
                padding: 0 0.3rem;
                font-size: 0.65rem;
                color: #333;
                }
            .input_style{
                border-radius: 0.1rem;
                margin-bottom: 0.4rem;
                width: 100%;
                height: 1.4rem;
                }
            .city_submit{
                background-color: #3190e8;
                font-size: 0.65rem;
                color: #fff;
                }
            }
       
        }
        .pois_search_history{
            border-top: 1px solid #e4e4e4;
            border-bottom: 1px solid #e4e4e4;
            padding-left: 0.5rem;
            font-size: 0.475rem;
            line-height: 0.8rem;
            font-family: "Microsoft YaHei";
        }
        .getpois_ul{
            background-color: #fff;
            border-top: 1px solid #e4e4e4;
            li{
                margin: 0 auto;
                padding-top: 0.65rem;
                border-bottom: 1px solid #e4e4e4;
                .pois_name{
                    margin: 0 auto 0.35rem;
                    width: 90%;
                    font-size: 0.65rem;
                    color: #333;
                }
                .pois_address{
                    width: 90%;
                    margin: 0 auto 0.55rem;
                    font-size: 0.45rem;
                    color: #999;
                }
            }
        }
 

</style>

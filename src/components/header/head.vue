<template>
   <header id='head_top'>
       <span class="head_logo">ele.me</span>
       <a href="#" class="head_login">
           <span class="login_span">登录|注册 </span>
       </a>

   </header>
</template>

<script>
export default {
   
    
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
   .head_logo{
    left: .4rem;
    font-weight: 400;
    font-size: .7rem;
    color: #fff;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
   }
   .head_login{
        right: 0.55rem;
        font-size: 0.65rem;
        color: #fff;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
       .login_span{
            color: #fff;
       }
   }
</style>
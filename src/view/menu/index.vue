
<template>
    <div class="headerPage">
        <div class="menu" id="router-menu">
            <div class="menu-item"><router-link to="/monitor" key="/monitor" >{{ $t("menu.monitor")}}</router-link></div>
            <div class="menu-item"><router-link to="/energy" key="/energy">{{ $t("menu.energy") }}</router-link></div>
            <div class="menu-item"><router-link to="/smart" key="/smart">{{ $t("menu.smart") }}</router-link></div>
            <div class="menu-item"><router-link to="/secure" key="/secure" >{{ $t("menu.secure") }}</router-link></div>
        </div>
        <!-- <ChangeLang/> -->
    </div>
</template>
<script setup>
// import ChangeLang from '../../component/changeLang';
</script>

<style scoped>
.header_logo{
    width: 100%;
    height: 100%;
    display: inline-block;
    /* background: url("../../images/logox3.png"); */
    background-size: 100% 100%;
    animation: fadeIn 2s ease-in-out;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.headerPage:hover .header_logo{
    width: 100%;
    height: 100%;
    display: inline-block;
    /* background: url("../../images/logoblack@3x.png"); */
    background-size: 100% 100%;
}
.headerPage{
    width: 100vw;
    height: 6vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    font-family: "SourceHanSansCNRegular";
    overflow: hidden;
    padding:0 1vw ;
    background: #191919;
    transition: background-position .5s;    
    /* background-image: linear-gradient(180deg, #000000 0%, rgba(0,0,0,0.00) 100%); */
}
.headerPage:hover{
    background-position: 100% 0;   
    background-image: linear-gradient(180deg, #fff 100%, rgba(0,0,0,0.01) 100%); 
    animation: colorchange 0.8s ease-in-out 0s 1 alternate forwards;
}
@keyframes colorchange {
  0% {
    background: #191919;
  }
  100% {
    background: #fff;
  }
}
.menu {
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left:50%;
    transform: translate(-50%,0);
}
.menu .menu-item{
    display: inline-block;
    position: relative;
    text-align: center;
    margin: 0 3vw;
    padding: 1vw 0;
}
.submenu .menu-item{
    display: inline-block;
    position: relative;
    text-align: center;
    margin: 0 2vw;
    padding: 1vw 0;
}
.menu .menu-item::before,.submenu .menu-item::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #000;
    transform-origin: center;
    transform: scaleX(0); /* 初始状态下无下划线 */
    transition: transform 0.3s ease-in-out;
}
.menu .menu-item:hover::before,.submenu .menu-item:hover::before{
    transform: scaleX(1); /* 悬停时显示下划线 */
    border-radius: 2px; /* 圆润边角 */
}
.menu a,.submenu a{
    text-decoration:none;
    font-family: AlibabaSansRegular;
    font-size: 0.9rem;
    color: #FDFDFD;
}
.submenu a{
    font-size: 1rem;
}
.submenu {
    display: none;
}
.visibleSubmenu{
  width: 100vw;
  height: 6.5vw;
  top: 5.3vw;
  left:0;
  position: fixed;
  z-index: 9;
  /* background: url('../../images/submenubg.png'); */
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  animation: heightchange 0.5s ease-in-out 0s 1 alternate forwards;
}
@keyframes heightchange {
  0% {
    height: 0;
  }
  100% {
    height: 6.5vw;
  }
}
.headerPage:hover .menu a,.headerPage:hover .submenu a,.headerPage:hover .language-menu{
    color: #191919;
}
.menu a:hover,.submenu a:hover{
    color: #000000;
}

@media screen and (max-width: 1400px) {
.header_logo{
    width: 100%;
    height: 100%;
    display: inline-block;
    /* background: url("../../images/logox2.png"); */
    background-size: 100% 100%;
}
}

@media screen and (max-width: 1024px) {
.header_logo{
    width: 100%;
    height: 100%;
    display: inline-block;
    /* background: url("../../images/logo.png"); */
    background-size: 100% 100%;
}
}
@media screen and (max-width: 600px) {
    .menu {
       width: 75vw;
    }
}
</style>
<template>
	<div class="language-menu">
        <div class="menu-item" @click="changeLang('fr')" :class="{'active':locale=== 'fr'}">FR</div><div class="jiange"></div>
    	<div class="menu-item" @click="changeLang('en')" :class="{'active':locale=== 'en'}">EN</div><div class="jiange"></div>
        <div class="menu-item" @click="changeLang('zh')" :class="{'active':locale=== 'zh'}">CN</div>
    </div>
</template>
<script setup>
import {ref, watch} from 'vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const changeLang = (lang) => {
  locale.value = lang;
  localStorage.setItem('lang', lang);
}
// watch(locale, (newValue, oldValue) => {
//   console.log('组件名----语言变化1');
//   console.log(`newValue: ${newValue}`);
//   console.log(`oldValue: ${oldValue}`);
// });
</script>
<style scoped>
    .jiange{
        font-size: 20px;
        margin: 10px 2px;
    }
    .language-menu{
        display: flex;
        flex-direction: row-reverse;
        font-size: 1rem;
        color: #FDFDFD;
    }
    .menu-item{
        margin: 0.5rem 2px;
        font-size: 0.9rem;
        cursor: pointer;
    }
    .menu-item.active{
        color: #191919;
    }
    .menu-item:hover{
        color: #191919;
    }
</style>
<template>
    <img ref="getMenu2" src="../assets/menu/menu-open.svg" alt="menu image" class="menu-img" @click="openMenu(); openMenu2(), darkBackGround()">
    <div ref="getMenu" class="desktop-menu">
        <ul>
            <li v-for="{ title, link } in menu">
                <router-link ref="links" :to="link">
                    <h3  class="links">{{ title }}</h3>
                </router-link>
            </li>

            <li v-for="{ title2, link2 } in menuScroll">
                <router-link @click="openMenu(); openMenu2(), darkBackGround()" :to="link2">
                    <h4 class="links">{{ title2 }}</h4>
                </router-link>
            </li>
        </ul>
    </div>
    <span ref="dark"></span>
</template>
  
<script>
import { ref } from 'vue'

export default {
    name: "DesktopMenu",
    props: ["menu", "menuScroll"],

    setup() {

        const getMenu = ref(null)
        const openMenu = () => {
            getMenu.value.classList.toggle('open')
        }
        const getMenu2 = ref(null)
        const openMenu2 = () => {
            getMenu2.value.classList.toggle('open')
        }
        const dark = ref(null)
        const darkBackGround = () => {
            dark.value.classList.toggle('open2')
        }

        return { openMenu, getMenu, openMenu2, getMenu2, dark, darkBackGround }
    }
}
</script>

<style scoped>
img.menu-img {
    position: fixed;
    top: 45%;
    right: 500px;
    z-index: 999;
    transform: translateX(500px);
    box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 50%);
    width: 75px;
    transition: all 1s;
    cursor: pointer;
}

.desktop-menu {
    background-color: var(--vs-color);
    width: 500px;
    transform: translateX(500px);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;
}

ul {
    list-style: none;
}

li a {
    color: white;
    text-decoration: none;
}

h3 {
    font-size: 2.1874rem;
}

.links{
    text-transform: uppercase;
}

.open {
    transform: translateX(0) !important;
    transition: all 1s;
}

.open2 {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0%;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
    z-index: 900;
    transition: all 1s;
}
</style>
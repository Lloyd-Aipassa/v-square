<template>
    <img ref="getMenu2" src="../assets/menu/menu-open.svg" alt="menu image" class="menu-img"
        @click="openMenu(); openMenu2(), darkBackGround()">
    <img src="../assets/mobile-menu.svg" alt="" class="mobile-menu-img" @click="openMobileMenu(), darkBackGround()">

    <!-- =============Desktop=============== -->
    <section ref="getMenu" class="desktop-menu">
        <ul>
            <li v-for="{ title, link } in menu">
                <router-link ref="links" :to="link">
                    <h3 class="links">{{ title }}</h3>
                </router-link>
            </li>

            <li v-for="{ title2, link2 } in menuScroll">
                <router-link @click="openMenu(); openMenu2(), darkBackGround()" :to="link2">
                    <h4 class="links">{{ title2 }}</h4>
                </router-link>
            </li>
        </ul>
    </section>

    <!-- =============Mobile=============== -->
    <section ref="mobileMenu" class="mobile-menu">
        <ul>
            <li v-for="{ title, link } in menu">
                <router-link ref="links" :to="link">
                    <h3 class="links">{{ title }}</h3>
                </router-link>
            </li>

            <li v-for="{ title2, link2 } in menuScroll">
                <router-link @click="openMobileMenu(), darkBackGround()" :to="link2">
                    <h4 class="links">{{ title2 }}</h4>
                </router-link>
            </li>
        </ul>
    </section>
    <span ref="dark"></span>
</template>
  
<script>
import { ref } from 'vue'

export default {
    name: "DesktopMenu",
    props: ["menu", "menuScroll"],

    setup() {
        // DESKTOP
        const getMenu = ref(null)
        const openMenu = () => {
            getMenu.value.classList.toggle('open')
        }
        const getMenu2 = ref(null)
        const openMenu2 = () => {
            getMenu2.value.classList.toggle('open')
        }

        // MOBILE
        const mobileMenu = ref(null)
        const openMobileMenu = () => {
            mobileMenu.value.classList.toggle('open-mobile-menu')
        }

        // OPACITY
        const dark = ref(null)
        const darkBackGround = () => {
            dark.value.classList.toggle('opacity')
        }

        return { openMenu, getMenu, openMenu2, getMenu2, dark, darkBackGround, mobileMenu, openMobileMenu }
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

.mobile-menu-img {
    display: none;
    position: fixed;
    top: 20px;
    right: 24px;
    z-index: 999;
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

.mobile-menu {
    display: none;
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

.links {
    text-transform: uppercase;
}

.open {
    transform: translateX(0) !important;
    transition: all 1s;
}

.opacity {
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

@media (max-width: 720px) {
    img.menu-img {
        display: none;
    }

    .mobile-menu-img {
        display: block !important;
        position: fixed;
        top: 20px;
        right: 24px;
        z-index: 999;
    }

    .mobile-menu {
        display: block;
        background-color: var(--vs-color);
        width: 100%;
        transform: translateX(100%);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 998;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 1s;
    }

    .open-mobile-menu {
        transform: translateX(0) !important;
        display: block;
        background-color: var(--vs-color);
        width: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 998;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 1s;
    }
}
</style>
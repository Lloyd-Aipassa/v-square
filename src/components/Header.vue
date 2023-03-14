<template>
    <header>
        <img alt="v-square logo" src="@/assets/vsLogo.svg" width="300">

    </header>
    <router-view />
</template>
  
<script>
export default {
    name: "Header",
}
</script>

<style scoped>
header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 190px 25px 190px;
    z-index: 999;
    background-color: #fff;
    width: 100%;
}

nav {
    display: flex;
    gap: 20px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-weight: 300;
}


@media (max-width: 720px) {
    header {
        position: sticky;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 24px;
    }

    header img {
        width: 176px;
    }

    img.mobile-menu {
        display: block;
        width: 27px;
    }

    nav {
        display: none;
    }
}
</style>
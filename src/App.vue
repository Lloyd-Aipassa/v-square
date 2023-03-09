<template>
  <Header />
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300;1,400&display=swap');

:root {
  --vs-color: #8d9986;
  --vs-grey-color: #F6F6F6;
}

body {
  font-family: "Poppins", sans-serif;
}

h1 {
  color: var(--vs-color);
  font-size: 55px;
  font-weight: 600;
  line-height: 48px;
  font-family: 'Poppins', sans-serif;
}

h2 {
  color: var(--vs-color);
  font-size: 64px;
  font-weight: 600;
  line-height: 65px;
  font-family: 'Poppins', sans-serif;
}

h3, h4 {
  font-family: 'Poppins', sans-serif;
}

p {
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  color: #3A3A3A;
  font-family: 'Poppins', sans-serif;
}
a {
  font-family: 'Poppins', sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: var(--vs-color);
  font-weight: 300;
}

@media (max-width: 720px) {
  h1 {
    font-size: 30px;
    font-weight: 700;
    line-height: 32px;
    font-family: 'Poppins', sans-serif;
  }

  h2{
    font-size: 38px;
    line-height: 37px;
  }

  p {
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  color: #3A3A3A;
  font-family: 'Poppins', sans-serif;
}
}
</style>

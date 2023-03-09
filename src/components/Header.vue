<template>
    <header>
        <img alt="v-square logo" src="@/assets/vsLogo.svg" width="300">
        <nav>
            <router-link to="/">Home</router-link> 
            <router-link to="/Entrepreneur">Entrepreneur</router-link> 
            <router-link to="/Investor">Investor</router-link> 
            <router-link to="/Contact">Contact</router-link>
        </nav>
    </header>
    <router-view/>
</template>
  
<script>
export default {
    name: "Header",
}
</script>

<style scoped>
    header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 190px 25px 190px;
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
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
}

header img{
    width: 176px;
}

nav{
    display: none;
}
}


</style>
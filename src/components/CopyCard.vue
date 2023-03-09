<template>
  <ul>
    <li v-for="content in chooseCard">
      <div class="container">
        <img alt="planting a seed and second image growing a seed" :src='content.image'>
        <div class="card">
          <span>
            <h3>{{ content.title }}</h3>
            <p>{{ content.content }}</p>
          </span>
          <router-link :to="`${content.link}`"><button>Continue here</button></router-link>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  name: "CopyCard",
  props: ["chooseCard"],
}
</script>

<style scoped>
ul {
  display: flex;
  gap: 40px;
  justify-content: center;
  list-style-type: none;
  padding: 0;
}

.container {
  position: relative;
  width: 400px;
}

.container img {
  width: 100%;
}

.card {
  position: absolute;
  bottom: -40px;
  left: 50%;
  width: 320px;
  height: 300px;
  background-color: var(--vs-color);
  transform: translateX(-50%);
  text-align: center;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card h3 {
  color: white;
  font-size: 1.6875rem;
}

.card p {
  color: white;
  font-size: 1rem;
  line-height: 1.625rem;
  margin-bottom: 15px;
}

.card button {
  border: none;
  padding: 20px 50px;
  background-color: white;
  font-size: 1rem;
  text-transform: uppercase;
  align-self: self-start;
}

.card button:hover {
  transform: scale(1.08);
  transition: transform 400ms;
}



a {
  color: #42b983;
}

/* @media (max-width: 1440px) {
  .nutshell-container img {
    max-width: 300px;
  }
} */

@media (max-width: 720px) {
  ul {
  flex-direction: column;
  gap: 20px;
}

.container {
  position: relative;
  width: 100%;
}

.container img {
  display: none;
}

.card {
  position: relative;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 350px;
  background-color: var(--vs-color);
  transform: translateX(0);
  text-align: center;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card h3 {
  color: white;
  font-size: 2rem;
  margin-bottom: 20px;
}

.card p {
  color: white;
  font-size: 1rem;
  line-height: 1.625rem;
  margin-bottom: 15px;
}

.card button {
  border: none;
  padding: 20px 50px;
  background-color: white;
  font-size: 1rem;
  text-transform: uppercase;
  align-self: self-start;
}

.card button:hover {
  transform: scale(1.08);
  transition: transform 400ms;
}

}
</style>

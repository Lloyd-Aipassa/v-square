<template>
  <section id="desktop-menu">
    <DesktopMenu :menu="menu" :menuScroll="menuScroll" />
  </section>
  <section class="hero">
    <img src="../assets/header-images/header-home.webp" v-bind:srcset="`${photos.S} 720w, ${photos.L} 1720w,	`"
      alt="Header imges of vegan food" class="animate-right-left">
    <div class="hero-content animatie-2">
      <h1 id="healthy">THE BEST HEALTHY AND SUSTAINABLE FOOD ON EVERY CORNER</h1>
      <p>V-SQUARE is a powerhouse of plant-forward food-shop brands with one mission – accelerate the
        protein transition
        by making healthy, sustainable food conveniently available at many more places.</p><br>
      <p>V-SQUARE is a scale up engine for the best-in-class healthy and sustainable restaurants &
        delivery chains and
        supports them to scale up and improve faster!</p>
    </div>
  </section>

  <section class="nutshell" id="nutshell">
    <div class="nutshell-container">
      <img alt="Vue logo" src="../assets/nutshell.webp" class="nut animatie-6">
      <div class="nutshell-content">
        <h2 class="animatie-3">V-SQUARE IN A NUTSHELL</h2>
        <p class="animatie-3">There is growing momentum for people switching from animal-based to more sustainable,
          plant-forward diets.
          This is critical for human health and human foodprint. For most potential flexitarians to make this switch,
          they need more tasty and conveniently available restaurants and deliverers to seduce them.</p>
        <div class="icon-grid">
          <div class="icon-content animatie-3">
            <img alt="Vue logo" src="../assets/aarde.svg">
            <p>
              <span>1.</span> The availability of a lot more and even better healthy and sustainable restaurants will
              boost the protein transition
            </p>
          </div>
          <div class="icon-content animatie-3">
            <img alt="Vue logo" src="../assets/foodPlatter.svg">
            <p>
              <span>2.</span> V-SQUARE is the first company to take a professional, large scale chain approach to plant
              forward food-shops, caterers and home deliverers
            </p>
          </div>
          <div class="icon-content animatie-3">
            <img alt="Vue logo" src="../assets/data.svg">
            <p>
              <span>3.</span> V-SQUARE is a scale-up engine that provides professional services and smart growth-capital
              to help them improve and scale faster
            </p>
          </div>
          <div class="icon-content animatie-3 trigger-4">
            <img alt="Vue logo" src="../assets/blaadje.svg">
            <p>
              <span>4.</span> So they will make sustainable food healthier and tastier, more convenient and affordable
            </p>
          </div>
          <div class="icon-content animatie-3">
            <img alt="Vue logo" src="../assets/people.svg">
            <p>
              <span>5.</span> And radically more people will be seduced to eat less and less animal-based food on many
              more places
            </p>
          </div>
          <div class="icon-content animatie-3">
            <img alt="Vue logo" src="../assets/kraam.svg">
            <p>
              <span>6.</span> As a result, V-SQUARE and its stakeholders will have significant positive impact and can
              benefit from a huge market opportunity
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="be-square animatie-4" id="be-square">
    <p>
      Be part of a <br> meaningful movement
    </p>
    <h2>
      BE THERE OR <br>BE (V)SQUARE
    </h2>
  </section>

  <section class="choose-card animatie-5">
    <CopyCard :choose-card="chooseCard" />
  </section>

  <section class="choose">
    <img src="../assets/arrow.svg" alt="an arro to pick">
    <p>Please choose how you
      wish to continue</p>
  </section>
  <Footer />
</template>


<script>
// @ is an alias to /src
import { onMounted, computed } from 'vue'
import DesktopMenu from '@/components/DesktopMenu.vue'
import CopyCard from '@/components/CopyCard.vue'
import Footer from '@/components/Footer.vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

let photos = {
  S: require('../assets/header-images/header-mob-home.webp'),
  L: require('../assets/header-images/header-home.webp')
}
let tl = gsap.timeline();

export default {
  name: 'HomeView',
  components: {
    DesktopMenu,
    CopyCard,
    Footer
  },

  setup() {

    const menu = [
      // { title: 'Home', link: '/' },
      { title: 'Investor', link: '/Investor' },
      { title: 'Entrepeneur', link: '/Entrepreneur' },
      { title: 'Contact', link: '/Contact' },
    ]
    const menuScroll = [
      { title2: 'Best plant-based food', link2: '/#healthy' },
      { title2: 'In a nutshell', link2: '/#nutshell' },
      { title2: 'Entrepreneur or investor', link2: '/#be-square' },
    ]

    const chooseCard = [
      {
        image: require('../assets/seed.webp'),
        title: 'HELP US GROW',
        content: 'Are you an investor and do you want to make a difference by supporting the protein transition?',
        link: '/Entrepreneur',
      },
      {
        image: require('../assets/plant.webp'),
        title: 'GROW WITH US',
        content: 'Are you an entrepreneur and do you want to know how we can help you grow?',
        link: '/Investor',
      }
    ]

    onMounted(() => {
      tl.to('.animate-right-left', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.35 })
        .to('.animatie-2', { clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', duration: 0.5, delay: 0.7 })


      //====animatie 3======
      gsap.timeline({
        scrollTrigger: {
          // markers: true,
          start: 'top 95%',
          trigger: ".icon-grid",
        }
      })
        .fromTo('.animatie-3', { opacity: '0', y: '60' }, { opacity: '1', y: '0', stagger: 0.2, duration: 0.3 });


      //=====animatie 4=======
      gsap.timeline({
        scrollTrigger: {
          start: "center center",
          trigger: ".animatie-4",
        }
      })
        .fromTo('.animatie-4', { clipPath: 'polygon(100% 0, 0 0, 0 0, 100% 0)' }, { clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', duration: 0.6 });


      //=====animatie 5=======
      gsap.timeline({
        scrollTrigger: {
          trigger: ".animatie-5",
        }
      })
        .fromTo('.animatie-5', { opacity: '0', y: '60' }, { opacity: '1', y: '0', duration: 0.5, delay: 0.5, });

      //=====animatie 6=======
      gsap.timeline({
        scrollTrigger: {
          start: 'top 95%',
          trigger: ".animatie-6",
        }
      })
        .fromTo('.animatie-6', { opacity: '0', x: '-160' }, { opacity: '1', x: '0', duration: 1.5, delay: 0.5, });
    })


    computed(() => {
      photos()
    })

    return { chooseCard, photos, menu, menuScroll }
  }
}

</script>

<style scoped>
.hero,
.nutshell {
  margin-left: 190px;
}

.hero h1 {
  max-width: 1315px;
  margin: 60px 0 30px 0;
}

.hero p {
  max-width: 996px;
}

.hero img {
  width: 100%;
}

.nutshell {
  margin-top: 116px;
}

.nutshell h2 {
  max-width: 450px;
}

.nutshell p {
  margin: 25px 0 40px 0;
  font-size: 16px;
  max-width: 1200px;
}

.nutshell p span {
  color: var(--vs-color);
}

.nutshell-container {
  display: flex;
  padding: 116px 100px 116px 0;
  background-color: var(--vs-grey-color)
}

.nutshell-container img {
  max-width: 450px;
  margin-left: -100px;
  align-self: center;
}

.icon-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.nutshell-content {
  padding-left: 5%;
}

.icon-content {
  display: flex;
  padding-left: 100px;
}

.icon-content img {
  align-self: start;
  width: 40px;
}

.icon-content p {
  max-width: 420px;
  margin: 0;
  padding-left: 20px;
}

.be-square {
  padding: 50px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.be-square p {
  color: var(--vs-color);
  font-size: 1, 1875rem;
  font-weight: 400;
}


.choose-card {
  background-color: var(--vs-grey-color);
  height: 530px;
  padding-top: 80px;
}

.choose {
  height: 359px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
}


@media (max-width: 1440px) {

  .hero,
  .nutshell {
    margin-left: 130px;
  }

  .nutshell-container img {
    max-width: 300px;
  }
}

@media (max-width: 720px) {

  .hero,
  .nutshell {
    margin: 0;
  }

  .hero-content {
    padding: 50px 24px 80px;
    text-align: center;
  }

  .hero-content h1 {
    margin: 0 0 30px 0;
  }

  .nutshell {
    margin: 0;
  }

  .nutshell h2 {
    max-width: 450px;
  }

  .nutshell img.nut {
    display: block;
  }

  .nutshell p {
    margin: 25px 0 40px 0;
    width: 100%;
  }

  .nutshell-container {
    display: block;
    padding: 0;
  }

  .nutshell-container img {
    max-width: 100%;
    margin-left: 0;
  }

  .icon-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .nutshell-content {
    padding: 50px 24px;
  }

  .icon-content {
    padding-left: 0;

  }

  .icon-content img {
    align-self: start;
    width: 40px;
  }

  .icon-content p {
    max-width: 100%;
    padding-left: 20px;
    margin: 0;
  }

  .be-square {
    text-align: center;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .be-square p {
    font-size: 1.25rem;
    font-weight: 400;
  }


  .choose-card {
    background-color: var(--vs-grey-color);
    height: auto;
    padding: 20px;
  }

  .choose {
    display: none;
  }


}



/*===================== Animaties =======================*/

.animate-right-left {
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  transition: all 1.0s;
}

.animatie-2 {
  clip-path: polygon(100% 0, 0 0, 0 0, 100% 0);
  transition: all 1.5s;
}

.animatie-3 {
  transition: all 1s;
}

/* .animatie-4 {

} */
.animatie-5 {
  opacity: 0;
  transition-delay: 1s;
  /* transform: translateY(60px); */
  transition: all 1.5s;
}
</style>
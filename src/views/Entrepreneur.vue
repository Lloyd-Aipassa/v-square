<template>
  <section class="hero">
    <img src="../assets/header-images/header-entrepeneurs.webp" v-bind:srcset="`${photos.S} 720w, ${photos.L} 1720w,`"
      alt="Header imges of vegan food" class="animate-right-left">
    <h1 id="perfect-ingredients" class="animatie-2">WE HAVE THE PERFECT INGREDIENTS TO HELP YOU GROW FASTER!</h1>
  </section>

  <section id="chall" class="chall animatie-5">
    <TheChallenge :challenge="challenge" />
  </section>

  <section id="join" class="join">
    <h2>JOIN V-SQUARE</h2>


    <div class="card">
      <img alt="" src='../assets/join/003-rocket-1.svg'>
      <p>To make radically more impact and help you to improve and grow faster!</p>
    </div>
    <div class="card">
      <img alt="" src='../assets/join/005-target-1.svg'>
      <p>Focus fully on what you’re so very good at and passionate about</p>
    </div>
    <div class="card">
      <img alt="" src='../assets/join/004-growth-1.svg'>
      <p>And get our dedicated support for your growth and everything else</p>
    </div>
    <div class="card">
      <img alt="" src='../assets/join/002-support-1.svg'>
      <p>Impact and performance go hand in hand</p>
    </div>
    <div class="card">
      <img alt="" src='../assets/join/006-food-delivery-1.svg'>
      <p>Be part of powerhouse of sustainable out of home & to the home food brands</p>
    </div>
    <div class="groente">
      <img class="join-img" alt="Groente salade" src='../assets/join/groente.webp'>
    </div>
  </section>

  <section class="our-story animatie-4" id="our-story">
    <h2>
      OUR STORY
    </h2>
    <h4>
      How it all started
    </h4>
    <p>
      Already during their strong growth journey with the Student Hotel, Felix and Lucas grew the ambition to apply
      their
      scale-up experience to the dearly needed protein transition, and contribute to a healthier and more sustainable
      world.
      <br><br>

      Together with the University of Wageningen, they concluded from research that a huge impact can be made when more
      restaurants and food-deliverers would offer more tasty, healthy and sustainable food to help fuel the consumer
      readiness to eat more plant-based food.
      <br><br>

      With their backgrounds in management of scale-up in hospitality, Lucas and Felix founded V-SQUARE as a
      powerhouse
      of
      sustainable out of home (and to the home) food brands.
    </p>
    <h4>
      Why?
    </h4>
    <p>
      Help to make humans and the planet more healthy
    </p>
    <h4>
      What?
    </h4>
    <p>
      Seduce as many people as possible to take ownership of planetary and personal health by changing their eating
      habits.
      Each person with his/her own starting point and purpose.movement
    </p>
    <div class="team">
      <Team />
    </div>

    <div class="our-story-quote">
      <p>
        Join us on our journey to
      </p>
      <h2>
        MAKE PLANT-FORWARD THE NEW NORMAL!
      </h2>
    </div>
  </section>

  <section class="interested">
    <div class="animatie-6">
      <h2>
        INTERESTED?
      </h2>
      <p>
        <span>
          We are constantly expanding our platform.<br>
        </span>
        Are you a Vegan/Vegetarian restaurant/catering chain, or
        Do you want to work at a company that puts people and planetary health first?
      </p>
      <div class="form">
        <Form />
      </div>
    </div>
  </section>

  <Footer />
</template>


<script>
// @ is an alias to /src
import Team from '@/components/Team.vue'
import TheChallenge from '@/components/TheChallenge.vue'
import Form from '@/components/Form.vue'
import Footer from '@/components/Footer.vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();
let tl = gsap.timeline();

let photos = {
  S: require('../assets/header-images/header-mob-entrepreneurs.webp'),
  L: require('../assets/header-images/header-entrepeneurs.webp')
}

export default {
  name: 'Entrpreneur',
  components: {
    TheChallenge,
    Team,
    Form,
    Footer
  },

  data() {
    return {
      challenge: [
        {
          title: 'THE CHALLENGE',
          bullits: [
            {
              image: require('../assets/cards/l1.svg'),
              content: 'The food & protein transition is really taking off'
            },
            {
              image: require('../assets/cards/l2.svg'),
              content: 'Research shows that restaurants can help seduce more people to change their diets'
            },
            {
              image: require('../assets/cards/l3.svg'),
              content: 'Making sustainable food more attractive and conveniently available'
            },
            {
              image: require('../assets/cards/l4.svg'),
              content: 'Successful restaurant chains are still too small to make a true impact'
            },
            {
              image: require('../assets/cards/l5.svg'),
              content: 'And they lack the time, (often the experience) and capital to grow faster'
            },
          ]
        },

        {
          title: 'THE OPPORTUNITY',
          bullits: [
            {
              image: require('../assets/cards/r1.svg'),
              content: 'Be part of a group of the best high impact restaurant chains, home deliverers and caterers'
            },
            {
              image: require('../assets/cards/r2.svg'),
              content: 'Help them to improve and grow faster'
            },
            {
              image: require('../assets/cards/r3.svg'),
              content: 'With support from our scale-up platform for innovation and impact'
            },
            {
              image: require('../assets/cards/r4.svg'),
              content: 'And efficiently organized shared services in all relevant fields of expertise'
            },
            {
              image: require('../assets/cards/r5.svg'),
              content: 'Together we are a true powerhouse of sustainable food brands, a force for good!'
            },
          ]
        }
      ],
    }
  },
  computed: {
    photos() { return photos }
  },

  mounted() {
    this.scrollAnimation2();
  }, methods: {
    scrollAnimation2() {
      tl.to('.animate-right-left', { clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', duration: 0.35 })
        .to('.animatie-2', { clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', duration: 0.5, delay: 0.7 })

      //====animatie 3======
      gsap.timeline({
        scrollTrigger: {
          // markers: true,
          start: 'top 95%',
          scrub: true,
          trigger: '.join',
        }
      })
        .fromTo('.groente', { opacity: '1', y: '500' }, { opacity: '1', y: '-500' });

      //   //=====animatie 4=======
      gsap.timeline({
        scrollTrigger: {
          start: 'top 95%',
          trigger: ".animatie-4",
        }
      })
        .fromTo('.animatie-4', { opacity: '0', y: '160' }, { opacity: '1', y: '0', duration: 1.5, delay: 0.5, });


      //=====animatie 5=======
      gsap.timeline({
        scrollTrigger: {
          trigger: ".animatie-5",
        }
      })
        .fromTo('.animatie-5', { opacity: '0', y: '60' }, { opacity: '1', y: '0', duration: 0.5, delay: 1.5, });


      //=====animatie 6=======//
      const triggerEl = document.querySelector(".animatie-6")
      const triggerForm = document.querySelector(".form")
      const triggerTeam = document.querySelector(".team")
      function animatie6(trigger, el) {
        
        gsap.timeline({
          scrollTrigger: {
            start: 'top 95%',
            trigger: trigger,
          }
        })
          .fromTo(el, { opacity: '0' }, { opacity: '1', duration: 1.5, delay: 0.5, });
      }
      animatie6(triggerEl, triggerEl)
      animatie6(triggerForm, triggerForm)
      animatie6(triggerTeam, triggerTeam)
    },
  }
}


</script>

<style scoped>
.hero {
  margin-right: 190px;
}

.hero h1 {
  /* max-width: 1115px; */
  margin: 60px 0 60px 0;
  text-align: right;
  padding-left: 40%;
}

.hero p {
  max-width: 996px;
}

.hero img {
  width: 100%;
}

.chall {
  margin: 0 190px;
}

.join {
  position: relative;
  margin: 35px 0 120px 190px;
  background-color: var(--vs-color);
  padding: 105px 0 150px 70px;
}

img.join-img {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-55%);
  width: 40%;
}

.join h2 {
  color: white;
  margin-bottom: 40px;
}


.card {
  display: flex;
  align-items: center;
  gap: 50px;

}

.card img {
  width: 40px;
}

.card p {
  max-width: 520px;
  color: white;
  margin: 18px 0 18px 0;
  font-size: 1rem;
}

.our-story {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 80px;
}

.our-story h4 {
  margin: 0 0 -10px 0;
}

.our-story p {
  color: #3a3a3a;
  font-size: 1rem;
  font-weight: 300;
  max-width: 589px;
  margin-bottom: 30px;
}

.our-story-quote p {
  margin: auto;
  font-size: 1.5rem;
  text-align: center;
  color: var(--vs-color);
}

.our-story-quote h2 {
  max-width: 900px;
}

.interested {
  background-color: var(--vs-grey-color);
  padding: 90px 0;
  text-align: center;
}

.interested p {
  padding: 20px 0 90px;
  max-width: 530px;
  margin: auto;
  font-weight: 400;
}

.interested p span {
  color: var(--vs-color);
  font-weight: 600;
  margin: auto;
}

@media (max-width: 1440px) {

  .hero {
    margin-right: 130px;
  }

  .chall {
    margin: 0 0 0 130px;
  }

  .join {
    margin: 35px 0 100px 130px;
  }

  img.join-img {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-55%);
    width: 45%;
  }

  .join p {
    max-width: 400px;
  }
}

@media (max-width: 720px) {

  .hero {
    margin: 0;
  }

  .hero h1 {
    /* max-width: 1115px; */
    margin: 60px 0 60px 0;
    text-align: right;
    padding: 0 24px;
    text-align: center;
  }

  .hero img {
    width: 100%;
  }

  .chall {
    margin: 0;
  }

  .join {
    position: relative;
    margin: 0;
    padding: 50px 24px;
  }

  img.join-img {
    position: absolute;
    right: 0px;
    top: -800px;
    transform: translateY(0);
    width: 100%;
  }

  .join h2 {
    color: white;
    margin-bottom: 350px;
    z-index: 2;
  }

  .card {
    display: flex;
    align-items: center;
    gap: 20px;

  }

  .card img {
    width: 40px;
    z-index: 1;
  }

  .card p {
    max-width: 520px;
    color: white;
    margin: 18px 0 18px 0;
    font-size: 1rem;
    z-index: 2;
  }

  .our-story {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
  }


  .our-story {
    padding: 50px 24px;
  }

  .our-story p {
    color: var#3a3a3a;
    font-size: 1rem;
    font-weight: 400;
    max-width: 589px;
    padding: 20px 0;
  }

  .our-story-quote p {
    font-size: 1.5rem;
    color: var(--vs-color);
  }

  .interested {
    background-color: var(--vs-grey-color);
    padding: 50px 24px 120px;
    text-align: center;
  }

  .interested p {
    padding: 20px 0 20px;
    max-width: 530px;
    margin: auto;
    font-weight: 400;
  }

  .interested p span {
    color: var(--vs-color);
    font-weight: 600;
    margin: auto;
  }


}

.animate-right-left {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  transition: all 1.0s;
}

.animatie-2 {
  clip-path: polygon(100% 0, 0 0, 0 0, 100% 0);
  transition: all 1.5s;
}
</style>
<template>
    <section id="desktop-menu">
		<DesktopMenu :menu="menu" :menuScroll="menuScroll" />
	</section>
  <section class="hero">
    <img src="../assets/header-images/header-investor.webp" v-bind:srcset="`${photos.S} 720w, ${photos.L} 1720w,	`"
      alt="Header imges of vegan food" class="animate-right-left">
    <h1 id="perfect-ingredients" class="animatie-2">PARTNER UP WITH US AND HELP SPEED UP THE SUSTAINABLE FOOD MOVEMENT
    </h1>
  </section>

  <section id="the-challenge-investor" class="chall animatie-5">
    <TheChallenge :challenge="challenge" />
  </section>

  <section id="why-invest">
    <WhyInvest />
  </section>

  <section class="succes">
    <div class="succes-container">
      <div class="succes-card">
        <img src="../assets/succes/succes1.svg" alt="">
        <h4>SHARED SUCCESS</h4>
        <p>Shared services at platform level.
          Shared R&D and product development.
          Complementary positionings
          Seek synergies.</p>
      </div>
      <div class="succes-card">
        <img src="../assets/succes/succes2.svg" alt="">
        <h4>SUPPORT VS OWN</h4>
        <p>Substantial & influential stakes.
          Existing restaurant chains and caterers.
          Proven scale up potential.
          Pre-agreed roll-out & roadmap.
          Founders lead & Platform supports.</p>
      </div>
      <div class="succes-card">
        <img src="../assets/succes/succes3.svg" alt="">
        <h4>COMMON DRIVE</h4>
        <p>Impact is main driver.
          Seduce and trigger many more people.
          Teamwork of founders & platform.
          Financial success is a logical result.</p>
      </div>
    </div>
    <div class="succes-bottom">
      <img src="../assets/succes/wageningen.webp" alt="">
      <h2>COOPERATION WITH
        WAGENINGEN UNIVERSITY</h2>
      <p>Wide range of expertise on (alternative) protein and food value chain Capacity
        and expertise for research and experiments Global network for deal flow and partners
        for investee companies Independent monitoring & evaluation of impact claimsPartner
        in R&D center</p>
    </div>
  </section>

  <section class="our-story" id="our-story-investor">
    <div class="animatie-4">
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
      </p>

      <p>
        Together with the University of Wageningen, they concluded from research that a huge impact can be made when more
        restaurants and food-deliverers would offer more tasty, healthy and sustainable food to help fuel the consumer
        readiness to eat more plant-based food.
      </p>

      <p> With their backgrounds in management of scale-up in hospitality, Lucas and Felix founded V-SQUARE as a
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
    </div>
    <div class="team">
      <Team />
    </div>
  </section>

  <section class="interested">
    <div class="animatie-6">
      <h2>
        INTERESTED?
      </h2>
      <p>
        <span>
          We are constantly expanding our platform.
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
import { onMounted, computed } from 'vue'
import DesktopMenu from '@/components/DesktopMenu.vue'
import TheChallenge from '@/components/TheChallenge.vue'
import WhyInvest from '@/components/WhyInvest.vue'
import Team from '@/components/Team.vue'
import Form from '@/components/Form.vue'
import Footer from '@/components/Footer.vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();
let tl = gsap.timeline();

let photos = {
  S: require('../assets/header-images/header-mob-investors.webp'),
  L: require('../assets/header-images/header-investor.webp')
}

export default {
  name: 'Investor',
  components: {
    DesktopMenu,
    TheChallenge,
    WhyInvest,
    Team,
    Form,
    Footer
  },

  setup() {

    const menu = [
			{ title: 'Home', link: '/' },
			// { title: 'Investor', link: '/Investor' },
			{ title: 'Entrepeneur', link: '/Entrepreneur' },
			{ title: 'Contact', link: '/Contact' },
		]
		const menuScroll = [
			{ title2: 'Challenge & Opportunity', link2: '/Investor#the-challenge-investor'},
			{ title2: 'Why join V-SQUARE', link2: '/Investor#why-invest'},
			{ title2: 'Our story', link2: '/Investor#our-story-investor'},
		]

		const challenge = [
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
						content: 'Invest in the best restaurant chains, home deliverers and caterers'
					},
					{
						image: require('../assets/cards/r2.svg'),
						content: 'Help them to improve and grow faster'
					},
					{
						image: require('../assets/cards/r3.svg'),
						content: 'With a platform for innovation and impact'
					},
					{
						image: require('../assets/cards/r4.svg'),
						content: 'With synergies and shared services'
					},
					{
						image: require('../assets/cards/r5.svg'),
						content: 'Build a group of high impact restaurant chains home deliverers and caterers!'
					},
					{
						image: require('../assets/cards/r6.svg'),
						content: 'A true powerhouse of sustainable out of home (and to the home) food brands'
					},
				]
			}
		]

    onMounted(() => {
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
    })

    computed(() => {
      photos()
    });

    return { challenge, photos, menu, menuScroll}
  },  
}

</script>

<style scoped>
.hero {
  margin-right: 190px;
}

.hero h1 {
  margin: 60px 0 30px 0%;
  text-align: right;
  padding-left: 30%;
}

.hero p {
  max-width: 996px;
}

.hero img {
  width: 100%;
}

.chall {
  margin: 0 190px 100px;
}


.succes-container {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.succes p {
  max-width: 760px;
}

.succes-card {
  width: 400px;
  text-align: center;
  padding: 70px 0 100px;
}

.succes-card h4 {
  font-size: 1.375rem;
  color: var(--vs-color);
}

.succes-card p {
  margin: auto;
  width: 300px;
}

.succes-bottom {
  margin-left: 190px;
}

.succes-bottom h2 {
  margin: 70px 0 20px;
}

.succes-bottom p {
  margin-bottom: 100px;
}

.succes img {
  height: auto;
  width: 100%;
}

.succes-card img {
  height: 30px;
  margin: 0;
}

.succes h2 {
  max-width: 900px;
}


.our-story {
  padding: 120px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 80px;
  background-color: var(--vs-grey-color);
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

.interested {
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

.form {
	max-width: 420px;
  margin: auto;
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



  .succes-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 100px;
    padding: 50px 24px 100px;
  }

  .succes p {
    width: 100%;

  }

  .succes-card {
    width: 100%;
    text-align: center;
    padding: 0;
  }



  .succes-card h4 {
    font-size: 1.375rem;
    color: var(--vs-color);
  }

  .succes-card p {
    margin: auto;
    width: 100%;
  }

  .succes-bottom {
    margin-left: 0;
  }

  .succes-bottom h2 {
    margin: 50px 0 20px;
    text-align: center;
    padding: 0 24px;
  }

  .succes-bottom p {
    margin-bottom: 100px;
    font-size: 1.125rem;
    text-align: center;
    padding: 0 24px;
  }

  .succes img {
    height: auto;
    width: 100%;
  }

  .succes-card img {
    height: 45px;
    margin: 0;
  }

  .succes h2 {
    max-width: 900px;
  }


  .our-story {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0 0 10px;
    padding: 100px 24px 0;
  }

  .our-story p {
    color: var#3a3a3a;
    font-size: 1rem;
    font-weight: 400;
    max-width: 589px;
    padding: 0px 0;
  }

  .interested {
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

/* =======Animaties======= */
.animate-right-left {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  transition: all 1.0s;
}

.animatie-2 {
  clip-path: polygon(100% 0, 0 0, 0 0, 100% 0);
  transition: all 1.5s;
}
</style>
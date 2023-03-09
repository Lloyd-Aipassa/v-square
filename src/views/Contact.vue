<template>
	<section class="hero">

		<img v-bind:srcset="`${photos.S} 340w, ${photos.L} 1720w,	`" alt="Header imges of vegan food"
			class="animate-right-left">

		<h1 id="contact">CONTACT</h1>
		<p class="coffee">Thinking about joining us or maybee just a cup of coffee? Please get in touch.</p>
		<div class="contact-card">
			<h4>Lucas Rijckmans</h4>
			<img src="../assets/contact/telefoon.svg" alt="">
			<p>+31 63 02 61 684</p>
			<img src="../assets/contact/email.svg" alt="">
			<p>lucas@v-square.eu</p>
		</div>
		<div class="contact-card">
			<h4>Felix Hillen</h4>
			<img src="../assets/contact/telefoon.svg" alt="">
			<p>+31 63 02 61 684</p>
			<img src="../assets/contact/email.svg" alt="">
			<p>lucas@v-square.eu</p>
		</div>
		<div class="contact-card">
			<h4>Address</h4>
			<img src="../assets/contact/adres.svg" alt="">
			<p>Keizersgracht 649 <br> 1017 DT Amsterdam</p>
		</div>
	</section>

	<section class="maps">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.0910250469004!2d4.894649627661836!3d52.36381765554423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609952b37d5dd%3A0xf021d343a37b04f2!2sKeizersgracht%20649%2C%201017%20DT%20Amsterdam!5e0!3m2!1snl!2snl!4v1678370251446!5m2!1snl!2snl"
			width="100%" height="372" style="border:0;" allowfullscreen="" loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"></iframe>
	</section>

	<section class="interested">
		<div class="animatie-6">
			<h2>
				QUESTIONS <br> 	OR MORE INFO
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
import Form from '@/components/Form.vue'
import Footer from '@/components/Footer.vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();
let tl = gsap.timeline();


let photos = {
	S: require('../assets/header-images/header-mob-contact.webp'),
	L: require('../assets/header-images/header-contact.webp')
}

export default {
	name: 'Contact',
	components: {
		Form,
		Footer
	},
	computed: {
		photos() { return photos }
	},
	mounted() {
		// gsap.to('.hero',{ opacity: 1, duration: 2 })
		tl.to('.animate-right-left', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.35 })
	},
}

</script>

<style scoped>
.hero {
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

.contact-card img {
	width: 1.0625rem;

}

/*================ animaties================== */
.animate-right-left {
	clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
	transition: all 1.0s;
}</style>
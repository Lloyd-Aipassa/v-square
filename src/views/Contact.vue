<template>
	<section class="hero">
		<img v-bind:srcset="`${photos.S} 340w, ${photos.L} 1720w,	`" alt="Header imges of vegan food"
			class="animate-right-left">
		<div class="contact-container">
			<span>
				<h1 id="contact">CONTACT</h1>
				<p class="coffee">Thinking about joining us or maybee just a cup of coffee? Please get in touch.</p>
			</span>
			<div class="contact-card">
				<h4>Lucas Rijckmans</h4>
				<div class="contact-card-info">
					<img src="../assets/contact/telefoon.svg" alt="">
					<p>+31 63 02 61 684</p>
				</div>
				<div class="contact-card-info">
					<img src="../assets/contact/email.svg" alt="">
					<p>lucas@v-square.eu</p>
				</div>
			</div>
			<div class="contact-card">
				<h4>Felix Hillen</h4>
				<div class="contact-card-info">
					<img src="../assets/contact/telefoon.svg" alt="">
					<p>+31 63 02 61 684</p>
				</div>
				<div class="contact-card-info">
					<img src="../assets/contact/email.svg" alt="">
					<p>lucas@v-square.eu</p>
				</div>
			</div>
			<div class="contact-card">
				<h4>Address</h4>
				<div class="contact-card-info">
					<img src="../assets/contact/adres.svg" class="img-adres" alt="">
					<p>Keizersgracht 649 <br> 1017 DT Amsterdam</p>
				</div>
			</div>
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
			<span>
				<h2>
					QUESTIONS <br> OR MORE INFO
				</h2>
				<p>
					<span>
						We are constantly expanding our platform.
					</span><br>
					Are you a Vegan/Vegetarian restaurant/catering chain, or
					Do you want to work at a company that puts people and planetary health first?
				</p>
			</span>
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
	max-width: 315px;
	margin: 0 0 20px;
	font-size: 4rem;
}

.hero h4 {
	font-size: 1.5rem;
	color: var(--vs-color);
	font-weight: 600;
}

.hero p {
	max-width: 360px;
}

.hero img {
	width: 100%;
}

.contact-container {
	padding: 65px 0 115px;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	margin-right: 190px;
}

.contact-card-info {
	display: flex;
	gap: 20px;
}

.contact-card img {
	width: 1.0625rem;
}

.contact-card img.img-adres {
	align-self: self-start;
}


.interested .animatie-6 {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 80px 18%;
}

.interested p {
	max-width: 526px;
	font-size: 1.125rem;
}
.interested p span{
	color: var(--vs-color);
	font-weight: 700;
}

.form {
	width: 541px;
}

.maps {
	filter: grayscale(75%);
}

@media (max-width: 720px) {
	.hero {
		margin-left: 0px;
		text-align: center;
	}


	.hero h1 {
		max-width: 100%;
		margin: 0 0 20px;
		font-size: 2.375rem;
		font-weight: 600;
	}

	.hero h4 {
		font-size: 1.5rem;
	}

	.hero img {
		width: 100%;
	}

	.contact-container {
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin-right: 0px;
		gap: 40px;
	}

	.contact-card-info {
		display: flex;
		gap: 20px;
	}

	.contact-card img {
		display: none;
	}

	.contact-card p {
		width: 100%;
	}



	.maps {
		filter: grayscale(75%);
		margin-bottom: 100px;
	}

	
.interested .animatie-6 {
	display: flex;
	flex-direction: column;
	padding: 0 24px 80px;
	text-align: center;
}

.interested p {
	max-width: 526px;
	font-size: 1rem;
	margin: 30px 0 60px;
}
.interested p span{
	color: var(--vs-color);
	font-weight: 700;
}

.form {
	width: 100%;
}

.maps {
	filter: grayscale(75%);
}


}

/*================ animaties================== */
.animate-right-left {
	clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
	transition: all 1.0s;
}</style>
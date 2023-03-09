<template>
	<section class="hero">

		<img v-bind:srcset="`${photos.S} 340w, ${photos.L} 1720w,	`"
			 alt="Header imges of vegan food" 
			 class="animate-right-left">

		<h1 class="hidden2" id="healthy">THE BEST HEALTHY AND SUSTAINABLE FOOD ON EVERY CORNER</h1>
		<p class="hidden2">V-SQUARE is a powerhouse of plant-forward food-shop brands with one mission – accelerate the
			protein transition
			by making healthy, sustainable food conveniently available at many more places.</p><br>
		<p class="hidden2">V-SQUARE is a scale up engine for the best-in-class healthy and sustainable restaurants &
			delivery chains and
			supports them to scale up and improve faster!</p>
	</section>
</template>

<script>
import gsap from 'gsap'


let photos = {
	S: require('../assets/header-images/header-mob-contact.webp'),
	L: require('../assets/header-images/header-contact.webp')
}

export default {
	computed: {
		photos() { return photos }
	},
	mounted() {
		// gsap.to('.hero',{ opacity: 1, duration: 2 })
		gsap.to('.animate-right-left', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.35})
	},
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

/*================ animaties================== */
.animate-right-left{
	clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
	transition: all 1.0s;
}
</style>
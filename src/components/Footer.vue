<template>
    <footer>
        <div class="footer-container">
            <nav>
                <router-link to="/">
                    <h3>HOME</h3>
                </router-link>
                <router-link to="/#healthy">Best plant-based food</router-link>
                <router-link to="/#nutshell">In a nutshell</router-link>
                <router-link to="/#be-square">Entrepreneur or investor</router-link>
            </nav>
            <nav>
                <router-link to="/Entrepreneur">
                    <h3>ENTREPRENEURS</h3>
                </router-link>
                <router-link to="/Entrepreneur#perfect-ingredients">Challenge & Opportunity</router-link>
                <router-link to="/Entrepreneur#join">Why join V-SQUARE</router-link>
                <router-link to="/Entrepreneur#our-story-entrepeneur">Our story</router-link>
            </nav>
            <nav>
                <router-link to="/Investor">
                    <h3>INVESTORS</h3>
                </router-link>
                <router-link to="/Investor#the-challenge-investor">Challenge & Opportunity</router-link>
                <router-link to="/Investor#why-invest">Why invest in V-SQUARE</router-link>
                <router-link to="/Investor#our-story-investor">Our story</router-link>
            </nav>
        </div>
    </footer>
    <div class="copyright">
        <p>© 2023 V-SQUARE</p>
    </div>
</template>
  
<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
footer {
    height: 294px;
    background-color: var(--vs-color);
}

.footer-container {
    height: 100%;
    width: 1000px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

footer nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

footer nav a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    font-weight: 400;
    font-size: 15px;
}

footer nav h3 {
    font-size: 23px !important;
    font-weight: 500 !important;
    margin-bottom: 15px;
}

.copyright {
    height: 75px;
    width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.copyright p {
    font-size: 15px;
}


@media (max-width: 720px) {
    footer {
        text-align: center;
        padding: 15px 0 50px 0;
        height: auto;
    }

    .footer-container {
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: center;
    }

    footer nav {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    footer nav h3 {
        margin: 35px 10px 0 0;
    }

    .copyright {
        width: 100%;
        justify-content: center;
    }

    .copyright p {
        font-size: 15px;
        align-self: center;
    }
}
</style>
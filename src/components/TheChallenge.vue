<template>
    <ul>
        <li v-for="{ title, bullits } in challenge">
            <div class="container">
                <h2>{{ title }}</h2>
                <div class="card">
                    <ul>
                        <li v-for="{ image, content } in bullits">
                            <div class="image">
                                <img alt="planting a seed and second image growing a seed" :src='image'>
                            </div>
                            <p>{{ content }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
    <div class="space"></div>
</template>
  
<script>

export default {
    name: "TheChallenge",
    props: ["challenge"],
}
</script>

<style scoped>
ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    row-gap: 30px;
    column-gap: 35px;
    list-style: none;
    /* background-color: var(--vs-grey-color); */
}

li {
    width: 100%;
    height: 100%;
}

li h2 {
    max-width: 400px;
}

.container {
    width: 100%;
    height: 100%;
    background-color: var(--vs-grey-color);
    padding: 70px;
}

.card {
    margin: 20px 0;
}

.card ul {
    display: flex;
    flex-direction: column;
}

.card li {
    display: flex;
    gap: 40px;
}

@media (max-width: 1440px) {
    li h2 {
        max-width: 380px;
        font-size: 3.125rem;
    }

    .container {
        width: 100%;
        height: 100%;
        padding: 80px 24px 30px;
    }
}

@media (max-width: 720px) {

    ul {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: max-content;
        row-gap: 50px;
        column-gap: 25px;
        list-style: none;
    }

    li {
        width: 100%;
        height: 100%;
        margin-bottom: -30px;
    }

    li h2 {
        width: 100%;
        text-align: center;
        margin: auto;
        margin: 0;
        line-height: 45px;
    }

    .container {
        width: 100%;
        height: 100%;
        background-color: var(--vs-grey-color);
        padding: 80px 24px 50px;
        margin-bottom: 30px;
    }

    .card p {
        width: 100%;
    }

}
</style>

<template>
  <main>
    <img src="../assets/team/lucas.webp" alt="">
    <div class="about">
      <h3>
        Lucas Rijckmans
      </h3>
      <p>
        In my 20+ years career I have had the pleasure to work in various industries and within that framework have been
        involved in many companies in all kind of stages.
      </p>
      <h4>READ MORE</h4>
    </div>
    <img src="../assets/team/Felix.webp" alt="">
    <div class="about">
      <h3>
        Felix Hillen
      </h3>
      <p>
        30+ years of entrepreneurship, general management in various industries, fund structuring, investment and
        corporate
        finance.
      </p>
      <h4>READ MORE</h4>
    </div>
  </main>
</template>

<script>
export default {
  name: "Team",
}
</script>


<style scoped>
  main{
    display: flex;
    justify-content: center;
    margin: 150px 190px 80px;
  }
  main img{
    /* width: clamp(100px, 100%, 387px); */
    width: 25%;
  }
  .about{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: clamp(100px, 100%, 387px); */
    width: 25%;
    background-color: var(--vs-color);
    padding: 24px;
    text-align: left;
  }

  .about h3{
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 1.875rem;
    margin-bottom: 10px;
  }

  .about h4{
    margin-top: 20px;
    color: white;
    text-decoration: underline;
    font-family: 'Poppins', sans-serif;
  }
  .about p{
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9375rem;
  }
  .about button{
    border: none;
    display: inline;
  }

  @media (max-width: 1440px) {
    main{
    margin: 150px 130px 80px;
  }
  main img{
    width: 25%;
  }

  .about h3{
    color: white;
    font-size: 1.375rem;
    font-weight: 600;
  }
  .about p{
    color: white;
    font-size: 0.75rem;
    line-height: 1rem;
  }
  .about button{
    border: none;
    display: inline;
  }
  .about h4{
    color: white;
    font-size: 1.125rem;
    text-decoration: underline;
    padding: 15px 0 10px;
  }
  }

  @media (max-width: 720px) {
    main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:0;
  }
  main img{
    width: 100%;
  }
  .about{
    width: 100%;
    background-color: var(--vs-color);
    padding: 24px;
    text-align: center;
    margin-bottom: 60px;
  }

  .about h3{
    color: white;
    font-size: 1.875rem;
    padding-top: 10px;
  }
  .about h4{
    color: white;
    font-size: 1.125rem;
    text-decoration: underline;
    padding: 0px 0 40px;
    margin: 0;
  }
  .about p{
    display: none;
  }
  .about button{
    border: none;
    display: inline;
  }

  }
</style>
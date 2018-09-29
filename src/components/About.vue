<template>
    <div id="about" class="subject">
        <div class="section">
            <h2 class="section-solo section-title">About</h2>
        </div>
        <div class="section">
            <div class="section-column story">
                <p>Hi, my name is Alex Nye. I am a self-taught programmer working primarily
                    on frontend web development. Coding for me, is a poetic intersection of art and logic.
                </p>
                <p>My interest in computer science and programming started when I was working for a composer doing film music in Venice, California.
                    I watched as Venice transformed into "Silicon Beach", met software engineers and my programming hobby turned into a consuming passion
                    and career interest.
                </p>
                <p>I left California for Freiburg, Germany, started a family, and am continually advancing my skills as a developer while working
                    in music.
                </p>
            </div>
            <div class="section-column">
                <div class="about-img">
                    <img src="../assets/AlexPic.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>

    .story{
        p{
            margin-bottom: 20px;
            font-size: 1.2rem;
            // text-indent:50px;
        }
    }

    .about-img {
        max-width: 600px;
        margin: auto;
    }

    img {
        // border-radius: 10px;
        max-width: 100%;
        margin: auto;
        display: block
    }

    @media screen and (max-width: 900px) {
    .section {
      flex-wrap: wrap;
    }
    .section-column {
      margin: 10px;
      width: 600px;
    }
  }
</style>

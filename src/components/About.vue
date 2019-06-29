<template>
    <div id="about" class="subject">
        <div class="section">
            <h2 class="section-solo section-title">About</h2>
        </div>
        <div class="section">
            <div class="section-column story">
                <p>Hi, my name is Alex Nye. I'm a freelance composer, sound engineer, music teacher and founder of Music Sequencing, a website/youtube channel/store for some of my music products.
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

</style>

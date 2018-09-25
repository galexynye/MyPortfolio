<template>
    <div id="about" class="subject">
        <div class="section">
            <h2 class="section-solo section-title">About</h2>
        </div>
        <div class="section">
            <div class="section-column story">
                <p>Hi, my name is Alex and I like to create things. My journey from GUI to command line started
                    when I was composing music for movies in Venice California, now known as Silicon Beach.
                </p>
                <p>
                    Being surrounded by happy engineers coupled with the fact that modern music is so dependent on
                    computers I started to study computer science and coding...I fell down a rabbit hole and discovered
                    a new passion. I taught myself web development ultimately learning front-end frameworks/libraries like React and Vue through
                    building various side projects.
                </p>
                <p>

                </p>
                <p>The more I learn the more I want to know, coding for me is a beatiful intersection of art and logic.</p>
            </div>
            <div class="section-column">
                <div class="about-img">
                    <img src="../assets/RiftPic.jpg" alt="">
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
        // border-radius: 50%;
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

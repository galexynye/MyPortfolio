<template>
    <div id="about" class="subject">
        <div class="section">
            <h2 class="section-solo section-title">About</h2>
        </div>
        <div class="section">
            <div class="section-column story">
                <p>Hi, my name is Alex Nye (it rhymes). Coding, to me, is a beatiful intersection of art and logic. My passion for computer science and programming started
                    while composing film music in Venice, California.
                </p>
                <p>
                    My interest started to peak as I watched Venice turn into "Silicon Beach". Meeting software engineers
                     coupled with the fact that our music studio was so reliant on computers
                    I started to study everything I could about computers and programming. I taught myself web development ultimately learning front-end
                    frameworks/libraries like React and Vue through building various side projects.
                </p>
                <p>I left California for Freiburg, Germany, continually advancing my skills as a developer.
                    The more I learn the more I want to know.</p>
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

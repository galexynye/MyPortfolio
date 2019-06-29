<template>
    <div id="about" class="subject">
        <div class="section">
            <h2 class="section-solo section-title">About</h2>
        </div>
        <div class="section">
            <div class="section-column story">
                <p>Hi, my name is Alex Nye. I'm a composer for film / games and an independent producer / artist. Check out my <a style="color:green" href="http://www.grimmforestmusic.com">studio website here.</a>
                    <!-- sound engineer, music teacher and founder of Music Sequencing, a website/youtube channel/store for some of my music products. -->
                </p>
                <p>I teach music production over the internet on MusicSequencing.com and release original songs under the name Saywell. You can listen to some of them below.</p>
                       <div>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/814433031&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        </div>
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

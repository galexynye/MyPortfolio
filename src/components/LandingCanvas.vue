<template>
    <!-- <div id="canvascontainer"> -->
        <canvas id="canvas"></canvas>
    <!-- </div> -->

</template>

<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
    // IIFE to Protect Global Scope
    (() => {
    /* eslint no-mixed-operators: 0 no-use-before-define:0 */
      const canvas = document.querySelector('canvas');
      canvas.style.display = 'block';
      // canvas.style.margin = '20px';
      // const canvasContainer = document.getElementById('canvascontainer');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // canvas.style.transform = 'scale(0.8, 0.8)';
      const c = canvas.getContext('2d');

      window.addEventListener(
        'resize',
        () => {
        // canvas.width = canvasContainer.offsetWidth;
          console.log(window.innerWidth);
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          // const aadsfasdf = new LetterA(50, 100, 'blue');
          // aadsfasdf.draw();
        },
      );
      // eslint-disable-next-line
    let mouse = {
        x: undefined,
        y: undefined,
      };

      window.addEventListener(
        'mousemove',
        (event) => {
          mouse.x = event.x;
          mouse.y = event.y;
        // console.log(mouse);
        },
      );

      // x is x position, y is y position, spaceX is how far it moves on the x axis (for posisitioning next to other letters)
      class Text {
        constructor(x, y, color, scale, spaceX, spaceY) {
          this.x = x;
          this.y = y;
          this.color = color || 'black';
          this.s = scale || 1;
          this.spaceX = spaceX || 0;
          this.spaceY = spaceY || 0;
        }
      }

      class LetterA extends Text {
        constructor(x, y, color, scale, spaceX, spaceY) {
          super(x, y, color, scale, spaceX, spaceY);
          this.morph = 900;
          // this.morph = 0;
          this.draw = this.draw.bind(this);
          this.update = this.update.bind(this);
          this.draw();
        }
        draw() {
          const sx = this.s * this.spaceX;
          const sy = this.s * this.spaceY;
          c.beginPath();
          c.moveTo(0 * this.s + this.x + sx, 300 * this.s + this.y + sy - this.morph);
          c.lineTo(55 * this.s + this.x + sx + this.morph, 0 * this.s + this.y + sy);
          c.lineTo(110 * this.s + this.x + sx, 300 * this.s + this.y + sy + this.morph);
          c.strokeStyle = this.color;
          c.stroke();
          // A Dash
          c.beginPath();
          c.moveTo(30 * this.s + this.x + sx, 130 * this.s + this.y + sy + this.morph);
          c.lineTo(78 * this.s + this.x + sx + this.morph, 130 * this.s + this.y + sy);
          c.strokeStyle = this.color;
          c.stroke();
        }
        update() {
          if ((mouse.x + 150 * this.s) - this.x < 300 && mouse.x - this.x > -50 && (mouse.y - 150 * this.s) - this.y < (150 * this.s) && mouse.y - this.y > -50) {
            if (this.morph < 1000) {
              this.morph += 10;
            }
          } else if (this.morph > 0) {
            this.morph -= 10;
          }
          // this.x += 1;
          this.draw();
        }
      }

      class LetterL extends Text {
        constructor(x, y, color, scale, spaceX, spaceY) {
          super(x, y, color, scale, spaceX, spaceY);
          this.draw = this.draw.bind(this);
          this.morph = 1000;
          this.update = this.update.bind(this);
          this.draw();
        }
        draw() {
          const sx = this.s * this.spaceX;
          const sy = this.s * this.spaceY;
          c.beginPath();
          c.moveTo(70 * this.s + this.x + sx, 300 * this.s + this.y + sy + this.morph);
          c.lineTo(0 * this.s + this.x + sx + this.morph, 300 * this.s + this.y + sy);
          c.lineTo(0 * this.s + this.x + sx - this.morph, 0 * this.s + this.y + sy);
          c.strokeStyle = this.color;
          c.stroke();
        }
        update() {
          if ((mouse.x + 150 * this.s) - this.x < 300 && mouse.x - this.x > -50 && (mouse.y - 150 * this.s) - this.y < (150 * this.s) && mouse.y - this.y > -50) {
            if (this.morph < 1000) {
              this.morph += 10;
            }
          } else if (this.morph > 0) {
            this.morph -= 10;
          }
          // this.x += 1;
          this.draw();
        }
      }

      class LetterE extends Text {
        constructor(x, y, color, scale, spaceX, spaceY) {
          super(x, y, color, scale, spaceX, spaceY);
          this.draw = this.draw.bind(this);
          this.morph = 1000;
          this.update = this.update.bind(this);
        }
        draw() {
          const sx = this.s * this.spaceX;
          const sy = this.s * this.spaceY;
          c.beginPath();
          c.moveTo(0 * this.s + this.x + sx + this.morph, 300 * this.s + this.y + sy + this.morph);
          c.lineTo(0 * this.s + this.x + sx - this.morph, 0 * this.s + this.y + sy);
          c.strokeStyle = this.color;
          c.stroke();
          // E dash top
          c.beginPath();
          c.moveTo(0 * this.s + this.x + sx + this.morph, 0 * this.s + this.y + sy);
          c.lineTo(70 * this.s + this.x + sx, 0 * this.s + this.y + sy - this.morph);
          c.strokeStyle = this.color;
          c.stroke();
          // E dash middle
          c.beginPath();
          c.moveTo(0 * this.s + this.x + sx - this.morph, 130 * this.s + this.y + sy);
          c.lineTo(70 * this.s + this.x + sx, 130 * this.s + this.y + sy + this.morph);
          c.strokeStyle = this.color;
          c.stroke();
          // E dash bottom
          c.beginPath();
          c.moveTo(0 * this.s + this.x + sx, 300 * this.s + this.y + sy + this.morph);
          c.lineTo(70 * this.s + this.x + sx + this.morph, 300 * this.s + this.y + sy);
          c.strokeStyle = this.color;
          c.stroke();
        }
        update() {
          if ((mouse.x + 150 * this.s) - this.x < 300 && mouse.x - this.x > -50 && (mouse.y - 150 * this.s) - this.y < (150 * this.s) && mouse.y - this.y > -50) {
            if (this.morph < 1000) {
              this.morph += 10;
            }
          } else if (this.morph > 0) {
            this.morph -= 10;
          }
          // this.x += 1;
          this.draw();
        }
      }

      class LetterX extends Text {
        constructor(x, y, color, scale, spaceX, spaceY) {
          super(x, y, color, scale, spaceX, spaceY);
          this.draw = this.draw.bind(this);
        }
        draw() {
          const sx = this.s * this.spaceX;
          const sy = this.s * this.spaceY;
          // Draw X
          c.beginPath();
          c.moveTo(0 * this.s + this.x + sx, 300 * this.s + this.y + sy);
          c.lineTo(100 * this.s + this.x + sx, 0 * this.s + this.y + sy);
          c.strokeStyle = this.color;
          c.stroke();
          // X dash 2
          c.beginPath();
          c.moveTo(0 * this.s + this.x + sx, 0 * this.s + this.y + sy);
          c.lineTo(100 * this.s + this.x + sx, 300 * this.s + this.y + sy);
          c.strokeStyle = this.color;
          c.stroke();
        }
      }


      class LetterN extends Text {
        constructor(x, y, color, scale, spaceX, spaceY) {
          super(x, y, color, scale, spaceX, spaceY);
          this.draw = this.draw.bind(this);
        }
        draw() {
          const sx = this.s * this.spaceX;
          const sy = this.s * this.spaceY;
          c.beginPath();
          c.moveTo(0 * this.s + this.x + sx, 300 * this.s + this.y + sy);
          c.lineTo(0 * this.s + this.x + sx, 0 * this.s + this.y + sy);
          c.lineTo(110 * this.s + this.x + sx, 300 * this.s + this.y + sy);
          c.lineTo(110 * this.s + this.x + sx, 0 * this.s + this.y + sy);
          c.strokeStyle = this.color;
          c.stroke();
        }
      }

      class LetterY extends Text {
        constructor(x, y, color, scale, spaceX, spaceY) {
          super(x, y, color, scale, spaceX, spaceY);
          this.draw = this.draw.bind(this);
        }
        draw() {
          const sx = this.s * this.spaceX;
          const sy = this.s * this.spaceY;
          // Letter Y
          c.beginPath();
          c.moveTo(55 * this.s + this.x + sx, 140 * this.s + this.y + sy);
          c.lineTo(55 * this.s + this.x + sx, 300 * this.s + this.y + sy);
          c.strokeStyle = this.color;
          c.stroke();
          // Letter Y
          c.beginPath();
          c.moveTo(0 * this.s + this.x + sx, 0 * this.s + this.y + sy);
          c.lineTo(55 * this.s + this.x + sx, 140 * this.s + this.y + sy);
          c.lineTo(108 * this.s + this.x + sx, 0 * this.s + this.y + sy);
          c.strokeStyle = this.color;
          c.stroke();
        }
      }
      // function WordAlex(x, y, color = 'black', scale = 1) {
      //   const letA = new LetterA(x, y, color, scale, 0, 0);
      //   const letL = new LetterL(x, y, color, scale, 140, 0);
      //   const letE = new LetterE(x, y, color, scale, 235, 0);
      //   const letX = new LetterX(x, y, color, scale, 330, 0);
      //   letA.draw();
      //   letL.draw();
      //   letE.draw();
      //   letX.draw();
      // }
      // function WordNye(x, y, color = 'black', scale = 1) {
      //   const letN = new LetterN(x, y, color, scale, 0, 0);
      //   const letY = new LetterY(x, y, color, scale, 135, 0);
      //   const letE = new LetterE(x, y, color, scale, 265, 0);
      //   letN.draw();
      //   letY.draw();
      //   letE.draw();
      // }


      const TheA1 = new LetterA(200, 100, 'blue');
      const TheL1 = new LetterL(340, 100, 'green');
      const TheE1 = new LetterE(435, 100);
      // const TheA = WordAlex();
      function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);
        TheA1.update();
        TheL1.update();
        TheE1.update();
      }

      animate();

      // WordAlex(120, 20, 'blue');
      // WordNye(100, 350, 'blue');

    // Begin A Letter
    // c.beginPath();
    // c.moveTo(830, 190);
    // c.lineTo(830, 350);
    // c.strokeStyle = '#fa34a3';
    // c.stroke();
    })();
  }, // End of Mount
};


</script>

<style lang="scss" scoped>
    #animation {
        min-width: 100%;
    }
    canvas {
        display: block;
        // position: fixed;
        // z-index: -1;
    }
</style>

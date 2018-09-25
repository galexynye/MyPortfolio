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
      const startX = window.innerWidth / 3.7; // Distance from left
      const startY = window.innerHeight / 3;
      const masterScale = window.innerWidth / 1920;


      // eslint-disable-next-line
    let mouse = {
        x: undefined,
        y: undefined,
      };

      function getMousePos(evt) {
        const rect = canvas.getBoundingClientRect();
        return {
          x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
          y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height,
          r: rect,
        };
      }

      canvas.addEventListener('mousemove', (evt) => {
        const mousePos = getMousePos(evt);
        mouse.x = mousePos.x;
        mouse.y = mousePos.y;
      }, false);


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
          c.lineTo(78 * this.s + this.x + sx - this.morph, 130 * this.s + this.y + sy);
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
          this.draw();
          // this.x += 1;
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
          this.morph = 1000;
          this.update = this.update.bind(this);
        }
        draw() {
          const sx = this.s * this.spaceX;
          const sy = this.s * this.spaceY;
          // Draw X
          c.beginPath();
          c.moveTo(0 * this.s + this.x + sx + this.morph, 300 * this.s + this.y + sy + this.morph);
          c.lineTo(100 * this.s + this.x + sx, 0 * this.s + this.y + sy - this.morph);
          c.strokeStyle = this.color;
          c.stroke();
          // X dash 2
          c.beginPath();
          c.moveTo(0 * this.s + this.x + sx - this.morph, 0 * this.s + this.y + sy);
          c.lineTo(100 * this.s + this.x + sx, 300 * this.s + this.y + sy - this.morph);
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


      class LetterN extends Text {
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
          c.moveTo(0 * this.s + this.x + sx + this.morph, 300 * this.s + this.y + sy - this.morph);
          c.lineTo(0 * this.s + this.x + sx - this.morph, 0 * this.s + this.y + sy);
          c.lineTo(110 * this.s + this.x + sx, 300 * this.s + this.y + sy + this.morph);
          c.lineTo(110 * this.s + this.x + sx + this.morph, 0 * this.s + this.y + sy - this.morph);
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

      class LetterY extends Text {
        constructor(x, y, color, scale, spaceX, spaceY) {
          super(x, y, color, scale, spaceX, spaceY);
          this.draw = this.draw.bind(this);
          this.morph = 1000;
          this.update = this.update.bind(this);
        }
        draw() {
          const sx = this.s * this.spaceX;
          const sy = this.s * this.spaceY;
          // Letter Y Bottom |
          c.beginPath();
          c.moveTo(55 * this.s + this.x + sx + this.morph, 140 * this.s + this.y + sy);
          c.lineTo(55 * this.s + this.x + sx - this.morph, 300 * this.s + this.y + sy);
          c.strokeStyle = this.color;
          c.stroke();
          // Letter Y Top V
          c.beginPath();
          c.moveTo(0 * this.s + this.x + sx - this.morph, 0 * this.s + this.y + sy + this.morph);
          c.lineTo(55 * this.s + this.x + sx, 140 * this.s + this.y + sy + this.morph);
          c.lineTo(108 * this.s + this.x + sx + this.morph, 0 * this.s + this.y + sy - this.morph);
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

      // const TheA1 = new LetterA(550, 150, 'blue');
      // const TheL1 = new LetterL(690, 150, 'green');
      // const TheE1 = new LetterE(785, 150, 'purple');
      // const TheX1 = new LetterX(880, 150, 'red');
      // const TheN1 = new LetterN(880, 470, 'green');
      // const TheY1 = new LetterY(1015, 470, 'orange');
      // const TheE2 = new LetterE(1145, 470, 'purple');
      // const startY = 275;

      const TheA1 = new LetterA(startX, startY, 'blue', masterScale);
      const TheL1 = new LetterL(startX + 140 * masterScale, startY, 'green', masterScale);
      const TheE1 = new LetterE(startX + 235 * masterScale, startY, 'purple', masterScale);
      const TheX1 = new LetterX(startX + 330 * masterScale, startY, 'red', masterScale);
      const TheN1 = new LetterN(startX + 530 * masterScale, startY, 'green', masterScale);
      const TheY1 = new LetterY(startX + 665 * masterScale, startY, 'orange', masterScale);
      const TheE2 = new LetterE(startX + 795 * masterScale, startY, 'purple', masterScale);

      function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);
        TheA1.update();
        TheL1.update();
        TheE1.update();
        TheX1.update();
        TheN1.update();
        TheY1.update();
        TheE2.update();
      }

      // window.addEventListener(
      //   'resize',
      //   () => {
      //     canvas.width = window.innerWidth;
      //     canvas.height = window.innerHeight;
      //     startX = window.innerWidth / 3.7;
      //     startY = window.innerHeight / 3;
      //     masterScale = window.innerWidth / 1920;
      //     TheA1 = new LetterA(startX, startY, 'blue', masterScale);
      //     TheL1 = new LetterL(startX + 140 * masterScale, startY, 'green', masterScale);
      //     TheE1 = new LetterE(startX + 235 * masterScale, startY, 'purple', masterScale);
      //     TheX1 = new LetterX(startX + 330 * masterScale, startY, 'red', masterScale);
      //     TheN1 = new LetterN(startX + 530 * masterScale, startY, 'green', masterScale);
      //     TheY1 = new LetterY(startX + 665 * masterScale, startY, 'orange', masterScale);
      //     TheE2 = new LetterE(startX + 795 * masterScale, startY, 'purple', masterScale);
      //   },
      // );

      animate();


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
        // display: block;
        position: absolute;
        // z-index: -1;
    }
</style>

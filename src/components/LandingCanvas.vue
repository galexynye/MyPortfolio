<template>
    <div id="canvascontainer">
        <canvas id="canvas"></canvas>
    </div>

</template>

<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
    const canvas = document.querySelector('canvas');
    canvas.style.display = 'block';
    // canvas.style.transform = 'scale(0.8, 0.8)';
    // canvas.style.margin = '20px';
    // const canvasContainer = document.getElementById('canvascontainer');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const c = canvas.getContext('2d');

    window.addEventListener(
      'resize',
      () => {
        // canvas.width = canvasContainer.offsetWidth;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // c.fillStyle = '#faabcd';
        // c.fillRect(0, 0, window.innerWidth, window.innerHeight);
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
        console.log(mouse);
      },
    );


    c.fillStyle = '#faabcd'; // Creates the fill color for rectangle
    // c.fillRect(0, 0, window.innerWidth, window.innerHeight);

    /* eslint no-mixed-operators: 0 */
    function LetterA(x, y, s = 1, spacex = 0, spacey = 0) {
      const sx = s * spacex;
      const sy = s * spacey;
      c.beginPath();
      c.moveTo(0 * s + x + sx, 300 * s + y + sy);
      c.lineTo(55 * s + x + sx, 0 * s + y + sy);
      c.lineTo(110 * s + x + sx, 300 * s + y + sy);
      c.strokeStyle = '#fa34a3';
      c.stroke();
      // A Dash
      c.beginPath();
      c.moveTo(30 * s + x + sx, 130 * s + y + sy);
      c.lineTo(78 * s + x + sx, 130 * s + y + sy);
      c.strokeStyle = '#fa34a3';
      c.stroke();
    }


    function LetterL(x, y, s = 1, spacex = 0, spacey = 0) {
      const sx = s * spacex;
      const sy = s * spacey;
      c.beginPath();
      c.moveTo(70 * s + x + sx, 300 * s + y + sy);
      c.lineTo(0 * s + x + sx, 300 * s + y + sy);
      c.lineTo(0 * s + x + sx, 0 * s + y + sy);
      c.strokeStyle = '#fa34a3';
      c.stroke();
    }


    function LetterE(x, y, s = 1, spacex = 0, spacey = 0) {
      const sx = s * spacex;
      const sy = s * spacey;
      // E
      c.beginPath();
      c.moveTo(0 * s + x + sx, 300 * s + y + sy);
      c.lineTo(0 * s + x + sx, 0 * s + y + sy);
      c.strokeStyle = '#fa34a3';
      c.stroke();
      // E dash top
      c.beginPath();
      c.moveTo(0 * s + x + sx, 0 * s + y + sy);
      c.lineTo(70 * s + x + sx, 0 * s + y + sy);
      c.strokeStyle = '#fa34a3';
      c.stroke();
      // E dash middle
      c.beginPath();
      c.moveTo(0 * s + x + sx, 130 * s + y + sy);
      c.lineTo(70 * s + x + sx, 130 * s + y + sy);
      c.strokeStyle = '#fa34a3';
      c.stroke();
      // E dash bottom
      c.beginPath();
      c.moveTo(0 * s + x + sx, 300 * s + y + sy);
      c.lineTo(70 * s + x + sx, 300 * s + y + sy);
      c.strokeStyle = '#fa34a3';
      c.stroke();
    }


    function LetterX(x, y, s = 1, spacex = 0, spacey = 0) {
      const sx = s * spacex;
      const sy = s * spacey;
      // Draw X
      c.beginPath();
      c.moveTo(0 * s + x + sx, 300 * s + y + sy);
      c.lineTo(100 * s + x + sx, 0 * s + y + sy);
      c.strokeStyle = '#fa34a3';
      c.stroke();
      // X dash 2
      c.beginPath();
      c.moveTo(0 * s + x + sx, 0 * s + y + sy);
      c.lineTo(100 * s + x + sx, 300 * s + y + sy);
      c.strokeStyle = '#fa34a3';
      c.stroke();
    }

    function LetterN(x, y, color = 'black', s = 1, spacex = 0, spacey = 0) {
      const sx = s * spacex;
      const sy = s * spacey;
      c.beginPath();
      c.moveTo(0 * s + x + sx, 300 * s + y + sy);
      c.lineTo(0 * s + x + sx, 0 * s + y + sy);
      c.lineTo(110 * s + x + sx, 300 * s + y + sy);
      c.lineTo(110 * s + x + sx, 0 * s + y + sy);
      c.strokeStyle = color;
      c.stroke();
    }

    // LetterN(100, 400, 'blue');


    function LetterY(x, y, color = 'black', s = 1, spacex = 0, spacey = 0) {
      const sx = s * spacex;
      const sy = s * spacey;
      // Letter Y
      c.beginPath();
      c.moveTo(55 * s + x + sx, 140 * s + y + sy);
      c.lineTo(55 * s + x + sx, 300 * s + y + sy);
      c.strokeStyle = color;
      c.stroke();
      // Letter Y
      c.beginPath();
      c.moveTo(0 * s + x + sx, 0 * s + y + sy);
      c.lineTo(55 * s + x + sx, 140 * s + y + sy);
      c.lineTo(108 * s + x + sx, 0 * s + y + sy);
      c.strokeStyle = color;
      c.stroke();
    }

    // LetterY(100, 200, 'purple');


    function WordAlex(x, y, s) {
      LetterA(x, y, s);
      LetterL(x, y, s, 140);
      LetterE(x, y, s, 235);
      LetterX(x, y, s, 330);
    }

    function WordNye(x, y, s) {
      LetterN(x, y, 'red', s);
      LetterY(x, y, 'purple', s, 140);
      LetterE(x, y, s, 270);
    }

    WordAlex(100, 50, 1);
    WordNye(100, 50, 1);
    WordAlex(100, 400, 1);
    WordNye(650, 400, 1);

    // Begin A Letter
    // c.beginPath();
    // c.moveTo(830, 190);
    // c.lineTo(830, 350);
    // c.strokeStyle = '#fa34a3';
    // c.stroke();
  },
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

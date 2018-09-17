<template>
    <div id="canvascontainer">
        <canvas></canvas>
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
    // const canvasContainer = document.getElementById('canvascontainer');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener(
      'resize',
      () => {
        // canvas.width = canvasContainer.offsetWidth;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
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

    const c = canvas.getContext('2d');
    // Draw an A
    c.beginPath(); // Starts a segment
    c.moveTo(200, 400); // Starting point
    c.lineTo(300, 100); // Next Point
    c.lineTo(375, 400); // Next Point
    c.strokeStyle = '#fa34a3';
    c.stroke(); // Actually Renders the line

    // A Dash
    c.beginPath(); // Starts a segment
    c.moveTo(256, 230); // Starting point
    c.lineTo(345, 230); // Next Point
    c.strokeStyle = '#fa34a3';
    c.stroke(); // Actually Renders the line
    // L
    c.beginPath(); // Starts a segment
    c.moveTo(430, 400); // Starting point
    c.lineTo(430, 100); // Next Point
    c.strokeStyle = '#fa34a3';
    c.stroke(); // Actually Renders the line

    // E
    c.beginPath(); // Starts a segment
    c.moveTo(475, 400); // Starting point
    c.lineTo(475, 100); // Next Point
    c.strokeStyle = '#fa34a3';
    c.stroke(); // Actually Renders the line
    // E dash top
    c.beginPath(); // Starts a segment
    c.moveTo(475, 100); // Starting point
    c.lineTo(550, 100); // Next Point
    c.strokeStyle = '#fa34a3';
    c.stroke(); // Actually Renders the line
    // E dash middle
    c.beginPath(); // Starts a segment
    c.moveTo(475, 230); // Starting point
    c.lineTo(525, 230); // Next Point
    c.strokeStyle = '#fa34a3';
    c.stroke(); // Actually Renders the line
    // E dash bottom
    c.beginPath(); // Starts a segment
    c.moveTo(475, 400); // Starting point
    c.lineTo(550, 400); // Next Point
    c.strokeStyle = '#fa34a3';
    c.stroke(); // Actually Renders the line


    // Draw X
    c.beginPath(); // Starts a segment
    c.moveTo(575, 400); // Starting point
    c.lineTo(675, 100); // Next Point
    c.strokeStyle = '#fa34a3';
    c.stroke(); // Actually Renders the line
    // X dash 2
    c.beginPath(); // Starts a segment
    c.moveTo(575, 100); // Starting point
    c.lineTo(675, 400); // Next Point
    c.strokeStyle = '#fa34a3';
    c.stroke(); // Actually Renders the line
  },
};


</script>

<style lang="scss" scoped>
    #animation {
        min-width: 100%;
    }
    canvas {
        display: block;
        overflow-x: hidden;
        // position: fixed;
        // z-index: -1;
    }
</style>

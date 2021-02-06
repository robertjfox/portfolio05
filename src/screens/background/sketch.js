function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(window.innerWidth-10, window.innerHeight-10)
    p5.frameRate(8)
  }

  p5.draw = () => {
    p5.clear()
    p5.push()
    for (let i = 0; i < 500; i++) {
        const x = getRandomInt(window.innerWidth)
        const y = getRandomInt(window.innerHeight)
        const size = getRandomInt(3) + 1
        const fill = getRandomInt(20) + 40
        p5.ellipse(x, y, size)
        p5.noStroke()
        p5.fill(fill)
    }
    p5.pop()
  }
}

export default Sketch
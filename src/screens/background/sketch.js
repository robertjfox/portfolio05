function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const Sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(window.innerWidth - 10, window.innerHeight - 10)
    p5.frameRate(8)
  }

  p5.draw = () => {
    p5.clear()
    p5.push()
    p5.noStroke()

    for (let i = 0; i < 500; i++) {
      const x = getRandomInt(window.innerWidth)
      const y = getRandomInt(window.innerHeight)
      const yPercentage = (y / window.innerHeight).toFixed(2)
      const size = getRandomInt(3) + 2
      const fill = yPercentage * 50 + 205
      p5.fill(fill, fill, fill, 20)
      p5.ellipse(x, y, size)
    }
    p5.pop()
  }
}

export default Sketch

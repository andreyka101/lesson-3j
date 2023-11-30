import './style.scss'

{
  let canvas = document.querySelector('canvas') as HTMLCanvasElement
  let ctx = canvas.getContext('2d') as any
  // ctx.stroke()
  setInterval(() =>{
    ctx.beginPath()
    ctx.fillStyle = '#363636'
    ctx.fillRect(0, 0, canvas.width*canvas.width, canvas.height*canvas.height)

    ctx.moveTo(0, 0);
    ctx.lineTo(50,100)
    ctx.lineTo(150,70)
    ctx.closePath()
    ctx.fillStyle = '#448a67'
    ctx.fill()
    ctx.fillStyle = 'red'
    ctx.fillRect(70,80,50,50)
    ctx.fillStyle = '#FFFF00'
    ctx.fillRect(-100,-80,10,10)
    ctx.rotate(20 * Math.PI / 360);
  },200)
}
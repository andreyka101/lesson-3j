import './style.scss'

{
  let canvas = document.querySelector('canvas') as HTMLCanvasElement
  let ctx = canvas.getContext('2d') as any
  // ctx.stroke()
  ctx.translate(50,50)
  setInterval(() =>{
    ctx.beginPath()
    ctx.fillStyle = '#363636'
    ctx.fillRect(-100,-100, canvas.width*canvas.width, canvas.height*canvas.height)
    
    // ctx.moveTo(0, 0);
    // ctx.lineTo(50,100)
    // ctx.lineTo(150,70)
    // ctx.closePath()
    // ctx.fillStyle = '#448a67'
    // ctx.fill()
    ctx.fillStyle = 'red'
    ctx.rotate(1 * Math.PI / 360);
    ctx.fillRect(-25,-25,50,50)
  },20)
}
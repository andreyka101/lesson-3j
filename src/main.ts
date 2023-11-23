import './style.scss'
{
  let canvas = document.querySelector('canvas') as HTMLCanvasElement
  let ctx = canvas.getContext('2d') as any
  ctx.beginPath()
  ctx.moveTo(0, 0);
  ctx.lineTo(50,100)
  ctx.lineTo(150,70)
  ctx.closePath()
  ctx.fillStyle = '#448a67'
  ctx.fill()
  // ctx.stroke()
  ctx.fillStyle = 'red'
  ctx.rotate(20 * Math.PI / 2);
  ctx.fillRect(70,80,50,50)
}
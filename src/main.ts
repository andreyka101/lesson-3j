import './style.scss'
{
  let canvas = document.querySelector('canvas') as HTMLCanvasElement
  let ctx = canvas.getContext('2d');
  ctx?.beginPath()
  ctx?.moveTo(0, 0);
  ctx?.lineTo(50,100)
  ctx?.stroke()
}
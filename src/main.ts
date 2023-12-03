import './style.scss'
import LiveBackgroundMod from './live_background.ts'


let liveBackground = new LiveBackgroundMod()
liveBackground.start()
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);


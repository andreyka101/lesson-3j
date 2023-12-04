import './interfaces_GLASSlOLLIPOPS.scss'
import LiveBackgroundMod from './live_background.ts'


let liveBackground = new LiveBackgroundMod()
liveBackground.startAnimationClassic()
console.log(document.documentElement.clientWidth);


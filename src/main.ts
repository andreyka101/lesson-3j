import './interfaces_GLASSlOLLIPOPS.scss'
import LiveBackgroundMod from './live_background.ts'


let liveBackground = new LiveBackgroundMod()
liveBackground.startAnimationClassic()
console.log(document.documentElement.clientWidth);



//@ts-ignore
let detect = new MobileDetect(window.navigator.userAgent) as any
//@ts-ignore
console.log("Mobile: " + detect.mobile()); 
console.log(window.innerWidth); 


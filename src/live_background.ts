import './style.scss'

export default class LiveBackgroundMod {
  #body
  #color = "8"
  #nameId = [0,1,2,3,4,5,6]
  constructor() {
    this.#body = document.querySelector('body') as HTMLBodyElement
  }
  start(){
    this.#body.innerHTML += `<svg id="backgroundSVG_${this.#nameId[0]}" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.481 19.481" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 19.481 19.481"><g><path d="m10.201,.758l2.478,5.865 6.344,.545c0.44,0.038 0.619,0.587 0.285,0.876l-4.812,4.169 1.442,6.202c0.1,0.431-0.367,0.77-0.745,0.541l-5.452-3.288-5.452,3.288c-0.379,0.228-0.845-0.111-0.745-0.541l1.442-6.202-4.813-4.17c-0.334-0.289-0.156-0.838 0.285-0.876l6.344-.545 2.478-5.864c0.172-0.408 0.749-0.408 0.921,0z"/></g></svg>`
    this.#body.innerHTML += `<svg version="1.1" id="backgroundSVG_${this.#nameId[1]}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve"><polygon points="245,456.701 490,33.299 0,33.299 "/></svg>`
    this.#body.innerHTML += `<svg version="1.1" id="backgroundSVG_${this.#nameId[2]}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve"><path d="M287.582,136.751h11.012V29.563H191.406v107.187h11.011L77.136,353.249H0v107.188h107.187v-43.35h275.625v43.35H490V353.249 h-77.136L287.582,136.751z M107.187,386.461v-23.983l130.613-225.728h14.398l130.613,225.728v23.983H107.187z"/></svg>`
    this.#body.innerHTML += `<svg version="1.1" id="backgroundSVG_${this.#nameId[3]}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M418.069,0H93.909C42.042,0,0,42.042,0,93.909v324.181C0,469.958,42.042,512,93.909,512h324.16 c51.87,0,93.931-42.044,93.931-93.909V93.909C512,42.044,469.939,0,418.069,0z M469.333,418.091 c0,28.297-22.955,51.243-51.264,51.243H93.909c-28.303,0-51.243-22.939-51.243-51.243V93.909 c0-28.303,22.939-51.243,51.243-51.243h324.16c28.309,0,51.264,22.945,51.264,51.243V418.091z"/></g></g></svg>`
    this.#body.innerHTML += `<svg version="1.1" id="backgroundSVG_${this.#nameId[4]}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 166.492 166.492" style="enable-background:new 0 0 166.492 166.492;" xml:space="preserve"><path d="M166.492,166.492H0V0h166.492V166.492z"/></svg>`
    this.#body.innerHTML += `<svg version="1.1" id="backgroundSVG_${this.#nameId[5]}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 347.113 347.113" style="enable-background:new 0 0 347.113 347.113;" xml:space="preserve"><g><g><path d="M171.647,2.874L169.3,0L36.582,176.082l-1.414,1.861l142.007,168.378l0.664,0.792l132.685-178.324l1.423-1.853 L171.647,2.874z"/></g></g></svg>`
    this.#body.innerHTML += `<svg version="1.1" id="backgroundSVG_${this.#nameId[6]}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40.731 40.731" style="enable-background:new 0 0 40.731 40.731;" xml:space="preserve"><g><path d="M37.761,19.833c0.114,0.164,0.184,0.363,0.184,0.578c0,0.431-0.271,0.797-0.653,0.938 c-1.546,1.096-9.82,7.307-16.016,18.733c-0.122,0.304-0.378,0.548-0.7,0.621c-0.084,0.021-0.168,0.027-0.252,0.027 c-0.339,0-0.656-0.156-0.832-0.453c-0.047-0.07-0.084-0.146-0.112-0.228c-0.804-1.56-6.132-11.422-15.984-18.756 c-0.358-0.152-0.608-0.507-0.608-0.921c0-0.008,0-0.016,0-0.022c-0.004-0.19,0.045-0.381,0.149-0.549 c0.118-0.19,0.295-0.333,0.499-0.41c1.279-0.894,9.649-7.022,15.965-18.612C19.499,0.334,19.899,0,20.376,0 c0.196,0,0.379,0.057,0.533,0.154c0.213,0.12,0.376,0.316,0.455,0.553c0.613,1.209,5.938,11.318,16.04,18.802 C37.548,19.587,37.672,19.698,37.761,19.833z"/></g></svg>`

    for (let i of this.#nameId){
      let element = document.querySelector(`#backgroundSVG_${i}`) as HTMLElement
      element.style.cssText += `
  fill : #51EB00;
  width: ${Math.round(Math.random() * (400 - 30) + 30)}px;
  height: ${Math.round(Math.random() * (400 - 30) + 30)}px;
  top: ${(Math.random() * (92 - -10) + -10).toFixed(2)}%;
  left: ${(Math.random() * (92 - -10) + -10).toFixed(2)}%;
  filter: blur(2px);
  position: fixed;
  transition: 0.5s;
  `
}

setInterval(()=>{
  for (let i of this.#nameId){
  let element = document.querySelector(`#backgroundSVG_${i}`) as HTMLElement
  // element.style.filter = `blur(50px)`
  }


  
  setTimeout(()=>{
    for (let i of this.#nameId){
      switch (Math.round(Math.random() * (31 - 1) + 1)) {
        case 1:
            this.#color = "ffffff"
            break;
          case 2:
            this.#color = "e8b5b5"
            break;
          case 3:
            this.#color = "fa8282"
            break;
          case 4:
            this.#color = "e62c2c"
            break;
          case 5:
            this.#color = "f244a7"
            break;
          case 6:
            this.#color = "ff75c3"
            break;
          case 7:
            this.#color = "c430db"
            break;
          case 8:
            this.#color = "b868c4"
            break;
          case 9:
            this.#color = "740ff7"
            break;
          case 10:
            this.#color = "a581d4"
            break;
          case 11:
            this.#color = "c5a2f2"
            break;
          case 12:
            this.#color = "525df7"
            break;
          case 13:
            this.#color = "878bc9"
            break;
          case 14:
            this.#color = "429eff"
            break;
          case 15:
            this.#color = "91c6ff"
            break;
          case 16:
            this.#color = "1afbff"
            break;
          case 17:
            this.#color = "8afdff"
            break;
          case 18:
            this.#color = "1ef7af"
            break;
          case 19:
            this.#color = "9be8cf"
            break;
          case 20:
            this.#color = "98e88b"
            break;
          case 21:
            this.#color = "bbf7b2"
            break;
          case 22:
            this.#color = "c2e084"
            break;
          case 23:
            this.#color = "e1ffa6"
            break;
          case 24:
            this.#color = "f5ff3d"
            break;
          case 25:
            this.#color = "f1f5ab"
            break;
          case 26:
            this.#color = "f2da3f"
            break;
          case 27:
            this.#color = "ffaa00"
            break;
          case 28:
            this.#color = "f7b52f"
            break;
          case 29:
            this.#color = "fcca65"
            break;
          case 30:
            this.#color = "f7d58f"
            break;
          case 31:
            this.#color = "e0d1b1"
            break;
        }

        let element = document.querySelector(`#backgroundSVG_${i}`) as HTMLElement
        element.style.cssText += `
    fill : #${this.#color};
    width: ${Math.round(Math.random() * (400 - 30) + 30)}px;
    height: ${Math.round(Math.random() * (400 - 30) + 30)}px;
    top: ${(Math.random() * (92 - -10) + -10).toFixed(2)}%;
    left: ${(Math.random() * (92 - -10) + -10).toFixed(2)}%;
    `
      }
      setTimeout(()=>{
        for (let i of this.#nameId){
          let element = document.querySelector(`#backgroundSVG_${i}`) as HTMLElement
          element.style.filter = `blur(${Math.round(Math.random() * (35 - 10) + 10)}px)`
          }
      },600)
    },700)
    },5700)
  }
}
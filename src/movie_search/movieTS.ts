import '../GLASSlOLLIPOPS/interfaces_GLASSlOLLIPOPS.scss'
import './movieStyle.scss'
import LiveBackgroundMod from '../GLASSlOLLIPOPS/live_background.ts'

// console.log("m3".slice(1));
// console.log(parseInt("m33".slice(1)) % 2);


let liveBackground = new LiveBackgroundMod()
liveBackground.backgroundPC.Classic.changeSVG([
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.512 456.512" style="enable-background:new 0 0 456.512 456.512;" xml:space="preserve"><g><path d="M252.5,83.052c-46.715-46.714-122.723-46.713-169.436,0c-22.629,22.629-35.091,52.715-35.091,84.718 c0,32.002,12.462,62.088,35.091,84.717c23.359,23.36,54.033,35.035,84.718,35.035c30.677,0,61.364-11.681,84.718-35.035 c22.629-22.629,35.091-52.715,35.091-84.717C287.591,135.767,275.129,105.68,252.5,83.052z M241.186,241.173 c-40.474,40.475-106.333,40.474-146.808,0c-19.607-19.607-30.405-45.676-30.405-73.404c0-27.729,10.798-53.797,30.405-73.404 c20.238-20.237,46.821-30.356,73.404-30.356c26.583,0,53.167,10.119,73.404,30.356c19.607,19.607,30.405,45.675,30.405,73.404 C271.591,195.497,260.793,221.566,241.186,241.173z"/><path d="M167.782,73.026c-4.418,0-8,3.582-8,8s3.582,8,8,8c43.419,0,78.744,35.324,78.744,78.744c0,4.418,3.582,8,8,8s8-3.582,8-8 C262.526,115.527,220.024,73.026,167.782,73.026z"/><path d="M440.692,364.232L318.365,241.906c11.238-22.774,17.186-47.997,17.186-74.136c0-44.813-17.451-86.943-49.139-118.631 C254.725,17.451,212.595,0,167.782,0c-44.813,0-86.943,17.451-118.63,49.138C17.464,80.826,0.013,122.956,0.013,167.769 c0,44.813,17.451,86.943,49.139,118.63c31.687,31.688,73.817,49.139,118.63,49.139c26.14,0,51.362-5.948,74.136-17.185 l122.326,122.326c10.21,10.21,23.785,15.833,38.225,15.833c14.438,0,28.014-5.623,38.224-15.833 C461.768,419.602,461.768,385.309,440.692,364.232z M70.365,265.187c-26.021-26.021-40.352-60.618-40.352-97.417 c0-36.8,14.331-71.396,40.352-97.418C96.386,44.331,130.982,30,167.782,30c36.799,0,71.396,14.331,97.417,40.352 c26.021,26.021,40.352,60.618,40.352,97.417c0,36.799-14.33,71.396-40.352,97.417c-26.021,26.021-60.618,40.352-97.417,40.352 C130.982,305.538,96.386,291.208,70.365,265.187z M419.479,419.466c-4.544,4.544-10.585,7.046-17.011,7.046 s-12.467-2.502-17.011-7.046L268.193,302.202c6.384-4.789,12.475-10.058,18.219-15.802c5.744-5.744,11.013-11.835,15.802-18.219 l117.264,117.264C428.858,394.824,428.858,410.087,419.479,419.466z"/></g></svg>',
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 637.414 637.414" style="enable-background:new 0 0 637.414 637.414;" xml:space="preserve"><g><g><path d="M596.715,0v31.74h-68.407V0h-27.985v58.037H137.079V0h-27.985v31.74H40.686V0H12.701v637.414h27.985v-31.74h68.408v31.74 h27.985v-58.023h363.256v58.023h27.985v-31.74h68.407v31.74h27.985V0H596.715z M109.094,529.758H40.686v-48.713h68.408V529.758z M109.094,405.379H40.686v-48.713h68.408V405.379z M109.094,280.484H40.686v-48.713h68.408V280.484z M109.094,156.119H40.686 v-48.713h68.408V156.119z M500.323,514.535H137.079V122.879h363.256v391.656H500.323z M596.715,529.758h-68.407v-48.713h68.407 V529.758z M596.715,405.379h-68.407v-48.713h68.407V405.379z M596.715,280.484h-68.407v-48.713h68.407V280.484z M596.715,156.119 h-68.407v-48.713h68.407V156.119z"/><polygon points="240.427,182.529 240.427,454.887 414.262,318.714 "/></g></g></svg>',
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 425 425" style="enable-background:new 0 0 425 425;" xml:space="preserve"><g id="XMLID_7_"><path id="XMLID_227_" d="M285.877,367.5C336.483,334.452,370,277.32,370,212.5c0-102.009-82.99-185-185-185S0,110.491,0,212.5 s82.99,185,185,185h240v-30H285.877z M185,57.5c85.467,0,155,69.533,155,155s-69.533,155-155,155s-155-69.533-155-155 S99.533,57.5,185,57.5z"/><path id="XMLID_230_" d="M185,167.5c24.814,0,45-20.187,45-45s-20.186-45-45-45s-45,20.187-45,45S160.186,167.5,185,167.5z M185,107.5c8.271,0,15,6.729,15,15s-6.729,15-15,15s-15-6.729-15-15S176.729,107.5,185,107.5z"/><path id="XMLID_233_" d="M185,257.5c-24.814,0-45,20.187-45,45s20.186,45,45,45s45-20.187,45-45S209.814,257.5,185,257.5z M185,317.5c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S193.271,317.5,185,317.5z"/><path id="XMLID_237_" d="M95,257.5c24.813,0,45-20.187,45-45s-20.187-45-45-45s-45,20.187-45,45S70.187,257.5,95,257.5z M95,197.5 c8.271,0,15,6.729,15,15s-6.729,15-15,15s-15-6.729-15-15S86.729,197.5,95,197.5z"/><path id="XMLID_240_" d="M275,257.5c24.814,0,45-20.187,45-45s-20.186-45-45-45s-45,20.187-45,45S250.186,257.5,275,257.5z M275,197.5c8.272,0,15,6.729,15,15s-6.728,15-15,15s-15-6.729-15-15S266.728,197.5,275,197.5z"/></g></svg>',
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 219.488 219.488" style="enable-background:new 0 0 219.488 219.488;" xml:space="preserve"><path d="M20.145,97.294v77.065h42.297l-28.855,45.129h23.738l28.855-45.129h14.932l28.854,45.129h23.738l-28.855-45.129h42.297 v-27.716h12.832l24.668,8h14.5v-52.666h-14.5l-24.668,8h-12.832V97.293c12.091-10.106,19.799-25.289,19.799-42.243 c0-30.355-24.694-55.05-55.049-55.05c-14.539,0-28.12,5.606-38.251,15.436C83.513,5.607,69.932,0,55.395,0 C25.039,0,0.344,24.695,0.344,55.05C0.344,72.004,8.053,87.188,20.145,97.294z M55.395,20c12.178,0,23.305,6.185,29.764,16.547 l16.973-0.001C108.589,26.185,119.716,20,131.895,20c19.326,0,35.049,15.723,35.049,35.05c0,19.326-15.723,35.05-35.049,35.05 c-12.179,0-23.306-6.186-29.764-16.547l-16.973-0.001C78.699,83.913,67.572,90.1,55.395,90.1c-19.327,0-35.051-15.724-35.051-35.05 C20.344,35.723,36.067,20,55.395,20z"/></svg>',
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 294.536 294.536" style="enable-background:new 0 0 294.536 294.536;" xml:space="preserve"><path d="M269.536,104.285v8.906h-16.509V92.557H109.422l20.963-36.143h108.526v-25H115.984L80.521,92.557H47.642v42.149L0,120.735 v114.208l47.642-13.97v42.149h205.385V160.223h16.509v8.906h25v-64.844H269.536z M148.126,244.15c-11.044,0-20-8.953-20-20 c0-11.047,8.956-20,20-20c11.051,0,20,8.953,20,20C168.126,235.197,159.177,244.15,148.126,244.15z M212.381,244.15 c-11.043,0-20-8.954-20-20s8.957-20,20-20c11.049,0,20,8.954,20,20S223.429,244.15,212.381,244.15z"/></svg>',
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 348.082 348.082" style="enable-background:new 0 0 348.082 348.082;" xml:space="preserve"><path d="M297.107,50.976c-67.967-67.967-178.164-67.967-246.131,0c-67.968,67.967-67.968,178.164,0,246.131 c67.967,67.967,178.164,67.967,246.131,0C365.074,229.14,365.074,118.943,297.107,50.976z M79.452,295.602 c-10.241-7.624-19.35-16.731-26.973-26.972c22.998-17.114,46.002-34.22,69.002-51.331c3.159,4.246,5.056,6.143,9.3,9.299 C113.671,249.6,96.561,272.6,79.452,295.602z M209.397,209.397c-19.526,19.526-51.186,19.525-70.711,0 c-19.526-19.526-19.526-51.185,0-70.711c19.526-19.526,51.185-19.526,70.711,0C228.922,158.211,228.923,189.87,209.397,209.397z M226.6,130.783c-3.159-4.246-5.056-6.144-9.299-9.298c17.109-23.001,34.221-46.001,51.329-69.004 c10.241,7.623,19.349,16.73,26.972,26.972C272.605,96.567,249.6,113.672,226.6,130.783z"/></svg>',
    '<svg viewBox="0 0 512 512.00023" xmlns="http://www.w3.org/2000/svg"><path d="m467 91h-205.066406l64.730468-65.453125c5.824219-5.886719 5.773438-15.386719-.117187-21.210937-5.890625-5.828126-15.386719-5.773438-21.210937.117187l-79.335938 80.214844-79.335938-80.214844c-5.824218-5.890625-15.320312-5.941406-21.210937-.117187-5.890625 5.824218-5.941406 15.324218-.117187 21.210937l64.730468 65.453125h-145.066406c-24.8125 0-45 20.1875-45 45v301c0 24.8125 20.1875 45 45 45h24.789062l-4.394531 4.394531c-5.859375 5.855469-5.859375 15.355469 0 21.210938 2.925781 2.929687 6.765625 4.394531 10.605469 4.394531s7.679688-1.464844 10.605469-4.394531l25.609375-25.605469h288.574218l25.605469 25.605469c2.925781 2.929687 6.765625 4.394531 10.605469 4.394531s7.679688-1.464844 10.605469-4.394531c5.859375-5.855469 5.859375-15.351563 0-21.210938l-4.390625-4.394531h23.785156c24.8125 0 45-20.1875 45-45v-301c0-24.8125-20.1875-45-45-45zm15 346c0 8.269531-6.730469 15-15 15h-422c-8.269531 0-15-6.730469-15-15v-301c0-8.269531 6.730469-15 15-15h422c8.269531 0 15 6.730469 15 15zm0 0"/><path d="m316 151h-210c-24.8125 0-45 20.1875-45 45v180c0 24.8125 20.1875 45 45 45h210c24.8125 0 45-20.1875 45-45v-180c0-24.8125-20.1875-45-45-45zm15 225c0 8.269531-6.730469 15-15 15h-210c-8.269531 0-15-6.730469-15-15v-180c0-8.269531 6.730469-15 15-15h210c8.269531 0 15 6.730469 15 15zm0 0"/><path d="m422 166c-16.542969 0-30 13.457031-30 30s13.457031 30 30 30 30-13.457031 30-30-13.457031-30-30-30zm0 0"/><path d="m437 256h-30c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h30c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm0 0"/><path d="m437 316h-30c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h30c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm0 0"/><path d="m437 376h-30c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h30c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm0 0"/></svg>',
    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455.323 455.323" style="enable-background:new 0 0 455.323 455.323;" xml:space="preserve"><g><polygon points="361.877,71.35 381.797,59.849 347.243,0 268.173,45.651 362.025,70.799 "/><polygon points="268.333,125.357 325.833,92.16 231.982,67.012 232.129,66.461 174.629,99.659 268.481,124.807 "/><polygon points="174.788,179.366 232.289,146.167 138.437,121.02 138.584,120.47 81.084,153.667 174.936,178.815 "/><polygon points="365.582,240.503 299.672,240.503 299.832,240.664 248.135,292.361 313.724,292.361 "/><polygon points="407.687,240.503 407.848,240.664 356.151,292.361 430.203,292.361 430.203,240.503 "/><polygon points="205.709,292.361 257.566,240.503 191.655,240.503 191.816,240.664 140.118,292.361 "/><rect x="58.247" y="322.361" width="371.956" height="132.963"/><polygon points="58.247,292.361 97.692,292.361 149.55,240.503 68.894,240.503 138.744,200.176 44.893,175.028 45.04,174.477 25.12,185.978 58.247,243.356 "/></g></svg>',
])
liveBackground.backgroundPC.Classic.start()
liveBackground.backgroundPhone.Classic.start()



// const butt = document.querySelector("div button") as HTMLButtonElement
// const input = document.querySelector("#search input") as HTMLInputElement
// const select = document.querySelector("select") as HTMLSelectElement
// const add = document.querySelector("#add") as HTMLDivElement
// let m_num = 2
// let m_numControl = 10
// let page = 3
// let movieALL = "" as any

// let dataId = 1

const el = document.querySelector(`[data-id="${1}"]`)


// let response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&s=${commitsTranslation.responseData.translatedText}&page=1&type=${select.value}`)
// let commits = await response.json()
// console.log(commits.Search)





const search_button = document.querySelector("#search button") as HTMLButtonElement
const search_input = document.querySelector("#search input") as HTMLInputElement
const search_select = document.querySelector("#search select") as HTMLSelectElement
const add_block_film = document.querySelector("#add") as HTMLDivElement
let target: any
let page_Global = 3
let id_Global = 15
let index_Global = 20


document.querySelector("#add")?.addEventListener("click", (e)=>{

    const target = e.target as HTMLElement
    const mainBlockFilm = target.closest('.mainBlockFilm') as HTMLElement

    if(target.tagName != "BUTTON") return
    // console.log(target);
    // console.log(mainBlockFilm.dataset.id);

    let num_id = NaN
    if(+(mainBlockFilm.dataset.id as string) % 2 == 0) num_id = 1 
    if(+(mainBlockFilm.dataset.id as string) % 2 == 1) num_id = -1 
    
    if(target.className == "GLASSlOLLIPOPS_button expand"){

        const neighboringBlockFilm = document.querySelector(`[data-id="${+(mainBlockFilm.dataset.id as string) + num_id}"]`) as HTMLElement
        // console.log(neighboringBlockFilm.dataset.id);
        if(window.innerWidth>907){
            neighboringBlockFilm.classList.add("off_PC")
            mainBlockFilm.classList.add("maximumLength_PC")
            setTimeout(()=>{
                mainBlockFilm.classList.add("maximumLength_buttonText_PC")
            },1100)
        }
        else{
            mainBlockFilm.classList.add("maximumLength_Phone")
            // setTimeout(()=>{
                mainBlockFilm.classList.add("maximumLength_buttonText_PC")
            // },1100)
        }
    }
    if(target.className == "GLASSlOLLIPOPS_button collapse"){
        
        const neighboringBlockFilm = document.querySelector(`[data-id="${+(mainBlockFilm.dataset.id as string) + num_id}"]`) as HTMLElement
        // console.log(neighboringBlockFilm.dataset.id);
        mainBlockFilm.classList.remove("maximumLength_buttonText_PC")
        mainBlockFilm.classList.add("minimumLength_buttonText_PC")
        if(window.innerWidth>907){
        mainBlockFilm.classList.remove("maximumLength_PC")
        mainBlockFilm.classList.add("minimumLength_PC")
        
        
        neighboringBlockFilm.classList.remove("off_PC")
        neighboringBlockFilm.classList.add("on_PC")
            neighboringBlockFilm.classList.add("on_buttonText_PC")
            setTimeout(()=>{
                // if(window.innerWidth>907){
                    neighboringBlockFilm.classList.remove("on_PC")
                    neighboringBlockFilm.classList.remove("on_buttonText_PC")
                    // }
                    mainBlockFilm.classList.remove("minimumLength_PC")
                    mainBlockFilm.classList.remove("minimumLength_buttonText_PC")
                },1100)
            }
            else{
                // console.log("ellle");
                
                mainBlockFilm.classList.remove("maximumLength_Phone")
                mainBlockFilm.classList.add("minimumLength_Phone")
            // setTimeout(()=>{
                mainBlockFilm.classList.remove("minimumLength_Phone")
                mainBlockFilm.classList.remove("minimumLength_buttonText_PC")
            // },1100)
        }
            

    }
    
})


search_button?.addEventListener("click", async ()=>{
    add_block_film.innerHTML = ""
    let response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&s=${search_input.value}&page=1&type=${search_select.value}`)
    let commits = await response.json()
    let response2 = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&s=${search_input.value}&page=2&type=${search_select.value}`)
    let commits2 = await response2.json()
    // console.log(commits);
    // console.log(commits2);
    if(commits.Response){
        let arrFilms = commits.Search.concat(commits2.Search) as any
        // console.log("arrFilms.length")
        // console.log(arrFilms.length)
        // console.log("arrFilms.length")
        let text_output = ""
        for(let index = 0 ; index!= arrFilms.length;index+=2){
            // console.log(arrFilms[index]);
            text_output = `<div class="twoFilms" style="display: flex; justify-content: center; flex-wrap: wrap;">`
            for(let two_i=0;two_i != 2;two_i++){
                response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&i=${arrFilms[index+two_i].imdbID}&plot=full`)
                commits = await response.json()
                let PlotFull = commits.Plot

                text_output += `<div class="GLASSlOLLIPOPS_div mainBlockFilm" data-id="${index+two_i}">
                <div class="film_imgSpan">
                    <img src="${arrFilms[index+two_i].Poster}"
                        alt="">
                    <div>
                        <span>
                        ${arrFilms[index+two_i].Title}
                        </span>
                        <span>
                        ${arrFilms[index+two_i].Year}
                        </span>
                        <span class="longText">
                            ${PlotFull}
                        </span>
                        <span class="shortText">
                             ${PlotFull.substring(0, 150) + "..."}
                        </span>
                    </div>
                </div>
                <div class="A2ButtonBlock">
                    <a href="" class="GLASSlOLLIPOPS_a">поиск на РУС.</a>
                    <button class="GLASSlOLLIPOPS_button collapse">свернуть</button>
                    <a href="" class="GLASSlOLLIPOPS_a">поиск на ENG.</a>
                </div>
                <div class="buttonBlock">
                    <button class="GLASSlOLLIPOPS_button expand">развернуть</button>
                </div>
            </div>`
            }
            text_output += `</div>`
            add_block_film.innerHTML += text_output
        }
        // add_block_film.innerHTML += '<div id="gig">gig</div>'
        // console.log(text_output);
        target = document.querySelector(`[data-id="${id_Global}"]`) as any
        
        
        const body = document.querySelector('body')
        const callback = (entries: any, observer: any) => {
            entries.forEach(async (entry: any) => {
                if (entry.isIntersecting) {
                    // console.log("iiggggg");
                    let response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&s=${search_input.value}&page=${page_Global}&type=${search_select.value}`)
                    let commits = await response.json()
                    let arrFilms = commits.Search
                    if(commits.Response){
                        // console.log(arrFilms)
                        let text_output = ""
                        for(let index = 0 ; index!= arrFilms.length;index+=2){
                            // console.log(arrFilms[index]);
                            text_output = `<div class="twoFilms" style="display: flex; justify-content: center; flex-wrap: wrap;">`
                            for(let two_i=0;two_i != 2;two_i++){
                                response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&i=${arrFilms[index+two_i].imdbID}&plot=full`)
                                commits = await response.json()
                                let PlotFull = commits.Plot
                
                                text_output += `<div class="GLASSlOLLIPOPS_div mainBlockFilm" data-id="${index+two_i + index_Global}">
                                <div class="film_imgSpan">
                                <img src="${arrFilms[index+two_i].Poster}"
                                        alt="">
                                    <div>
                                        <span>
                                        ${arrFilms[index+two_i].Title}
                                        </span>
                                        <span>
                                        ${arrFilms[index+two_i].Year}
                                        </span>
                                        <span class="longText">
                                            ${PlotFull}
                                        </span>
                                        <span class="shortText">
                                             ${PlotFull.substring(0, 150) + "..."}
                                        </span>
                                    </div>
                                </div>
                                <div class="A2ButtonBlock">
                                    <a href="" class="GLASSlOLLIPOPS_a">поиск на РУС.</a>
                                    <button class="GLASSlOLLIPOPS_button collapse">свернуть</button>
                                    <a href="" class="GLASSlOLLIPOPS_a">поиск на ENG.</a>
                                </div>
                                <div class="buttonBlock">
                                    <button class="GLASSlOLLIPOPS_button expand">развернуть</button>
                                </div>
                            </div>`
                            }
                            text_output += `</div>`
                            add_block_film.innerHTML += text_output
                        }
                        id_Global += 10
                        page_Global +=1
                        index_Global += 20
                        target = document.querySelector(`[data-id="${id_Global}"]`) as any
                        get_if_target(callback, options,target)
                        // console.log("12345678912345678123456781234567")
                    }
                }
            })
        }
        const options = {
            // root: по умолчанию window, но можно задать любой элемент-контейнер
            rootMargin: '0px',
            threshold: 0,
        }
        let observer = new IntersectionObserver(callback, options)
        // get_if_target(callback, options,target)
        if (target) observer.observe(target)
        // console.log(id_Global)
    }
})
function get_if_target(callback:any,options:any,targ:any){
    
    // console.log(target)
    console.log("12345678912345678123456781234567")
    let observer = new IntersectionObserver(callback, options)
    if (targ) observer.observe(targ)
}




// const body = document.querySelector('body')
// const callback = (entries :any, observer:any) => {
//       entries.forEach((entry:any) => {
//         if (entry.isIntersecting) {
//           console.log('Элемент пересёк границу области и всё ещё соприкасается с ней!')
//         //   document.querySelector("#pip").className = "colorJS"
//         }
//       })
//     }
//     const options = {
//       // root: по умолчанию window, но можно задать любой элемент-контейнер
//       rootMargin: '0px',
//       threshold: 0,
//     }
//     let observer = new IntersectionObserver(callback, options)
    
//     const target = document.querySelector(`#gig`) as HTMLElement
//     if(target) observer.observe(target)
    
//     // ggggggggggggggggggggggggggggggggggggggg
    
//     const callback2 = (entries:any, observer:any) => {
//       entries.forEach((entry:any) => {
//         if (entry.isIntersecting) {
//           console.log('ggggggg')
//         //   document.querySelector("#pip").className = "colorCSS"
//         }
//       })
//     }
//     const options2 = {
//       // root: по умолчанию window, но можно задать любой элемент-контейнер
//       rootMargin: '0px 0px 100px 0px',
//       threshold: 0,
//     }
//     observer = new IntersectionObserver(callback2, options2)










// target = document.querySelector(`#gig`) as any

        // const body = document.querySelector('body')
        // const callback = (entries: any, observer: any) => {
        //     entries.forEach(async (entry: any) => {
        //         if (entry.isIntersecting) {
        //             console.log("iiggggg");
                    

        //         }
        //     })
        // }
        // const options = {
        //     // root: по умолчанию window, но можно задать любой элемент-контейнер
        //     rootMargin: '0px',
        //     threshold: 0,
        // }
        // let observer = new IntersectionObserver(callback, options)

        // if (target) observer.observe(target)
        // console.log(target)







console.log(window.innerWidth);
if(window.innerWidth <908){
    document.querySelector('html')?.style.setProperty('--MAX_width_BlockFilm', window.innerWidth +'px')
}
else{
    document.querySelector('html')?.style.setProperty('--MAX_width_BlockFilm', 924 +'px')

}
if(window.innerWidth < 481){
    document.querySelector('html')?.style.setProperty('--MAX_width_BlockFilm', window.innerWidth + 40 +'px')
}


































































// async function name() {
//     try {
//         // let responseTranslation = await fetch(`https://api.mymemory.translated.net/get?q=${input.value}&langpair=ru|en`)
//         // let commitsTranslation = await responseTranslation.json()
//         // console.log(commitsTranslation.responseData.translatedText)



//         let response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&s=${input.value}&page=1&type=${select.value}`)
//         let commits = await response.json()
//         console.log(commits.Search)
//         let search = commits.Search




//         // for (let i = 0; i != 10; i++) {
//         //     let idFilm = commits.Search[i].imdbID
//         //     response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&i=${idFilm}&plot=full`)
//         //     commits = await response.json()
//         //     arrPlotFull[i] = commits.Plot.substring(0, 500)
//         //     console.log(arrPlotFull[i]);
//         // }



//         for (let i = 0; i != 10; i += 2) {
//             let idFilm = search[i].imdbID
//             response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&i=${idFilm}&plot=full`)
//             commits = await response.json()
//             let PlotFull = commits.Plot
//             idFilm = search[i + 1].imdbID
//             response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&i=${idFilm}&plot=full`)
//             commits = await response.json()
//             let PlotFull2 = commits.Plot


//             add.innerHTML += `<div style="display: flex; justify-content: center; flex-wrap: wrap;">
//             <div class="GLASSlOLLIPOPS_div mainBlockFilm" id="m${m_num - 1}" style="">
//                 <div class="film_imgSpan">
//                     <img src="${search[i].Poster}"
//                         alt="">
//                     <div>
//                         <span>
//                             ${search[i].Title}
//                         </span>
//                         <span>
//                             ${search[i].Year}
//                         </span>
//                         <span class="longText" style="display: none;">
//                             ${PlotFull}
//                             </span>
//                             <span class="shortText">
//                             ${PlotFull.substring(0, 150) + "..."}
//                         </span>
//                     </div>
//                 </div>
//                 <div class="A2ButtonBlock" style="display: none;">
//                 <a href="https://yandex.ru/search/?text=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i].Title}+${search[i].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&lr=239&clid=2411726" class="GLASSlOLLIPOPS_a" target="_blank">поиск на яндекс.</a>
//                 <button class="GLASSlOLLIPOPS_button collapse">свернуть</button>
//                 <a href="https://www.google.com/search?q=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i].Title}+${search[i].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&sca_esv=591540615&sxsrf=AM9HkKnSsl41ffnnpJUkglW8H5wAPZEcPA%3A1702755291217&ei=2_t9Zf3rDKqEwPAPxq6YUA&ved=0ahUKEwi9xZbi2ZSDAxUqAhAIHUYXBgoQ4dUDCBA&oq=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i].Title}+${search[i].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&gs_lp=Egxnd3Mtd2l6LXNlcnAiMtGB0LzQvtGC0YDQtdGC0Ywg0YTQuNC70YzQvCA1NTUg0LHQtdGB0L_Qu9Cw0YLQvdC-SOweUIkGWOsKcAF4AZABAZgB9QOgAY4HqgEHMC4zLjUtMbgBDMgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgIGB7iAwQYACBBiAYBkAYH&sclient=gws-wiz-serp" target="_blank" class="GLASSlOLLIPOPS_a">поиск на google.</a>
//                 </div>
//                 <div class="buttonBlock" style="">
//                     <button class="GLASSlOLLIPOPS_button expand">развернуть</button>
//                 </div>
//             </div>
//             <div class="GLASSlOLLIPOPS_div mainBlockFilm" id="m${m_num}" style="">
//                 <div class="film_imgSpan">
//                 <img src="${search[i + 1].Poster}"
//                 alt="">
//             <div>
//                 <span>
//                     ${search[i + 1].Title}
//                 </span>
//                 <span>
//                 ${search[i + 1].Year}
//                 </span>
//                 <span class="longText" style="display: none;">
//                     ${PlotFull2}
//                     </span>
//                     <span class="shortText">
//                     ${PlotFull2.substring(0, 150) + "..."}
//                 </span>
//                 </div>
//                 </div>
//                 <div class="A2ButtonBlock" style="display: none;">
//                 <a href="https://yandex.ru/search/?text=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i + 1].Title}+${search[i + 1].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&lr=239&clid=2411726" class="GLASSlOLLIPOPS_a" target="_blank">поиск на яндекс.</a>
//                 <button class="GLASSlOLLIPOPS_button collapse">свернуть</button>
//                 <a href="https://www.google.com/search?q=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i + 1].Title}+${search[i + 1].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&sca_esv=591540615&sxsrf=AM9HkKnSsl41ffnnpJUkglW8H5wAPZEcPA%3A1702755291217&ei=2_t9Zf3rDKqEwPAPxq6YUA&ved=0ahUKEwi9xZbi2ZSDAxUqAhAIHUYXBgoQ4dUDCBA&oq=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i + 1].Title}+${search[i + 1].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&gs_lp=Egxnd3Mtd2l6LXNlcnAiMtGB0LzQvtGC0YDQtdGC0Ywg0YTQuNC70YzQvCA1NTUg0LHQtdGB0L_Qu9Cw0YLQvdC-SOweUIkGWOsKcAF4AZABAZgB9QOgAY4HqgEHMC4zLjUtMbgBDMgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgIGB7iAwQYACBBiAYBkAYH&sclient=gws-wiz-serp" target="_blank" class="GLASSlOLLIPOPS_a">поиск на google.</a>
//                 </div>
//                 <div class="buttonBlock" style="">
//                     <button class="GLASSlOLLIPOPS_button expand">развернуть</button>
//                     </div>
//                     </div>
//                     </div>`
//             m_num += 2
//         }


//         response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&s=${input.value}&page=2&type=${select.value}`)
//         commits = await response.json()
//         console.log(commits.Search)
//         search = commits.Search



//         for (let i = 0; i != 10; i += 2) {
//             let idFilm = search[i].imdbID
//             response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&i=${idFilm}&plot=full`)
//             commits = await response.json()
//             let PlotFull = commits.Plot
//             idFilm = search[i + 1].imdbID
//             response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&i=${idFilm}&plot=full`)
//             commits = await response.json()
//             let PlotFull2 = commits.Plot


//             add.innerHTML += `<div style="display: flex; justify-content: center; flex-wrap: wrap;">
//             <div class="GLASSlOLLIPOPS_div mainBlockFilm" id="m${m_num - 1}" data-id="${m_num}" style="">
//                 <div class="film_imgSpan">
//                 <img src="${search[i].Poster}"
//                 alt="">
//                 <div>
//                 <span>
//                 ${search[i].Title}
//                 </span>
//                 <span>
//                 ${search[i].Year}
//                 </span>
//                 <span class="longText" style="display: none;">
//                 ${PlotFull}
//                 </span>
//                 <span class="shortText">
//                 ${PlotFull.substring(0, 150) + "..."}
//                 </span>
//                 </div>
//                 </div>
//                 <div class="A2ButtonBlock" style="display: none;">
//                 <a href="https://yandex.ru/search/?text=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i].Title}+${search[i].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&lr=239&clid=2411726" class="GLASSlOLLIPOPS_a" target="_blank">поиск на яндекс.</a>
//                 <button class="GLASSlOLLIPOPS_button collapse">свернуть</button>
//                 <a href="https://www.google.com/search?q=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i].Title}+${search[i].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&sca_esv=591540615&sxsrf=AM9HkKnSsl41ffnnpJUkglW8H5wAPZEcPA%3A1702755291217&ei=2_t9Zf3rDKqEwPAPxq6YUA&ved=0ahUKEwi9xZbi2ZSDAxUqAhAIHUYXBgoQ4dUDCBA&oq=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i].Title}+${search[i].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&gs_lp=Egxnd3Mtd2l6LXNlcnAiMtGB0LzQvtGC0YDQtdGC0Ywg0YTQuNC70YzQvCA1NTUg0LHQtdGB0L_Qu9Cw0YLQvdC-SOweUIkGWOsKcAF4AZABAZgB9QOgAY4HqgEHMC4zLjUtMbgBDMgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgIGB7iAwQYACBBiAYBkAYH&sclient=gws-wiz-serp" target="_blank" class="GLASSlOLLIPOPS_a">поиск на google.</a>
//                 </div>
//                 <div class="buttonBlock" style="">
//                     <button class="GLASSlOLLIPOPS_button expand">развернуть</button>
//                     </div>
//                     </div>
//                     <div class="GLASSlOLLIPOPS_div mainBlockFilm" id="m${m_num}" style="">
//                 <div class="film_imgSpan">
//                 <img src="${search[i + 1].Poster}"
//                 alt="">
//                 <div>
//                 <span>
//                     ${search[i + 1].Title}
//                     </span>
//                 <span>
//                 ${search[i + 1].Year}
//                 </span>
//                 <span class="longText" style="display: none;">
//                 ${PlotFull2}
//                 </span>
//                 <span class="shortText">
//                 ${PlotFull2.substring(0, 150) + "..."}
//                 </span>
//                 </div>
//                 </div>
//                 <div class="A2ButtonBlock" style="display: none;">
//                 <a href="https://yandex.ru/search/?text=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i + 1].Title}+${search[i + 1].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&lr=239&clid=2411726" class="GLASSlOLLIPOPS_a" target="_blank">поиск на яндекс.</a>
//                 <button class="GLASSlOLLIPOPS_button collapse">свернуть</button>
//                 <a href="https://www.google.com/search?q=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i + 1].Title}+${search[i + 1].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&sca_esv=591540615&sxsrf=AM9HkKnSsl41ffnnpJUkglW8H5wAPZEcPA%3A1702755291217&ei=2_t9Zf3rDKqEwPAPxq6YUA&ved=0ahUKEwi9xZbi2ZSDAxUqAhAIHUYXBgoQ4dUDCBA&oq=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i + 1].Title}+${search[i + 1].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&gs_lp=Egxnd3Mtd2l6LXNlcnAiMtGB0LzQvtGC0YDQtdGC0Ywg0YTQuNC70YzQvCA1NTUg0LHQtdGB0L_Qu9Cw0YLQvdC-SOweUIkGWOsKcAF4AZABAZgB9QOgAY4HqgEHMC4zLjUtMbgBDMgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgIGB7iAwQYACBBiAYBkAYH&sclient=gws-wiz-serp" target="_blank" class="GLASSlOLLIPOPS_a">поиск на google.</a>
//                 </div>
//                 <div class="buttonBlock" style="">
//                     <button class="GLASSlOLLIPOPS_button expand">развернуть</button>
//                     </div>
//                     </div>
//                     </div>`
//             m_num += 2
//             console.log(i);
//         }



        // let target = document.querySelector('#m' + m_numControl) as any

        // const body = document.querySelector('body')
        // const callback = (entries: any, observer: any) => {
        //     entries.forEach(async (entry: any) => {
        //         if (entry.isIntersecting) {


        //             response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&s=${input.value}&page=${page}&type=${select.value}`)
        //             commits = await response.json()
        //             console.log(commits.Search)
        //             search = commits.Search



        //             for (let i = 0; i != 10; i += 2) {
        //                 let idFilm = search[i].imdbID
        //                 response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&i=${idFilm}&plot=full`)
        //                 commits = await response.json()
        //                 let PlotFull = commits.Plot
        //                 idFilm = search[i + 1].imdbID
        //                 response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&i=${idFilm}&plot=full`)
        //                 commits = await response.json()
        //                 let PlotFull2 = commits.Plot


        //                 add.innerHTML += `<div style="display: flex; justify-content: center; flex-wrap: wrap;">
        // <div class="GLASSlOLLIPOPS_div mainBlockFilm" id="m${m_num - 1}" style="">
        //     <div class="film_imgSpan">
        //     <img src="${search[i].Poster}"
        //     alt="">
        //     <div>
        //     <span>
        //     ${search[i].Title}
        //     </span>
        //     <span>
        //     ${search[i].Year}
        //     </span>
        //     <span class="longText" style="display: none;">
        //     ${PlotFull}
        //     </span>
        //     <span class="shortText">
        //     ${PlotFull.substring(0, 150) + "..."}
        //     </span>
        //     </div>
        //     </div>
        //     <div class="A2ButtonBlock" style="display: none;">
        //     <a href="https://yandex.ru/search/?text=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i].Title}+${search[i].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&lr=239&clid=2411726" class="GLASSlOLLIPOPS_a" target="_blank">поиск на яндекс.</a>
        //     <button class="GLASSlOLLIPOPS_button collapse">свернуть</button>
        //     <a href="https://www.google.com/search?q=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i].Title}+${search[i].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&sca_esv=591540615&sxsrf=AM9HkKnSsl41ffnnpJUkglW8H5wAPZEcPA%3A1702755291217&ei=2_t9Zf3rDKqEwPAPxq6YUA&ved=0ahUKEwi9xZbi2ZSDAxUqAhAIHUYXBgoQ4dUDCBA&oq=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i].Title}+${search[i].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&gs_lp=Egxnd3Mtd2l6LXNlcnAiMtGB0LzQvtGC0YDQtdGC0Ywg0YTQuNC70YzQvCA1NTUg0LHQtdGB0L_Qu9Cw0YLQvdC-SOweUIkGWOsKcAF4AZABAZgB9QOgAY4HqgEHMC4zLjUtMbgBDMgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgIGB7iAwQYACBBiAYBkAYH&sclient=gws-wiz-serp" target="_blank" class="GLASSlOLLIPOPS_a">поиск на google.</a>
        //     </div>
        //     <div class="buttonBlock" style="">
        //         <button class="GLASSlOLLIPOPS_button expand">развернуть</button>
        //         </div>
        //         </div>
        //         <div class="GLASSlOLLIPOPS_div mainBlockFilm" id="m${m_num}" style="">
        //     <div class="film_imgSpan">
        //     <img src="${search[i + 1].Poster}"
        //     alt="">
        //     <div>
        //     <span>
        //         ${search[i + 1].Title}
        //         </span>
        //     <span>
        //     ${search[i + 1].Year}
        //     </span>
        //     <span class="longText" style="display: none;">
        //     ${PlotFull2}
        //     </span>
        //     <span class="shortText">
        //     ${PlotFull2.substring(0, 150) + "..."}
        //     </span>
        //     </div>
        //     </div>
        //     <div class="A2ButtonBlock" style="display: none;">
        //     <a href="https://yandex.ru/search/?text=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i + 1].Title}+${search[i + 1].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&lr=239&clid=2411726" class="GLASSlOLLIPOPS_a" target="_blank">поиск на яндекс.</a>
        //     <button class="GLASSlOLLIPOPS_button collapse">свернуть</button>
        //     <a href="https://www.google.com/search?q=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i + 1].Title}+${search[i + 1].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&sca_esv=591540615&sxsrf=AM9HkKnSsl41ffnnpJUkglW8H5wAPZEcPA%3A1702755291217&ei=2_t9Zf3rDKqEwPAPxq6YUA&ved=0ahUKEwi9xZbi2ZSDAxUqAhAIHUYXBgoQ4dUDCBA&oq=%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC+${search[i + 1].Title}+${search[i + 1].Year}+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&gs_lp=Egxnd3Mtd2l6LXNlcnAiMtGB0LzQvtGC0YDQtdGC0Ywg0YTQuNC70YzQvCA1NTUg0LHQtdGB0L_Qu9Cw0YLQvdC-SOweUIkGWOsKcAF4AZABAZgB9QOgAY4HqgEHMC4zLjUtMbgBDMgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgIGB7iAwQYACBBiAYBkAYH&sclient=gws-wiz-serp" target="_blank" class="GLASSlOLLIPOPS_a">поиск на google.</a>
        //     </div>
        //     <div class="buttonBlock" style="">
        //         <button class="GLASSlOLLIPOPS_button expand">развернуть</button>
        //         </div>
        //         </div>
        //         </div>`
        //                 m_num += 2
        //                 console.log(i);
        //             }


        //             page++
        //             m_numControl += 10
        //             target = document.querySelector('#m' + m_numControl) as any
        //             if (target) observer.observe(target)
        //             console.log('Элемент пересёк границу области и всё ещё соприкасается с ней!')
        //             console.log(target)

        //         }
        //     })
        // }
        // const options = {
        //     // root: по умолчанию window, но можно задать любой элемент-контейнер
        //     rootMargin: '0px',
        //     threshold: 0,
        // }
        // let observer = new IntersectionObserver(callback, options)

        // if (target) observer.observe(target)
        // console.log(target)


 
        // let response = await fetch("https://www.omdbapi.com/?&apikey=928973f2&s=max")
        // let commits = await response.json()

        // let ttt =commits.Search[0].imdbID
        // response = await fetch(`https://www.omdbapi.com/?&apikey=928973f2&i=${ttt}`)
        // commits = await response.json()
        // console.log(commits.Plot)
        // let ltl = commits.Plot
        // response = await fetch(`https://api.mymemory.translated.net/get?q=${ltl}&langpair=en|ru`)
        // commits = await response.json()
        // console.log(commits.responseData.translatedText)

        // response = await fetch("https://www.omdbapi.com/?&apikey=928973f2&s=max&page=2")
        // commits = await response.json()
        // console.log(commits)
//     }
//     catch {
//         alert("ошибка")
//     }
// }

// butt?.addEventListener("click", () => {
//     // console.log(input.value)
//     name()
// })




// // const movieALL = document.querySelectorAll(".mainBlockFilm") as any
// function buttonMovie() {
//     for (let i of movieALL) {

//         i?.addEventListener("click", (e: any) => {
//             console.log("clic");

//             let target = e.target as HTMLElement

//             if (target.className != 'GLASSlOLLIPOPS_button expand' && target.className != 'GLASSlOLLIPOPS_button collapse') return
            
//             // i.children[0]
//             const A2ButtonBlock = i.querySelector(`.A2ButtonBlock`) as HTMLSpanElement
//             const buttonBlock = document.querySelector(`#${i.id} .buttonBlock`) as HTMLSpanElement
//             const longText = document.querySelector(`#${i.id} .longText`) as HTMLSpanElement
//             const shortText = document.querySelector(`#${i.id} .shortText`) as HTMLSpanElement
//             const img = document.querySelector(`#${i.id} img`) as HTMLElement
//             const film_imgSpan = document.querySelector(`#${i.id} .film_imgSpan`) as HTMLDivElement


//             if (target.className == 'GLASSlOLLIPOPS_button expand') {
//                 // parseInt
//                 if (parseInt(i.slice(1)) % 2 == 1) {
//                     const eighbour = document.querySelector(`#m${parseInt(i.slice(1)) + 1}`) as HTMLDivElement

//                     if (window.innerWidth <= 907) {
//                         if (window.innerWidth <= 770) film_imgSpan.style.flexDirection = "column"
//                         i.style.transition = "0s"
//                         setTimeout(() => {
//                             i.style.transition = "0.3s"
//                             i.style.width = "100%"
//                             i.style.marginRight = "20px"
//                             setTimeout(() => {
//                                 A2ButtonBlock.style.display = "flex"
//                                 buttonBlock.style.display = "none"
//                                 setTimeout(() => {
//                                     img.style.height = "280px"
//                                     shortText.style.display = "none"
//                                     longText.style.display = "inline-block"
//                                 }, 310)
//                             }, 100)
//                         }, 40)
//                     }
//                     else {
//                         i.style.transition = "0s"
//                         eighbour.style.opacity = "0"
//                         setTimeout(() => {
//                             eighbour.style.display = "none"
//                             i.style.marginRight = "478px"
//                             setTimeout(() => {
//                                 i.style.transition = "0.3s"
//                                 i.style.width = "818px"
//                                 i.style.marginRight = "20px"
//                                 setTimeout(() => {
//                                     A2ButtonBlock.style.display = "flex"
//                                     buttonBlock.style.display = "none"
//                                     setTimeout(() => {
//                                         img.style.height = "280px"
//                                         shortText.style.display = "none"
//                                         longText.style.display = "inline-block"
//                                     }, 310)
//                                 }, 100)
//                             }, 40)
//                         }, 300)
//                     }
//                 }
//                 else {
//                     const eighbour = document.querySelector(`#m${parseInt(i.slice(1)) - 1}`) as HTMLDivElement
//                     if (window.innerWidth <= 907) {
//                         if (window.innerWidth <= 770) film_imgSpan.style.flexDirection = "column"
//                         i.style.transition = "0s"
//                         setTimeout(() => {
//                             i.style.transition = "0.3s"
//                             i.style.width = "100%"
//                             i.style.marginRight = "20px"
//                             setTimeout(() => {
//                                 A2ButtonBlock.style.display = "flex"
//                                 buttonBlock.style.display = "none"
//                                 setTimeout(() => {
//                                     img.style.height = "280px"
//                                     shortText.style.display = "none"
//                                     longText.style.display = "inline-block"
//                                 }, 310)
//                             }, 100)
//                         }, 40)
//                     }
//                     else {
//                         i.style.transition = "0s"
//                         eighbour.style.opacity = "0"
//                         setTimeout(() => {
//                             eighbour.style.display = "none"
//                             i.style.marginLeft = "478px"
//                             setTimeout(() => {
//                                 i.style.transition = "0.3s"
//                                 i.style.width = "818px"
//                                 i.style.marginLeft = "20px"
//                                 setTimeout(() => {
//                                     A2ButtonBlock.style.display = "flex"
//                                     buttonBlock.style.display = "none"
//                                     setTimeout(() => {
//                                         img.style.height = "280px"
//                                         shortText.style.display = "none"
//                                         longText.style.display = "inline-block"
//                                     }, 310)
//                                 }, 100)
//                             }, 40)
//                         }, 300)
//                     }
//                 }
//             }
//             if (target.className == 'GLASSlOLLIPOPS_button collapse') {
//                 if (parseInt(i.slice(1)) % 2 == 1) {
//                     const eighbour = document.querySelector(`#m${parseInt(i.slice(1)) + 1}`) as HTMLDivElement
//                     if (window.innerWidth <= 907) {
//                         img.style.height = "223px"
//                         longText.style.display = "none"
//                         shortText.style.display = "inline-block"
//                         if (window.innerWidth <= 460) i.style.width = "100%"
//                         else i.style.width = "364px"
//                         setTimeout(() => {
//                             A2ButtonBlock.style.display = "none"
//                             buttonBlock.style.display = "flex"
//                             if (window.innerWidth >= 460 && window.innerWidth <= 770) film_imgSpan.style.flexDirection = "row"
//                         }, 100)
//                     }
//                     else {
//                         img.style.height = "223px"
//                         longText.style.display = "none"
//                         shortText.style.display = "inline-block"
//                         i.style.width = "364px"
//                         i.style.marginRight = "478px"
//                         setTimeout(() => {
//                             A2ButtonBlock.style.display = "none"
//                             buttonBlock.style.display = "flex"
//                         }, 100)
//                         setTimeout(() => {
//                             i.style.transition = "0s"
//                             i.style.marginRight = "20px"
//                             eighbour.style.display = "inline-block"
//                         }, 310)
//                         setTimeout(() => {
//                             eighbour.style.opacity = "1"
//                         }, 320)
//                     }
//                 }
//                 else {
//                     const eighbour = document.querySelector(`#m${parseInt(i.slice(1)) - 1}`) as HTMLDivElement
//                     if (window.innerWidth <= 907) {
//                         img.style.height = "223px"
//                         longText.style.display = "none"
//                         shortText.style.display = "inline-block"
//                         if (window.innerWidth <= 460) i.style.width = "100%"
//                         else i.style.width = "364px"
//                         setTimeout(() => {
//                             A2ButtonBlock.style.display = "none"
//                             buttonBlock.style.display = "flex"
//                             if (window.innerWidth >= 460 && window.innerWidth <= 770) film_imgSpan.style.flexDirection = "row"
//                         }, 100)
//                     }
//                     else {
//                         img.style.height = "223px"
//                         longText.style.display = "none"
//                         shortText.style.display = "inline-block"
//                         i.style.width = "364px"
//                         i.style.marginLeft = "478px"
//                         setTimeout(() => {
//                             A2ButtonBlock.style.display = "none"
//                             buttonBlock.style.display = "flex"
//                         }, 100)
//                         setTimeout(() => {
//                             i.style.transition = "0s"
//                             i.style.marginLeft = "20px"
//                             eighbour.style.display = "inline-block"
//                         }, 310)
//                         setTimeout(() => {
//                             eighbour.style.opacity = "1"
//                         }, 320)
//                     }
//                 }
//             }

//         })
//     }
// }


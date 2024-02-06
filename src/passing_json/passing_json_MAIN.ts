import '../GLASSlOLLIPOPS/interfaces_GLASSlOLLIPOPS.scss'
import './passing_json_STYLE.scss'
import LiveBackgroundMod from '../GLASSlOLLIPOPS/live_background.ts'


let liveBackground = new LiveBackgroundMod()
liveBackground.backgroundPC.Classic.changeSVG([
    `<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m3.87868 1.87868c.56261-.56261 1.32567-.87868 2.12132-.87868h8.5c.2652 0 .5196.10536.7071.29289l5.5 5.5c.1875.18754.2929.44189.2929.70711v12.5c0 .7957-.3161 1.5587-.8787 2.1213s-1.3256.8787-2.1213.8787h-14c-.55228 0-1-.4477-1-1s.44772-1 1-1h14c.2652 0 .5196-.1054.7071-.2929s.2929-.4419.2929-.7071v-12.08579l-4.9142-4.91421h-8.0858c-.26522 0-.51957.10536-.70711.29289-.18753.18754-.29289.44189-.29289.70711v4c0 .55228-.44772 1-1 1s-1-.44772-1-1v-4c0-.79565.31607-1.55871.87868-2.12132z"/><path d="m14 1c.5523 0 1 .44772 1 1v5h5c.5523 0 1 .44772 1 1s-.4477 1-1 1h-6c-.5523 0-1-.44772-1-1v-6c0-.55228.4477-1 1-1z"/><path d="m2.58579 11.5858c.37507-.3751.88378-.5858 1.41421-.5858.55228 0 1 .4477 1 1s-.44772 1-1 1v1c0 .3541-.09391.6985-.26794 1 .17403.3015.26794.6459.26794 1v1c.55228 0 1 .4477 1 1s-.44772 1-1 1c-.53043 0-1.03914-.2107-1.41421-.5858-.37508-.3751-.58579-.8838-.58579-1.4142v-1c-.55228 0-1-.4477-1-1s.44772-1 1-1v-1c0-.5304.21071-1.0391.58579-1.4142z"/><path d="m7 12c0-.5523.44772-1 1-1 .53043 0 1.03914.2107 1.41421.5858.37508.3751.58579.8838.58579 1.4142v1c.5523 0 1 .4477 1 1s-.4477 1-1 1v1c0 .5304-.21071 1.0391-.58579 1.4142-.37507.3751-.88378.5858-1.41421.5858-.55228 0-1-.4477-1-1s.44772-1 1-1v-1c0-.3541.09391-.6985.26794-1-.17403-.3015-.26794-.6459-.26794-1v-1c-.55228 0-1-.4477-1-1z"/></g></svg>`,
    `<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m8.99996 22h1v-2h-.989c-.308-.006-3.011-.173-3.011-4 0-1.993-.665-3.246-1.502-4 .837-.754 1.502-2.007 1.502-4 0-3.827 2.703-3.994 3-4h1v-2h-1.002c-1.729.004-4.998 1.264-4.998 6 0 2.8-1.678 2.99-2.014 3l.014 2c.082 0 2 .034 2 3 0 4.736 3.269 5.996 5 6zm13.00004-11c-.082 0-2-.034-2-3 0-4.736-3.269-5.996-5-6h-1v2h.989c.308.006 3.011.173 3.011 4 0 1.993.665 3.246 1.502 4-.837.754-1.502 2.007-1.502 4 0 3.827-2.703 3.994-3 4h-1v2h1.002c1.729-.004 4.998-1.264 4.998-6 0-2.8 1.678-2.99 2.014-3z"/></svg>`,
    `<svg id="Layer_1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m63.333 30h20l-20-20z"/><path d="m63.333 36.667c-3.682 0-6.666-2.988-6.666-6.667v-20h-33.334c-3.682 0-6.666 2.981-6.666 6.667v66.666c0 3.679 2.984 6.667 6.666 6.667h53.334c3.678 0 6.666-2.981 6.666-6.667v-46.666zm-20 15h-3.333c-.921 0-1.667.745-1.667 1.666v20c0 .918.746 1.667 1.667 1.667h3.333v5h-3.333c-3.682 0-6.667-2.988-6.667-6.667v-20c0-3.682 2.985-6.666 6.667-6.666h3.333zm23.334 21.666c0 3.682-2.988 6.667-6.667 6.667h-3.333v-5h3.333c.918 0 1.667-.745 1.667-1.667v-20c0-.918-.749-1.666-1.667-1.666h-3.333v-5h3.333c3.679 0 6.667 2.988 6.667 6.666z"/></svg>`,
    `<svg id="Layer_1" enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m62 22.9v18.3c0 .5-.4.9-.9.9h-2.5c-.4 0-.7-.2-.8-.6l-3.8-11.5v11.1c0 .5-.4.9-.9.9h-2.3c-.5 0-.9-.4-.9-.9v-18.2c0-.5.4-.9.9-.9h2.5c.4 0 .7.2.8.6l3.9 11.4v-11.1c0-.5.4-.9.9-.9h2.3c.4 0 .8.4.8.9z"/><path d="m42.7 42h-5.3c-.9 0-1.7-.4-2.4-1-.6-.6-1-1.5-1-2.4v-13.3c0-.9.4-1.7 1-2.4.6-.6 1.5-1 2.4-1h5.3c.9 0 1.7.4 2.4 1 .6.6 1 1.5 1 2.4v13.3c0 .9-.4 1.7-1 2.4-.7.6-1.5 1-2.4 1zm-3.8-4h2.3c.5 0 .9-.4.9-.9v-10.2c0-.5-.4-.9-.9-.9h-2.3c-.5 0-.9.4-.9.9v10.3c0 .4.4.8.9.8z"/><path d="m26.7 42h-7.8c-.5 0-.9-.4-.9-.9v-2.3c0-.5.4-.9.9-.9h6.3c.5 0 .9-.4.9-.9v-2.3c0-.5-.4-.9-.9-.9h-3.2c-1.1 0-2.1-.4-2.8-1.2-.8-.5-1.2-1.5-1.2-2.6v-4.7c0-.9.4-1.7 1-2.4.6-.6 1.5-1 2.4-1h7.8c.5 0 .9.4.9.9v2.3c0 .5-.4.9-.9.9h-6.3c-.5 0-.9.4-.9.9v2.3c0 .5.4.9.9.9h3.1c1.1 0 2.1.4 2.8 1.2s1.2 1.8 1.2 2.8v4.7c0 .9-.4 1.7-1 2.4-.6.4-1.4.8-2.3.8z"/><path d="m10.7 42h-5.4c-.9 0-1.7-.4-2.4-1-.6-.6-1-1.5-1-2.4v-3.8c.1-.4.5-.8.9-.8h2.3c.5 0 .9.4.9.8v2.3c0 .5.4.9.8.9h2.3c.5 0 .8-.4.8-.8v-14.4c0-.5.4-.8.8-.8h2.3c.5 0 .8.4.8.8v15.8c0 .9-.4 1.7-1 2.4-.4.6-1.2 1-2.1 1z"/></svg>`,
    `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M503.467,187.733H409.6v-68.267H298.667c-4.71,0-8.533-3.823-8.533-8.533V0H8.533C3.823,0,0,3.823,0,8.533v494.933 C0,508.177,3.823,512,8.533,512h392.533c4.71,0,8.533-3.823,8.533-8.533V409.6h93.867c4.71,0,8.533-3.823,8.533-8.533v-204.8 C512,191.556,508.177,187.733,503.467,187.733z M494.933,392.533h-93.867H51.2V204.8h349.867h93.867V392.533z"/><path d="M204.8,238.933c14.114,0,25.6,11.486,25.6,25.6c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533 c0-23.526-19.14-42.667-42.667-42.667c-23.526,0-42.667,19.14-42.667,42.667c0,23.526,19.14,42.667,42.667,42.667 c14.114,0,25.6,11.486,25.6,25.6c0,14.114-11.486,25.6-25.6,25.6s-25.6-11.486-25.6-25.6c0-4.71-3.823-8.533-8.533-8.533 s-8.533,3.823-8.533,8.533c0,23.526,19.14,42.667,42.667,42.667c23.526,0,42.667-19.14,42.667-42.667 c0-23.526-19.14-42.667-42.667-42.667c-14.114,0-25.6-11.486-25.6-25.6S190.686,238.933,204.8,238.933z"/><path d="M128,230.4c-4.71,0-8.533,3.823-8.533,8.533v102.4c0,9.412-7.654,17.067-17.067,17.067 c-9.412,0-17.067-7.654-17.067-17.067c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533 c0,18.825,15.309,34.133,34.133,34.133c18.825,0,34.133-15.309,34.133-34.133v-102.4C136.533,234.223,132.71,230.4,128,230.4z"/><path d="M315.733,221.867H307.2c-18.825,0-34.133,15.309-34.133,34.133v85.333c0,18.825,15.309,34.133,34.133,34.133h8.533 c18.825,0,34.133-15.309,34.133-34.133V256C349.867,237.175,334.558,221.867,315.733,221.867z M332.8,341.333 c0,9.412-7.654,17.067-17.067,17.067H307.2c-9.412,0-17.067-7.654-17.067-17.067V256c0-9.412,7.654-17.067,17.067-17.067h8.533 c9.412,0,17.067,7.654,17.067,17.067V341.333z"/><path d="M381.646,222.196c-3.661,1.05-6.178,4.395-6.178,8.201V366.93c0,4.719,3.823,8.533,8.533,8.533 c4.71,0,8.533-3.814,8.533-8.533V260.152l69.564,111.3c1.587,2.543,4.352,4.011,7.236,4.011c0.785,0,1.57-0.102,2.355-0.324 c3.652-1.05,6.178-4.395,6.178-8.209V230.397c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v106.786l-69.564-111.3 C389.223,222.648,385.306,221.164,381.646,222.196z"/><polygon points="307.2,5 307.2,102.399 404.599,102.399 "/></g></g></g></svg>`,
    `<svg id="Layer_1" enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m62 22.9v18.3c0 .5-.4.9-.9.9h-2.5c-.4 0-.7-.2-.8-.6l-3.8-11.5v11.1c0 .5-.4.9-.9.9h-2.3c-.5 0-.9-.4-.9-.9v-18.2c0-.5.4-.9.9-.9h2.5c.4 0 .7.2.8.6l3.9 11.4v-11.1c0-.5.4-.9.9-.9h2.3c.4 0 .8.4.8.9z"/><path d="m42.7 42h-5.3c-.9 0-1.7-.4-2.4-1-.6-.6-1-1.5-1-2.4v-13.3c0-.9.4-1.7 1-2.4.6-.6 1.5-1 2.4-1h5.3c.9 0 1.7.4 2.4 1 .6.6 1 1.5 1 2.4v13.3c0 .9-.4 1.7-1 2.4-.7.6-1.5 1-2.4 1zm-3.8-4h2.3c.5 0 .9-.4.9-.9v-10.2c0-.5-.4-.9-.9-.9h-2.3c-.5 0-.9.4-.9.9v10.3c0 .4.4.8.9.8z"/><path d="m26.7 42h-7.8c-.5 0-.9-.4-.9-.9v-2.3c0-.5.4-.9.9-.9h6.3c.5 0 .9-.4.9-.9v-2.3c0-.5-.4-.9-.9-.9h-3.2c-1.1 0-2.1-.4-2.8-1.2-.8-.5-1.2-1.5-1.2-2.6v-4.7c0-.9.4-1.7 1-2.4.6-.6 1.5-1 2.4-1h7.8c.5 0 .9.4.9.9v2.3c0 .5-.4.9-.9.9h-6.3c-.5 0-.9.4-.9.9v2.3c0 .5.4.9.9.9h3.1c1.1 0 2.1.4 2.8 1.2s1.2 1.8 1.2 2.8v4.7c0 .9-.4 1.7-1 2.4-.6.4-1.4.8-2.3.8z"/><path d="m10.7 42h-5.4c-.9 0-1.7-.4-2.4-1-.6-.6-1-1.5-1-2.4v-3.8c.1-.4.5-.8.9-.8h2.3c.5 0 .9.4.9.8v2.3c0 .5.4.9.8.9h2.3c.5 0 .8-.4.8-.8v-14.4c0-.5.4-.8.8-.8h2.3c.5 0 .8.4.8.8v15.8c0 .9-.4 1.7-1 2.4-.4.6-1.2 1-2.1 1z"/></svg>`,
])
liveBackground.backgroundPC.Classic.start()
liveBackground.backgroundPhone.Classic.start()


//REVIEW - пример с видео
{
    const div = document.querySelector("#conclusionJSON") as HTMLDivElement

    //SECTION - получить json
    document.querySelector(".b1")?.addEventListener("click", async function () {
        try {
            let data = await fetch("http://localhost:3000/mydata/")
            data = await data.json()
            // @ts-ignore
            // console.log(Object.values(data.dataJ));

            // @ts-ignore
            const values = Object.values(data.dataJ)
            // @ts-ignore
            const keys = Object.keys(data.dataJ)
            let str = ""

            for (let i in keys) {
                str += `<div>${keys[i]} = ${values[i]}<div/>`
            }
            div.innerHTML = str


        } catch (e) {
            console.log(e);
        }
    })

    //SECTION - отправить json 
    document.querySelector(".b2")?.addEventListener("click", async function () {
        try {
            const k = document.querySelector(".inp1") as HTMLInputElement
            const v = document.querySelector(".inp2") as HTMLInputElement
            let obj = new Object
            // @ts-ignore
            obj[k.value] = v.value
            let data = await fetch("http://localhost:3000/mydata", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(obj)
            })
            data = await data.json()
            console.log(data);

        } catch (e) {
            console.log(e);
        }
    })
}




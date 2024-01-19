import '../GLASSlOLLIPOPS/interfaces_GLASSlOLLIPOPS.scss'
import './packagesS.scss'
import LiveBackgroundMod from '../GLASSlOLLIPOPS/live_background.ts'


let liveBackground = new LiveBackgroundMod()
liveBackground.backgroundPC.Classic.changeSVG([
    '<!-- icon666.com - MILLIONS vector ICONS FREE --><svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m215.371 512v-51.569c0-69.985-8.126-104.61-36.197-165.018l-136.661-295.413h94.555l115.977 252.685c33.981 73.669 48.755 111.977 48.755 196.697v62.618z"/><path d="m270.774 247.528 107.852-247.528h90.861l-109.329 247.528z"/></g></svg>',
    '<!-- icon666.com - MILLIONS vector ICONS FREE --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 305 305" style="enable-background:new 0 0 305 305;" xml:space="preserve"><g id="XMLID_16_"><path id="XMLID_17_" d="M95.506,152.511c0,31.426,25.567,56.991,56.994,56.991c31.425,0,56.99-25.566,56.99-56.991 c0-31.426-25.565-56.993-56.99-56.993C121.073,95.518,95.506,121.085,95.506,152.511z"/><path id="XMLID_18_" d="M283.733,77.281c0.444-0.781,0.436-1.74-0.023-2.513c-13.275-22.358-32.167-41.086-54.633-54.159 C205.922,7.134,179.441,0.012,152.5,0.012c-46.625,0-90.077,20.924-119.215,57.407c-0.643,0.804-0.727,1.919-0.212,2.81 l42.93,74.355c0.45,0.78,1.28,1.25,2.164,1.25c0.112,0,0.226-0.008,0.339-0.023c1.006-0.137,1.829-0.869,2.083-1.852 c8.465-32.799,38.036-55.706,71.911-55.706c2.102,0,4.273,0.096,6.455,0.282c0.071,0.007,0.143,0.01,0.214,0.01H281.56 C282.459,78.545,283.289,78.063,283.733,77.281z"/><path id="XMLID_19_" d="M175.035,224.936c-0.621-0.803-1.663-1.148-2.646-0.876c-6.457,1.798-13.148,2.709-19.889,2.709 c-28.641,0-55.038-16.798-67.251-42.794c-0.03-0.064-0.063-0.126-0.098-0.188L23.911,77.719c-0.446-0.775-1.272-1.25-2.165-1.25 c-0.004,0-0.009,0-0.013,0c-0.898,0.005-1.725,0.49-2.165,1.272C6.767,100.456,0,126.311,0,152.511 c0,36.755,13.26,72.258,37.337,99.969c23.838,27.435,56.656,45.49,92.411,50.84c0.124,0.019,0.248,0.027,0.371,0.027 c0.883,0,1.713-0.47,2.164-1.25l42.941-74.378C175.732,226.839,175.657,225.739,175.035,224.936z"/><path id="XMLID_20_" d="M292.175,95.226h-85.974c-1.016,0-1.931,0.615-2.314,1.555c-0.384,0.94-0.161,2.02,0.564,2.73 c14.385,14.102,22.307,32.924,22.307,53c0,15.198-4.586,29.824-13.263,42.298c-0.04,0.058-0.077,0.117-0.112,0.178l-61.346,106.252 c-0.449,0.778-0.446,1.737,0.007,2.513c0.449,0.767,1.271,1.237,2.158,1.237c0.009,0,0.019,0,0.028,0 c40.37-0.45,78.253-16.511,106.669-45.222C289.338,231.032,305,192.941,305,152.511c0-19.217-3.532-37.956-10.498-55.698 C294.126,95.855,293.203,95.226,292.175,95.226z"/></g></svg>',
    '<!-- icon666.com - MILLIONS vector ICONS FREE --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 305.015 305.015" style="enable-background:new 0 0 305.015 305.015;" xml:space="preserve"><g id="XMLID_21_"><path id="XMLID_22_" d="M301.98,103.88c-1.108-0.17-2.194,0.421-2.656,1.442l-3.413,7.555c-1.296-9.931-3.7-25.915-6.875-36.396 c-4.839-16.138-15.087-26.571-15.521-27.008c-0.785-0.789-1.995-0.964-2.973-0.43c-0.976,0.534-1.482,1.649-1.24,2.735 l2.652,11.949c-6.381-6.666-16.632-16.234-26.776-20.898c-2.439-1.189-4.918-2.279-7.089-3.219 c-22.038-19.576-50.3-30.352-79.627-30.352c-41.3,0-78.94,20.689-101.226,55.487c-2.097-1.694-5.037-4.657-6.722-8.928 c-3.064-7.512-4.616-15.951-4.632-16.035c-0.165-0.906-0.813-1.648-1.689-1.932c-0.874-0.284-1.836-0.064-2.501,0.573 C23.326,56.034,25.149,83.49,25.834,89.713c-2.276,2.431-8.709,9.639-15.208,20.038c-8.07,12.921-10.513,35.509-10.612,36.464 c-0.111,1.066,0.468,2.084,1.441,2.532c0.977,0.448,2.126,0.225,2.86-0.553l5.375-5.678c-0.586,2.173-1.176,4.65-1.721,7.424 c-2.421,11.975-1.713,30.55-1.682,31.335c0.046,1.15,0.871,2.121,2,2.35c1.128,0.232,2.267-0.341,2.759-1.382l3.163-6.697 c2.332,16.302,11.285,50.988,45.614,82.941c25.426,23.684,60.79,37.269,97.025,37.271c0.004,0,0.005,0,0.009,0 c35.168,0,68.374-12.578,96.022-36.372c32.692-28.164,44.871-68.384,49.33-97.166c4.814-31.073,1.996-55.158,1.873-56.168 C303.949,104.938,303.09,104.05,301.98,103.88z M246.16,104.785c0.034,0.044,3.426,4.486,4.166,15.868 c0.51,8.518-1.238,22.14-2.341,29.593l-6.661-7.729c-0.719-0.834-1.896-1.102-2.904-0.655c-1.007,0.445-1.604,1.496-1.471,2.588 c0.023,0.192,2.293,19.437-1.526,36.165c-1.808,7.861-4.637,13.512-7.064,17.241l0.931-12.6c0.089-1.209-0.701-2.307-1.876-2.606 c-1.176-0.301-2.396,0.286-2.895,1.391c-0.112,0.249-11.658,25.037-43.279,34.852c-4.416,1.36-9.067,2.05-13.825,2.05 c-16.854,0.001-32.168-8.598-40.849-14.64c0.747,0.038,1.49,0.057,2.229,0.057c12.435,0,21.998-5.357,29.684-9.662 c2.019-1.131,3.926-2.199,5.761-3.106c11.045-5.554,16.18-6.02,20.125-6.02c2.084,0,3.691-1.217,4.195-3.175 c1.235-4.806-4.543-13.372-11.678-17.3c-3.539-1.924-7.323-2.82-11.906-2.82c-7.292,0-16.333,2.3-29.284,5.806 c-2.377,0.634-4.724,0.956-6.976,0.956c-7.936,0.001-13.184-3.838-16.189-7.059c-4.044-4.334-6.347-10.061-6.008-14.945 c0.154-2.227,1.026-4.504,6.325-4.504c4.701,0,9.926,1.938,9.977,1.956c0.285,0.108,0.584,0.161,0.881,0.161 c0.005,0,0.012,0,0.019,0c1.381,0,2.5-1.119,2.5-2.5c0-0.135-0.011-0.268-0.031-0.397l-0.699-21.899 c2.525-1.61,8.567-5.527,14.375-9.749c14.051-10.214,15.933-14.12,14.429-17.087c-1.992-4.04-7.235-4.696-13.306-5.456 c-3.474-0.435-7.411-0.928-10.967-2.105c-7.408-2.462-12.289-8.858-13.4-10.43c-0.23-1.316-0.78-5.75,1.395-9.535 c2.354-4.137,10.495-10.542,13.434-12.662c0.84-0.605,1.22-1.666,0.955-2.667c-0.265-1-1.119-1.735-2.148-1.846 c-0.252-0.028-7.721-0.774-19.922,3.266c-9.934,3.328-17.639,8.722-20.294,10.723c-1.142-0.224-3.097-0.533-6.336-0.867 c19.025-21.484,46.01-33.714,74.76-33.714c21.101,0,41.038,6.417,58.012,18.618l-16.808,2.811 c-1.142,0.191-2.003,1.141-2.082,2.295c-0.079,1.155,0.646,2.213,1.75,2.558c0.224,0.07,22.608,7.146,39.31,20.021 c3.717,2.909,7.115,6.676,10.104,11.199c2.787,5.974,4.968,12.134,6.513,18.387l-5.62-4.367c-0.998-0.775-2.406-0.672-3.296,0.223 C245.454,102.361,245.38,103.792,246.16,104.785z"/></g></svg>',
    '<!-- icon666.com - MILLIONS vector ICONS FREE --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 305 305" style="enable-background:new 0 0 305 305;" xml:space="preserve"><g id="XMLID_25_"><path id="XMLID_26_" d="M152.499,18.751c-5.135,0-10.298,0.277-15.413,0.825c1.72-2.81,2.343-5.945,1.694-8.993 C137.435,4.253,130.987,0,122.734,0c-1.686,0-3.405,0.183-5.115,0.544c-4.786,1.018-8.987,3.317-11.827,6.475 c-3.038,3.378-4.253,7.393-3.421,11.304c0.653,3.079,2.544,5.715,5.325,7.587c-27.153,8.968-51.479,26.251-68.953,49.1 C19.531,100.13,9.375,130.169,9.375,161.876C9.375,240.794,73.58,305,152.499,305c78.919,0,143.126-64.206,143.126-143.124 C295.625,82.956,231.418,18.751,152.499,18.751z M122.734,9.686c3.727,0,6.269,1.479,6.572,2.909 c0.169,0.798-0.287,1.831-1.202,2.827c-2.325-1.112-4.997-1.441-7.56-0.896c-2.534,0.539-4.822,1.909-6.507,3.857 c-1.211-0.539-2.025-1.29-2.192-2.075c-0.19-0.895,0.396-2.096,1.567-3.211c1.506-1.435,3.774-2.556,6.22-3.076 C120.678,9.799,121.722,9.686,122.734,9.686z M183.525,261.33l-11.414-18.512c-0.553-0.898-1.613-1.354-2.646-1.133 c-1.035,0.22-1.818,1.065-1.959,2.112l-2.891,21.518c-4.021,0.464-8.088,0.7-12.116,0.7c-27.05,0-52.524-10.243-71.996-28.896 c0.207-0.082,0.406-0.193,0.591-0.334l56.476-42.923c3.778,1.761,7.869,2.854,11.987,3.204l14.33,30.075 c0.498,1.045,1.65,1.611,2.777,1.37c1.131-0.24,1.949-1.225,1.979-2.381l0.861-33.291c3.154-1.726,5.998-3.912,8.486-6.522 l16.918,5.997c1.092,0.386,2.303-0.025,2.932-0.995c0.631-0.97,0.514-2.245-0.283-3.083l-12.359-13.014 c1.373-3.34,2.215-6.829,2.506-10.408l30.061-14.328c1.045-0.497,1.611-1.645,1.371-2.777c-0.24-1.131-1.225-1.949-2.381-1.979 l-30.738-0.794l41.396-54.469c0.139-0.184,0.25-0.382,0.332-0.587c11.15,11.653,19.479,25.742,24.213,40.97l-18.512,11.414 c-0.898,0.554-1.354,1.614-1.133,2.648c0.219,1.033,1.064,1.817,2.111,1.957l21.516,2.891c0.467,4.036,0.701,8.103,0.701,12.116 c0,27.814-10.832,53.966-30.504,73.637C214.181,247.469,199.482,256.368,183.525,261.33z M72.688,178.84 c-0.22-1.034-1.065-1.817-2.112-1.958l-21.516-2.894c-0.466-4.036-0.701-8.102-0.701-12.113c0-27.819,10.833-53.971,30.504-73.639 c11.956-11.955,26.655-20.856,42.61-25.821l11.415,18.515c0.554,0.899,1.617,1.355,2.647,1.133c1.034-0.22,1.817-1.066,1.958-2.112 l2.892-21.517c4.018-0.465,8.084-0.7,12.114-0.7c27.051,0,52.526,10.243,71.997,28.896c-0.205,0.082-0.402,0.193-0.588,0.333 l-56.477,42.923c-3.775-1.76-7.865-2.854-11.986-3.204l-14.333-30.076c-0.498-1.044-1.651-1.611-2.776-1.37 c-1.131,0.24-1.95,1.225-1.98,2.381l-0.86,33.293c-3.153,1.725-5.998,3.91-8.487,6.52l-16.919-5.997 c-1.091-0.386-2.303,0.026-2.932,0.995c-0.63,0.97-0.513,2.245,0.284,3.083l12.359,13.015c-1.371,3.341-2.211,6.83-2.504,10.409 l-30.063,14.326c-1.044,0.498-1.61,1.646-1.37,2.777c0.24,1.131,1.225,1.949,2.381,1.979l30.741,0.794l-41.396,54.469 c-0.141,0.185-0.252,0.384-0.334,0.59c-11.149-11.647-19.477-25.737-24.214-40.973l18.511-11.412 C72.453,180.933,72.907,179.873,72.688,178.84z M165.877,183.73c-2.482,1.521-5.191,2.601-8.051,3.209 c-2.77,0.59-5.608,0.721-8.47,0.375c-0.112-0.023-0.226-0.039-0.339-0.046c-0.746-0.102-1.49-0.238-2.229-0.409l17.169-13.052 c0.182-0.137,0.342-0.297,0.479-0.478l13.045-17.166c0.029,0.127,0.059,0.255,0.086,0.383 C179.816,167.151,175.121,178.075,165.877,183.73z M147.17,136.81c1.776-0.377,3.579-0.567,5.358-0.567 c1.045,0,2.108,0.067,3.161,0.199c0.094,0.018,0.189,0.03,0.283,0.037c0.752,0.103,1.5,0.24,2.242,0.411l-17.172,13.05 c-0.18,0.137-0.341,0.297-0.478,0.478l-13.047,17.168c-0.029-0.128-0.058-0.256-0.085-0.384 C124.498,153.381,133.353,139.748,147.17,136.81z"/></g></svg>',
    '<!-- icon666.com - MILLIONS vector ICONS FREE --><svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m257.684 0c.769 0 1.55.004 2.322.011 62.893.57 125.419 23.162 171.547 61.98 48.755 41.029 75.605 96.699 75.605 156.754-.003 62.952-61.294 114.166-136.628 114.166-18.96 0-37.314-3.189-54.55-9.478-4.713-1.719-8.097-5.476-9.287-10.306-1.214-4.935.081-9.954 3.553-13.769 11.922-13.103 18.488-30.081 18.488-47.808 0-17.017-6.605-35.1-13.223-50.601-7.43-17.404-17.927-33.949-31.156-47.532-28.424-29.175-67.387-43.968-115.808-43.968-48.437 0-114.05 12.065-151.565 69.542-.128.195-.253.388-.379.583 31.056-103.879 127.548-179.574 241.081-179.574z"/><path d="m77.707 437.572c-47.57-48.006-73.441-111.669-72.855-179.284.075-1.482 1.514-25.558 15.38-52.086 4.19-8.016 9.219-15.64 14.953-22.633 25.294-30.847 63.742-46.136 102.706-50.454 38.557-4.273 80.03-.938 113.536 20.288.036.023.071.047.108.07 18.186 11.568 33.655 28.836 43.972 47.726.013.024.026.048.039.072-11.599-7.663-25.376-11.973-39.926-11.81-11.461.128-22.458 3.701-32.977 7.985-33.458 13.626-59.509 38.972-75.613 73.688-15.763 33.977-20.305 73.878-12.79 112.352 7.629 39.06 27.5 73.647 55.954 97.392 7.504 6.262 15.681 11.831 24.241 16.548 11.113 6.123 23.092 10.921 35.309 14.339.274.077.544.16.818.236-65.434-1.478-126.623-27.775-172.855-74.429z"/><path d="m478.227 394.573c-35.087 55.601-91.69 95.991-155.365 110.888-6.931.323-13.836.337-20.764-.017-27.227-1.375-54.394-8.438-77.787-22.695-5.735-3.496-11.489-7.584-16.731-11.961-26.143-21.816-44.424-53.715-51.476-89.821-6.988-35.776-2.792-72.818 11.814-104.302 5.737-12.366 13.177-23.98 22.234-34.18 3.334-3.752 6.897-7.318 10.653-10.648-4.381 9.694-6.698 20.395-6.479 31.374.824 41.339 20.461 80.026 55.293 108.934 34.556 28.679 80.225 44.473 128.595 44.473 34.872 0 68.812-8.318 98.149-24.055.257-.137.936-.501 1.681.301.753.806.34 1.461.183 1.709z"/></g></svg>',
    '<!-- icon666.com - MILLIONS vector ICONS FREE --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><g id="XMLID_519_"><path id="XMLID_521_" style="fill-rule:evenodd;clip-rule:evenodd;" d="M150.206,300c-18.121,0-35.033-3.549-50.634-10.708 c-15.586-7.177-29.596-17.797-42.015-31.732c-13.569-14.954-23.617-31.159-30.01-48.615c-6.395-17.413-9.517-37.021-9.517-58.751 c0-21.73,3.122-41.323,9.517-58.738c6.392-17.442,16.44-33.662,30.01-48.615c12.552-14.054,26.591-24.779,42.206-32.026 C115.379,3.596,132.217,0,150.206,0c17.986,0,34.84,3.596,50.428,10.814c15.601,7.248,29.671,17.973,42.19,32.026 c13.451,14.837,23.411,30.954,29.73,48.321c6.334,17.34,9.415,37.051,9.415,59.032c0,21.979-3.081,41.704-9.415,59.029 c-6.318,17.384-16.278,33.488-29.715,48.337c-12.434,13.935-26.4,24.556-42.016,31.732C185.208,296.451,168.325,300,150.206,300 L150.206,300z M150.206,280.628c20.357,0,33.324-7.778,40.631-22.863c7.837-16.104,12.271-51.386,12.271-107.572 c0-56.158-4.435-91.456-12.271-107.587c-7.307-15.056-20.273-22.835-40.631-22.835c-20.478,0-33.56,7.853-40.955,23.057 C101.34,59.077,96.906,94.3,96.906,150.193c0,55.909,4.434,91.145,12.345,107.396C116.646,272.774,129.728,280.628,150.206,280.628 L150.206,280.628z"/></g></svg>',
])
liveBackground.backgroundPC.Classic.start()
liveBackground.backgroundPhone.Classic.start()





//FIXME - простые запросы
//REVIEW - get запрос text
const span1 = document.querySelector("#sp1") as HTMLSpanElement
const butt1 = document.querySelector("#br1") as HTMLButtonElement
butt1?.addEventListener("click",async ()=> {
    try{
        let a = await fetch('http://localhost:3500/A9', {
            method: 'GET',
        })
        let b = await a.text()
        span1.innerHTML = "ответ от сервера: " + b
    }
    catch{
        span1.innerHTML = "ответа от сервера нет :("
        alert("ошибка")
    }
})

//REVIEW - post запрос json
const butt2 = document.querySelector("#br2") as HTMLButtonElement
butt2?.addEventListener("click",async ()=> {
    try{
        let a = await fetch('http://localhost:3500/data',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body:JSON.stringify({ok:"сообщение от сайта"})
        })
        let b = await a.json()
        span1.innerHTML = "ответ от сервера: " + b.simpleAnswer
        
    }
    catch{
        span1.innerHTML = "ответа от сервера нет :("
        alert("ошибка")
    }
})



//FIXME - статические файлы
//REVIEW - запрос картинки
const span2 = document.querySelector("#sp2") as HTMLDivElement
async function name1(){
    try{
        let a = await fetch('http://localhost:3500/img/110435-iskusstvo-graficeskij_dizajn-svet-krasnyj_cvet-art-1920x1080.jpg', {
            method: 'GET',
        })
        span2.innerHTML = `<img style="width: 100%; display: block;" src="http://localhost:3500/img/110435-iskusstvo-graficeskij_dizajn-svet-krasnyj_cvet-art-1920x1080.jpg" alt="">`
    }
    catch{
        span2.innerHTML = `<img style="width: 100%; display: block;" src="https://dinahosting.com/blog/cont/uploads/2020/07/eror-404.jpg" alt="">`
    }
}
name1()

//REVIEW - запрос txt файла
const span3 = document.querySelector("#sp3") as HTMLDivElement
async function name2(){
    try{
        let a = await fetch('http://localhost:3500/file/text.txt', {
            method: 'GET',
        })
        let b = await a.text()
        span3.innerHTML = b
    }
    catch{
        span3.innerHTML = `сервер не отвечает`
    }
}
name2()
    
    



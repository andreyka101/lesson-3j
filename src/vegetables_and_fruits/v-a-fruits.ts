import '../GLASSlOLLIPOPS/interfaces_GLASSlOLLIPOPS.scss'
import './v-a-fruits.scss'
import LiveBackgroundMod from '../GLASSlOLLIPOPS/live_background.ts'
import anime from 'animejs'


let liveBackground = new LiveBackgroundMod()
liveBackground.backgroundPC.Classic.changeSVG([
    `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.769 31.769" style="enable-background:new 0 0 31.769 31.769;" xml:space="preserve"><g><path d="M26.42,7.542c-1.413-0.911-3.054-0.847-4.874-0.594c2.812-1.479,3.521-3.493,3.628-4.887 c0.033-0.431-0.132-0.853-0.449-1.146c-0.316-0.294-0.75-0.426-1.177-0.36c-3.872,0.599-5.438,3.331-6.039,5.015 c-0.282-0.868-0.694-1.74-1.287-2.542c-1.064-1.442-2.52-2.438-4.342-2.972c-0.391-0.114-0.811-0.053-1.152,0.168 c-0.342,0.221-0.571,0.579-0.627,0.982l-0.017,0.119c-0.095,0.686,0.325,1.335,0.99,1.531c1.196,0.353,2.115,0.976,2.792,1.889 c0.588,0.794,0.924,1.721,1.109,2.61c-2.56-0.542-4.411-2.142-8.197-0.353C2.951,8.809,0.002,13.54,2.216,20.724 c1.781,5.79,6.019,9.738,8.252,11.045h11.566c2.576-1.542,6.77-5.061,7.871-11.409C31.125,13.325,29.508,9.532,26.42,7.542z M9.626,11.817c-0.349,0.191-3.283,1.929-2.213,5.728c0.219,0.775-0.232,1.58-1.007,1.8c-0.133,0.035-0.267,0.053-0.397,0.053 c-0.638,0-1.222-0.42-1.402-1.063c-1.39-4.933,1.781-8.103,3.651-9.088c0.709-0.376,1.592-0.102,1.969,0.608 C10.603,10.562,10.333,11.439,9.626,11.817z"/></g></svg>`,
    `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.996 511.996" style="enable-background:new 0 0 511.996 511.996;" xml:space="preserve"><g><g><g><path d="M509.028,187.329c-6.852-39.117-25.989-75.278-45.463-85.974c-5.849-3.222-10.616-8.645-13.083-14.885 c-3.329-8.415-12.844-12.533-21.267-9.213c-8.415,3.328-12.542,12.853-9.213,21.267c5.299,13.403,15.143,24.596,27.756,31.555 c5.858,3.204,22.501,25.874,28.989,62.923c6.826,38.939,3.559,98.329-50.807,160.169 c-110.667,125.845-216.364,92.764-220.802,91.3c-10.27-3.408-19.732-7.447-25.43-10.03c2.53-3.337,6.107-7.696,10.714-12.453 c1.722-1.775,9.142-6.036,15.684-9.817c24.551-14.131,70.245-40.439,132.751-102.705c62.159-61.902,62.168-105.12,62.177-136.674 c0.009-12.835,0.009-22.102,4.234-29.673c6.613-11.912,2.468-33.995-12.32-65.754l36.765-16.51 c8.255-3.701,11.938-13.403,8.237-21.658c-3.71-8.264-13.412-11.956-21.658-8.237l-52.271,23.477 c-4.119,1.846-7.278,5.308-8.761,9.568c-1.482,4.26-1.145,8.938,0.932,12.941c10.74,20.637,19.625,44.203,19.607,51.774 c-7.518,14.512-7.527,29.522-7.527,44.052c-0.009,28.67-0.027,61.165-52.538,113.463 c-59.461,59.23-102.732,84.145-125.979,97.531c-10.811,6.222-17.947,10.332-22.874,15.418 c-12.835,13.27-19.288,24.019-19.989,25.199c-2.618,4.474-2.973,9.906-0.959,14.672l5.841,13.838 c1.527,3.621,4.287,6.559,7.802,8.299c0.675,0.328,16.536,8.184,35.283,14.388c12.364,4.092,28.696,6.906,47.824,6.906 c55.236,0,133.852-23.495,207.869-107.685C516.821,299.434,515.632,224.999,509.028,187.329z"/><path d="M125.527,396.885c-17.69-4.669-39.454-24.897-48.836-33.623l-0.08-0.444c3.231-2.698,7.74-6.169,13.376-9.817 c2.086-1.349,10.314-3.843,17.566-6.045c27.108-8.219,77.577-23.513,152.482-69.953c74.542-46.209,83.293-87.048,89.684-116.872 c2.84-13.261,4.722-21.063,10.208-27.116c6.08-6.701,5.565-17.069-1.136-23.149c-6.701-6.08-17.06-5.574-23.149,1.136 c-11.663,12.879-14.859,27.818-17.956,42.259c-5.725,26.726-12.222,57.02-74.914,95.88 c-71.266,44.176-119.046,58.653-144.725,66.438c-11.983,3.63-19.891,6.027-25.865,9.888 c-15.453,10.012-24.17,18.959-25.11,19.945c-3.595,3.763-5.193,9.009-4.296,14.131l2.583,14.805 c0.639,3.648,2.476,6.959,5.228,9.418c0.994,0.879,2.228,2.033,3.692,3.391c12.063,11.246,37.191,34.608,62.887,41.407 c1.402,0.364,2.805,0.541,4.19,0.541c7.261,0,13.891-4.855,15.835-12.196C139.498,408.157,134.279,399.192,125.527,396.885z"/><path d="M63.084,319.778c6.426,0,12.524-3.799,15.143-10.092c3.479-8.352-0.488-17.947-8.841-21.418 c-18.018-7.491-28.43-24.702-35.318-36.099c-0.311-0.515-0.604-1.003-0.896-1.482l0.044-0.577c3.799-1.802,9.045-4.03,15.4-6.16 c2.343-0.772,10.9-1.118,18.445-1.42c28.306-1.136,80.994-3.266,165.246-29.424c26.859-8.344,48.552-18.294,66.34-30.427 c7.465-5.095,9.391-15.294,4.296-22.767c-5.104-7.474-15.294-9.4-22.767-4.296c-15.054,10.27-33.889,18.835-57.588,26.193 c-80.133,24.88-130.035,26.895-156.841,27.977c-12.462,0.506-20.699,0.843-27.418,3.062c-17.513,5.805-28.217,12.302-29.38,13.03 c-4.411,2.743-7.261,7.42-7.678,12.595l-1.216,14.983c-0.302,3.675,0.648,7.341,2.698,10.412 c0.959,1.447,2.033,3.231,3.258,5.255c7.988,13.208,22.865,37.786,50.789,49.396C58.859,319.379,60.989,319.778,63.084,319.778z" /></g></g></g></svg>`,
    `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.906 511.906" style="enable-background:new 0 0 511.906 511.906;" xml:space="preserve"><g><g><g><path d="M489.98,21.925c-28.984-28.875-75.735-29.28-105.216-0.912c-92.272-39.664-211.12-11.6-293.216,70.512 S-18.627,292.501,21.037,384.741c-28.779,29.834-27.923,77.349,1.911,106.128c29.077,28.049,75.14,28.049,104.217,0 c92.272,39.68,211.2,11.616,293.216-70.512s110.176-200.976,70.512-293.216C519.261,97.66,518.856,50.91,489.98,21.925z M457.373,130.885c40.576,81.424,16,191.168-59.616,266.848s-185.408,100.208-266.848,59.6l-10.32-5.136l-15.12,15.136 c-16.816,16.816-44.08,16.816-60.896,0c-16.816-16.816-16.816-44.08,0-60.896l15.12-15.12l-5.136-10.32 c-40.576-81.424-16-191.168,59.616-266.848C161.9,65.097,226.967,36.728,295.389,35.141c29.666-0.258,58.985,6.398,85.632,19.44 l10.32,5.136l15.12-15.136c16.816-16.816,44.08-16.816,60.896,0c16.816,16.816,16.816,44.08,0,60.896l-15.12,15.12 L457.373,130.885z"/><path d="M284.764,81.893c-52.228,4.466-101.09,27.635-137.6,65.248l22.624,22.624c30.927-32.112,72.397-51.995,116.8-56 L284.764,81.893z"/><path d="M320.221,83.605l-5.168,31.536c9.202,1.47,18.177,4.115,26.704,7.872l12.976-29.248 C343.708,88.924,332.11,85.51,320.221,83.605z"/><rect x="95.965" y="351.941" width="32" height="32"/><rect x="191.965" y="255.941" width="32" height="32"/><rect x="287.965" y="223.941" width="32" height="32"/><rect x="383.965" y="191.941" width="32" height="32"/><rect x="351.965" y="287.941" width="32" height="32"/><rect x="95.965" y="223.941" width="32" height="32"/><rect x="255.965" y="351.941" width="32" height="32"/><rect x="191.965" y="383.941" width="32" height="32"/></g></g></g></svg>`,
    `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M269.879,120.5v15c0,7.653-6.227,13.879-13.879,13.879c-7.652,0-13.879-6.226-13.879-13.879v-15H0v15 c0,68.38,26.629,132.667,74.98,181.02C123.333,364.871,187.62,391.5,256,391.5s132.667-26.629,181.02-74.98 C485.371,268.167,512,203.88,512,135.5v-15H269.879z M297.238,150.5h124.077c-3.107,34.526-16.824,66.036-37.866,91.237 l-87.692-87.692C296.299,152.889,296.797,151.708,297.238,150.5z M274.545,175.259l87.691,87.691 c-25.201,21.041-56.711,34.758-91.236,37.865v-124.08h0C272.208,176.294,273.389,175.8,274.545,175.259z M240.999,176.735v124.08 c-34.525-3.107-66.036-16.824-91.236-37.865l87.691-87.691C238.61,175.8,239.792,176.294,240.999,176.735z M214.761,150.5 c0.441,1.208,0.94,2.389,1.481,3.545l-87.692,87.692c-21.041-25.201-34.758-56.711-37.866-91.237H214.761z M415.806,295.306 C373.12,337.992,316.367,361.5,256,361.5s-117.12-23.508-159.806-66.194C57.062,256.174,34.047,205.224,30.487,150.5h30.082 c7.687,101.094,92.403,181,195.431,181s187.745-79.906,195.432-181h30.083C477.952,205.224,454.938,256.174,415.806,295.306z"/></g></g></svg>`,
    `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 53.679 53.679" style="enable-background:new 0 0 53.679 53.679;" xml:space="preserve"><g><path d="M11.766,11.973c2.4-0.438,4.418-0.493,5.795-0.154c-1.519,1.104-3.811,3.232-5.368,6.787 c-0.229,0.522-0.184,1.092,0.124,1.563c0.524,0.801,1.729,1.002,2.481,0.384c2.895-2.384,5.548-3.675,7.521-3.531 c-0.026,2.813,0.123,8.916,1.795,11.519c0.312,0.484,0.84,0.772,1.413,0.772c0.532,0,1.039-0.257,1.354-0.689 c1.036-1.424,3.412-5.354,3.405-11.434c1.461,0.096,4.433,0.587,6.794,2.894c0.667,0.65,1.816,0.595,2.424-0.096 c0.315-0.357,0.462-0.839,0.401-1.319c-0.241-1.901-1.218-4.553-4.433-6.701c0.909-0.155,2.243-0.292,4.122-0.292 c0.454,0,0.938,0.008,1.512,0.025c0.749,0,1.396-0.483,1.606-1.204c0.211-0.719-0.071-1.475-0.703-1.88 c-2.012-1.289-5.13-2.826-8.562-2.826c-1.373,0-2.82,0.464-4.056,0.957V3c0-1.536-0.984-3-2.353-3h-2.223 c-1.369,0-2.482,1.25-2.425,2.786v4.104c-0.848-0.142-1.958-0.28-3.266-0.28c-3.127,0-5.992,0.765-8.518,2.273 c-0.653,0.391-0.955,1.146-0.753,1.881C10.088,11.604,10.854,12.138,11.766,11.973z"/><path d="M44.487,11.44c-0.565,1.364-1.872,2.261-3.38,2.261c-0.394-0.012-0.726-0.019-1.029-0.022 c1.165,1.694,1.641,3.389,1.813,4.738c0.132,1.052-0.19,2.106-0.886,2.895c-0.687,0.78-1.695,1.229-2.766,1.229 c-0.97,0-1.877-0.364-2.555-1.025c-1.103-1.077-2.383-1.664-3.507-1.982c-0.51,5.357-2.677,8.891-3.679,10.268 c-0.691,0.948-1.802,1.513-2.972,1.513c-1.257,0-2.414-0.632-3.096-1.69c-1.488-2.317-1.981-6.488-2.09-10.228 c-1.005,0.394-2.415,1.174-4.271,2.702c-0.643,0.528-1.464,0.818-2.314,0.818c-1.271,0-2.435-0.617-3.111-1.65 c-0.675-1.034-0.779-2.326-0.283-3.461c0.679-1.55,1.483-2.86,2.319-3.959c-0.183,0.029-0.367,0.062-0.556,0.096 c-1.632,0.29-3.066-0.454-3.808-1.748c-5.044,4.54-7.923,10.779-7.923,17.271c0,13.353,11.863,24.215,26.446,24.215 s26.446-10.862,26.446-24.215C53.286,22.494,50.101,16.034,44.487,11.44z M5.4,22.775c0.189-0.519,0.765-0.784,1.283-0.596 c0.519,0.19,0.785,0.765,0.596,1.283c-0.381,1.04-0.614,2.146-0.694,3.285c-0.036,0.527-0.476,0.931-0.996,0.931 c-0.023,0-0.047-0.001-0.07-0.003c-0.552-0.038-0.967-0.516-0.929-1.066C4.683,25.281,4.956,23.991,5.4,22.775z M7.3,35.496 c-0.16,0.095-0.336,0.14-0.509,0.14c-0.342,0-0.675-0.175-0.861-0.49C5.182,33.883,4.691,32.487,4.473,31 c-0.08-0.547,0.298-1.055,0.844-1.135c0.556-0.087,1.055,0.298,1.135,0.844c0.181,1.229,0.584,2.379,1.199,3.417 C7.932,34.601,7.776,35.215,7.3,35.496z"/></g></svg>`,
    `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59 59" style="enable-background:new 0 0 59 59;" xml:space="preserve"><path d="M40.456,42.444c-0.103-0.658-0.201-1.342-0.295-2.065c0.61-0.461,1.016-1.126,1.147-1.883 c0.136-0.789-0.043-1.585-0.505-2.239c-0.301-0.427-0.699-0.761-1.159-0.979c-0.045-0.635-0.084-1.271-0.115-1.906 c0.023-0.016,0.047-0.032,0.07-0.048c0.655-0.462,1.091-1.151,1.228-1.941c0.136-0.789-0.043-1.585-0.505-2.239 c-0.236-0.335-0.533-0.611-0.878-0.821c0.006-0.567,0.017-1.135,0.035-1.702c0.105-0.057,0.208-0.119,0.306-0.188 c0.655-0.462,1.091-1.151,1.228-1.941c0.136-0.789-0.043-1.585-0.504-2.238c-0.194-0.276-0.432-0.516-0.703-0.709 c0.058-0.618,0.122-1.235,0.193-1.852c1.002-0.496,1.674-1.533,1.674-2.69c0-0.839-0.355-1.628-0.958-2.188 c0.088-0.501,0.181-1.002,0.278-1.502c1.206-0.392,2.065-1.519,2.065-2.845c0-0.991-0.48-1.893-1.266-2.446 c-0.097-2.104-0.907-4.026-2.316-5.464C37.855,0.908,35.552,0,32.987,0c-2.224,0-4.454,0.936-6.636,2.782 C26.017,2.655,25.663,2.59,25.3,2.59c-1.654,0-3,1.346-3,3c0,0.469,0.11,0.925,0.318,1.338c-0.288,0.4-0.538,0.77-0.746,1.088 C20.136,7.833,18.561,9.241,18.561,11c0,0.744,0.272,1.443,0.753,1.983c-0.13,0.351-0.256,0.711-0.375,1.081 c-1.357,0.287-2.378,1.494-2.378,2.936c0,0.961,0.448,1.833,1.188,2.389c-0.087,0.63-0.162,1.281-0.224,1.948 c-0.107,0.057-0.211,0.121-0.311,0.19c-1.351,0.954-1.675,2.829-0.722,4.181c0.223,0.316,0.501,0.581,0.823,0.787 c0.002,0.607,0.014,1.221,0.034,1.836c-0.046,0.028-0.091,0.058-0.135,0.089c-1.351,0.954-1.675,2.829-0.722,4.182 c0.313,0.442,0.729,0.784,1.21,1.001c0.066,0.657,0.139,1.306,0.216,1.943c-0.646,0.462-1.075,1.146-1.21,1.93 c-0.137,0.789,0.043,1.585,0.504,2.239c0.372,0.527,0.894,0.91,1.493,1.108c0.093,0.528,0.187,1.039,0.28,1.532 c-0.071,0.061-0.139,0.124-0.203,0.19c-1.147,1.191-1.111,3.095,0.081,4.242c0.35,0.336,0.771,0.578,1.23,0.713 c0.285,1.168,0.502,1.953,0.548,2.09c0.001,0.004,0.002,0.008,0.004,0.012c-0.808,1.186-0.667,2.82,0.4,3.849 c0.474,0.457,1.078,0.738,1.73,0.812C24.8,57.449,27.515,59,31.061,59c5.083,0,9.538-3.784,10.362-8.803 c0.124-0.755,0.124-1.559-0.003-2.441c0.142-0.102,0.274-0.216,0.396-0.342c0.556-0.577,0.853-1.336,0.838-2.138 c-0.015-0.801-0.341-1.548-0.918-2.103C41.371,42.823,40.932,42.575,40.456,42.444z M24.121,32.332c0,0.553-0.448,1-1,1 s-1-0.447-1-1c0-1.31,1.065-2.375,2.375-2.375s2.375,1.065,2.375,2.375c0,0.553-0.448,1-1,1s-1-0.447-1-1 c0-0.207-0.168-0.375-0.375-0.375S24.121,32.125,24.121,32.332z M28.246,45.001c-0.552,0-1-0.447-1-1 c0-0.207-0.168-0.375-0.375-0.375s-0.375,0.168-0.375,0.375c0,0.553-0.448,1-1,1s-1-0.447-1-1c0-1.31,1.065-2.375,2.375-2.375 s2.375,1.065,2.375,2.375C29.246,44.554,28.798,45.001,28.246,45.001z M28.311,21.375c-0.552,0-1-0.447-1-1 c0-0.207-0.168-0.375-0.375-0.375s-0.375,0.168-0.375,0.375c0,0.553-0.448,1-1,1s-1-0.447-1-1c0-1.31,1.065-2.375,2.375-2.375 s2.375,1.065,2.375,2.375C29.311,20.928,28.863,21.375,28.311,21.375z M30.045,8.625c-0.207,0-0.375,0.168-0.375,0.375 c0,0.553-0.448,1-1,1s-1-0.447-1-1c0-1.31,1.065-2.375,2.375-2.375S32.42,7.69,32.42,9c0,0.553-0.448,1-1,1s-1-0.447-1-1 C30.42,8.793,30.252,8.625,30.045,8.625z M32.936,23.625c1.31,0,2.375,1.065,2.375,2.375c0,0.553-0.448,1-1,1s-1-0.447-1-1 c0-0.207-0.168-0.375-0.375-0.375S32.561,25.793,32.561,26c0,0.553-0.448,1-1,1c-0.552,0-1-0.447-1-1 C30.561,24.69,31.626,23.625,32.936,23.625z M34.561,51.375c-0.552,0-1-0.447-1-1c0-0.207-0.168-0.375-0.375-0.375 s-0.375,0.168-0.375,0.375c0,0.553-0.448,1-1,1c-0.552,0-1-0.447-1-1c0-1.31,1.065-2.375,2.375-2.375 c1.31,0,2.375,1.065,2.375,2.375C35.561,50.928,35.113,51.375,34.561,51.375z M34.561,37c-0.552,0-1-0.447-1-1 c0-0.207-0.168-0.375-0.375-0.375S32.811,35.793,32.811,36c0,0.553-0.448,1-1,1c-0.552,0-1-0.447-1-1 c0-1.31,1.065-2.375,2.375-2.375c1.31,0,2.375,1.065,2.375,2.375C35.561,36.553,35.113,37,34.561,37z M35.311,16.375 c-0.552,0-1-0.447-1-1c0-0.207-0.168-0.375-0.375-0.375s-0.375,0.168-0.375,0.375c0,0.553-0.448,1-1,1s-1-0.447-1-1 c0-1.31,1.065-2.375,2.375-2.375s2.375,1.065,2.375,2.375C36.311,15.928,35.863,16.375,35.311,16.375z"/></svg>`,
    `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M218.913,116.8c-6.4-6.4-16-6.4-22.4,0c-3.2,3.2-4.8,6.4-4.8,11.2s1.6,8,4.8,11.2c3.2,3.2,8,4.8,11.2,4.8 c4.8,0,8-1.6,11.2-4.8c3.2-3.2,4.8-6.4,4.8-11.2S222.113,120,218.913,116.8z"/></g></g><g><g><path d="M170.913,372.8c-6.4-6.4-16-6.4-22.4,0c-3.2,3.2-4.8,6.4-4.8,11.2s1.6,8,4.8,11.2c3.2,3.2,8,4.8,11.2,4.8 c4.8,0,8-1.6,11.2-4.8c3.2-3.2,4.8-8,4.8-11.2C175.713,379.2,174.113,376,170.913,372.8z"/></g></g><g><g><path d="M250.913,228.8c-4.8-6.4-16-6.4-22.4,0c-3.2,3.2-4.8,6.4-4.8,11.2s1.6,8,4.8,11.2c3.2,3.2,8,4.8,11.2,4.8 c4.8,0,8-1.6,11.2-4.8c3.2-3.2,4.8-8,4.8-11.2C255.713,235.2,254.113,232,250.913,228.8z"/></g></g><g><g><path d="M410.913,212.8c-4.8-6.4-16-6.4-22.4,0c-3.2,3.2-4.8,6.4-4.8,11.2s1.6,8,4.8,11.2c3.2,3.2,8,4.8,11.2,4.8 c4.8,0,8-1.6,11.2-4.8c3.2-3.2,4.8-8,4.8-11.2C415.713,219.2,414.113,216,410.913,212.8z"/></g></g><g><g><path d="M346.913,308.8c-4.8-6.4-16-6.4-22.4,0c-3.2,3.2-4.8,6.4-4.8,11.2s1.6,8,4.8,11.2c3.2,3.2,8,4.8,11.2,4.8 c4.8,0,8-1.6,11.2-4.8c3.2-3.2,4.8-8,4.8-11.2C351.713,315.2,350.113,312,346.913,308.8z"/></g></g><g><g><path d="M346.913,100.8c-6.4-6.4-16-6.4-22.4,0c-3.2,3.2-4.8,6.4-4.8,11.2s1.6,8,4.8,11.2c3.2,3.2,8,4.8,11.2,4.8 c4.8,0,8-1.6,11.2-4.8s4.8-6.4,4.8-11.2S350.113,104,346.913,100.8z"/></g></g><g><g><path d="M503.713,142.4c-28.8-136-179.2-142.4-208-142.4c-4.8,0-9.6,0-16,0c-67.2,1.6-132.8,36.8-187.2,97.6 c-60.8,67.2-96,155.2-91.2,227.2c8,126.4,70.4,187.2,192,187.2c115.2,0,201.6-33.6,256-100.8 C513.313,331.2,519.713,219.2,503.713,142.4z M423.713,392c-48,59.2-126.4,89.6-230.4,89.6s-152-48-160-158.4 c-4.8-64,28.8-144,83.2-203.2c48-54.4,107.2-84.8,164.8-88c4.8,0,9.6,0,14.4,0c140.8,0,171.2,89.6,176,116.8 C486.113,219.2,481.313,320,423.713,392z"/></g></g></svg>`,
    `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330.002 330.002" style="enable-background:new 0 0 330.002 330.002;" xml:space="preserve"><g id="XMLID_231_"><path id="XMLID_232_" d="M313.344,75.093l-41.875,4.652l35.39-35.387c5.857-5.856,5.857-15.356,0-21.213 c-5.858-5.858-15.356-5.857-21.214-0.001l-35.389,35.388l4.652-41.875c0.916-8.234-5.018-15.65-13.25-16.564 c-8.232-0.91-15.651,5.019-16.566,13.252l-6.178,55.601c-10.772-6.909-22.76-10.617-34.891-10.617 c-17.596,0-33.768,7.445-46.129,20.853l21.271,21.269l16.442,16.441c5.858,5.859,5.858,15.356,0,21.214 c-2.93,2.93-6.767,4.395-10.607,4.395c-3.838,0.001-7.678-1.466-10.605-4.395l-11.544-11.543l-21.923-21.923L2.061,307.416 c-3.453,5.889-2.494,13.365,2.334,18.192c2.889,2.891,6.73,4.394,10.611,4.394c2.601,0,5.217-0.676,7.581-2.06l143.712-84.245 l-21.924-21.925c-5.191-5.891-4.988-14.873,0.643-20.502c5.629-5.631,14.611-5.835,20.503-0.644 c0.234,0.207,0.472,0.406,0.696,0.63l4.862,4.862l21.924,21.924l44.27-25.952c19.031-11.157,31.391-28.827,33.912-48.479 c1.869-14.569-1.775-29.447-10.138-42.525l55.608-6.177c8.234-0.916,14.167-8.331,13.253-16.565 C328.994,80.112,321.58,74.177,313.344,75.093z"/></g></svg>`,
    `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M379.97,167.874l-0.001,0.002c-0.007-0.006-0.013-0.015-0.02-0.021c-10.362-10.165-22.079-18.534-34.719-24.934 c6.44-1.69,12.286-3.789,17.093-6.402c13.514-7.346,21.887-17.815,24.885-31.117c6.332-28.076-15.108-57.942-16.023-59.2 c-1.714-2.354-4.318-3.906-7.205-4.293c-2.885-0.385-5.806,0.422-8.081,2.242l-24.01,19.208 c-0.229-8.272-2.262-16.891-6.128-25.735c-7.376-16.879-19.058-28.671-19.552-29.165c-2.587-2.587-6.322-3.666-9.886-2.864 c-3.569,0.803-6.476,3.379-7.705,6.825l-6.496,18.222c-4.535-9.495-10.641-19.578-18.582-27.517 c-4.109-4.107-10.749-4.173-14.939-0.142c-0.713,0.686-11.18,10.896-19.548,25.553l-5.661-16.076 c-1.175-3.338-3.931-5.876-7.353-6.774c-3.426-0.9-7.069-0.041-9.732,2.29C205.801,8.417,193.837,19,186.29,35.447 c-3.508,7.648-6.381,17.251-6.254,28.021l-24.145-19.316c-2.278-1.823-5.204-2.631-8.097-2.241 c-2.893,0.393-5.497,1.952-7.209,4.317c-0.918,1.269-22.423,31.413-15.964,59.498c3.043,13.226,11.42,23.596,24.877,30.811 c4.58,2.469,10.357,4.581,17.292,6.34c-12.635,6.401-24.351,14.778-34.745,24.982c-0.006,0.005-0.011,0.013-0.017,0.018 l-0.001-0.001c-26.671,26.306-41.361,61.392-41.361,98.79V288v7.792v77.541c0,22.146,5.394,44.205,15.598,63.794 c0.001,0.002,0.002,0.004,0.004,0.006c0,0.001,0,0.002,0.001,0.003l0.001,0.001c18.852,36.27,52.419,62.253,92.096,71.29 c0.002,0,0.003,0,0.005,0.001c0.003,0.001,0.008,0.002,0.011,0.003c0.002,0.001,0.004,0.001,0.006,0.001 C208.721,510.8,219.133,512,229.333,512h53.333c9.878,0,20.007-1.159,30.967-3.547l-0.001-0.006 c0.043-0.01,0.087-0.013,0.13-0.022c39.657-9.152,73.175-35.135,91.966-71.286l0.001-0.001c0.001-0.001,0.001-0.002,0.001-0.003 c0.002-0.002,0.003-0.004,0.004-0.006c10.204-19.589,15.598-41.648,15.598-63.794v-77.541v-7.687v-21.438 C421.333,229.268,406.644,194.182,379.97,167.874z M356.98,175.884l-25.564,25.563l-51.899-51.895 c2.193-0.01,4.528-0.043,6.994-0.109C312.355,150.233,337,159.538,356.98,175.884z M240.92,291.953l-60.238,60.321 l-60.322-60.332l60.228-60.321L240.92,291.953z M195.668,216.531L256,156.205l60.332,60.327L256,276.863L195.668,216.531z M256.005,307.039l60.332,60.332l-60.238,60.311l-60.332-60.322L256.005,307.039z M271.086,291.949l60.331-60.332l60.323,60.332 l-60.323,60.331L271.086,291.949z M359.691,68.437c4.586,9.068,9.095,21.788,6.697,32.322 c-1.621,7.117-6.283,12.683-14.252,17.016c-11.003,5.98-34.746,9.735-65.292,10.323c-0.34-0.021-0.68-0.041-1.012-0.052 l30.106-24.605L359.691,68.437z M292.307,65.6l9.779-27.429c1.539,2.591,3.038,5.44,4.334,8.476 c6.769,15.844,5.213,29.222-4.729,40.882l-23.503,19.208L292.307,65.6z M255.695,27.092 c8.547,12.593,13.522,28.011,15.398,34.607l-15.086,43.956l-15.871-45.632C241.314,48.119,249.025,35.63,255.695,27.092z M205.429,44.899c1.227-2.754,2.638-5.307,4.091-7.614l9.044,25.682c0,0.058-0.001,0.126-0.001,0.178h0.064l0.633,1.796 l14.579,41.919l-23.46-19.105C200.322,74.061,198.69,60.032,205.429,44.899z M159.603,117.745 c-7.906-4.239-12.544-9.719-14.177-16.755c-2.452-10.557,2.086-23.395,6.694-32.538l43.707,34.964l30.028,24.455 C183.18,126.951,166.13,121.263,159.603,117.745z M229.333,149.333h3.366l-52.116,52.113l-25.567-25.567 C175.992,158.69,202.004,149.333,229.333,149.333z M112,266.667c0-28.094,9.806-54.642,27.804-75.829l25.7,25.7L112,270.122 V266.667z M112,373.333v-59.58l53.597,53.604l-46.411,46.328C114.462,400.809,112,387.091,112,373.333z M197.5,486.206 c-28.636-8.027-53.057-26.653-68.505-52.169l51.686-51.595l60.332,60.323L197.5,486.206z M282.667,490.667h-53.333 c-1.988,0-3.968-0.059-5.946-0.162l32.71-32.655l32.64,32.639C286.691,490.606,284.669,490.667,282.667,490.667z M314.607,486.189l-43.423-43.422l60.238-60.313l51.585,51.577C367.605,459.458,343.223,478.079,314.607,486.189z M400,373.333 c0,13.754-2.46,27.468-7.181,40.339l-46.317-46.309L400,313.858V373.333z M400,270.038l-53.499-53.506l25.695-25.695 C390.194,212.024,400,238.573,400,266.667V270.038z"/><rect x="245.333" y="208" width="21.333" height="21.333"/><rect x="245.333" y="357.333" width="21.333" height="21.333"/><rect x="320" y="282.667" width="21.333" height="21.333"/><rect x="170.667" y="282.667" width="21.333" height="21.333"/><rect x="170.667" y="432" width="21.333" height="21.333"/><rect x="320" y="432" width="21.333" height="21.333"/></g></g></g></svg>`,
    `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 63 63" style="enable-background:new 0 0 63 63;" xml:space="preserve"><g><g id="group-3svg"><path id="path-1_21_" d="M36.157,63L36.157,63c-2.887,0-5.129-0.908-6.279-1.498C28.728,62.092,26.485,63,23.599,63 c-0.933,0-1.872-0.095-2.795-0.283c-7.873-1.609-12.21-6.744-12.21-14.459c0-4.415,2.055-8.528,5.785-11.582 c0.92-0.753,3.171-2.612,3.171-2.612c0.051-0.042,0.103-0.08,0.159-0.115c2.857-1.788,3.431-4.908,3.438-9.687 c-0.118-0.975-0.785-7.663,2.547-11.483c1.525-1.748,3.605-2.635,6.184-2.635c2.477,0,4.496,0.859,6.003,2.552 c3.391,3.813,2.822,10.63,2.727,11.552c0.006,4.787,0.579,7.912,3.438,9.701c0.056,0.035,0.108,0.073,0.159,0.115 c0,0,2.252,1.859,3.172,2.612c3.73,3.055,5.784,7.168,5.784,11.582c0,7.715-4.336,12.85-12.21,14.459 C38.029,62.905,37.089,63,36.157,63z M29.88,58.279c0.297,0,0.593,0.086,0.847,0.26c0.014,0.01,2.216,1.461,5.43,1.461l0,0 c0.731,0,1.469-0.074,2.195-0.223c6.508-1.33,9.809-5.205,9.809-11.519c0-3.498-1.664-6.787-4.684-9.261 c-0.826-0.675-2.714-2.234-3.109-2.56c-4.39-2.807-4.76-7.802-4.76-12.269c0-0.057,0.004-0.116,0.01-0.173 c0.008-0.063,0.69-6.314-1.983-9.31c-0.924-1.037-2.154-1.541-3.757-1.541c-1.697,0-2.981,0.526-3.923,1.607 c-2.187,2.508-2.057,7.501-1.821,9.213c0.009,0.068,0.014,0.135,0.014,0.204c0,4.466-0.37,9.461-4.761,12.269 c-0.395,0.326-2.283,1.885-3.108,2.56c-3.021,2.474-4.685,5.763-4.685,9.261c0,6.314,3.301,10.189,9.81,11.519 C22.13,59.926,22.867,60,23.599,60c3.213,0,5.416-1.451,5.437-1.466C29.29,58.364,29.586,58.279,29.88,58.279z"/><path id="path-2_21_" d="M32.9,48.629l-0.055-7.473l3.902,6.374c0.598,0.978,0.291,2.256-0.687,2.854 c-0.978,0.599-2.256,0.291-2.854-0.687C33.003,49.366,32.904,48.991,32.9,48.629z"/><path id="path-3_21_" d="M23.998,47.53l3.901-6.374l-0.055,7.473c-0.009,1.147-0.945,2.069-2.091,2.06 c-1.147-0.008-2.069-0.944-2.06-2.091C23.695,48.21,23.81,47.84,23.998,47.53z"/><path id="path-4_19_" d="M44.296,12.244c-2.264,0-4.632-0.56-7.039-1.664c-0.159-0.077-3.189-1.555-5.693-3.007 c-0.488-0.283-0.776-0.817-0.745-1.382C30.94,4.05,32.372,0,36.925,0c0.977,0,2.056,0.198,3.204,0.586 c6.913,2.342,13.267,4.858,13.329,4.883c0.438,0.173,0.768,0.541,0.893,0.993c0.126,0.453,0.032,0.938-0.253,1.312 C53.958,7.956,50.61,12.244,44.296,12.244z M33.959,5.483c2.204,1.226,4.553,2.372,4.58,2.385 c1.981,0.908,3.929,1.376,5.757,1.376c2.637,0,4.593-0.964,5.832-1.849c-2.438-0.933-6.587-2.486-10.962-3.967 C38.329,3.144,37.575,3,36.925,3C34.939,3,34.219,4.478,33.959,5.483z"/><path id="path-5_15_" d="M29.876,13.144c-0.783,0-1.442-0.608-1.495-1.401c-0.128-1.937,0.859-4.863,1.047-5.4 c0.173-0.605,1.265-3.921,5.041-5.971c0.727-0.396,1.639-0.126,2.034,0.602s0.125,1.639-0.603,2.035 c-2.873,1.559-3.558,4.048-3.586,4.153c-0.01,0.04-0.027,0.094-0.041,0.133c-0.384,1.083-0.968,3.194-0.898,4.25 c0.055,0.827-0.571,1.541-1.397,1.596C29.943,13.143,29.91,13.144,29.876,13.144z"/></g></g></svg>`,
    `<svg viewBox="0 -19 512 511" xmlns="http://www.w3.org/2000/svg"><path d="m512 274.15625c0-40.890625-31.53125-79.601562-86.519531-106.214844-112.835938-60.46875-134.144531-159.367187-134.347657-160.351562l-1.4375-7.089844h-67.417968l-1.410156 7.097656c-.195313.988282-21.125 99.753906-134.179688 160.265625-55.09375 26.621094-86.6875 65.359375-86.6875 106.292969 0 70.449219 90.472656 126.59375 220.019531 136.515625 5.136719.398437 9.769531.699219 14.230469.953125l-41.5 6.914062c-4.800781.800782-8.058594 5.347657-7.253906 10.160157.722656 4.316406 4.457031 7.371093 8.695312 7.371093.476563 0 .96875-.035156 1.464844-.125l33.386719-5.558593-16.367188 16.363281c-3.453125 3.453125-3.453125 9.03125 0 12.484375 1.722657 1.722656 3.980469 2.585937 6.242188 2.585937 2.257812 0 4.519531-.867187 6.242187-2.585937l22.015625-22v28.125c0 4.871094 3.953125 8.828125 8.828125 8.828125 4.871094 0 8.828125-3.957031 8.828125-8.828125v-28.125l22.007813 22.007813c1.71875 1.722656 3.980468 2.585937 6.238281 2.585937 2.261719 0 4.519531-.863281 6.242187-2.585937 3.453126-3.453126 3.453126-9.03125 0-12.480469l-16.46875-16.464844 33.210938 6.640625c.582031.113281 1.164062.175781 1.738281.175781 4.125 0 7.8125-2.902343 8.644531-7.097656.953126-4.785156-2.148437-9.429687-6.921874-10.390625l-38.894532-7.777344c3.539063-.160156 7.203125-.34375 11.175782-.566406 129.652343-7.40625 220.195312-63.785156 220.195312-137.125zm-256.265625-200.792969c3.214844 16.488281 7.726563 36.757813 14.132813 60.894531 4.085937 15.375 8.636718 29.246094 13.515624 41.207032 2.984376 7.308594 4.160157 9.984375 6.214844 14.679687 1.765625 4.035157 4.183594 9.5625 9.03125 20.964844 7.457032 17.53125 11 40.96875 10.230469 67.761719-1.835937 64.027344-27.640625 108.773437-51.898437 115.84375-.828126 0-1.675782-.007813-2.503907-.015625-24.242187-7.125-50.011719-51.851563-51.847656-115.828125-.765625-26.789063 2.765625-50.21875 10.230469-67.757813 4.832031-11.351562 7.25-16.886719 9.015625-20.914062 2.0625-4.722657 3.238281-7.398438 6.230469-14.734375 4.890624-11.996094 9.4375-25.863282 13.515624-41.207032 6.410157-24.136718 10.921876-44.40625 14.132813-60.894531zm70.773437 206.015625c.84375-29.746094-3.066406-55.039062-11.628906-75.183594-4.890625-11.492187-7.335937-17.070312-9.109375-21.132812-1.996093-4.554688-3.132812-7.167969-6.039062-14.265625-4.597657-11.273437-8.898438-24.425781-12.800781-39.078125-6.097657-22.976562-10.371094-42.160156-13.507813-58.042969 11.539063 26.730469 31.375 63.199219 63.109375 94.933594 7.257812 7.257813 10.101562 9.90625 15.121094 14.582031 4.265625 3.972656 10.136718 9.4375 21.824218 20.640625 17.566407 16.84375 25.5625 38.25 23.78125 63.628907-3.742187 53.203124-49.558593 97.394531-100.742187 118.8125 17.351563-24.527344 28.773437-62.335938 29.992187-104.894532zm-101.960937-149.652344c-3.882813 14.625-8.191406 27.769532-12.800781 39.070313-2.910156 7.132813-4.042969 9.738281-6.054688 14.320313-1.773437 4.058593-4.21875 9.636718-9.089844 21.078124-8.574218 20.152344-12.492187 45.445313-11.628906 75.183594 1.210938 42.347656 12.535156 80.003906 29.742188 104.542969-50.875-21.539063-96.246094-65.535156-99.972656-118.464844-1.785157-25.378906 6.222656-46.785156 23.78125-63.628906 11.6875-11.199219 17.558593-16.664063 21.820312-20.636719 5.023438-4.679687 7.867188-7.328125 15.121094-14.585937 30.84375-30.84375 50.476562-66.1875 62.148437-92.6875-3.089843 15.433593-7.265625 33.933593-13.066406 55.808593zm192.761719 53.867188.316406.167969c48.761719 23.558593 76.71875 56.503906 76.71875 90.394531 0 56.558594-70.089844 103.070312-170.785156 116.40625 47.933594-26.296875 87.59375-71 91.3125-123.859375 2.144531-30.417969-7.945313-57.265625-29.175782-77.613281-11.777343-11.296875-17.699218-16.804688-22.007812-20.8125-4.871094-4.539063-7.628906-7.109375-14.671875-14.152344-38.53125-38.53125-58.535156-84.777344-67.035156-108.914062-4.175781-11.875-7.554688-20.691407-10.925781-27.058594h4.542968c7.027344 25.089844 37.683594 109.765625 141.710938 165.441406zm-399.652344 90.5625c0-33.890625 27.957031-66.84375 77.027344-90.5625 104.035156-55.675781 134.691406-140.351562 141.726562-165.4375h4.546875c-3.378906 6.363281-6.75 15.183594-10.9375 27.046875-8.492187 24.136719-28.503906 70.375-67.035156 108.914063-7.042969 7.042968-9.796875 9.605468-14.671875 14.152343-4.296875 4.007813-10.222656 9.523438-22.007812 20.8125-21.230469 20.347657-31.320313 47.195313-29.183594 77.613281 3.636718 51.710938 41.65625 95.671876 88.1875 122.175782-99.011719-15.484375-167.652344-61.140625-167.652344-114.714844zm0 0"/></svg>`,
])
liveBackground.backgroundPC.Classic.start()
liveBackground.backgroundPhone.Classic.start()

let num = 0
anime({
    // элементы
    targets: '.point',
    translateX: 75,
    // время анимации
    duration: 1000,
    });
    const point = document.querySelector(".point") as HTMLDivElement
    const ring = document.querySelector(".ring") as HTMLDivElement
    let run = setInterval(()=>{
        anime({
            // элементы
            targets: '.point',
            translateX: num,
            // время анимации
            // duration: 1000,
            });
        if(num == 0) num = 75
        else num = 0
},500)
async function websiteLaunch () {
    try{
        const data = await fetch("http://localhost:1010/answer")
        const answer = await data.text()
        console.log(answer);
    if (answer == "ok"){
        setTimeout(()=>{

            clearInterval(run)
            ring.style.borderColor = "#ffffff"
            
            anime({
                // элементы
                targets: '.point',
                translateX: 0,
                width: ['25%','100%'],
                // время анимации
                duration: 1500,
                easing: 'easeInOutSine',
                backgroundColor:"#3aff33"
            });
        },1500)
    }
}catch{
    setTimeout(()=>{
            
        clearInterval(run)
        ring.style.borderColor = "#ffffff"
        
        anime({
            // элементы
            targets: '.point',
            translateX: 0,
            width: ['25%','100%'],
            // время анимации
            duration: 1500,
            easing: 'easeInOutSine',
            backgroundColor:"#b81414"
        });
    },1500)
}


}
websiteLaunch()


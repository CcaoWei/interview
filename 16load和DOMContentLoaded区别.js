const img1 = document.getElementById('img1')
img1.onload = function () {
    console.log('img loaded---')
}

window.addEventListener('load', function () {
    console.log('window loaded')
})

document.addEventListener('DOMContentLoaded', function () {
    console.log('dom content loaded')
})


// index.js:11 dom content loaded
// index.js:3 img loaded
// index.js:7 window loaded
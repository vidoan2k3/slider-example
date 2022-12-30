var dotBtn = document.querySelectorAll (".dot");
var sliderImgs = document.querySelectorAll (".slider-container img")
var nextBtn = document.querySelector (".next-btn")
var preBtn = document.querySelector (".pre-btn")

var currentIndex = 0
var imgsLength = sliderImgs.length;
var showImg = function (i) {
    sliderImgs[i].classList.add ("active");
    dotBtn[i].classList.add ("active");
    sliderImgs.forEach ((value, index) => {
        if (index != i) {
            value.classList.remove ("active");
        }
    })
    dotBtn.forEach ((value, index) => {
        if (index != i) {
            value.classList.remove ("active");
        }
    })
}



showImg (0);

var dotEvent = function () {
    dotBtn.forEach ((value, index) => {
        value.addEventListener ('click', () => {
            showImg (index);
            currentIndex = index;
        })
    })
}

var nextImg = function () {
        currentIndex++;
        if (currentIndex > imgsLength-1) currentIndex = 0;
        showImg (currentIndex);
}


var preImg = function () {
        currentIndex--;
        if (currentIndex < 0) currentIndex = imgsLength-1;
        showImg (currentIndex);
}

var autoChange = setInterval(nextImg, 8000);

nextBtn.onclick = () => {
    nextImg();
    clearInterval (autoChange);
    autoChange = setInterval(nextImg, 8000);
}
preBtn.onclick = preImg;

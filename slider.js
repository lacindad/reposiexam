const arrayText = ['this is first slide.', 'this is second slide.'];
const arraySubText = ['Lorem ipsum dolor sit amet nullam','Ipsum dolor lorem sit amet nullam.'];

const arrayBackground = ['./img.jpg', './img1.jpg'];

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const content = document.getElementById('content');
const dots = document.getElementsByClassName('slider__dot');
const slideText = document.getElementById('slideText');
const slideSubText = document.getElementById('slideSubText');

let numberPic = 0;

leftArrow.addEventListener('click', () => {
    changePictures(1);
});

rightArrow.addEventListener('click', () => {
    changePictures(-1);
});


const changePictures = (pos) => {
    checkNumber(pos);
    changeDot(dots, numberPic);
    content.style.backgroundImage = `url(${arrayBackground[numberPic]})`;
    changeText(slideSubText, slideText, numberPic, arrayText, arraySubText);
};

const changeText = () => {
    slideText.innerHTML = arrayText[numberPic];
    slideSubText.innerHTML = arraySubText[numberPic];
};

const changeDot = (dots, numberPic) => {
    clearDots(dots);
    dots[numberPic].classList.add('slider__dot_active')
};

const clearDots = (dots) => {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('slider__dot_active')
    }

};

const checkNumber = (pos) => {
    const res = pos + numberPic;

    if (res > 1) {
        numberPic = 0;
    } else if (res < 0) {
        numberPic = 1;
    } else {
        numberPic = res;
    }
};

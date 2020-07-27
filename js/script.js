$(function () {
    document.addEventListener('mousemove', light);
});

let
    bgTitle = $('.header__titleSpan'),
    lamp = $('.header__lamp'),
    title = $('.header__title'),
    circle = $('.header__circle'),
    width = innerWidth,
    height = innerHeight,
    colorOne = 0,
    colorTwo = 20,
    colorThree = 50,
    colorFour = 80,
    colorFive = 100;

function light(e) {
    let coursoreX, coursoreY, lampWidth, lampHeight, circleX, lightX;

    // перевод в проценты и округление 
    coursoreX = (e.clientX / (width / 100)).toFixed(2);
    coursoreY = (e.clientY / (height / 100)).toFixed(2);

    // движение лампы по горизонту
    lampWidth = coursoreX * 4;
    lamp.css({ 'margin-left': `${-200 + lampWidth}px` });

    // движение лампы по вертикали
    lampHeight = (coursoreY * 0.6);
    lamp.css({ 'margin-top': `${70 + lampHeight}px` });
    title.css({ 'margin-top': `${110 - lampHeight}px` });

    //движение свечения
    circleX = coursoreX * 1;
    circle.css({ 'left': `${300 + circleX}px` });

    //динамическое освещение надписи
    lightX = coursoreX * 0.2;
    lightY = coursoreY * 0.1;
    colorOne = -10 + lightX - lightY
    colorTwo = 10 + lightX - lightY;
    colorThree = 40 + lightX + lightY;
    colorFour = 70 + lightX + lightY;
    colorFive = 90 + lightX + lightY;

    bgTitle.css({ 'background-image': `linear-gradient(90deg, rgba(96,96,96,0) ${colorOne}%, rgba(110,98,76,0.30) ${colorTwo}%, rgba(224,167,65,0.8239670868347339) ${colorThree}%, rgba(110,98,76,0.30) ${colorFour}%, rgba(96,96,96,0) ${colorFive}%` })

}
//объявление переменных
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
    colorFive = 100,
    currentWidth = document.documentElement.clientWidth,
    burgerBtn = $('.header__burger'),
    burgerMenu = $('.burgerMenu'),
    mainTitle = $('.main__title'),
    $counter = 0,
    up = $('.up');
//загружаем страницу и запускаем скрипты

$(function () {

    //скрываем меню
    $('.up, .burgerMenu').fadeOut(0);

    //работа лампочки выключается при разрешении дисплея меньше 1600
    if (currentWidth >= 1600) {
        document.addEventListener('mousemove', light);
    }

    //бургер анимация
    burgerBtn.click(function () {
        $('.header__burger-span').toggleClass('header__burger-spanActive');
    });

    //выпадающее меню
    menu();
    showAndToUp();
});

//анимация лампочки
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

    bgTitle.css({ 'background-image': `linear-gradient(90deg, rgba(96,96,96,0) ${colorOne}%, rgba(110,98,76,0.30) ${colorTwo}%, rgba(224,167,65,0.8239670868347339) ${colorThree}%, rgba(110,98,76,0.30) ${colorFour}%, rgba(96,96,96,0) ${colorFive}%` });
}

//анимация выпадающего меню
function menu() {
    burgerBtn.click(function () {
        if (!$('.header__burger-span').hasClass('header__burger-spanActive')) {
            burgerMenu.slideUp(500);
        } else {
            burgerMenu.slideDown(500);
        }
    })
}

//появление кнопки
function showAndToUp() {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = mainTitle.offset().top;

        if (scroll > offset) {
            up.fadeIn(500);

        } else {
            up.hide(200);

        }
    });
}

//Плавные якоря
$('a[href^="#"').click(function () {
    let target = $(this).attr('href');
    $('html,body').animate({
        scrollTop: $(target).offset().top
    }, 800);
    return false;
})
var
    bgTitle = $('.header__titleSpan'),
    lamp = $('.header__lamp'),
    title = $('.header__title'),
    circle = $('.header__circle'),
    width = innerWidth,
    height = innerHeight;


$(function () {
    document.addEventListener('mousemove', light)




    bgTitle.css({ 'background-image': 'linear-gradient(90deg, rgba(96,96,96,0) 0%, rgba(110,98,76,0.30) 20%, rgba(224,167,65,0.8239670868347339) 50%, rgba(110,98,76,0.30) 80%, rgba(96,96,96,0) 100%' })
});








function light(e) {
    let coursoreX, coursoreY, lampWidth, lampHeight, circleX;

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

    //движение свещения
    circleX = coursoreX * 1;
    circle.css({ 'left': `${300 + circleX}px` });
}
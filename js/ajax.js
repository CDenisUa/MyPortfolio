$(document).ready(function () {
    $.getJSON('/info.json', function (data) {
        if (window.innerWidth <= 1000) {
            for (const key in data) {
                $(`p[data="${key}"`).text(data[`${key}`]['ru']);
                $(`div[data="${key}"`).css({ 'background-image': `url(${data[key]['url']})` });
            }
        }

        $('li[button]').click(function () {
            let id = $(this).attr('id');
            $('.main__textBlock').text(data[`${id}`]['ru']);
            $('.main__img').css({ 'background-image': `url(${data[id]['url']})` });
        });
    })
})








let webDesign = $('#webDesign'),
    logo = $('#logo'),
    content = $('.main__textBlock'),
    img = $('.main__img'),
    brand = $('#brand'),
    ui = $('#ui'),
    graph = $('#graph'),
    photo = $('#photo');

$.getJSON('/info.json', function (data) {
    webDesign.click(() => {
        content.text(data['web developmen']['ru']);
        img.css({ 'background-image': `url(${data['web developmen']['url']})` });


    })
    logo.click(() => {
        content.text(data['logo']['ru']);
        img.css({ 'background-image': `url(${data['logo']['url']})` });
    })

    brand.click(() => {
        content.text(data['brand']['ru']);
        img.css({ 'background-image': `url(${data['brand']['url']})` });
    })

    ui.click(() => {
        content.text(data['ui']['ru']);
        img.css({ 'background-image': `url(${data['ui']['url']})` });
    })

    photo.click(() => {
        content.text(data['photo']['ru']);
        img.css({ 'background-image': `url(${data['photo']['url']})` });
    })

    graph.click(() => {
        content.text(data['graph']['ru']);
        img.css({ 'background-image': `url(${data['graph']['url']})` });
    })
})


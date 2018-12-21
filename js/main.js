function loadImages() {
    $('.nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    var arrayCarrusel = [
        ["cultura", 8],
        ["gastronomia", 8],
        ["economia", 6],
        ["turismo", 12],
        ["senderismo", 13]
    ]
    for (var i = 0; i < arrayCarrusel.length; i++) {
        var category = arrayCarrusel[i][0]
        var nCultura = arrayCarrusel[i][1]
        document.getElementById('container_' + category).innerHTML = '<div id="carrusel_' + category + '" class="carousel slide" data-ride="carousel">' +
            '<ol class="carousel-indicators" id="carrusel_' + category + '_indicators"></ol>' +
            '<div class="carousel-inner" id="carrusel_' + category + '_slides"></div>' +
            '<a class="carousel-control-prev" href="#carrusel_' + category + '" role="button" data-slide="prev">' +
            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
            '<span class="sr-only">Previous</span></a>' +
            '<a class="carousel-control-next" href="#carrusel_' + category + '" role="button" data-slide="next">' +
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
            '<span class="sr-only">Next</span></a></div>'
        var indicators = document.getElementById('carrusel_' + category + '_indicators');
        var slides = document.getElementById('carrusel_' + category + '_slides');
        for (var j = 0; j < nCultura; j++) {
            indicators.innerHTML += j == 0 ? '<li data-target="#carrusel_' + category + '" data-slide-to="' + j + '" class="active"></li>' :
                '<li data-target="#carrusel_' + category + '" data-slide-to="' + j + '"></li>'
            slides.innerHTML += j == 0 ? '<div class="carousel-item active"><img src="img/' + category + '/' + category + (j + 1) + '.jpg" alt="' + category + (j + 1) + '" style="width:450px; height:400px"></div>' :
                '<div class="carousel-item"><img src="img/' + category + '/' + category + (j + 1) + '.jpg" alt="' + category + (j + 1) + '" style="width:450px; height:400px"></div>'
        }
    }
}
var products = [
    {"id": "tv42", "product": "Televisor 42'", 'category': "Electro"},
    {"id": "tv60", "product": "Televisor 60'", 'category': "Electro"},
    {"id": "tv32", "product": "Televisor 32'", 'category': "Electro"},
    {"id": "eqson", "product": "Equipo de sonido", 'category': "Sonido"},
    {"id": "dvd", "product": "DVD Panasonic'", 'category': "Relax"}
];

$(document).ready(function() {

    loadproducts();

    $('.menu > a').click(function() {

        var id = $(this).attr('category');

        $('.producto').hide(500);
        $('.' + id).show(500);


    });

});

function loadproducts() {


    for (var i in products) {

        var div = document.createElement('div');
        var producto = document.createElement('span');
        var category = document.createElement('span');
        var id = document.createElement('a');

        $(producto).append(products[i].product);
        $(producto).addClass('producto-name');
        $(category).append(products[i].category);
        $(category).addClass('producto-categoria');
        $(category).addClass(products[i].category);
        $(id).attr({'href': '#', 'id-product': products[i].id});
        $(id).append("Comprar");
        $(id).addClass('producto-id');

        div.appendChild(producto);
        div.appendChild(category);
        div.appendChild(id);
        div.setAttribute('class', 'producto ' + products[i].category);
        div.setAttribute('index', i);
        $('#productos').append(div);
    }

}
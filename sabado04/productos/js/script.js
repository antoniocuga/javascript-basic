var products = [
    {"id": "tv42", "product": "Televisor 42'", "cantidad": 10, 'category': "Electro"},
    {"id": "tv60", "product": "Televisor 60'", "cantidad": 10, 'category': "Electro"},
    {"id": "tv32", "product": "Televisor 32'", "cantidad": 10, 'category': "Electro"},
    {"id": "eqson", "product": "Equipo de sonido", "cantidad": 10, 'category': "Sonido"},
    {"id": "dvd", "product": "DVD Panasonic'", "cantidad": 10, 'category': "Relax"}
];

$(document).ready(function() {

    loadproducts();

    $('.menu > a').click(function() {

        var id = $(this).attr('category');

        $('.producto').hide(500);
        $('.' + id).show(500);


    });
    $('.producto > a').click(function() {

        var id = $(this).attr('id-product');
        renderProducts(id, 'compras');
    });

});

function loadproducts() {


    for (var i in products) {

        renderProducts(i, 'productos');
    }

}

//@i is the product position
//@container is the ID for the div content, only ID madafaka
function renderProducts(i, container) {

    var div = document.createElement('div');
    var producto = document.createElement('span');
    var category = document.createElement('span');
    var id = document.createElement('a');
    var cantidad = document.createElement('span');

    $(producto).append(products[i].product);
    $(producto).addClass('producto-name');
    $(category).append(products[i].category);
    $(category).addClass('producto-categoria');
    $(category).addClass(products[i].category);
    $(id).attr({'href': '#', 'id-product': i});
    $(id).append("Comprar");
    $(id).addClass('producto-id');
    $(cantidad).append(products[i].cantidad);
    $(cantidad).addClass('producto-cantidad');

    div.appendChild(producto);
    div.appendChild(category);
    div.appendChild(id);
    div.appendChild(cantidad);
    div.setAttribute('class', 'producto ' + products[i].category);
    div.setAttribute('index', i);
    $('#' + container).append(div);

}
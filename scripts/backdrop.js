$(document).ready(function() {
    setTimeout(function() {
        $('img.shown').show();
        slideShow();
    }, 1000);
});

function slideShow() {
    setInterval('gallery()', 5000);
}

function gallery() {
    var current = ($('.backdrop img.shown') ? $('.backdrop img.shown') : $('.backdrop img').first());
    var next = ((current.next().length) ? ((current.next().hasClass('shown')) ? $('.backdrop img').first() : current.next()) : $('.backdrop img').first());

    next.fadeIn(1000).addClass('shown');
    current.fadeOut(100).removeClass('shown');
}

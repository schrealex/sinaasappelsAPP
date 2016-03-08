$(function () {
    $('.backdrop img:first').css({ opacity: 1.0 });
    $('.backdrop img').css({ opacity : 0.0 });

    slideShow();
});

function slideShow() {

    setInterval('gallery()', 5000);
}

function gallery() {
    var current = ($('.backdrop img.show') ? $('.backdrop img.show') : $('.backdrop img').first());
    var next = ((current.next().length) ? ((current.next().hasClass('caption')) ? $('.backdrop img').first() : current.next()) : $('.backdrop img').first());

    next.css({ opacity: 0.0 })
        .addClass('show')
        .animate({ opacity: 1.0 }, 1000);

    current.animate({ opacity: 0.0 }, 1000).removeClass('show');
}

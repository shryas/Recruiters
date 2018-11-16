var hidderclass = document.querySelectorAll('.curoselhide');
if ($(window).width() < 960) {
    $('#myCollapsible').collapse({
        toggle: false
    })
    $('#myCollapsiblefilter').collapse({
        toggle: false
    })
    i = 0,
        l = hidderclass.length;
    for (i; i < l; i++) {
        hidderclass[i].style.display = 'none';
    }
} else {
    $('#myCollapsible').collapse({
        toggle: true
    })
    $('#myCollapsiblefilter').collapse({
        toggle: true
    })

}
// event pada saat di klik
$('.page-scroll').on('click', function(e){

    // mengambil isi dari href
    var tujuan = $(this).attr('href');

    // tangkap elemen yg bersangkutan
    var elemenTujuan = $(tujuan);

    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1300, 'swing');

    e.preventDefault();
});
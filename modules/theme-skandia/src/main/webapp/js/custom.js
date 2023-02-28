var selector = '.service-top-sk ul.service-site-sk li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});
/*header site personas */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show-sk");
    document.getElementById("myIcon-sk").classList.toggle("show-sk");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show-sk')) {
        myDropdown.classList.remove('show-sk');
      }
    }
  }

/* Video */
class MediaPlayer {
    media;
    plugins;
    container;
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    initPlugins() {
        this.plugins.forEach((plugin) => {
            plugin.run(this);
        });
        this.controlVolume(0.5);
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }
    validatePlay(){
        if (this.media.paused) {
        return false;
        } else {
        return true;
        }
    }
    validateMute () {
        if(this.media.muted == true){
            return false;
        }else{
            return true;
        }
    }
    mute() {
        this.media.muted = true;
    }
    unMute() {
        this.media.muted = false;
    }
    controlVolume( volume ) {
        this.media.volume = volume;
    }
}

const video = document.querySelector(".video-sk");
const player = new MediaPlayer({
    el: video,
    plugins: []
});

$('.btn_play').click(function () {
    if(!player.validatePlay()){
        player.togglePlay();
        $('.btn_play').attr('disabled', false);
    }
});

$('.btn_pause').click(function () {
    if(player.validatePlay()){
        player.togglePlay();
        $('.btn_pause').attr('disabled', false);
    }
});

$('.btn_toggle_play').click(function () {
    player.togglePlay();
});

$('#btn-mute').click(function () {
    if(player.validateMute()){
        player.mute();
        $('.volume-icon').removeClass('icon-skvolume-medium');
        $('.volume-icon').addClass('icon-skvolume-mute2');
    }else{
        player.unMute();
        $('.volume-icon').removeClass('icon-skvolume-mute2');
        $('.volume-icon').addClass('icon-skvolume-medium');
    }
});

var sound = document.querySelector(".video-sound");
sound.oninput = () => {
    let converter = sound.value * 100;
    let size = converter + '% 100%';
    $('.video-sound').css('background-size', size);
    player.controlVolume(sound.value);
}

//Carousel 
    //inicializacion
    var carousel_sk;
    carousel_sk = $('#carousel-sk').owlCarousel({
        items:1,
        margin:10,
        autoHeight:true,
        nav:true
    });
    //reset tabindex
    $('#carousel-sk .owl-item a').attr("tabindex", -1);
    $('#carousel-sk .owl-item.active a').attr("tabindex", 0);
    //posicion controladores
    //$("#carousel-sk .owl-nav").prependTo("#carousel-sk .owl-stage-outer");
    //$("#carousel-sk .owl-nav .owl-prev, #carousel-sk .owl-nav .owl-next").css({'z-index':'1'});
    //labels para los dots
    $("#carousel-sk .owl-dots .owl-dot").each(function(){
        $(this).attr("aria-label","slider "+($(this).index()+1));
    });
    //navegacion por dots personalizados y indexacion tabindex
    $('.carousel-sk .owl-dot').click(function () {
        carousel_sk.trigger('to.owl.carousel', [$(this).index(), 300]);
        $('#carousel-sk .owl-item a').attr("tabindex", -1);
        $('#carousel-sk .owl-item.active a').attr("tabindex", 0);
    });
    //indexacion tabindex con controladores
    $('#carousel-sk .owl-next, #carousel-sk .owl-prev').click(function () {
        $('#carousel-sk .owl-item a').attr("tabindex", -1);
        $('#carousel-sk .owl-item.active a').attr("tabindex", 0);
    });

//carousel-cards
    //inicializacion
    var carousel_cards;
    carousel_cards = $('#carousel-cards').owlCarousel({
        loop:true,
        margin:8,
        responsiveClass:true,
        nav:true,
        loop:false,
        responsive:{
            0:{
                items:1,
            },
            790:{
                items:2,
                nav:true
            },
            1050:{
                items:3,
            },
            1320:{
                items:4,
            }
        },
    })
    //reset tabindex
    $('#carousel-cards .owl-item a').attr("tabindex", -1);
    $('#carousel-cards .owl-item.active a').attr("tabindex", 0);
    //posicion controladores
    $("#carousel-cards .owl-nav").prependTo("#carousel-cards");
    $("#carousel-cards .owl-nav .owl-prev, #carousel-cards .owl-nav .owl-next").css({'z-index':'1'});
     //indexacion tabindex con controladores
    $('#carousel-cards .owl-next, #carousel-cards .owl-prev').click(function () {
        $('#carousel-cards .owl-item a').attr("tabindex", -1);
        $('#carousel-cards .owl-item.active a').attr("tabindex", 0);
    });

//banner slider
    //inicializacion
    var banner_slider;
    banner_slider = $('#banner-slider').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        autoHeight:true,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            1025:{
                items:1,
            }
        }
    });
    //reset tabindex
    $('#banner-slider .owl-item a').attr("tabindex", -1);
    $('#banner-slider .owl-item.active a').attr("tabindex", 0);
    //posicion controladores
    //$("#banner-slider .owl-nav").prependTo("#banner-slider .owl-stage-outer");
    //$("#banner-slider .owl-nav .owl-prev, #banner-slider .owl-nav .owl-next").css({'z-index':'1'});
    //labels para los dots
    $("#banner-slider .owl-dots .owl-dot").each(function(){
        $(this).attr("aria-label","slider "+($(this).index()+1));
    });
    //navegacion por dots personalizados y indexacion tabindex
    $('.banner-slider .owl-dot').click(function () {
        banner_slider.trigger('to.owl.carousel', [$(this).index(), 300]);
        $('#banner-slider .owl-item a').attr("tabindex", -1);
        $('#banner-slider .owl-item.active a').attr("tabindex", 0);
    });
    //indexacion tabindex con controladores
    $('#banner-slider .owl-next, #banner-slider .owl-prev').click(function () {
        $('#banner-slider .owl-item a').attr("tabindex", -1);
        $('#banner-slider .owl-item.active a').attr("tabindex", 0);
    });


//validador resolucion de pantalla
function resolutionValidator ( resolutionMobile ) {
    if( $(window).width() > resolutionMobile ) {
        return true;
    }else {
        return false;
    }
}

//Tabs skandia
    //animacion del header de los tabs al mostrarse la variante
    function animationHeaderTabs () {
        if( resolutionValidator(1024) ){
            $('.header-tabs').css("animation", "changeTab 0.8s linear 1");
            setTimeout(function(){
                $('.header-tabs').css("animation", "");
            }, 800);     
        }
    }
    //Acomodar estilos dependiendo del primer tab
    if($('#testimony1 .tab-container').hasClass('variant')){
        $('.header-tabs h2').remove('ml-auto');
        $('.header-tabs .tabs-nav-sk').addClass('mr-auto');
    }else {
        $('.header-tabs h2').addClass('ml-auto');
        $('.header-tabs .tabs-nav-sk').removeClass('mr-auto');
    }
    //Cambio de tab
    $('#tabs-sk a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
        var tabSelector = '#'+$(this).attr('aria-controls')+' .tab-container';
        if($(tabSelector).hasClass('variant')){
            if ($('.header-tabs h2').hasClass('ml-auto')){
                $('.header-tabs h2').removeClass('ml-auto');
                $('.header-tabs .tabs-nav-sk').addClass('mr-auto');      
                animationHeaderTabs();     
            }
        }else {
            if ($('.header-tabs .tabs-nav-sk').hasClass('mr-auto')) {
                $('.header-tabs h2').addClass('ml-auto');
                $('.header-tabs .tabs-nav-sk').removeClass('mr-auto');
                animationHeaderTabs();
            }
        }
    });

//  Slider-hero
    //inicializacion
    var slider_hero;
    slider_hero = $('#slider-hero').owlCarousel({
        items:1,
        margin:10,
        nav:true,
        dotsContainer: '#dots-slider-hero'
    });
    //reset tabindex
    $('#slider-hero .owl-item a').attr("tabindex", -1);
    $('#slider-hero .owl-item.active a').attr("tabindex", 0);
     //posicion controladores
    $("#slider-hero .owl-nav").prependTo("#slider-hero .owl-stage-outer");
    $("#slider-hero .owl-nav .owl-prev, #slider-hero .owl-nav .owl-next").css({'z-index':'1'});
    //indexacion tabindex con controladores
    $('#slider-hero .owl-next, #slider-hero .owl-prev').click(function () {
        $('#slider-hero .owl-item a').attr("tabindex", -1);
        $('#slider-hero .owl-item.active a').attr("tabindex", 0);
    });
    //navegacion por dots personalizados y indexacion tabindex
    $('.slider-hero-sk .owl-dot').click(function () {
        slider_hero.trigger('to.owl.carousel', [$(this).index(), 300]);
        $('#slider-hero .owl-item a').attr("tabindex", -1);
        $('#slider-hero .owl-item.active a').attr("tabindex", 0);
        //efecto mobile
        if(screen.width < 1025) {
            $(location).attr('href','#slider-hero');
        }
    });
    //navegacion captar enter en los dots
    $('.slider-hero-sk .owl-dot').keypress(function(e) {
        if(e.which == 13) {
            slider_hero.trigger('to.owl.carousel', [$(this).index(), 300]);
            $('#slider-hero .owl-item a').attr("tabindex", -1);
            $('#slider-hero .owl-item.active a').attr("tabindex", 0);
        }
    });

//aceptar cookies
    if (!localStorage.getItem('cookies-accept')) {
        $('.cookies-sk').addClass("active");
    }
    $('#accept_cookies').click(function () {
        $('.cookies-sk').removeClass("active");
        localStorage.setItem('cookies-accept', true);
    });

//Menu principal 
    $('.dropdown-menu').on('click', function (e) {
        e.stopPropagation();
    });
    $('.close-drop').click(function () {
        var classDrop = $(this).attr('class');
        classDrop = classDrop.trim();
        classDrop = classDrop.substring(classDrop.lastIndexOf(" "), -1);
        var selector1 = '#'+classDrop;
        var selector2 = selector1+' span';
        $(selector1).dropdown('toggle');
        $(selector1).removeClass('view');
        $(selector2).addClass('icon-skArrow-Down');
        $(selector2).removeClass('icon-skArrow-Up');
    });
    $('.btn-subdropdown').click(function () {
        let id = $(this).attr('id');
        let selector = '.subdropdown.'+id;
        if(!$(selector).hasClass('view')){
            $('.subdropdown').removeClass('view');
            $('.btn-subdropdown span').addClass('icon-skArrow-Down');
            $('.btn-subdropdown span').removeClass('icon-skArrow-Up');
            $(selector).addClass('view');
            $('span', this).removeClass('icon-skArrow-Down');
            $('span', this).addClass('icon-skArrow-Up');
        }else {
            $(selector).removeClass('view');
            $('span', this).addClass('icon-skArrow-Down');
            $('span', this).removeClass('icon-skArrow-Up');
        }
    });
    $('.nav-link.dropdown-toggle').click(function () {
        if($(this).attr('aria-expanded') == 'false'){
            $('.nav-link.dropdown-toggle').removeClass('view');
            $(this).addClass('view');
            $('.nav-link.dropdown-toggle span').addClass('icon-skArrow-Down');
            $('.nav-link.dropdown-toggle span').removeClass('icon-skArrow-Up');
            $('span', this).removeClass('icon-skArrow-Down');
            $('span', this).addClass('icon-skArrow-Up');
        }else {
            $('.nav-link.dropdown-toggle').removeClass('view');
            $('span', this).removeClass('icon-skArrow-Up');
            $('.nav-link.dropdown-toggle span').addClass('icon-skArrow-Down');
        }
    });

    $('.navbar-toggler').click(function () {
        if($(this).attr('aria-expanded') != 'true'){
            $('span', this).removeClass('icon-skMenu-burger');
            $('span', this).addClass('icon-skClose');
        }else {
            $('span', this).removeClass('icon-skClose');
            $('span', this).addClass('icon-skMenu-burger');
            $('.nav-link.dropdown-toggle').removeClass('view');
            $('.nav-link.dropdown-toggle span').addClass('icon-skArrow-Down');
            $('.nav-link.dropdown-toggle span').removeClass('icon-skArrow-Up');
        }
    });

//    Landing 2 
// HU 027 - Landing 1. FOPB. Fondo de pensiones obligatorias – Simulador
    //escuchar genero
    $('.age-simulator .btn-group input').click(function () {
        $('.age-simulator .btn-group input').removeClass('active');
        $('.age-simulator .btn-group').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('btn-right')){
            $('.age-simulator .btn-group').addClass('active');
        }
    });
    //Validacion
    $('input#age-simulador').keypress(function (event) {
        if (event.which == 13) {
            runSimulator();
        }
        if (event.which < 48 || event.which > 57 || this.value.length === 2) {
            return false;
        }
    });
    function validationSimulation () {
        $('.label-error-sk').remove();
        $('input#age-simulador').removeClass('error');
        $('#gender-simulator-sk').removeClass('error');
        var validation = 0;
        if ($('input#age-simulador').val() > 0 && $('input#age-simulador').val() != "") {
            validation++;
        } else {
            $('input#age-simulador').addClass('error');
            $('input#age-simulador').after("<label class='label-error-sk' for='age-simulador'>Por favor digite su edad. Ej: 32</label>")
        }
        if ($('#gender-simulator-sk input').hasClass('active')){
            validation++;
        } else {
            $('#gender-simulator-sk').addClass('error');
            $('#gender-simulator-sk').after("<label class='label-error-sk' for='gender-simulator-sk'>Por favor seleccione su género</label>")
        }
        if(validation == 2) {
            return true;
        } else {
            return false;
        }
    }
    //calculo simulacion
    function simulationP (age, gender) {
        var results;
        if (gender == 'Masculino') {
            if (age >= 62) {
                results = 'Ya estás en edad de pensionarte. Recuerda que según el artículo 36 de la ley 100 de 1993, los hombres pueden pensionarse a los 62 años de edad.';
            }else {
                results = 'Te faltan '+(62 - age)+' años para pensionarte.';
            }
        } else {
            if (age >= 57) {
                results = 'Ya estás en edad de pensionarte. Recuerda que según el artículo 36 de la ley 100 de 1993, las mujeres pueden pensionarse a los 57 años de edad.';
            }else {
                results = 'Te faltan '+(57 - age)+' años para pensionarte.';
            }
        }
        return results;
    }
    // Simulacion 
    function runSimulator () {
        if (validationSimulation()) {
            var outputS = simulationP ($('input#age-simulador').val(), $('#gender-simulator-sk input.active').val());
            $('.simulation-sk').addClass('active');
            $('.simulation-sk p').text(outputS);
        }else {
            $('.simulation-sk').removeClass('active');
        }
    }
    //mostrar resultados
    $('#starting-simulation').click(function () {
        runSimulator();
    });

//HU 031 - Landing 1. FOPB. Fondo de pensiones obligatorias – Slide Asesor/Copiar url
function copyURL () {
    let input = document.getElementById('copy-url');
    input.select();
    document.execCommand("copy");
}

// HU 024 - Landing 1. FOPB. Fondo de pensiones obligatorias – Banner Ahorra e invierte con Skandia  
$(document).ready(function() {
    if (!($(window).width() > 1024) ) {
        let newSize = $('#test-2 .hero-container.variant-video .hero-text').height() + 90;
        if ($('#test-2 .hero-container.variant-video .hero-btn').length > 0) {
            newSize += 130;
        }
        $('#test-2 .hero-container.variant-video').height(newSize);
    }
    if (!($(window).width() > 1024) ) {
        let newSizee = $('#test-1 .hero-container.variant-video .hero-text').height() + 90;
        if ($('#test-1 .hero-container.variant-video .hero-btn').length > 0) {
            newSizee += 130;
        }
        $('#test-1 .hero-container.variant-video').height(newSizee);
    }
});

var videoLanding = document.querySelector(".video-hero-landing");
var playerLanding = new MediaPlayer({
    el: videoLanding,
    plugins: []
});

$('.btn_play_hero').click(function () {
    if(!playerLanding.validatePlay()){
        playerLanding.togglePlay();
        $('.btn_play_hero').attr('disabled', false);
    }
});

$('.btn_pause_hero').click(function () {
    if(playerLanding.validatePlay()){
        playerLanding.togglePlay();
        $('.btn_pause_hero').attr('disabled', false);
    }
});

$('#btn-mute-hero').click(function () {
    if(playerLanding.validateMute()){
        playerLanding.mute();
        $('.volume-icon-hero').removeClass('icon-skvolume-medium');
        $('.volume-icon-hero').addClass('icon-skvolume-mute2');
    }else{
        playerLanding.unMute();
        $('.volume-icon-hero').removeClass('icon-skvolume-mute2');
        $('.volume-icon-hero').addClass('icon-skvolume-medium');
    }
});

var soundLanding = document.querySelector(".video-sound-hero");
soundLanding.oninput = () => {
    let converter = soundLanding.value * 100;
    let size = converter + '% 100%';
    $('.video-sound-hero').css('background-size', size);
    playerLanding.controlVolume(soundLanding.value);
}


// HU 033 - Landing 2. MultiFund. Testimonios con video  
$('#video-testimony-sk').owlCarousel({
    loop:false,
    nav:false,
    items:1
})
    // Poner labels a los dots
$("#video-testimony-sk .owl-dots .owl-dot").each(function(){
    $(this).attr("aria-label","slider "+($(this).index()+1));
});

//Marketplace
$('.card-footer-sk').click( function () { 
    if($(this).attr('id')){
        var selector1Card = '.card-sk.'+$(this).attr('id');
        var selector2Card = '.reverse-card-sk.'+$(this).attr('id');
        $(selector1Card).addClass('active-sk');
        $(selector2Card).addClass('active-sk');
    }
});
$('.reverse-icon-card-sk').click( function () {
    var reverse1Selector = '.card-sk.'+$(this).attr('card-sk');
    var reverse2Selector = '.reverse-card-sk.'+$(this).attr('card-sk');
    $(reverse1Selector).removeClass('active-sk');
    $(reverse2Selector).removeClass('active-sk');
});

// HU 035 Landing 2. Multifund. Simulador explora y fortalece tu capital 
//Seleccion tarjetas 
$('.capital-simulator .capital-cards ul li').click( function () {
    if ($('.capital-simulator .capital-cards ul li').hasClass('active-sk') ) {
        $('.capital-simulator .capital-cards ul li').removeClass('active-sk');
    }
    $(this).addClass('active-sk');
});
// seleccion estrategia
$('.capital-simulator .term-sk input').click( function () {
    if ( $('.capital-simulator .term-sk input').hasClass('active-sk') ) {
        $('.capital-simulator .term-sk input').removeClass('active-sk');
    }
    $(this).addClass('active-sk');
});
//seleccion Tiempo
$('.capital-simulator .time-sk input').click( function () {
    if ( $('.capital-simulator .time-sk input').hasClass('active-sk') ) {
        $('.capital-simulator .time-sk input').removeClass('active-sk');
        $('.capital-simulator .time-sk').removeClass('active-sk');
    }
    if ( $(this).hasClass('variant-sk') ) {
        $('.capital-simulator .time-sk').addClass('active-sk');
    }
    $(this).addClass('active-sk');
});

// HU 041 – Blog - Home del Blog. Presentación de artículos y paginador 
// Mostrar y ocultar categorias
function viewCategoryBlog () {
    if ($('.home-blog-sk .category-sk').hasClass('active-sk')) {
        $('.home-blog-sk .category-sk').removeClass('active-sk');
        $('.home-blog-sk .category-list-sk').removeClass('active-sk');
        $('.home-blog-sk .category-sk button .category-icon').addClass('icon-skArrow-Down-Green');
        $('.home-blog-sk .category-sk button .category-icon').removeClass('icon-skArrow-Up');
    } else {
        $('.home-blog-sk .category-sk').addClass('active-sk');
        $('.home-blog-sk .category-list-sk').addClass('active-sk');
        $('.home-blog-sk .category-sk button .category-icon').removeClass('icon-skArrow-Down-Green');
        $('.home-blog-sk .category-sk button .category-icon').addClass('icon-skArrow-Up');
    }
}
//Seleccionar categoria 
$('.home-blog-sk .category-list-sk ul li').click( function() {
    $('.home-blog-sk .category-list-sk ul li').removeClass('active-sk');
    $(this).addClass('active-sk');
    $('.home-blog-sk .category-sk button p').text($(this).text());
});
$('.home-blog-sk .category-list-sk ul li').keypress(function(e) {
    if(e.which == 13) {
        $('.home-blog-sk .category-list-sk ul li').removeClass('active-sk');
        $(this).addClass('active-sk');
        $('.home-blog-sk .category-sk button p').text($(this).text());
    }
});
//Seleccionar orden
$('.home-blog-sk .sort-by-sk ul li').click(function () {
    $('.home-blog-sk .sort-by-sk ul li').removeClass('active-sk');
    $(this).addClass('active-sk');
    $('.home-blog-sk .sort-by-sk ul li span').removeClass('icon-skArrow-Up');
    $('.home-blog-sk .sort-by-sk ul li.active-sk span').addClass('icon-skArrow-Up');
    $('.home-blog-sk .sort-by-sk button p').text($(this).text());
    $('.home-blog-sk .sort-by-sk .dropdown-toggle').dropdown('toggle');
});
$('.home-blog-sk .sort-by-sk ul li').keypress(function(e) {
    if(e.which == 13) {
        $('.home-blog-sk .sort-by-sk ul li').removeClass('active-sk');
        $(this).addClass('active-sk');
        $('.home-blog-sk .sort-by-sk ul li span').removeClass('icon-skArrow-Up');
        $('.home-blog-sk .sort-by-sk ul li.active-sk span').addClass('icon-skArrow-Up');
        $('.home-blog-sk .sort-by-sk button p').text($(this).text());
        $('.home-blog-sk .sort-by-sk .dropdown-toggle').dropdown('toggle');
    }
});
//Inicializacion DataTable, textos y iconos paginador 
$(document).ready(function() {
    $('#blog-posts-sk').DataTable({
        "lengthChange": false,
        pageLength: 6,
        "searching": false,
        language: {
            paginate: {
                previous: '<span class="icon-skArrow-Left"></span><span class="sr-only">Atras</span>',
                next:     '<span class="icon-skArrow-Right"></span><span class="sr-only">Adelante</span>',
            },
            aria: {
                paginate: {
                    previous: 'Atras',
                    next:     'Adelante',
                }
            },
            "zeroRecords": "No se encontraron resultados",
            "emptyTable": "Ningún dato disponible en esta tabla",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "lengthMenu": "Mostrar _MENU_ registros",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            
        }
    });  
});
//Compartir en redes
function generatorLinksShare () {
    var url = window.location.href;
	var title = document.title;
	url = encodeURIComponent(url);
	title = encodeURIComponent(title);
    user = 'SkandiaCol';
    $('.shared.fb').attr('href', 'https://www.facebook.com/sharer/sharer.php?u='+url+'&t='+title);
    $('.shared.tt').attr('href', 'https://twitter.com/intent/tweet?text='+title+'&url='+url+'&via='+user);
    $('.shared.ln').attr('href', 'http://www.linkedin.com/shareArticle?url='+url);
}
function socialPosition () {
    var initialPosition = $('.to-share-blog-sk .to-share-container').offset().top;
    var finalPosition = $('.blog-detail-sk .blog-detail-container').offset().top;
    finalPosition = finalPosition + $('.blog-detail-sk .blog-detail-container').height() - 20;
    $(document).on("scroll", function(){
        if ($(window).scrollTop() >= (initialPosition - 200) && !($('.to-share-blog-sk .to-share-container').hasClass('fixed-sk')) ) {
            $('.to-share-blog-sk .to-share-container').addClass('fixed-sk');
        }
        if ($(window).scrollTop() < (initialPosition - 200) && ($('.to-share-blog-sk .to-share-container').hasClass('fixed-sk'))) {
            $('.to-share-blog-sk .to-share-container').removeClass('fixed-sk');
        }
        if ((($(window).scrollTop() >= finalPosition)) && ($('.to-share-blog-sk .to-share-container').hasClass('fixed-sk')) ) {
            $('.to-share-blog-sk .to-share-container').removeClass('fixed-sk');
        }
    });    
}

$(document).ready(function() {
    generatorLinksShare();
    socialPosition();
});

//FORMATO FECHA BLOGS
function formatoFechaBlogs () {
    var fechaActual = $('.fecha-blog-sk').text();
    var auxFec = 0;
    for (let i = 0; i < fechaActual.length; i++) {
        if(fechaActual[i] == '/') {
            auxFec++;
            if(auxFec == 2) {
                auxFec = i;
                break;
            } 
        }
    }
    $('.fecha-blog-sk').text('20'+fechaActual[auxFec+1]+fechaActual[auxFec+2]);
}
//Formato Lo lees en...
function formatoLoLeesEn () {
    var loLeesActual = 'Lo lees en '+$('.loLees-blog-sk').text();
    $('.loLees-blog-sk').text(loLeesActual);
}
$(document).ready(function() {
    formatoFechaBlogs();
    formatoLoLeesEn();
});

//Calcular tiempo de lectura
function calReadingTime (selectorDiv, selectorP) {
    var selectorText = $(selectorDiv).html();
    var sin_tags = selectorText.replace(/(<([^>]+)>)/ig,"");
    sin_tags =  sin_tags.replace(/[\n\r]+/g, '');
    sin_tags = sin_tags.replace(/\s{2,10}/g, ' ');
    sin_tags = $.trim(sin_tags);
    var wordCount = sin_tags.trim().replace(/\s+/gi, ' ').split(' ').length;
    var readingTime = Math.trunc(wordCount / 250);
    if (readingTime == 0) {
        readingTime = 1;
    }
    $(selectorDiv).remove();
    $(selectorP).text('Lo lees en '+readingTime+" minutos");
}
$(document).ready(function() {
    calReadingTime('.articles-related-sk .blog-item-sk.blogCount-0 div.reading-time-sk', '.articles-related-sk .blog-item-sk.blogCount-0 p.reading-time-sk');
    calReadingTime('.articles-related-sk .blog-item-sk.blogCount-1 div.reading-time-sk', '.articles-related-sk .blog-item-sk.blogCount-1 p.reading-time-sk');
    calReadingTime('.articles-related-sk .blog-item-sk.blogCount-2 div.reading-time-sk', '.articles-related-sk .blog-item-sk.blogCount-2 p.reading-time-sk');
});

//Formato Categorias interna del blog
function categoryFormat () {
    var categoriasDelBlog = $('#test-blog .hero-info-sk h2').text();
    var newCategoryBlog = '';
    for (let i = 0; i < categoriasDelBlog.length; i++) {
        if (categoriasDelBlog[i] == ',') {
            newCategoryBlog+= categoriasDelBlog[i]+' ';
        }else {
            newCategoryBlog+= categoriasDelBlog[i];
        }
    }
    $('#test-blog .hero-info-sk h2').text(newCategoryBlog);
}
$(document).ready(function() {
    categoryFormat();
});

//HU 058 T&C. Banner Términos y condiciones ajuste tamaño mobile
function ajusteMobileBannerTyC () {
    if (!resolutionValidator (1024)) {
        if ($('.banner-tyc-sk .tyc-text').height() >= 56 ) {
            let newSize = $('.banner-tyc-sk .tyc-text').height() + 82;
            $('.banner-tyc-sk').height(newSize);
        }   
    }
}
$(document).ready(function() {
    ajusteMobileBannerTyC();
});

// HU 060 T&C. Botón alineado a la derecha y funcionalidad en flecha
$('#up-page-sk'). click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
});

//Footer
    $('.drop-footer').click(function () {
        let id = $(this).attr('id');
        let selector = '.'+id;
        if(!$(selector).hasClass('view')){
            $('.drop-container').removeClass('view');
            $('.drop-footer').removeClass('view');
            $('.drop-footer span').addClass('icon-skArrow-Down');
            $('.drop-footer span').removeClass('icon-skArrow-Up');
            $(selector).addClass('view');
            $(this).addClass('view');
            $('span', this).removeClass('icon-skArrow-Down');
            $('span', this).addClass('icon-skArrow-Up');
        }else {
            $(selector).removeClass('view');
            $(this).removeClass('view');
            $('span', this).addClass('icon-skArrow-Down');
            $('span', this).removeClass('icon-skArrow-Up');
        }
    });
//Script especial para las anclas
    $('.hero-ancla a.hero-btn').click(function(e){
        // Evitamos que se haga el scroll
        e.preventDefault();
        // Capturamos el ancla
        var ancla = $(this).attr('href');
        console.log(ancla);
        // Le quitamos el numeral # para solo quedarnos con el nombre de la sección
        ancla = ancla.substring(1);
        console.log(ancla);
        // Obtenemos la posición de la sección
        var position = $('#'+ancla).offset();
        console.log(position);
        // Hacemos el efecto scroll y le restamos algunos pixeles, en este caso 180
        $('html, body').animate({scrollTop: (position.top - 114)}, 0);
    });
//script z index form-recaptch
$(document).ready(function() {
    $("#form-recaptch").css({'z-index':'1'});
});
//CORRECCIONES HERRAMIENTAS DE ACCECINILIDAD HEADER
$(document).ready(function() {
    $('.nav-link.dropdown-toggle').click( function () {
        if ($('#senna_surface1').hasClass('acsb-keynav')) {
            var actualItem = $(this).text().trim();
            setTimeout(function () {
                $('.collapse.navbar-collapse').css('position', 'static');
            }, 25);
        }
    });
    $('.nav-link.dropdown-toggle').focus( function () {
        if ($('#senna_surface1').hasClass('acsb-keynav')) {
            var actualItem = $(this).text().trim();
            setTimeout(function () {
                $('.collapse.navbar-collapse').css('position', 'static');
            }, 25);            
        }
    });
    $('.dropdown-toggle').click( function () {
        if ($('#senna_surface1').hasClass('acsb-keynav')) {
            var actualItem = $(this).text().trim();
            setTimeout(function () {
                $('.dropdown-menu a').each(function() {
                    if ($(this).text().trim() == actualItem) {                    
                        $(this).remove();
                    }
                });
            }, 25);            
        }
    });
    $('.dropdown-toggle').focus( function () {
        if ($('#senna_surface1').hasClass('acsb-keynav')) {
            var actualItem = $(this).text().trim();
            setTimeout(function () {
                $('.dropdown-menu a').each(function() {
                    if ($(this).text().trim() == actualItem) {                    
                        $(this).remove();
                    }
                });
            }, 25);            
        }
    });
});

//NAVEGACION POR TABS FORMULARIO 
function navegationTabsCertificates () {
    $('.certificates-sk .form-group .form-check .form-check-label').attr("data-acsb-force-unnavigable", false);
    $('.certificates-sk .form-group .form-check .form-check-label').attr("tabindex", 0);
    $('.certificates-sk .form-group .form-check .form-check-label').keypress(function(e) {
        if(e.which == 13) {
            let idInputCheck = '#'+$(this).attr("for");
            $(idInputCheck).prop("checked",true);
        }
    });    
}
navegationTabsCertificates();
$('.certificates-sk .close-sk').focus(function () {
    navegationTabsCertificates();
});

// HU 061 ¿Quiénes somos? - Skandia Colombia. Componente de texto y listas desplegables 
$('.banner-dropdowns-sk .dropdown-link').click(function (e) {
    e.preventDefault();
    let idDrop = $(this).attr('id');
    let dropSelector = '.banner-dropdowns-sk .dropdown-content.'+idDrop;
    let iconDrop = '#'+idDrop+' .drop-icon';
    if (!$(dropSelector).hasClass('view-sk')) {
        $('.banner-dropdowns-sk .dropdown-content, .banner-dropdowns-sk .dropdown-link .drop-icon').removeClass('view-sk');
        $(iconDrop).addClass('view-sk')
        $(dropSelector).addClass('view-sk');
    } else {
        $(iconDrop).removeClass('view-sk')
        $(dropSelector).removeClass('view-sk');
    }
});

$('.banner-dropdowns-sk .dropdown-link').keyup(function(e) {
    if(e.which == 9) {
        let idDrop = $(this).attr('id');
        let dropSelector = '.banner-dropdowns-sk .dropdown-content.'+idDrop;
        let iconDrop = '#'+idDrop+' .drop-icon';
        if (!$(dropSelector).hasClass('view-sk')) {
            $('.banner-dropdowns-sk .dropdown-content, .banner-dropdowns-sk .dropdown-link .drop-icon').removeClass('view-sk');
            $(iconDrop).addClass('view-sk')
            $(dropSelector).addClass('view-sk');
        } else {
            $(iconDrop).removeClass('view-sk')
            $(dropSelector).removeClass('view-sk');
        }
    }
});

//Script especial para las anclas - Ancla HU - 67
$('.double-banner-sk .double-anchor a').click(function(e){
    e.preventDefault();
    let anchorD = $(this).attr('href');
    anchorD = anchorD.substring(1);
    let positionD = $('#'+anchorD).offset();
    $('html, body').animate({scrollTop: (positionD.top - 114)}, 0);
});

//<!-- HU 69 Doble asesoría. Banner Solicite una doble asesoría y estructura embebida Calendly -->
//let auxTouchCount = 0; 
$(window).blur(function (){
    //auxTouchCount++;
    if (!$('#calendly-sk.inactive-sk').is(':focus') && !($('.calendly-sk').hasClass('active-sk')) && !($('.calendly-sk').hasClass('active-mobile-sk'))) {
        //if (auxTouchCount > 1) {
            $('.calendly-sk').addClass('active-sk');            
        //}
    }
});

//HU 70 Doble asesoría. Componente de preguntas
$('.questions-banner-sk .questions-link').click(function (e) {
    e.preventDefault();
    let idDrop = $(this).attr('id');
    let dropSelector = '.questions-banner-sk .questions-content.'+idDrop;
    let iconDrop = '#'+idDrop+' .drop-icon';
    if (!$(dropSelector).hasClass('view-sk')) {
        $('.questions-banner-sk .questions-content, .questions-banner-sk .questions-link .drop-icon').removeClass('view-sk');
        $(iconDrop).addClass('view-sk')
        $(dropSelector).addClass('view-sk');
    } else {
        $(iconDrop).removeClass('view-sk')
        $(dropSelector).removeClass('view-sk');
    }
    if( !($(window).width() > 1024) ) {
        if (!$(this).find('p').hasClass('active-sk')){
            $(this).find('p').addClass('active-sk');
        }else {
            $(this).find('p').removeClass('active-sk');
        }
    }
});

$('.questions-banner-sk .questions-link').keyup(function(e) {
    if(e.which == 9) {
        let idDrop = $(this).attr('id');
        let dropSelector = '.questions-banner-sk .questions-content.'+idDrop;
        let iconDrop = '#'+idDrop+' .drop-icon';
        if (!$(dropSelector).hasClass('view-sk')) {
            $('.questions-banner-sk .questions-content, .questions-banner-sk .questions-link .drop-icon').removeClass('view-sk');
            $(iconDrop).addClass('view-sk')
            $(dropSelector).addClass('view-sk');
        } else {
            $(iconDrop).removeClass('view-sk')
            $(dropSelector).removeClass('view-sk');
        }
    }
});

//HU 071. Contáctenos y PQR. Banner para selección de formulario
$('.info-form-sk .info-form-select-sk .info-form-container label').click(function () {
    $('.info-form-sk .info-form-response div').removeClass('active-sk');
    $('.pqr-form-sk .pqr-form-container form').removeClass('active-sk');
    $('.pqr-form-sk .pqr-form-container form.multi-form-sk').attr('class','multi-form-sk');
    if($(this).find('input').attr('id') != 'pyq-option-0') {
        $('.pqr-form-sk .pqr-form-container form.multi-form-sk').addClass($(this).find('input').attr('id')+' active-sk');
    }else {
        $('.pqr-form-sk .pqr-form-container form.pyq-option-0').addClass('active-sk');
    }
    let formSelector = '.info-form-sk .info-form-response div.'+$(this).find('input').attr('id');
    $(formSelector).addClass('active-sk');
});
//FORMULARIOS PYQ
    //Escuchar tipo de usuario
$(document).on('change', '#pyq-type-user', function(event) {
    $(this).parents('fieldset').find('.add-document-sk .col-4 .form-control').removeClass('active-sk');
    $(this).parents('fieldset').find('.reason-social-sk').removeClass('active-sk');
    $(this).parents('fieldset').find('.anonimo-sk').removeClass('active-sk');
    $(this).parents('fieldset').find('.form-group').removeClass('inactive-sk');
    $(this).parents('fieldset').find('.add-document-sk .help-block').remove(); /*para agregar */
    if ($(this).find('option:selected').text() == 'Persona Natural') {
        $(this).parents('fieldset').find('.type-doc-nat-sk').addClass('active-sk');
    }
    if ($(this).find('option:selected').text() == 'Persona Jurídica') {
        $(this).parents('fieldset').find('.type-doc-jur-sk').addClass('active-sk');
        $(this).parents('fieldset').find('.reason-social-sk').addClass('active-sk');
    }
    $(this).parents('fieldset').find('.add-document-sk').addClass('active-sk');
    if ($(this).find('option:selected').text() == 'Anónimo') {
        $(this).parents('fieldset').find('.form-group').addClass('inactive-sk');
        $(this).parents('.form-group').removeClass('inactive-sk');
        $(this).parents('fieldset').find('.sent-renspone-sk').removeClass('inactive-sk');
        $(this).parents('fieldset').find('.anonimo-sk').addClass('active-sk');
    }
});
    //Cerrar pop up anonimo 
    $('.pqr-form-sk fieldset .anonimo-sk button').click(function(){
        $(this).parents('.anonimo-sk').removeClass('active-sk');
    });
    //Aceptar tratamiento de datos
    function acceptDataProtection () {
        $('.pqr-form-sk .treatment-sk .form-check-label .form-check-input').prop("checked",true);
    }
    //Escuchar Checks
    $('.pqr-form-sk .form-check .form-check-label .form-check-input').change(function(e) {
        $(this).parents('.form-check-label').toggleClass('check-sk');
        $(this).parents('.form-check').find('.form-group').toggleClass('active-sk');
        if($(this).parents('.form-check').hasClass('treatment-sk')) {
            $(this).prop("checked",false);
            $('#data-protection').modal('show');
        }
    });
    //navegacion por Tab CHEACKS
    $('.pqr-form-sk .form-check .form-check-label .form-check-input').keyup(function(e){
        if (e.which == 9) {
            $(this).parents('.form-check-label').css( "border", "solid 2px black");
        }
    });
    $('.pqr-form-sk .form-check .form-check-label .form-check-input').keydown(function(e){
        if (e.which == 9) {
            $(this).parents('.form-check-label').css( "border", "none");
        }
    });
    $('.pqr-form-sk .form-check .form-check-label .form-check-input').keypress(function(e) {
        e.preventDefault();
        if(e.which == 13) {
            if ($(this).prop("checked") == true) {
                $(this).prop("checked",false);
            }else {
                $(this).prop("checked",true);
            }
        }
    });    
    //Escuchar tratamiento de datos
    $('.pqr-form-sk .treatment-sk .form-check-label p a').click( function (e) {
        e.preventDefault();
        $('#data-protection').modal('show');
    });
    //Adjuntar archivos
    var loadFilePQR = [];
    function printFilesPQR () {
        $('.pqr-form-sk .form-group .uploaded-files-sk .file-sk').remove();
        let nameFileSk;
        let sizeFileSk;
        let textHTMLFile;
        for (let i = 0; i < loadFilePQR.length; i++) {
            nameFileSk = loadFilePQR[i].name;
            sizeFileSk = (loadFilePQR[i].size / 1000).toFixed(1);
            textHTMLFile = `
            <div class="file-sk">
                <p>${nameFileSk}</p>
                <span>${sizeFileSk} KB</span>
                <button onclick="deleteFileSk(${i});" aria-label="Borrar archivo ${nameFileSk}"  type="button"><img src="./img/icon/trash.svg" alt="Borrar"></button>
            </div>`;            
            $('.pqr-form-sk .form-group .uploaded-files-sk').append(textHTMLFile);
        }
    }
    function deleteFileSk (index) {
        loadFilePQR.splice(index, 1);
        printFilesPQR ();
    }
    $('.pqr-form-sk .form-group .file-container-sk .load-file-sk').change( function() {
        loadFilePQR.push($(this)[0].files[0]);
        printFilesPQR ();
    });
    $('.pqr-form-sk .form-group .file-container-sk .load-file-sk').focusin (function(){
        $(this).parents('.file-container-sk').addClass('focus-sk');
    });
    $('.pqr-form-sk .form-group .file-container-sk .load-file-sk').focusout (function(){
        $(this).parents('.file-container-sk').removeClass('focus-sk');
    });
    //PASO 1 Y PASO 2
    $('.pqr-form-sk .pqr-form-container form .next-sk').click( function () {
        $(this).toggleClass('active-sk');
        $(this).parents('form').find('.sent-sk').toggleClass('active-sk');
        $(this).parents('form').find('.pyq-form-one').toggleClass('active-sk');
        $(this).parents('form').find('.pyq-form-two').toggleClass('active-sk');
    });
    $('.pqr-form-sk .pqr-form-container form .pyq-form-one .pyq-form-header a').click( function(e) {
        e.preventDefault();
    });
    $('.pqr-form-sk .pqr-form-container form .pyq-form-two .pyq-form-header a').click( function(e) {
        e.preventDefault();
        $(this).parents('form').find('.next-sk').toggleClass('active-sk');
        $(this).parents('form').find('.sent-sk').toggleClass('active-sk');
        $(this).parents('form').find('.pyq-form-one').toggleClass('active-sk');
        $(this).parents('form').find('.pyq-form-two').toggleClass('active-sk');
    });

   /*para agregar */

    $('.skandia-V .pqr-form-sk .pqr-form-container .multi-form-sk .pyq-form-one ').change( function () {
        $('.skandia-V .pqr-form-sk .pqr-form-container .multi-form-sk .pyq-form-one .sent-renspone-sk label').hasClass("check-sk");
        $(this).find('.pyq-next').addClass("active-sk")
        
    });


        
/*para agregar */


//HU 073. Contáctenos y PQR. Consulta el estado de tus casos 
    //Escuchar checks
    
    function initFormPQR () {
        //Escuchar checks
        $('.state-pqr-sk .state-form-sk .form-check .form-check-input').change(function(){
            $('.state-pqr-sk .state-form-sk .form-check .form-group .form-control').attr("disabled",true);
            $(this).parents('.form-check').find('.form-group .form-control').attr("disabled",false);
            $('.state-pqr-sk .state-form-sk .form-check .form-check-label ').removeClass("active-label-sk");/* para agregar */
           $(this).parents('.form-check').find('.form-check-label').addClass("active-label-sk"); /*para agregar */
          
            
        });


        //Checks navegacion por tabs
        $('.state-pqr-sk .state-form-sk .form-check .form-check-label').attr("data-acsb-force-unnavigable", false);
        $('.state-pqr-sk .state-form-sk .form-check .form-check-label').attr("tabindex", 0);
        $('.state-pqr-sk .state-form-sk .form-check .form-check-label').keypress(function(e) {
            if(e.which == 13) {
                $('#'+$(this).attr("for")).trigger('click');
            }
        });    
    }
    //Actualizar lista de formularios
    function updateForms () {
        $('.state-pqr-sk .state-form-sk fieldset').each(function (index){
            if (index != 0) {
                //Ordenar id y labels
                $(this).find('legend').text(`Solicitud Nº.${index+1}`);
                $(this).find('button').attr('onclick', `removeForm(${index})`);
                $(this).find('.form-check-input').each(function(){
                    if($(this).attr('id').substring(0, 15) == 'type-entry-sk1-') {
                        $(this).attr('id', 'type-entry-sk1-'+index);
                        
                        
                    }
                    if($(this).attr('id').substring(0, 15) == 'type-entry-sk2-') {
                        $(this).attr('id', 'type-entry-sk2-'+index);
                        
                    }
                });
                $(this).find('.form-check-label').each(function(){
                    $(this).attr('for', $(this).parents('.form-check').find('.form-check-input').attr('id'));
                });
                $(this).find('.form-control').each(function(){
                    if($(this).attr('id').substring(0, 12) == 'case-num-sk-') {
                        $(this).attr('id', 'case-num-sk-'+index);
                    }
                    if($(this).attr('id').substring(0, 20) == 'state-type-document-') {
                        $(this).attr('id', 'state-type-document-'+index);
                    }
                    if($(this).attr('id').substring(0, 18) == 'state-documet-num-') {
                        $(this).attr('id', 'state-documet-num-'+index);
                    }
                });                
            }
        });
    }
     //Crear nuevo formulario
    $('.state-pqr-sk .new-state').click(function(){
        let formsIndex = $(this).parents('.state-form-sk').find('fieldset').length;
        let textHtml = `
            <fieldset>
                <div class="form-header">
                    <legend>Solicitud Nº.${formsIndex+1}</legend>
                    <button type="button" class="close" aria-label="Close" onclick="removeForm(${formsIndex})">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Tipo de entrada" id="type-entry-sk1-${formsIndex}" value="option1">
                    <label class="form-check-label" for="type-entry-sk1-${formsIndex}" tabindex="0">
                        Número de radicado*
                    </label>
                    <div class="form-group">
                        <input aria-label="Ingresa tu número de caso" type="number" class="form-control" id="case-num-sk-${formsIndex}" placeholder="Ingresa tu número de caso" disabled>
                    </div>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Tipo de entrada" id="type-entry-sk2-${formsIndex}" value="option2">
                    <label class="form-check-label" for="type-entry-sk2-${formsIndex}" tabindex="0">
                        Número de documento*
                    </label>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-4">
                                <select class="form-control" id="state-type-document-${formsIndex}" aria-label="Tipo de documento" disabled>
                                    <option disabled selected>Tipo</option>
                                    <option>Cédula de ciudadanía</option>
                                    <option>Cédula de extranjería</option>
                                    <option>Pasaporte</option>
                                    <option>Registro civil</option>
                                    <option>Tarjeta de identidad</option>
                                    <option>Nit persona natural</option>
                                    <option>Permiso protección temporal</option>
                                    <option>NIT (Número de Identificación Tributaria)</option>
                                </select>
                            </div>
                            <div class="col-8">
                                <input type="number" class="form-control" id="state-documet-num-${formsIndex}" placeholder="No. De documento" aria-label="Numero de documento" disabled>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        `;
        $(this).parents('.state-form-sk').find('fieldset').last().after(textHtml);
        $(this).parents('.state-form-sk').find('fieldset').last().find('button').focus();
        initFormPQR();
    });
    //eliminar formulario
    function removeForm(index){
        $('.state-pqr-sk .state-form-sk fieldset').each(function(i){
            if(index == i) {
                $(this).remove();
            }
        });
        updateForms();
        initFormPQR();
    }
    $(document).ready(function(){
        initFormPQR();
    });
    //drops de respuesta
$('.state-pqr-sk .response-link').click(function (e) {
    e.preventDefault();
    $(this).parents('.response-item').find('.'+$(this).attr('id')).toggleClass('view-sk');
    $(this).find('.drop-icon').toggleClass('view-sk');
});
$('.state-pqr-sk .response-link').keyup(function(e) {
    if(e.which == 9) {
        $(this).parents('.response-item').find('.'+$(this).attr('id')).addClass('view-sk');
        $(this).find('.drop-icon').addClass('view-sk');
    }
});
//Modulo de config
$(document).ready(function() {
    $('#table-modul').DataTable({
        "lengthChange": false,
        pageLength: 6,
        "searching": false,
        "columns": [
            { "width": "22.5%" },
            { "width": "22.5%" },
            { "width": "22.5%" },
            { "width": "22.5%" },
            { "width": "10%" }
        ],
        language: {
            paginate: {
                previous: 'Atras',
                next:     'Adelante',
            },
            aria: {
                paginate: {
                    previous: 'Atras',
                    next:     'Adelante',
                }
            },
            "zeroRecords": "No se encontraron resultados",
            "emptyTable": "Ningún dato disponible en esta tabla",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "lengthMenu": "Mostrar _MENU_ registros",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
        }
    });
});





    
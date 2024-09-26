$(window).load(function() {
    "use strict";
    $(".loader").delay(500).fadeOut();
    $("#mask").delay(1000).fadeOut("slow");
});
$(window).load(function() {
    "use strict";
    $('.flexslider').flexslider({
        animation: "fade",
        start: function(slider) {
            $('.np-controls a.next').click(function(event) {
                event.preventDefault();
                slider.flexAnimate(slider.getTarget("next"));
            });
            $('.np-controls a.previous').click(function(event) {
                event.preventDefault();
                slider.flexAnimate(slider.getTarget("previous"));
            });
        }
    });
});
jQuery(document).ready(function($) {
    "use strict";
    $('#portfolio').mixitup({
        targetSelector: '.item',
        transitionSpeed: 450
    });
});
jQuery(document).ready(function($) {
    "use strict";
    $('.nivo-lbox').nivoLightbox({
        effect: 'fade'
    });
});
jQuery(document).ready(function($) {
    "use strict";
    $('.skills-info').appear(function() {
        $('.skill1').css('width', '71%');
        $('.skill2').css('width', '85%');
        $('.skill3').css('width', '76%');
        $('.skill4').css('width', '53%');
        $('.skill5').css('width', '69%');
    }, {
        accX: 0,
        accY: -150
    });
});
$(function() {
    "use strict";
    var map = new GMaps({
        el: "#map",
        lat: 55.7531543,
        lng: 37.6292049,
        zoom: 15,
        zoomControl: true,
        zoomControlOpt: {
            style: "BIG",
            position: "TOP_LEFT"
        },
        panControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false
    });
    var styles = [{
        stylers: [{
            hue: "#00ffe6"
        }, {
            saturation: -100
        }]
    }];
    map.addStyle({
        styledMapName: "Styled Map",
        styles: styles,
        mapTypeId: "map_style"
    });
    map.setStyle("map_style");
    map.addMarker({
        lat: 55.7531543,
        lng: 37.6292049,
        icon: "static/pretto/images/marker.png"
    });
});
$(function() {
    $(".flexslider section").niceScroll({
        cursorcolor: "#47555E",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorwidth: "10px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        zindex: "99999",
        scrollspeed: 60
    });
});
$(document).ready(function () {


    // fixed navbar
    $(window).scroll(function()
    {
        var scrollposition=($(window).scrollTop());
        if(scrollposition>255)
        {
            $("#header").addClass('fixed');
        }else{
            $("#header").removeClass('fixed');
        }

    })
    $(".backtotop").on('click',function(){
        $(window).scrollTop(0)
    })

    //show navbar js
    $("#header .bar").on('click', function () {
        $(".navigation_bg").animate({
            width: "100%"
        });
        $(".handbar").animate({
            right: "0px",
        });
    });
    $("#header .close_handbar").on('click', function () {
        $(".navigation_bg").animate({
            width: "0%"
        });
        $(".handbar").animate({
            right: "-400px",
        });
    });

    // handbar js
    $(".handbar_navbar ul li i.home").on('click', function () {
        $(".handbar_navbar ul li ul.home").slideToggle();
    })
    $(".handbar_navbar ul li i.Shop").on('click', function () {
        $(".handbar_navbar ul li ul.Shop").slideToggle();
    })
    $(".handbar_navbar ul li i.Features").on('click', function () {
        $(".handbar_navbar ul li ul.Features").slideToggle();
    })
    $(".handbar_navbar ul li ul li i.Layouts").on('click', function () {
        $(".handbar_navbar ul li ul li ul.Layouts").slideToggle();
    })
    $(".handbar_navbar ul li ul li i.Formats").on('click', function () {
        $(".handbar_navbar ul li ul li ul.Formats").slideToggle();
    })
    $(".handbar_navbar ul li ul li i.Archive").on('click', function () {
        $(".handbar_navbar ul li ul li ul.Archive").slideToggle();
    })

    // popular_recent_part_selector  js
    $(".popular_recent_part_selector .popular").on('click', function () {
        $(".popular_recent_part_selector .popular").addClass('selected_part');
        $(".popular_recent_part_selector .recent").removeClass('selected_part');
        $(".popular_recent_part .popular_part").show();
        $(".popular_recent_part .recent_part").hide();
    })
    $(".popular_recent_part_selector .recent").on('click', function () {
        $(".popular_recent_part_selector .recent").addClass('selected_part');
        $(".popular_recent_part_selector .popular").removeClass('selected_part');
        $(".popular_recent_part .recent_part").show();
        $(".popular_recent_part .popular_part").hide();
    })

    // slick slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,

                }
            }
        ]
    });

    // celebration slider
    $('.cel_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

        responsive: [
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,

                }
            }
            ,
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,

                }
            }
        ]
    });

    //   search js
    $("#header .search_handbar ul li.search").on('click', function () {
        $(".search_show").addClass("show")
    });
    $("#header .search_show .close_handbar").on('click', function () {
        $(".search_show").removeClass("show")
    });


})
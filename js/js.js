$(document).ready(function(){
	var hitEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'; //for getting the correct event
	//for sticky nav
    $(window).load(function(){
      $("#nav").sticky({ topSpacing: 0 });
    });
    //for dropdown
    (function() {
        [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {    
            new SelectFx(el);
        } );
    })();	
    //animates back to top
    $(function() {
        var header = $(".backtotop");
        var $height = $('header').height();

        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= $height) {
                header.removeClass('hideit').addClass("showit");
            } else {
                header.removeClass("showit").addClass('hideit');
            }
        });
    });
    //mobile nav
    $('.navmenu').on(hitEvent, function() {
        $('.movilenav').toggleClass('mobilenavshow');
        $('.container').toggleClass('containerhide');
        $('.navmenu').toggleClass('navmenuclick');
    }); 
    $('.navmenuclose').on(hitEvent, function(){
        $('.movilenav').removeClass('mobilenavshow');
        $('.container').removeClass('containerhide');
        $('.navmenu').removeClass('navmenuclick');
    }); 
    //closes mobile nav on escape key hit 
    $(document).keyup(function(e) {     
        if(e.keyCode== 27) {
            $('.navmenuclose').click();  
        } 
    });
    //for inputs on contact form  
    $('.input.one').focusout(function(){
        var text_val = $(this).val();
        if(text_val == '') {
            $('.label.one').removeClass('has-value');
        }else {
            $('.label.one').addClass('has-value');
        }
    });
    $('.input.two').focusout(function(){
        var text_val = $(this).val();
        if(text_val == '') {
            $('.label.two').removeClass('has-value');
        }else {
            $('.label.two').addClass('has-value');
        }
    });
    $('.input.three').focusout(function(){
        var text_val = $(this).val();
        if(text_val == '') {
            $('.label.three').removeClass('has-value');
        }else {
            $('.label.three').addClass('has-value');
        }
    });
    
//sets animations on pageload
    setTimeout(function(){
        $('nav.nav').addClass('animated fadeInDownCustom')
    }, 1);
    setTimeout(function(){
        $('header h1').addClass('animated fadeInCustom')
    }, 800);
    setTimeout(function(){
        $('header h2').addClass('animated fadeInDownCustom')
    }, 1100);
    setTimeout(function(){
        $('.mainbutton').addClass('animated fadeInDownCustom')
    }, 1100);
    setTimeout(function(){
        $('.movedown').addClass('animated fadeInCustom')
    }, 1800);
    //animations on scroll
    var appear = $(window).height() - 50;
    
    $(window).scroll(function() {
        $('h2.sub').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeInUp animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeInUp animated");
                $(this).addClass("preanimate");
            }
        });
        $('hr').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeIn animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeIn animated");
                $(this).addClass("preanimate");
            }
        }); 
        $('p.sub').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeInDown animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeInDown animated");
                $(this).addClass("preanimate");
            }
        });  
        $('.contain').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeInUp animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeInUp animated");
                $(this).addClass("preanimate");
            }
        }); 
        $('.left img').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeInLeft animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeInLeft animated");
                $(this).addClass("preanimate");
            }
        }); 
        $('.right img').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeInRight animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeInRight animated");
                $(this).addClass("preanimate");
            }
        });  
        $('.featone .right').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeIn animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeIn animated");
                $(this).addClass("preanimate");
            }
        });  
        $('.feattwo .left').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeIn animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeIn animated");
                $(this).addClass("preanimate");
            }
        });    
        $('.featthree .right').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeIn animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeIn animated");
                $(this).addClass("preanimate");
            }
        }); 
        $('.service .left').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeInLeft animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeInLeft animated");
                $(this).addClass("preanimate");
            }
        }); 
        $('.service .center').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeIn animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeIn animated");
                $(this).addClass("preanimate");
            }
        });
        $('.service .right').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeInRight animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeInRight animated");
                $(this).addClass("preanimate");
            }
        });
        $('.servicelist .list').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeInUp animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeInUp animated");
                $(this).addClass("preanimate");
            }
        });
        $('.moveitplease').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeIn animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeIn animated");
                $(this).addClass("preanimate");
            }
        }); 
        $('.tryitcontent').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeInUp animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeInUp animated");
                $(this).addClass("preanimate");
            }
        });
        $('.contactcontent').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow+appear) {
                $(this).addClass("fadeIn animated");
                $(this).removeClass("preanimate");
            } else {
                $(this).removeClass("fadeIn animated");
                $(this).addClass("preanimate");
            }
        });           
    });           
});

jQuery(document).ready(function ($) {

    //initialise Stellar.js
    $(window).stellar();

    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {

        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');

        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });

    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class 
    //from navigation link slide 2 and adds it to navigation link slide 1. 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() === 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - 55
        }, 2000, 'easeInOutQuint');
    }



    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


});

// makes the active class work
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.slide.useit').each(function(i) {
            if ($(this).position().top <= windscroll + 60) {
                $('nav li.addit.active').removeClass('active');
                $('nav li.addit').eq(i).addClass('active');
            }
        });
    } else {
        $('nav li.addit.active').removeClass('active');
        $('nav li.addit:first').addClass('active');
    }
}).scroll();
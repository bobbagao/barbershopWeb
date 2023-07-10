$(function() {
    String.prototype.decodeHTML = function() {
        return $("<div>", {html: "" + this}).html();
    };
    togglelink = function(li){
        $('.onpage').each(function() {
            $(this).removeClass("onpage");
        });
        li.toggleClass('onpage');
    }
    
    init = function() {
        togglelink($("#index"));
    }
    
    fadeLoad = function(container, contentLoc){
        container.fadeOut('slow',function(){
            container.load(contentLoc, function(){
                container.fadeIn('slow');
            });
        });
    }
    init();

    var $content = $("#content"); //Div containing content


    //********AJAX HISTORY PRESERVER*********
    $(window).on("popstate load", function(e) {
        if (e.originalEvent.state !== null) {

        page = location.href.split("/").pop();
        
        if(page){
            togglelink($("#"+page));
            fadeLoad($content,"/content/"+page+"content.html");
            //$content.load("/content/"+page+"content.html");
        }else{
            fadeLoad($content,"/content/indexcontent.html");
            //$content.load("/content/indexcontent.html");
        }
    }
    });
    $(document).on("click", "span", function() {
        var href = $(this).attr("id");
        togglelink($(this));

        if (location.href.split("/").pop()!=href
            &&(href.indexOf(document.domain) > -1
            || href.indexOf(':') === -1))
        {
            history.pushState({}, '', href);

            fadeLoad($content,"/content/"+href+"content.html");
            //$content.load("/content/"+href+"content.html");

            return false;
        }
    });


    //********STICKY NAV BAR*********
    $(document).ready(function() {
        var stickyNavTop = $('.navbar').offset().top;
    
        var stickyNav = function(){
            var scrollTop = $(window).scrollTop();
        
            if (scrollTop >= stickyNavTop) { 
                $('.navbar').addClass('stick');
            } else {
                $('.navbar').removeClass('stick'); 
            }
        };

        $(window).scroll(function() {
            stickyNav();
        });
    });

});

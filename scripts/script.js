var fullpage_api; 
$(document).ready(function () {
   // alert("test");
    
    //var randomSelector = Math.floor((Math.random() * 3) + 1);
    //$("#home-page").css('background-image', `url("css/images/home-${randomSelector}.jpg")`);
    //var randomSelector = Math.floor((Math.random() * 3) + 1);
    //document.getElementById("home-page").style.backgroundImage = `url("css/images/home-${randomSelector}.jpg")`;    
    
    if ($("#home")[0].classList.toString().indexOf("background") < 0) {        
                var randomSelector = Math.floor((Math.random() * 3) + 1);
                $("#home").addClass(`background${randomSelector}`);
        }
    
    $(".contact-title").on('click', function () {
        if ($(".container").hasClass('contact-page')) {
            $(".contact-title").removeClass('active')
            $("#contact").removeClass('active');
            window.location.hash = $(".page.active").attr('id').split('-')[0]
            fullpage_api.setAllowScrolling(true);
        }
        else {
            $(".contact-title").addClass('active')
            $("#contact").addClass('active');
            window.location.hash = "contact";
            fullpage_api.setAllowScrolling(false);
        }
    });
    
    $(".project-page").on('click', ".exit-project-arrow", function () {
        window.location.hash = "work";
        fullpage_api.destroy('all'); 
        $(".project-page").removeClass("fullpage-wrapper fp-destroyed");
    });
    
    $(".close-project-mobile").on('click', function () {
        window.location.hash = "work";
        fullpage_api.destroy('all'); 
        $(".project-page").removeClass("fullpage-wrapper fp-destroyed");
    });
    
    $(".item-image").on('click', function () {
        if (window.screen.width <= 800) {
            fullpage_api.moveSlideRight();
        }
    });
    
    $("#mobile-menu").on("click", )
    
    $("#navigation").on("mouseover", function() {
        $("#navigation").removeClass('nohover');
    });
    
    $("#navigation").on("click", "a:not(.active)", function (e) {
        $("#navigation").addClass('nohover');
        window.scrollTo(0,0);
        //setTimeout(() => { $("#navigation").removeClass('nohover'); }, 100);
    });
    
    $("#mobile-menu").on("click", "a", function (e) {
        $("#mobile-menu").addClass('nohover');
        $("#mobile-menu").removeClass('open-menu');
        window.scrollTo(0,0);
        //setTimeout(() => { $("#mobile-menu").removeClass('nohover'); }, 100);
    });
    
    $("#mobile-menu").on("click", "h1", function (e) {
        if ( $("#mobile-menu").hasClass('open-menu')) {
            $("#mobile-menu").removeClass('open-menu');
            $("#mobile-menu").addClass('nohover');
            return;
        }
        
        $("#mobile-menu").addClass('open-menu');
        $("#mobile-menu").removeClass('nohover');
        window.scrollTo(0,0);
        //setTimeout(() => { $("#mobile-menu").removeClass('nohover'); }, 100);
    });
    
    loadPageFromHash();
});

function setActivePage(page) {
    $(".page").removeClass('active');
    $(page).addClass('active');
    var pageId = $(page).attr('id');
    
    if (pageId.indexOf("project-") >= 0) {
        pageId = "project";
    }
    else {
        $("#navigation a").removeClass();
        $("#mobile-menu a").removeClass();
        $(`#navigation a[href='#${pageId}']`).addClass('active');
        $(`#mobile-menu a[href='#${pageId}']`).addClass('active');
        fullpage_api.destroy('all'); 
        $(".project-page").removeClass("fullpage-wrapper fp-destroyed");
    }
    
    
    $(".container").removeClass().addClass('container').addClass(`${pageId}-page`);
}

function loadPageFromHash() {
    var hash = window.location.hash.toLowerCase();
    
    if (hash.indexOf("project") >= 0) {
        $(".container").removeClass().addClass('container project');
        loadProjectPage(hash);
        return;
    }
    
    if (hash != "#contact") {
        $("#contact").removeClass('active');
    }
    
    switch (hash) {
        case "#work":
            setActivePage($("#work"));
            $(".container").removeClass().addClass('container work-page');
            break;
        case "#publications":
            setActivePage($("#publications"));
            $(".container").removeClass().addClass('container publications-page');
            break;
        case "#exhibitions":
            setActivePage($("#exhibitions"));
            $(".container").removeClass().addClass('container exhibitions-page');
            break;
        case "#profile":
            setActivePage($("#profile"));
            $(".container").removeClass().addClass('container profile-page');
            break;
        case "#home":
            setActivePage($("#home"));
            $(".container").removeClass().addClass('container home-page');
            break;
        case "#contact":
            $(".container").removeClass().addClass('container contact-page');
            $("#contact-page").addClass('active');
            break;
    }
    
    if (hash == "#work" && window.innerWidth <= 800) {
        return;
    }
    window.scrollTo(0,0);
}

function loadProjectPage(hash) {  
    if ($('html').hasClass('fp-enabled')) {
        return;
    }
    
    var projectNumber = hash.replace("#project", "").split('/')[0];
    
    setActivePage($(`.project-page.project-${projectNumber}`));    

    
    if (screen.width <= 800) 
        {
            new fullpage(`.project-page.project-${projectNumber}`, {
                licenseKey: '23025AB4-5FEE43F6-B44344E4-BDFD5FD5',
                loopHorizontal: false,
                scrollHorizontally: true,
                scrollHorizontallyKey: 'c2FyYW1hc3Rvbi5jb21fQ2JPYzJOeWIyeHNTRzl5YVhwdmJuUmhiR3g1NGxB',
                anchors: [ `project${projectNumber}` ],
                controlArrows: false,
                continuousHorizontal: false,
                autoScrolling: false
            });
        }
    else {
        
    new fullpage(`.project-page.project-${projectNumber}`, {
        licenseKey: '23025AB4-5FEE43F6-B44344E4-BDFD5FD5',
        loopHorizontal: false,
        scrollHorizontally: true,
        scrollHorizontallyKey: 'c2FyYW1hc3Rvbi5jb21fQ2JPYzJOeWIyeHNTRzl5YVhwdmJuUmhiR3g1NGxB',
        anchors: [ `project${projectNumber}` ],
        controlArrows: true,
        continuousHorizontal: false
    });
    }
    
    //fullpage_api.silentMoveTo(projectNumber, 0);
}

$(window).on('hashchange', loadPageFromHash);
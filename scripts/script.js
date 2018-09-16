$(document).ready(function () {
   // alert("test");
    
    //var randomSelector = Math.floor((Math.random() * 3) + 1);
    //$("#home-page").css('background-image', `url("css/images/home-${randomSelector}.jpg")`);
    //var randomSelector = Math.floor((Math.random() * 3) + 1);
    //document.getElementById("home-page").style.backgroundImage = `url("css/images/home-${randomSelector}.jpg")`;    
    
    $(".contact-title").on('click', function () {
        if ($(".contact-title").hasClass('active')) {
            $(".contact-title").removeClass('active')
            $("#contact-page").removeClass('active');
            window.location.hash = $(".page.active").attr('id').split('-')[0]
        }
        else {
            $(".contact-title").addClass('active')
            $("#contact-page").addClass('active');
            window.location.hash = "contact";
        }
    });
    
    $("#project-page").on('click', ".project-close-button", function () {
        window.location.hash = "work";
        fullpage_api.destroy('all'); 
    });
    
    loadPageFromHash();
});

function setActivePage(page) {
    $(".page").removeClass('active');
    $(page).addClass('active');
    $(".container").removeClass().addClass('container').addClass($(page).attr('id'));
}

function loadPageFromHash() {
    var hash = window.location.hash.toLowerCase();
    
    if (hash.indexOf("project") >= 0) {
        $(".container").removeClass().addClass('container project-page');
        loadProjectPage(hash);
        return;
    }
    
    if (hash != "#contact") {
        $("#contact-page").removeClass('active');
    }
    
    switch (hash) {
        case "#work":
            setActivePage($("#work-page"));
            $(".container").removeClass().addClass('container work-page');
            break;
        case "#home":
            setActivePage($("#home-page"));
            $(".container").removeClass().addClass('container home-page');
            break;
        case "#contact":
            $(".container").removeClass().addClass('container contact-page');
            $("#contact-page").addClass('active');
            break;
    }
}

function loadProjectPage(hash) {  
    if ($('html').hasClass('fp-enabled')) {
        return;
    }
    
    setActivePage($("#project-page"));
    
    var projectNumber = hash.replace("#project", "").split('-')[0];

    new fullpage('#project-page', {
        licenseKey: '23025AB4-5FEE43F6-B44344E4-BDFD5FD5',
        scrollHorizontally: true,
        scrollHorizontallyKey: 'c2FyYW1hc3Rvbi5jb21fQ2JPYzJOeWIyeHNTRzl5YVhwdmJuUmhiR3g1NGxB',
        anchors: [ 'project1', 'project2', 'project3', 'project4', 'project5', 'project6', 'project7' ],
        controlArrows: false
    });
    
    fullpage_api.silentMoveTo(projectNumber, 0);
}

$(window).on('hashchange', loadPageFromHash);
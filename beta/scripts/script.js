body {
    margin: 0;
    font-family: 'IBM Plex Sans', sans-serif;
}
.container {
    width: 100%;
    max-height: 100%;
}
.page.active {
    display: grid;
}
.home-page .header-text * {
    color: #ffed66;
    text-decoration: none;
}
.header-text * {
    color: #4f4f4f;
    text-decoration: none;
}
.flex {
    display: flex;
}
.flex-vertical {
    flex-direction: column;
}
.grid {
    display: grid;
}
.page, .overlay-page {
    display: none;
}
.page.grid.active {
    display: grid;
}
.page.flex.active {
    display: flex;
}

/********* HEADER / NAV *********/
h3 {
    color: #fc4562;
    letter-spacing: 2px;
}
h4 {
    color: #4f4f4f;
}
#header {
    min-width: 412px;
}
#header:hover .header-title {
    display: none;
}
#header:hover .contact-title {
    display: flex;
}

.header-text {
    font-size: 48px;
    color: #4f4f4f;
    letter-spacing: 5.1px;    
}

#header {
    position: fixed;
    top: 40px;
    left: 40px;
    z-index: 1000;
}
#header > .contact-title {
    display: none;
}
.contact-title::after {
    content: '+';
    margin-left: 40px;
    font-size: 42px;
    line-height: 64px;
}
.container.contact-page .contact-title::after {
    content: 'x';
}
.container.contact-page .header-title {
    display: none;
}
.container.contact-page .contact-title {
    display: flex !important;
}

#navigation {
    position: fixed;
    top: 40px;
    right: 40px;
    z-index: 1000;
    display: flex;
    align-items: flex-end;
}
#navigation a.active {
    display: block;
    order: 1 !important;
}

#navigation a {
    display: none;
    position: relative;
}
#navigation a:nth-child(1) {
    order: 2;
}
#navigation a:nth-child(2) {
    order: 3;
}
#navigation a:nth-child(3) {
    order: 4;
}
#navigation a:nth-child(4) {
    order: 5;
}
#navigation a:nth-child(6) {
    order: 6;
}
div#navigation:not(.nohover):hover a {
    display: block;
}

/********* HOME *********/

div#home {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
}

#home.background1 { 
    background-image: url("images/home-1.jpg");
}

#home.background2 { 
    background-image: url("images/home-2.jpg");
}

#home.background3 { 
    background-image: url("images/home-3.jpg");
}

/********* WORK *********/
#work.grid {
    grid-template-columns: repeat(8, calc(12.5% - 35px));
    grid-template-rows: 120px repeat(4, auto);
    grid-gap: 40px;
    margin: 0 auto;
    /* margin-top: 160px; */
    max-width: 1400px;
}
#work>div {
    width: 100%;
    height: auto;
    position: relative;
    cursor: pointer;
}
#work .project-1 {
    grid-row: 1;
    grid-column: 1 / span 4;
    grid-row: 2 / span 3;
    text-align: end;
}
#work .project-2 {
    grid-row: 2;
    grid-column: 5 / span 4;
}
#work .project-3 {
    grid-row: 3 / span 3;
    grid-column: 5 / span 4;
}
#work .project-4 {
    grid-row: 5 / span 2;
    grid-column: 1 / span 4;
    /* text-align: end; */
    justify-items: flex-end;
}
#work .project-5 {
    grid-row: 7 / span 2;
    grid-column: 1 / span 4;
    text-align: end;
}
#work .project-6 {
    grid-row: 7;
    grid-column: 5 / span 4;
}
#work .project-7 {
    grid-row: 6;
    grid-column: 5 / span 4;
}
img.project-image {
    width: 100%;
    height: auto;
    position: relative;
}
.project-overlay-title {
    height: 100%;
    align-content: center;
}
.project-6 .project-overlay-title {
    line-height: 30px;
}
span.project-overlay-title {
    position: absolute;
    /* top: calc(50% - 24px); */
    /* left: 0; */
    text-align: center;
    width: 100%;
    font-size: 48px;
    color: #ffed66;
    display: none;
    top: 0;
    right: 0;
    border: 0;
    left: 0;
    vertical-align: middle;
}
#work>div:hover .project-overlay-title {
    display: grid;
}
#work>div:hover img {
    opacity: 0.5;
}
@media (min-width: 800px) {
div#publications .image-column img {
    max-width: 600px;
    height: auto;
}
    
img.project-image.portrait,
img.project-image.portrait+.project-overlay-title {
    max-width: 580px;
}

img.project-image.box, 
img.project-image.box+.project-overlay-title {
    max-width: 430px;
}

img.project-image.landscape,
img.project-image.landscape+.project-overlay-title {
    max-width: 680px;
}

img.project-image.small,
img.project-image.small+.project-overlay-title {
    max-width: 250px;
}
}

.right-align a {
    position: relative;
    display: block;
    display: flex;
    align-items: flex-end;
    align-content: flex-end;
    justify-content: flex-end;
    justify-items: flex-end;
    align-self: flex-end;
}

.right-align .project-overlay-title {
    position: absolute;
    left: auto;
}

#work .project-3 .project-overlay-title {
    top: -10%;
}

/********* PROJECTS *********/

.project-page {
    //
    grid-template-columns: repeat(2, 50%);
    /* grid-template-columns: 10px auto 10px; */
    grid-template-columns:;
}
.project-item-counter {
    position: absolute;
    bottom: 50px;
    right: 50px;
    font-size: 18px;
    letter-spacing: 2.6px;
}
.project-close-button {
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: 1001;
    font-size: 24px;
    cursor: pointer;
}

.slide.project-item>div {
    margin: 0 auto;
    display: grid;
    grid-template-rows: 100px auto 100px 30px;
    position: relative;
}
.slide.project-item>div>* {
    color: #4f4f4f;
}

.item-title {
    grid-row: 1;
    align-self: end;
    font-size: 48px;
    letter-spacing: 3.8px;
    font-style: italic;
    font-weight: 100;
    margin-left: 40px;
}

.item-image {
    grid-row: 2;
    max-height: calc(100% - 40px);
    max-width: calc(100% - 40px);
    width: auto;
    align-self: center;
    justify-self: center;
}

.item-description {
    grid-row: 4;
    justify-self: center;
    font-size: 18px;
    line-height: 25.3px;
    letter-spacing: 1.4px;
}

.section-wrapper {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}

.project-page-controls {
    display: none;
    max-width: 1400px;
    height: 100%;
    z-index: 1000000;
    position: relative;
    margin: 0 auto;
}

.container.project-page .project-page-controls {
    display: grid;
}
.fp-controlArrow {
    background: url('images/arrow.svg');
    background-size: contain;
    background-repeat: no-repeat;
    width: 90px !important;
    height: 90px !important;
    border: none !important;
}
.fp-next {
    -webkit-transform: rotate(180deg) !important;
    transform: rotate(180deg) !important;
}

span.exit-project-arrow {
    content: '';
    position: absolute;
    top: calc(50% - 38px);
    right: 14px;
    height: 90px;
    width: 90px;
    background: url('images/arrow.svg');
    background-size: contain;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    cursor: pointer;
}

/********* CONTACT *********/

#contact-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background: #fff;
    z-index: 100;
}
.container.contact-page .header-text * {
    color: #fc4562;
}
div#contact-page.active {
    display: grid !important;
}
.container.contact-page #navigation {
    display: none;
}
.container.contact-page .page.active {
    pointer-events:none;
}
.contact-menu {
    top: 84px;
    position: absolute;
    display: none;
}
.container.contact-page .contact-menu {
    display: grid;
    font-size: 24px;
    margin-top: 92px
}

.contact-title {
    cursor: pointer;
}
#mobile-contact-link {
    display: none !important;
}

.home-page #navigation>a.active::before {
    background: url('images/closed-menu-peanut-yellow.svg');
    background-size: contain;
    background-repeat: no-repeat;
    width: 56px;
    margin-top: 18px;
    margin-left: 2px;
    margin-left: 2px;
    position: absolute;
}
.home-page #navigation:hover>a.active::before {
    background: url('images/open-menu-peanut-yellow.svg');
    background-size: contain;
    background-repeat: no-repeat;
    width: 52px;
    margin-top: 4px;
    margin-left: 6px;
    position: absolute;
}
@media (min-width: 800px) {    
    #navigation>a.active::before {
        content: '';
        width: 100px;
        height: 58px;
        left: -68px;
        position: absolute;
        background: url('images/closed-menu-peanut.svg');
        background-size: contain;
        background-repeat: no-repeat;
    }
}
@media (max-width: 800px) {
    h1, h2, h3, h4, h5, p {
        font-size: 1em;
    }
    #header,#navigation {
        font-size: 1em;
        display: none;
    }    
    #mobile-contact-link {
        display: block;
    }
    #navigation>a.active::before {
        content: '';
        width: 53px;
        height: 40px;
        top: -3px;
        left: -45px;
        position: absolute;
        background: url('images/closed-menu-peanut.svg');
        background-size: contain;
        background-repeat: no-repeat;
    }
    .home-page #navigation:hover>a.active::before {
        width: 33px !important;
    }
    #work.grid.active {
        display: flex;
        flex-direction:column;
        justify-items:center;
    }
    #work.grid>.project-1 {
        margin-top: 55px;
    }
    #work.grid img {        
        margin: 0 auto;
    }
    #work.grid>* {
        grid-column: 1;
        text-align:center;
    }

    .item-description {
        margin-right: 50px;
        font-size: 14px;
        align-self: end;
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .project-item-counter {
        bottom: 14px;
        right: 10px;
        position: absolute;
        text-align: right;
        font-size: 14px;
    }
}
@media (max-width: 1280px) {
.two-column-text-image {
    margin: 0px 40px;
}


.text-column {
    margin-bottom: 40px;
    margin-top: 160px;
}

#profile.grid, #publications-grid, .two-column-text-image {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-row-gap: 40px;
}
.profile-description, .text-column {
    grid-row: 1;
    margin-top: 60px;
}
.profile-timeline {
    grid-row: 3;
    margin-top: 0px;
}
.profile-image, .image-column {
    grid-row: 2;
    justify-self: center;
}
}

@media (min-width: 1280px) {

.two-column-text-image {
    grid-template-columns: 50% 50%;
    width: 100%;
    padding-top: 160px;
}

#profile.grid, .two-column-text-image {
    grid-template-columns: 120px calc(50% - 315px) 195px 50%;
    grid-template-rows: auto;
    grid-row-gap: 40px;
}
.profile-description, .text-column {
    grid-row: 1;
    grid-column: 2;
}
.profile-timeline {
    grid-row: 1;
    grid-column: 2;
    margin-top: 0px;
}
.profile-image, .image-column {
    grid-row: 1 / span 2;
    grid-column: 4;
    justify-self: center;
}
}

.home-page #navigation>a.active::before {
    background: url('images/closed-menu-peanut-yellow.svg');
    background-size: contain;
    background-repeat: no-repeat;
}
.home-page #navigation:hover>a.active::before {
    background: url('images/open-menu-peanut-yellow.svg');
    background-size: contain;
    background-repeat: no-repeat;
}
.container:not(.home-page) #navigation:hover:not(.nohover)>a.active::before {
    background: url('images/open-menu-peanut.svg');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    width: 52px;
    margin-top: 4px;
    margin-left: 6px;
}
#navigation>a.active::before {
    background: url('images/closed-menu-peanut.svg');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    width: 56px;
    margin-top: 18px;
    margin-left: 2px;
    margin-left: 2px;
}
p {
    margin: 0;
    line-height: 1.8em;
    color: #4f4f4f;
}

i {
    font-weight: bold;
}
div#mobile-menu {
    display: none;
}
@media (max-width: 800px) {
    div#profile .image-column img {
    margin-top: 40px;
}
.project div#mobile-menu, .project-page div#mobile-menu {
    display: none;
}
    div#mobile-menu {
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 1000;
    font-size: 24px;
    text-align: center;
    }
    div#mobile-menu>*:not(h1) {
        font-size: 20px;
    }
}

div#mobile-menu>* {
    display: none;
}

div#mobile-menu .mobile-menu-title, div#mobile-menu:not(.nohover):hover>* {
    display: block;
    cursor: pointer;
    margin: 5px 0px;
}
div#mobile-menu:not(.nohover):hover {
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
}

span.mobile-menu-title {
    margin-top: 30px !important;
}
div#mobile-menu a:nth-child(2) {
    margin-top: 40px !important;
}
div#mobile-menu span:nth-child(8) {
    margin-top: 70px !important;
}

.contact-page div#contact {
    display: grid !important;
    background: rgba(255, 255, 255, 0.8);
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
}
.home-page h1.mobile-menu-title::before {
    background: url('images/closed-menu-peanut-yellow.svg');
    background-size: contain;
    background-repeat: no-repeat;
    /* position: relative; */
    /* width: 38px; */
    /* height: 37px; */
    /* top: 40px; */
    /* left: calc(50% - 180px); */
}
h1.mobile-menu-title::before {
    content: '';
    background: url('images/closed-menu-peanut.svg');
    background-size: contain;
    background-repeat: no-repeat;
    position: fixed;
    width: 42px;
    height: 58px;
    top: 22px;
    left: calc(50% - 150px);
}
#mobile-menu:not(.nohover):hover span.mobile-menu-title::before {
    background: url('images/open-menu-peanut.svg');
    background-size: contain;
    background-repeat: no-repeat;
    top: 30px;
}
.home-page #mobile-menu:not(.nohover):hover span.mobile-menu-title::before  {
    background: url('images/open-menu-peanut-yellow.svg');
    background-size: contain;
    background-repeat: no-repeat;
    top: 30px;
}
div#mobile-menu:not(.nohover):hover>* {
    color: black;
}
.image-column {
    display: grid;
    grid-row-gap: 20px;
    margin-bottom: 20px;
}
@media (max-width: 800px) {
    h1 {
        font-size: 1em;
    }

#mobile-menu:not(.nohover) h1.mobile-menu-title::before {
    background: url(images/open-menu-peanut.svg);
    background-size: contain;
    background-repeat: no-repeat;
    position: fixed;
    width: 35px;
    height: 58px;
    top: 16px;
    left: calc(50% - 144px);
}
.image-column img {
    max-width: calc(100% - 0px) !important;
    height: auto;
}
span, div, i, b {
    font-size: 1em;
}
.fp-controlArrow {
    width: 50px !important;
    height: 50px !important;
    margin-top: -14px !important;
}
.project-page>div {
    grid-column: 2;
}
    span.exit-project-arrow {
    width: 50px !important;
    height: 50px !important;
    top: calc(50% - 25px);
}

img.project-image {
    width: auto;
}
    div#work img {
    max-width: calc(100% - 20px);
}

span.mobile-menu-contact-header {
    font-weight: bold;
}
div#mobile-menu .mobile-menu-title {
    margin: 15px 0 !important;
}
#mobile-menu>a:last-child, #mobile-menu>a:nth-child(10) {
    text-decoration: underline;
}
}

@media (max-width: 800px) {
    #mobile-menu>*, .home-page .header-text * {
     color:  #4f4f4f !important;
    }

     .home-page #mobile-menu:not(.open-menu) .mobile-menu-title {
         color: #ffed66 !important;
     }
    .container.project-page #mobile-menu {
    display: none;
}

.project-page .close-project-mobile, .project .close-project-mobile {
    background: url('images/close-01.svg');
    width: 15px;
    height: 15px;
    background-size: contain;
    background-repeat: no-repeat;
    right: 20px;
    position: fixed;
    top: 20px;
    z-index: 10000;
}
    .item-image {
        grid-row: 2 / span 2;
    }

.slide.project-item>div {
    grid-template-rows: 20px 100px auto 80px;
}
.fp-controlArrow, .exit-project-arrow {
    display: none !important;
}
.fp-slide.fp-table {
    display: block !important;
}
.fp-tableCell {
    height: 100% !important;
}
.section.fp-section.active {
    height: auto !important;
}
}
@media (max-width: 350px) {
    #mobile-menu {
        font-size: 16px !important;
    }
    #mobile-menu:not(.nohover) h1.mobile-menu-title::before {
        left: calc(50% - 116px);
        width: 30px;
        top: 12px;
    }
    h1.mobile-menu-title::before{
        left: calc(50% - 124px);
        top: 17px;
        width: 40px;
    }
}
div#exhibitions .image-column img {
    max-width: 525px;
    height: auto;
}

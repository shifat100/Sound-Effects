var headtitle = 'Birds Sounds';
var numberof = 10;




































var screenwidth = window.innerWidth;
var screenheight = window.innerHeight;

function main() {
    var ls = localStorage.getItem('viewas');
    if (ls == 'list') { viewaslist(); } else { viewasgird(); }
    }



    
//function gird view
function viewasgird() {
    var outputmiddle = '';
for (var i = 0; i <= numberof; i++ ) {
        outputmiddle += '<div class="inline-block" tabindex="'+i+'"><img src="images/'+i+'.png" onerror="this.src=\'icons/missing.png\'"></div>';
    }


document.getElementById('app').innerHTML = '<center>'+outputmiddle+'</center>'; 
document.getElementById('header').innerHTML= headtitle; 
document.getElementById('f1').innerHTML='<i class="fa fa-eye"></i>';
document.getElementById('f2').innerHTML='<i class="fa fa-play"></i>';
document.getElementById('f3').innerHTML='<i class="fa fa-times"></i>';

document.querySelectorAll('.inline-block')[0].focus();

/* gird view key control */
if (screenwidth==240) { document.body.addEventListener('keydown', keydownlisterner240); }

if (screenwidth==320) { document.body.addEventListener('keydown', keydownlisterner320); }

function keydownlisterner240(e) {
    switch(e.key) {
        case 'ArrowDown': focus(3);
        break; 
        case 'ArrowUp': focus(-3);
        break;
        case 'ArrowLeft': focus(-1);
        break;
        case 'ArrowRight': focus(1);
        break;
        case 'Enter': play(document.activeElement.tabIndex);
        break;
        case 'SoftLeft': mode();
        break;
        case 'F1': mode();
        break;
        case 'SoftRight': window.close();
        break;
        case 'F2': window.close();
        break;
    }
    }
    
    function keydownlisterner320(e) {
        switch(e.key) {
            case 'ArrowDown': focus(4);
            break; 
            case 'ArrowUp': focus(-4);
            break;
            case 'ArrowLeft': focus(-1);
            break;
            case 'ArrowRight': focus(1);
            break;
            case 'Enter': play(document.activeElement.tabIndex);
            break;
            case 'SoftLeft': mode();
            break;
            case 'F1': mode();
            break;
            case 'SoftRight': window.close();
            break;
            case 'F2': window.close();
            break;
        }
        }

        function focus(move) {
            var currentIndex = document.activeElement.tabIndex;
            var next = currentIndex + move;
            if (next > document.querySelectorAll('.inline-block').length-1) { next = 0; } else if ( next < 0) { next = document.querySelectorAll('.inline-block').length-1; }
            var items = document.querySelectorAll('.inline-block');
            var targetElement = items[next];
            targetElement.focus();
        }

}
//end of girdview



//function list view
function viewaslist() {
    var outputmiddle = '';
for (var i = 0; i <= numberof; i++ ) {
        outputmiddle += '<div class="list" tabindex="'+i+'"><img src="images/'+i+'.png" onerror="this.src=\'icons/missing.png\'"> Sound No. '+(i+1)+'</div>';
    }


    document.getElementById('app').innerHTML = '<center>'+outputmiddle+'</center>'; 
    document.getElementById('header').innerHTML= headtitle; 
    document.getElementById('f1').innerHTML='<i class="fa fa-eye"></i>';
    document.getElementById('f2').innerHTML='<i class="fa fa-play"></i>';
    document.getElementById('f3').innerHTML='<i class="fa fa-times"></i>';
    
    
document.querySelectorAll('.list')[0].focus();

/* list view key control */
document.body.addEventListener('keydown', keydownlisterner); 

function keydownlisterner(e) {
    switch(e.key) {
        case 'ArrowDown': focus(1);
        break; 
        case 'ArrowUp': focus(-1);
        break;
        case 'Enter': play(document.activeElement.tabIndex);
        break;
        case 'SoftLeft': mode();
        break;
        case 'F1': mode();
        break;
        case 'SoftRight': window.close();
        break;
        case 'F2': window.close();
        break;
    }
    }

function focus(move) {
        var currentIndex = document.activeElement.tabIndex;
        var next = currentIndex + move;
        if (next > document.querySelectorAll('.list').length-1) { next = 0; } else if ( next < 0) { next = document.querySelectorAll('.list').length-1; }
        var items = document.querySelectorAll('.list');
        var targetElement = items[next];
        targetElement.focus();
    }
}



/* function mode start */

function mode() {
    document.getElementById('app').innerHTML = '<div class="header">Select</div><div class="container"><div class="list" tabindex="0"><i class="fa fa-list"></i>&nbsp; List View</div><div class="list" tabindex="1"><i class="fa fa-columns"></i>&nbsp; Gird view</div></div><div class="footer"><div class="block"></div><div class="block"><i class="fa fa-check"></i></div><div class="block"><i class="fa fa-mail-reply"></i></div></div>';

    document.getElementById('f1').innerHTML='';
    document.getElementById('f2').innerHTML='<i class="fa fa-check"></i>';
    document.getElementById('f3').innerHTML='<i class="fa fa-times"></i>';
    
    document.body.addEventListener('keydown', keydownlisterners); 
    
    function keydownlisterners(e) {
    switch(e.key) {
        case 'ArrowDown': focus(1);
        break; 
        case 'ArrowUp': focus(-1);
        break;
        case 'SoftRight': main();
        break;
        case 'F2': main();
        break;
        case 'Enter': set(document.activeElement.tabIndex);
        break;
    }
    }
    
    function focus(move) {
        const currentIndex = document.activeElement.tabIndex;
        const next = currentIndex + move;
        if (next > document.querySelectorAll('.list').length-1) { next = 0; } else if ( next < 0) { next = document.querySelectorAll('.list').length-1; }
        const items = document.querySelectorAll('.list');
        const targetElement = items[next];
        targetElement.focus();
    }
    
    function set(t) {
        switch(t) {
     case 0: 
     localStorage.setItem('viewas', 'list'); 
     window.location.reload();
     main();
     
     break;
     case 1: 
     localStorage.setItem('viewas', 'gird'); 
     window.location.reload();
    main();
    
     break; 
        }
     }
    
    document.querySelectorAll('.list')[0].focus();
    }
    
    /* Function Mode End */
    
    

    
    function play(t) { 
        document.getElementById('audio').innerHTML = '<audio src="sounds/'+t+'.mp3" onerror="this.src=\'sounds/missing.mp3\'" autoplay></audio>';
     }
    















       
try { window.onload = setTimeout(main, 0); } catch(e) {
    console.log(e.message);
}
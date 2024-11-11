function ctc() {
    navigator.clipboard.writeText("catsoulisme@gmail.com");
};
function ctc1() {
    navigator.clipboard.writeText("@CatSoulIsMe");
};
function ctc2() {
    navigator.clipboard.writeText("+79090566540");
};
function ctc3() {
    navigator.clipboard.writeText("https://shorturl.at/RTNvU");
};
function show (bb) {
    bb.style.display = 'block';
};
function hide (bb) {
    bb.style.display = 'none';
};
    
var localLang = window.localStorage.getItem('lang')




window.onload = function(){ 
            
    if (localLang == "ru") {
        for(var i=0; i < document.getElementsByClassName("en").length; i++) { 
            show(document.getElementsByClassName("ru")[i]);
            hide(document.getElementsByClassName("en")[i]);
            document.getElementById("language-toggle").checked = true;
        }
    } else {
        for(var i=0; i < document.getElementsByClassName("en").length; i++) { 
            show(document.getElementsByClassName("en")[i]);
            hide(document.getElementsByClassName("ru")[i]);
            document.getElementById("language-toggle").checked = false;
        }
    }
        
    document.getElementById("language-toggle").onclick = function () {
        if ($(this).is(":checked") || localLang != "ru") {
            for(var i=0; i < document.getElementsByClassName("en").length; i++) { 
                show(document.getElementsByClassName("ru")[i]);
                hide(document.getElementsByClassName("en")[i]);
                    
            }
            window.localStorage.setItem('lang', 'ru');
            localLang = window.localStorage.getItem('lang')
            
                
        } else {
            for(var i=0; i < document.getElementsByClassName("ru").length; i++) { 
                show(document.getElementsByClassName("en")[i]);
                hide(document.getElementsByClassName("ru")[i]);
                    
            }
            window.localStorage.setItem('lang', 'eng');
            localLang = window.localStorage.getItem('lang')
        }
    };
        
}
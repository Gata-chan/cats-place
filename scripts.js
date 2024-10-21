function ctc() {
    navigator.clipboard.writeText("catsoulisme@gmail.com");
};
function ctc1() {
    navigator.clipboard.writeText("@CatSoulIsMe");
};
function ctc2() {
    navigator.clipboard.writeText("+79090566540");
};
function show (bb) {
    bb.style.display = 'block';
};
function hide (bb) {
    bb.style.display = 'none';
};
    
const localLang = window.localStorage.getItem('lang')




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
            window.localStorage.setItem('lang', 'ru')
            
                
        } else {
            for(var i=0; i < document.getElementsByClassName("en").length; i++) { 
                show(document.getElementsByClassName("en")[i]);
                hide(document.getElementsByClassName("ru")[i]);
                    
            }
            window.localStorage.setItem('lang', 'eng')
        }
    };
        
}
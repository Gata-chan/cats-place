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
    
    
    window.onload = function(){
        
        document.getElementById("language-toggle").onclick = function () {
            if ($(this).is(":checked")) {
                for(var i=0; i < document.getElementsByClassName("en").length; i++) { 
                    show(document.getElementsByClassName("ru")[i]);
                    hide(document.getElementsByClassName("en")[i]);
                }

            } else {
                for(var i=0; i < document.getElementsByClassName("en").length; i++) { 
                    show(document.getElementsByClassName("en")[i]);
                    hide(document.getElementsByClassName("ru")[i]);
                }
            }
        };
        
    }
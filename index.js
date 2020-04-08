// Get the modal
var modalIn = document.getElementById("In");
var modalUp = document.getElementById("Up");

// Get the button that opens the modal
var btnIn = document.getElementById("myBtnIn");
var btnUp = document.getElementById("myBtnUp");

// Get the <span> element that closes the modal
var spanIn = document.getElementsByClassName("closeIn")[0];
var spanUp = document.getElementsByClassName("closeUp")[0];

// When the user clicks on the button, open the modal
btnIn.onclick = function() {
    modalIn.style.display = "block";
}
btnUp.onclick = function() {
    modalUp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanIn.onclick = function() {
    modalIn.style.display = "none";
}
spanUp.onclick = function() {
    modalUp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modalIn) {
            modalIn.style.display = "none";
        } else if (event.target == modalUp) {
            this.modalUp.style.display = "none";
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////
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
    /////////////////////////////////////////////////////
    //XML PARSINGAS

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlparsing(this);
        }
    }
    xhttp.open("GET", "index.xml", true);
    xhttp.send();
}

function xmlparsing(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Name </th><th> Price </th><th> Description</th></tr>";
    var name = xmlDoc.getElementsByTagName("name");
    var price = xmlDoc.getElementsByTagName("price");
    var descriptionas = xmlDoc.getElementsByTagName("desc");
    for (i = 0; i < name.length; i++) {
        table += "<tr><td>" +
            name[i].childNodes[0].nodeValue +
            "</td><td>" +
            price[i].childNodes[0].nodeValue +
            "</td><td>" +
            descriptionas[i].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

//////////////////////////////////////////////////
function navHam() {
    var x = document.getElementById("navig");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
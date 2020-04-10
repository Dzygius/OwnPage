module.exports = {
    logged: function() {
        var Up = document.getElementById("myBtnUp");
        var In = document.getElementById("myBtnIn");
        Up.style.display = "none";
        In.style.display = "none";
        var username = document.createElement("a");
        var uname = document.createTextNode("<%= name %>");
        username.appendChild(uname);
        var navbar = document.getElementById("navig");
        navbar.insertBefore(username, In);
        var logoutas = document.createElement("a");
        var logoutastext = document.createTextNode("Logout");
        logoutas.setAttribute('href', '/logout');
        logoutas.appendChild(logoutastext);
        navbar.insertBefore(username, In);
        console.log("IN");
    },
    notlogged: function() {
        var Up = document.getElementById("myBtnUp");
        var In = document.getElementById("myBtnIn");
        In.style.display = "block";
        Up.style.display = "block";
        console.log("OUT");
    }
}
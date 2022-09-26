var botonDarkMode = document.getElementById("customSwitch1")

function cambiarDarkMode() {
    cambiarHeader();
    cambiarMain();
    cambiarFooter();
    cambiarTextos();
    console.log("cambia a dark mode")
};

function cambiarHeader() {
    document.querySelector("header").classList.toggle("dark-mode-black");
    document.querySelector("nav").classList.toggle("dark-mode-black");
};

function cambiarMain() {
    document.querySelector("main").classList.toggle("dark-mode-gray");
};

function cambiarFooter() {
    document.querySelector("footer").classList.toggle("dark-mode-black");
    cambiarIconos();
};

function cambiarTextos() {
    cambiarTitulos();
    cambiarLinks();
    cambiarParrafos();
};

function cambiarIconos() {
    cambiarRed("ubicacion");
    cambiarRed("instagram");
    cambiarRed("facebook");
    cambiarRed("telefono");
    cambiarRed("whatsapp");
    cambiarRed("correo");
};

function cambiarTitulos() {
    cambioAUnaColeccionDeClase("h1");
    cambioAUnaColeccionDeClase("h2");
    cambioAUnaColeccionDeClase("h3");
    cambioAUnaColeccionDeClase("h4");
    cambioAUnaColeccionDeClase("label");
};

function cambiarLinks() {
    cambioAUnaColeccionDeClase("a");
};

function cambiarParrafos() {
    cambioAUnaColeccionDeClase("p");
    cambioAUnaColeccionDeClase("li");
    cambioAUnaColeccionDeClase("h5");
    cambioAUnaColeccionDeClase("h6");
    cambioAUnaColeccionDeClase("hr");
};

function cambiarRed(red) {
    let instagram = document.getElementById(red)
    if(instagram.getAttribute("src") == ("imagenes/iconos/" + red + ".png")) {
        instagram.setAttribute("src", "imagenes/iconos/" + red + "-neg.png");
    } else {
        instagram.setAttribute("src", ("imagenes/iconos/" + red + ".png"));
    }
};

function cambioAUnaColeccionDeClase(etiqueta) {
    let coleccion = document.querySelectorAll(etiqueta);
    coleccion.forEach(elem => elem.classList.toggle("dark-mode-text"))
}

botonDarkMode.addEventListener('change', cambiarDarkMode);
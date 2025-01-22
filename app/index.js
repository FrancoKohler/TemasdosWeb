/*------------------MENU--------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".collapse");
  const brand = document.querySelector(".brand-name");
  const hamburger = document.querySelector(".hamburger");

  if (menuBtn && menu && brand && hamburger) {
    menuBtn.addEventListener("click", function () {
      menu.classList.toggle("show");
      brand.classList.toggle("show");
      hamburger.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
      if (menu && menuBtn && brand && hamburger) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
          menu.classList.remove("show");
          brand.classList.remove("show");
          hamburger.classList.remove("show");
        }
      }
    });
  }
});

/*------------------SCROLL--------------------------*/
/* window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 750) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }); */
/*-----------------BTN PARA NUEVOS Y MAS-------------------*/
const btnModelos = document.querySelector("#btnModelos");
const btnMas = document.querySelector("#btnMas");
const gridNuevos = document.querySelector("#gridNuevos");
const gridMas = document.querySelector("#gridMas");

if (btnModelos && gridNuevos && gridMas) {
  btnModelos.addEventListener("click", function () {
    gridNuevos.classList.add("show");
    gridNuevos.classList.remove("hide");
    gridMas.classList.remove("show");
    gridMas.classList.add("hide");

    btnModelos.classList.add("active");
    btnModelos.classList.remove("hide");

    btnMas.classList.remove("active");
    btnMas.classList.add("hide");
  });
}

if (btnMas && gridNuevos && gridMas) {
  btnMas.addEventListener("click", function () {
    gridMas.classList.add("show");
    gridMas.classList.remove("hide");
    gridNuevos.classList.remove("show");
    gridNuevos.classList.add("hide");

    btnMas.classList.add("active");
    btnMas.classList.remove("hide");

    btnModelos.classList.remove("active");
    btnModelos.classList.add("hide");
  });
}
/*------------------OVERLAYS--------------------------*/
/*------------------OVERLAYS--------------------------*/
const overlay1 = document.querySelector("#overlay1");
const overlay2 = document.querySelector("#overlay2");
const overlayContent1 = document.querySelector("#overlay1 .overlay-content"); // Corrected this line
const overlayContent2 = document.querySelector("#overlay2 .overlay-content"); // Added this line
const openOverlay1 = document.querySelector("#zoom1");
const openOverlay2 = document.querySelector("#zoom2");

if (openOverlay1 && overlay1) {
  openOverlay1.addEventListener("click", function () {
    const rect = openOverlay1.getBoundingClientRect();
    overlay1.style.display = "flex";
    overlay1.classList.add("show");
    overlay1.style.position = "absolute";
    overlay1.style.left = `${rect.left}px`;
    overlay1.style.top = `${rect.top}px`;
  });
}

if (openOverlay2 && overlay2) {
  openOverlay2.addEventListener("click", function () {
    const rect = openOverlay2.getBoundingClientRect();
    overlay2.style.display = "flex";
    overlay2.classList.add("show");
    overlay2.style.position = "absolute";
    overlay2.style.left = `${rect.left}px`;
    overlay2.style.top = `${rect.top}px`;
  });
}

window.addEventListener("click", function (event) {
  if (
    overlay1.style.display === "flex" &&
    !overlayContent1.contains(event.target) &&
    event.target !== openOverlay1
  ) {
    overlay1.style.display = "none";
    overlay1.classList.remove("show");
  }

  if (
    overlay2.style.display === "flex" &&
    !overlayContent2.contains(event.target) &&
    event.target !== openOverlay2
  ) {
    overlay2.style.display = "none";
    overlay2.classList.remove("show");
  }
});
/*-----------FUNCION PARA POPULATE SEGUN PRODUCTO---------*/
function llenarSofas() {
  const contenedorSofas = document.querySelector("#contenedorSofas");

  sofas.forEach((sofa) => {
    /*---------SE HACE EL DIV PARA EL PRODUCTO------*/
    const link = document.createElement("a");
    link.href = sofa.link;
    link.classList.add("sofa-link");

    const sofaDiv = document.createElement("div");
    sofaDiv.classList.add("producto");

    /*---IMG DEL PRODUCTO CON EL SRC DE LA DATA----*/
    const img = document.createElement("img");
    img.src = sofa.img;
    img.alt = sofa.nombre;
    img.classList.add("sofa-img");

    const nombre = document.createElement("h3");
    nombre.textContent = sofa.nombre;
    nombre.classList.add("producto-nombre");
    /*----ACA SE AÑADE LUEGO DE QUE SE CREA LA IMG ,EL H3 Y EL A------*/
    sofaDiv.appendChild(img);
    sofaDiv.appendChild(nombre);
    link.appendChild(sofaDiv);
    /*-------INSERTA EL DIV----------*/
    contenedorSofas.appendChild(link);
  });
}
function llenarButacas() {
  const contenedorSofas = document.querySelector("#contenedorSofas");
  /*---------SE HACE EL DIV PARA EL PRODUCTO------*/
  butacas.forEach((butaca) => {
    const link = document.createElement("a");
    link.href = butaca.link;
    link.classList.add("sofa-link");
    const sofaDiv = document.createElement("div");
    sofaDiv.classList.add("producto");

    /*---IMG DEL PRODUCTO CON EL SRC DE LA DATA----*/
    const img = document.createElement("img");
    img.src = butaca.img;
    img.alt = butaca.nombre;
    img.classList.add("sofa-img");

    const nombre = document.createElement("h3");
    nombre.textContent = butaca.nombre;
    nombre.classList.add("producto-nombre");
    /*----ACA SE AÑADE LUEGO DE QUE SE CREA LA IMG Y EL H3------*/
    sofaDiv.appendChild(img);
    sofaDiv.appendChild(nombre);
    link.appendChild(sofaDiv);
    /*-------INSERTA EL DIV----------*/
    contenedorSofas.appendChild(link);
  });
}
function llenarMobiliario() {
  const contenedorSofas = document.querySelector("#contenedorSofas");

  mobiliarios.forEach((mobiliario) => {
    const link = document.createElement("a");
    link.href = mobiliario.link;
    link.classList.add("sofa-link");
    /*---------SE HACE EL DIV PARA EL PRODUCTO------*/
    const sofaDiv = document.createElement("div");
    sofaDiv.classList.add("producto");
    /*---IMG DEL PRODUCTO CON EL SRC DE LA DATA----*/
    const img = document.createElement("img");
    img.src = mobiliario.img;
    img.alt = mobiliario.nombre;
    img.classList.add("sofa-img");

    const nombre = document.createElement("h3");
    nombre.textContent = mobiliario.nombre;
    nombre.classList.add("producto-nombre");
    /*----ACA SE AÑADE LUEGO DE QUE SE CREA LA IMG Y EL H3------*/
    sofaDiv.appendChild(img);
    sofaDiv.appendChild(nombre);
    link.appendChild(sofaDiv);
    /*-------INSERTA EL DIV----------*/
    contenedorSofas.appendChild(link);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const botonSofas = document.getElementById("sofas");
  const botonButacas = document.getElementById("butacas");
  const botonMobiliario = document.getElementById("mobiliario");

  function reiniciar() {
    const contenedorSofas = document.querySelector("#contenedorSofas");
    contenedorSofas.innerHTML = "";
    botonSofas.classList.remove("activo");
    botonButacas.classList.remove("activo");
    botonMobiliario.classList.remove("activo");
  }
  function activarBoton(boton) {
    boton.classList.add("activo");
  }
  /*------TODAS LAS FUNCIONES ESTAN REINICIADAS MENOS LA DE SOFAS POR DEFAULT-------*/
  botonSofas.addEventListener("click", () => {
    reiniciar();
    llenarSofas();
    activarBoton(botonSofas);
  });

  botonButacas.addEventListener("click", () => {
    reiniciar();
    llenarButacas();
    activarBoton(botonButacas);
  });

  botonMobiliario.addEventListener("click", () => {
    reiniciar();
    llenarMobiliario();
    activarBoton(botonButacas);
  });
  llenarSofas();
  activarBoton(botonSofas);
});
/*------------------PRODUCTOS--------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  // Buscar el sofá correspondiente
  const sofa = sofas.find((sofa) => sofa.id);

  if (sofa) {
    function populateHtml(sofa) {
      document.getElementById("hHero").textContent = sofa.nombre;
      document.getElementById("spanHero").textContent = sofa.nombre;
      const divTop = document.querySelector("#topProducto");
      const fondoDiv = document.querySelector("#fondoProducto");
      const espaciosDiv1 = document.querySelector("#espacios-1");
      const espaciosDiv2 = document.querySelector("#espacios-2");
      const imgEspacios1 = document.createElement("img");
      const imgEspacios2 = document.createElement("img");
      const imgEspacios3 = document.createElement("img");
      const imgHero = document.createElement("img");
      const pHero = document.createElement("p");

      pHero.textContent = sofa.text;
      pHero.classList.add("p-hero");
      imgHero.src = sofa.heroimg;
      imgHero.classList.add("img-hero");
      imgEspacios1.src = sofa.img1;
      imgEspacios2.src = sofa.img2;
      imgEspacios3.src = sofa.img3;
      imgEspacios1.classList.add("espacios-img");
      imgEspacios2.classList.add("espacios-img");
      imgEspacios3.classList.add("espacios-img2");
      fondoDiv.appendChild(imgHero);
      divTop.appendChild(pHero);
      espaciosDiv1.appendChild(imgEspacios1);
      espaciosDiv1.appendChild(imgEspacios2);
      espaciosDiv2.appendChild(imgEspacios3);
    }
    populateHtml(sofa);
  } else {
    console.log("Sofá no encontrado");
  }
});
/*----------DIV MODELOS---*/

document.addEventListener("DOMContentLoaded", function modelosNombre() {
  const divModelos = document.querySelector("#divModel");
  sofas.forEach((sofa, index) => {
    const nombre = document.createElement("a");
    nombre.textContent = sofa.nombre;
    nombre.classList.add("nombre-sofa");
    nombre.href = "../pages/product.html";
    if (index === 0) {
      nombre.style.color = "#393434";
      nombre.classList.add("first-sofa");
    }
    divModelos.appendChild(nombre);
  });
});

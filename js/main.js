//Selecciona el elemento HTML con la clase "slider"
const slider = document.querySelector(".slider");

//Selecciona todos los elementos con la clase "slide"
const slide = document.querySelectorAll(".slide");

//Selecciona la flecha izquierda del control del slider
const leftArrow = document.querySelector(".controls i:nth-child(1)");

//Selecciona la flecha derecha del control del slider
const rightArrow = document.querySelector(".controls i:nth-child(2)");

//Selecciona el contenedor de puntos
const pointsWrapper = document.querySelector(".points");

//Selecciona todos los puntos dentro del contenedor de puntos
const points = document.querySelectorAll(".points span");

//Inicializa el índice del slide actual
let slideIndex = 0;

//Itera sobre cada punto y agrega un evento de clicc a cada uno
points.forEach((point, index) => {
    point.addEventListener("click", () => {
        //Paso 1: Actualiza el índice del slide al índice del punto clicado
        slideIndex = index;
        //Paso 3: Remueve la clase "active" del punto actualmente activo
        document.querySelector(".points .active").classList.remove("active");
        //Paso 2: Actualiza la posición del slider para mostrar el slide correspondiente
        slider.style.transform = `translateX(${slideIndex * -20}%)`;
        //Agrega la clase "active" al punto clicado para resaltarlo
        point.classList.add("active");
    });
});

//Agrega un evento de click a la flecha izquierda
leftArrow.addEventListener("click", () => {
    //Paso 1: Actualiza el índice del slide, asegurandose de no ir más allá del primer slide
    slideIndex = slideIndex > 0 ? slideIndex -1 : 0;

    //Paso 2: Remueve la clase "active " del punto actualmente activo
    document.querySelector(".points .active").classList.remove("active");

    //Paso 3: Actualiza la posición del slider para mostrar el slide correspondiente
    slider.style.transform = `translateX(${slideIndex * -20}%)`;

    //Pasa la clase "active" al punto correspondiente al nuevo slide
    pointsWrapper.children[slideIndex].classList.add("active");
});

//Agrega un evento de click a la flecha derecha
rightArrow.addEventListener("click", () => {
    //Paso 1: Actualiza el índice del slide, asegurandose de no ir más allá del primer slide
    slideIndex = slideIndex < slide.length -1 ? slideIndex +1 : slide.length -1;

    //Paso 2: Remueve la clase "active " del punto actualmente activo
    document.querySelector(".points .active").classList.remove("active");

    //Paso 3: Actualiza la posición del slider para mostrar el slide correspondiente
    slider.style.transform = `translateX(${slideIndex * -20}%)`;

    //Pasa la clase "active" al punto correspondiente al nuevo slide
    pointsWrapper.children[slideIndex].classList.add("active");
})
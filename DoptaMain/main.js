//Funcion al seleccionar elemento

//Cuando se llama la funcion, se retorna el elemento pasado
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler=selectElement('.menu-toggle');
let body=selectElement('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
});

menuToggler.addEventListener('blur',function(){
    body.classList.toggle('close');
});
//Movimiento de secciones adentro de la pagina
window.sr=ScrollReveal();

sr.reveal('.animate-left',{
    //de donde viene
    origin:'left',
    duration:1000, //en ms
    distance:'25rem',
    delay:300 //en ms
});

sr.reveal('.animate-right',{
    //de donde viene
    origin:'right',
    duration:1000, //en ms
    distance:'25rem',
    delay:600 //en ms
});

sr.reveal('.animate-top',{
    //de donde viene
    origin:'top',
    duration:1000, //en ms
    distance:'25rem',
    delay:600 //en ms
});

sr.reveal('.animate-bottom',{
    //de donde viene
    origin:'bottom',
    duration:1000, //en ms
    distance:'25rem',
    delay:600 //en ms
});
/*cierre del menu al hacer click*/
function changeClass()
{
 
    document.getElementById('body').className="";
}
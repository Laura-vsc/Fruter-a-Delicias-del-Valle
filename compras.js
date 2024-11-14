// variable que inicializa en 0
let count = 0;
let contador = 0;
const precio = 1500;
const precioC =7200;
// const valor = 0;
const disminuir = document.getElementById ('butt1');
const cero = document.getElementById ('cero');
const aumentar = document.getElementById ('agg');
const restar = document.getElementById ('butt3');
const cer = document.getElementById ('a');
const sum = document.getElementById ('butt4');
const pera = document.getElementById ('Pera');
const Cono = document.getElementById ('Cono');
const Total = document.getElementById ('Total');


const updateprecie= ()=> {
    const almpera=count*precio;
    const almcono=contador*precioC;

    Cono.value=almcono;
    pera.value=almpera;


    Total.value=almcono+almpera;



}
const recerprice= () => {
    
    const respera=count*precio;
    const rescono=contador*precioC;
    
    Cono.value=rescono;
    pera.value=respera;

const arregloTotNeg =Math.max(rescono+respera);
    Total.value=arregloTotNeg;

  


}
// creacion de el evento
aumentar.addEventListener ('click', () => {
    count++;
    cero.textContent=count;
    // pera.value=count*precio;
    updateprecie();

});
disminuir.addEventListener ('click', () => {
    if (count > 0){
        count--;
        cero.textContent=count; 
        recerprice ();
    };

});


sum.addEventListener ('click', () => {
    contador++;
    cer.textContent=contador;
    // Cono.value=contador*precioC;
    // Total.value=pera+Cono;
    updateprecie();
    

});
restar.addEventListener ('click', () => {
    if (contador > 0){
        contador--;
        cer.textContent=contador; 
    recerprice ();
    };
});



//variables para los selectores

const formulario = document.getElementById('agregar-gasto');
const listado = document.getElementById('#gastos ul'); //parte visual

//eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded',pregpresupuesto
    );
    formulario.addEventListener('submit',agregasto);
}
//crear la clase principal

class presupuesto {
    constructor(presupuesto)
    {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

}
//clase que maneja la interfaz de usuario
class ui{
instpresupuesto(cantidad)
{

    document.querySelector('#total').textContent = cantidad.presupuesto;
    document.querySelector('#restante').textContent = cantidad.presupuesto;

} 
imprimiralerta(){

    //crear el div
    const divmensaje = document.createElement('div');
    divmensaje.classList.add('text-center','alert');

    //si es de tipo error se agrga la clase
    if(tipo==='error'){
        divmensaje.classList.add('alert-danger');
    }else{
        divmensaje.classList.add('alert-primary');
    }
    //mensaje de error
    divmensaje.textContent = mensaje;
    //insertar en el dom
    document.querySelector('.contenido--principal').insertBefore(divmensaje,formulario);
    //programar el tiempo
    selTimeout(()=>{
        document.querySelector('.contenido-principal .alert').remove();
    },3000);
    }
}

// crear objeto en clase ui
const UI = new ui();
let presupuestos;

function pregpresupuesto(){
    const valorpre = prompt('ingresar valor presupuesto');

    //validar el ingreso
    if(valorpre === '' || valorpre===null||isNaN(valorpre||valorpre<=0) )
    {
        window.location.reload();
    }
    //presupuesto es valido

    presupuestos = new presupuesto(valorpre);

    console.log(valorpre);

    //mostrar en html

    UI.instpresupuesto(presupuestos);
}

function agregasto(e){
  e.preventDefault();

  //variables del formulario
  const nombre = document.querySelector('#').value;
  const valor = Number(document.querySelector('#cantidad').value);

  //validar campos del formulario
  if(nombre===''||valor==='0'){
    UI.imprimiralerta('ambos campos son obligatorios','error');
  }
}

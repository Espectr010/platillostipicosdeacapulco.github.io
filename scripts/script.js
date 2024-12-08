let platilloActual = 1; // Mantener registro del platillo actual
const totalPlatillos = 4; // Ajusta este número según la cantidad total de platillos

function ocultarTodosPlatillos() {
    for(let i = 1; i <= totalPlatillos; i++) {
        const platillo = document.getElementById('platillo' + i);
        if(platillo) {
            platillo.style.display = 'none';
        }
    }
}

function mostrarPlatillo(numero, direccion = 'siguiente') {
    const platilloActualElement = document.getElementById('platillo' + platilloActual);
    const platilloNuevoElement = document.getElementById('platillo' + numero);
    
    // Determinar las clases de animación según la dirección
    let salidaActual, entradaNuevo;
    if (direccion === 'siguiente') {
        salidaActual = 'slide-out-left';
        entradaNuevo = 'slide-in-right';
    } else {
        salidaActual = 'slide-out-right';
        entradaNuevo = 'slide-in-left';
    }

    // Animar salida del platillo actual
    if (platilloActualElement) {
        platilloActualElement.classList.add(salidaActual);
        setTimeout(() => {
            platilloActualElement.style.display = 'none';
            platilloActualElement.classList.remove(salidaActual);
        }, 500);
    }

    // Animar entrada del nuevo platillo
    if (platilloNuevoElement) {
        setTimeout(() => {
            platilloNuevoElement.style.display = 'block';
            platilloNuevoElement.classList.add(entradaNuevo);
            setTimeout(() => {
                platilloNuevoElement.classList.remove(entradaNuevo);
            }, 500);
        }, 500);
    }

    platilloActual = numero;
}

function platilloAnterior() {
    let anterior = platilloActual - 1;
    if(anterior < 1) anterior = totalPlatillos;
    mostrarPlatillo(anterior, 'anterior');
}

function platilloSiguiente() {
    let siguiente = platilloActual + 1;
    if(siguiente > totalPlatillos) siguiente = 1;
    mostrarPlatillo(siguiente, 'siguiente');
}
// Función para Ingredientes y Preparación
function mostrarInfoI(id) {
    const infoElement = document.getElementById('infoi' + id);
    if (!infoElement) return;
    
    if (infoElement.style.display === 'block') {
        infoElement.classList.add('ocultar');
        infoElement.classList.remove('mostrar');
        setTimeout(() => {
            infoElement.style.display = 'none';
            infoElement.classList.remove('ocultar')
        }, 800);
    } else {
        infoElement.style.display = 'block';
        setTimeout(() => {
            infoElement.classList.add('mostrar');
        }, 10);
    }
}

function mostrarInfoP(id) {
    const infoElement = document.getElementById('infop' + id);
    if (!infoElement) return;

    if (infoElement.style.display === 'block') {
        infoElement.classList.add('ocultar')
        infoElement.classList.remove('mostrar');
        setTimeout(() => {
            infoElement.style.display = 'none';
            infoElement.classList.remove('ocultar')
        }, 800);
    } else {
        infoElement.style.display = 'block';
        setTimeout(() => {
            infoElement.classList.add('mostrar');
        }, 10);
    }
}

function ayuda() {
    alert('Bienvenido a la página de Platillos Típicos de Acapulco\n\n' +
          'Para ver los ingredientes o la preparación de cada platillo, haga clic en los botones correspondientes y puede ocultar la información haciendo clic nuevamente en el mismo botón.\n\n'  + 
          'Puede pasar de platillo dandole al boton "Siguiente" y regresar dandole al boton "Anterior" ');
}

function acercade() {
    alert('Platillos Típicos de Acapulco\n\n' +
          'Versión 1.0\n' +
          'Desarrollado por: \nHTML: Alberto Olmedo García\n CSS: Luis Gerardo Arredondo Arizmendi y Adrian Casiano Delgado\nJavaScript: Francisco Emmanuel Flores Amores y Sebastian Arroyo Mosso\n' +
          'Esta página web muestra información sobre los platillos más representativos de Acapulco, incluyendo su historia, ingredientes y preparación.\n' +
          'Referencias Citadas:\n Chat GPT: https://chatgpt.com/ \n Claude: https://claude.ai/ \n Soy Dalto: https://www.youtube.com/@soydalto'  );
}

window.onload = function() {
    // Ocultamos todos los platillos primero
    ocultarTodosPlatillos();
    // Mostramos el primer platillo
    const primerPlatillo = document.getElementById('platillo1');
    if(primerPlatillo) {
        primerPlatillo.style.display = 'block';
    }
    platilloActual = 1;

    // Aseguramos de que todos los elementos de información estén ocultos inicialmente
    for(let i = 1; i <= totalPlatillos; i++) {
        const infoI = document.getElementById('infoi' + i);
        const infoP = document.getElementById('infop' + i);
        if(infoI) infoI.style.display = 'none';
        if(infoP) infoP.style.display = 'none';
    }
}
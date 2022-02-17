const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const registroPorPagina = 40;
let paginaActual= 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){
    e.preventDefault();

    const termino = document.querySelector('#termino').value;

    if(termino === ''){
        
        mostrarAlerta("Agrega un termino de busca")
        return;
    }

    buscarImagenes(termino);
    
}

function mostrarAlerta(mensaje){
    const existeAlerta = document.querySelector('.bg-red-100')
    if(!existeAlerta){
    const alerta = document.createElement('p');
    alerta.classList.add('bg-red-100', 'border-re-400', 'text-red-700', 'px-4','py-3','rounded','max-wlg','mx-auto', 'mt-6','text-center');

    alerta.innerHTML = `<strong class = "font-bold">Error</strong>
                        <span class="block sn:inline">${mensaje}</span>
    `;

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    },2000);

    }
   
}

function buscarImagenes(termino){
    const key = '9418877-923076123dbc1e90c2dd58d13';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=20&page=${paginaActual}`;
    
    

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => {
        const totalPaginas = calcularPaginas(resultado.totalHits);
        console.log(totalPaginas);
            mostrarImagenes(resultado.hits);
        })

}


function calcularPaginas(total){
    return parseInt(Math.ceil(total/ registroPorPagina));
}


function mostrarImagenes(imagenes){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    };
    //Iterar sobre el arreglo y construir sobre el html

    imagenes.forEach( imagen => {
        const {previewURL, likes, largeImageURL,views} = imagen;
        console.log(imagen)

        resultado.innerHTML += `
        <div class = "w-1/2 md:w-1/3 lg:w-1/ p-3 mb-4">
            <div class= "bg-white">
            <img class= "imagen" src = "${previewURL}">

            <div class = "p-4">
                <p class = "font-bold">${likes} <span class = "font-light">Me gusta</span></p>
                <p class = "font-bold">${views} <span class = "font-light">Views</span></p>
                <a href ="${largeImageURL}" target ="_blank" rel="noopener noreferrer">
                Ver Imagen
                </a>
            </div>
            
            </div>
            </div>
        `
    })
}

    const next = document.querySelector('#next');

    next.addEventListener('click', ()=>{
        paginaActual += 1;
        const termino = document.querySelector('#termino').value;
     

        buscarImagenes(termino);



        
    });
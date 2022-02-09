const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

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
let notas = []; /*Guardamos la nota*/

function agregarNota() {
    const notaInput = document.getElementById("notaInput");
    const nuevaNota = notaInput.value.trim();
    
    if (nuevaNota) {
        notas.push({ texto: nuevaNota, editada: false });
        notaInput.value = '';
        mostrarNotas();
    }
}

function mostrarNotas(filtro = '') {
    const notasContainer = document.getElementById("notasContainer");
    notasContainer.innerHTML = '';

    const notasFiltradas = notas.filter(nota => nota.texto.toLowerCase().includes(filtro.toLowerCase()));

    notasFiltradas.forEach((nota, index) => {
        const notaDiv = document.createElement("div");
        notaDiv.className = 'nota' + (nota.editada ? ' editada' : '');
        notaDiv.textContent = nota.texto;

        const editarBtn = document.createElement("button");
        editarBtn.textContent = "Editar";
        editarBtn.onclick = () => editarNota(index);

        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.onclick = () => eliminarNota(index);

        notaDiv.appendChild(editarBtn);
        notaDiv.appendChild(eliminarBtn);
        notasContainer.appendChild(notaDiv);
    });
}

function editarNota(index) {
    const nuevaNota = prompt("Edita tu nota:", notas[index].texto);
    
    if (nuevaNota !== null) {
        notas[index].texto = nuevaNota.trim();
        notas[index].editada = true; /*marcado de la edición*/
        mostrarNotas();
    }
}

function eliminarNota(index) {
    notas.splice(index, 1);
    mostrarNotas();
}

document.getElementById("agregarNota").onclick = agregarNota;

document.getElementById("filtroInput").addEventListener("input", (event) => {
    mostrarNotas(event.target.value);
}); 
document.addEventListener('DOMContentLoaded', async  () => {
	const res = await fetch(`http://localhost:8080/aplicaciones`); //solicitud al servidor
	const datos = await res.json(); //convierte de json a objeto
	let listaHTML = document.querySelector(`#lista-aplicaciones`) //lista de app guardadas
	
    listaHTML.innerHTML = '' //limpio la lista 
	
	datos.forEach(registro => {
		//const aplicacionesHTLM 
        listaHTML.innerHTML += `
        <form method="POST" action="/aplicaciones?_metodo=DELETE" style="display:flex">
		    
			<h4>${registro.Nombre}</h4>
			<h4>${registro.Descricion}</h4>
			<h4>${registro.Precio}</h4>
            <h4>${registro.FechaLanzamiento}</h4>                   

			<input type="hidden" name="idEliminar" value="${registro.id}">
			<h4><button><a href="/modificar/${registro.id}">Modificar</a></h4>
			<h4><input type="submit" value="Eliminar"></h4>
		</form>`;
        //listaHTML.innerHTML+=aplicacionesHTLM;
	})
});
//

/*document.getElementById('app-form').onsubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
        nombre: formData.get('nombre'),
        descripcion: formData.get('descripcion'),
        precio: formData.get('precio'),
        fechaLanzamiento: formData.get('fechaLanzamiento')
    };

    try {
        const response = await fetch('/aplicaciones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result);

        // Recargar la lista de aplicaciones después de agregar una nueva
        document.querySelector('body').onload();
    } catch (error) {
        console.error('Error al guardar la aplicación:', error);
    }
};*/
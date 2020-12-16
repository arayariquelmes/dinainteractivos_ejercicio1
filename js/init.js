

document.querySelector('#registrar-btn').addEventListener('click', ()=>{
    let nombre = document.querySelector('#nombre-txt').value.trim();
    let correo = document.querySelector('#correo-txt').value.trim();
    let tipo = document.querySelector("#tipo-select").value.trim();

    const divContactos = document.querySelector('#contactos-registrados');

    let nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("col-lg-4","col-12","card","mt-3");

    let divTitulo = document.createElement("div");
    divTitulo.classList.add("card-header", "bg-dark","bg-gradient","text-white","text-center");
    divTitulo.innerText = nombre;
    let divCuerpo = document.createElement("div");
    divCuerpo.classList.add("card-body", "text-center");
    let h6Correo = document.createElement("h6");
    h6Correo.innerText = "Correo:" + correo;
    let iconoTipo = document.createElement("i");
    if(tipo == "primario"){
        iconoTipo.classList.add("fas","fa-star","text-warning", "fa-3x");
    }else{
        iconoTipo.classList.add("far","fa-star","fa-3x");
    }
    divCuerpo.appendChild(h6Correo);
    divCuerpo.appendChild(iconoTipo);
    nuevoDiv.appendChild(divTitulo);
    nuevoDiv.appendChild(divCuerpo);

    divContactos.appendChild(nuevoDiv);



});
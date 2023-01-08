const listUsers = async() => {
    const response = await fetch("http://localhost:2325/api/buscar/afiliados/1068672846");
    const users = await response.json();
    let tableBody = ``;
    Object.keys(users).forEach(key => {
        let textFormateado = JSON.stringify(users, null, 2);
        let cuerpoPdf = `<pre>${textFormateado}</pre>`;
        tableBody = tableBody + `<tr>
            <td>${cuerpoPdf}</td>
            </tr>`
    });
    document.getElementById("tablaBodyAfiliados").innerHTML = tableBody;
    };

window.addEventListener("load", function(){
   listUsers();
});
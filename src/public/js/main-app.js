window.addEventListener("load", function () {
    // MOSTRAR PRELOADER MIENTRAS SE REALIZA LA CONSULTA
    $("#preloader-modal").modal("show");

    // CONSULTAR FUENTES
    fetch("/fuentes/todo")
        .then(res => res.json())
        .then(res => {
            // Mostrar resultados por consola
            console.log("%cTasa de cambio USD", "font-size:25px;color:red");
            console.log(res.value.date);
            console.table(res);

            // Ocultar preloader y dar acceso a la tabla de datos
            $("#preloader-modal").modal("hide");

            // Mostrar fecha de consulta
            document.getElementById("fecha-consulta").innerText = res.value.date;

            let bodyTbl = document.querySelector("#monitor-tbl tbody");
            for (let src in res) {
                if (src != "value") {
                    let fuente = res[src];
                    let tr = document.createElement("tr");
                    for (let prop in fuente) {
                        let td = document.createElement("td");
                        td.innerText = fuente[prop];
                        tr.appendChild(td);
                    }
                    bodyTbl.appendChild(tr);
                }

            }

            // Activar datatables
            $(".table").DataTable({
                scrollX: true,
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"
                },
                "order": [
                    [0, "asc"]
                ]
            });

        }).catch(err => {
            this.setTimeout(() => {
                // Ocultar preloader y dar aviso del error
                $("#preloader-modal").modal("hide");

                $("#error-modal").modal("show");

                console.log("HA OCURRIDO UN ERROR: " + err)
            }, 500)
        })

    // ACTUALIZAR PAGINA
    document.getElementById("actuallizar-btn").addEventListener("click", function () {
        window.location.reload();
    })
})

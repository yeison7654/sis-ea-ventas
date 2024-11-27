document.addEventListener("DOMContentLoaded", () => {
  loadTable();
  setTimeout(() => {
    sendData();
    deleteData();
  }, 1000);
});
function loadTable() {
  let table = document.getElementById("table-body");
  let url = base_url + "Logic/categories/read.php";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ocurrio un error inesperado: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      if (data.status) {
        const arrData = data.data;
        let row = "";
        arrData.forEach((element) => {
          row += `<tr>
                    <td>${element.idCategories}</td>
                    <td>${element.c_name}</td>
                    <td>${element.c_description}</td>
                    <td class="form-actions">
                      <button class="btn-info">Actualizar</button> 
                      <button class="btn-danger btn-delete" data-id="${element.idCategories}" >Eliminar</button>
                    </td>
                  </tr>`;
        });
        table.innerHTML = row;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

/*
 *Esta funcion se encagra de enviar la data y registrar o actualizar
 */
function sendData() {
  let dataFormSend = document.getElementById("formSend");
  dataFormSend.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(dataFormSend);
    const encabezados = new Headers();
    const config = {
      method: "POST",
      headers: encabezados,
      node: "cors",
      cache: "no-cache",
      body: data,
    };
    const url = base_url + "Logic/categories/create.php";
    fetch(url, config)
      .then((result) => {
        if (!result.ok) {
          throw new Error("Ocurrio un error inesperado: " + result.status);
        }
        return result.json();
      })
      .then((resData) => {
        if (resData.status) {
          loadTable();
          dataFormSend.reset();
          alert(resData.msg);
          setTimeout(() => {
            deleteData();
          }, 1000);
        } else {
          alert(resData.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
}
/*
 * Esta funcion se encarga de eliminar un registro
 */
function deleteData() {
  let dataBtnDelete = document.querySelectorAll(".btn-delete");
  dataBtnDelete.forEach((itemButton) => {
    itemButton.addEventListener("click", () => {
      const id = itemButton.getAttribute("data-id");
      const data = new FormData();
      //agregando el id
      data.append("txtId", id);
      const encabezados = new Headers();
      const config = {
        method: "POST",
        headers: encabezados,
        node: "cors",
        cache: "no-cache",
        body: data,
      };
      const url = base_url + "Logic/categories/delete.php";
      //Alerta que pregunta si desea eliminar el registro
      if (confirm("Desea eliminar este registro?")) {
        fetch(url, config)
          .then((result) => {
            if (!result.ok) {
              throw new Error("Ocurrio un error inesperado: " + result.status);
            }
            return result.json();
          })
          .then((resData) => {
            if (resData.status) {
              loadTable();
              alert(resData.msg);
              setTimeout(() => {
                deleteData();
              }, 1000);
            } else {
              alert(resData.msg);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  });
}

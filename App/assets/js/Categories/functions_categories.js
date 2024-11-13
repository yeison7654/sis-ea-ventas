document.addEventListener("DOMContentLoaded", () => {
  loadTable();
  sendData();
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
                    <td>Botones</td>
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
        } else {
          alert(resData.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

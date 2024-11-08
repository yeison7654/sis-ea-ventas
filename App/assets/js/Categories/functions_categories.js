document.addEventListener("DOMContentLoaded", () => {
  loadTable();
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

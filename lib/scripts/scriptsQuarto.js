var selectedRow = null

function onFormSubmitQuartos() {
    if (validate()) {
        var formData = readFormDataQuartos();
        if (selectedRow == null)
            insertNewRecordQuartos(formData);
        else
            updateRecordQuartos(formData);
        resetForm();
    }
}

function readFormDataQuartos() {
    var formData = {};
    formData["Nome"] = document.getElementById("Nome").value;
    formData["Descricao"] = document.getElementById("Descricao").value;
    formData["Preco"] = document.getElementById("Preco").value;
    formData["QtdHospedes"] = document.getElementById("QtdHospedes").value;
    formData["QtdCamas"] = document.getElementById("QtdCamas").value;
    formData["Fotos"] = document.getElementById("Fotos").value;
    return formData;
}

function insertNewRecordQuartos(data) {
    var table = document.getElementById("ListaQuartos").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Descricao;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Preco;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.QtdHospedes;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.QtdCamas;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Fotos;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a  type="button" class="btn btn-warning" onClick="onEdit(this)">Editar</a>
                       <a   type="button" class="btn btn-danger" onClick="onDelete(this)">Deletar</a>`;
}

function resetFormQuartos() {
    document.getElementById("Nome").value = "";
    document.getElementById("Descricao").value = "";
    document.getElementById("Preco").value = "";
    document.getElementById("QtdHospedes").value = "";
    document.getElementById("QtdCamas").value = "";
    document.getElementById("Fotos").value = "";
    selectedRow = null;
}

function onEditQuartos(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Descricao").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Preco").value = selectedRow.cells[2].innerHTML;
    document.getElementById("QtdHospedes").value = selectedRow.cells[3].innerHTML;
    document.getElementById("QtdCamas").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Fotos").value = selectedRow.cells[5].innerHTML;
}
function updateRecordQuartos(formData) {
    selectedRow.cells[0].innerHTML = formData.Nome;
    selectedRow.cells[1].innerHTML = formData.Descricao;
    selectedRow.cells[2].innerHTML = formData.Preco;
    selectedRow.cells[3].innerHTML = formData.QtdHospedes;
    selectedRow.cells[4].innerHTML = formData.QtdCamas;
    selectedRow.cells[5].innerHTML = formData.Fotos;
}

function onDeleteQuartos(td) {
    if (confirm('Tem certeza que deseja excluir o hotel? Essa ação não pode ser desfeita')) {
        row = td.parentElement.parentElement;
        document.getElementById("ListaQuartos").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Nome").value == "") {
        isValid = false;
        document.getElementById("NomeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NomeValidationError").classList.contains("hide"))
            document.getElementById("NomeValidationError").classList.add("hide");
    }
    return isValid;
}




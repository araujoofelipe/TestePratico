var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Nome"] = document.getElementById("Nome").value;
    formData["Localizacao"] = document.getElementById("Localizacao").value;
    formData["Sobre"] = document.getElementById("Sobre").value;
    formData["Comodidades"] = document.getElementById("Comodidades").value;
    formData["fotos"] = document.getElementById("Fotos").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("ListaHoteis").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Localizacao;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Sobre;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Comodidades;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Fotos;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a  type="button" class="btn btn-warning" onClick="onEdit(this)">Editar</a>
                       <a   type="button" class="btn btn-danger" onClick="onDelete(this)">Deletar</a>`;
}

function resetForm() {
    document.getElementById("Nome").value = "";
    document.getElementById("Localizacao").value = "";
    document.getElementById("Sobre").value = "";
    document.getElementById("Comodidades").value = "";
    document.getElementById("Fotos").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Localizacao").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Sobre").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Comodidades").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Fotos").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Nome;
    selectedRow.cells[1].innerHTML = formData.Localizacao;
    selectedRow.cells[2].innerHTML = formData.Sobre;
    selectedRow.cells[3].innerHTML = formData.Comodidades;
    selectedRow.cells[4].innerHTML = formData.Fotos;
}

function onDelete(td) {
    if (confirm('Tem certeza que deseja excluir o hotel? Essa ação não pode ser desfeita')) {
        row = td.parentElement.parentElement;
        document.getElementById("ListaHoteis").deleteRow(row.rowIndex);
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




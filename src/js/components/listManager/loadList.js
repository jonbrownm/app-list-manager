
export const loadList = (elementTable) => {

	for (var i = 0; i < localStorage.length; i++){

	    var newRow = elementTable.insertRow(0),
			newCellWithInput = newRow.insertCell(0),
			newCellWithDelete = newRow.insertCell(0),
			newItemId = localStorage.key(i),
			newItemDescription = localStorage.getItem(localStorage.key(i));


		newRow.setAttribute("data-item-id", newItemId, 0);
		newCellWithInput.innerHTML = "<button class='button small secondary app-list-manager_input-delete' data-item-delete>Delete</button>";
		newCellWithDelete.innerHTML = newItemDescription;

	}

}
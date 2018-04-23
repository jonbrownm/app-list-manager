
export const addItemToList = (elementTable, elementUserInput) => {
	
	if (elementUserInput) {

		var newRow = elementTable.insertRow(0),
			newCellWithInput = newRow.insertCell(0),
			newCellWithDelete = newRow.insertCell(0);


		newCellWithInput.innerHTML = "<button class='button small secondary app-list-manager_input-delete'>Delete</button>";
		newCellWithDelete.innerHTML = elementUserInput;

	}

}
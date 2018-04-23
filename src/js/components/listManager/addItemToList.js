
export const addItemToList = (elementTable, elementUserInput) => {
	
	if (elementUserInput) {

		var newRow = elementTable.insertRow(0),
			newCell = newRow.insertCell(0);


		newCell.innerHTML = elementUserInput;

	}

}
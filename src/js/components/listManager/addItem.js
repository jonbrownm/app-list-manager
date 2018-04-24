
import {returnItemId} from './returnItemId';
import {displayNotification} from './displayNotification';

export const addItem = (elementTable, elementUserInput, appNotification) => {
	
	if (elementUserInput) {

		var newRow = elementTable.insertRow(0),
			newCellWithInput = newRow.insertCell(0),
			newCellWithDelete = newRow.insertCell(0),
			newItemId = returnItemId(elementTable);


		newRow.setAttribute("data-item-id", newItemId, 0);
		newCellWithInput.innerHTML = "<button class='button small secondary app-list-manager_input-delete' data-item-delete>Delete</button>";
		newCellWithDelete.innerHTML = elementUserInput;

		localStorage.setItem(newItemId, elementUserInput);

		displayNotification(appNotification, 0, "OFF");
		displayNotification(appNotification, 2, "ON");

	}
	else {
		displayNotification(appNotification, 1, "ON");
	}

}
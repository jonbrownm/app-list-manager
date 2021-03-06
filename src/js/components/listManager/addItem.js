
import {returnItemId} from './returnItemId';
import {displayNotification} from './displayNotification';

export const addItem = (appDataList, elementTable, elementUserInput, appNotification) => {
	
	if (elementUserInput) {

		var newRow = elementTable.insertRow(0),
			newCellWithInput = newRow.insertCell(0),
			newCellWithDelete = newRow.insertCell(0),
			newItemId = returnItemId(elementTable);


		newRow.setAttribute("data-item-id", newItemId, 0);
		newCellWithInput.innerHTML = "<button class='button small secondary app-list-manager_input-delete' data-item-delete>Delete</button>";
		newCellWithDelete.innerHTML = elementUserInput;

		appDataList.push(elementUserInput);
		localStorage.setItem(newItemId, elementUserInput);

		displayNotification(appNotification, 2, "2000");

	}
	
	else {
		displayNotification(appNotification, 1, "2000");
	}

}
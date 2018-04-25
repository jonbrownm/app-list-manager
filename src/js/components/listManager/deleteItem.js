
import {displayNotification} from './displayNotification';

export const deleteItem = (elementUserDelete, appNotification) => {

	var currentTableRows = document.querySelectorAll("[data-app-list-manager] table tbody tr"),
		currentId = elementUserDelete.parentElement.parentElement.getAttribute("data-item-id"),
		currentTableRowId;


	[].forEach.call(currentTableRows, function(row){
		currentTableRowId = row.getAttribute("data-item-id");

		if (currentId === currentTableRowId) {
			row.remove();
			localStorage.removeItem(currentId);
		}
		
	});

	displayNotification(appNotification, 3, "2000");

}
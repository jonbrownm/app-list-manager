
import {displayNotification} from './displayNotification';

export const deleteItem = (appDataList, elementUserDelete, appNotification) => {

	var currentTableRows = document.querySelectorAll("[data-app-list-manager] table tbody tr"),
		currentId = elementUserDelete.parentElement.parentElement.getAttribute("data-item-id"),
		currentTableRowId,
		currentTableRowDescription;


	[].forEach.call(currentTableRows, function(row){
		currentTableRowId = row.getAttribute("data-item-id");
		currentTableRowDescription = row.firstChild.innerHTML;

		if (currentId === currentTableRowId) {
			row.remove();
			localStorage.removeItem(currentId);

			var i = appDataList.indexOf(currentTableRowDescription);
			if(i != -1) {
				appDataList.splice(i, 1);
			}

			// console.log(appDataList)

		}
		
	});

	displayNotification(appNotification, 3, "2000");

}
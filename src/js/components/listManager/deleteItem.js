
export const deleteItem = (elementUserDelete) => {

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

	if (localStorage.length > 0) {
		displayNotification(appNotification, 0, "OFF");
	}
	else {
		displayNotification(appNotification, 0, "ON");		
	}

}
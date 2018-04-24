
export const deleteItem = (elementUserDelete) => {

	var currentTableRows = document.querySelectorAll("[data-app-list-manager] table tbody tr"),
		currentActiveId = elementUserDelete.parentElement.parentElement.getAttribute("data-item-id"),
		currentTableRowId;


	[].forEach.call(currentTableRows, function(row){
		currentTableRowId = row.getAttribute("data-item-id");

		if (currentActiveId === currentTableRowId) {
			row.remove();
		}
		
	});

}
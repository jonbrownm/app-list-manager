
export const appNotification = (appNotificationEmpty, elementTable) => {

	var currentTableRowsLength = elementTable.rows.length;

	
	if (currentTableRowsLength != 0) {
		appNotificationEmpty.style.display = "none";
	}
	else {
		appNotificationEmpty.style.display = "block";		
	}

}
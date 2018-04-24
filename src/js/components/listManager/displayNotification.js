
export const displayNotification = (appNotification, errorMessage, errorState) => {

	var errorMessages = [
		"Your list is empty, please start entering them above.",
		"Please enter a valid entry.",
		"Your entry has been added to the list."
	];


	if (errorState === "ON") {
		appNotification.innerHTML = errorMessages[errorMessage];
		appNotification.style.display = "block";
	}
	else if (errorState === "OFF") {
		appNotification.innerHTML = "";
		appNotification.style.display = "none";
	}

}
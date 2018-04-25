
export const displayNotification = (appNotification, errorMessage, errorState) => {

	var errorMessages = [
		"Your list is empty, please start entering them above.",
		"Please enter a valid entry.",
		"Your entry has been added to the list.",
		"Your entry has been deleted from the list."
	];


	if (errorState === "ON") {
		appNotification.innerHTML = errorMessages[errorMessage];
		appNotification.style.opacity = "1";
	}
	else if (errorState === "OFF") {
		appNotification.innerHTML = "";
		appNotification.style.opacity = "0";
	}
	else {
		appNotification.innerHTML = errorMessages[errorMessage];
		appNotification.style.opacity = "1";

		setTimeout(function(){
			appNotification.innerHTML = errorMessages[errorMessage];
			appNotification.style.opacity = "0";
		}, errorState);

	}

}
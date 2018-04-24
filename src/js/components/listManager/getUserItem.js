
export const getUserItem = (elementUserInput) => {

	var elementUserDataItem = elementUserInput.value;


	elementUserInput.value = "";
	
	return elementUserDataItem;

}
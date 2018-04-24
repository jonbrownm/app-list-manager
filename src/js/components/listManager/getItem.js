
export const getItem = (elementUserInput) => {

	var elementUserDataItem = elementUserInput.value;


	elementUserInput.value = "";
	
	return elementUserDataItem;

}
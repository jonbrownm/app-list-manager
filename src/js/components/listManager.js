import {getUserItem} from './listManager/getUserItem';
import {addItemToList} from './listManager/addItemToList';

const appListManager = document.querySelector("[data-app-list-manager]");

export const listManager = () => {

	// only fire for `appListManager`
	if (appListManager) {

		var elementUserInput = document.querySelector("[data-app-list-manager] input[type='text']"),
			elementUserSubmit = document.querySelector("[data-app-list-manager] input[type='submit']"),
			elementTable = document.querySelector("[data-app-list-manager] table");


		elementUserSubmit.addEventListener("click", function() {
			addItemToList(elementTable, getUserItem(elementUserInput));
		});

		elementUserInput.addEventListener("keyup", function(event) {
			event.preventDefault();
			if (event.keyCode === 13) {
				addItemToList(elementTable, getUserItem(elementUserInput));
			}
		});

	}
	
}
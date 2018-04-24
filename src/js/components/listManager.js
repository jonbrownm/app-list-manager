
import {getItem} from './listManager/getItem';
import {addItem} from './listManager/addItem';
import {deleteItem} from './listManager/deleteItem';

const appListManager = document.querySelector("[data-app-list-manager]");

export const listManager = () => {

	// only fire for `appListManager`
	if (appListManager) {

		var elementUserInput = document.querySelector("[data-app-list-manager] input[type='text']"),
			elementUserSubmit = document.querySelector("[data-app-list-manager] input[type='submit']"),
			elementTable = document.querySelector("[data-app-list-manager] table"),
			elementUserDelete;


		elementUserSubmit.addEventListener("click", function() {
			addItem(elementTable, getItem(elementUserInput));
		});

		elementUserInput.addEventListener("keyup", function(event) {
			event.preventDefault();
			if (event.keyCode === 13) {
				addItem(elementTable, getItem(elementUserInput));
			}
		});

		elementTable.addEventListener("click", function (event) {
			if (event.target.classList.contains("button")) {
				elementUserDelete = event.target;
				deleteItem(elementUserDelete);
			}
		})

	}
	
}
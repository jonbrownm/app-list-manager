
import {loadList} from './listManager/loadList';
import {getItem} from './listManager/getItem';
import {addItem} from './listManager/addItem';
import {deleteItem} from './listManager/deleteItem';

const appListManager = document.querySelector("[data-app-list-manager]");

export const listManager = () => {

	// only fire for `appListManager`
	if (appListManager) {

		var elementUserInput = document.querySelector("[data-app-list-manager] input[type='text']"),
			elementUserSubmit = document.querySelector("[data-app-list-manager] input[type='submit']"),
			elementTable = document.querySelector("[data-app-list-manager] table");


		// fires on page load
		loadList(elementTable);

		// fires on submit click
		elementUserSubmit.addEventListener("click", function() {
			addItem(elementTable, getItem(elementUserInput));
		});

		// fires on enter submit
		elementUserInput.addEventListener("keyup", function(event) {
			event.preventDefault();
			if (event.keyCode === 13) {
				addItem(elementTable, getItem(elementUserInput));
			}
		});

		// fires on delete click
		elementTable.addEventListener("click", function (event) {

			var elementUserDelete;


			if (event.target.hasAttribute("data-item-delete")) {
				elementUserDelete = event.target;
				deleteItem(elementUserDelete);
			}
		})

	}
	
}
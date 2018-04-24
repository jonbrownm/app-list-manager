
import {loadList} from './listManager/loadList';
import {getItem} from './listManager/getItem';
import {addItem} from './listManager/addItem';
import {deleteItem} from './listManager/deleteItem';
import {displayNotification} from './listManager/displayNotification';

const appListManager = document.querySelector("[data-app-list-manager]");

export const listManager = () => {

	// only fire for `appListManager`
	if (appListManager) {

		var appNotification = document.querySelector("[data-app-list-manager] div[data-app-notification]"),
			elementUserInput = document.querySelector("[data-app-list-manager] input[type='text']"),
			elementUserSubmit = document.querySelector("[data-app-list-manager] input[type='submit']"),
			elementTable = document.querySelector("[data-app-list-manager] table");


		// fires on page load
		loadList(elementTable, appNotification);

		// fires on submit click
		elementUserSubmit.addEventListener("click", function() {
			addItem(elementTable, getItem(elementUserInput), appNotification);
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
				deleteItem(elementUserDelete, appNotification);
			}
		})

	}
	
}
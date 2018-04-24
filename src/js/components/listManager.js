
import {loadList} from './listManager/loadList';
import {getItem} from './listManager/getItem';
import {addItem} from './listManager/addItem';
import {deleteItem} from './listManager/deleteItem';
import {appNotification} from './listManager/appNotification';

const appListManager = document.querySelector("[data-app-list-manager]");

export const listManager = () => {

	// only fire for `appListManager`
	if (appListManager) {

		var appNotificationEmpty = document.querySelector("[data-app-list-manager] [data-app-notification]"),
			elementUserInput = document.querySelector("[data-app-list-manager] input[type='text']"),
			elementUserSubmit = document.querySelector("[data-app-list-manager] input[type='submit']"),
			elementTable = document.querySelector("[data-app-list-manager] table"),
			elementUserDelete;


		// fires on page load
		loadList(appNotificationEmpty, elementTable);

		// fires on submit click
		elementUserSubmit.addEventListener("click", function() {
			addItem(elementTable, getItem(elementUserInput));
			appNotification(appNotificationEmpty, elementTable);
		});

		// fires on enter submit
		elementUserInput.addEventListener("keyup", function(event) {
			event.preventDefault();
			if (event.keyCode === 13) {
				addItem(elementTable, getItem(elementUserInput));
				appNotification(appNotificationEmpty, elementTable);
			}
		});

		// fires on delete click
		elementTable.addEventListener("click", function (event) {
			if (event.target.hasAttribute("data-item-delete")) {
				elementUserDelete = event.target;
				deleteItem(elementUserDelete);
				appNotification(appNotificationEmpty, elementTable);
			}
		})

	}
	
}
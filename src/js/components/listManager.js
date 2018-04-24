
import {getItem} from './listManager/getItem';
import {addItem} from './listManager/addItem';

const appListManager = document.querySelector("[data-app-list-manager]");

export const listManager = () => {

	// only fire for `appListManager`
	if (appListManager) {

		var elementUserInput = document.querySelector("[data-app-list-manager] input[type='text']"),
			elementUserSubmit = document.querySelector("[data-app-list-manager] input[type='submit']"),
			elementUserDelete = document.querySelectorAll("[data-app-list-manager] button[data-item-delete]"),
			elementTable = document.querySelector("[data-app-list-manager] table");


		elementUserSubmit.addEventListener("click", function() {
			addItem(elementTable, getItem(elementUserInput));
		});

		elementUserInput.addEventListener("keyup", function(event) {
			event.preventDefault();
			if (event.keyCode === 13) {
				addItem(elementTable, getItem(elementUserInput));
			}
		});

		[].forEach.call(elementUserDelete, function(button) {
			button.addEventListener("click", function() {
				console.log("hello");
			});
		});

	}
	
}
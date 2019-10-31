
Feature('The Search Input field');

let url = "https://google.com/";

let inputField = "div.RNNXgb";


Scenario('If the Search Input field is available', (I) => {
	I.amOnPage(url);

	I.wait();

	I.seeInCurrentUrl("google");
	I.seeElement(inputField);

});

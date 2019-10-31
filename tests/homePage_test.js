
Feature('The Search Input field');

let url = "https://google.com/";

let inputField = "div.RNNXgb";


Scenario('test something', (I) => {
	I.amOnPage(url);
	I.seeInCurrentUrl("google");
	I.seeElement(inputField);

});

import { element, by } from 'protractor';

export class SearchFormPage {

    constructor() {}

    get input() {
        return element(by.id('query'));
    };

    get searchBtn() {
        return element(by.css('button'));
    };

    get firstCharacterNameText() {
        return element(by.css('app-character h6')).getAttribute('innerText');
    };
};

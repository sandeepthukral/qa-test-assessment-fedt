import { element, by } from 'protractor';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.use(chaiAsPromised).expect;
export class SearchFormPage {

    constructor() {}

    get input() {
        return element(by.id('query'));
    };

    get searchBtn() {
        return element(by.css('button'));
    };

    get elementCardResults() {
        return element.all(by.css('[data-testid=character-card]'))
    }

    nthCharacterResult(index) {
        return this.elementCardResults.get(index);
    }

    nthCharacterName(index) {
        return this.nthCharacterResult(index).element(by.css('[data-testid=character-name]'));
    };
    
    nthCharacterGender(index) {
        return this.nthCharacterResult(index).element(by.css('[data-testid=gender-value]'));
    };
    
    nthCharacterBirthYear(index) {
        return this.nthCharacterResult(index).element(by.css('[data-testid=birth-year-value]'));
    };

    nthCharacterEyeColor(index) {
        return this.nthCharacterResult(index).element(by.css('[data-testid=eye-color-value]'));
    };

    nthCharacterSkinColor(index) {
        return this.nthCharacterResult(index).element(by.css('[data-testid=skin-color-value]'));
    };

    async verifyDetailsForNthCharacter(index, name, gender, birthYear, eyeColor, skinColor) {
        await expect(this.nthCharacterName(index).getAttribute('innerText')).to.eventually.equal(name);
        await expect(this.nthCharacterGender(index).getAttribute('innerText')).to.eventually.equal(gender);
        await expect(this.nthCharacterBirthYear(index).getAttribute('innerText')).to.eventually.equal(birthYear);
        await expect(this.nthCharacterEyeColor(index).getAttribute('innerText')).to.eventually.equal(eyeColor);
        await expect(this.nthCharacterSkinColor(index).getAttribute('innerText')).to.eventually.equal(skinColor);
    }
};

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

    get firstCharacterName() {
        return element(by.css('[data-testid=character-name]'));
    };
    
    get firstCharacterGender() {
        return element(by.css('[data-testid=gender-value]'));
    };
    
    get firstCharacterBirthYear() {
        return element(by.css('[data-testid=birth-year-value]'));
    };

    get firstCharacterEyeColor() {
        return element(by.css('[data-testid=eye-color-value]'));
    };

    get firstCharacterSkinColor() {
        return element(by.css('[data-testid=skin-color-value]'));
    };

    async verifyDetailsForFirstCharacter(name, gender, birthYear, eyeColor, skinColor) {
        await expect(this.firstCharacterName.getAttribute('innerText')).to.eventually.equal(name);
        await expect(this.firstCharacterGender.getAttribute('innerText')).to.eventually.equal(gender);
        await expect(this.firstCharacterEyeColor.getAttribute('innerText')).to.eventually.equal(birthYear);
        await expect(this.firstCharacterEyeColor.getAttribute('innerText')).to.eventually.equal(eyeColor);
        await expect(this.firstCharacterSkinColor.getAttribute('innerText')).to.eventually.equal(skinColor);
    }
};

import { element, by } from 'protractor';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.use(chaiAsPromised).expect;
export class SearchFormPage {

    constructor() {}

    get searchCard() {
        return element(by.css('[data-testid=search-card]'));
    }

    get input() {
        return element(by.id('query'));
    }

    get searchButton() {
        return element(by.css('[data-testid=search-button]'));
    }

    get noSearchResults() {
        return element(by.css('[data-testid=no-result]'));
    }

    get radioButtonPeople() {
        return element(by.id('people'));
    }

    get radioButtonPlanetLabel() {
        return element(by.css('[for=planets]'));
    }

    get detailsCards() {
        return element.all(by.css('[data-testid*=details-card-]'));
    }

    nthCharacterResult(index) {
        return this.detailsCards.get(index);
    }

    nthDetailsCard(index) {
        return this.detailsCards.get(index);
    }

    nthPlanetName(index) {
        return this.nthDetailsCard(index).element(by.css('[data-testId=planet-name]'));
    }

    nthPlanetPopulation(index) {
        return this.nthDetailsCard(index).element(by.css('[data-testid=population-value]'));
    }

    nthPlanetClimate(index) {
        return this.nthDetailsCard(index).element(by.css('[data-testid=climate-value]'));
    }

    nthPlanetGravity(index) {
        return this.nthDetailsCard(index).element(by.css('[data-testId=gravity-value]'));
    }

    nthCharacterName(index) {
        return this.nthCharacterResult(index).element(by.css('[data-testid=character-name]'));
    }

    nthCharacterGender(index) {
        return this.nthCharacterResult(index).element(by.css('[data-testid=gender-value]'));
    }

    nthCharacterBirthYear(index) {
        return this.nthCharacterResult(index).element(by.css('[data-testid=birth-year-value]'));
    }

    nthCharacterEyeColor(index) {
        return this.nthCharacterResult(index).element(by.css('[data-testid=eye-color-value]'));
    }

    nthCharacterSkinColor(index) {
        return this.nthCharacterResult(index).element(by.css('[data-testid=skin-color-value]'));
    }

    async verifyDetailsForNthCharacter(index, name, gender, birthYear, eyeColor, skinColor) {
        await expect(this.nthCharacterName(index).getAttribute('innerText')).to.eventually.equal(name);
        await expect(this.nthCharacterGender(index).getAttribute('innerText')).to.eventually.equal(gender);
        await expect(this.nthCharacterBirthYear(index).getAttribute('innerText')).to.eventually.equal(birthYear);
        await expect(this.nthCharacterEyeColor(index).getAttribute('innerText')).to.eventually.equal(eyeColor);
        await expect(this.nthCharacterSkinColor(index).getAttribute('innerText')).to.eventually.equal(skinColor);
    }

    async verifyDetailsForNthPlanet(index, name, population, climate, gravity) {
        await expect(this.nthPlanetName(index).getAttribute('innerText')).to.eventually.equal(name);
        await expect(this.nthPlanetPopulation(index).getAttribute('innerText')).to.eventually.equal(population);
        await expect(this.nthPlanetClimate(index).getAttribute('innerText')).to.eventually.equal(climate);
        await expect(this.nthPlanetGravity(index).getAttribute('innerText')).to.eventually.equal(gravity);
    }
}

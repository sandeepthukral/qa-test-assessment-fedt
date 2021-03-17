import { expect } from 'chai';
import { Given, When, Then, TableDefinition } from 'cucumber';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';
const chai = require('chai');
chai.use(require('chai-as-promised'));

import {SearchFormPage} from '../page-objects/search-form.po';
const searchFormPO = new SearchFormPage();

Given('I visit the application search page', { timeout: 60 * 1000 }, async () => {
    await browser.get(browser.baseUrl);
    await chai.expect(searchFormPO.searchButton.isDisplayed()).to.eventually.equal(true);
});

When('I search for text', { timeout: 60 * 1000 }, async (data: TableDefinition) => {
    const rows = data.hashes();
    await searchFormPO.input.sendKeys(rows[0].text);
    await searchFormPO.searchButton.click();
});

When('I search for text and press enter', { timeout: 60 * 1000 }, async (data: TableDefinition) => {
    const rows = data.hashes();
    await searchFormPO.input.sendKeys(rows[0].text);
    await searchFormPO.input.sendKeys(protractor.Key.ENTER);
});

When('I search for planet with text', async(data: TableDefinition) => {
    searchFormPO.radioButtonPlanetLabel.click();
    const rows = data.hashes();
    await searchFormPO.input.sendKeys(rows[0].text);
    await searchFormPO.searchButton.click();
});

Then('I should see the search component rendered correctly', async() => {
    await expect(searchFormPO.searchCard.isDisplayed()).to.eventually.equal(true);
    await expect(searchFormPO.radioButtonPeople.isSelected()).to.eventually.equal(true);
    await expect(searchFormPO.searchButton.isDisplayed()).to.eventually.equal(true);
    await expect(searchFormPO.searchButton.isEnabled()).to.eventually.equal(true);
});

Then('I should see the person details', { timeout: 60 * 1000 }, async (table: TableDefinition) => {
    await expect(searchFormPO.detailsCards.get(0).isDisplayed()).to.eventually.equal(true);
    const rows = table.hashes();
    let index = 0;
    for (const { name, gender, birthYear, eyeColor, skinColor} of rows) {
        await(searchFormPO.verifyDetailsForNthCharacter(index, name, gender, birthYear, eyeColor, skinColor));
        index = index + 1;
    }
});

Then('I should see the planet details', { timeout: 60 * 1000 }, async (table: TableDefinition) => {
    await expect(searchFormPO.detailsCards.get(0).isDisplayed()).to.eventually.equal(true);
    const rows = table.hashes();
    let index = 0;
    for (const { name, population, climate, gravity} of rows) {
        await(searchFormPO.verifyDetailsForNthPlanet(index, name, population, climate, gravity));
        index = index + 1;
    }
});

Then('I should see no results found', async () => {
    await expect(searchFormPO.noSearchResults.isDisplayed()).to.eventually.equal(true);
});

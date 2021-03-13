import { expect } from 'chai';
import { Given, When, Then, TableDefinition } from 'cucumber';
const { browser } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

import {SearchFormPage} from '../page-objects/search-form.po';
const searchFormPO = new SearchFormPage();

Given('I navigate to {string}', { timeout: 60 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await chai.expect(searchFormPO.searchBtn.isDisplayed()).to.eventually.equal(true);
});

When('I search for text', { timeout: 60 * 1000 }, async (data: TableDefinition) => {
    const rows = data.hashes();
    await searchFormPO.input.sendKeys(rows[0].text);
    await searchFormPO.searchBtn.click();
});

Then('I should see the person details', { timeout: 60 * 1000 }, async (table: TableDefinition) => {
    await expect(searchFormPO.elementCardResults.get(0).isDisplayed()).to.eventually.equal(true);
    const rows = table.hashes();
    let index = 0
    for (let { name, gender, birthYear, eyeColor, skinColor} of rows) {
        await(searchFormPO.verifyDetailsForNthCharacter(index, name, gender, birthYear, eyeColor, skinColor))    
        index = index + 1
    }
});

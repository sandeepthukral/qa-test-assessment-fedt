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

When(/I search for ([^"]*)/, { timeout: 60 * 1000 }, async (variable: string, data) => {
    await searchFormPO.input.sendKeys(data.rawTable[0][1]);
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});

Then('I see the person details', { timeout: 60 * 1000 }, async (table: TableDefinition) => {
    const rows = table.hashes();
    rows.map(async ({name, gender, birthYear, eyeColor, skinColor}) => {
        await searchFormPO.verifyDetailsForFirstCharacter(name, gender, birthYear, eyeColor, skinColor);
    })
});

import { expect, browser, $ } from '@wdio/globals';

import loginPage from '../core/login.page.js';
import { gitElements } from '../core/locators.js';
import CreateFile from '../core/createfile.page.js';
import UploadFile from '../core/uploadfile.page.js';
import allureReporter from '@wdio/allure-reporter';


describe('My First Test', () => {
    beforeEach(async () => {
        await loginPage.performlogin();
        await gitElements.Header.waitForDisplayed({ timeout: 3000 })
        await expect(await gitElements.Header).toHaveTextContaining('Dashboard');
        await loginPage.openRepo('test1');
        await expect(await gitElements.repotitle('test1').isDisplayed()).toBe(true)
    });

    afterEach(async () => {
        await loginPage.logout();
        await gitElements.h1.isDisplayed()//.toBe(true)--нужно ли это уточнять? - не работает
        await expect(await gitElements.h1.isDisplayed()).toBe(true)
    })

    it('Create file', async () => {
        const fileName = await CreateFile.addfile();
        await gitElements.PullreqTab.click();
        // console.log('===>>> searching fileName: ', fileName);
        await gitElements.firstFile.waitUntil(async function () {
            return await this.getText();
        }, {
            timeout: 5000,
        })

        let itemsArray = [];
        const allFileElems = await gitElements.allFiles;
        console.log('===>>> gitElements.allFiles: ', allFileElems.length);

        for await (const elem of allFileElems) {
            const fileName = await elem.getText();
            itemsArray.push(fileName);
        }
        console.log('===>>> itemsArray: ', itemsArray);
        expect(itemsArray.includes(fileName)).toBe(true);

    })

    it('Upload file', async () => {
        await UploadFile.uploadfile();
        await gitElements.PullreqTab.click();
        await gitElements.firstFile.waitUntil(async function () {
            return await this.getText();
        }, {
            timeout: 5000,
        })
        //await expect(await gitElements.uploaded('screenwdio.png').isDisplayed()).toBe(true)//?? падает
        await expect(await gitElements.uploaded('screenwdio.png').isDisplayed())

    })
})
import { expect, browser, $ } from '@wdio/globals';

import { gitElements } from '../core/locators.js';
import { filePath } from '../testData/filepath.js'



export class UploadFile {
    async uploadfile() {
        
        await gitElements.Creatbtn.click();
        await gitElements.Uploadbtn.click();
        await gitElements.h2btn.waitForExist({ timeout: 50000 })
        await expect(gitElements.h2btn).toHaveText('Drag files here to add them to your repository');
        const remoutfilePath = await browser.uploadFile(filePath);
        await gitElements.Choosefilebtn.setValue(remoutfilePath);
        await browser.pause(10000);
        //await gitElements.CommitChbtn.waitForExist({ timeout: 50000 })
        await gitElements.CommitChbtn.click()


    }
}

export default new UploadFile();
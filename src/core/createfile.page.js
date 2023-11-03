import { expect, browser, $ } from '@wdio/globals';

import { gitElements } from '../core/locators.js';

import { getFileMeta } from '../utils/randomGenerator.js';



class CreateFile {
    async addfile() {
        await gitElements.Creatbtn.click();
        await gitElements.Addnewbtn.click();
        const { fileName, fileBody } = getFileMeta(); //декомпозиция
        await gitElements.FileNameinput.setValue(fileName);
        await gitElements.TextArea.setValue(fileBody);
        await gitElements.CommitChangesbtn1.click();
        await expect(gitElements.CommitMessage).toHaveValueContaining(fileName);
        await gitElements.CreateNewBranchBTN.click();
        await gitElements.ProposeChangesBtn.click();
        await gitElements.CreatePullReqBtn.waitForExist({ timeout: 50000 })
        await gitElements.CreatePullReqBtn.click();
        await gitElements.MergePullReqBtn.waitForClickable({ timeout: 50000 });
        await gitElements.MergePullReqBtn.click()
        await gitElements.ConfirmMergeBtn.waitForClickable({ timeout: 50000 });
        await gitElements.ConfirmMergeBtn.click()
        await gitElements.DeleteBtv.click()
        return fileName;
    }
    
}

export default new CreateFile();
import { expect, browser, $ } from '@wdio/globals';

import { gitElements } from '../core/locators.js';
import { gitURL } from '../testData/gitData.js';

class LoginPage {
    async performlogin() {
        await browser.url(gitURL)
        await gitElements.userName.setValue(process.env.GIT_USER);
        await gitElements.password.setValue(process.env.GIT_PASSWORD);
        await gitElements.SignBtn.waitForClickable({ timeout: 50000 });
        await gitElements.SignBtn.click();
        // await gitElements.Header.waitForDisplayed();
        await gitElements.Header.waitForExist({ timeout: 50000 })

    }

    async openRepo(repoName) {
        await $(`.dashboard-sidebar .wb-break-word [href="/${process.env.GIT_PROFILE_NAME}/${repoName}"]`).click();
    }

    async logout() {
        await gitElements.ProfileMenuBtn.click();
        await browser.pause(500);
        // await gitElements.ProfileMenuBtn.scrollIntoView()
        await gitElements.SignOutBtn.scrollIntoView()
        // await gitElements.SignOutBtn.waitForClickable({ timeout: 50000 });
        await gitElements.SignOutBtn.click();
        await gitElements.lastSignoutBtn.click();
        //await expect(gitElementsitElements.h1).isDisplayed().toBe(true)

    }
}

export default new LoginPage();
export const gitElements = {
    get userName() { return $('#login_field'); },
    get password() { return $('#password'); },
    get SignBtn() { return $('.js-sign-in-button'); },
    get Header() { return $('.AppHeader-context-item-label') },


    selectRepo(repoName) { return $(`.dashboard-sidebar .wb-break-word [href="/${process.env.GIT_PROFILE_NAME}/${repoName}"]`); },
    repotitle(repoName) { return $(`.wb-break-word [href="/${process.env.GIT_PROFILE_NAME}/${repoName}"]`) },

    // get ProfileMenuBtn() { return $('.Button-label .avatar') },
    get ProfileMenuBtn() { return $('button[aria-label="Open user account menu"]') },
    get SignOutBtn(){ return $('//a/span[contains(text(),"Sign out")]')},
    get lastSignoutBtn(){return $('.mt-5[value="Sign out"]')},
    get h1(){return $('.h0-mktg')},



    get Creatbtn() { return $('//summary/span[contains(text(),"Add file")]') },
    get Addnewbtn() { return $('.dropdown-item[type="submit"]'); },
    get TextArea() { return $('.cm-content') },
    get FileNameinput() { return $('.cDLBls[type="text"]') },
    get CommitMessage() { return $('.kUFFVQ input') },
    get CommitChangesbtn1() { return $('.cnECWi button') },
    get CommitChangesbtn() { return $('.idglPc :nth-child(2)') },
    //get CreateNewBranchBTN(){ return $ ('//div/label[contains(text(),"Create a ")]')},
    get CreateNewBranchBTN() { return $(' .jTavlD .YAQWy[aria-checked="false"]') },

    get ProposeChangesBtn() { return $('.idglPc :nth-child(2)') },
    get CreatePullReqBtn() { return $('//button/span[contains(text(),"Create pull request")]') },
    get MergePullReqBtn() { return $('.btn-group-merge[aria-expanded="false"]') },
    get ConfirmMergeBtn() { return $('.js-merge-commit-button[value="merge"]') },
    get DeleteBtv() { return $('.post-merge-message button') },
    get PullreqTab() { return $('//a/span[contains(text(),"test1")]') },
    //returntoRepoBtn(repoName) {return $(`//a/span[contains(text(),"${repoName}"]`)},  не работает селектор(
    // get allFiles() { return $$('.col-md-2 .d-block .Link--primary') }
    get allFiles() { return $$('[role="rowheader"]') },
    get firstFile() { return $('[role="rowheader"]') },


    get Uploadbtn() { return $('//li/a[contains(text(),"Upload files")]') },
    get h2btn() { return $('.initial-text') },
    get Choosefilebtn() { return $('#upload-manifest-files-input') },
    get CommitChbtn() { return $('.js-blob-submit') },
    uploaded(upfilename) { return $(`[title="${upfilename}"]`) },
}


module.exports = {
    "testing": browser => {
        const loginPage = browser.page.loginPage()
 
        loginPage
            .navigate()
            .waitForElementPresent('@user', "帳號欄位OK")
            .waitForElementPresent('@password','密碼欄位OK')
            .waitForElementPresent('@login_btn', '密碼按鈕OK')
            .setValue('@user','zzz')
            .setValue('@password','zzz')
            .click('@login_btn')

        browser.pause(4000)

    }
}
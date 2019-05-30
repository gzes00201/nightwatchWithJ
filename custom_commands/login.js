exports.command = function (){
    const myLoginPage = this.page.loginPage()
    myLoginPage
        .navigate()
        .waitForElementPresent('@user',3000)
        .setValue('@user','zzz')
        .waitForElementPresent('@password',3000)
        .setValue('@password','zzz')
        .click('@login_btn')
        .waitForElementPresent('@account_page', 5000,'登入帳戶管理頁')
        .click('@login_to_lobby')
        .waitForElementPresent('.mainArea',10000,'登入大廳')
        
    return this;
}
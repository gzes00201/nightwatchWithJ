module.exports = {
    "@tags":['login'],
    before : () => {
        console.log('開始登入...')
    },
    "登入至大廳": browser => {
        const loginPage = browser.page.loginPage()
 
        loginPage
            .navigate()
            .waitForElementPresent('@1user', '帳號欄位ok')
            .waitForElementPresent('@password', '密碼欄位ok')
            .waitForElementPresent('@login_btn', '登入按鈕ok')
            .login()

            .waitForElementPresent('@account_page', '進入會員管理頁')
            .waitForElementPresent('@login_to_lobby', '登入in彩票ok')
            .click('@login_to_lobby')

            .waitForElementPresent('body', 4000)
     },
    "開啟遊戲": browser => {
        const lobby = browser.page.lobby();
        lobby.expect.section('@hotgames').to.be.visible
        
        const hotgames = lobby.section.hotgames;
            hotgames
                .openGame('@hotgame1')
                .openGame('@hotgame2')
                .openGame('@hotgame3')
                .openGame('@hotgame4')

    },   
    "關閉當前遊戲": browser => {
        browser.waitForElementPresent('#app > div.lobby > div.mainArea > div.mainArea-content > div > div.tabs.has-less > div.btn-tab.is-active > span > button')
        .click('#app > div.lobby > div.mainArea > div.mainArea-content > div > div.tabs.has-less > div.btn-tab.is-active > span > button')
        .pause(2888)
    }
}

module.exports = {
    
    "login": browser => {
        browser.login()
    },
    "check game open": browser => {
        const game = browser.page.lobby()
        game
            .waitForElementPresent('@hotgame', 'game found')
            
            .getText('#app > div.lobby > div.mainArea > div.mainArea-content > div > div:nth-child(3) > div.mainBox-container.lobby-cardBox.lobby-cardHot > div:nth-child(1) > div.card-infoBox > div.card-info > div.card-name',res => {
                browser.assert.equal(res.value, '北京快樂 8')
            })

            .click('@hotgame')
            .waitForElementPresent('#app > div.lobby > div.mainArea > div.mainArea-content > div > div.panel > div.gameInfo > div.gameInfo-current > div.gameInfo-title')
            .getText('#app > div.lobby > div.mainArea > div.mainArea-content > div > div.panel > div.gameInfo > div.gameInfo-current > div.gameInfo-title', res => {
                browser.assert.equal(res.value, "北京快樂 8")
            })
    },
}   
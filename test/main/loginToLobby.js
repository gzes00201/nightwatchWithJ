
module.exports = {
    "testing": browser => {
        browser
        .url('http://google.com')
        .waitForElementPresent('#fbar > div > div > div > span')
        .pause(2888)
        .end()
    }
}

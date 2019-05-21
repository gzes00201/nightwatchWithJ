
module.exports = {
    "testing": browser => {
        browser
        .url('https://ahab.inlottodev.com/')
        .waitForElementPresent('#userName')
        // .waitForElementPresent('.a',1000,'not found')
        .end()
    }
}

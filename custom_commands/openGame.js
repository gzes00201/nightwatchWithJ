exports.command = function (btn){
    const lobby = this.page.lobby()
    let  gameName = null

    this.getText(btn, result => { gameName = result.value })
        .pause(1000)
        .click(btn)
        .pause(1000)

    lobby.getText('@gameTitle',res => {
        this.assert.equal(`-${res.value}`, gameName, `${gameName}成功開啟`)
    })

    return this;
}
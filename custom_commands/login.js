exports.command = function (){
    const myLoginPage = this.page.loginPage()
    myLoginPage
        .setValue('@user','zzz')
        .setValue('@password','zzz')
        .click('@login_btn')
      
        return this;
}
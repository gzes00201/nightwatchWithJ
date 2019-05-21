const loginCommands = {
    submit: function() {

        return this.setValue('@user', 'zzz')
                    .setValue('@password', 'zzz')
                    .click('@login_btn')
    }
}

module.exports = {
    url: function () {
        return this.api.launchUrl;
      },
    elements: {  
        login_btn: {
            selector: '#btn1'
        },
        user: {
            selector: '#userName',
        },
        password: {
            selector: '#password'
        },
        account_page: {
            selector: '.account'
        },
        login_to_lobby: {
            selector: '#login_ianus'
        }
        
    },
    commands: [loginCommands],
    
  };
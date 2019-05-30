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
};
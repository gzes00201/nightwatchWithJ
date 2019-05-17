module.exports = {
    elements: {
        gameTitle: '#app > div.lobby > div.mainArea > div.mainArea-content > div > div.panel > div.gameInfo > div.gameInfo-current > div.gameInfo-title',
        currentTabCloseBtn: '#app > div.lobby > div.mainArea > div.mainArea-content > div > div.tabs.has-less > div.btn-tab.is-active > span > button'
    },
    sections: {
        hotgames: {
            selector: '#app > div.lobby > div.sideBar > div.sideBar-menu > div.sideBar-menuItem.sideBar-menuItem-hot.has-icon.is-active > div.sideBar-subMenu',            
            elements:{
                hotgame1: '#app > div.lobby > div.sideBar > div.sideBar-menu > div.sideBar-menuItem.sideBar-menuItem-hot.has-icon.is-active > div.sideBar-subMenu > div:nth-child(1)',
                hotgame2: '#app > div.lobby > div.sideBar > div.sideBar-menu > div.sideBar-menuItem.sideBar-menuItem-hot.has-icon.is-active > div.sideBar-subMenu > div:nth-child(2)',
                hotgame3: '#app > div.lobby > div.sideBar > div.sideBar-menu > div.sideBar-menuItem.sideBar-menuItem-hot.has-icon.is-active > div.sideBar-subMenu > div:nth-child(3)',
                hotgame4: '#app > div.lobby > div.sideBar > div.sideBar-menu > div.sideBar-menuItem.sideBar-menuItem-hot.has-icon.is-active > div.sideBar-subMenu > div:nth-child(4)',
                hotgame5: '#app > div.lobby > div.sideBar > div.sideBar-menu > div.sideBar-menuItem.sideBar-menuItem-hot.has-icon.is-active > div.sideBar-subMenu > div:nth-child(5)',
            },
        },
        // mainArea: {
        //     selector: '.#app > div.lobby > div.mainArea > div.mainArea-content',
        //     elements: {
        //         gameTitle: '#app > div.lobby > div.mainArea > div.mainArea-content > div > div.panel > div.gameInfo > div.gameInfo-current > div.gameInfo-title',
        //         gameNo: '#app > div.lobby > div.mainArea > div.mainArea-content > div > div.panel > div.gameInfo > div.gameInfo-current > div.gameInfo-num',
        //         timer: '#app > div.lobby > div.mainArea > div.mainArea-content > div > div.panel > div.gameInfo > div.gameInfo-current > div.gameInfo-time',
        //     },
        // }
    }
}
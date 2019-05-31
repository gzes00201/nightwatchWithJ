const PKG = require('./package.json');
const GLOBALS = './globals.js';
const url = require('./env/url.js');
const seleniumServer = require('selenium-server');
// const chromedriver = require('.bin/chromedriver');
// const firefoxdriver = require('./bin/');

const config = {
  "src_folders": ["test"],
  "output_folder": "./reports",
  "reporter": 'globals.reporter',
  "custom_commands_path": './custom_commands',
  'custom_assertions_path': '',
  "page_objects_path": './page_objects',
  "globals_path": GLOBALS,
  "selenium": {
    "start_process": false,
    "server_path": seleniumServer.path,
    "log_path": "",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": "./bin/chromedriver",
      "webdriver.firefox.driver":"./bin/geckodriver"
    }
  },
  "live_output": true,
  "test_workers" : {
    "enabled": false,
    "workers": "auto"
  },
  "test_settings": {
    "default": {
        "launch_url": 'https://ahab.inlottodev.com/',
        "selenium_port": 4444,
        "selenium_host": "localhost",
        "silent": true,
        "globals": {
          "waitForConditionTimeout": 10000,
          "url": url.index,
          "rtContext": {}
        },
        "desiredCapabilities" : {
            "browserName" : "chrome",
            "javascriptEnabled" : true,
            "acceptSslCerts" : true,
          }
      },
    "firefox": {
        "desiredCapabilities": {
            "browserName": "firefox",
            "javascriptEnabled": true,
            "acceptSslCerts": true
        }
    },
  }
}

module.exports = config;

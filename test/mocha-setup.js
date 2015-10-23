'use strict';

/*
 * This file is required by the mocha-test grunt task.  This should contain
 * things that need to be done for every test file
 */

var
    chai = require('chai'),
    sauceAccessKey = process.env.SAUCE_ACCESS_KEY || '',
    sauceUsername = process.env.SAUCE_USERNAME || '',
    util = require('util');


/* Selenium and SauceLabs */

global.capabilities = {
    browserName: 'chrome',
    version: '31',
    platform: 'Windows 8.1',
    name: util.format('Test run by %s', process.env.USER),
    username: sauceUsername,
    accessKey: sauceAccessKey
};

global.seleniumHost = 'http://'+ sauceUsername +':'+ sauceAccessKey+'@ondemand.saucelabs.com:80/wd/hub';


/* include stack trace on test failure or not */
chai.config.includeStack = false;


/* required globals */
global.webdriver = require('selenium-webdriver');
global.expect = chai.expect;
global.should = chai.should();

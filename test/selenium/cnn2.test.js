/* jshint mocha: true */
/* global capabilities, expect, seleniumHost, webdriver */
'use strict';


var caps = {
    browserName: 'firefox',
    version: '41.0',
    platform: 'OS X 10.10',
    name: 'TEST 2',
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY
};

var driver = new webdriver.Builder().usingServer(seleniumHost).withCapabilities(caps).build(),
    url = 'http://www.cnn.com';

describe('The CNN', function () {

    before(function (done) {
        driver.get(url).then(done);
    });


    describe('page', function (done) {
        it('is expected to have a title that contians CNN', function (done) {
            driver.getTitle().then(function (title) {
                expect(title).to.contain('CNN');
                done();
            });
        });
    });


    after(function (done) {
        driver.quit().then(done);
    });
});

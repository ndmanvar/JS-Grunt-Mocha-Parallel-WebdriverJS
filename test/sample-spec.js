var assert = require('assert'),
    webdriver = require('selenium-webdriver'),
    makeSuite = require('./helpers').makeSuite;

makeSuite('Google Search 1', function() {
  
  it('1', function() {
    driver.get('http://google.com');

    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('webdriver');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'webdriver');
    });
  });

});

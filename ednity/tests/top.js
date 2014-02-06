
module.exports = {
  'Top Page Test' : function (client) {
    client
      .url("http://www.ednity.com")
      .waitForElementVisible('body', 1000)
      .assert.title('ednity')
      .end();
  }
}

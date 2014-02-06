
module.exports = {
  setUp : function() {
    console.log("test start");
  },

  tearDown : function() {
    console.log("test end");
  },
  'Login Test' : function (client) {
    client
      .url("http://www.ednity.com")
      .assert.title('ednity')
      .waitForElementVisible('#login-btn', 1000)
      .click('#login-btn')
      .waitForElementVisible('#userUsername', 2000)
      .setValue('#userUsername', 'taro@gmail.com')
      .setValue('#userPassword', 'hogefuga0101')
      .waitForElementVisible('#login-form button', 2000)
      .click('#login-form button')
      .waitForElementVisible('#login-form div', 2000)
      .end();
  }
}

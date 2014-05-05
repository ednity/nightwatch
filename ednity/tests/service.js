
module.exports = {
  setUp : function() {
    console.log("test start");
  },
  tearDown : function() {
    console.log("test end");
  },
  'Login' : function(client) {
    client
      .url("http://www.ednity.com")
      .assert.title('ednity（エドニティ）｜生徒の可能性を引き出す学校向けSNS')
      .waitForElementVisible('#login-btn', 1000)
      .click('#login-btn')
      .waitForElementVisible('#userUsername', 2000)
      .setValue('#userUsername', 'taro@gmail.com')
      .setValue('#userPassword', 'hogefuga0101')
      .waitForElementVisible('#login-form button', 2000)
      .click('#login-form button')
      .waitForElementVisible('#login-form div', 2000)
  },
  'Comment' : function (client) {
    client
      .waitForElementVisible('.comment-form:first-child', 10000)
      .setValue('.comment-form:first-child', 'test comment')
      .click('.comment-form:first-child')
  },
  'Post' : function (client) {
    client
      .waitForElementVisible('.post-textarea-wrap textarea', 10000)
      .setValue('.post-textarea-wrap textarea', 'test post')
      .click('#main .post-button')
  }
}

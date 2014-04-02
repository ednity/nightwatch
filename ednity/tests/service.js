
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
      .assert.title('ednity')
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
      .waitForElementVisible('#main .comment-form', 10000)
      .setValue('#main .comment-form', 'test comment')
      .click('#main .comment-form')
      .waitForElementVisible('#main .comment-btn', 10000)
      .click('#main .comment-btn')
  },
  'Post' : function (client) {
    client
      .waitForElementVisible('.post-textarea-wrap textarea', 10000)
      .setValue('.post-textarea-wrap textarea', 'test post')
      .click('#main .post-button')
  },
  'Notification' : function (client) {
    client
      .click('#notification-icon')
      .waitForElementVisible('.notification-balloon div', 10000)
      .end()
  }
}

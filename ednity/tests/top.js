
module.exports = {
  'Top Page Test' : function (client) {
    client
      .url("http://www.ednity.com")
      .waitForElementVisible('body', 1000)
      .assert.title('ednity（エドニティ）｜生徒の可能性を引き出す学校向けSNS')
      .end();
  }
}

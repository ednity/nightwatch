
module.exports = {
  setUp : function() {
    console.log("test start");
    console.log(process.env.TARGET_URL);
    if (typeof(process.env.TARGET_URL) == 'undefined') {
      console.log("TARGET_URLが定義されていません");
    }
  },
  tearDown : function() {
    console.log("test end");
  },
  'Top Page Test' : function (client) {
    client
      .url("http://www.ednity.com")
      .waitForElementVisible('body', 1000)
      .assert.title('ednity（エドニティ）｜生徒の可能性を引き出す学校向けSNS')
      .end();
  }
}


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
      .waitForElementVisible('.main-sign-up-btn', 1000)
      .click('.main-sign-up-btn')
      .waitForElementVisible('#signup_teacher_form', 2000)
      .setValue('#UserLastname', 'tanaka')
      .setValue('#UserFirstname', 'taro')
      .click('#UserGenderMale')
      .setValue('#UserEmail', 'taro@gmail.com')
      .setValue('#UserPlainPassword', 'hogefuga0101')
      .setValue('#UserSchool', 'hogefuga0101')
      .setValue('#UserPhone', '8989898998989')
      .click('#teacher-term')
      .click('#teacher-submit')
      .end();
  }
}

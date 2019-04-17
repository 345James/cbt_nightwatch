this.toDos = function (browser) {
  browser
    .url('http://localhost:8080/')
    .waitForElementVisible('#test', 30000)
    .expect.element('#test').text.to.equal('Welcome to Your Vue.js App');
};
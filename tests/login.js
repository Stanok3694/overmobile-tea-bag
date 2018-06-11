module.exports = {
    'login into mpets.mobi by test_account_1' : function (client) {
        client.url('http://mpets.mobi/').pause(1000);
        client.expect.element('body').to.be.present.before(1000);
        // login action:
        client
            .setValue('input[name=name]', "")
            .setValue('input[name=password]', "")
            .click('input[value=Войти]')

        client.expect.element('span').to.have.attribute('class').which.contains('ava_stat');
        client.end();
    }
  };
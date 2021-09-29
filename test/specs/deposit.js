import LoginPage from '../pages/login-page'
import Wallet from '../pages/wallet-page'
import allureReporter from '@wdio/allure-reporter';
import logindata from '../data/login-data'

describe('Scenario 1', function () {
  var runs = [ 'btc', 'eth', 'bch' , 'dai', 'xrp', 'mana'];

  before(async () => {
    await LoginPage.open();
    await LoginPage.btnCookies();
    await LoginPage.login(logindata.username, logindata.password);
    await expect(LoginPage.walletMessage).toExist();
    console.log('User is able to Login');
  });
  afterEach(async () => {
    await Wallet.visitWallet();
    console.log('User is able to Navigate to Wallet');
  });

  runs.forEach(function (run) {
    it('Scenario for: ' + run, async () => {
      allureReporter.addFeature("Deposit");
      allureReporter.addSeverity("critical");
      //Select Currency
      await Wallet.selectCurrency(run)
      console.log(`User is able to click on ${run}`);
      //Click on deposit
      await Wallet.clickDeposit();
      console.log(`User is able to click on Deposit for ${run}`);
      //Validation
      await expect(Wallet.alertMessage).toExist();
      await expect(Wallet.alertMessage).toHaveTextContaining(Wallet.errorMessage);
      console.log(`Validation Error is displayed as: " ${await Wallet.alertMessage.getText()}"`);
    });
  });
});
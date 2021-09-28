import LoginPage from '../pages/login-page'
import Beneficiaries from '../pages/beneficiaries-page'
import allureReporter from '@wdio/allure-reporter';
import logindata from '../data/login-data'

describe('Scenario 2', () => {

  before(async () => {
    await browser.maximizeWindow();
    await LoginPage.open();
    await LoginPage.login(logindata.username, logindata.password);
    console.log('User is able to Login');
  });

    it('Login, Add Beneficiaries, Add Invalid PIN and Validate Incorrect PIN error', async () => {
      allureReporter.addFeature("Beneficiaries");
      allureReporter.addSeverity("normal");
      //Navigate to /r/user/beneficiaries/
      await Beneficiaries.visitBeneficiariesPage();
      console.log('User is able to Navigate to Beneficiaries Page');
      //Click on Add Its not needed since the form appears as soon as you visit the page. This will only happen if you navigate following the links on the page instead of passing the url
      //await Beneficiaries.clickAdd(); 
      //Provide random data on Name, Last name, Second last name, birthday,kinship, benefit percentage and Enter an invalid PIN
      await Beneficiaries.addBeneficiary();
       //Verify Incorrect PIN error
      await expect(Beneficiaries.pinAlertMessage).toExist();
      await expect(Beneficiaries.pinAlertMessage).toHaveTextContaining(['Incorrect PIN', 'PIN locked. Too many attempts, try again in 15 minutes.']);
      console.log(`User is able to see error: ${await Beneficiaries.pinAlertMessage.getText()}`);
    });
  });
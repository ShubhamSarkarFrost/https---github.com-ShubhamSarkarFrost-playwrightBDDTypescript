import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import OrangeHrmPage from '../../pages/orangeHrmPage';
import { fixture } from '../../hooks/pageFixture';

setDefaultTimeout(60 * 1000 * 2);
let orangeHrmPage: OrangeHrmPage;

Given('User navigate to Orange HCM Login Page', async function () {
  orangeHrmPage = new OrangeHrmPage(fixture.page);
  await orangeHrmPage.navigateToOrangeHRMPage();
});

When(
  'User Enter the username as {string}',
  async function (loginUsername: string) {
    await orangeHrmPage.enterUsername(loginUsername);
  }
);

When(
  'User Enters the password as {string}',
  async function (loginPassword: string) {
    await orangeHrmPage.enterPassword(loginPassword);
  }
);

When('User clicks on submit button in Login Page', async function () {
  await orangeHrmPage.clickSubmitButton();
});

Then('I verify user is navigated to HRM Main Page', async function () {
  await orangeHrmPage.validateHRMLogo();
});

When('I click on Admin Button from Orange HRM side menu', async function () {
  await orangeHrmPage.clickAdminButton();
});

When('I click on Add user button from User Management', async function () {
  await orangeHrmPage.clickAddUserButton();
});

When('I select users role as {string}', async function (userRole:string) {
    await orangeHrmPage.selectUserRole(userRole);
})

When('I select users role status as {string}', async function (roleStatus:string) {
    await orangeHrmPage.selectStatus(roleStatus);
})

When('I enter role for {string} in User Management', async function (UsersName:string) {
    await orangeHrmPage.selectRoleForUser(UsersName);
})



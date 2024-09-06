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

When('I select users role as {string}', async function (userRole: string) {
  await orangeHrmPage.selectUserRole(userRole);
});

When(
  'I select users role status as {string}',
  async function (roleStatus: string) {
    await orangeHrmPage.selectStatus(roleStatus);
  }
);

When(
  'I enter role for {string} in User Management',
  async function (UsersName: string) {
    await orangeHrmPage.selectRoleForUser(UsersName);
  }
);

When(
  'I enter usersname as {string} in Username textbox',
  async function (NameOfUser: string) {
    const randomUserName = `${NameOfUser}_${Math.floor(Math.random() * (100 - 1 + 1)) + 1}`;
    await orangeHrmPage.enterUsersNameinUserManagement(randomUserName);
  }
);

When('I enter the password as {string}', async function (password: string) {
  await orangeHrmPage.enterUsersPassword(password);
});

When(
  'I reconfirm the password as {string}',
  async function (reconfirmPassword: string) {
    await orangeHrmPage.reconfirmUsersPassword(reconfirmPassword);
  }
);

When('I click on save button', async function () {
  await orangeHrmPage.clickOnSaveButton();
});

When('User waits for {string} seconds', async function (timeout: string) {
  await orangeHrmPage.sleepForTime(timeout);
});

Then('User verifies that they are back to add users Page', async function () {
  await orangeHrmPage.verifyAddButtonVisible();
});

When('I search the created user using the username entered', async function () {
  await orangeHrmPage.searchTheCreatedUserName();
});

Then('I verify whether the User is Created', async function () {
  await orangeHrmPage.verifyUserCreated();
});

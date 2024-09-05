import { expect, Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';
import { fixture } from '../hooks/pageFixture';
import config = require('../../config.json'); // Import the JSON config file

export default class OrangeHrmPage {
  private base: PlaywrightWrapper;
  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private orangeHrmPageElements = {
    loginusername: "//input[@name='username']",
    loginpasswird: "//input[@name='password']",
    loginbutton: "//button[contains(@class,'orangehrm-login-button')]",
    orangeHrmLogo: "//img[@alt='client brand banner']",
    adminSideBarOption: "//span[text()='Admin']",
    addUserButton: "//button[normalize-space()='Add']",
  };

  async navigateToOrangeHRMPage() {
    await this.base.goto(config.OrangeHRMUrl);
  }

  async enterUsername(Username: string) {
    await this.page
      .locator(this.orangeHrmPageElements.loginusername)
      .waitFor({ state: 'visible', timeout: 60000 });
    await this.page.locator(this.orangeHrmPageElements.loginusername).clear();
    await this.page.fill(this.orangeHrmPageElements.loginusername, Username);
  }

  async enterPassword(Password: string) {
    await this.page
      .locator(this.orangeHrmPageElements.loginpasswird)
      .waitFor({ state: 'visible', timeout: 30000 });
    await this.page.locator(this.orangeHrmPageElements.loginpasswird).clear();
    await this.page.fill(this.orangeHrmPageElements.loginpasswird, Password);
  }

  async clickSubmitButton() {
    await this.page
      .locator(this.orangeHrmPageElements.loginbutton)
      .waitFor({ state: 'visible', timeout: 30000 });
    await this.page.locator(this.orangeHrmPageElements.loginbutton).isVisible();
    await this.page.locator(this.orangeHrmPageElements.loginbutton).isEnabled();
    await this.page
      .locator(this.orangeHrmPageElements.loginbutton)
      .scrollIntoViewIfNeeded();
    await this.page.locator(this.orangeHrmPageElements.loginbutton).click();
  }

  async validateHRMLogo() {
    await this.page
      .locator(this.orangeHrmPageElements.orangeHrmLogo)
      .waitFor({ state: 'visible', timeout: 30000 });
    await expect(
      this.page.locator(this.orangeHrmPageElements.orangeHrmLogo)
    ).toHaveAttribute('src', '/web/images/orangehrm-logo.png?v=1721393199309');
  }
  async clickAdminButton() {
    await this.page
      .locator(this.orangeHrmPageElements.adminSideBarOption)
      .waitFor({ state: 'visible', timeout: 60000 });
    await this.page
      .locator(this.orangeHrmPageElements.adminSideBarOption)
      .scrollIntoViewIfNeeded();
    await this.page
      .locator(this.orangeHrmPageElements.adminSideBarOption)
      .click();
  }

  async clickAddUserButton() {
    await this.page
      .locator(this.orangeHrmPageElements.addUserButton)
      .waitFor({ state: 'visible', timeout: 60000 });
    await this.page
      .locator(this.orangeHrmPageElements.addUserButton)
      .scrollIntoViewIfNeeded();
    await this.page.locator(this.orangeHrmPageElements.addUserButton).click();
  }
}

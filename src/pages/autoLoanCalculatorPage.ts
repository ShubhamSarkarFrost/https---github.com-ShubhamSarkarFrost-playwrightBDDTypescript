import { expect, Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';
import { fixture } from '../hooks/pageFixture';
import config = require('../../config.json'); // Import the JSON config file

export default class AutoLoanCalculatorPage {
  private base: PlaywrightWrapper;
  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private loanCalculatorPageElements = {
    autoprice: "//input[@id='csaleprice']",
    loanterm: "//input[@id='cloanterm']",
    interestrate: "//input[@id='cinterestrate']",
    cashincentive: "//input[@id='cincentive']",
    downpayment: "//input[@id='cdownpayment']",
    tradeinValue: "//input[@id='ctradeinvalue']",
    amountOwed: "//input[@id='ctradeinowned']",
    yourState: "//select[@name='cstate']",
    salesTax: "//input[@id='csaletax']",
    misllaneous: "//input[@id='ctitlereg']",
    submitbutton: "//input[@name='x']",
    monthlypayresult: "//h2[@class='h2result']",
  };

  async navigateToLoanCalculatorPage() {
    await this.base.goto(config.LoanCalculatorbaseURL);
  }

  async enterLoanDetails(
    AutoPrice: string,
    LoanTerm: string,
    InterestRate: string,
    CashIncentive: string,
    downPayment: string,
    tradeInValue: string,
    amountowed: string,
    yourstate: string,
    salestax: string,
    misLlaneous: string
  ) {
    await this.page.locator(this.loanCalculatorPageElements.autoprice).clear();
    await this.page.fill(this.loanCalculatorPageElements.autoprice, AutoPrice);
    await this.page.locator(this.loanCalculatorPageElements.loanterm).clear();
    await this.page.fill(this.loanCalculatorPageElements.loanterm, LoanTerm);
    await this.page
      .locator(this.loanCalculatorPageElements.interestrate)
      .clear();
    await this.page.fill(
      this.loanCalculatorPageElements.interestrate,
      InterestRate
    );
    await this.page
      .locator(this.loanCalculatorPageElements.cashincentive)
      .clear();
    await this.page.fill(
      this.loanCalculatorPageElements.cashincentive,
      CashIncentive
    );
    await this.page
      .locator(this.loanCalculatorPageElements.downpayment)
      .clear();
    await this.page.fill(
      this.loanCalculatorPageElements.downpayment,
      downPayment
    );
    await this.page
      .locator(this.loanCalculatorPageElements.tradeinValue)
      .clear();
    await this.page.fill(
      this.loanCalculatorPageElements.tradeinValue,
      tradeInValue
    );
    await this.page.locator(this.loanCalculatorPageElements.amountOwed).clear();
    await this.page.fill(
      this.loanCalculatorPageElements.amountOwed,
      amountowed
    );
    await this.page
      .locator(this.loanCalculatorPageElements.yourState)
      .selectOption(yourstate);
    await this.page.locator(this.loanCalculatorPageElements.salesTax).clear();
    await this.page.fill(this.loanCalculatorPageElements.salesTax, salestax);
    await this.page
      .locator(this.loanCalculatorPageElements.misllaneous)
      .clear();
    await this.page.fill(
      this.loanCalculatorPageElements.misllaneous,
      misLlaneous
    );
  }

  async clickSubmitBtn() {
    await expect(
      this.page.locator(this.loanCalculatorPageElements.submitbutton)
    ).toBeEnabled();
    await this.page
      .locator(this.loanCalculatorPageElements.submitbutton)
      .click();
  }

  async checkMonthlyPayMatches(monthlyPay: string) {
    await fixture.page.waitForLoadState();
    fixture.logger.info('Waiting for 2 seconds');
    await fixture.page.waitForTimeout(2000);
    await expect(
      this.page.locator(this.loanCalculatorPageElements.monthlypayresult)
    ).toContainText(monthlyPay);
  }
}

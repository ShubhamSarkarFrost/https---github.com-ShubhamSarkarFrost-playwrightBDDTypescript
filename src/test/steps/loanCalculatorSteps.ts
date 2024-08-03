import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import AutoLoanCalculatorPage from "../../pages/autoLoanCalculatorPage";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";

setDefaultTimeout(60 * 1000 * 2)

let autoLoanCalculatorPage: AutoLoanCalculatorPage;
let assert: Assert;

Given('I navigate to the auto loan calculation website', async function () {
    autoLoanCalculatorPage = new AutoLoanCalculatorPage(fixture.page);
    assert = new Assert(fixture.page);
    await autoLoanCalculatorPage.navigateToLoanCalculatorPage();
  });

When('User enter the autoprice as {string} loanterm as {string} interestrate as {string} cashincentive as {string} downpayment as {string} tradein as {string} amountowed as {string} userstate as {string} tax as {string} and othertax as {string}', async function (
    autoprice:string,loanterm:string,interestrate:string,cashincentive:string,downpayment:string,tradein:string,amountowed:string,userstate:string,tax:string,othertax:string
) {
    await autoLoanCalculatorPage.enterLoanDetails(autoprice,loanterm,interestrate,cashincentive,downpayment,tradein,amountowed,userstate,tax,othertax);
})

Then('I verify monthly pay should be {string}', async function(monthlyPay) {
    await autoLoanCalculatorPage.checkMonthlyPayMatches(monthlyPay);
    
})
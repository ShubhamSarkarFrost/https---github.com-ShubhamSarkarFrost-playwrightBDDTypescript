Feature: Check Various Loan Amount based on Input 


 Scenario Outline: As a User i want to Check Various Loan amount 
    Given I navigate to the auto loan calculation website
    When User enter the autoprice as "<autoprice>" loanterm as "<loanterm>" interestrate as "<interestrate>" cashincentive as "<cashincentive>" downpayment as "<downpayment>" tradein as "<tradeinvalue>" amountowed as "<amountowed>" userstate as "<userstate>" tax as "<salestax>" and othertax as "<misllaneous>"
    Then I verify monthly pay should be "<monthlypay>"

    Examples:
      | autoprice | loanterm  | interestrate | cashincentive | downpayment | tradeinvalue | amountowed | userstate | salestax | misllaneous | monthlypay |
      | 10000     |   6       | 5            | 1000          | 100         | 10           | 10         | AL        |    7      | 2000       | 1,505.04   |
      | 10000     |   6       | 5            | 1500          | 100         | 10           | 10         | AL        |    7      | 2000       | $1,420.49  |
      | 10000     |   6       | 5            | 2000          | 100         | 10           | 10         | AL        |    7      | 2000       | $1,335.93  |
      | 10000     |   6       | 5            | 2500          | 100         | 10           | 10         | AL        |    7      | 2000       | $1,251.38  |
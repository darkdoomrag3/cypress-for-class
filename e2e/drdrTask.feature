Feature: End to End for drdr

    application regression

    Scenario: Check title, insert RAD into username input and select option 2
    Given I open task page
    When  I open the page and check title
    When I write my name which is RAD into input
    Then Select option 2


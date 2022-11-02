# mobileReact-codecept-appium

Enable Allure

Run tests with allure plugin enabled:

npx codeceptjs run --plugins allure

By default, allure reports are saved to output directory. Launch Allure server and see the report like on a screenshot above:

allure serve output
Allure reporter aggregates data from other plugins like stepByStepReport and screenshotOnFail

Allure reports can also be generated for dry-run command. So you can get the first report with no tests actually being executed. Enable allure plugin in dry-run options, and pass --debug option to print all tests on screen.

npx codeceptjs dry-run --debug -p allure
/** @type {CodeceptJS.MainConfig} */

exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Appium: {
      platform: "Android",
      device: "emulator",
      app: __dirname + "\\apk\\Android-MyDemoApp.apk",
      desiredCapabilities: {
        platformName: "Android",
        // app: ".Android-MyDemoApp.apk",
        automationName: "Appium",
      },
    },
  },
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    reportportal: {
      enabled: true,
      require: "@reportportal/agent-js-codecept",
      token: process.env["REPORT_PORTAL_TOKEN"],
      endpoint: "http://localhost:8080/api/v1",
      launchName: "default_TEST_EXAMPLE",
      projectName: "default_personal",
    },
  },
  include: {
    I: "./steps_file.js",
    sidebarPage: "./pages/sidebarPage.js",
    mainPage: "./pages/mainPage.js",
    loginPage: "./pages/loginPage.js",
  },
  name: "mobileReact-codecept-appium",
};

// eslint-disable-next-line no-undef
const reportPortal = codeceptjs.container.plugins("reportportal");

Feature("Authentication");

Scenario(
  "Guest can login to app",
  async ({ I, mainPage, sidebarPage, loginPage, loginStep }) => {
    reportPortal.addLog({
      level: "INFO",
      message: "Guest running the app, open sidebar and go to login tab",
    });
    loginStep.validUser();

    mainPage.openSidebar();
    sidebarPage.openLogin();

    loginPage.authorizedUserShouldSeeEmptyCart();
  }
);

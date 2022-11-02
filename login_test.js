const reportPortal = codeceptjs.container.plugins("reportportal");

Feature("Authentication");

Scenario(
  "Guest can login to app",
  async ({ I, mainPage, sidebarPage, loginPage }) => {
    reportPortal.addLog({
      level: "INFO",
      message: "Guest running the app, open sidebar and go to login tab",
    });

    mainPage.openSidebar();
    sidebarPage.openLogin();
    await loginPage.typeValidAuthData();
  }
);

const { I, mainPage, sidebarPage, loginPage } = inject();

module.exports = {
  validUser() {
    mainPage.openSidebar();
    sidebarPage.openLogin();
    loginPage.enterValidUserData();
  },
};

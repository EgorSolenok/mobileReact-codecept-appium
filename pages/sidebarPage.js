const { I } = inject();

module.exports = {
  CATALOG_BUTTON: "~menu item catalog",
  WEBVIEW_BUTTON: "~menu item webview",
  QR_CODE_BUTTON: "~menu item qr code scanner",
  GEO_LOCATION_BUTTON: "~menu item geo location",
  DRAWING_BUTTON: "~menu item drawing",
  FINGER_BUTTON: "~menu item biometrics",
  LOGIN_BUTTON: "~menu item log in",
  LOGOUT_BUTTON: "~menu item log out",
  VIDEO_BUTTON: "~menu item sauce bot video",

  openCatalog() {
    I.click(this.CATALOG_BUTTON);
  },

  openWebview() {
    I.click(this.WEBVIEW_BUTTON);
  },

  openQrCodeButton() {
    I.click(this.QR_CODE_BUTTON);
  },

  openGeoLocation() {
    I.click(this.GEO_LOCATION_BUTTON);
  },

  openDrawing() {
    I.click(this.DRAWING_BUTTON);
  },

  openFingerprint() {
    I.click(this.FINGER_BUTTON);
  },

  openLogin() {
    I.click(this.LOGIN_BUTTON);
  },
  openLogout() {
    I.click(this.LOGOUT_BUTTON);
  },
  openVideo() {
    I.click(this.LOGOUT_BUTTON);
  },
};

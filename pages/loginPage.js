const { I } = inject();

module.exports = {
  FIELDS: {
    USERNAME: "~Username input field",
    PASSWORD: "~Password input field",
  },
  LOGIN_BUTTON: "~Login button",
  VALID_USERNAME: "~bob@example.com-autofill",
  INVALID_USERNAME: "~alice@example.com (locked out)-autofill",
  VALID_PASSWORD: "~login screen",

  async getValidUsername() {
    I.waitForVisible(this.VALID_USERNAME);
    return await I.grabTextFrom(this.VALID_USERNAME);
  },
  async getInvalidUsername() {
    I.waitForVisible(this.VALID_USERNAME);
    return await I.grabTextFrom(this.INVALID_USERNAME);
  },
  async getValidPassword() {
    I.waitForVisible(this.VALID_PASSWORD);
    return await I.grabTextFrom(this.VALID_PASSWORD);
  },
  async typeValidAuthData() {
    // TODO: implement getData methods
    // const username = await this.getValidUsername()
    // const password = await this.getValidPassword()
    const username = 'bob@example.com'
    const password = '10203040'
    I.fillField(this.FIELDS.USERNAME, username);
    I.fillField(this.FIELDS.PASSWORD, password);
  },
};

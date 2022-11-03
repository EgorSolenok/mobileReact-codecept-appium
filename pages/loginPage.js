const { I } = inject();

module.exports = {
  FIELDS: {
    USERNAME: "~Username input field",
    PASSWORD: "~Password input field",
  },
  LOGIN_BUTTON: "~Login button",
  VALID_USERNAME: "~bob@example.com-autofill",
  INVALID_USERNAME: "alice@example.com (locked out)-autofill",
  VALID_PASSWORD: "//*[@content-desc='~login screen']",
  CART_HEADER: "//*[@content-desc=\"container header\"]",
  CART_SCREEN: "//*[@content-desc=\"cart screen\"]",
  GO_SHOPPING_BUTTON: "//*[@content-desc=\"Go Shopping button\"]",

  enterValidUserData() {
    I.click(this.VALID_USERNAME);
    I.click(this.LOGIN_BUTTON);
  },

  enterInvalidUserData() {
    I.click(this.INVALID_USERNAME);
    I.click(this.LOGIN_BUTTON);
  },

  authorizedUserShouldSeeEmptyCart() {
    I.dontSee(this.FIELDS.USERNAME);
    I.dontSee(this.FIELDS.PASSWORD);

    I.seeElement(this.GO_SHOPPING_BUTTON);
    I.see("No Items", locate(undefined).inside(this.CART_HEADER));
    I.see(
      "Oh no! Your cart is empty. Fill it up with swag to complete your purchase.",
      locate(undefined).inside(this.CART_SCREEN)
    );
  },
};

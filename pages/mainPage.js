const { I } = inject();

module.exports = {
  sidebarButton: "~open menu",
  cartButton: "~cart badge",

  openSidebar() {
    I.click(this.sidebarButton);
  },

  openCart() {
    I.click(this.cartButton);
  },
};

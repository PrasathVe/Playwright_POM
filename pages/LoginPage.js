exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = "#login2";
    this.userNameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButton = '//button[normalize-space()="Log in"]';
    this.welcomeMessage = "#nameofuser";
  }
  async movetoLoginPage() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }
  async checkLoginSucess(username, password) {
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.userNameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
    await this.page.locator();
  }
};

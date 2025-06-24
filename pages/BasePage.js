import { expect } from '@playwright/test';
import environments from '../config/environments';


class BasePage {
  constructor(page) {
    this.page = page;
    this.env = process.env.ENV || 'dev';
  }

   async navigate(url) {
    await this.page.goto(environments[this.env].baseUrl );
  }

  async close() {
    await this.page.close();
  }
}
export default BasePage;
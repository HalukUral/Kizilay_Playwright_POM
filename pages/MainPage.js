import BasePage from './BasePage.js';


class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.pageTitle = 'Türk Kızılay | Bağış Yap';
    this.SKBagisPart = '//h3[text()="Su Kuyusu Bağışları"]';
  }
  async getTitle() {
    return await browser.getTitle();
  }
}
export default MainPage;
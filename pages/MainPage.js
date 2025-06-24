import BasePage from './BasePage.js';


class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.pageTitle = 'Türk Kızılay | Bağış Yap';
    this.BagisButton = 'a.btn-danger[href="/tr/bagis/bagiskategorisel/25/su-kuyusu-bagislari"]';
    
    }
  async getTitle() {
    return await browser.getTitle();
  }
}
export default MainPage;
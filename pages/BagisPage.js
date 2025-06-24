
import MainPage from './MainPage.js';

class BagisPage extends MainPage {
  constructor(page) {
    super(page);
    this.pageTitle = 'Türk Kızılay | Su Kuyusu Bağışları';
    this.BagisButton1 = 'a.btn.btn-danger.w-50.ms-1';
    this.title = '//h3[text()="BAĞIŞ KATEGORİLERİ"]';
    }

  async getTitle() {
    return await browser.getTitle();
  }
}
export default BagisPage;
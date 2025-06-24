import BagisPage from "./BagisPage";


class BagisInfoPage extends BagisPage {
  constructor(page) {
    super(page);
    this.bagisInput = page.locator('#inpBagisTutar');
    this.woMember = page.locator('#tab2');
    this.ad = page.locator('#inpAd2');
    this.soyad = page.locator('#inpSoyad2');
    this.email = page.locator('#inpEposta2');
    this.telefon = page.locator('xpath=//input[@id="inpGsmNo2"]');
    this.tcVtc = page.locator('#inpTcVatandasiDegilim');    
    this.title = '//h3[text()="BAĞIŞ KATEGORİLERİ"]';
    this.kvkkCheckbox = page.locator('#kvkkFormContainer input[type="checkbox"]');
    this.hizliBagisButton = page.locator('button.btn-primary:has-text("Hızlı Bağış")');
    this.amountDisplay = page.locator('span.fs-4.text-primary.ms-1');

    }

    async enterBagisTutar(bagis) {
    await this.bagisInput.fill(bagis);
  }
  
  async enterInfo(ad, soyad, email, telefon, bagisTutar) {
    await this.enterBagisTutar(bagisTutar);
    await this.woMember.click();
    await this.ad.fill(ad);
    await this.soyad.fill(soyad);
    await this.email.fill(email);
    await this.telefon.fill(telefon);
    await this.tcVtc.check();
    
  }

  async acceptKVKK() {
    await this.kvkkCheckbox.check();
  }

} 
module.exports = BagisInfoPage;
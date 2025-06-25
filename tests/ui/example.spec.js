
import { test, expect } from '@playwright/test';
import environments from '../../config/environments';

import MainPage from '../../pages/MainPage';
import BagisPage from '../../pages/BagisPage';
import BagisInfoPage from '../../pages/BagisInfoPage';

let mainPage;
let bagisPage;
let bagisInfoPage;  

test.beforeEach(async ({ page }, testInfo) => {
  testInfo.setTimeout(60000);  
  await page.goto(environments.dev.baseUrl);
});

/*
test('has title', async ({ page }) => {
 await expect(page).toHaveTitle('Türk Kızılay | Bağış Yap');
});

test('BagisButton', async ({ page }) => {
  mainPage= new MainPage(page)
  await page.locator(mainPage.BagisButton).click();
  await expect(page).toHaveURL(/su-kuyusu-bagislari/);
}); 
*/

test('Hızlı Bağış Sayfasına Geçiş-Pozitif Senaryo', async ({ page }) => {

  bagisPage = new BagisPage(page);
  mainPage= new MainPage(page);
  bagisInfoPage = new BagisInfoPage(page);

  await page.locator(mainPage.SKBagisPart).click();
  await expect(page.locator(bagisPage.title)).toBeVisible();
  await page.locator(bagisPage.BagisButton1).click();
  await expect(page).toHaveURL(/su-kuyusu-genel-bagisi/);

  await bagisInfoPage.enterInfo('Ayşe', 'Tur', 'haluk@gmail.com', '5551234000', '100');

  await bagisInfoPage.acceptKVKK();
  await expect(bagisInfoPage.amountDisplay).toContainText('100');
  await bagisInfoPage.hizliBagisButton.click();
  await expect(page).toHaveURL(/odeme/, { timeout: 15000 });
});
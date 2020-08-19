export default class HomePage{
    async visit(){
        await page.goto("http://zero.webappsecurity.com/index.html");
        await page.waitForSelector('#nav');
    }

    async isNavbarDisplayed(){
        await page.waitForSelector('#pages-nav');
        await page.waitForSelector('#homeMenu');
        await page.waitForSelector('#onlineBankingMenu');
        await page.waitForSelector('#feedback');       
    }

    async clickHomepageLinks(){
        await page.click('#homeMenu');
    }

    async clickOnlineBankingLink(){
        await page.click('#onlineBankingMenu');        
    }

    async clickFeedbackLink(){
        await page.click('#feedback');        
    }
}

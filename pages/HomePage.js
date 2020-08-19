export default class HomePage{
    async visit(){
        await page.goto("http://zero.webappsecurity.com/index.html");
        await page.waitForSelector('#nav');
    }

    async isNavbarDisplayed(){
        await page.waitForSelector('#pages-nav');
        await page.waitForSelector('#homeMenu');
        await page.waitForSelector('#onlineBakingMenu');
        await page.waitForSelector('#feedback');       
    }
}

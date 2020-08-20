import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

import TopBar from '../pages/components/TopBar';

describe('Example Test', () => {
    let homePage;
    let loginPage;
    let topbar;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homePage = new HomePage();
        loginPage = new LoginPage();
        topbar = new TopBar();
    });

    it('Homepage should work', async () => {
        await homePage.visit();
    });

    it('Navbar should be displayed', async () => {
        await homePage.isNavbarDisplayed();
        await topbar.isTopBarDisplayed();
    });

    it('Try to login', async() => {
        await loginPage.visit();
        await loginPage.isLoginFormDisplayed();
        await loginPage.login("abc", "123");
        await loginPage.wait(5000);
    });

});

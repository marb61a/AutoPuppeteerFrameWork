import HomePage from '../pages/HomePage';
import TopBar from '../pages/components/TopBar';

describe('Example Test', () => {
    let homePage;
    let topbar;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homePage = new HomePage();
        topbar = new TopBar();
    });

    it('Homepage should work', async () => {
        await homePage.visit();
    });

    it('Navbar should be displayed', async () => {
        await homePage.isNavbarDisplayed();
        await topbar.isTopBarDisplayed();
    });
});

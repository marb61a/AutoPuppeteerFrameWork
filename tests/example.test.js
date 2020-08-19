import HomePage from '../pages/HomePage';

describe('Example Test', () => {
    let homePage;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homePage = new HomePage();
    });

    it('Homepage should work', async () => {
        await homePage.visit();
    });

    it('Navbar should be displayed', async () => {
        await homePage.isNavbarDisplayed();
    });
});

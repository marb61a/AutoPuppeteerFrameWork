import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import FeedbackPage from '../pages/FeedbackPage';

import TopBar from '../pages/components/TopBar';

describe('End to End Test', () => {
    let homePage;
    let loginPage;
    let feedbackPage;
    let topbar;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homePage = new HomePage();
        loginPage = new LoginPage();
        feedbackPage = new FeedbackPage();
        topbar = new TopBar();
    });

    it('Should load homepage', async() => {
        await homePage.visit();
        homePage.isNavbarDisplayed();
    });

    it('Should submit feedback', () => {
        await homePage.clickFeedbackLink();
        
    });

});

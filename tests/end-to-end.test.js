import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import FeedbackPage from '../pages/FeedbackPage';

import TopBar from '../pages/components/TopBar';

import { username, password, timeout } from '../config';

describe('End to End Test', () => {
    let homePage;
    let loginPage;
    let feedbackPage;
    let topbar;

    beforeAll(async () => {
        jest.setTimeout(timeout);
        homePage = new HomePage();
        loginPage = new LoginPage();
        feedbackPage = new FeedbackPage();
        topbar = new TopBar();
    });

    it('Should load homepage', async() => {
        await homePage.visit();
        await homePage.isNavbarDisplayed();
    });

    it('Should submit feedback', async () => {
        await homePage.clickFeedbackLink();
        await feedbackPage.isFeedbackFormDisplayed();
        await feedbackPage.submitFeedback("Joe Bloggs", "joe@example.com", "subject", "This is a comment");
    });

    it('Should login to application', async() => {
        await homePage.visit();
        await topbar.isTopBarDisplayed();
        await topbar.clickSigninButton();
        await loginPage.isLoginFormDisplayed();
        await loginPage.login(username, password);
    });

});

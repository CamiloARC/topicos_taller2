import { Page, test, expect, Locator } from '@playwright/test';

export class HomePage {
    private page: Page;
    private buttonTeamBuilder: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonTeamBuilder = page.locator('button[value="teambuilder"]');
    }
    
    async navigate() {
        await this.page.goto('https://play.pokemonshowdown.com/');
    }

    async openTeamBuilder() {
        await this.buttonTeamBuilder.click();
    }
}

export default HomePage;
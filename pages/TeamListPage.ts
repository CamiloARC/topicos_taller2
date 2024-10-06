import { Page, test, expect, Locator } from '@playwright/test';
         
export class TeamListPage {
    private page: Page;
    private buttonNewTeam: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonNewTeam = page.locator('button[value="team"][name="newTop"]');
    }
    
    async createNewTeam() {
        await this.buttonNewTeam.click();
    }
}

export default TeamListPage;
import { Page, test, expect, Locator } from '@playwright/test';
         
export class TeamCreationPage {
    private page: Page;
    private buttonSelect: Locator;
    private inputSearchGen: Locator;
    private buttonAddPokemon: Locator;
    private inputSearchPokemon: Locator;
    private buttonValidate: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonSelect = page.locator('button[value="gen9"]');
        this.inputSearchGen = page.locator('input[name="search"]');
        this.buttonAddPokemon = page.locator('button[name="addPokemon"]');
        this.inputSearchPokemon = page.locator('input[name="pokemon"]');
        this.buttonValidate = page.locator('button[name="validate"]');
    }

    async selectFormat(format: string, gen: string) {
        await this.buttonSelect.click();
        await this.inputSearchGen.fill(format);
        await this.inputSearchGen.press('Enter');
        await this.page.getByRole('button').filter({ hasText: format }).filter({ hasText: gen }).click();
    }

    async addPokemon(pokemonName: string) {
        await this.buttonAddPokemon.click();
        // await this.inputSearchPokemon.click();
        await this.inputSearchPokemon.fill(pokemonName);
        await this.inputSearchPokemon.press('Enter');
    }

    async validateTeam(format: string, gen: string) {
        await this.buttonValidate.click();
        await expect(this.page.locator('div[class=ps-popup]')).toContainText('Your team is valid for');
    }
}

export default TeamCreationPage;
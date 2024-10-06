import { Page, test, expect, Locator } from '@playwright/test';

export class PokemonDetailsPage {
    private page: Page;
    
    private inputItem: Locator;
    private inputAbility: Locator;
    private moves: any;
    private buttonStats: Locator;
    private evStats: any;
    private selectIVSpread: Locator;
    private remaining: Locator;
    private buttonBack: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputItem = page.locator('input[name="item"]');
        this.inputAbility = page.locator('input[name="ability"]');
        this.moves = {
            move1: page.locator('input[name="move1"]'),
            move2: page.locator('input[name="move2"]'),
            move3: page.locator('input[name="move3"]'),
            move4: page.locator('input[name="move4"]'),
        };
        this.buttonStats = page.locator('button[name="stats"]');
        
        this.evStats = {
            hp: page.locator('input[name="stat-hp"]'),
            atk: page.locator('input[name="stat-atk"]'),
            def: page.locator('input[name="stat-def"]'),
            spa: page.locator('input[name="stat-spa"]'),
            spd: page.locator('input[name="stat-spd"]'),
            spe: page.locator('input[name="stat-spe"]'),
        };
        
        this.selectIVSpread = page.locator('select[name="ivspread"]');
        this.remaining = page.locator('div.totalev em');
        this.buttonBack = page.locator('button[name="back"]');
    }
    
    async selectItem(item: string) {
        await this.inputItem.fill(item);
        await this.inputItem.press('Enter');
    }

    async selectAbility(ability: string) {
        await this.inputAbility.fill(ability);
        await this.inputAbility.press('Enter');
    }

    async selectMoves(moves: any) {
        await this.moves.move1.fill(moves.move1);
        await this.moves.move2.fill(moves.move2);
        await this.moves.move3.fill(moves.move3);
        await this.moves.move4.fill(moves.move4);
    }
 
    async setEVStats(evStats: any) {
        this.buttonStats.click();
        await this.evStats.hp.fill(evStats.hp);
        await this.evStats.hp.press('Enter');
        await this.evStats.atk.fill(evStats.atk);
        await this.evStats.atk.press('Enter');
        await this.evStats.def.fill(evStats.def);
        await this.evStats.def.press('Enter');
        await this.evStats.spa.fill(evStats.spa);
        await this.evStats.spa.press('Enter');
        await this.evStats.spd.fill(evStats.spd);
        await this.evStats.spd.press('Enter');
        await this.evStats.spe.fill(evStats.spe);
        await this.evStats.spe.press('Enter');
    }
    
    async setIVSpread(ivSpread: string) {
        await this.selectIVSpread.selectOption(ivSpread);
    }

    async verifyTotalEVCount() {
        await expect(this.remaining).toHaveText('0');
    }

    async goBackToTeam() {
        await this.buttonBack.click();
    }
}

export default PokemonDetailsPage;
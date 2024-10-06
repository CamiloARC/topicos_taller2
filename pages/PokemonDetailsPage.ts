import { Page, test, expect } from '@playwright/test';

export class PokemonDetailsPage {

    constructor(page: Page) {
    }
    
    async selectItem(itemName: string) {
    }

    async selectAbility(abilityName: string) {
    }

    async selectMoves(moves: object) {
    }

    async setEVStats(evStats: object) {
    }
    
    async setIVSpread(ivSpread: string) {
    }

    async verifyTotalEVCount() {
    }

    async goBackToTeam() {
    }

    // pressSequentially
    // itemslot.click()
    // 6 
    // spd page.locator x 6
    // selectItem
    // select 
}

export default PokemonDetailsPage;
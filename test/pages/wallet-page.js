class Wallet{

    get btcCheck() {
        return $('//small[contains(text(),"Bitcoin (BTC)")]');
    }
    get btnDeposit() {
        return $('//button[@class="styles__ButtonContainer-sc-23vrf8-0 cbBFee"]');
    }
    get alertMessage() {
        return $("//h3[@class='Typography__H3-qw5r90-2 styles__Title-sc-2g5xjx-1 crklmm']");
    }
    get errorMessage() {
        let errorMessageDisplayed = 'Oops! Something went wrong'
        return errorMessageDisplayed;
    }

    async visitWallet() {
        await browser.url('wallet');
    }
    async selectCurrency(curr) {
        await $(`//small[contains(text(),"${curr}")]`).click();
    }
    async clickDeposit() {
        await this.btnDeposit.click(); 
    }
}

export default new Wallet();

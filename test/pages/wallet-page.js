class Wallet{

    get btcCheck() {
        return $('//small[contains(text(),"Bitcoin (BTC)")]');
    }
    get btnDeposit() {
        return $('//small[contains(text(),"Deposit")]');
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
}

export default new Wallet();

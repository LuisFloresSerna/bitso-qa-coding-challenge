class LoginPage{

    open () {
        return browser.url('/login');
    }

    get username() {
        return $('#client_id');
    }
    get password() {
        return $('#password');
    }
    get btnLogin() {
        return $('//button[contains(text(),"Log in")]');
    }
    get walletMessage() {
        return $('//h1[contains(text(),"Wallet")]');
    }
    get cookies() {
        return $('//button[@class="styles__StyledButton-sc-1mfj3x4-0 hKVypD styles__BannerButton-bsbe12-2 eQwsIa"]');
    }
    
    async login(name,pwd) {
        await this.username.setValue(name)
        await this.password.setValue(pwd)
        await this.btnLogin.click();    
    }    
    async btnCookies() {
        await this.cookies.click();
    }  

}

export default new LoginPage();

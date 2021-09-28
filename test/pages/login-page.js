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
    
    async login(name,pwd) {
        await this.username.setValue(name)
        await this.password.setValue(pwd)
        await this.btnLogin.click();
    }    

}

export default new LoginPage();

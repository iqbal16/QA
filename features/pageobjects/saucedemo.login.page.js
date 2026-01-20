import Basepage from "./base.page";

class soucedemologinpage extends Basepage {
    get inputUsername() {return $('[data-test="username"]');}
    get inputPassword() {return $('[data-test="password"]');}
    get btnlogin() {return $('[data-test="login-button"]');}
    get errormessage() {return $('[data-test="error"]');}

    async openLogin() {
    // SauceDemo login page ada di root
        await this.open("/");
    }
    
    async login (username,password){
    // clear dulu supaya aman untuk scenario outline / rerun
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnlogin.click();
    }

    async getErrorText (){
        await this.errormessage.waitForDisplayed({timeout: 5000});
        return (await this.errormessage.getText()).trim();
    }
}

export default new soucedemologinpage();
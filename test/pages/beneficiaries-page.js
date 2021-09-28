import utils from "../utils/utils";
import * as faker from 'faker'

class Beneficiaries{
 
    get btnAdd() {
        return $('//button[contains(text(),"Add")]');
    }
    get firstName() {
        return $('#first_name');
    }
    get lastName() {
        return $('#last_name');
    }
    get secondLastName() {
        return $('#second_last_name');
    }
    get birthDay() {
        return $('//body/div[@id="root"]/div[1]/div[1]/div[1]/div[2]/main[1]/div[1]/form[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]');
    }
    get birthMonth() {
        return $('//body/div[@id="root"]/div[1]/div[1]/div[1]/div[2]/main[1]/div[1]/form[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]');
    }
    get getMonth() {
        return $('(//div[@class="css-wqkqim"])[2]');
    }
    get birthYear() {
        return $('//body/div[@id="root"]/div[1]/div[1]/div[1]/div[2]/main[1]/div[1]/form[1]/div[4]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]');
    }
    get getYear() {
        return $('(//div[@class="css-wqkqim"])[3]');
    }
    get relationship() {
        return $('//body/div[@id="root"]/div[1]/div[1]/div[1]/div[2]/main[1]/div[1]/form[1]/div[5]/div[1]/div[1]/div[2]/div[1]/span[1]');
    }
    get benefit() {
        return $('#percentage');
    }
    get pin() {
        return $('#pin');
    }
    get btnConfirm() {
        return $('//button[contains(text(),"Confirm")]');
    }
    get pinAlertMessage() {
        return $('//div[@class="styles__Message-vmzast-2 kdoYrG"]');
    }
    get lists() {
        return $("//input[@id='day']//parent::div//parent::div//parent::div//div[@class='css-wqkqim']");
    }
    get selectYear() {
        let year = "#react-select-4-option-";
        return year;
    }
    get selectMonth() {
        let month = "#react-select-3-option-";
        return month;
    }
    get selectDay() {
        let day = "#react-select-2-option-"
        return day;
    }
    get selectKinship() {
        let kinship = "#react-select-5-option-"
        return kinship;
    }
    get selectLists() {
        return $$('//div[@class="css-1cloi1t"]//div');
    }
    
    async visitBeneficiariesPage() {
        await browser.url('/r/user/beneficiaries/add');
    }
    async clickAdd() {
        await this.btnAdd.click();
    }
    async setRandomYear(){
        await this.birthYear.click();
        let total = await this.selectLists.length;
        let result = await utils.getRandomItem(await utils.createArrayDyn(total));
        await $(`${this.selectYear}${result}`).scrollIntoView();
        await $(`${this.selectYear}${result}`).click();
    }
    async setRandomMonth(){
        await this.birthMonth.click();
        let result = await utils.getRandomItem(await utils.createArrayDyn(11));
        await $(`${this.selectMonth}${result}`).scrollIntoView();
        await $(`${this.selectMonth}${result}`).click();
    }
    async setRandomDay(){
        var month = await this.getMonth.getText();
        var year = await this.getYear.getText();
        var months30 = ['April','June','September','November'];
        var arr;
        var result;
        await this.birthDay.click();
        if (months30.indexOf(month)){
            //console.log('30 days');
            arr = await utils.createArrayDyn(29);
            result = await utils.getRandomItem(arr);
        } else if (month === 'February' && utils.leapyear(Number(year)) === true){
            //console.log('29 days');
            arr = await utils.createArrayDyn(28);
            result = await utils.getRandomItem(arr);
        }else if (month === 'February' && utils.leapyear(Number(year)) === false){
            //console.log('28 days')
            arr = await utils.createArrayDyn(27);
            result = await utils.getRandomItem(arr);
        }else {
            //console.log('31 days')
            arr = await utils.createArrayDyn(30);
            result = await utils.getRandomItem(arr);
        }
        await $(`${this.selectDay}${result}`).scrollIntoView();
        await $(`${this.selectDay}${result}`).click();
    }
    async setRelationship() {
        await this.relationship.click();
        let total = await this.selectLists.length;
        let result = await utils.getRandomItem(await utils.createArrayDyn(total));
        await $(`${this.selectKinship}${result}`).scrollIntoView();
        await $(`${this.selectKinship}${result}`).click();
    }
    async setBenefit() {
        let arr = await utils.createArrayDyn(100);
        let result = await utils.getRandomItem(arr);
        await this.benefit.setValue(result);
    }
    async addBeneficiary() {
         await this.firstName.setValue(faker.name.firstName()); 
         await this.lastName.setValue(faker.name.lastName().replace('\'', ''));       //Replaced ' since faker assigns values like o'reilly or O'neal and Bitso does not allow them
         await this.secondLastName.setValue(faker.name.lastName().replace('\'', '')); //Replaced ' since faker assigns values like o'reilly or O'neal and Bitso does not allow them
         await this.setRandomYear();
         await this.setRandomMonth();
         await this.setRandomDay();
         await this.setRelationship();
         await this.setBenefit();
         await this.clickAdd();
         await this.pin.setValue('InvalidPin2488');
         await this.btnConfirm.click();      
    }    

}

export default new Beneficiaries();
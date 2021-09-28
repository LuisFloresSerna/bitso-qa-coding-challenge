class Utils{

    async getRandomItem(arr) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
        // get random item
        const item = arr[randomIndex];
        console.log('fuckkk');
        console.log(arr);
        console.log(randomIndex);
        return item;
    }
    async createArrayDyn(maxvalue) {
        var arr = [...Array(maxvalue).keys()];
        console.log(arr);
        return arr;
    }
    async leapyear(year) {
        return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
      }



}

export default new Utils();
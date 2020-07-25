let cash = window.prompt("Enter cash: ");
let coins = [];

const cashTCoin = (cash) => {
    let temp = cash;

    while (temp !== 0) {
        if (temp >= 25) {
            coins.push(25);
            temp = temp - 25;
        } else if (temp >= 10) {
            coins.push(10);
            temp = temp - 10;
        } else if (temp >= 5) {
            coins.push(5);
            temp = temp - 5;
        } else if (temp >= 2) {
            coins.push(2);
            temp = temp - 2;
        } else if (temp >= 1) {
            coins.push(1);
            temp = temp - 1;
        }
    }
    return coins;
};

cashTCoinMod(cash);
console.log(coinsMod);

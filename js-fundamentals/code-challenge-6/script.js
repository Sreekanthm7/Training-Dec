function bill(amount){
    return amount >= 50 && amount <=300 ? amount*0.15 : amount * 0.2;
}

const amount = [125, 555, 44];
const tips = [bill(amount[0]), bill(amount[1]), bill(amount[2])];
const total = [amount[0]+tips[0],amount[1]+tips[1],amount[2]+tips[2],]
console.log(amount, tips, total);
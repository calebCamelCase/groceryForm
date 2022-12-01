/**
 * Assignment
 * 
 * Create a form
 * Form should contain grocery inputs
 * 
 * 1 input for the type of item
 * 1 input for the amount of items
 * 1 input for the grocery store aisle
 * 1 input for the price
 * 
 * tally the total based on all of the prices
 * 
 * Capture those input values in javascript like we did earlier today (in todoList file)
 * Display them on the page. Make them look nice.
 * Bonus points if you don't allow duplicate items.
 */

let listName = document.getElementById('listName');
listName.innerText = 'wendigo green grocer';

let total = 0;

class ShopList {
    constructor() {
        this.listArr = [];

        this.form = document.getElementById('groceryForm');
        this.itemType = document.getElementById('itemType');
        this.itemAmount = document.getElementById('itemNum');
        this.storeAisle = document.getElementById('storeAisle');
        this.itemPrice = document.getElementById('itemPrice');
        this.itemList = document.getElementById('itemList');
        this.totalPrice = document.getElementById('totalPrice');
        this.shopItems = document.getElementsByTagName('li');
    }

    init() {
        this.formSubmit();
    }

    formSubmit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            // console.log('click');
            this.addShopItem();
            this.addAllPrices();
        })
    }

    addShopItem() {
        let found = false;
        // console.log(this.itemType.value);

        this.listArr.forEach(item => {
            if(item.toLowerCase() === this.itemType.value.toLowerCase()) {
                found = true;
            }
        });

        if(!found) {
            this.itemList.innerHTML += `
            <li class='list-group-item'>${this.itemAmount.value} ${this.itemType.value} on Aisle ${this.storeAisle.value} for $${this.itemPrice.value * this.itemAmount.value}</li>
            `;
            this.listArr.push(this.itemType.value);
        }
    }

    addAllPrices(){
        total += this.itemPrice.value * this.itemAmount.value;
        this.totalPrice.innerText = `Your total is $${total.toFixed(2)}`
    }



}

let action = new ShopList();
action.init();

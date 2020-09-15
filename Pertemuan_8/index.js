//Web Programming - Exercise #2

const account={
    name:"Reygen",
    expenses :[],
};

function addExpenses(description,ammount){
    object={
        Desc:description,
        Expense:ammount,

    };
    account.expenses.push(object);
}

function getAccountSummary(){
    let total=0;
    account.expenses.forEach(function(el){
        total=total+el.Expense;
        
    })
    console.log("Total Pengeluaran "+account.name+" adalah Rp."+total);
    
}


addExpenses("Beli Beras",25000);
addExpenses("Pulsa Listrik",23000);
addExpenses("Ongkos",8000);
getAccountSummary();


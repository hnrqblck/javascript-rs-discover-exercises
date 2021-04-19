/* ### Sistemas de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array
        * receitas: [];
        * despesas: [];
    
    Agora, crie um função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

let remainingBalance = 0;

let family = {
    income: [2000, 4000, 200, 50],
    expenses: [1250, 49.90, 120, 480, 1000, 1200, 500]
};

const sum = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += Number(array[i]);
    };

    return total;
}

const calculateBalance = (totalIncome, totalExpenses) => {
    
    remainingBalance = totalIncome - totalExpenses;
    if (remainingBalance >= 0) {
        return 'Your family has positive balance! You have: $' + remainingBalance.toFixed(2);
    } else {
        return 'Your family has negative balance. Your debt is of: $' + remainingBalance.toFixed(2);
    };
};

console.log(calculateBalance(sum(family.income), sum(family.expenses)));

//Mayk's solution
/*
const sum = (array) => {
    let total = 0;

    for (let value of array) {
        total += value;
    };

    return total;
}
*/
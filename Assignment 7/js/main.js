document.querySelector('#company').innerText = "Pizza Emporium";
document.querySelector('#slogan').innerText = "Literal Objects";

const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza: () => { document.querySelector('#feedback').textContent = `Baking a ${pizza.size} pizza on a ${pizza.crust} crust with ${pizza.topping} and cheese.` },
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') { flour *= 2 }
        if (pizza.size === 'large') { flour *= 2 }
        document.querySelector('#feedback').textContent = `You will need to purchase ${flour} cups of flour and 1 lbs of ${pizza.topping}.`
    }
}

document.querySelectorAll('input[type="radio"]').forEach(item => { item.addEventListener('click', () => { pizza[item.name] = item.value }) })
document.querySelectorAll('button').forEach(item => { item.addEventListener('click', () => { pizza[item.id]() }) })
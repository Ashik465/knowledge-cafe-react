const addToDb = (id) => {
    const storedCart = getCardInLocalStorage();
    const quantity = storedCart[id]
    if (!quantity) {
        storedCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        storedCart[id] = newQuantity;
    }
    localStorage.setItem('cards-stored', JSON.stringify(storedCart))

}


const getCardInLocalStorage = () => {
    let storedCard;
    const getCard = localStorage.getItem('carts-stored');
    if (getCard) {
        storedCard = JSON.parse(getCard)
    }
    else {
        storedCard = {}
    }
    return storedCard;
}

export{
    addToDb,
    getCardInLocalStorage
}
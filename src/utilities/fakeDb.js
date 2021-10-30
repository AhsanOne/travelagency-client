const addToDb = id => {
    const exists = getDb()
    let orderItem = {}
    if(!exists){
        orderItem[id] = 1
    }
    else{
        orderItem = JSON.parse(exists)
        if(orderItem[id]){
            orderItem[id] += 1
        }
        else{
            orderItem[id] = 1
        } 
    }
    updateDb(orderItem)
}

const getDb = () => localStorage.getItem('order-item')

const updateDb = cart => {
    localStorage.setItem('order-item', JSON.stringify(cart))
}

const removeFromDb = id => {
    const exists = getDb()
    if(!exists){

    }
    else{
        const orderItem = JSON.parse(exists)
        delete orderItem[id]
        updateDb(orderItem)
    }
}

const getStoredOrder = () => {
    const exists = getDb()
    return exists ? JSON.parse(exists) : {}
}

const clearTheOrder = () => {
    localStorage.removeItem('order-item')
}

export {addToDb, removeFromDb, getStoredOrder, clearTheOrder}
export const readFromStorage = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error){
        console.log(error)
        return null;
    }
}

export const saveToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}
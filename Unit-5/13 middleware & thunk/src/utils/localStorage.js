/**
* @param {String} key
* 
*/

export const loadData =(key) =>{
    try {
        let data = localStorage.getItem(key)
        data = JSON.parse(data)
        return data
    } catch (error) {
        return undefined
    }
}
/**
* @param {String} key
* @param {any} data
*/


export const saveData = (key , data) =>{
localStorage.setItem(key , JSON.stringify(data));
}
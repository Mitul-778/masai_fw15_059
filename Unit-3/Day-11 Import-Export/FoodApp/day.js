import navbar from "./script/navbar.js";
document.getElementById('navBar').innerHTML=navbar()

import { getData,appendData } from "./script/showData.js";

let url = 'http://www.themealdb.com/api/json/v1/1/random.php'
let res = await getData(url);
console.log(res)
appendData(res);
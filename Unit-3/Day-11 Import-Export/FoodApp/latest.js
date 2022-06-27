import navbar from "./script/navbar.js";
document.getElementById('navBar').innerHTML=navbar()

import {getData,appendData} from "./script/showData.js";

const rec = async () => {
   let input= document.getElementById('search').value;
   let url = `http://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
   let res = await getData(url)
   appendData(res);
}
rec()
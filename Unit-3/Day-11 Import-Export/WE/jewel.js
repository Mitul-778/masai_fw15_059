import navbar from "./components/navbar.js";
document.getElementById('nav-cont').innerHTML=navbar();

import {getData,appendData} from "./script/showData.js"
let url='https://fakestoreapi.com/products/category/jewelery'
let res= await getData(url)
let parent=document.getElementById('data')
appendData(res,parent)
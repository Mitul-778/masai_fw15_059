foodDetail()

async function foodDetail(){
    try {
        let food= await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian');
        let data= await food.json();
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}
var cartArr=JSON.parse(localStorage.getItem('cart'))|| []
function displayData(data){
    data.meals.map(function(el){
        var div=document.createElement('div')

        var image=document.createElement('img');
        image.src=el.strMealThumb

        var name=document.createElement('p');
        name.textContent=el.strMeal

        var price=document.createElement('p');
        price.textContent=`${(Math.round(Math.random()*500))}  $`

        var btn=document.createElement('button');
        btn.textContent='Add to Cart'
        btn.setAttribute('id','addtocart')
        btn.addEventListener('click',function(){
            addtoCart(el)
        })

        div.append(image,name,price,btn)
        document.querySelector('#menu').append(div)
    })
}
function addtoCart(data){
    document.querySelector('#count').innerHTML=''
    cartArr.push(data);
    localStorage.setItem('cart',JSON.stringify(cartArr));
    let p= document.createElement('div');
    p.textContent=cartArr.length
    document.querySelector('#count').append(p)
}
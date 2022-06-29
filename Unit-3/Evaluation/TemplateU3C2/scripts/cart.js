
var cartArr=JSON.parse(localStorage.getItem('cart'))|| []
displayData(cartArr)

function displayData(data){
    document.querySelector('#cart').innerHTML=''
    data.map(function(el,index){
        var div=document.createElement('div')

        var image=document.createElement('img');
        image.src=el.strMealThumb

        var name=document.createElement('p');
        name.textContent=el.strMeal

        var price=document.createElement('p');
        price.textContent=`${(Math.round(Math.random()*500))}  $`

        var btn=document.createElement('button');
        btn.textContent='Remove from Cart'
        btn.setAttribute('id','remove')
        btn.addEventListener('click',function(){
            removeItem(index)
        })

        div.append(image,name,price,btn)
        document.querySelector('#cart').append(div)
    })
}

function removeItem(index){
    cartArr.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(cartArr))
    displayData(cartArr)
}

var total= cartArr.reduce(function(acc,cv){
    return acc + (Number(cv.price))
},0)
total=1250;

    document.querySelector('#total').append("Total Amount:-",total);

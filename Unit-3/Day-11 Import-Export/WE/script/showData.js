async function getData(url){
try {
    let res= await fetch(url);
let data= await res.json();
return data
} catch (error) {
    console.log(error)
}
}

function appendData(data, parent){
data.forEach((el) => {
    let div1 = document.createElement('div')

    let p= document.createElement('p')
    p.innerText=el.title

    let image= document.createElement('img');
    image.src=el.image

    div1.append(p,image)

    parent.append(div1)
});
}

export { getData,appendData }
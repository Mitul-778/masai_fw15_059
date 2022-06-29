async function apiCall(url) {
    //add api call logic here
try {
    let res = await fetch(url);
    let data = await res.json();
    return data
} catch (error) {
    console.log(error);
}

}


function appendArticles(articles, main) {

    //add append logic here
articles.forEach((el) => {
    
    let div=document.createElement('div');
    div.id = 'news'

    let title = document.createElement('div');
    title.innerText = el.title

    let des = document.createElement('div');
    des.innerText = el.description

    let image = document.createElement('img');
    image.src = el.urlToImage

    div.append(title,des,image);
    div.addEventListener('click',() => {
        localStorage.setItem('article',JSON.stringify(el))
        window.location.href='news.html'
    })
    main.append(div);

});

}

export { apiCall, appendArticles }
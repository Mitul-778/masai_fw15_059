const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const appendData = (data) => {
  document.getElementById('data').innerHTML=""
  data.meals.forEach(el => {
    let div1 = document.createElement('div');

    let image = document.createElement('img');
    image.src = el.strMealThumb

    let p= document.createElement('p');
    p.innerHTML= el.strMeal

    div1.append(image,p);
    document.getElementById('data').append(div1);
  });
}
export  {getData,appendData}
var image = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYK1UtfHGd3KdV6WSBoBUbRXNw5FKwf-ipgA&usqp=CAU",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5461/245461-h",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6OCCeP6hlTqUp4hDc54yYoIMILdwtVq0Ng&usqp=CAU",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5D5OpHK2ogV3GheMsSOtTRwWjmzsuncsWLQ&usqp=CAU",
];
var x;

function start() {
  let imag = document.getElementById("slideshow_image");
  imag.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUIVRmwvo2-3B_ajwa-afWztUo77b6vic2A&usqp=CAU'
  let i = 0;
  x = setInterval(function () {
    if (i == image.length) {
      i = 0;
    }
    imag.src = image[i];
    i = i + 1;
  }, 5000);
}
start();

/* -----------------> movies <-----------------*/

let movie = [
  {
    name: "Junglee",
    date: "21/10/2015",
    url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1327/441327-v",
    rate: "4.9",
  },
  {
      name:'Big Bull',
      date:'21/12/2015',
      url:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/2038/1102038-v-1bac28aa23cb',
      rate:'4.6',
  },
  {
      name:'Baby',
      date:'21/01/2018',
      url:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/7416/957416-v',
      rate:'5',
  },
  {
      name:'Loki',
      date:'25/03/2005',
      url:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1691/1011691-v-657881703c09',
      rate:'4.9'
  },
  {
      name:'Arjun Reddy',
      date:'25/12/2014',
      url:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/701/600701-v',
      rate:'5'
  },
  {
      name:'Eternals',
      date:'14/12/2015',
      url:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235',
      rate:'4.6'
  },
  {
      name:'Encanto',
      date:'25/02/2012',
      url:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1347/1091347-v-1ddd8b64ce22',
      rate:'4.5',
  },
  {
      name:'HouseFull 4',
      date:'21/12/2019',
      url:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v',
      rate:'5'
  },
  {
      name:'Shang-Chi',
      date:'25/02/2015',
      url:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9',
      rate:'4.9'
  },
  {
      name:'Aatarangi',
      date:'27/10/2020',
      url:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2938/1092938-v-01ce06b14a2e',
      rate:'4.2',
  },
  {
      name:'Howkeye',
      date:'12/05/2021',
      url:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3022/1083022-v-90c34f714f7a',
      rate:'4.6'
  },
  {
      name:'Sanak',
      date:'24/09/2019',
      url:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8857/1068857-v-d30bc5e504a4',
      rate:'4.8',
  }
];

localStorage.setItem("movies", JSON.stringify(movie));
displayData(movie);

function displayData(movie){
    movie.map(function(el){
    
    var div=document.createElement("div");
    var div2=document.createElement("div");
    div2.setAttribute("id",'flex')

    var image=document.createElement("img");
    image.setAttribute("src",el.url);

    var name=document.createElement("h2");
    name.textContent=el.name;

    var date=document.createElement("p");
    date.textContent=el.date;

    var rating=document.createElement("h4");
    rating.textContent=el.rate+' '+'⋆⋆⋆⋆';

    div.append(name,date,rating);
    div2.append(image,div)

    document.querySelector("#movies").append(div2)
    })
}

/*------------------> sorting <--------------------*/

let movies = JSON.parse(localStorage.getItem("movies"));

function sortRate() {
    document.querySelector("#movies").innerHTML=""
  var selected = document.querySelector("#sort").value;
  if (selected == "hl") {
    movies.sort(function (a, b) {
      return Number(b.rate) - Number(a.rate);
    });
  }
  if (selected == "lh") {
    movies.sort(function (a, b) {
      return Number(a.rate) - Number(b.rate);
    });
  }
  displayData(movies);
}

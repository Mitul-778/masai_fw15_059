//   let key = "AIzaSyBC0I0STn9kXTCkjd_LgagURyMo4KpjTEg";
//   let url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=in&key=AIzaSyBC0I0STn9kXTCkjd_LgagURyMo4KpjTEg";

const popular = async () => {
  try {
    let res = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&type=video&chart=mostPopular&regionCode=in&maxResults=30&key=AIzaSyBC0I0STn9kXTCkjd_LgagURyMo4KpjTEg"
    );
    let data = await res.json();
    displayData(data.items);
  } catch (error) {
    console.log(error);
  }
};
popular();
let h= document.getElementById('home')
h.addEventListener('click',popular)
const displayData = (data) => {
  document.getElementById("video").innerHTML=""
  data.map((el, index) => {
    let div = document.createElement("div");

    const {
      snippet: {
        thumbnails: {
          high: { url },
        },
      },
    } = el;
    let image = document.createElement("img");
    image.src = url;

    image.addEventListener("click", () => {
      localStorage.setItem("vid", JSON.stringify(el));
      window.open("video.html");
    });

    const {
      snippet: 
         { title },
      
    } = el;
    let titl = document.createElement("h4");
    titl.innerText = title;

    div.append(image, titl);
    document.getElementById("video").append(div);
  });
};
let buton = document.getElementById("btn");

const searchVideo = async () => {
  try {
    let input = document.getElementById("search").value;
    if(input==""){
      popular()
    }
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBC0I0STn9kXTCkjd_LgagURyMo4KpjTEg&q=${input}&part=snippet&maxResults=25`
    );
    let data = await res.json();
    displayData(data.items)
  } catch (error) {
    console.log(error);
  }
};
buton.addEventListener("click", searchVideo);

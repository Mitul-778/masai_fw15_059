
var obj = JSON.parse(localStorage.getItem("vid"));
var arr = [];
arr.push(obj);

console.log("ouside",arr);

function showVideo(arr) {

  console.log('inside',arr);

  arr.forEach((el) => {
    const { id } = el;
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${id}`;
    iframe.setAttribute("allowfullscreen", "true");
    document.getElementById("container").append(iframe);
  });
}
showVideo(arr);

async function fetchdata() {
  let res = await fetch("http://localhost:3008/data");
  let data = await res.json();
  let location = data.Location;
  let company = data.CompanyName;
  let title = data.Title;
  display(location, company, title);
}

function display(location, company, title) {
  title.map((e) => {
    let li = document.createElement("li");
    li.innerHTML = e;
    document.querySelector(".titleul").append(li);
  });
  company.map((e) => {
    let li = document.createElement("li");
    li.innerHTML = e;
    document.querySelector(".companyul").append(li);
  });
//  location.map((e,i)=>{
//     if(i%2===0){
//         let li = document.createElement('li');
//         li.innerHTML = `${location[i]},${location[i+1]}`
//         document.querySelector(".locationul").append(li);   
//     }
//  })
}

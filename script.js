var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

// 按下按鈕後，更換標題與內文，清空上方的標題及內文
// btn.addEventListener("click" submit());
btn.addEventListener("click",change);

function change(){
  list.innerHTML = list.innerHTML + `
  	<div class="article">
        <h2>${title.value}</h2>
        <p>${content.value}</p>
      </div>
  `;

  console.log(title.value);
}


  
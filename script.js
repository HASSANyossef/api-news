

let allData = [];
let category = "general";
getApi(category);

let link = document.querySelectorAll(".link");


link.forEach(function (el)
{
    el.addEventListener("click", function (e)
    {
        document.querySelector(".active").classList.remove("active");
        el.classList.add("active");
        let cat = e.target.text;
        console.log(cat);
        getApi(cat)
    })
})

function getApi(category)
{
    let httpReq = new XMLHttpRequest();
httpReq.open("GET", `https://newsapi.org/v2/top-headlines?country=eg&
category=${category}&apiKey=d9a70f8b7e7d46bfa204e90df761a368`);
httpReq.send();

httpReq.onreadystatechange = function ()
{
    if (httpReq.readyState == 4 && httpReq.status == 200)
        allData = JSON.parse(httpReq.response).articles;
    console.log(allData);
    showItems();
}
}



function showItems()
{
    let temp = "";
    for (let i = 0; i < allData.length; i++)
    {
        temp +=
        `<div class="content">
            <div class="image">
                <img src=${allData[i].urlToImage} alt="">
            </div>
            <div class="text">
                <h2 id="title">${allData[i].title}</h2>
                <p>${allData[i].description}</p>
                <a id="url" href=${allData[i].url} target=_blank>قراءة الخبر</a>
            </div>
        </div>`
    }
    document.querySelector(".conainer").innerHTML = temp;
}
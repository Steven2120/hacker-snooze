const body = document.querySelector("body");

const headingParent = document.createElement("div");
headingParent.className = "heading-parent";

const headingTitle = document.createElement("div");
headingTitle.id = "heading-title";
headingTitle.innerText = "Hacker News";

const titleNew = document.createElement("a");
titleNew.className = "sub-titles";
titleNew.innerText = "New";
titleNew.href = "#";

const titlePast = document.createElement("a");
titlePast.className = "sub-titles";
titlePast.innerText = "Past";
titlePast.href = "#";

const titleComments = document.createElement("a");
titleComments.className = "sub-titles";
titleComments.innerText = "Comments";
titleComments.href = "#";

const titleAsk = document.createElement("a");
titleAsk.className = "sub-titles";
titleAsk.innerText = "Ask";
titleAsk.href = "#";

const titleShow = document.createElement("a");
titleShow.className = "sub-titles";
titleShow.innerText = "Show";
titleShow.href = "#";

const titleJobs = document.createElement("a");
titleJobs.className = "sub-titles";
titleJobs.innerText = "Jobs";
titleJobs.href = "#";

const titleSubmit = document.createElement("a");
titleSubmit.className = "sub-titles";
titleSubmit.innerText = "Submit";
titleSubmit.href = "#";

body.appendChild(headingParent);
headingParent.appendChild(headingTitle);
headingParent.appendChild(titleNew);
headingParent.appendChild(titlePast);
headingParent.appendChild(titleComments);
headingParent.appendChild(titleAsk);
headingParent.appendChild(titleShow);
headingParent.appendChild(titleJobs);
headingParent.appendChild(titleSubmit);

const parent = document.createElement("div");
parent.className = "parent";

body.appendChild(parent);

const URL =
  "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

fetch(URL)
  .then((rawRes) => {
    console.log("Response success");
    console.log("Response", rawRes);
    return rawRes.json();
  })
  .then((json) => {
    console.log("json object converted");
    console.log("Json", json);
    for (const element of json) {
      const URL1 = `https://hacker-news.firebaseio.com/v0/item/${element}.json?print=pretty`;
      fetch(URL1)
        .then((rawRes1) => {
          console.log("Response", rawRes1);
          return rawRes1.json();
        })
        .then((data) => {
          console.log("Json", data);
          const childTitle = document.createElement("a");
          const parent1 = document.createElement("div");
          const childPoints = document.createElement("div");
          const childAuthor = document.createElement("a");
          const childTime = document.createElement("a");
          const childComments = document.createElement("a");
          childTitle.className = "child-title";
          parent1.className = "sub-heading";
          childPoints.id = "points";
          childAuthor.id = "author";
          childTime.id = "time";
          childComments.id = "comments";
          parent.appendChild(childTitle);
          parent.appendChild(parent1);
          parent1.appendChild(childPoints);
          parent1.appendChild(childAuthor);
          parent1.appendChild(childTime);
          parent1.appendChild(childComments);
          childTitle.innerHTML = data.title;
          childTitle.href = data.url;
          childTitle.target = "_blank";
          childPoints.innerHTML = `${data.score} points`;
          childAuthor.innerHTML = `by ${data.by}`;
          childAuthor.href = "#";
          childTime.innerHTML = new Date(data.time * 1000);
          childTime.href = "#";
          childComments.innerHTML = `${data.descendants} comments`;
          childComments.href = "#";
        })
        .catch((error) => console.log(error));
    }
  });

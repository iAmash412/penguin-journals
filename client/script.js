//************************************************************************************************//
// CREATE NEW POST//
//************************************************************************************************/
const form = document.querySelector("form");
const API_URL = "http://localhost:3000/journal";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("postTitleContent");
  const Content = formData.get("postBodyContent");

  const post = {
    title,
    Content,
    emojiOne: 0,
    emojiTwo: 0,
    emojiThree: 0,
    comments: [],
  };
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "content-type": "application/json",
    },
  });
});

//************************************************************************************************//
// SHOW/HIDE toggle for individual post//
//************************************************************************************************//
function toggleComments() {
  document.getElementById("commentsSection").classList.toggle("hide");
}

function togglePostBody() {
  document.getElementById("postBodySection").classList.toggle("min");

  let btn = document.querySelector(".readMoreBtn").innerText;
  if (btn === "Read more") {
    document.querySelector(".readMoreBtn").innerText = "Read less";
  } else if (btn === "Read less") {
    document.querySelector(".readMoreBtn").innerText = "Read more";
  }
}

//************************************************************************************************//
// Emoji counter logic//
//************************************************************************************************//

function emojiCounter1() {
  let x;
  let emojiCounter = parseInt(
    document.querySelector(".vEmojiCounterText1").innerText
  );
  if (emojiCounter > 0) {
    x = emojiCounter;
  } else {
    x = 0;
    document
      .getElementById("vEmojiBtn1")
      .classList.toggle("btn-outline-primary");
    document
      .getElementById("hEmojiBtn1")
      .classList.toggle("btn-outline-primary");
  }
  x = x + 1;
  document.querySelector(".vEmojiCounterText1").innerText = x;
  document.querySelector(".hEmojiCounterText1").innerText = x;
}

function emojiCounter2() {
  let x;
  let emojiCounter = parseInt(
    document.querySelector(".vEmojiCounterText2").innerText
  );
  if (emojiCounter > 0) {
    x = emojiCounter;
  } else {
    x = 0;
    document
      .getElementById("vEmojiBtn2")
      .classList.toggle("btn-outline-primary");
    document
      .getElementById("hEmojiBtn2")
      .classList.toggle("btn-outline-primary");
  }
  x = x + 1;
  document.querySelector(".vEmojiCounterText2").innerText = x;
  document.querySelector(".hEmojiCounterText2").innerText = x;
}

function emojiCounter3() {
  let x;
  let emojiCounter = parseInt(
    document.querySelector(".vEmojiCounterText3").innerText
  );
  if (emojiCounter > 0) {
    x = emojiCounter;
  } else {
    x = 0;
    document
      .getElementById("vEmojiBtn3")
      .classList.toggle("btn-outline-primary");
    document
      .getElementById("hEmojiBtn3")
      .classList.toggle("btn-outline-primary");
  }
  x = x + 1;
  document.querySelector(".vEmojiCounterText3").innerText = x;
  document.querySelector(".hEmojiCounterText3").innerText = x;
}

/*const data = {postTitle, posttext};
const options ={
    method: "POST",
    headers:{
        'Content-Type': 'application/jsom'
    },
    body: JSON.stringify(data)
};

fetch("/newpost", options)*/

//************************************************************************************************//
// GIPFY API//
//************************************************************************************************//
const GIPFY_KEY = "evn6IsMCnnpMUchrWJgF1HYW5uHwjuxM";

//************************************************************************************************//
// LATEST (ALL) POSTS FETCH //
//************************************************************************************************//

let emojiCounter;

async function fetchLatestPosts() {
  try {
    const res = await fetch("http://localhost:3000/journal")
      .then((res) => res.json())
      .then((data) => {
        // const { title, Content } = data;

        let output = ``;
        
        data.forEach(function (post) {
          output += `
        <div class="container-md individualContainer">
          <div class="individualPostContent">
          <div class="row">
            <div class="col-sm-1 emojiCol">
              <div>
                <button
                  class="btn emoji m-1"
                  onclick="emojiCounter1()"
                  id="vEmojiBtn1"
                >
                  <span class="icons">😍</span>
                  <span class="emojiCounter vEmojiCounterText1">${post.emojiOne}</span>
                </button>
              </div>
              <div>
                <button
                  class="btn emoji m-1"
                  onclick="emojiCounter2()"
                  id="vEmojiBtn2"
                >
                  <span class="icons">😐</span>
                  <span class="emojiCounter vEmojiCounterText2">${post.emojiTwo}</span>
                </button>
              </div>
              <div>
                <button
                  class="btn emoji m-1"
                  onclick="emojiCounter3()"
                  id="vEmojiBtn3"
                >
                  <span class="icons">😔</span>
                  <span class="emojiCounter vEmojiCounterText3">${post.emojiThree}</span>
                </button>
              </div>
            </div>
            <div class="col-sm-10 ps-4">
              <h3 class="postTitle py-2">
                ${post.title}
              </h3>
              <div class="postBody min" id="postBodySection">
                <p>
                ${post.Content}
                </p>
              </div>
            </div>
            <div class="col-sm-1">
              <a class="btn postEllipsisBtn" href="#!" role="button"
                ><i class="fa-solid fa-ellipsis-vertical"></i
              ></a>
            </div>
            <div class="row d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-primary mt-4 readMoreBtn"
                onclick="togglePostBody()"
              >
                Read more
              </button>
            </div>
          </div>

          <hr />

          <div class="row d-flex pt-1 pb-4">
            <div class="col">${post.timeStamp}</div>
            <div class="col commentIconAndNumber">
              <button class="toggleCommentsBtn" onclick="toggleComments()">
                <i class="fa-solid fa-message pe-2"></i>
                <span class="commentCounter">${post.comments.length}</span>
              </button>
            </div>
          </div>

          <div
            class="row d-flex justify-content-center hide"
            id="commentsSection"
          >
            <hr />
            <div class="row">
              <div class="col ps-0">
                <h4 class="py-2">Leave a comment or reaction</h4>
              </div>
              <div class="col horizontalEmojis">
                <button
                  class="btn emojiComments mx-1"
                  onclick="emojiCounter1()"
                  id="hEmojiBtn1"
                >
                  <span class="icons">😍</span>
                  <span
                    class="emojiCommentsCounter hEmojiCounterText1 ps-1"
                  >${post.emojiOne}</span>
                </button>

                <button
                  class="btn emojiComments mx-1"
                  onclick="emojiCounter2()"
                  id="hEmojiBtn2"
                >
                  <span class="icons">😐</span>
                  <span
                    class="emojiCommentsCounter hEmojiCounterText2 ps-1"
                  >${post.emojiTwo}</span>
                </button>

                <button
                  class="btn emojiComments mx-1"
                  onclick="emojiCounter3()"
                  id="hEmojiBtn3"
                >
                  <span class="icons">😔</span>
                  <span
                    class="emojiCommentsCounter hEmojiCounterText3 ps-1"
                  >${post.emojiThree}</span>
                </button>
              </div>
            </div>
            <div class="row ps-0 pt-2">
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="comment"
                  placeholder="comment"
                />
              </div>
              <div class="col-sm-2 sendCommentCol">
                <button
                  type="submit"
                  class="btn btn-primary sendCommentBtn mb-3"
                >
                  <i class="fa-solid fa-paper-plane"></i>
                  Send
                </button>
              </div>
            </div>

            </div>
        </div>
        </div>
                      `;
        });
        document.getElementById("latestPostsOutput").innerHTML =
          output + `<br>`;
      });
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
}

fetchLatestPosts();


/********************************************************************************************* */
/*GIF JS*/
/********************************************************************************************* */

const APIKEY = "evn6IsMCnnpMUchrWJgF1HYW5uHwjuxM";
document.addEventListener("DOMContentLoaded", init);
function init() {

  document.getElementById("gifSearchButton").addEventListener("click", ev => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=6&q=`;
    let str = document.getElementById("gifSearch").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(content => {
        console.log(content.data);
        console.log("Meta", content.meta);
        //Ugly code
        let gifImg1 = document.createElement("img");
        gifImg1.src = content.data[0].images.fixed_width_small.url;
        gifImg1.alt = content.data[0].title;
        let out1 = document.querySelector('#gif1');

        let gifImg2 = document.createElement("img");
        gifImg2.src = content.data[1].images.fixed_width_small.url;
        gifImg2.alt = content.data[1].title;
        let out2 = document.querySelector('#gif2');

        let gifImg3 = document.createElement("img");
        gifImg3.src = content.data[2].images.fixed_width_small.url;
        gifImg3.alt = content.data[2].title;
        let out3 = document.querySelector('#gif3');

        let gifImg4 = document.createElement("img");
        gifImg4.src = content.data[3].images.fixed_width_small.url;
        gifImg4.alt = content.data[3].title;
        let out4 = document.querySelector('#gif4');

        let gifImg5 = document.createElement("img");
        gifImg5.src = content.data[4].images.fixed_width_small.url;
        gifImg5.alt = content.data[4].title;
        let out5 = document.querySelector('#gif5');

        let gifImg6 = document.createElement("img");
        gifImg6.src = content.data[5].images.fixed_width_small.url;
        gifImg6.alt = content.data[5].title;
        let out6 = document.querySelector('#gif6');
        out1.appendChild(gifImg1);
        out2.appendChild(gifImg2);
        out3.appendChild(gifImg3);
        out4.appendChild(gifImg4);
        out5.appendChild(gifImg5);
        out6.appendChild(gifImg6);
      })
      .catch(err => {
        console.error("This didn't work.");
      })

  });

}

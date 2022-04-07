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
            <div class="col">2 days, 4 hours ago</div>
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

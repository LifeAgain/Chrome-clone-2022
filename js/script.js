const container = document.querySelector("#container");
const login = document.querySelector(".login");
const loginForm = document.querySelector("#login-form");
const clockArea = document.querySelector(".clock");
const quoteArea = document.querySelector(".quotes");

function randomBg() {
  const bg = [
    "bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"
  ];
  const bgIndex = Math.floor(Math.random() * bg.length);
  container.style.background = `url(img/${bg[bgIndex]}) no-repeat`;
  container.style.backgroundSize = "cover";
} // bg

function getQuotes() {
  const quotes = [
    {
      quote:"Don't announce my death.",
      author:"Yi Sunsin"
    },
    {
      quote:"If you wanna die, you will live. but if you wanna live, you will die.",
      author:"Wuzi"
    },
    {
      quote:"My majesty, I still got 12 ships.",
      author:"Yi Sunsin"
    },
    {
      quote:"It's all my responsibility.",
      author:"Yi Bangwon, King Taejong"
    },
    {
      quote:"Having been riding a tiger for 18 years, it is already enough.",
      author:"Yi Bangwon, King Taejong"
    },
    {
      quote:"Why don't you know that you're satisfied and go back?",
      author:"Euljimundeok"
    },
    {
      quote:"The language is different from China",
      author:"Yi Do, King Sejong"
    },
    {
      quote:"If we lose a language, you'll be able to understand it is lost, so you can't achieve independence forever.",
      author:"Joo Si-kyoung"
    },
    {
      quote:"It's hard to speak in a diffrent language. It's like parrot talking to a person to imitate a person.",
      author:"Kim Manjung"
    },
    {
      quote:"Korean love is the love of country.",
      author:"Choi Hyeonbae"
    }
  ];
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex].quote;
  const author = quotes[quoteIndex].author;

  quoteArea.innerHTML = `${quote}<br /><span>${author}</span>`;
} // quotes

function loginDisplay(profile, id) {
  loginForm.style.display = "none";
  login.append(document.createElement("p"));
  login.append(document.createElement("h1"));
  login.querySelector("p").innerHTML = "<img src='img/"+profile+"' alt='profileImg'>";
  login.querySelector("h1").innerHTML = id;
} // login

function submitEvent(e) {
  e.preventDefault();
  const profileArr = ["profile_img.jpg", "profile_img2.jpg"];
  const getProfile = Math.floor(Math.random() * profileArr.length);
  const userInfo = {
    username: loginForm.querySelector("#username").value,
    password: loginForm.querySelector("#password").value,
    profileImg: profileArr[getProfile]
  };
  if (userInfo.username == "" || userInfo.password == "") {
    alert("ID 또는 비밀번호를 입력해주세요.");
    return false;
  } else if (userInfo.username === userInfo.password) {
    alert("ID와 비밀번호를 다르게 해주세요.");
    return false;
  } else {
    const setId = localStorage.setItem("username", userInfo.username);
    const setImg = localStorage.setItem("profileImg", userInfo.profileImg);
    loginDisplay(userInfo.profileImg, userInfo.username);
    return true;
  }
} // login

const userId = localStorage.getItem("username");
const profileImg = localStorage.getItem("profileImg");

if (userId === null) {
  loginForm.style.display = "block";
  loginForm.addEventListener("submit", submitEvent);
} else loginDisplay(profileImg, userId); // login

function getTime() {
  const clock = new Date();
  const month = clock.getMonth() + 1;
  const date = clock.getDate();
  const getDay = clock.getDay();
  const day = ['일', '월', '화', '수', '목', '금', '토'];
  const hours = clock.getHours();
  const minutes = clock.getMinutes();
  const seconds = clock.getSeconds();

  clockArea.innerHTML =
  `${hours<10?`0${hours}`:hours} :
  ${minutes<10?`0${minutes}`:minutes} :
  ${seconds<10?`0${seconds}`:seconds}<br />
  <span>${month}월 ${date}일 ${day[getDay]}요일</span>`;
} // clock

getQuotes();
randomBg();
loginForm.addEventListener("submit", submitEvent);
getTime();
setInterval(getTime, 1000);

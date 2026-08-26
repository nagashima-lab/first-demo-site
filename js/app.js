const radius = 75;
const circumference = 2 * Math.PI * radius;

const tasks =
document.querySelectorAll(".task");

const progressCircle =
document.getElementById(
"progressCircle"
);

function getRank(percent){

if(percent===100)
return "🏆 Master";

if(percent>=80)
return "🥇 Gold";

if(percent>=50)
return "🥈 Silver";

return "🥉 Bronze";
}

function updateProgress(){

const checked =
document.querySelectorAll(
".task:checked"
).length;

const percent =
Math.round(
checked /
tasks.length *
100
);

document.getElementById(
"progressPercent"
).textContent =
percent + "%";

document.getElementById(
"avgProgress"
).textContent =
percent + "%";

document.getElementById(
"badgeCount"
).textContent =
percent===100 ? "1" : "0";

document.getElementById(
"rank"
).textContent =
getRank(percent);

const offset =
circumference -
(percent/100)
*circumference;

progressCircle.sty*e.strokeDashoffset =
offset;

loca*Storage.setItem(
"progress",
JSON.*tringify(
Array.from(tasks)
.map(t*>t.checked)
)
);

if(percent===100){

document
.getElementById("badge")
.classList.remove("hidden");

}else{

document
.getElementById("badge")
.classList.add("hidden");
}
}

const saved =
JSON.parse(
localStorage.getItem("progress")
);

if(saved){

tasks.forEach((t,i)=>{
t.checked=saved[i];
});
}

tasks.forEach(task=>{
task.addEventListener(
"change",
updateProgress
);
});

function updateCountdown(){

const exam =
new Date("2026-12-31");

const today =
new Date();

const diff =
Math.ceil(
(exam-today)/
(1000*60*60*24)
);

document
.getElementById("countdown")
.textContent =
"📅 D-" + diff;
}

function recordStudy(){

const today =
new Date()
.toISOString()
.split("T")[0];

const last =
localStorage.getItem(
"lastStudy"
);

let streak =
parseInt(
localStorage.getItem(
"streak"
)||0
);

const yesterday =
new Date();

yesterday.setDate(
yesterday.getDate()-1
);

const y =
yesterday
.toISOString()
.split("T")[0];

if(last===today){

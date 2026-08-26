
const examDate =
new Date("2026-12-31");

function updateCountdown(){

    const today = new Date();

    const diff =
    examDate - today;

    const days =
    Math.ceil(
        diff /
        (1000*60*60*24)
    );

    document.getElementById(
        "countdown-az900"
    ).innerText =
    `試験まであと ${days} 日`;
}

function saveState(){

    const tasks =
    document.querySelectorAll(
        ".az900-task"
    );

    const values = [];

    tasks.forEach(task => {
        values.push(
            task.checked
        );
    });

    localStorage.setItem(
        "az900tasks",
        JSON.stringify(values)
    );
}

function loadState(){

    const values =
    JSON.parse(
        localStorage.getItem(
            "az900tasks"
        )
    );

    if(!values) return;

    document
    .querySelectorAll(".az900-task")
    .forEach((task,index)=>{

        task.checked =
        values[index];

    });
}

function updateProgress(){

    const tasks =
    document.querySelectorAll(
        ".az900-task"
    );

    const checked =
    document.querySelectorAll(
        ".az900-task:checked"
    ).length;

    const percent =
    Math.round(
        checked /
        tasks.length *
        100
    );

    document.getElementById(
        "progress-text-az900"
    ).innerText =
    percent + "%";

    document.getElementById(
        "progress-bar-az900"
    ).style.width =
    percent + "%";

    const badge =
    document.getElementById(
        "badge-az900"
    );

    if(percent === 100){

        badge.classList.remove(
            "hidden"
        );

    }else{

        badge.classList.add(
            "hidden"
        );
    }

    saveState();
}

loadState();

document
.querySelectorAll(".az900-task")
.forEach(task=>{

    task.addEventListener(
        "change",
        updateProgress
    );

});

updateProgress();
updateCountdown();

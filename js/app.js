const certifications = [

{
    id:"az900",
    examDate:"2026-12-31"
},

{
    id:"ai900",
    examDate:"2026-11-30"
}

];

function saveState(id){

    const values = [];

    document
    .querySelectorAll(`.${id}-task`)
    .forEach(task => {

        values.push(task.checked);

    });

    localStorage.setItem(
        id,
        JSON.stringify(values)
    );

}

function loadState(id){

    const data =
    JSON.parse(
        localStorage.getItem(id)
    );

    if(!data) return;

    document
    .querySelectorAll(`.${id}-task`)
    .forEach((task,index)=>{

        task.checked =
        data[index];

    });

}

function updateCertification(id){

    const tasks =
    document.querySelectorAll(
        `.${id}-task`
    );

    const checked =
    document.querySelectorAll(
        `.${id}-task:checked`
    ).length;

    const percent =
    Math.round(
        checked /
        tasks.length *
        100
    );

    document.getElementById(
        `${id}-percent`
    ).textContent =
    percent + "%";

    document.getElementById(
        `${id}-bar`
    ).style.width =
    percent + "%";

    const badge =
    document.getElementById(
        `${id}-badge`
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

    saveState(id);
    updateSummary();
}

function updateSummary(){

    const ids =
    ["az900","ai900"];

    let total = 0;
    let completed = 0;

    ids.forEach(id => {

        total += parseInt(
            document.getElementById(
                `${id}-percent`
            ).textContent
        );

        if(
            parseInt(
                document.getElementById(
                    `${id}-percent`
                ).textContent
            ) === 100
        ){
            completed++;
        }

    });

    document.getElementById(
        "avgProgress"
    ).textContent =
    Math.round(
        total / ids.length
    ) + "%";

    document.getElementById(
        "badgeCount"
    ).textContent =
    completed;
}

function updateCountdown(){

    certifications.forEach(cert => {

        const today =
        new Date();

        const exam =
        new Date(
            cert.examDate
        );

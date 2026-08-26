/* =========================
   Summary Cards
========================= */

const summaryContainer =
document.getElementById("summary");

portalData.summary.forEach(item => {

    summaryContainer.innerHTML += `

        <div class="summary-card">

            <span>${item.icon}</span>

            <h2>${item.value}</h2>

            <p>${item.label}</p>

        </div>

    `;

});


/* =========================
   Next Meeting Countdown
========================= */

function updateCountdown(){

    const today =
        new Date();

    const nextMeeting =
        new Date(portalData.nextMeeting);

    const diffDays =
        Math.ceil(
            (nextMeeting - today)
            /
            (1000 * 60 * 60 * 24)
        );

    document.getElementById(
        "nextDays"
    ).textContent =
        "ミラノ";

    document.getElementById(
        "nextDate"
    ).textContent =
        portalData.nextMeeting;

}

updateCountdown();


/* =========================
   Event List
========================= */

const eventList =
document.getElementById(
    "eventList"
);

portalData.events.forEach(event => {

    eventList.innerHTML += `

        <div class="event-item">

            <strong>
                ${event.date}
            </strong>

            <h3>
                ${event.title}
            </h3>

            <p>
                ${event.description}
            </p>

        </div>

    `;

});


/* =========================
   Certification Cards
========================= */

const certificationList =
document.getElementById(
    "certificationList"
);

portalData.certifications.forEach(cert => {

    certificationList.innerHTML += `

        <div class="cert-card">

            <h3>
                ${cert.icon}
                ${cert.name}
            </h3>

            <p>
                ${cert.title}
            </p>

            <div class="progress">

                <div
                    class="progress-bar"
                    style="
                        width:${cert.progress}%;
                        background:${cert.color};
                    ">
                </div>

            </div>

            <div class="progress-value">

                ${cert.progress}%

            </div>

            <div class="rank">

                ${cert.rank}

            </div>

        </div>

    `;

});


/* =========================
   AI Links
========================= */

const linkList =
document.getElementById(
    "linkList"
);

portalData.links.forEach(link => {

    linkList.innerHTML += `

        ${link.url}

            ${link.title}

        </a>

    `;

});


/* =========================
   Heatmap
========================= */

const heatmap =
document.getElementById(
    "heatmap"
);

portalData.heatmap.forEach(level => {

    const cell =
        document.createElement(
            "div"
        );

    cell.className =
        `cell level${level}`;

    heatmap.appendChild(
        cell
    );

});


/* =========================
   Chart.js
========================= */

const chartCanvas =
document.getElementById(
    "studyChart"
);

new Chart(chartCanvas, {

    type: "bar",

    data: {

        labels:
            portalData.studyHours.labels,

        datasets: [

            {

                label: "学習時間(h)",

                data:
                    portalData.studyHours.values,

                backgroundColor: [

                    "#2563eb",
                    "#3b82f6",
                    "#60a5fa",
                    "#818cf8",
                    "#8b5cf6",
                    "#a855f7"

                ],

                borderRadius: 12

            }

        ]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                labels: {

                    color:
                        getComputedStyle(
                            document.body
                        )
                        .getPropertyValue(
                            "--text"
                        )

                }

            }

        },

        scales: {

            y: {

                beginAtZero: true,

                ticks: {

                    color:
                        getComputedStyle(
                            document.body
                        )
                        .getPropertyValue(
                            "--text"
                        )

                },

                grid: {

                    color:
                        "rgba(255,255,255,.1)"

                }

            },

            x: {

                ticks: {

                    color:
                        getComputedStyle(
                            document.body
                        )
                        .getPropertyValue(
                            "--text"
                        )

                },

                grid: {

                    color:
                        "rgba(255,255,255,.05)"

                }

            }

        }

    }

});


/* =========================
   Theme Toggle
========================= */

const themeButton =
document.getElementById(
    "themeToggle"
);

if(
    localStorage.getItem(
        "theme"
    ) === "light"
){

    document.body.classList.add(
        "light"
    );

    themeButton.textContent =
        "☀️";
}

themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );

        const isLight =
            document.body
            .classList
            .contains(
                "light"
            );

        localStorage.setItem(
            "theme",
            isLight
                ? "light"
                : "dark"
        );

        themeButton.textContent =
            isLight
                ? "☀️"
                : "🌙";

    }
);


/* =========================
   Fade In Animation
========================= */

const observer =
new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add(
                    "show"
                );

            }

        });

    },

    {
        threshold: 0.1
    }

);

document
.querySelectorAll(".fade-in")
.forEach(item => {

    observer.observe(item);

});

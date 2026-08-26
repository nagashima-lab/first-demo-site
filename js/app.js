const eventList =
document.getElementById(
    "eventList"
);

events.forEach(event=>{

    eventList.innerHTML += `

    <div class="event-item">

        <strong>${event.date}</strong>

        ${event.title}

    </div>

    `;
});

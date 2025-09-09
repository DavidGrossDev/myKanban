let tickets = [
    {
        "id" : 0,
        "title" : "Küche putzen",
        "description" : "Mit warmem Wasser die Kückenzeile abwischen",
        "category" : "toDo",
        "assignContacts" : "",
        "date" : "08.09.2025",
        "prio" : "urgent"
    },
    {
        "id" : 1,
        "title" : "Wohnzimmer putzen",
        "description" : "Den Boden staubsaugen",
        "category" : "toDo",
        "assignContacts" : "",
        "date" : "08.09.2025",
        "prio" : "medium"
    },
    {
        "id" : 2,
        "title" : "Wohnzimmer putzen",
        "description" : "Den Boden staubsaugen",
        "category" : "sprint",
        "assignContacts" : "",
        "date" : "08.09.2025",
        "prio" : "medium"
    }
]

let currentDraggedElement;

function init() {
    updateHTML();
}

function getTemplate(element) {
    return `<li draggable="true" ondragstart="startDragging(${element['id']})">
                <div>
                    <h3>${element['title']}</h3>
                    <p>${element['description']}</p>
                </div>
    </li>`;
}

function moveTo(category) {
    tickets[currentDraggedElement]['category'] = category;
    updateHTML();
}

function startDragging(id) {
    currentDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function updateHTML() {
    let toDo = tickets.filter( t => t['category'] == 'toDo');

    document.getElementById('to_do_content').innerHTML = "";

    for (let i = 0; i < toDo.length; i++) {
        const element = toDo[i];
        document.getElementById('to_do_content').innerHTML += getTemplate(element);
    }

    let sprint = tickets.filter( t => t['category'] == 'sprint');

    document.getElementById('sprint_content').innerHTML = "";

    for (let i = 0; i < sprint.length; i++) {
        const element = sprint[i];
        document.getElementById('sprint_content').innerHTML += getTemplate(element);
    }

    let progress = tickets.filter( t => t['category'] == 'inProgress');
   
    document.getElementById('in_progress_content').innerHTML = "";

    for (let i = 0; i < progress.length; i++) {
        const element = progress[i];
        document.getElementById('in_progress_content').innerHTML += getTemplate(element);
    }

    let done = tickets.filter( t => t['category'] == 'done');

    document.getElementById('done_content').innerHTML = "";

    for (let i = 0; i < done.length; i++) {
        const element = done[i];
        document.getElementById('done_content').innerHTML += getTemplate(element);
    }
}
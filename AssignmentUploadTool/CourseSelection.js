function loadCourseSelection() {
    const courses = [
        { id: "course1", name: "Mensch-Computer-Interaktion", prof: "Eddie Jessup" },
        { id: "course2", name: "IT-Sicherheit", prof: "William Dyer" },
        { id: "course3", name: "Data Science", prof: "Jason Bourne" },
        { id: "course4", name: "Spieleentwicklung", prof: "Gervase Fen" },
        { id: "course5", name: "Mathematik 2 - Analysis", prof: "Digory Kirke" },
        { id: "course6", name: "Informatik 1 - C", prof: "James Dunworthy" },
        { id: "course7", name: "Digitale Systeme", prof: "Hari Seldon" },
        { id: "course8", name: "Rechnernetze", prof: "Dors Venabili" },
    ];

    const app = document.getElementById("app");
    app.innerHTML = `
        <div style="text-align: center; margin: 20px;">
        <div style="position: absolute; top: 20px; left: 20px;">
            <button onclick="logout()" style="padding: 10px 20px; font-size: 22px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; border-radius: 5px; margin-right: 10px;">Logout</button>
            <button onclick="logout()" style="padding: 10px 20px; font-size: 22px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; border-radius: 5px;">Back</button>
        </div>
            <h1 style="font-size: 54px; color: #00519e;">Wähle Kurs aus</h1>
            <div style="
                display: flex; 
                flex-wrap: wrap; 
                justify-content: center; 
                gap: 20px; 
                margin-top: 20px;">
                ${courses
                    .map(
                        (course) => `
                            <div 
                                onclick="loadAssignmentSelection('${course.name}', '${course.prof}')"
                                style="
                                    background-color:rgb(9, 92, 168);
                                    color: #fff;
                                    font-size: 40px;
                                    padding: 20px;
                                    border-radius: 8px;
                                    width: 400px;
                                    text-align: center;
                                    cursor: pointer;
                                    transition: transform 0.2s, box-shadow 0.2s;
                                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                                "
                                onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 8px rgba(0,0,0,0.15)';"
                                onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                            >
                                ${course.name}
                            </div>
                        `
                    )
                    .join("")}
            </div>
        </div>
    `;
}

function logout() {
    loadLoginPage();
}


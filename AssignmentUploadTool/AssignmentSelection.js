function loadAssignmentSelection(courseName, prof) {
    const assignments = [
        { name: "Assignment 1", points: "9/10", tutor: "Müller", hasCorrection: true },
        { name: "Assignment 2", points: "8/10", tutor: "Mayer", hasCorrection: true },
        { name: "Assignment 3", points: "10/10", tutor: "Schneider", hasCorrection: true },
        { name: "Assignment 4", points: "-", tutor: "Schmidt", hasCorrection: false }
    ];

    const app = document.getElementById("app");
    app.innerHTML = `
    ${createHeader("Assignment Auswahl")}
        <div style="text-align: center; padding-top 100px;">
        <div style="position: absolute; top: 20px; left: 20px;">
            <button onclick="logout()" style="padding: 10px 20px; font-size: 22px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; border-radius: 5px; margin-right: 10px;">Logout</button>
            <button onclick="goBack()" style="padding: 10px 20px; font-size: 22px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; border-radius: 5px;">Back</button>
        </div>
            <h1>Kurs: ${courseName}</h1>
            <h1>Professor: ${prof}</h1>
            <table style="width: 100%; margin: 40px auto; border-collapse: collapse; font-size: 20px;">
                <thead>
                    <tr style="background-color: rgb(9, 92, 168); color: white;">
                        <th style="padding: 20px;">Assignment</th>
                        <th style="padding: 20px;">Punkte</th>
                        <th style="padding: 20px;">Tutor</th>
                        <th style="padding: 20px;">Korrektur</th>
                    </tr>
                </thead>
                <tbody>
                    ${assignments
                        .map(
                            (assignment) => `
                                <tr style="background-color:rgb(220, 226, 231)">
                                    <td style="padding: 20px; text-align: center;">
                                        ${assignment.hasCorrection ? 
                                            `<span>${assignment.name}</span>` : 
                                            `<button style="
                                                background: none;
                                                border: none;
                                                color: rgb(9, 92, 168);
                                                font-size: 20px;
                                                text-decoration: underline;
                                                cursor: pointer;
                                            " onclick="loadGroupSelection('${courseName}', '${assignment.name}')">${assignment.name}</button>`
                                        }
                                    </td>
                                    <td style="padding: 20px; text-align: center;">${assignment.points}</td>
                                    <td style="padding: 20px; text-align: center;">${assignment.tutor}</td>
                                    <td style="padding: 20px; text-align: center;">
                                        ${assignment.hasCorrection ? 
                                            `<button style="
                                                background-color: rgb(9, 92, 168);
                                                color: white;
                                                padding: 10px;
                                                border: none;
                                                cursor: pointer;
                                                font-size: 14px;
                                                border-radius: 5px;
                                            " onclick="">Download</button>` 
                                            : "No Correction"
                                        }
                                    </td>
                                </tr>
                            `
                        )
                        .join("")}
                </tbody>
            </table>
        </div>
    `;
}

function logout() {
    loadLoginPage();
}




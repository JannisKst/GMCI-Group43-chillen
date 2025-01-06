function loadTutorAssignmentSelection() {
    const assignments = [
        { name: "Assignment 1" },
        { name: "Assignment 2" },
        { name: "Assignment 3" },
        { name: "Assignment 4" }
    ];

    const app = document.getElementById("app");
    app.innerHTML = `
        ${createHeader("Assignment Auswahl")}
        <div style="text-align: center; margin: 20px;">
            <h1>Kurs: Mensch-Computer-Interaktion</h1>
            <h1>Professor: Albus Dumbledore</h1>
            <table style="width: 100%; margin: 40px auto; border-collapse: collapse; font-size: 20px;">
                <thead>
                    <tr style="background-color: rgb(9, 92, 168); color: white;">
                        <th style="padding: 20px; text-align: center;">Assignment</th>
                    </tr>
                </thead>
                <tbody>
                    ${assignments
                        .map(
                            (assignment) => `
                                <tr style="background-color:rgb(220, 226, 231)">
                                    <td style="padding: 20px; text-align: center;">
                                        <button style="
                                                background: none;
                                                border: none;
                                                color: rgb(9, 92, 168);
                                                font-size: 20px;
                                                text-decoration: underline;
                                                cursor: pointer;
                                            " onclick="loadTutorGroupSelection('Mensch-Computer-Interaktion', '${assignment.name}')">${assignment.name}
                                        </button>
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
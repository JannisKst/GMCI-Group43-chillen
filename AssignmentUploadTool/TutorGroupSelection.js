function loadTutorGroupSelection(courseName, assignmentName) {
    const app = document.getElementById("app");
    app.innerHTML = `
    ${createHeader("Gruppen Auswahl")}
        <div style="text-align: center; margin-top: 100px;">
            <div style="position: absolute; top: 20px; left: 20px;">
                <button onclick="logout()" style="padding: 10px 20px; font-size: 22px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; border-radius: 5px; margin-right: 10px;">Logout</button>
                <button onclick="goBack()" style="padding: 10px 20px; font-size: 22px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; border-radius: 5px;">Back</button>
            </div>
            <h1>Gruppen Auswahl für ${assignmentName} in ${courseName}</h1>

            <table style="width: 100%; margin-top: 20px; border-collapse: collapse; font-size: 18px;">
                <thead>
                    <tr class="header" style="background-color: rgb(9, 92, 168); color: white;">
                        <th style="padding: 20px;">Group Name</th>
                        <th style="padding: 20px;">Participants</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onclick="joinTutorGroup('${assignmentName}', 'Group 1')" style="background-color: rgb(220, 226, 231); cursor: pointer;">
                        <td style="padding: 15px;">Group 1</td>
                        <td style="padding: 15px;">Max Mustermann, Tobias Müller</td>
                    </tr>
                    <tr onclick="joinTutorGroup('${assignmentName}', 'Group 2')" style="background-color: rgb(220, 226, 231); cursor: pointer;">
                        <td style="padding: 15px;">Group 2</td>
                        <td style="padding: 15px;">Katy Perry, Lady Gaga, Sabrina Carpenter</td>
                    </tr>
                    <tr onclick="joinTutorGroup('${assignmentName}', 'Group 3')" style="background-color: rgb(220, 226, 231); cursor: pointer;">
                        <td style="padding: 15px;">Group 3</td>
                        <td style="padding: 15px;">Thomas Müller, Lukas Podolski</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function joinTutorGroup(assignmentName, groupName) {
    loadTutorSubmissionPage(assignmentName, groupName);
}

function logout() {
    loadLoginPage();
}

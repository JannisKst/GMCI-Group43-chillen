function loadGroupSelection(courseName, assignmentName) {
    const app = document.getElementById("app");
    app.innerHTML = `
    ${createHeader("Gruppen Wahl")}
        <div style="text-align: center; margin-top 100px;">
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
                    <tr onclick="highlightGroup(this, 'Group 1')" style="background-color: rgb(220, 226, 231); cursor: pointer;">
                        <td style="padding: 15px;">Group 1</td>
                        <td style="padding: 15px;">Max Mustermann, Tobias Müller</td>
                    </tr>
                    <tr onclick="highlightGroup(this, 'Group 2')" style="background-color: rgb(220, 226, 231); cursor: pointer;">
                        <td style="padding: 15px;">Group 2</td>
                        <td style="padding: 15px;">Katy Perry, Lady Gaga, Sabrina Carpenter</td>
                    </tr>
                    <tr onclick="highlightGroup(this, 'Group 3')" style="background-color: rgb(220, 226, 231); cursor: pointer;">
                        <td style="padding: 15px;">Group 3</td>
                        <td style="padding: 15px;">Thomas Müller, Lukas Podolski</td>
                    </tr>
                </tbody>
            </table>

            <div style="margin-top: 20px;">
                <button id="joinGroupButton" onclick="joinGroup('${assignmentName}')" style="display: none; padding: 10px 20px; background-color:rgb(79, 153, 223); color: white; border: none; cursor: pointer; font-size: 18px; border-radius: 5px;">Gruppe beitreten</button>
                <button onclick="createGroupPopup()" style="padding: 10px 20px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; font-size: 18px; border-radius: 5px;">Gruppe erstellen</button>
            </div>

            <div id="groupPopup" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 15px rgba(0,0,0,0.2); width: 300px;">
                <h2>Neue Gruppe erstellen</h2>
                <input type="text" id="newGroupName" placeholder="Gruppenname" style="width: calc(100% - 20px); padding: 10px; font-size: 16px; margin-bottom: 15px;">
                <button onclick="createGroup('${assignmentName}')" style="padding: 10px 20px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; font-size: 18px; border-radius: 5px;">Gruppe erstellen</button>
                <button onclick="closePopup()" style="padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; font-size: 18px; border-radius: 5px;">Abbrechen</button>
            </div>
        </div>
    `;
}

let selectedGroupName = "";

function highlightGroup(groupRow, groupName) {

    selectedGroupName = groupName;

    const allGroups = document.querySelectorAll("tr:not(.header)");
    allGroups.forEach(group => {
        group.style.backgroundColor = "rgb(220, 226, 231)";
    });

    groupRow.style.backgroundColor = "rgb(79, 153, 223)";
    document.getElementById("joinGroupButton").style.display = "inline-block";
}

function joinGroup(assignmentName) {
    loadSubmissionPage(assignmentName, selectedGroupName);
}

function createGroupPopup() {
    document.getElementById("groupPopup").style.display = "block";
}

function createGroup(assignmentName) {
    const groupName = document.getElementById("newGroupName").value;
    if (groupName.trim()) {
        closePopup();
        loadSubmissionPage(assignmentName, groupName);
    } else {
        console.error("error in group creation");
    }
}

function closePopup() {
    document.getElementById("groupPopup").style.display = "none";
}

function logout() {
    loadLoginPage();
}

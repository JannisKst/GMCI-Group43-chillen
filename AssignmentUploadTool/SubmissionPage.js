function loadSubmissionPage(assignmentName, groupName) {
    const app = document.getElementById("app");
    app.innerHTML = `
    ${createHeader("Assignment Abgabe")}
        <div style="text-align: center; margin: 20px;">
        <div style="position: absolute; top: 20px; left: 20px;">
            <button onclick="logout()" style="padding: 10px 20px; font-size: 22px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; border-radius: 5px; margin-right: 10px;">Logout</button>
            <button onclick="goBack()" style="padding: 10px 20px; font-size: 22px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; border-radius: 5px;">Back</button>
        </div>
            <h1>Abgabe für: ${assignmentName}</h1>
            <h2>Gruppe: ${groupName}</h2>
            
            <div id="dragAndDropArea" 
                 style="width: 500px; height: 500px; margin: 40px auto; border: 3px dashed #007bff; display: flex; align-items: center; justify-content: center; position: relative;">
                <div id="dragText" style="position: absolute; font-size: 20px; color: #007bff; font-weight: bold;">Assignment hier rein ziehen</div>
            </div>

            <div style="margin-top: 20px;">
                <button onclick="selectFile()" style="padding: 10px 20px; background-color:rgb(79, 153, 223); color: white; border: none; cursor: pointer; font-size: 18px; border-radius: 5px;">Auswählen</button>
                <button onclick="submitAssignment()" style="padding: 10px 20px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; font-size: 18px; border-radius: 5px;">Abgeben</button>
            </div>
        </div>
    `;

    const dropArea = document.getElementById("dragAndDropArea");

    dropArea.addEventListener("dragover", function (e) {
        e.preventDefault();
        dropArea.style.backgroundColor = "rgba(0, 123, 255, 0.1)";
    });

    dropArea.addEventListener("dragleave", function () {
        dropArea.style.backgroundColor = "transparent";
    });

    dropArea.addEventListener("drop", function (e) {
        e.preventDefault();
        dropArea.style.backgroundColor = "transparent";

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const fileName = files[0].name;
            document.getElementById("dragText").innerText = fileName;
        }
    });
}

function submitAssignment() {
    alert("Assignment abgegeben!");
}

function logout() {
    loadLoginPage();
}

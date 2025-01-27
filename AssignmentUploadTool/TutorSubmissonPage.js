function loadTutorSubmissionPage(assignmentName, groupName) {
    const app = document.getElementById("app");
    app.innerHTML = `
    ${createHeader("Korrektur Abgabe")}
        <div style="text-align: center; padding-top 2000px;">
            <h1>Abgabe für: ${assignmentName}</h1>
            <h2>Gruppe: ${groupName}</h2>
            
            <div id="dragAndDropArea" 
                 style="width: 500px; height: 500px; margin: 40px auto; border: 3px dashed #007bff; display: flex; align-items: center; justify-content: center; position: relative;">
                <div id="dragText" style="position: absolute; font-size: 20px; color: #007bff; font-weight: bold;">Assignment hier rein ziehen</div>
            </div>

            <div style="margin-top: 20px;">
                <button onclick="selectFile()" style="padding: 10px 20px; background-color:rgb(79, 153, 223); color: white; border: none; cursor: pointer; font-size: 18px; border-radius: 5px;">Auswählen</button>
                <button onclick="submitAssignment()" style="padding: 10px 20px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; font-size: 18px; border-radius: 5px;">Abgeben</button>
                <button onclick="downloadAssignment()" style="padding: 10px 20px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; font-size: 18px; border-radius: 5px;">Herunterladen</button>
            </div>

            <div style="margin-top: 20px;">
                <label for="inputNumber" style="font-size: 18px;">Punktzahl:</label>
                <input type="number" id="inputNumber" style="padding: 10px; font-size: 16px; margin-left: 10px; width: 100px; border-radius: 5px;">
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

function downloadAssignment() {
    alert("Assignment wird Heruntergeladen!")
}


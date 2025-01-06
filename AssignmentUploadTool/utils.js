function showPage(pageLoaderFunction) {
    pageLoaderFunction();
}

function createHeader(title) {
    return `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(79, 153, 223);
            padding: 15px 15px;
            height: 80px;
            color: white;
            z-index: 1000;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        ">
            <div style="position: absolute; left: 20px;">
                <button onclick="logout()" style="
                    padding: 10px 20px;
                    font-size: 22px;
                    background-color: white;
                    color: rgb(79, 153, 223);
                    border: none;
                    cursor: pointer;
                    border-radius: 5px;
                    margin-right: 10px;
                ">Logout</button>
            </div>
            <h1 style="margin: 0; font-size: 30px;">${title}</h1>
        </div>
        <div style="height: 80px;"></div>
    `;
}
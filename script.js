window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(responseJson) {
            let myAstronautDiv = document.getElementById("container");
            let content = ""
            responseJson.sort(function(astronaut1, astronaut2){return astronaut2.hoursInSpace - astronaut1.hoursInSpace});
            for (let index = 0; index < responseJson.length; index++) {
                let cssClass = ""
                if (responseJson[index].active === true) {
                    cssClass = "active"
                }
                content += `
                <div class="astronaut">
                <h3>${responseJson[index].firstName} ${responseJson[index].lastName}</h3>
                <ul>
                <li> Hours in Space: ${responseJson[index].hoursInSpace}</li>
                <li class = "${cssClass}"> Active: ${responseJson[index].active}</li>
                <li> Skills: ${responseJson[index].skills}</li>
                </ul>
                <img class="avatar" src="${responseJson[index].picture}">
                </div>
                `

                console.log(responseJson[index].firstName);
            }
            myAstronautDiv.innerHTML = content + `<p>Astronaut Count: ${responseJson.length}</p>`
            
        });
    });
});
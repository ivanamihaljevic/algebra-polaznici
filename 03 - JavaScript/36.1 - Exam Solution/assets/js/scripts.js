// SOLUTION BY LECTURER

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => errorFunction(error));

function showData(data) {
    let tab =
        `<caption id='hero'>COVID-19: Worldwide Statistics
        <p id='total'>There is a total of ${data.Global.TotalConfirmed.toLocaleString('de-DE')} confirmed COVID-19 cases worldwide. So far, ${data.Global.TotalDeaths.toLocaleString('de-DE')} people have died because of COVID-19. Data is updated automatically once a day.<br><br>Data updated on ${new Date(data.Global.Date).toLocaleDateString('en-US', options)}.</p></caption>
        <tr>
            <th>Country</th>
            <th>Total cases</th>
            <th>Total deaths</th>
            </tr>`;

    for (let i of data?.Countries) {
        tab = tab + `<tr> 
                    <td>${i.Country} </td>
                    <td>${i.TotalConfirmed.toLocaleString('de-DE')}</td>
                    <td>${i.TotalDeaths.toLocaleString('de-DE')}</td>         
                    </tr>`;
    }
    document.getElementById('covid-data').innerHTML = tab;
}

function errorFunction(error) {
    document.getElementById('error').style.display = 'inherit';
    document.getElementById('error-message').innerHTML = `${error}`;
}
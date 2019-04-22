var req = new XMLHttpRequest();
var req5Days = new XMLHttpRequest();
function getData(){
    var name_div = document.getElementById("result");
    var loc = document.getElementById("location").value;

    link = "http://api.openweathermap.org/data/2.5/weather?q="+loc+"&units=imperial&appid=860d6f4dedb54ce77c336343cb748f4f"
    link5Days = "http://api.openweathermap.org/data/2.5/forecast?q="+loc+"&units=imperial&appid=860d6f4dedb54ce77c336343cb748f4f"

    req.open("GET", link, true);
    req5Days.open("GET", link5Days, true);

    req.send();
    req5Days.send();

    req.onload = parseData;
    req5Days.onload = parse5Days;
}

function parseData(){
    if(req.status == 200){
        reqJSON = JSON.parse(req.response);
        title = reqJSON.name;
        desc = reqJSON.weather[0].main;
        temp = Math.round(reqJSON.main.temp);
        pres = reqJSON.main.pressure;
        min = Math.round(reqJSON.main.temp_min);
        max = Math.round(reqJSON.main.temp_max);
        icn = reqJSON.weather[0].icon;
        source = "http://openweathermap.org/img/w/"+icn+".png";

        document.getElementById("place").innerHTML = title;
        document.getElementById("description").innerHTML = desc;
        document.getElementById("pressure").innerHTML = "Pressure: " + pres;
        document.getElementById("min").innerHTML = "Low: " +min+"ºF";
        document.getElementById("max").innerHTML = "High: " +max+"ºF";
        document.getElementById("temp").innerHTML = temp + "ºF";

        document.getElementById("icon").src = source;

        document.getElementById("result").style.display = "block";
    }
}

function parse5Days(){
    var forecast = document.getElementById("forecast");
    forecast.innerHTML = "<p id='label'>5 day forecast</p>";
    if(req5Days.status == 200){
        reqJSON = JSON.parse(req5Days.response);
        // Get the whole days
        for(i = 0; i < reqJSON.list.length; i++){
            let description = reqJSON.list[i].weather[0].main;
            let temp = Math.round(reqJSON.list[i].main.temp);
            
            let time = reqJSON.list[i].dt_txt.split(" ");
            if(time[1] == "00:00:00"){
                icn = reqJSON.list[i].weather[0].icon;
                source = "http://openweathermap.org/img/w/"+icn+".png";
                pres = reqJSON.list[i].main.pressure;
                min = Math.round(reqJSON.list[i].main.temp_min);
                max = Math.round(reqJSON.list[i].main.temp_max);

                forecast.innerHTML += "<div id='forecastSections'>"+
                "<p class='forecastInfo' id='date'>" + time[0].split("2019-0")[1] + "</p><br>"+
                "<p class='forecastInfo' id='description'>" + description + "</p><br>"+
                "<img src="+source+" id='icon' style=height:75px;width:75px;>'"+
                "<p class='forecastInfo' id='pressure'>Pressure: " + pres + "</p><br>"+
                "<p class='forecastInfo' id='min'>Low: " + min + "ºF</p><br>"+
                "<p class='forecastInfo' id='max'High>Max: " + max + "ºF</p><br>"+
                "</div>";
            }
        }
    }
}

/*
Weather API Key: 860d6f4dedb54ce77c336343cb748f4f
URL format: api.openweathermap.org/data/2.5/weather?q=(THE CITY)&appid=860d6f4dedb54ce77c336343cb748f4f
*/
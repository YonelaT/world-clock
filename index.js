function updateTime(){
//South Africa
let  southAfricaElement=document.querySelector("#sa");
if(southAfricaElement.length){}
let southAfricaTime=moment().tz("Africa/Johannesburg");
southAfricaElementDateElement.innerHTML= moment().format("MMMM Do YYYY");
southAfricaElementTimeElement.innerHTML= southAfricaTime.format("h:mm:ss:SS[<small>]A[</small>]");
}
//Zimbabwe


let  zimbabweElement=document.querySelector("#zim");
if(zimbabweElement.length){}
let
zimbabweDateElement=zimbabweElement.querySelector(".date");
let zimbabweTime=moment().tz("Africa/Harare");
zimbabweDateElement.innerHTML= moment().format("MMMM Do YYYY");
zimbabweDateElement.innerHTML= zimbabweTime.format("h:mm:ss:SS[<small>]A[</small>]");


function updateCountry(event){
    let countryTimeZone=event.target.value;
    let countryName=countryTimeZone.replace('_',"").split("/");
    let countryTime=moment().tz(countryTimeZone);
    console.log(countryTime.format("MMMM Do YYYY"));
    let countriesElement=document.querySelector("#countries");
    countriesElement.innerHTML=countryTimeZone;
    countriesElement=` <div class="country">
                <div>
                    <h2> ${countryTimeZone}</h2>
                    <div class="date">${countryTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="time">${countryTime.format("h:mm:ss:SS")}<small>${countryTime.format("A")}}</div>
            </div>
            <div class="country">
                <div>
                    <h2>${countryTimeZone}</h2>
                    <div class="date"></div>
                </div>
                <div class="time"></div>
            </div>
            </div>
    </div>`

}
updateTime();
setInterval(updateTime,1000);
let countriesSelectElement = document.querySelector("#country");
contriesSelectoreElement.addEventListener("change",updateCountry);
}
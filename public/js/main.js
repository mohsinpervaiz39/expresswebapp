const submitbutton = document.getElementById('submitbtn');
const cityname = document.getElementById('cityName');

const getinfo = async (event) =>{
    let cityval = cityname.value;
    event.preventDefault();
    

    if(cityval === ""){

    } else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=e827926a48f5345f14c549b75e9d4acb`;
            const reponse = await fetch(url);
            const data = await reponse.json();
            const arrdata = [data];
        }
        catch{

        }

    }
} 

submitbutton.addEventListener('click', getinfo);
const timeDigital = document.getElementById('timeDigital');
const dayDigital = document.getElementById('dayDigital');
const minanalogElement = document.getElementById('minanalog');
const secanalogElement = document.getElementById('secanalog');
const houranalogElement = document.getElementById('houranalog');




const months = ['January','February','March','April','May','June','July','August','September','October','November','December' ]
const daysweek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const playClock = () =>{
    const date = new Date();
    let hour = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds();
    let dayweek = date.getDay();
    let daynumber = date.getDate();
    let numbermonth = date.getMonth();
    let year = date.getFullYear();

    timeDigital.textContent=`${hour} : ${minutes}`;
    dayDigital.textContent=`${daysweek[dayweek]} ${daynumber} ${months[numbermonth]} ${year}`
    
    const secDeg = (seconds / 60) * 360 + 90;
    const minDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90; 
    const hourDeg = (hour % 12 / 12) * 360 + (minutes / 60) * 30 + 90; 
    
    document.documentElement.style.setProperty('--secmove', `${secDeg}deg`);
    document.documentElement.style.setProperty('--minmove', `${minDeg}deg`);
    document.documentElement.style.setProperty('--hourmove', `${hourDeg}deg`);
   
}

setInterval(playClock,1000);
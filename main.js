document.querySelector('#getWeekday').addEventListener('click', findMusic)

function findMusic(){
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const d = new Date();
    let day = weekday[d.getDate()];
    document.querySelector('#todayIs').innerText = "Today is " + day + ". Here is the music for you"
}
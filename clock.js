let userName = prompt("Lutfen kullanıcı adını girin:");

if(userName <= 0 || !userName){
    alert("Lutfen geçerli bir kullanıcı adı giriniz!");
    location.reload();
}
else{
    let Name = document.querySelector("#myName");

    Name.innerHTML = userName;
}

const days = ["pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

function Time() {
    let current = new Date();
    let day = days[current.getDay()];
    let hours =current.getHours();
    let minute = current.getMinutes();
    let second = current.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    document.querySelector("#myClock").innerHTML = `${hours} ${minute} ${second} ${day}`


}
setInterval(Time, 1000);
Time();
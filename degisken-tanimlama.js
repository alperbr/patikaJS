// // // // // //var ServerName= "kodluyoruz.org"
// // // // // //console.log(ServerName);

// // // // // let ServerName;
// // // // // console.log(ServerName)
// // // // // ServerName= "patika.dev"
// // // // // let password = "1234";
// // // // // console.log(password);
// // // // // //console.log(fullName)               hatalı kullanım
// // // // // //var fullName = "hakan yalcinkaya"
// // // // // // const serverpassword; //degisken tanımlandı ama ici bos 
// // // // //  const serverpassword = "itelli26"
// // // // //  serverpassword="1234";
// // // // //  // const tanımlanan değişmez örnek tc no const ile tanımlanır
// // // // //  let price = 100;
// // // // //  let tax = 0.18;
// // // // //  let pricetax = price * tax
// // // // //  let total = price + pricetax
// // // // // console.log(
// // // // // "Fiyat : " , price , 
// // // // // "KDV Orani : " , tax,
// // // // // "KDV Tutarı : " , 
// // // // // "Fiyat : " , total
// // // // // )

// // // // // // arttirma ve azaltma islemleri

// // // // // let counter = 320;
// // // // // counter ++;
// // // // // console.log(counter);

// // // // // //mod alma (kalan)

// // // // // console.log(14%2) //  0 ise cift 1 ise tek

// // // // // //8 urun alan kolıye tum urunlerı koyarsam kac urun kalır ? 
// // // // // console.log(8%8);

// // // // // // us alma
// // // // // console.log(2 * 2 * 2 * 2);
// // // // // console.log (2 ** 4);

// // // // // // assagi yuvarlama
// // // // // console.log(Math.floor)
// // // // // let username = "hakan"
// // // // // const domain = "kodluyoruz.orj"
// // // // // let email = username + "@" + domain
// // // // // console.log("Merhaba" , username , "sitemize hoşgeldin" , "mail adresin: " , email)
// // // // // console.log (domain)
// // // // // console.log ("hakan")
// // // // // let pass = a1234
// // // // // console.log(pass)
// // // // // console.log("a1234")
// // // // // console.log("pass")
// // // // // console.log(pass)
// // // // // console.log(username)
// // // // // document.body.style.background = "aqua"

// // // // // let fullName = prompt("Lutfen Adinizi Giriniz")
// // // // let greeting  = document.querySelector("#greeting")
// // // // greeting.innerHTML = `${greeting.innerHTML}
// // // // <small style="color:red">${fullName}</small>`
// // // <>li</>
// // // let lastChild = document.querySelector("ul#list>li: last-child")
// // // let firstchild = document.querySelector("ul#list>li>first-child")
// // // firstchild.innerHTML = "ilk oge degisti..."
// // // let uldoDOM = document.querySelector
// // // console.log

// //   (username.length > 0 ) {console.log (username)}

// //let examGrade = prompt("puani giriniz")

// let firstName = prompt("Adınız:");

// let title = document.querySelector("#title");
// let user = document.querySelector("#user");
// let time = document.querySelector("#time");
// let para = document.querySelector("#para");
// let todayTime = document.querySelector("#today-time");
// let todayDate = document.querySelector("#today-date");
// let haftaninGunu = document.querySelector("day-of-week");
// let yilinGunu = document.querySelector("day-of-year");
// let haftaninYili = document.querySelector("week-of-year");

// title.innerHTML = `<b>KODLUYORUZ</b>`;
// title.classList.add("fw-bold");
// document.getElementById("title").style.fontSize = "xx-large";

// document.querySelector("#user").style.fontSize = "x-large";
// if (firstName.length > 0) {
//     user.innerHTML = `Merhaba, <b>${firstName}!</b> Hoş geldin!`;
// } else {
//     user.innerHTML = `Merhaba, Guest! Hoş geldin!`;
// }

// // fetch("http://worldtimeapi.org/api/timezone/Europe/Istanbul")
// //     .then((response) => response.json())
// //     .then((result) => {
// //         const rightNow = result.datetime.slice(11, 19);
// //         const date = result.datetime.slice(0, 10);
// //         const dayOfWeek = result.day_of_week;
// //         const dayOfYear = result.day_of_year;
// //         const weekOfYear = result.week_number;

// //         todayTime.innerHTML = `Saat: <b>${rightNow}</b>`;
// //         todayDate.innerHTML = `Tarih: <b>${date}</b>`;
// //         document.querySelector(
// //             "#day-of-week"
// //         ).innerHTML = `Bugün haftanın <b>${dayOfWeek}</b>. günü.`;
// //         document.querySelector(
// //             "#day-of-year"
// //         ).innerHTML = `Bugün yılın <b>${dayOfYear}</b>. günü.`;
// //         document.querySelector(
// //             "#week-of-year"
// //         ).innerHTML = `Bu hafta yılın <b>${weekOfYear}</b>. haftası.`;
// //     });

// // const months = [
// //     "January",
// //     "February",
// //     "March",
// //     "April",
// //     "May",
// //     "June",
// //     "July",
// //     "August",
// //     "September",
// //     "October",
// //     "November",
// //     "December",
// // ];

// const d = new Date();
// // const day = d.getDay();
// // const month = d.getMonth();
// // const year = d.getFullYear();
// // const sec = d.getSeconds();
// // const min = d.getMinutes();
// // const hour = d.getHours();
// const fullDate = d.toLocaleDateString();
// const fullTime = d.toLocaleTimeString();

// // console.log(asdsa);

// {
//     todayTime.innerHTML = `Saat: <b>${fullTime}</b>`;
//     todayDate.innerHTML = `Tarih: <b>${fullDate}</b>`;
//     //     document.querySelector(
//     //         "#day-of-week"
//     //     ).innerHTML = `Bugün haftanın <b>${monthAsString}</b>. günü.`;
//     //     document.querySelector(
//     //         "#day-of-year"
//     //     ).innerHTML = `Bugün yılın <b>${dayOfYear}</b>. günü.`;
//     //     document.querySelector(
//     //         "#week-of-year"
//     //     ).innerHTML = `Bu hafta yılın <b>${weekOfYear}</b>. haftası.`;
// }

// document.querySelector(
//     "#para"
// ).innerHTML = `<b>Kodluyoruz Frontend Web Development Patikası</b>'nın Javascript bölümü 1. ödevindesiniz.`;






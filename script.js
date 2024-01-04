 // // alert('Web telah eror')

// // console.log('Saya Dirga Pratama')

// // console.table (["durian","pisang","kentang"])

// // console.error("kalau ada eror")

// // console.warn("kode nya ga baek") 

// // let nama ="riski"
// // nama="joko"
// // console.log(nama);

// // const alamat ="jln sendirian"
// // console.log(alamat);


// // const nama ="joko"
// // let umur = 15
// // let alamat = "jln merdeka"
// // let kelas = "12 mipa"
// // let sekolah ="sma budi merdeka"
// // // console.log(nama);
// // // console.log(umur);
// // // console.log(alamat);
// // // console.log(kelas);
// // // console.log(sekolah);

// // console.log(`nama saya ${nama}`);
// // console.log(`umur saya ${umur}`);
// // console.log(`alamat saya di ${alamat}`);
// // console.log(`saya kelas ${kelas}`);
// // console.log(`saya bersekolah di ${sekolah}`);

// document.title  = 'belajar js'
// const body = document.body
// body.append('mengisi body')

// const h1 = document.createElement('h1')
// h1.textContent = 'BIMAAA'
// body.append(h1)

// const h2 = document.createElement('h2')
// h2.innerHTML= '<center>PIKSEN BOY</center>'
// body.append(h2)

// const h3 = document.createElement('h3')
// h3.innerHTML = '<marquee>STAR BOY'
// body.append(h3)

// const btn2 = document.getElementById('btn2')
// btn2.style.border = 'none'
// btn2.style.padding = '8px'
// btn2.style.background = 'grey'
// btn2.style.fontSize = '20px'
// function gantiwarna(){
//     btn2.style.background = 'lightblue'
//     btn2.textContent = 'TOMBOL SUDAH DIKLIK'
// }

// function ubahText(){
//     btn2.textContent = 'KURSOR MASUK DI AREA BUTTON/TOMBOL'
// }

// function hapus(){
//     var a=(confirm("apakah ingin menghapus data"))
//     if(a){
//         alert(`data berhasil di hapus`)
//         window.location = 'index2.html'
//     }else {
//         alert(`data batal di hapus`)
        
//     }
// }

const nama =["bima","majid","vania","yuda","syafik","hapis","gantari"];
// 1
console.log(nama);
// 2
console.log(nama.join('-'));
//3 
console.log(nama[3],nama[7]);
// 4
nama.push("bima");
console.log(nama);
// 5
nama.pop ();
console.log(nama);
// 6
nama.unshift("ronal");
console.log(nama);
// 7
nama.shift();
console.log(nama);
// 8
var nama2 = nama.slice(1,3);
console.log(nama2);
// 9
nama.splice(2,1,'ian','mesa');
console.log(nama);
/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function jumlahTabungan(listHarga, history) {
  let hargaSenin = 0;
  let hargaSelasa = 0;
  let hargaRabu = 0;
  let hargaKamis = 0;
  let hargaJumat = 0;
  let hargaTotal = 0;
  let arrResult = [{
      Senin: hargaSenin,
      Selasa: hargaSelasa,
      Rabu: hargaRabu,
      Kamis: hargaKamis,
      Jumat: hargaJumat,
      TotalTabungan: hargaTotal,
  }];
  history = history.split(",");
  history.map((item, index) => {
      listHarga.map((item, j) => {
          if(history.includes(item.nama) && history.includes('Senin')){
              arrResult['Senin'] += item.harga;
          }
          if(history.includes(item.nama) && history.includes('Selasa')){
              arrResult['Selasa'] += item.harga;
          }
          if(history.includes(item.nama) && history.includes('Rabu')){
              arrResult['Rabu'] += item.harga;
          }
          if(history.includes(item.nama) && history.includes('Kamis')){
              arrResult['Kamis'] += item.harga;
          }
          if(history.includes(item.nama) && history.includes('Jumat')){
              arrResult['Jumat'] += item.harga;
          }
      });
  })
  return arrResult;
}

var hargaMakanan = [
{
  nama: "ayam",
  harga: 5000
},
{
  nama: "nasi",
  harga: 2000
},
{
  nama: "cola",
  harga: 1000
},
{
  nama: "chiki",
  harga: 1500
},
{
  nama: "hotdog",
  harga: 3000
},
{
  nama: "aqua",
  harga: 2000
}
]

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`
console.log(jumlahTabungan(hargaMakanan, historyPembelian))
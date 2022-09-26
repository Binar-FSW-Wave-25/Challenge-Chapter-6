# Challenge-Chapter-6

- [ ] Mengetahui perbedaan arsitektur Monolitik dan Microservice secara garis besar
- [ ] Menggunakan package yang diinstall dengan menggunakan NPM/YARN
- [ ] Serving static HTML, static file dan json ke browser
- [ ] Menggunakan metode routing untuk memisahkan tiap halaman
- [ ] Menggunakan middleware untuk akun statis
- [ ] Menerapkan view engine untuk menampilkan HTML File
- [ ] Menyediakan endpoint dengan tipe data JSON dari data statis
- [ ] Membuat dan melakukan import export module
- [ ] Push ke git untuk di-review

Regiter User :
npx sequelize-cli model:generate --name RegisterUser --attributes userName:string,password:string,role:string
Biodata User:
npx sequelize-cli model:generate --name BiodataUser --attributes name:string,gender:string,age:integer,city:string
History User:
npx sequelize-cli model:generate --name HistoryUser --attributes hasil:string,jumlah:integer


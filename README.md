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

sequelize model:generate --name userData --attributes username:string,password:string,role:string

sequelize model:generate --name biodataUser --attributes fullname:string,gender:string,birthdate:dateonly,address:string,age:integer,phone:string

sequelize model:generate --name historyUser --attributes win:integer,lose:integer,draw:integer
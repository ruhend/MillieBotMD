const fs = require('fs')
const chalk = require('chalk')

global.prefa = ['','!','.','🐦','🐤','🗿','/']
global.sp = '⭔'

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.mess = {
    success: '*SUKSES...*',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '*Loading...*',
    nsfw: '*[❗] NSFW TIDAK AKTIF!!*',
    wrongFormat: 'Format yg anda masukan salah',
    banned: '*[❗] ANDA TELAH DI BANNED*',
    error: 'Maaf terjadi kesalahan',
    linkna: 'Mana linknya?',
}
global.thumb = fs.readFileSync('./ruhend/ruhend.png')
global.vidmenu = fs.readFileSync("./ruhend/Ruhend.mp4")
global.limitawal = {
premium: "Infinity",
free: 20
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '7765C0C5354A',
}

// Other
global.owner = ['6288293524506','6288293524506','6288293524506']
global.premium = ['6288293524506']
global.packname = 'NaoTomoriBot-Mdོ'
global.author = 'F A J A R'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
textpro: {
      blackpink: "https://textpro.me/create-blackpink-logo-style-online-1001.html",
       lightglow: "https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html",      
        glass: "https://textpro.me/green-glass-text-effect-910.html",
        hoorror_blood: "https://textpro.me/horror-blood-text-effect-online-883.html",
        sand: "https://textpro.me/sand-engraved-3d-text-effect-989.html",
        magma: "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        sketch: "https://textpro.me/create-a-sketch-text-effect-online-1044.html",
        batman: "https://textpro.me/make-a-batman-logo-online-free-1066.html",
        demon: "https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        ice: "https://textpro.me/ice-cold-text-effect-862.html",
        sci_fi: "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html",
        sea_metal: "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html",
        skeleton: "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html",
        transformer: "https://textpro.me/create-a-transformer-text-effect-online-1035.html",
       warning: "https://textpro.me/road-warning-text-effect-878.html",
      denim: "https://textpro.me/denim-text-effect-online-919.html"
      }
 }
global.thumb = fs.readFileSync('./lib/pajar.jpg')
global.pajar = fs.readFileSync('./lib/jar.jpg')

global.menu = fs.readFileSync('./src/menu.jpg')
global.bc = fs.readFileSync('./src/bc.jpg')
global.sewa = fs.readFileSync('./src/sewa.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

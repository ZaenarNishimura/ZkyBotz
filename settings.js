const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6283188229366'] //ur owner number
global.ownernomer = "6283188229366" //ur owner number2
global.ownername = "ZakyZJ" //ur owner name
global.ytname = "Subscribe Yt Owmer: " //ur yt chanel name
global.socialm = "Instagram:" //ur github or insta name
global.location = "Indonesia, karawang, jawa barat" //ur location

//new
global.botname = "ZkyBotz-MD"
global.ownernumber = '6283188229366'
global.ownername = 'ZakyZJ'
global.ownerNumber = ["6283188229366@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@ZakyGuantengKekuali"
global.websitex = "https://youtu.be/ecl-JDVDz3E"
global.wagc = "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS"
global.themeemoji = '🤓'
global.wm = "ZkyBotz"
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD7' //script link
global.packname = "By"
global.author = "ZkyBotz"
global.creator = "6283188229366@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Berhasil!! Done Ngab🤓🤛',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Hiks Hiks Bot Bukan Admin..',
    premime: 'Fitur Ini Hanya Untuk Member Premium!!',
    owner: 'This feature could be used by owner only',
    group: 'Fitur Hanya Bisa Digunakan Di Dalam Grup',
    private: 'Fitur Hanya Bisa Digunakan Di Private chat',
    bot: 'This feature could be used by bot only',
    wait: 'Bentar...',
    linkm: 'Masukin Link Lah..',
    endLimit: 'Yahhh Limit Kamu Udah Habiss,limit bakal di reset 12jam',
    nsfw: 'Fitur Nsfw Tidak Aktif.. Untuk Mengaktifkan Bisa contact admin/owmer',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
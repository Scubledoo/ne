let handler = async (m) => {

    let who

    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender

    else who = m.sender

    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
let username = conn.getName(who)
let psdmpt = `✧───────[ *Dompet* ]───────✧\n\ndompet ${username}\n💲Money/Uang : ${global.db.data.users[who].money}

🏦 Bank : ${global.db.data.users[who].bank}`

    m.reply(`${psdmpt}`)

}

handler.help = ['dompet [@user]']

handler.tags = ['xp']

handler.command = /^(dompet)$/i

module.exports = handler

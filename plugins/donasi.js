let handler = async m => m.reply(`
            .✵.GRUP NECTOBOT.✵.

            https://chat.whatsapp.com/FaOrd7830eMJL2c2qPZWlj
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

let handler = async m => m.reply(`
╭─〘 𝐃𝐎𝐀𝐂̧𝐀̃𝐎 〙
│ • Me chame +556599202754
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

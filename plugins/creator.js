let handler = function (m) {
  this.sendContact(m.chat, '556599202754', 'borunn', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler

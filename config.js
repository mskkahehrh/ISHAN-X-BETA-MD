/**
 * ishan spark-x 🚀 – Configuration File
 * User Editable Area (Core Safe)
 * Only this file users are allowed to edit
 */

module.exports = {

  // 🔐 WhatsApp Session ID (MEGA or base64)
  SESSION_ID: process.env.SESSION_ID || "ISHAN~y24W1IoQ#pxfQKi6cJDYHfF7f_7JX44guQnTcrdC_u_Unfp0o0b0",


  // ===============================
  // 🤖 BOT MODE SYSTEM
  // public  = groups + inbox
  // group   = groups only
  // inbox   = inbox only
  // private = owner + sudo only
  // ===============================
  MODE: process.env.MODE || "public",


  // ===============================
  // 📌 STATUS AUTOMATION SYSTEM
  // (DEFAULT: OFF)
  // ===============================
  AUTO_STATUS_SEEN: true,
  AUTO_STATUS_REACT: true,
  AUTO_STATUS_FORWARD: false,


  // ===============================
  // 🛡️ ANTI DELETE SYSTEM
  // (DEFAULT: OFF)
  // ===============================
  ANTI_DELETE: true,


  // ===============================
  // ⚙️ GENERAL SETTINGS
  // ===============================
  PREFIX: process.env.PREFIX || ".",


  // ===============================
  // 🤖 BOT OWNER
  // ===============================
  BOT_OWNER: '94761638379',


  // ===============================
  // 🤖 BOT NAME 
  // ===============================
  BOT_NAME: 'ISHAN-X MD',


  // ===============================
  // 🤖 OWNER NAME 
  // ===============================
  OWNER_NAME:'ISHAN MADUSANE',


  // ===============================
  // 🖼️ BRANDING / UI
  // ===============================
  ALIVE_IMG:
    process.env.ALIVE_IMG ||
    "https://files.catbox.moe/swfoof.png",


  // Alive Message Template
// Used in alive.js plugin
ALIVE_MSG: `
👋 𝐇𝐈, *WΞLCΩMΞ TΩ USΞR* 𝐈❜𝐀𝐌 𝐀𝐋𝐈𝐕𝐄 𝐍𝐎𝐖 👾

*╭─「  ᴅᴀᴛᴇ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ  」*
*┃* ❖ 🧑‍💻 *\`Owner\`* : *ɪsʜᴀɴ ᴍᴀᴅᴜsᴀɴᴋᴇ*
*┃* ❖ ⏰ *\`Time\`* : {TIME}
*╰─────────────❖●►*

*╭─「  ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ  」*
*┃* ➤ 👩‍💼 *\`User\`* : *USER*
*┃* ➤ ✒️ *\`Prefix\`* : *(.)*
*┃* ➤ 🧬 *\`Version\`* : *ᴠ3.0 ᴜʟᴛʀᴀ*
*┃* ➤ 🖥️ *\`Platform\`* : *ʟɪɴᴜx*
*┃* ➤ 📡 *\`Host\`* : *ɪꜱʜᴀɴ-x ᴠᴘꜱ*
*┃* ➤ 📟 *\`Uptime\`* : *{UPTIME}*
*┃* ➤ 📂 *\`Memory\`* : *{RAM}*
*╰─────────────❖◆►*

*╭─「 ɪꜱʜᴀɴ-x ᴍᴅ ᴜᴘᴅᴀᴛᴇ & ᴅᴇᴘʟᴏʏ 」*
┃  *ᴊᴏɴɪɴ ɴᴇᴡ ÷* https://whatsapp.com/channel/0029Vb7eEOGLY6dBNzl2IH0
┃
*╰──────────❖✦►*

> ©𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝚋𝚢 𝙸𝚂𝙷𝙰𝙽-𝕏
`
};

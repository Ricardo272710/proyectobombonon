const handler = async (m, {conn}) => {
  m.reply(global.igbombon);
};
handler.command = /^(igbombóm|igdueña)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.igbombon = ` 
AQUI TIENES EL IG DE MI DUEÑA
https://www.instagram.com/y.u.l.i.4?igsh=MWRhN2s1dXY3eXV6aA==
`;

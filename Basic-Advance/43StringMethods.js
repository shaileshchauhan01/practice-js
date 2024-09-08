// charAt
// toUpperCase
// toLowerCase
// trim
// trimEnd
// trimStart
// concat 
// endsWith
// startsWith
// includes
// indexOf
// lastIndexOf
// padEnd
// padStart
// repeat
// replace 
// slice 
// split 
// subString

const userName = "Shailesh";
const tagLine = "Study Hard to become successfull";

userName.charAt(5);
// 'e'

userName.toUpperCase();
// 'SHAILESH'

tagLine.toLowerCase();
// 'study hard to become successfull'


// const userName = "     Shailesh     ";
// userName
// '     Shailesh     '
userName.trim()
// 'Shailesh'

userName.trimEnd()
// '     Shailesh'

userName.trimEnd()
// 'Shailesh     '

userName.concat(" will ", tagLine)
// 'Shailesh will Study Hard to become successfull'

userName.endsWith("h")
// true
userName.endsWith("k")
// false

userName.startsWith("Sh")
// true
userName.startsWith("sh")
// false

userName.includes("S")
// true
userName.includes("H")
// false

tagLine.indexOf("s")
// 21
tagLine.lastIndexOf("s")
// 27
tagLine.indexOf("p")
// -1

userName.padEnd('20', '-')
// 'Shailesh------------'

'21'.padStart('5', '1')
// '11121'

userName.repeat(3)
// 'ShaileshShaileshShailesh'

tagLine.replace('Hard', 'more')
// 'Study more to become successfull'

tagLine.slice(0, 20)
// 'Study Hard to become'
tagLine.slice(10)
// ' to become successfull'

tagLine.split(' ')
// (5) ['Study', 'Hard', 'to', 'become', 'successfull']

tagLine.substring(0,21)
// 'Study Hard to become '
tagLine.substring(25,0)
// 'Study Hard to become succ'
tagLine.substring(25,NaN)
// 'Study Hard to become succ'
tagLine.substring(NaN, 20)
// 'Study Hard to become'
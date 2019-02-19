const htmlString = "<html> <head> <title> Test </title> </head> <body> <h1>Hello HTML</h1><a href=\"google.com\">Google</a><h2>Hey HTML</h2><a name=\"target\" href=\"facebook.com\">Facebook</a></body> </html>";
const stringPattern = "<a .*?href=\"(.*?)\".*?>(.+?)</a>";
const pattern = new RegExp(stringPattern, 'g');
let match;
let markdownLinks = "";

while(match = pattern.exec(htmlString)) {
    if(match) {
        markdownLinks += "[" + match[2] + "](" + match[1] + ")\n"; 
    }
}
console.log(markdownLinks);

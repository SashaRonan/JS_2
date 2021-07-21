/* 
'I don't know, aunt.'
'Well, I know. It's jam—that's what it is.Forty times I've said if you didn't let that jam alone I'd skin you. Hand me that switch.'
The switch hovered in the air—the peril was desperate—
'My! Look behind you, aunt!'; 
*/

const str= "\'I don't know, aunt.\' \'Well, I know. It\'s jam—that\'s what it is. Forty times I\'ve said if you didn\'t let that jam alone I\'d skin you. Hand me that switch.\' The switch hovered in the air—the peril was desperate — \'My! Look behind you, aunt!\'"

console.log(str.replace(/'\s|\s'|^'|'$/g, '"'));

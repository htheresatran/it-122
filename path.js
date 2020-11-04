const path = require('path');


//PATH.JOIN
let imageName = 'bob_smith';

let filepath = path.join(__dirname, '/images/useravatars/', imageName, '.png');

console.log('the file path of the image is', filepath);
// the filepath of the image is
// C:/Users/.../intro-to-the-path-module/images/useravatars/bob_smith.png
// (actual output shortened for readability)


//PATH.BASENAME
let filepath = 'C:/Users/.../intro-to-the-path-module/images/useravatars/bob_smith.png';

let imageName = path.basename(filepath);

console.log('name of image:', imageName);
// name of image: bob_smith.png


//PATH.DIRNAME
let filepath = 'C:/Users/.../Pictures/Photos/India2019/DSC_0002.jpg';

let directoryOfFile = path.dirname(filepath);

console.log('The parent directory of the file is', directoryOfFile);
// The parent directory of the file is C:/Users/moose/Pictures/Photos/India2019


//PATH.EXTNAME
let imageTypes = ['.png', '.jpg', '.jpeg'];

function isImage(filepath) {
  let filetype = path.extname(filepath);

  if(imageTypes.includes(filetype)) {
    return true;
  } else {
    return false;
  }
}

isImage('picture.png'); // true
isImage('myProgram.exe'); // false
isImage('pictures/selfie.jpeg'); // true


//PATH.NORMALIZE
path.normalize('/hello/world/lets/go/deeper/./wait/this/is/too/deep/lets/go/back/some/../../../../../../../../..');
// returns: /hello/world/lets/go/deeper
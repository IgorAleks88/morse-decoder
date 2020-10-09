const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr){
    let arr =new Array;
    let k=expr.length/10;
    for (i=0;i<k;i++){
        arr[i]=expr.slice(0+i*10,10+i*10);
    }
    arr=arr.map(element => {
       let n=element.indexOf('1');
       if (n>1) {
           return element.slice(n)
       } else {return element}
   })
    for (let i=0; i<arr.length; i++){
        if (arr[i]=='**********') {arr[i]=' '} else {
            let currStr = new String;
            let m=arr[i].length/2;
            for (let j=0; j<m; j++){
                if (arr[i].charAt(j*2+1)=='0'){
                    currStr=currStr+'.'
                } else {
                    currStr=currStr+'-'
                }
            }
            currStr=MORSE_TABLE[currStr];
            arr[i]=currStr;
        }
               
    }
    expr=arr.join('');
    return expr;

}

module.exports = {
    decode
}
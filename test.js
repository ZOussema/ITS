const leng = (s) => {
  let str = s.split(' ');
  let result = '';
  let array = str.map(word => word.length);
  let max = Math.max(...array)
  console.log(max)
      
}

const inverse = str => {
    let arrStr = str.split(' ');
    for (let i=0; i<arrStr.length; i++) {
        console.log(arrStr[i].split('').reverse().join(''));
    }
} 

console.log(inverse('hello you '))

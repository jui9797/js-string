// Reverse method
// method-1
// const me ='I am a web developer';
// let rev ='';
// for(let i =0; i<me.length; i++){
 
//  const letter =me[i];
//  rev =letter + rev;  
// }
// console.log(rev)  //repoleved bew a ma I



// method-2
// const me ='I am a web developer'
// let reverse ='';
// for(const letter of me){
//     reverse =letter + reverse;
// }
// console.log(reverse)



// Shortcut (without using loops)
// const reverse1 =me.split('').reverse().join('');
// console.log(reverse1);


// method-4
const me ='I am a web developer';
let rev ='';
for(let i =me.length-1; i>=0; i--){
 
 const letter =me[i];

console.log(letter)
 rev =rev + letter;  
}
console.log(rev) 

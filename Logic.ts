// Task One

function Arithmetic(a:string, b:string, c:string):Number{
  if(c ===  "+" ){
      return(+a  + +b )
  }
  if(c ===  "-" ){
      return(+a  - +b )
  }
  if(c ===  "/" ){
      return(+a  / +b )
  }
  if(c ===  "*" ){
      return(+a  * +b )
  }
}


// console.log(Arithmetic("6","9","*"))


// Task two


function ScoreKeeper(a:number[], b:number[]){
    if a.length !== b.length  return
     let scoreA = 0
     let scoreB = 0
    for(let i=0; i<a.length;i++){
        // let j=0
            // console.log(a[i], b[j])
            // console.log(a, b)
            // if (a[i] !== b[i])  { scoreA= scoreA scoreB= scoreB} 
             a[i]>b[i] ? scoreA ++ :  a[i]<b[i]?  scoreB++ : null
            
   
    }

    return [scoreA,scoreB]
}

console.log(ScoreKeeper([0,0,1],[0,0,0]))
// Task One

export function Arithmetic(a:string, b:string, c:string){
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
  return "Invalid values"
}


console.log(Arithmetic("2","2","+"))


// Task two


export function ScoreKeeper(a:number[], b:number[]){
    if (a.length !== b.length)  return
     let scoreA = 0
     let scoreB = 0
    for(let i=0; i<a.length;i++){
             a[i]>b[i] ? scoreA ++ :  a[i]<b[i]?  scoreB++ : null
            
   
    }

    return [scoreA,scoreB]
}

console.log(ScoreKeeper([0,0,1],[0,0,0]))

// Task 3



export function PositionCheck(p1:number,p2:number,d1:number,d2:number){
    // due to the fact that its possible to get an infinite loop from the question given i'll give a constraint for the checking
    const constraint = 20
    let res:string = "NO";
    for(let i=0;i<constraint;i++){
       p1 === p2? res = "YES" :  p1 = p1*d1 ,p2 = p2*d2 
    
    }

    return res

}

console.log(PositionCheck(1,2,2,1))



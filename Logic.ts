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


function ScoreKeeper(a:number[], b:number[]):number[]{
    if a.length !== b.length  return
     let scoreA = 0
     let scoreB = 0
    for(let i=0; i<a.length;i++){
             a[i]>b[i] ? scoreA ++ :  a[i]<b[i]?  scoreB++ : null
            
   
    }

    return [scoreA,scoreB]
}

// console.log(ScoreKeeper([0,0,1],[0,0,0]))

// Task 3

function positionCheck(p1:number,p2:number,d1:number,d2:number){
    // due to the fact that its possible to get an infinite loop from the question given i'll give a constraint for the checking
    const constraint = 20
    let res:string = "NO";
    for(let i=0;i<constraint;i++){
        console.log(p1,p2,d1,d2)
       p1 === p2? res = "YES" :  p1 = p1*d1 ,p2 = p2*d2 
    
    }

    return res

}

// console.log(positionCheck(1,2,3,9))
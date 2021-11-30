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


console.log(Arithmetic("6","9","*"))
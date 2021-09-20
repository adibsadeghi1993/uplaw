
export const SortedContract=(bands)=>{
  return  bands.sort((a,b)=>{
        if (a.type==="QA"&& b.type==="select") {
            return -1
            
        }
        if (a.type==="QA"&& b.type==="jaye khali") {
            return -1
            
        }
        if (a.type==="QA"&& b.type==="text") {
            return -1
            
        }
        if (a.type==="QA"&& b.type==="SQA") {
            return -1
            
        }
      
    })

}
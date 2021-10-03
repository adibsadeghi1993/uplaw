export const usersJob=(item,job,setJob) =>{
   
    const oldjob = [...job];
    // if (oldjob.length === 0) {
      const newjob = [...oldjob, item];
      setJob(newjob);
    // } else {
    //   let a = false;
    //   const newjob = [...job];
    //   const findElement = newjob[0];
      
    //   if (findElement.id ===1 && item.id ===3 ) {
    //     a = false;
    //   }
    //   if (findElement.id === 1 && item.id === 1) {
    //     a = false;
    //   }
    //   if (findElement.id === 1 && item.id === 2) {
    //     a = true;
    //   }
    //   if (findElement.id === 2 && item.id === 3) {
    //     a = true;
    //   }
    //   if (findElement.id === 2 && item.id === 1) {
    //     a = true;
    //   }
    //   if (findElement.id === 2 && item.id === 2) {
    //     a = false;
    //   }
    //   if (findElement.id === 3 && item.id === 2) {
    //     a = true;
    //   }
    //   if (findElement.id === 3 && item.id === 1) {
    //     a = false;
    //   }
    //   if (findElement.id === 3 && item.id === 3) {
    //     a = false;
    //   }

    //   if (a) {
    //     const updatedJob = [...newjob, item];

    //     setJob(updatedJob);
    //   }
    // }
 }
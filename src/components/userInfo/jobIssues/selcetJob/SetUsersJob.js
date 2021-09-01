export const usersJob=(item,job,setJob) =>{
   
    const oldjob = [...job];
    if (oldjob.length === 0) {
      const newjob = [...oldjob, item];
      setJob(newjob);
    } else {
      let a = false;
      const newjob = [...job];
      const findElement = newjob[0];
      
      if (findElement.id ===1 && item.id ===3 ) {
        a = false;
        // setJobError("you are owner you cant be employ")
      }
      if (findElement.id === 1 && item.id === 1) {
        a = false;
        // setJobError("you are owner you cant be employ")
      }
      if (findElement.id === 1 && item.id === 2) {
        console.log("hello");
        a = true;
      }
      if (findElement.id === 2 && item.id === 3) {
        a = true;
      }
      if (findElement.id === 2 && item.id === 1) {
        a = true;
        // setJobError("you are employ you cant be owner")
      }
      if (findElement.id === 2 && item.id === 2) {
        a = false;
        // setJobError("you are employ you cant be owner")
      }
      if (findElement.id === 3 && item.id === 2) {
        a = true;
      }
      if (findElement.id === 3 && item.id === 1) {
        a = false;
      }
      if (findElement.id === 3 && item.id === 3) {
        a = false;
      }

      if (a) {
        const updatedJob = [...newjob, item];

        setJob(updatedJob);
      }
    }
 }
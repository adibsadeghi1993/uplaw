import React,{useState} from 'react'

const SelectedJob = ({job,setJob}) => {
    const [jobOptions, setJobOptions] = useState([
        { jobTitle: "استارتاپ/شرکت دارم", id: 1, background: "white" },
        { jobTitle: "فریلنسر هستم", id: 2, background: "white" },
        { jobTitle: "کارمند هستم", id: 3, background: "white" },
      ]);

      const jobHandler = (item) => {
        usersJob(item, job, setJob);
      };
    return (
        <section className="selectJob_info">
      <p>شما؟</p>
      <div className="selectJob_info_main">
        {jobOptions.map((item) => {
          return (
            <button
              className={item.background}
              onClick={() => jobHandler(item)}
            >
              {item.jobTitle}
            </button>
          );
        })}
      </div>
    </section>
    )
}

export default SelectedJob

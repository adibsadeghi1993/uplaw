import React, { useState } from "react";
import FingerImgae from "../../../common/fingerImgae/FingerImgae";
import SearchSpecialTeam from "./searchTeam/SerachSpecialTeam";

const SerachDetailes = () => {
  const [input, setInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");


  const handleChange = (e) => {
    setInput(e.target.value);
 
    console.log(input)
  };
  return (
    <div>
      <h3>/تیم های من/ساخت تیم جدید</h3>
      <FingerImgae>
        تو این صفحه میتونی تیم هایی که توشون عضو هستی یا داری رو ببینی.میتونی
        اون هارو مدیریت کنی یا تیم جدید ایجاد کنی.
      </FingerImgae>
      <section>
        <div>
          <p>تیم آپلا</p>
          <p> تیم های من</p>
        </div>
        <div>
          <p>به دنبال تیم خاصی میگردم</p>
        </div>
      </section>

      {/* <SearchSpecialTeam
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      /> */}
      <div>
        <input
          type="text"
          placeholder="تیم مورد نظر را در آپلا جستجو کنید."
          value={input}
          onChange={handleChange}
          className="input"
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default SerachDetailes;

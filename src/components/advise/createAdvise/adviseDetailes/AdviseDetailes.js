import React, { useState } from "react";
import styles from "./AdviseDetailes.module.css";
import FingerImage from "../../../common/fingerImgae/FingerImgae";
import Progress from "../../../common/contractHeader/ContractHeader";
import { useSelector, useDispatch } from "react-redux";
import { setAdviseTeam } from "../../../../redux/Actions/AdviseActions";
import { style } from "@mui/system";

const AdviseDetailes = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("newAdvise");
  const [teamType, setTeamType] = useState("myTeam");
  const team = useSelector((state) => state.team.myTeam);
  const teamIncudedMe = useSelector((state) => state.team.teamIncudedMe);
  const selectedTeam = useSelector((state) => state.advise.selectedAdviseTeam);
  const prevAdviseHandler = () => {
    setActive("prevAdvise");
  };
  const newAdviseHandler = () => {
    setActive("newAdvise");
  };
  const selectedTeamHandler = (team) => {
    dispatch(setAdviseTeam(team));
  };
  const teamIncludedMeHandler = () => {
    setTeamType("teamIncludedMe");
  };

  const myTeamHandler = () => {
    setTeamType("myTeam");
  };
  return (
    <div className={styles.main_advise}>
      <h3 className={styles.header}>/مشاوره</h3>
      <div className={styles.finger}>
        {" "}
        <FingerImage>
          تو این صفحه میتونی تایم مشاوره رو با مشاورین آپلا ست بکنی و با خیال
          راحت دغدغه هات رو حل کنی
        </FingerImage>
      </div>
      <div className={styles.advise_header}>
        <p
          onClick={newAdviseHandler}
          className={active === "newAdvise" ? styles.active : null}
        >
          ست کردن تایم مشاوره
        </p>
        <p
          onClick={prevAdviseHandler}
          className={active === "prevAdvise" ? styles.active : null}
        >
          مشاوره های قبلی
        </p>
      </div>
      <div className={styles.progress}>
        <Progress
          noneBox="noneBox"
          stepOne="انتخاب موضوع مشاوره"
          stepTow="انتخاب زمان شماوره"
          opacityThree="0.5"
          adjust={false}
        />
      </div>
      <div className={styles.advise_type}>
        <p>تیم مورد نظر خود را برای انتخاب مشاوره انتخاب کنید</p>
        <p>مشاوره تخصصی میخواهم</p>
      </div>

      <section className={styles.choosed_team}>
        <div className={styles.team_type}>
          <p
            onClick={myTeamHandler}
            className={teamType === "myTeam" ? styles.active : null}
          >
            تیم های من
          </p>
          <p
            onClick={teamIncludedMeHandler}
            className={teamType === "teamIncludedMe" ? styles.active : null}
          >
            تیم های که در آن عضو هستم
          </p>
        </div>
        {/* {} */}

        {teamType === "myTeam"
          ? team?.map((item) => {
              return (
                <label className={styles.each_team}>
                  <div>
                    <img src={item.src} alt="عکس تیم" />
                    <p>{item.teamName}</p>
                  </div>
                  <div>
                    <input
                      type="radio"
                      checked={selectedTeam.teamName === item.teamName}
                      onChange={() => selectedTeamHandler(item)}
                    />
                  </div>
                </label>
              );
            })
          : teamIncudedMe?.map((item) => {
              return (
                <label className={styles.each_team}>
                  <div>
                    <img src={item.src} alt="عکس تیم" />
                    <p>{item.teamName}</p>
                  </div>
                  <div>
                    <input
                      type="radio"
                      checked={selectedTeam.teamName === item.teamName}
                      onChange={() => selectedTeamHandler(item)}
                    />
                  </div>
                </label>
              );
            })}
      </section>
    </div>
  );
};

export default AdviseDetailes;

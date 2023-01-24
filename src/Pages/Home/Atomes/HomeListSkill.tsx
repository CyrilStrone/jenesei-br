import { useStore } from "effector-react";
import React, { useEffect, useState } from "react";
import { $generalSkill, $generalSkillTime } from "../../../Common/hooksGeneral";

export interface IHomeListSkill {
  setDisabled1: React.Dispatch<React.SetStateAction<boolean>>;
  disabled1: boolean;
  setDisabled2: React.Dispatch<React.SetStateAction<boolean>>;
  disabled2: boolean;
}

export const HomeListSkill = (params: IHomeListSkill) => {
  const [skillSelect, setSkillSelect] = useState("");
  const [skillSelectTime, setSkillSelectTime] = useState("");

  const generalSkill = useStore($generalSkill);
  const generalSkillTime = useStore($generalSkillTime);
  useEffect(() => {
    setSkillSelect(generalSkill[0]);
  }, [generalSkill]);
  useEffect(() => {
    setSkillSelectTime(generalSkillTime[0]);
  }, [generalSkillTime]);

  return (
    <div className="HomeListSkill">
      <div className="HomeListSkill_Choice">
      <div className="HomeListSkill_Choice__Title__Black">Топ</div>
        <div
          className={params.disabled1 ? "HomeListSkill_Choice__Title HomeListSkill_Choice__Title__Active" : "HomeListSkill_Choice__Title"}
          onClick={() => {
            params.setDisabled1(!params.disabled1);
            params.setDisabled2(false);
          }}
        >
         {skillSelect}
        </div>
        {params.disabled1 && (
          <div
            id="HomeListSkill_Choice__List"
            className="HomeListSkill_Choice__List"
          >
            {generalSkill.map((e: any) => (
              <div
                className={
                  skillSelect == e
                    ? " HomeListSkill_Choice__List_Item__Choise HomeListSkill_Choice__List_Item"
                    : "HomeListSkill_Choice__List_Item"
                }
                onClick={() => {
                  setSkillSelect(e);
                  params.setDisabled1(false);
                }}
              >
                {e}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="HomeListSkill_Choice_Time">
      <div className="HomeListSkill_Choice__Title__Black">за</div>

        <div
          className={params.disabled2 ? "HomeListSkill_Choice__Title HomeListSkill_Choice_Time__Title HomeListSkill_Choice__Title__Active" : "HomeListSkill_Choice__Title HomeListSkill_Choice_Time__Title"}
          onClick={() => {
            params.setDisabled2(!params.disabled2);
            params.setDisabled1(false);
          }}
        >
          {skillSelectTime}
        </div>
        {params.disabled2 && (
          <div className="HomeListSkill_Choice__List HomeListSkill_Choice_Time__List">
            {generalSkillTime.map((e: any) => (
              <div
                className={
                  skillSelectTime == e
                    ? " HomeListSkill_Choice__List_Item__Choise HomeListSkill_Choice__List_Item"
                    : "HomeListSkill_Choice__List_Item"
                }
                onClick={() => {
                  setSkillSelectTime(e);
                  params.setDisabled2(false);
                }}
              >
                {e}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

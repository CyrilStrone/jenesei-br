import { useStore } from "effector-react";
import { $usersPastTop } from "../../../scommon/HomeHooks";
import { HomePastBlock, IHomePastBlock } from "../atomes/HomePastBlock";

export const HomePast = () => {
  const usersPastTop = useStore($usersPastTop);

  let HomePastArray: IHomePastBlock[] = [];
  usersPastTop.map((e: any) => {
    HomePastArray.push({ Picture: e.picture, Name: e.name, Job: e.job, Stackes: e.Stackes ,id:(e.id)},)
  })
  return (
    <div className="HomePast">
      {
        HomePastArray.map((e, i) => (
          <HomePastBlock key={e.id} Picture={e.Picture} Name={e.Name} Job={e.Job} Stackes={e.Stackes} id={e.id}/>
        ))
      }
    </div>
  );
};

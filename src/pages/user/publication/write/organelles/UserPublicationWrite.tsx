import { useEffect, useState } from "react";
import { UserPublicationWriteAdd } from "../molecules/UserPublicationWriteAdd";
import { UserPublicationWriteDrafts } from "../molecules/UserPublicationWriteDrafts";
import { UserPublicationWriteGeneral } from "../molecules/UserPublicationWriteGeneral";
import { UserPublicationWriteInfo } from "../molecules/UserPublicationWriteInfo";
import { UserPublicationWriteTitle } from "../molecules/UserPublicationWriteTitle";
import "../styles/UserPublicationWrite.css";
export interface IChangePublication {
  typeOp: string
  typeCons?: string
  id?: number
  value?: any
}
export const UserPublicationWrite = () => {
  const [publication, setPublication] = useState<any>([])
  const changePublication = (params: IChangePublication) => {
    if (params.typeOp == "Add") {
      setPublication((prevState: any) => ([
        ...prevState,
        { type: params.typeCons, value: "" }
      ]));
    }
    if (params.typeOp == "Delete") {
      setPublication((prevArray: any) => prevArray.filter((item: any, id: number) => id !== params?.id));
    }
  }
  useEffect(() => {
    console.log("publication", publication)
  }, [publication])
  return (
    <div className="UserPublicationWrite UserSetting__Blocks">
      <UserPublicationWriteTitle />
      <UserPublicationWriteDrafts />
      <UserPublicationWriteGeneral publication={publication} />
      <UserPublicationWriteInfo publication={publication} changePublication={changePublication} />
      <UserPublicationWriteAdd changePublication={changePublication} />
    </div>
  );
};

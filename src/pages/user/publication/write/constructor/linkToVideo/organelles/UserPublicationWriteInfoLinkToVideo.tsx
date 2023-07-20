
import ReactPlayer from "react-player";
import { IUserPublicationWriteInfoBlock } from "../../../molecules/UserPublicationWriteInfo";
import "../styles/UserPublicationWriteInfoLinkToVideo.css";
import { useEffect, useState } from "react";
import { SpinningCircles } from "react-loading-icons";

export const UserPublicationWriteInfoLinkToVideo = (params: IUserPublicationWriteInfoBlock) => {
  const [value, setValue] = useState<string | null>(null)
  const [check, setCheck] = useState<boolean | null>(false)
  const [error, setError] = useState<boolean | null>(false)
  useEffect(() => {
    setError(false)
    if (!value) {
      setCheck(false)
    }
  }, [value])
  return (
    <div className="UserPublicationWriteInfoLinkToVideo UserPublicationWriteInfoGeneralStyle Block__NonActive">
      <div className="UserPublicationWriteInfoGeneralStyle__Title">
        Ссылка на видео
      </div>
      <div className={!check ? "UserPublicationWriteInfoLinkToVideo__Cover UserPublicationWriteInfoLinkToVideo__Cover__Min" : "UserPublicationWriteInfoLinkToVideo__Cover UserPublicationWriteInfoLinkToVideo__Cover__Big"} >
        {(!value && !error) && <div className="UserPublicationWriteInfoLinkToVideo__Cover__Title">
          Ваше видео
        </div>}
        {error && <div className="UserPublicationWriteInfoLinkToVideo__Cover__Title">
          Ошибка
        </div>}
        <ReactPlayer style={{ display: `${(check && !error) ? "block" : "none"}` }} className="UserPublicationWriteInfoLinkToVideo__Cover__Player" url={value ? value : ""} onReady={() => setCheck(true)} onError={() => setError(true)} />
        <SpinningCircles style={{ display: `${(value && !check && !error) ? "block" : "none"}` }} height="2em" fill="#0E8AC3" stroke="#000" strokeOpacity={.125} speed={1} />
      </div>
      <div className="UserPublicationWriteInfoLinkToVideo__Content">
        <input type="text" value={value ? value : ""} onChange={(event: any) => setValue(event.target.value)} placeholder="Вставьте ссылку на видео" className="UserPublicationWriteInfoLinkToVideo__Content__Input UserPublicationWriteGeneral__Input" />
      </div>
    </div>
  );
};

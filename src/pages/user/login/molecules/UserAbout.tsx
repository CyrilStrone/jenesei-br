import "../styles/UserAbout.css";

interface IUserAbout {
  value: any
}

export const UserAbout = (params: IUserAbout) => {

  return (
    <div className="UserAbout Translucent__Block  Block__Active User__Content__Item">
      {params.value.currentPosition &&
        <div className="UserAbout__Title">
          {params.value.currentPosition}
        </div>
      }
      {params.value.aboutLong &&
        <>
          <div className="UserAbout__SubTitle">
            Обо мне
          </div>
          <div className="UserAbout__Value">
            {params.value.aboutLong}
          </div>
        </>
      }
    </div>
  );
};

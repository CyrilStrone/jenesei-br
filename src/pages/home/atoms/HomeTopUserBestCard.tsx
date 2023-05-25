import "../styles/HomeTopUserBestCard.css";

interface IHomeTopUserBestCard {
  id: number
}

export const HomeTopUserBestCard = (params: IHomeTopUserBestCard) => {


  return (
    <div className="HomeTopUserBestCard Half__Block Block__Active" >
      <div className="HomeTopUserBestCard__Header Half__Block__Header" >
        Самый активный пользователь
      </div>
      <div className="HomeTopUserBestCard__Info Half__Block__Footer" >

      </div>
    </div>
  );
};

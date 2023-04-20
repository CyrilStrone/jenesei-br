import "../styles/HomeTopUserBestCard.css";

interface IHomeTopUserBestCard {
  id: number
}

export const HomeTopUserBestCard = (params: IHomeTopUserBestCard) => {


  return (
    <div className="HomeTopUserBestCard Block__Active" >
      <div className="HomeTopUserBestCard__Header" >
        Самый активный пользователь 
      </div>
      <div className="HomeTopUserBestCard__Info" >

      </div>
    </div>
  );
};

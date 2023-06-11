import "../styles/HomeRecommendationUserCard.css";
interface IHomeRecommendationUserCard {
  id?: number
}

export const HomeRecommendationUserCard = (params: IHomeRecommendationUserCard) => {


  return (
    <div className={params.id === 0 ? "HomeRecommendationUserCardZero Half__Block Block__Active" : "HomeRecommendationUserCard Half__Block Block__Active"} >
      <div className="HomeRecommendationUserCard__Header Half__Block__Header" >
        Дядя
      </div>
      <div className="HomeRecommendationUserCard__Info Half__Block__Footer" >

      </div>
    </div>
  );
};

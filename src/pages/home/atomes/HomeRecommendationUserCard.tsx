import "../styles/HomeRecommendationUserCard.css";
interface IHomeRecommendationUserCard {
  id?: number
}

export const HomeRecommendationUserCard = (params: IHomeRecommendationUserCard) => {


  return (
    <div className={params.id == 0 ? "HomeRecommendationUserCardZero Home__Block__Active" : "HomeRecommendationUserCard Home__Block__Active"} >
      <div className="HomeRecommendationUserCard__Header" >
        Дядя
      </div>
      <div className="HomeRecommendationUserCard__Info" >

      </div>
    </div>
  );
};

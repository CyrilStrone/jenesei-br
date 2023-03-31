import "../styles/HomeRecommendationUserCard.css";
interface IHomeRecommendationUserCard{
  id?:number
}

export const HomeRecommendationUserCard = (params:IHomeRecommendationUserCard) => {
 

  return (
    <div className= {params.id == 0 ? "HomeRecommendationUserCardZero" : "HomeRecommendationUserCard" } >
      
    </div>
  );
};

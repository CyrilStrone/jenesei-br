import "../styles/HomeTopUserCard.css";
interface IHomeTopUserCard{
  id:number
}

export const HomeTopUserCard = (params:IHomeTopUserCard) => {
 

  return (
   
    <div className= {params.id == 0 ? "HomeTopUserCardZero" : "HomeTopUserCard" } >
      
    </div>
  );
};

import "../styles/HomeTopUserCard.css";
interface IHomeTopUserCard{
  id:number
}

export const HomeTopUserCard = (params:IHomeTopUserCard) => {
 

  return (
   
    <div className= {params.id == 0 ? "HomeTopUserCardZero Home__Block__Active" : "HomeTopUserCard Home__Block__Active" } >
      <div className="HomeTopUserCard__Header" >
        # {params.id + 1}
      </div>
      <div className="HomeTopUserCard__Info" >

      </div>
    </div>
  );
};

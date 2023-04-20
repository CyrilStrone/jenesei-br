import "../styles/HomeTopUserCard.css";
interface IHomeTopUserCard{
  id:number
}

export const HomeTopUserCard = (params:IHomeTopUserCard) => {
 

  return (
   
    <div className= {params.id == 0 ? "HomeTopUserCardZero Block__Active" : "HomeTopUserCard Block__Active" } >
      <div className="HomeTopUserCard__Header" >
        # {params.id + 1}
      </div>
      <div className="HomeTopUserCard__Info" >

      </div>
    </div>
  );
};

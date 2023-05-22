import "../styles/HomeTopUserCard.css";
interface IHomeTopUserCard{
  id:number
}

export const HomeTopUserCard = (params:IHomeTopUserCard) => {
 

  return (
   
    <div className= {params.id === 0 ? "HomeTopUserCardZero Half__Block Block__Active" : "HomeTopUserCard Half__Block Block__Active" } >
      <div className="HomeTopUserCard__Header Half__Block__Header" >
        # {params.id + 1}
      </div>
      <div className="HomeTopUserCard__Info Half__Block__Footer" >

      </div>
    </div>
  );
};

import "../styles/ThreeDot.css";
import Ellipse from '../../../assets/threeDot/Ellipse.svg'
interface IThreeDot {
  id?: number
  dotCheck: boolean
  setDotCheck: React.Dispatch<React.SetStateAction<boolean>>
}
export const ThreeDot = (params: IThreeDot) => {
  return (
    <div onClick={() => {params.setDotCheck(!params.dotCheck)}} className={"ThreeDot"} >
      <img src={Ellipse} alt="Ellipse" />
      <img src={Ellipse} alt="Ellipse" />
      <img src={Ellipse} alt="Ellipse" />
    </div>
  );
};

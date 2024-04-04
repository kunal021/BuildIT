import I1 from "./assests/0I1.png";
import I2 from "./assests/0I2.png";
import I3 from "./assests/0I3.png";
import I4 from "./assests/0I4.png";

function Instruction() {
  return (
    <div className="flex justify-center items-center m-10">
      <div className="flex flex-col justify-center items-center text-center ">
        <p className="text-white text-2xl font-bold p-6">
          To Download Resume Click On Download Buttton
        </p>
        <p className="text-white text-xl font-bold p-4">
          A Print Window Will Open
        </p>
        <img src={I1} alt="one" height={800} width={800} />
        <p className="text-white text-xl font-bold p-4">
          Now Click On More Settings
        </p>
        <img src={I2} alt="two" height={400} width={400} />
        <p className="text-white text-xl font-bold p-4">
          Now If Scale Is Default Change It To Custom
        </p>
        <img src={I3} alt="two" height={400} width={400} />
        <p className="text-white text-xl font-bold p-4">
          Enter The Value Of Scale Such That Resume Fits In One Page And Also If
          Background Graphics Is Selected Than Unselect It
        </p>
        <img src={I4} alt="two" height={400} width={400} />
        <p className="text-white text-xl font-bold p-4">
          At Last Click On Save Button
        </p>
      </div>
    </div>
  );
}

export default Instruction;

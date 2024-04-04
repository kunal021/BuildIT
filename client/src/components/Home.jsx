import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col justify-center items-center my-12 mx-60">
      <p className="text-white text-7xl text-center font-medium">
        Craft A Compelling Resume With BuildIT Resume Builder
      </p>
      <p className="text-gray-300 text-xl text-center mt-6">
        BuildIT helps you to create a resume that effectively highlights you
        skill and experience
      </p>
      <Link
        to="/resume"
        className="flex cursor-pointer gap-3 hover:gap-6 transition-all duration-300 ease-in-out border-2 rounded-full px-4 py-2 text-xl font-medium text-center mt-6 bg-gradient-to-tl from-blue-600 to-violet-600 hover:bg-gradient-to-tl hover:from-blue-600/80 hover:to-violet-600/80 border-transparent relative"
      >
        <p>Get Started</p>
        <span>&gt;</span>
      </Link>
    </div>
  );
}

export default Home;

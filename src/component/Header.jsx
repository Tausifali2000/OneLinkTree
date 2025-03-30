import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-20 rounded-full border border-white px-6">
      
      {/* Logo & Title */}
      <div>
        <Link to="/" className="flex items-center gap-2 text-white no-underline">
          <h1 className="text-2xl font-light ml-6">OneLink</h1>
          <div className="h-10 w-10">
            <img src="/whiteTree.svg" alt="logo" className="w-full h-full object-cover" />
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 mr-6">
        <Link to="/">
          <button className="flex items-center justify-center cursor-pointer bg-[#5790AB] text-white px-5 py-2 rounded-full">
            Home
          </button>
        </Link>
        {/* <button className="flex items-center justify-center cursor-pointer bg-[#5790AB] text-white px-5 py-2 rounded-full">
          Categories
        </button> */}
      </div>
      
    </div>
  );
};

export default Header;

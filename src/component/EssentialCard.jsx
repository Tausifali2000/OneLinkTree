const EssentialCard = ({ title, items }) => {
  return (
    <div className="bg-gray-500 w-full min-h-[100px] flex flex-col rounded-lg">
      
      {/* Top Header */}
      <div className="bg-white w-full text-black h-[35px] rounded-lg flex items-center px-3">
        <h1 className="text-sm font-medium">{title}</h1>
      </div>

      {/* List of Items (Grid with 2 Columns) */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {items.map((item, index) => (
          <a 
            key={index} 
            href={item.downloadUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="no-underline text-white"
          >
            <div className="flex items-center gap-1 text-sm">
              <img className="w-[30px] h-[30px]" src={item.icon} alt={item.name} />
              <p className="text-sm lg:text-xs">{item.name}</p> {/* Smaller text on ≤1200px */}
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};

export default EssentialCard;

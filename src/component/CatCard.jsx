const CatCard = ({ name }) => {
  return (
    <div className="bg-[url('/game.avif')] bg-cover bg-center bg-no-repeat flex items-center 
      w-full h-[80px] rounded-[20px_50px_50px_20px] p-4">
      <p className="text-2xl  ml-4 self-center"> 
        {name}
      </p>
    </div>
  );
};

export default CatCard;

const SingleFilterOption = ({ label }) => {
  return (
    <div className="flex justify-center flex-col space-y-2 mb-4 w-3/4">
      {/* Label */}
      <label className="text-white font-semibold text-xs">{label}</label>

      {/* Input Fields */}
      <div className="flex space-x-2">
        <input
          type="number"
          defaultValue={100}
          className="w-full bg-black text-white rounded text-center text-xs"
        />
        <input
          type="number"
          defaultValue={100}
          className="w-full  bg-black text-white rounded text-center text-xs"
        />
      </div>
    </div>
  );
};

export default SingleFilterOption;

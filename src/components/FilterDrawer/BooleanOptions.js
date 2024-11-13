const BooleanOptions = ({ booleanOptions, onOptionChange }) => {
  const options = [
    { label: 'Is Pump.Fun', value: 'isPumpFun' },
    { label: 'Is MoonShot', value: 'isMoonShot' },
    { label: 'Is Graduated', value: 'isGraduated' },
    { label: 'Is Top10Holder', value: 'isTop10Holder' },
    { label: 'Is 1+ Social', value: 'isOnePlusSocial' },
    // Add more options here if needed
  ];

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-2 cursor-pointer text-xs"
        >
          <input
            type="checkbox"
            checked={booleanOptions[option.value]}
            onChange={(e) => onOptionChange(option.value, e.target.checked)}
            className="form-checkbox text-green-500"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default BooleanOptions;

import RangeItem from './RangeItem';

const rangeOptionLabels = [
  'Volume',
  'Buy Volume',
  'Sell Volume',
  'TXNS',
  'Market Cap',
  'Liquidity',
  'Bond Curve %',
  'Dev Holding %',
  'Holders',
];

const RangeOptions = ({ rangeOptions, onRangeOptionChange }) => {
  return (
    <div className="flex flex-col items-center">
      {rangeOptionLabels.map((label) => (
        <RangeItem
          key={label}
          label={label}
          values={rangeOptions[label] || { minValue: '', maxValue: '' }}
          onChange={(min, max) => onRangeOptionChange(label, min, max)}
        />
      ))}
    </div>
  );
};

export default RangeOptions;

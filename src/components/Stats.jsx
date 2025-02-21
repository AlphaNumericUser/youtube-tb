import PropTypes from 'prop-types';

const Stats = ({ stats }) => (
  <>
    {stats.map((stat, index) => (
      <div key={index} className="bg-[#282828] bg-opacity-50 backdrop-blur-sm p-6 rounded-lg">
        <div className="flex items-center justify-center mb-2">
          {stat.icon}
        </div>
        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
        <div className="text-gray-400">{stat.label}</div>
      </div>
    ))}
  </>
);

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.element
    })
  ).isRequired
};

export default Stats;
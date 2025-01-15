import PropTypes from 'prop-types';

const TimeSlotSelector = ({ availableTimeSlots, onSelect }) => {
    const handleClick = (time) => {
        onSelect(time);
    };

    return (
        <div>
            {availableTimeSlots.map(time => (
                <button key={time} onClick={() => handleClick(time)}>{time}</button>
            ))}
        </div>
    )
}
TimeSlotSelector.propTypes = {
    availableTimeSlots: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default TimeSlotSelector;
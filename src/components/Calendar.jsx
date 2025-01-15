import { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ onSelect, availableDays }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
      setSelectedDate(date);
       if(date && onSelect) {
         onSelect(date.toLocaleDateString('en-CA'));
       }
   };

   const isDateAvailable = (date) => {
        return availableDays.some(availableDay => availableDay.toLocaleDateString() === date.toLocaleDateString());
    };

  return (
    <div>
        <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            filterDate={isDateAvailable}
        />
    </div>
  );
};
Calendar.propTypes = {
    onSelect: PropTypes.func,
    availableDays: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
};

export default Calendar;

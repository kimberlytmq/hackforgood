import { useState } from 'react';
import PropTypes from 'prop-types';

const UserList = ({ users, onSelect }) => {
    const [selectedUsers, setSelectedUsers] = useState([]);

  const handleCheckboxChange = (user) => {
    const isSelected = selectedUsers.some(selectedUser => selectedUser.id === user.id);

    if (isSelected) {
      setSelectedUsers(selectedUsers.filter(selectedUser => selectedUser.id !== user.id));
    } else {
       setSelectedUsers([...selectedUsers, user]);
    }
  };

    // Notify parent component with selectedUsers whenever there is a change
    const handleUserSelect = () => {
      onSelect(selectedUsers);
    };

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
            <input
              type="checkbox"
              id={user.id}
              checked={selectedUsers.some(selectedUser => selectedUser.id === user.id)}
              onChange={() => handleCheckboxChange(user)}
            />
          <label htmlFor={user.id}>{user.displayName} ({user.email})</label>
        </div>
      ))}
        <button onClick={handleUserSelect}>Done</button>
    </div>
  );
};
UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default UserList;
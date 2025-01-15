// import React from 'react';
import PropTypes from 'prop-types';

const AttachmentList = ({ attachments }) => {
  return (
    <ul className="attachment-list">
      {attachments.map((attachment) => (
        <li key={attachment.id}>
          <a href={attachment.fileUrl} target="_blank" rel="noopener noreferrer">
             {attachment.filename}
          </a>
        </li>
      ))}
    </ul>
  );
};
AttachmentList.propTypes = {
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      fileUrl: PropTypes.string.isRequired,
      filename: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AttachmentList;

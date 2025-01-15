import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../contexts/AuthContext';

const AddAttachmentForm = ({ projectId, onAttachmentAdded }) => {
  const [files, setFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const {authToken} = useContext(AuthContext);


  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      if (files.length === 0){
        setErrorMessage("Please select file(s) first before adding attachment");
          return;
      }
    try {
       const formData = new FormData();
        for( const file of files){
            formData.append('files', file)
        }
        const response = await fetch(`/projects/${projectId}/attachments`, {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${authToken}`
            },
          body: formData
        });
        if (response.ok) {
          setFiles([]);
          onAttachmentAdded(); // Notify parent component to re-fetch data
        } else {
          const errorData = await response.json();
           setErrorMessage(errorData.error || "Failed to upload attachments");
        }
      } catch (error) {
          console.error("Failed to upload attachments", error);
          setErrorMessage("Failed to upload attachments:" + error.message)
      }
  };

  return (
    <div className="add-attachment-form">
      <h3>Add Attachments</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" multiple onChange={handleFileChange} />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Add Attachment</button>
      </form>
    </div>
  );
};
AddAttachmentForm.propTypes = {
  projectId: PropTypes.string.isRequired,
  onAttachmentAdded: PropTypes.func.isRequired,
};

export default AddAttachmentForm;

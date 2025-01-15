import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import AttachmentList from './AttachmentList';
import AddAttachmentForm from './AddAttachmentForm';
import Loader from './Loader';
import { fetchProject, fetchMeetingsByProject, fetchAttachments } from '../api';
import MeetingForm from './MeetingForm';
const ProjectDetail = () => {
  const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [meetings, setMeetings] = useState([]);
    const [projectAttachments, setProjectAttachments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const {authToken} = useContext(AuthContext);


  useEffect(() => {
      const fetchProjectData = async () => {
        try {
            const projectData = await fetchProject(projectId, authToken);
            setProject(projectData);
            if(projectData.attachments && projectData.attachments.length > 0){
               const attachmentsData = await fetchAttachments(projectData.attachments, authToken);
               setProjectAttachments(attachmentsData);
            }

            const meetingsData = await fetchMeetingsByProject(projectId, authToken);
           setMeetings(meetingsData);
           setLoading(false);

        } catch(error){
            console.error("Failed to load project data", error);
            setErrorMessage(error.message);
            setLoading(false)
        }
      };

      fetchProjectData();
   }, [projectId, authToken]);

  const handleAttachmentAdded = async () => {
    const projectData = await fetchProject(projectId, authToken);
    setProject(projectData);
    if(projectData.attachments && projectData.attachments.length > 0){
        const attachmentsData = await fetchAttachments(projectData.attachments, authToken);
        setProjectAttachments(attachmentsData)
    }
  }
    const handleShowMeetingModal = () => {
        setShowMeetingModal(true);
      };

    const handleCloseMeetingModal = () => {
      setShowMeetingModal(false);
    };

  if (loading){
      return <Loader />;
  }

  if (errorMessage) {
    return <p className="error-message">Error: {errorMessage}</p>
  }

  if (!project) {
    return <p>Project not found.</p>;
  }
  return (
    <div className="project-detail">
        <div className="project-header">
            <h1>{project.title}</h1>
             <button onClick={handleShowMeetingModal}>Create Meeting</button>
        </div>
         {showMeetingModal && <MeetingForm projectId={projectId} onClose={handleCloseMeetingModal} />}
       <div className="project-content">
        <div className="project-members">
              <h3>Members</h3>
              <ul>
                {project.members.map((memberId) => (
                    <li key={memberId}>Member ID: {memberId}</li> // You can replace this by user name
                  ))}
                {project.projectLead && (
                     <li>
                       Project Lead: {project.projectLead}
                     </li>
                    )
                  }
              </ul>
         </div>
            {meetings.length > 0 && (
                <div className="project-meetings">
                    <h3>Upcoming Meetings</h3>
                    <ul>
                    {meetings.map((meeting) => (
                        <li key={meeting.id}>{meeting.title}</li> //Can also link to specific meeting details
                    ))}
                  </ul>
                </div>
            )}
           <div className="project-attachments">
                 <h3>Project Attachments</h3>
                 {projectAttachments.length > 0 ?
                    (
                    <AttachmentList attachments={projectAttachments} />
                 )
                 :
                 (
                     <p>No Attachments found.</p>
                 )}

                <AddAttachmentForm projectId={projectId} onAttachmentAdded={handleAttachmentAdded} />
           </div>
        </div>
    </div>
  );
};

export default ProjectDetail;
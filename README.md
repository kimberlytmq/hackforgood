# bookmarked

## 1. Description

BookMarked focuses on developing a cost-effective digital personal assistant (PA) system for administrators in the Singapore Book Council (SBC) to streamline their workflows. The system enables efficient arrangement and scheduling of administrative activities like meetings, routine tasks, especially those with deadlines, reminders and seamless distribution of tasks and notifications.

By automating these time-consuming processes, the system aims to enhance productivity and reduce manual effort for administrators.

## 2. Installation

For this prototype, clone the repository locally and type `npm run dev`. Then click on the localhost link to view it on your device.

## 3. Features

Note that some features are not yet available in this prototype.

### 3.1 Authentication

The authentication system in Bookmarked ensures secure and personalized access for all users, providing them with a protected environment to manage their schedules, tasks, and meetings.

Key Functionalities:

- User Registration:
  - New users can create an account by providing essential details such as a username, email address, and password.
  - Passwords are securely hashed before being stored in the database to ensure privacy and security.
- User Login:
  - Existing users can log in using their registered email and password.
  - The system verifies credentials against the database and generates an authentication token for secure access.
    Session Management:
  - After successful login, the system generates a unique session token (e.g., JWT - JSON Web Token) to authenticate subsequent requests.
  - Session tokens have an expiration time and are securely transmitted and stored.

### 3.2 Personal Dashboard

The Personal Dashboard in Bookmarked serves as the central hub for users, providing a comprehensive and organized view of their daily activities, tasks, and notifications. It is designed to help users stay on top of their schedules and remain productive throughout the day.

Key Functionalities:

- Daily Schedule Overview:
  - Displays a clear, chronological view of all meetings and tasks scheduled for the day.
  - Highlights urgent or high-priority items to ensure timely action.
- Task Summary:
  - Lists current tasks assigned to the user with details such as deadlines, project tags, and assignees.
  - Enables users to quickly review pending work without navigating through multiple tabs.
- Notifications and Updates:
  - Provides real-time notifications for upcoming meetings, task deadlines, and other important events.
  - Keeps users informed of changes or updates to shared tasks and projects.
- Seamless Navigation:
  - Direct access to essential features such as adding new tasks, scheduling meetings, and viewing project details.
  - User-friendly layout that minimizes the time spent searching for specific information.

### 3.3 Add Meetings

The Add Meetings feature in Bookmarked simplifies the process of scheduling meetings by providing an intuitive and streamlined interface. It ensures that users can efficiently arrange meetings while accommodating the availability of all participants.

Key Functionalities:

- Meeting Scheduling Made Easy:
  - Users can initiate the meeting scheduling process by clicking on the "Add Meeting" button.
  - Add a descriptive title to the meeting for clarity and organization.
- Attendee Selection:
  - Users can invite attendees by selecting them from a dropdown list or typing their names.
  - Automatic checks ensure that attendees are valid and have been successfully added.
- Time and Duration Selection:
  - Users can specify the duration of the meeting (e.g., 30 minutes, 1 hour).
    [future expansion] A list of available time slots, written out in 15 minute intervals, considering all attendees' schedules, is generated to simplify the process of finding a mutually convenient time. This reduces the hassle that people have to go through when trying to plan for a meeting.
  - Users can choose the desired meeting date and select the most suitable time slot from the list of suggestions.
  - Ensures that scheduling conflicts are avoided.
- Integration with Calendar: [future expansion]
  - Meetings scheduled through Bookmarked are automatically synced with third-party calendars (e.g., Google Calendar).
  - Attendees receive notifications and reminders, keeping everyone informed.

### 3.4 Add Tasks

The Add Tasks feature in Bookmarked empowers users to efficiently create and manage tasks with minimal friction, ensuring better organization and productivity. The user-friendly interface enables users to add multiple tasks at once while customizing them to suit their specific needs.

Key Functionalities:

- Task Creation:
  - Users can easily create tasks by clicking on the "Add Task" button.
  - The system supports adding multiple tasks simultaneously, reducing the effort required for task entry.
- Customizable Task Details:
  - Assignees: Assign tasks to specific individuals by selecting names from a dropdown list or typing them directly.
  - Task Description: Add a detailed, free-format description of the task to provide clarity and context.
  - Due Date: Set deadlines by selecting a date from the integrated calendar.
  - Remarks: Include optional notes or remarks for additional instructions or context.
  - Tags: Categorize tasks by tagging them to specific projects, ensuring better organization and easy retrieval.
- Seamless Integration: [future expansion]
  - Tasks can be associated with projects and meetings, making it easy to track dependencies and progress.
  - Syncs with third-party tools like Google Calendar to display task deadlines and reminders.
  - Both the team leaders and the respective members will be updated of these tasks so that 1) team members are able to keep track of their tasks and 2) team leads are able to keep track of the progress of their team.
- Quick Editing and Updates: [future expansion]
  - Allows users to edit task details after creation to accommodate changes.
  - Real-time updates ensure all collaborators are informed about modifications.

### 3.5 Calendar

The calendar feature is designed to provide users with a comprehensive and intuitive way to manage their schedules and stay on top of their commitments.

Key Functionalities:

- Overview of Meetings and Events:
  - The calendar displays all scheduled meetings and events in an organized, visually accessible format, allowing users to view their entire schedule at a glance.
- Task Due Dates:
  - Users can see when tasks are due directly on the calendar, ensuring deadlines are clear and easy to track.
- Detailed Event Information:
  - Clicking on any event or meeting provides more details, such as time, location, participants, and additional notes, offering all relevant information in one place.
- Event Creation:
  - Users can easily add new events by clicking on any blank space within the calendar interface. A simple input form will prompt users to enter details such as event title, date, time, and optional notes, making event creation quick and user-friendly.

### 3.6 Projects

The Projects feature in Bookmarked provides users with a centralized space to manage and track all information related to their projects. This feature ensures seamless organization by consolidating tasks, meetings, and files under a unified view, enabling users to monitor progress effectively.

Key Functionalities:

- Project Overview:
  - Users can access the Projects Tab to view all active and archived projects.
- Detailed View:
  - Users can click on any project to drill down into its details.
- View a consolidated list of:
  - Meetings scheduled for the project.
  - Timeline and current progress for the project.
  - Tasks created and their current statuses (e.g., pending, completed).
  - Files and resources uploaded for the project.
- Task and Meeting Integration:
  - Tasks and meetings created in the system can be tagged to specific projects for better organization.
  - Updates to tasks or meetings automatically reflect in the project view.
- File Management:
- Upload and associate files with specific projects for easy access.
- Organize files to ensure all resources related to a project are in one place.

## 4. Technologies Usage

Frontend:

- React.js:
  - Utilized for building an intuitive and responsive user interface.
  - Offers a modular component-based architecture, ensuring a clean and maintainable codebase.
- CSS & Material-UI:
  - Used for styling and providing a modern, visually appealing design.
  - Ensures responsiveness across devices, including desktops and mobile platforms.
    Backend and Database:
- Firebase Firestore:
  - A cloud-hosted NoSQL database used for storing and managing user data, tasks, meetings, and project information.
  - Provides real-time data synchronization, enabling seamless collaboration and instant updates across users and devices.
    Authentication:
- Firebase Authentication:
  - Ensures secure user authentication with support for email/password, Google sign-in, and other identity providers.
  - Simplifies session management and integrates seamlessly with Firestore for user-specific data storage.
    Version Control:
- Git and GitHub:
  - Used for version control and collaboration among team members.
  - Ensures that development progress is tracked, and code changes are efficiently managed.
    Development Tools:
- Visual Studio Code:
  - The primary code editor used to build the application.
  - Supported writing JSX files for React components.
- Git and GitHub:
  - Version control system for collaboration and code management.

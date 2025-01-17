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

-

## 4. Technologies Usage

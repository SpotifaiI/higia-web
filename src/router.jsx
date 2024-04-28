import { createBrowserRouter } from 'react-router-dom';

import { Home } from './screens/Home/index.jsx';
import { Collaborators } from './screens/Collaborators/index.jsx';
import { AddCollaborators } from './screens/AddCollaborators/index.jsx';
import { UpdateCollaborators } from './screens/UpdateCollaborators/index.jsx';
import { Login } from './screens/Login/index.jsx';
import { Profile } from './screens/Profile/index.jsx';
import { Settings } from './screens/Settings/index.jsx';
import { AddTasks } from './screens/AddTasks/index.jsx';
import { Tasks } from './screens/Tasks/index.jsx';
import { TasksMap } from './screens/TasksMap/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/collaborators',
    children: [
      {
        element: <Collaborators />,
        index: true
      },
      {
        path: 'register',
        element: <AddCollaborators />,
        index: false
      },
      {
        path: 'update/:collaborator_id',
        element: <UpdateCollaborators />,
        index: false
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/settings',
    element: <Settings />
  },
  {
    path: '/tasks',
    children: [
      {
        index: true,
        element: <Tasks />
      },
      {
        path: 'register',
        index: false,
        element: <AddTasks />,
      }
    ]
  },
  {
    path: '/tasks-map',
    element: <TasksMap />
  }
]);

export default router;
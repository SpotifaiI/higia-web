import { Route } from '../models/Route.js'
import { Home } from '../screens/Home/index.jsx';
import { Award } from '../screens/Award/index.jsx';
import { MapPin } from '../screens/MapPin/index.jsx';
import { Users } from '../screens/Users/index.jsx';
import { User } from '../screens/User/index.jsx';
import { Settings } from '../screens/Settings/index.jsx';

export const routes = [
  new Route('/', Home),
  new Route('/tasks', Award),
  new Route('/tasks-map', MapPin),
  new Route('/colaborators', Users),
  new Route('/profile', User),
  new Route('/settings', Settings)
];
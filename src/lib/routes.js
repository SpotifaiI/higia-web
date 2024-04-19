import {
  Home,
  Award,
  MapPin,
  Users,
  User,
  Settings
} from 'react-feather';

import { Route } from '../models/Route.js';

export const routes = [
  new Route('/', Home),
  new Route('/tasks', Award),
  new Route('/tasks-map', MapPin),
  new Route('/colaborators', Users),
  new Route('/profile', User),
  new Route('/settings', Settings)
];
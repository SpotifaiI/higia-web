import {
  Award,
  Home,
  MapPin,
  Settings,
  User,
  Users
} from "react-feather";

import { Route } from "@/models/Route";

export const routes = [
  new Route('/', Home),
  new Route('/tasks', Award),
  new Route('/tasks-map', MapPin),
  new Route('/colaborators', Users),
  new Route('/profile', User),
  new Route('/settings', Settings)
];
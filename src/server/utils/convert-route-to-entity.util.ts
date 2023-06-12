const mapping: Record<string, string> = {
  attendances: 'attendance',
  equipment: 'equipment',
  organizations: 'organization',
  projects: 'project',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

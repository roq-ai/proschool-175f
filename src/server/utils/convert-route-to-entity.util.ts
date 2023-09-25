const mapping: Record<string, string> = {
  analytics: 'analytics',
  courses: 'course',
  organizations: 'organization',
  students: 'student',
  teachers: 'teacher',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

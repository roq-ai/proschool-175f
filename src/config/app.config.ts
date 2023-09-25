interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Owner'],
  customerRoles: [],
  tenantRoles: ['School Owner', 'School Administrator', 'Teacher', 'Student', 'Parent', 'School Co Ordinator'],
  tenantName: 'Organization',
  applicationName: 'proschool',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user information',
    'Manage organization details',
    'Manage student records',
    'Manage teacher profiles',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/7c7acf84-8f69-4a35-98b6-1fc51b81ad2b',
};

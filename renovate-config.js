module.exports = {
  branchPrefix: 'renovate/',
  onboarding: false,
  platform: 'github',
  includeForks: true,
  repositories: [
    'codeMonkeysBe/renodepend'
  ],
  packageRules: [
    {
      description: 'lockFileMaintenance',
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'minor',
        'major',
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      stabilityDays: 10,
    },
  ],
};

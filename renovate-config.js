module.exports = {
  branchPrefix: 'renovate/',
  dryRun: true,
  onboarding: false,
  platform: 'github',
  includeForks: true,
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

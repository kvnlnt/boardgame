import l10n from '../../lib/l10n';
export const Text = (id: keyof typeof l10n) => l10n[id];

import l10n from '../../lib/l10n';

export const Text = (t: keyof typeof l10n) => l10n[t];

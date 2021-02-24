import l10n from '.';

export const localize = (t: keyof typeof l10n) => l10n[t];

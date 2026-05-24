/** Accepts birthday May 25, 2008 in common formats */
const VALID_PASSWORDS = new Set([
  "24052008",
  "24/05/2008",
  "24-05-2008",
  "24.05.2008",
  "24 05 2008",
  "2008-05-24",
  "2008/05/24",
  "24/5/2008",
  "24-5-2008",
  "24.5.2008",
]);

export function isValidBirthdayPassword(input: string): boolean {
  const normalized = input.trim().replace(/\s+/g, " ");
  const compact = normalized.replace(/[\s/.\-]/g, "");

  if (VALID_PASSWORDS.has(normalized) || VALID_PASSWORDS.has(compact)) {
    return true;
  }

  // DDMMYYYY or D/M/YYYY variants
  if (compact === "25052008") return true;

  const digitsOnly = normalized.replace(/\D/g, "");
  return digitsOnly === "25052008" || digitsOnly === "20080525";
}

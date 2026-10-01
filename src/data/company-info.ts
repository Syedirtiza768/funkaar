// Single source of truth for the business details used on the
// Privacy Policy and Terms & Conditions pages.
//
// Two values still need to be filled in before these pages go live:
//   - address:   the mailing address that matches the EIN / CP-575 letter
//   - smsNumber: the GoHighLevel number customers text STOP to
// While a value is "TODO", the pages show a visible [bracketed] reminder.

export const company = {
  legalName: "FUNKAAR LLC",
  brandName: "Funkaar",
  website: "https://funkaar.co",
  email: "info@funkaar.co",
  phone: "+1 771-232-9950",
  phoneHref: "+17712329950",
  smsNumber: "+1 771-232-9950",
  address: "8401 Mayland Dr, Ste A, Richmond, VA 23294",
  // Assumed from the owner's location. Confirm the state of formation.
  governingLaw: "the Commonwealth of Virginia",
  effectiveDate: "October 1, 2026",
};

export function shown(value: string, label: string): string {
  return value === "TODO" ? `[${label}]` : value;
}

import { getCalendar } from "../../_utils/getCalendar";

/**
 * Violates the canonical getCalendar pattern: getCalendar is async and
 * returns Promise<Calendar | null>, but this helper assigns the result
 * synchronously to `calendar` and then checks `!calendar`, which is
 * always falsy for a pending Promise — the null branch is unreachable.
 */
export function loadLinearCalendarFromCredential(credential: any) {
  const calendar = getCalendar(credential); // missing await
  if (!calendar) {
    return null;
  }
  return calendar;
}

export function describeLinearCalendar(credential: any) {
  const cal = getCalendar(credential); // missing await
  return cal ? "ok" : "missing";
}
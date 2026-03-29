# TC-MAP — Map & Location

**App:** Dog Friendly (React Native / Expo)  
**Platform:** iOS & Android  
**Last updated:** 28.03.2026

---

## TC-MAP-001 — Location permission prompt appears on first use

**Priority:** High  
**Related issue:** DOG-15

**Preconditions:**

- App is freshly installed or location permission has been reset
- User is logged in

**Steps:**

1. Open the map screen for the first time

**Expected result:**

- System permission dialog appears asking for location access
- App does not crash or freeze while waiting for user response

**Status:** ⬜ Not tested

---

## TC-MAP-002 — Map shows only one pin per venue

**Priority:** High  
**Related issue:** DOG-11

**Preconditions:**

- At least one venue exists whose coordinates have been corrected by admin

**Steps:**

1. Open the map screen
2. Zoom in on a known venue location

**Expected result:**

- Only one pin is visible for the venue
- The app pin and the platform (Apple/Google Maps) pin do not appear as two separate markers

**Status:** ⬜ Not tested

**Notes:** DOG-11 — app and platform pins were appearing separately because stored coordinates didn't match the platform's canonical coordinates. Fixed via admin lat/lng edit — regression check.

---

## TC-MAP-003 — Filtering by distance requires location permission

**Priority:** Medium  
**Related issue:** DOG-5

**Preconditions:**

- User has denied location permission

**Steps:**

1. Open the filter panel
2. Attempt to filter by distance

**Expected result:**

- App prompts the user to enable location permission
- Filter by distance is not applied without permission
- App does not crash

**Status:** ⬜ Not tested
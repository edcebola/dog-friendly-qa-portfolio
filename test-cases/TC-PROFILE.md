# TC-PROFILE — User Profile & Notifications

**App:** Dog Friendly (React Native / Expo)  
**Platform:** iOS & Android  
**Last updated:** 28.03.2026

---

## TC-PRO-001 — User can save and unsave a favourite venue

**Priority:** High  
**Related issue:** DOG-14

**Preconditions:**

- User is logged in
- At least one venue exists

**Steps:**

1. Open any venue's Place Details screen
2. Tap the favourite (heart) button
3. Navigate to the Profile / Favourites screen
4. Tap the favourite button again to unsave

**Expected result:**

- Venue appears in the favourites list after step 2
- Venue is removed from the favourites list after step 4

**Status:** ⬜ Not tested

---

## TC-PRO-002 — Dashboard card shows correct submission statuses

**Priority:** Medium  
**Related issue:** DOG-19

**Preconditions:**

- User has at least one submission in each status: Submitted, Approved, In Review, Not Listed

**Steps:**

1. Navigate to the Profile screen
2. Observe the mini dashboard card

**Expected result:**

- Counts for Submitted, Approved, In Review, and Not Listed are all correct
- "Not Listed" card is expandable and shows the rejection reason

**Status:** ⬜ Not tested

---

## TC-PRO-003 — Notification settings screen saves preferences

**Priority:** Medium  
**Related issue:** DOG-27, DOG-29

**Preconditions:**

- User is logged in and on the Notification Settings screen

**Steps:**

1. Toggle a notification preference off
2. Close the settings screen
3. Re-open the Notification Settings screen

**Expected result:**

- The toggled preference is still off (preference persisted)
- No crash or error on re-open

**Status:** ⬜ Not tested

**Notes:** DOG-29 — push notification sending was not implemented at the time of DOG-27. Verify that the settings UI correctly reflects what is and isn't functional.

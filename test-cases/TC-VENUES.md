# TC-VENUES — Venue Search & Details

**App:** Dog Friendly (React Native / Expo)  
**Platform:** iOS & Android  
**Last updated:** 28.03.2026

---

## TC-VEN-001 — Duplicate venue submission is blocked

**Priority:** High  
**Related issue:** DOG-34

**Preconditions:**

- Venue "Café Regatta, Merikannontie 8, Helsinki" already exists in the database
- User is logged in with a verified account

**Steps:**

1. Tap "Suggest a Venue"
2. Enter the name and address of an existing venue
3. Fill in the remaining fields and tap "Submit"

**Expected result:**

- Submission is rejected
- User sees a message indicating this venue already exists
- No duplicate entry is created in the database

**Status:** ⬜ Not tested

---

## TC-VEN-002 — Address autocomplete deduplicates results

**Priority:** Medium  
**Related issue:** DOG-31

**Preconditions:**

- User is on the "Suggest a Venue" screen

**Steps:**

1. Tap the address input field
2. Type "Iso Omena"
3. Observe the suggestion list

**Expected result:**

- Each unique address appears only once
- The same address is not repeated multiple times for the same location

**Status:** ⬜ Not tested

**Notes:** DOG-31 — "Iso Omena" showed the same address 5 times due to multiple businesses sharing the address. Fixed — regression check.

---

## TC-VEN-003 — Back button stays visible while scrolling in Place Details

**Priority:** High  
**Related issue:** DOG-43

**Preconditions:**

- User has opened any venue's Place Details screen

**Steps:**

1. Open a venue's Place Details screen
2. Scroll slowly all the way to the bottom

**Expected result:**

- The back button remains visible throughout all scroll positions
- It does not disappear at any point while scrolling

**Status:** ⬜ Not tested

**Notes:** DOG-43 — back button was disappearing when scrolling down. Fixed — regression check.
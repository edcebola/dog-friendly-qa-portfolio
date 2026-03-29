# TC-REPORT — Report Modal

**App:** Dog Friendly (React Native / Expo)  
**Platform:** iOS & Android  
**Last updated:** 28.03.2026

---

## TC-REP-001 — Submit button stays pinned when keyboard appears

**Priority:** Critical  
**Related issue:** DOG-13

**Preconditions:**

- User is on any venue's Place Details screen
- Report modal is open

**Steps:**

1. Tap the text input field inside the report modal
2. Observe the position of the Submit button while the keyboard is visible

**Expected result:**

- Submit button remains pinned at the bottom of the modal
- Only the scroll content area compresses upward
- Submit button does not jump or get pushed off screen

**Status:** ⬜ Not tested

**Notes:** DOG-13 — `KeyboardAvoidingView` was wrapping the entire modal including the footer. Fixed — regression check.

---

## TC-REP-002 — Successful report submission fires confirmation only once

**Priority:** Critical  
**Related issue:** DOG-22

**Preconditions:**

- User is logged in
- Report modal is open

**Steps:**

1. Select any report reason
2. Tap "Submit"
3. Count how many confirmation messages or alerts appear

**Expected result:**

- Feedback fires exactly once (or the card simply disappears — either is acceptable)
- Alert does not fire 2 or 3 times

**Status:** ⬜ Not tested

**Notes:** DOG-22 — `Alert.alert` was firing once per open modal instance, resulting in 3 consecutive alerts. Fixed — regression check.

---

## TC-REP-003 — "Other issue" requires text before submitting

**Priority:** High  
**Related issue:** DOG-42

**Preconditions:**

- Report modal is open inside Place Details

**Steps (negative case):**

1. Select "Other issue" as the report reason
2. Leave the text input empty
3. Tap "Submit"

**Expected result:** Submission is blocked; validation message is shown.

**Steps (positive case):**

1. Select "Other issue"
2. Type at least one character in the text field
3. Tap "Submit"

**Expected result:** Report submits successfully and modal closes.

**Status:** ⬜ Not tested

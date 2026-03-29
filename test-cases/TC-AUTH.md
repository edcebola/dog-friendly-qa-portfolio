# TC-AUTH — Authentication

**App:** Dog Friendly (React Native / Expo)  
**Platform:** iOS & Android  
**Last updated:** 28.03.2026

---

## TC-AUTH-001 — Successful registration with valid data

**Priority:** Critical

**Preconditions:**

- App is open on the Sign Up screen
- Email address has not been registered before

**Steps:**

1. Enter a valid, unused email address
2. Enter a valid password
3. Tap "Sign Up"

**Expected result:**

- A verification email is sent to the provided address

**Status:** ⬜ Not tested

---

## TC-AUTH-002 — Email verification link activates account

**Priority:** Critical  
**Related issue:** DOG-35

**Preconditions:**

- A new account has been registered but email not yet verified
- Verification email has been received

**Steps:**

1. Open the verification email
2. Tap the verification link
3. Return to the app and log in

**Expected result:**

- Account is marked as verified
- User can log in and access the app

**Status:** ⬜ Not tested

---

## TC-AUTH-003 — Password reset flow completes successfully

**Priority:** High  
**Related issue:** DOG-41

**Preconditions:**

- A verified account exists with a known email

**Steps:**

1. On the Login screen, tap "Forgot password"
2. Enter the registered email and tap "Send reset link"
3. Open the reset email and tap the link
4. Enter and confirm a new password
5. Log in with the new password

**Expected result:**

- Reset email is received
- New password is accepted
- Old password no longer works

**Status:** ⬜ Not tested
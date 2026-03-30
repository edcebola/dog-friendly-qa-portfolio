# Dog Friendly — QA Portfolio

**Tester:** Eduardo Cebola  
**App:** Dog Friendly Oy - Mobile app to discover dog-friendly venues in the Helsinki Metropolitan Area  
**Stack:** React Native · TypeScript · Expo · Node.js · MongoDB  
**Testing period:** February 2026 – ongoing  
**Platforms:** iOS & Android

---

## About

This repository documents my QA work on Dog Friendly, an app I built and launched in closed BETA with 15+ active users. As the sole developer and tester, I have full context on the codebase, which means bug reports include root cause analysis.

---

## Structure

```
test-cases/
├── TC-AUTH.md       # Registration, email verification, password reset
├── TC-MAP.md        # Location permission, map pins, distance filter
├── TC-PROFILE.md    # Favourites, dashboard stats, notification settings
├── TC-REPORT.md     # Report modal, keyboard behaviour, submit validation TC-PROFILE.md
└── TC-VENUES.md     # Suggest a venue, autocomplete, place details TC-MAP.md

bug-reports/
├── BUG-001.md
├── BUG-002.md
├── BUG-003.md
└── BUG-004.md
```

---

## Bug summary

| ID      | Title                                                    | Severity | Status   |
| ------- | -------------------------------------------------------- | -------- | -------- |
| BUG-001 | Report modal submit button jumps when keyboard opens     | Critical | Fixed ✅ |
| BUG-002 | Report confirmation alert fires 3 times                  | High     | Fixed ✅ |
| BUG-003 | Address autocomplete shows duplicate suggestions         | Medium   | Fixed ✅ |
| BUG-004 | Android: Place Details screen goes behind navigation bar | Medium   | Open 🔴  |

---

## Test case summary

| File       | Tests | Coverage area                                      |
| ---------- | ----- | -------------------------------------------------- |
| TC-AUTH    | 3     | Registration, email verification, password reset   |
| TC-VENUES  | 3     | Duplicate submissions, autocomplete, back button   |
| TC-REPORT  | 3     | Keyboard behaviour, alert count, submit validation |
| TC-MAP     | 3     | Location permission, map pins, distance filter     |
| TC-PROFILE | 3     | Favourites, dashboard stats, notifications         |

---

## Automation

API tests written with Playwright, targeting the Dog Friendly backend deployed on Render.
Full test suite lives in the backend repo (private) and runs on every push via GitHub Actions.
`auth.spec.js` below is included here as a portfolio sample.

```
automation/
├── playwright.config.js
├── .env.example
└── tests/
    └── auth.spec.js   # POST /api/auth/login — 3 tests
```

**Run the tests:**

```bash
cd automation
npx playwright test
```

**Expected output:**

```
Auth — POST /api/auth/login
  ✓ login succeeds with valid credentials
  ✓ login fails with wrong password
  ✓ login fails when email is missing

3 passed
```

| File         | Endpoint             | Tests | Coverage                                   |
| ------------ | -------------------- | ----- | ------------------------------------------ |
| auth.spec.js | POST /api/auth/login | 3     | Valid login, wrong password, missing field |

---

## Tools

| Tool             | Purpose                                           |
| ---------------- | ------------------------------------------------- |
| Linear           | Issue tracking (original bug IDs prefixed `DOG-`) |
| Postman          | API endpoint testing                              |
| Playwright       | Automated API testing                             |
| Expo Go / device | Manual testing on iOS & Android                   |
| GitHub           | Portfolio version control                         |

# CleanCity QA Requirement-Based Test Case Report  
**Tester**: [Your Name]  
**Date**: [2025-07-08]  
**Document Type**: Requirement-Based Test Case Creation  

---

## ✅ Summary Overview

| Section                     | Total Requirements | Passed | Failed |
|----------------------------|--------------------|--------|--------|
| Authentication             | 6                  | 1      | 5      |
| Waste Pickup Scheduling    | 6                  | 0      | 6      |
| Request Management         | 3                  | 0      | 3      |
| Dashboard & Analytics      | 2                  | 0      | 2      |
| Content Management         | 2                  | 0      | 2      |
| Community Features         | 2                  | 0      | 2      |
| Admin Functions            | 3                  | 0      | 3      |
| UI/Responsive Design       | 1                  | 0      | 1      |
| **Total**                  | **25**             | **1**  | **24** |

---

## 📌 Authentication

### User Registration

| Requirement                               | Expected Behavior                        | Actual Behavior                                   | Status |
|-------------------------------------------|-------------------------------------------|---------------------------------------------------|--------|
| Name Field Validation                     | Only letters allowed                      | Accepts "1" as a name                             | ❌     |
| Password Confirmation Field               | Confirm password before submission        | Missing                                           | ❌     |
| Password Length Validation                | At least 8 characters                     | No restriction                                    | ❌     |
| Email Format Validation                   | Must be valid email format                | Accepts "21@g"                                    | ❌     |
| Phone Number Field                        | Must collect phone number                 | Not provided                                      | ❌     |
| Registration Success                      | Only valid data should allow registration | Allows invalid data                               | ❌     |

### User Login

| Requirement                               | Expected Behavior                        | Actual Behavior                                   | Status |
|-------------------------------------------|-------------------------------------------|---------------------------------------------------|--------|
| Credential Verification                   | Only registered users can login          | Any credentials work                              | ❌     |
| Email Format Check                        | Must validate proper email               | Invalid formats accepted                          | ❌     |
| Password Validation                       | Must match registered password           | No matching or hashing check                      | ❌     |
| Login Redirection                         | Should redirect only after valid login   | Redirects to profile for invalid users            | ❌     |
| Session Creation                          | Create session for valid login only      | No authentication mechanism                       | ❌     |
| Logout Redirection                        | Redirect to login page after logout      | Redirects to home page                            | ❌     |

✅ *Only logout redirection partially functions.*

---

## 🗑️ Waste Pickup Scheduling

| Requirement                                       | Expected Behavior                              | Actual Behavior                              | Status |
|--------------------------------------------------|------------------------------------------------|----------------------------------------------|--------|
| Date Validation                                  | Only future dates allowed                      | Allows past dates like 2025-01-07             | ❌     |
| Full Name Field Validation                       | Should prevent numeric or empty names          | Accepts invalid entries                       | ❌     |
| Address Field                                    | Must be required                               | Missing                                       | ❌     |
| Quantity Field                                   | User must specify quantity                     | Missing                                       | ❌     |
| Time Slot Display                                | Show available slots for selected date         | No slots displayed                            | ❌     |
| One Pickup per Date                              | Prevent multiple pickups for same date         | Allows multiple pickups                       | ❌     |

---

## 📦 Request Management

| Requirement                          | Expected Behavior                              | Actual Behavior                         | Status |
|--------------------------------------|------------------------------------------------|-----------------------------------------|--------|
| Store Pickup Requests                | Save user pickup data                          | Pickup requests not stored              | ❌     |
| Pickup History                       | Users can view their past requests             | Not implemented                         | ❌     |
| Cancel or Delete Pickups            | Allow deleting pending pickups                 | Not possible                            | ❌     |

---

## 📊 Dashboard & Analytics

| Requirement                          | Expected Behavior                              | Actual Behavior                         | Status |
|--------------------------------------|------------------------------------------------|-----------------------------------------|--------|
| Show Recent Pickups                 | Display latest requests in dashboard           | Nothing shown                           | ❌     |
| Show Achievement Badges             | Reward users for actions                       | Not implemented                         | ❌     |

---

## 📰 Content Management

| Requirement                          | Expected Behavior                              | Actual Behavior                         | Status |
|--------------------------------------|------------------------------------------------|-----------------------------------------|--------|
| Blog Comment Persistence            | Comments persist across sessions               | Flushed after logout                    | ❌     |
| Show Comment Authors                | Display who wrote each comment                 | Always shows "you"                      | ❌     |

---

## 👥 Community Features

| Requirement                          | Expected Behavior                              | Actual Behavior                         | Status |
|--------------------------------------|------------------------------------------------|-----------------------------------------|--------|
| Display User Activity History       | Show comments, likes, actions                  | Not visible                             | ❌     |
| Upload Profile Picture              | Allow image upload                             | Uses only default avatar                | ❌     |

---

## 🛠️ Admin Functions

| Requirement                          | Expected Behavior                              | Actual Behavior                         | Status |
|--------------------------------------|------------------------------------------------|-----------------------------------------|--------|
| View & Manage Requests              | Approve, reject, assign pickups                | Not functional                          | ❌     |
| User Account Management             | View/delete/suspend accounts                   | No registered users exist               | ❌     |
| Content Moderation & Announcements | Delete content, post announcements             | Not available                           | ❌     |

---

## 📱 Responsive Design

| Requirement                          | Expected Behavior                              | Actual Behavior                         | Status |
|--------------------------------------|------------------------------------------------|-----------------------------------------|--------|
| Mobile-Friendly UI                  | Navbar and pages should adjust to small screens| Navbar breaks layout (320–767px)       | ❌     |

---

## 📌 Notes & Known Issues

- **Login bug**: Invalid credentials redirect to `/profile` instead of showing error.
- **Pickup system**: Backend missing; no storage, no validation.
- **Community feed**: Comments not tied to users.
- **Security flaw**: No user registration check — any login accepted.

---

## 📝 Recommendation

- Immediate fixes to authentication and input validation.
- Backend implementation for storing and managing pickups.
- Improve UI responsiveness.
- Enable admin functions based on user role.

---


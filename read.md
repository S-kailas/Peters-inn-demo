# Peters Inn Website

## Project Overview

**Peters Inn** is a dormitory-style accommodation startup located in Thiruvananthapuram. The dormitory uses a **3-tier Indian railway style bed arrangement** consisting of **Upper, Middle, and Lower berths**, each priced differently.

The website's purpose is to:

* Introduce Peters Inn
* Show berth pricing
* Display images of the dormitory
* Allow visitors to submit a **pre-booking request form**

The form does **not confirm bookings automatically**. It only sends a **booking request via email**.

---

# Target Users

1. Students visiting the city for **interviews**
2. **Tourists** staying temporarily (1–2 days)
3. Travelers looking for **affordable short stays**

---

# Core Website Requirements

## 1. General Requirements

The website must:

* Be **mobile-first and fully responsive**
* Look **clean, modern, and professional**
* Work smoothly on **mobile phones**
* Be **production ready**
* Use **simple fast-loading design**
* Require **no login or user accounts**
* Not require a database

---

# Website Structure

## Pages

The website must contain the following pages:

### 1. Home Page

Sections required:

1. **Hero Section**

   * Peters Inn logo
   * Short introduction
   * Button: *Pre-Book Now*

2. **About Section**
   Short explanation of the dormitory concept.

Example content idea:

* Railway-style 3-tier dormitory beds
* Separate dorms for men and women
* AC included
* Affordable pricing

3. **Pricing Section**

Display berth types clearly.

| Berth Type   | Price | Duration |
| ------------ | ----- | -------- |
| Upper Berth  | ₹299  | 1 Day    |
| Middle Berth | ₹399  | 1 Day    |
| Lower Berth  | ₹499  | 1 Day    |

4. **Gallery Section**
   Display **4 images**.

Images must:

* Be stored in the repository
* Be responsive
* Use grid layout

Example structure:

```
/images
   dorm1.jpg
   dorm2.jpg
   dorm3.jpg
   dorm4.jpg
```

5. **Location Section**

Address:

Premier Towers
Ayurveda College Junction
MG Road
Thiruvananthapuram

Google Maps link:

https://maps.app.goo.gl/LTYJ84jFQqY7FSuh9

Include:

* Clickable map link
* Optional embedded Google Map

---

# Pre-Booking Form

The website must include a **pre-booking form page** accessible from the home page.

## Form Fields

Required fields:

1. Full Name
2. Phone Number
3. Gender
4. Berth Type
5. Check-in Date

### Gender Options

```
Male
Female
```

### Berth Options

```
Upper Berth — ₹299
Middle Berth — ₹399
Lower Berth — ₹499
```

### Phone Number Rules

Accept:

* Indian phone numbers
* International phone numbers

Basic validation required.

---

# Form Submission Behaviour

When the user submits the form:

1. Booking details are sent to **email**
2. Email address used: **placeholder email**
3. After submission the user must be redirected to:

```
/thank-you.html
```

---

# Thank You Page

The page must show:

**Title**

```
Booking Request Received
```

Message example:

"Thank you for your booking request.
Our team will contact you shortly to confirm availability."

Include button:

```
Back to Home
```

---

# Contact Section

The website must display the following contact information.

### Phone

```
07736688181
```

### Email

```
petersinn.gmail.com
```

### WhatsApp

Phone number:

```
07736688181
```

Clicking WhatsApp must open chat using:

```
https://wa.me/917736688181
```

---

# Assets Provided in Repository

The repository will contain:

```
logo.png
/images (gallery images)
```

The website must use the provided **logo**.

---

# Technical Requirements

The AI generator may choose the technology stack automatically, but it must ensure:

* Fast loading
* SEO friendly structure
* Clean modular code
* Mobile responsive layout

Preferred simple stack:

```
HTML
CSS
JavaScript
```

No backend database required.

Email sending can use:

* serverless email service
* simple email API
* form email service

---

# Folder Structure

Example structure:

```
project-root
│
├── index.html
├── booking.html
├── thank-you.html
│
├── css
│   └── styles.css
│
├── js
│   └── form.js
│
├── images
│   └── gallery images
│
└── logo.png
```

---

# UX Requirements

The design must include:

* smooth scrolling
* clear CTA buttons
* large mobile-friendly buttons
* easy-to-read fonts
* simple navigation
* clean gallery layout

---

# Reference Style

Use the following site as inspiration for layout style:

https://s-kailas.github.io/projec3/

Do **not copy the code**, only take inspiration from structure.

---

# Important Constraints

* No login system
* No user accounts
* No database
* Only **pre-booking request**
* Mobile optimized
* Production-ready code

---

# Expected Output

The generated project must include:

* Complete working website
* Clean file structure
* Fully responsive design
* Working form email submission
* Thank-you page redirect
* Gallery display
* Contact integration

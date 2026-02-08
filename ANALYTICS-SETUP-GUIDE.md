# Analytics Setup Guide for NEXUS CHINA

**Author:** Manus AI  
**Last Updated:** February 7, 2026  
**Website:** https://nexuschina.com

---

## Executive Summary

This document provides comprehensive instructions for configuring Google Analytics 4 (GA4) and Microsoft Clarity on the NEXUS CHINA website. Both analytics platforms have been pre-integrated into the codebase and require only the addition of tracking IDs as environment variables to become fully operational. GA4 provides quantitative insights into user behavior, traffic sources, and conversion metrics, while Clarity offers qualitative analysis through heatmaps, session recordings, and user interaction patterns.

---

## Table of Contents

1. [Google Analytics 4 Setup](#google-analytics-4-setup)
2. [Microsoft Clarity Setup](#microsoft-clarity-setup)
3. [Environment Variable Configuration](#environment-variable-configuration)
4. [Verification and Testing](#verification-and-testing)
5. [Custom Event Tracking](#custom-event-tracking)
6. [Privacy and Compliance](#privacy-and-compliance)

---

## Google Analytics 4 Setup

Google Analytics 4 is the latest version of Google's web analytics platform, offering advanced machine learning capabilities, cross-platform tracking, and privacy-centric measurement. Unlike Universal Analytics (the previous version), GA4 uses an event-based data model that provides more flexibility in tracking user interactions.

### Step 1: Create a Google Analytics 4 Property

1. **Sign in to Google Analytics**  
   Navigate to [analytics.google.com](https://analytics.google.com) and sign in with your Google account. If you do not have a Google Analytics account, you will need to create one.

2. **Create a New Property**  
   - Click the **"Admin"** gear icon in the bottom-left corner
   - In the **"Property"** column, click **"Create Property"**
   - Enter the following details:
     - **Property name:** `NEXUS CHINA`
     - **Reporting time zone:** `(GMT+00:00) United Kingdom Time`
     - **Currency:** `GBP (£)`
   - Click **"Next"**

3. **Provide Business Information**  
   - **Industry category:** Select **"Education"**
   - **Business size:** Select the appropriate size for your organization
   - **How you plan to use Google Analytics:** Check **"Examine user behavior"** and **"Measure advertising ROI"**
   - Click **"Create"** and accept the Terms of Service

4. **Set Up Data Stream**  
   - After creating the property, you will be prompted to set up a data stream
   - Select **"Web"** as the platform
   - Enter the following details:
     - **Website URL:** `https://nexuschina.com`
     - **Stream name:** `NEXUS CHINA Website`
   - **Enable Enhanced Measurement** (recommended): This automatically tracks scrolls, outbound clicks, site search, video engagement, and file downloads
   - Click **"Create stream"**

5. **Obtain Your Measurement ID**  
   - After creating the stream, you will see your **Measurement ID** in the format `G-XXXXXXXXXX`
   - **Copy this ID** – you will need it for the environment variable configuration

### Step 2: Configure GA4 Settings (Recommended)

Before deploying the tracking code, configure these recommended settings:

#### Data Retention

1. In the **Admin** section, navigate to **Property Settings → Data Settings → Data Retention**
2. Set **Event data retention** to **14 months** (maximum available for free accounts)
3. Enable **"Reset user data on new activity"** to extend retention for active users

#### User-ID Tracking (Optional but Recommended)

If you want to track authenticated users across devices:

1. In **Admin → Property Settings → Reporting Identity**, select **"Blended"** (uses User-ID, Google signals, and device-based data)
2. The NEXUS CHINA codebase includes user authentication via Manus OAuth, which can be integrated with GA4 User-ID tracking

#### Conversion Events

Define key conversion events to measure program applications and consultation bookings:

1. Navigate to **Admin → Events**
2. Click **"Create event"** and define the following conversions:
   - **Event name:** `consultation_submit` (tracks consultation form submissions)
   - **Event name:** `program_application` (tracks program application clicks)
   - **Event name:** `article_read` (tracks Insights article engagement)
3. Mark these events as **conversions** by toggling the switch in the **"Mark as conversion"** column

---

## Microsoft Clarity Setup

Microsoft Clarity is a free user behavior analytics tool that provides heatmaps, session recordings, and insights into how users interact with your website. Unlike GA4, which focuses on quantitative metrics, Clarity emphasizes qualitative analysis by allowing you to watch actual user sessions and identify friction points in the user experience.

### Step 1: Create a Microsoft Clarity Project

1. **Sign in to Microsoft Clarity**  
   Navigate to [clarity.microsoft.com](https://clarity.microsoft.com) and sign in with a Microsoft account. If you do not have one, create a free account at [account.microsoft.com](https://account.microsoft.com).

2. **Create a New Project**  
   - Click **"Add new project"**
   - Enter the following details:
     - **Project name:** `NEXUS CHINA`
     - **Website URL:** `https://nexuschina.com`
   - Click **"Add new project"**

3. **Obtain Your Project ID**  
   - After creating the project, Clarity will display your **Project ID** (a string of alphanumeric characters)
   - **Copy this ID** – you will need it for the environment variable configuration
   - You can also find this ID later by navigating to **Settings → Setup** in your Clarity project

### Step 2: Configure Clarity Settings (Recommended)

#### IP Blocking (Optional)

To exclude internal traffic from analytics:

1. Navigate to **Settings → IP blocking**
2. Add your organization's IP addresses to prevent internal visits from being recorded
3. This ensures your analytics data reflects only external user behavior

#### Cookie Consent Mode

If you implement a cookie consent banner (required for GDPR compliance):

1. Navigate to **Settings → Cookie consent**
2. Enable **"Respect cookie consent"**
3. Clarity will only track users who have accepted analytics cookies

#### Session Recording Masking

Clarity automatically masks sensitive information (credit card numbers, passwords) in session recordings. To customize masking:

1. Navigate to **Settings → Masking**
2. Add CSS selectors for elements you want to mask (e.g., `.user-email`, `#consultation-form`)
3. Masked elements will appear as blank boxes in session recordings

---

## Environment Variable Configuration

Both Google Analytics 4 and Microsoft Clarity require environment variables to function. The NEXUS CHINA codebase is pre-configured to read these variables from the environment.

### Required Environment Variables

| Variable Name | Description | Example Value | Where to Find |
|--------------|-------------|---------------|---------------|
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID | `G-ABC123XYZ` | GA4 Admin → Data Streams → Web Stream Details |
| `VITE_CLARITY_PROJECT_ID` | Microsoft Clarity Project ID | `abc123xyz` | Clarity Settings → Setup |

### Adding Environment Variables in Manus

1. **Access the Manus Management UI**  
   - Open the right-side Management UI panel in your Manus workspace
   - Navigate to **Settings → Secrets**

2. **Add Google Analytics Variable**  
   - Click **"Add Secret"**
   - **Key:** `VITE_GA_MEASUREMENT_ID`
   - **Value:** Your GA4 Measurement ID (e.g., `G-ABC123XYZ`)
   - **Description:** Google Analytics 4 tracking ID
   - Click **"Save"**

3. **Add Microsoft Clarity Variable**  
   - Click **"Add Secret"**
   - **Key:** `VITE_CLARITY_PROJECT_ID`
   - **Value:** Your Clarity Project ID (e.g., `abc123xyz`)
   - **Description:** Microsoft Clarity project tracking ID
   - Click **"Save"**

4. **Restart the Development Server**  
   - After adding environment variables, restart the dev server to apply changes
   - In Manus, this happens automatically when you save secrets

### Alternative: Local Development Configuration

If you are running the project locally (outside of Manus), create a `.env` file in the project root:

```env
VITE_GA_MEASUREMENT_ID=G-ABC123XYZ
VITE_CLARITY_PROJECT_ID=abc123xyz
```

**Important:** Never commit the `.env` file to version control. The `.gitignore` file is already configured to exclude it.

---

## Verification and Testing

After configuring environment variables, verify that both analytics platforms are tracking correctly.

### Verify Google Analytics 4

1. **Real-Time Report**  
   - Open Google Analytics and navigate to **Reports → Realtime**
   - Visit your website in a new browser tab
   - Within 30 seconds, you should see your visit appear in the **Realtime** report
   - Verify that page views, events, and user location are being tracked

2. **Debug Mode (Optional)**  
   - Install the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension
   - Enable the extension and visit your website
   - Open the browser console (F12) and look for GA4 debug messages
   - Verify that events are firing correctly (e.g., `page_view`, `scroll`, `click`)

3. **Check Custom Events**  
   - Navigate to **Reports → Engagement → Events**
   - Trigger custom events on your website (e.g., submit the consultation form)
   - Within a few minutes, custom events should appear in the Events report

### Verify Microsoft Clarity

1. **Dashboard Overview**  
   - Open Microsoft Clarity and navigate to your project dashboard
   - Visit your website in a new browser tab
   - Within 1-2 minutes, you should see session data appear in the dashboard
   - Verify that **Sessions**, **Recordings**, and **Heatmaps** are being captured

2. **Watch a Session Recording**  
   - Navigate to **Recordings** in the Clarity dashboard
   - Click on a recent session to watch the recording
   - Verify that user interactions (clicks, scrolls, mouse movements) are being captured
   - Check that sensitive information is properly masked

3. **View Heatmaps**  
   - Navigate to **Heatmaps** in the Clarity dashboard
   - Select a page (e.g., `/programs` or `/contact`)
   - View **Click heatmap**, **Scroll heatmap**, and **Area heatmap**
   - Verify that user interaction data is being visualized correctly

---

## Custom Event Tracking

The NEXUS CHINA codebase includes pre-built helper functions for tracking custom events in both Google Analytics and Microsoft Clarity. These functions allow you to measure specific user interactions that are critical to your business goals.

### Google Analytics Custom Events

The following helper functions are available in `client/src/components/GoogleAnalytics.tsx`:

#### Track Consultation Form Submissions

```typescript
import { trackConsultationSubmit } from '@/components/GoogleAnalytics';

// Call this function when the consultation form is submitted
trackConsultationSubmit('Tech Innovation Immersion');
```

#### Track Program Applications

```typescript
import { trackProgramApplication } from '@/components/GoogleAnalytics';

// Call this function when a user clicks "Apply Now" on a program
trackProgramApplication('Business & Culture Experience');
```

#### Track Article Reads

```typescript
import { trackArticleRead } from '@/components/GoogleAnalytics';

// Call this function when a user reads an Insights article
trackArticleRead('China\'s AI Revolution');
```

#### Track Outbound Links

```typescript
import { trackOutboundLink } from '@/components/GoogleAnalytics';

// Call this function when a user clicks an external link
trackOutboundLink('https://www.example.com', 'Partner Website');
```

#### Track Social Media Clicks

```typescript
import { trackSocialClick } from '@/components/GoogleAnalytics';

// Call this function when a user clicks a social media icon
trackSocialClick('Instagram');
```

### Microsoft Clarity Custom Events

The following helper functions are available in `client/src/components/MicrosoftClarity.tsx`:

#### Track Form Submissions

```typescript
import { clarityTrackFormSubmit } from '@/components/MicrosoftClarity';

// Call this function when any form is submitted
clarityTrackFormSubmit('Consultation Form', { program: 'Tech Innovation' });
```

#### Track Button Clicks

```typescript
import { clarityTrackButtonClick } from '@/components/MicrosoftClarity';

// Call this function when a user clicks a CTA button
clarityTrackButtonClick('Explore Programs', 'Hero Section');
```

#### Track Section Views

```typescript
import { clarityTrackSectionView } from '@/components/MicrosoftClarity';

// Call this function when a user scrolls to a specific section
clarityTrackSectionView('Why China Matters');
```

#### Identify Authenticated Users

```typescript
import { clarityIdentifyUser } from '@/components/MicrosoftClarity';

// Call this function after a user logs in
clarityIdentifyUser('user123', { email: 'user@example.com', role: 'student' });
```

### Implementation Example: Contact Form

Here is an example of how to integrate custom event tracking into the consultation form on the Contact page:

```typescript
import { trackConsultationSubmit } from '@/components/GoogleAnalytics';
import { clarityTrackFormSubmit } from '@/components/MicrosoftClarity';

const handleFormSubmit = async (formData: FormData) => {
  // Submit form data to backend
  await submitConsultationForm(formData);

  // Track the submission in Google Analytics
  trackConsultationSubmit(formData.programType);

  // Track the submission in Microsoft Clarity
  clarityTrackFormSubmit('Consultation Form', {
    program: formData.programType,
    source: formData.referralSource
  });

  // Show success message to user
  toast.success('Consultation request submitted successfully!');
};
```

---

## Privacy and Compliance

Both Google Analytics 4 and Microsoft Clarity are designed with privacy in mind, but you must ensure compliance with data protection regulations such as GDPR (General Data Protection Regulation) and CCPA (California Consumer Privacy Act).

### GDPR Compliance Checklist

- [ ] **Cookie Consent Banner:** Implement a cookie consent banner that allows users to opt in or out of analytics tracking
- [ ] **Privacy Policy:** Update your privacy policy to disclose the use of Google Analytics and Microsoft Clarity
- [ ] **Data Processing Agreement:** Sign Google's Data Processing Amendment (available in GA4 Admin → Account Settings → Data Processing Terms)
- [ ] **IP Anonymization:** GA4 anonymizes IP addresses by default, but verify this in **Admin → Data Settings → Data Collection**
- [ ] **Data Retention:** Configure data retention periods to comply with GDPR's data minimization principle (14 months is recommended)
- [ ] **User Rights:** Provide a mechanism for users to request data deletion (available in GA4 via **User Deletion API**)

### Recommended Cookie Consent Solution

Consider integrating a cookie consent management platform such as:

- **Cookiebot** ([cookiebot.com](https://www.cookiebot.com)) – Comprehensive GDPR/CCPA compliance solution
- **OneTrust** ([onetrust.com](https://www.onetrust.com)) – Enterprise-grade consent management
- **Osano** ([osano.com](https://www.osano.com)) – Developer-friendly consent platform

Once implemented, configure both GA4 and Clarity to respect user consent preferences.

---

## Key Metrics to Monitor

After deploying analytics, focus on these key metrics to measure the success of your website and programs:

### Google Analytics 4 Metrics

| Metric | Definition | Target | How to Find |
|--------|-----------|--------|-------------|
| **Users** | Unique visitors to your website | 1,000+/month | Reports → Acquisition → Traffic Acquisition |
| **Sessions** | Total visits (including repeat visitors) | 1,500+/month | Reports → Engagement → Overview |
| **Engagement Rate** | % of engaged sessions (10+ seconds or 2+ page views) | >60% | Reports → Engagement → Overview |
| **Average Session Duration** | Time users spend on your website | >2 minutes | Reports → Engagement → Overview |
| **Conversion Rate** | % of sessions that result in a conversion | >3% | Reports → Engagement → Conversions |
| **Top Traffic Sources** | Where your visitors come from | Organic search, referrals | Reports → Acquisition → Traffic Acquisition |
| **Top Landing Pages** | Most common entry points | Home, Programs | Reports → Engagement → Pages and Screens |

### Microsoft Clarity Metrics

| Metric | Definition | Target | How to Find |
|--------|-----------|--------|-------------|
| **Dead Clicks** | Clicks on non-interactive elements | <5% | Dashboard → Overview |
| **Rage Clicks** | Rapid repeated clicks (indicates frustration) | <2% | Dashboard → Overview |
| **Excessive Scrolling** | Users scrolling back and forth repeatedly | <10% | Dashboard → Overview |
| **Quick Backs** | Users leaving immediately after arriving | <15% | Dashboard → Overview |
| **JavaScript Errors** | Client-side errors affecting user experience | 0 errors | Dashboard → Overview |

---

## Troubleshooting Common Issues

### Issue 1: Google Analytics Not Tracking

**Symptoms:** No data appears in the GA4 Realtime report after visiting the website.

**Causes:**
- Measurement ID is incorrect or missing
- Ad blockers or browser privacy extensions are blocking GA4
- Environment variable is not properly configured

**Solutions:**
1. Verify the Measurement ID in **GA4 Admin → Data Streams** matches the `VITE_GA_MEASUREMENT_ID` environment variable
2. Test in an incognito/private browsing window without ad blockers
3. Check the browser console for errors related to `gtag.js` or `analytics`
4. Ensure the environment variable is prefixed with `VITE_` (required for Vite to expose it to the client)

### Issue 2: Microsoft Clarity Not Recording Sessions

**Symptoms:** No sessions appear in the Clarity dashboard after visiting the website.

**Causes:**
- Project ID is incorrect or missing
- Clarity script is blocked by Content Security Policy (CSP)
- Environment variable is not properly configured

**Solutions:**
1. Verify the Project ID in **Clarity Settings → Setup** matches the `VITE_CLARITY_PROJECT_ID` environment variable
2. Check the browser console for errors related to `clarity.ms`
3. If using a Content Security Policy, add `https://www.clarity.ms` to the `script-src` directive
4. Ensure the environment variable is prefixed with `VITE_`

### Issue 3: Custom Events Not Appearing

**Symptoms:** Custom events (e.g., `consultation_submit`) are not appearing in GA4 or Clarity.

**Causes:**
- Event tracking functions are not being called
- Event names contain invalid characters or exceed length limits
- Events are being filtered out by GA4 data filters

**Solutions:**
1. Verify that event tracking functions are being called in the correct locations (e.g., form submission handlers)
2. Check the browser console for errors when triggering events
3. Use GA4 DebugView (**Admin → DebugView**) to see events in real-time
4. Ensure event names follow GA4 naming conventions (lowercase, underscores, max 40 characters)

---

## Next Steps After Setup

Once analytics are fully configured and verified, use the data to optimize your website and programs:

1. **Weekly Review:** Check GA4 and Clarity dashboards weekly to identify trends and anomalies
2. **A/B Testing:** Use Clarity heatmaps to identify low-performing CTAs and test variations
3. **Conversion Funnel Analysis:** Track the user journey from landing page to consultation form submission
4. **Content Optimization:** Identify high-performing Insights articles and create similar content
5. **Traffic Source Analysis:** Determine which marketing channels drive the most qualified leads
6. **Mobile Optimization:** Use Clarity session recordings to identify mobile usability issues

---

## Conclusion

By following this guide, you have successfully integrated Google Analytics 4 and Microsoft Clarity into the NEXUS CHINA website. These tools provide complementary insights: GA4 offers quantitative data on traffic and conversions, while Clarity provides qualitative insights into user behavior and experience. Regular monitoring and analysis of these metrics will enable data-driven decisions to optimize your website and increase program applications.

For technical assistance with analytics configuration or custom event tracking, refer to the project documentation in the GitHub repository at [github.com/charliekoo188/nexuschina-website](https://github.com/charliekoo188/nexuschina-website).

---

**Document Version:** 1.0  
**Next Review Date:** May 7, 2026

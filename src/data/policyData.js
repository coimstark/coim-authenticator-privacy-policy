import React from 'react';
import {
    IoInformationCircleOutline,
    IoLockClosedOutline,
    IoEyeOutline,
    IoServerOutline,
    IoShieldHalfOutline,
    IoChildOutline,
    IoHelpCircleOutline,
    IoGlobeOutline,
    IoMailOutline,
    IoRefreshOutline
} from 'react-icons/io5';

export const privacyPolicySections = [
    {
        title: "Introduction",
        icon: <IoInformationCircleOutline />,
        content: `
      <p>This Privacy Policy explains how COIM Authenticator ("we", "our", or "us") collects, uses, and shares information from users of our COIM Authenticator application ("the App").</p>
      <p>Our COIM Authenticator is designed with your privacy and security in mind. We are committed to being transparent about our data practices and ensuring you have control over your information.</p>
      <p>By using the App, you agree to the collection and use of information in accordance with this policy.</p>
    `
    },
    {
        title: "Information We Collect",
        icon: <IoEyeOutline />,
        content: `
      <p>Our approach to data collection is minimalist by design. We believe in collecting only what is necessary to provide our service.</p>
      <h4>Information Collected Automatically:</h4>
      <ul>
        <li><strong>App Usage Data:</strong> Basic analytics about how the App is used (such as feature usage statistics, crash reports) to help us improve the App.</li>
        <li><strong>Device Information:</strong> Technical data about your device (such as operating system version, device model, language preference) to ensure compatibility and optimal operation.</li>
      </ul>
      <h4>Information You Provide:</h4>
      <ul>
        <li><strong>Authentication Accounts:</strong> When you set up TOTP authentication, you provide information about accounts you want to secure. This information is stored securely on your device and, if you opt in, encrypted and synchronized to your account.</li>
        <li><strong>User Account:</strong> If you choose to create an account for backup and synchronization purposes, we collect your email address for authentication.</li>
      </ul>
      <p>The App <strong>does not</strong> collect any personally identifiable information beyond what's strictly necessary for operation.</p>
    `
    },
    {
        title: "Data Storage & Security",
        icon: <IoLockClosedOutline />,
        content: `
      <p>The security of your data is our highest priority.</p>
      <h4>Local Storage:</h4>
      <p>The TOTP secrets and account information are primarily stored locally on your device, encrypted using industry-standard encryption algorithms.</p>
      <h4>Cloud Storage (Optional):</h4>
      <p>If you enable the cloud synchronization feature:</p>
      <ul>
        <li>Your TOTP secrets are encrypted on your device before transmission.</li>
        <li>We use end-to-end encryption, meaning that we cannot access your actual TOTP secrets.</li>
        <li>Your encryption keys are never sent to our servers in their unencrypted form.</li>
        <li>All data transmission occurs over secure HTTPS connections.</li>
      </ul>
      <h4>Security Measures:</h4>
      <p>We implement various security measures to protect your data:</p>
      <ul>
        <li>AES-256 encryption for all sensitive data</li>
        <li>Secure authentication mechanisms</li>
        <li>Regular security audits and updates</li>
        <li>Option to require biometric authentication for app access</li>
      </ul>
    `
    },
    {
        title: "How We Use Your Information",
        icon: <IoServerOutline />,
        content: `
    <p>We use the information we collect solely for providing and improving the App.</p>
    <p>Specifically, we use your information for:</p>
    <ul>
      <li><strong>Service Provision:</strong> To generate time-based one-time passwords (TOTP) for your accounts.</li>
      <li><strong>Synchronization:</strong> To synchronize your accounts across multiple devices if you opt in to this feature.</li>
      <li><strong>App Improvement:</strong> To analyze app usage patterns and improve user experience.</li>
      <li><strong>Technical Support:</strong> To diagnose problems and provide customer support.</li>
      <li><strong>Communication:</strong> To respond to your inquiries or provide essential service updates.</li>
    </ul>
    <p>We do not use your data for advertising purposes, and we do not build user profiles based on your authentication activity.</p>
  `
    },
    {
        title: "Data Sharing & Third Parties",
        icon: <IoShieldHalfOutline />,
        content: `
    <p>We prioritize your privacy and limit sharing of your information:</p>
    <h4>We Do Not Share:</h4>
    <ul>
      <li>Your TOTP secrets or authentication data with third parties</li>
      <li>Your personal information for marketing purposes</li>
      <li>Your data with advertisers</li>
    </ul>
    <h4>Limited Sharing:</h4>
    <p>We may share limited information in the following circumstances:</p>
    <ul>
      <li><strong>Service Providers:</strong> With trusted third parties who assist us in operating our service (such as cloud hosting providers), subject to confidentiality obligations.</li>
      <li><strong>Legal Compliance:</strong> When required by law, court order, or governmental regulation.</li>
      <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with continued protection of your data.</li>
      <li><strong>With Your Consent:</strong> In circumstances not covered above, we will seek your explicit consent before sharing your information.</li>
    </ul>
    <p>Our service providers are bound by strict confidentiality agreements and are only permitted to use your data for the specific services they provide to us.</p>
  `
    },
    {
        title: "User Rights & Choices",
        icon: <IoRefreshOutline />,
        content: `
    <p>You have several rights regarding your personal information:</p>
    <ul>
      <li><strong>Access:</strong> You can access all your TOTP account information directly within the App.</li>
      <li><strong>Correction:</strong> You can modify or update your account information at any time through the App interface.</li>
      <li><strong>Deletion:</strong> You can delete individual TOTP accounts or your entire user account from within the App settings.</li>
      <li><strong>Data Portability:</strong> You can export your TOTP accounts in a standard format for use in other compatible applications.</li>
      <li><strong>Opt-out of Sync:</strong> You can disable the cloud synchronization feature at any time, which will stop any data transfer to our servers.</li>
      <li><strong>Consent Withdrawal:</strong> You can withdraw consent for optional data collection features through the App settings.</li>
    </ul>
    <p>To exercise any of these rights or if you have questions, please contact us at privacy@example.com.</p>
  `
    },
    {
        title: "Children's Privacy",
        icon: <IoChildOutline />,
        content: `
    <p>The COIM Authenticator App is not intended for use by children under the age of 13, and we do not knowingly collect personal information from children under 13.</p>
    <p>If we discover that we have collected personal information from a child under 13, we will promptly delete that information. If you believe we might have any information from or about a child under 13, please contact us at privacy@example.com.</p>
    <p>In some regions (like the European Economic Area), different age limitations may apply. We comply with those requirements in the applicable regions.</p>
  `
    },
    {
        title: "International Data Transfers",
        icon: <IoGlobeOutline />,
        content: `
    <p>Your information may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where data protection laws may differ from those of your jurisdiction.</p>
    <p>If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there.</p>
    <p>For users in the European Economic Area (EEA), we ensure that any data transfers comply with applicable regulations:</p>
    <ul>
      <li>We use standard contractual clauses approved by the European Commission</li>
      <li>We process data in countries with adequate data protection as determined by the European Commission</li>
      <li>We implement appropriate technical and organizational measures to protect your data</li>
    </ul>
    <p>By using the App, you consent to this transfer policy.</p>
  `
    },
    {
        title: "Policy Updates",
        icon: <IoHelpCircleOutline />,
        content: `
    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by:</p>
    <ul>
      <li>Posting the new Privacy Policy on this page</li>
      <li>Sending an in-app notification about the changes</li>
      <li>Updating the "Last updated" date at the top of this Privacy Policy</li>
    </ul>
    <p>For significant changes, we will provide more prominent notice, which may include an email notification for users who have created accounts.</p>
    <p>We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
    <p><em>Last updated: March 5, 2025 14:23:55 (UTC)</em></p>
  `
    },
    {
        title: "Contact Us",
        icon: <IoMailOutline />,
        content: `
    <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
    <ul>
      <li>By email: privacy@example.com</li>
      <li>By visiting our website: https://example.com/contact</li>
      <li>By mail: COIM Authenticator Privacy Team, 123 Security Street, Tech City, CA 94043, USA</li>
    </ul>
    <p>For security concerns or data breach reports, please contact us immediately at security@example.com.</p>
    <p>For accessibility issues related to this privacy policy, please email access@example.com.</p>
    <p>Document ID: 043668824</p>
  `
    },
];
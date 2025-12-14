import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | SteadySpend',
  description:
    'SteadySpend privacy policy. Learn how we protect your data and what information we collect when you use our free budgeting tools.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
          <p className="leading-relaxed">
            At SteadySpend, we respect your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and safeguard information
            when you visit and use our website and tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">Information You Provide</h3>
          <p className="leading-relaxed mb-4">
            When you use our budgeting tools, you may enter financial information such as income and
            expenses. This information is stored locally in your browser using localStorage and is
            never transmitted to our servers or stored in our databases.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">Automatically Collected Information</h3>
          <p className="leading-relaxed mb-4">
            When you visit our website, we may automatically collect certain information about your
            device and browsing behavior, including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
          <p className="leading-relaxed mb-4">We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Provide and improve our budgeting tools and services</li>
            <li>Analyze website usage and trends to enhance user experience</li>
            <li>Display relevant advertisements through third-party ad networks</li>
            <li>Ensure website security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Local Storage</h2>
          <p className="leading-relaxed mb-4">
            Our budgeting tools use your browser&apos;s localStorage to save your input data locally on
            your device. This allows you to return to your calculations later without losing your work.
            This data:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Stays on your device and is never sent to our servers</li>
            <li>Can be cleared at any time through your browser settings or by using the reset
              function in our tools
            </li>
            <li>Is not accessible to us or any third parties</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Cookies and Tracking Technologies</h2>
          <p className="leading-relaxed mb-4">
            We use cookies and similar tracking technologies to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Deliver personalized advertisements</li>
          </ul>
          <p className="leading-relaxed mt-4">
            You can control cookies through your browser settings. However, disabling cookies may
            affect your ability to use certain features of our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Third-Party Services</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">Advertising Networks</h3>
          <p className="leading-relaxed mb-4">
            We work with third-party advertising networks, such as Google AdSense and Mediavine, to
            display advertisements on our website. These networks may use cookies and similar
            technologies to collect information about your browsing behavior to show you relevant ads.
          </p>
          <p className="leading-relaxed mb-4">
            You can opt out of personalized advertising by visiting:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 underline"
              >
                Google Ad Settings
              </a>
            </li>
            <li>
              <a
                href="https://optout.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 underline"
              >
                Digital Advertising Alliance
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Security</h2>
          <p className="leading-relaxed mb-4">
            We implement appropriate technical and organizational measures to protect your information.
            However, no method of transmission over the Internet or electronic storage is 100% secure.
            While we strive to protect your personal information, we cannot guarantee absolute security.
          </p>
          <p className="leading-relaxed">
            Since your tool data is stored locally in your browser, you are responsible for the
            security of your device and browser. We recommend using secure devices and keeping your
            browser software up to date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your Rights</h2>
          <p className="leading-relaxed mb-4">You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Access and review any personal information we may have collected</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of certain data collection and processing activities</li>
            <li>Clear your browser&apos;s localStorage at any time</li>
            <li>Disable cookies through your browser settings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Children&apos;s Privacy</h2>
          <p className="leading-relaxed">
            Our website is not intended for children under the age of 13. We do not knowingly collect
            personal information from children under 13. If you believe we have collected
            information from a child under 13, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Changes to This Privacy Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are
            advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
          <p className="leading-relaxed mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <p className="leading-relaxed">
            <a
              href="mailto:questions@steadyspend.com"
              className="text-emerald-700 hover:text-emerald-800 underline"
            >
              questions@steadyspend.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | SteadySpend",
  description:
    "Learn how SteadySpend uses cookies, advertising technologies, and local storage to support website functionality, analytics, and ads.",
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cookie Policy</h1>

      <p className="text-sm text-gray-600 mb-10">
        Last updated:{" "}
        {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
        {/* What are cookies */}
        <section>
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They are
            commonly used to help websites function properly, remember preferences, understand usage
            patterns, and support advertising.
          </p>
        </section>

        {/* How we use cookies */}
        <section>
          <h2>How We Use Cookies</h2>
          <p>
            SteadySpend uses cookies and similar technologies to support core website functionality,
            understand how visitors use our site, and display advertising. Cookies help us improve
            performance while keeping the experience simple and reliable.
          </p>

          <ul>
            <li>
              <strong>Essential cookies</strong> — Required for basic website functionality, such as
              page navigation and security.
            </li>
            <li>
              <strong>Analytics cookies</strong> — Help us understand how users interact with the
              site so we can improve content and usability.
            </li>
            <li>
              <strong>Advertising cookies</strong> — Used to display ads and measure their
              performance.
            </li>
            <li>
              <strong>Preference cookies</strong> — Remember basic settings, such as language or
              display preferences.
            </li>
          </ul>
        </section>

        {/* Types of cookies */}
        <section>
          <h2>Types of Cookies We Use</h2>

          <h3>First-Party Cookies</h3>
          <p>
            These cookies are set directly by SteadySpend and are used to support site
            functionality, remember preferences, and understand how the site is used.
          </p>

          <h3>Third-Party Cookies</h3>
          <p>We may use trusted third-party services that set cookies on our behalf, including:</p>

          <ul>
            <li>
              <strong>Google AdSense</strong> — Used to display advertisements. Google may use
              cookies to show ads that are relevant to users.
            </li>
            <li>
              <strong>Mediavine</strong> — If applicable, Mediavine may place cookies to deliver and
              optimize advertising.
            </li>
            <li>
              <strong>Analytics providers</strong> — Used to understand traffic patterns and improve
              site performance.
            </li>
          </ul>
        </section>

        {/* Cookie duration */}
        <section>
          <h2>Cookie Duration</h2>
          <ul>
            <li>
              <strong>Session cookies</strong> — Temporary cookies that are deleted when you close
              your browser.
            </li>
            <li>
              <strong>Persistent cookies</strong> — Stored on your device for a defined period or
              until manually removed.
            </li>
          </ul>
        </section>

        {/* Managing cookies */}
        <section>
          <h2>Managing Cookies</h2>
          <p>
            You can control or disable cookies through your browser settings. Depending on your
            browser, you may be able to:
          </p>

          <ul>
            <li>View stored cookies</li>
            <li>Delete existing cookies</li>
            <li>Block new cookies</li>
            <li>Receive notifications when cookies are set</li>
          </ul>

          <p>
            Please note that disabling cookies may affect how certain parts of the site function.
          </p>

          <h3>Browser Instructions</h3>
          <ul>
            <li>
              <strong>Chrome:</strong> Settings → Privacy & Security → Cookies
            </li>
            <li>
              <strong>Firefox:</strong> Settings → Privacy & Security
            </li>
            <li>
              <strong>Safari:</strong> Preferences → Privacy
            </li>
            <li>
              <strong>Edge:</strong> Settings → Privacy, search, and services
            </li>
          </ul>
        </section>

        {/* Ad opt out */}
        <section>
          <h2>Advertising Preferences</h2>
          <p>You can opt out of personalized advertising through the following resources:</p>

          <ul>
            <li>
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ad Settings
              </a>
            </li>
            <li>
              <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">
                Digital Advertising Alliance
              </a>
            </li>
            <li>
              <a
                href="https://www.networkadvertising.org/choices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Network Advertising Initiative
              </a>
            </li>
          </ul>
        </section>

        {/* Local storage */}
        <section>
          <h2>Local Storage</h2>
          <p>
            SteadySpend’s budgeting tools use your browser’s localStorage to save inputs directly on
            your device. This allows you to return to your calculations without creating an account.
          </p>
          <p>
            This data never leaves your device and can be cleared at any time through your browser
            settings.
          </p>
        </section>

        {/* DNT */}
        <section>
          <h2>Do Not Track Signals</h2>
          <p>
            Some browsers offer a “Do Not Track” feature. At this time, there is no consistent
            industry standard for responding to these signals, and we do not currently respond to
            them.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy occasionally to reflect changes in technology, legal
            requirements, or site functionality. Updates will be posted on this page.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about this Cookie Policy, please{" "}
            <a
              href="mailto:questions@steadyspend.com"
              className="text-emerald-700 hover:text-emerald-800 underline"
            >
              questions@steadyspend.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

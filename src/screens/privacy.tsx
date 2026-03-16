import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <>
      <nav>
        <div className="nav-logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="grad">Check</span>Vault
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/#features">Features</Link></li>
          <li><Link to="/#how-it-works">How it works</Link></li>
          <li><Link to="/#trust">Privacy</Link></li>
        </ul>
        <div className="nav-cta">
          <Link to="/#waitlist" className="btn btn-primary btn-sm">Join Waitlist</Link>
        </div>
      </nav>

      <div className="legal-container">
        <span className="legal-eyebrow">Legal</span>
        <h1 className="legal-title">Privacy <span className="grad">Policy</span></h1>
        <p className="legal-updated">Last updated: June 24, 2025</p>
        <div className="legal-divider" />

        <div className="legal-body">
          <p>This privacy policy applies to the CheckVault app (hereby referred to as "Application") for mobile devices that was created by Dmitry Sokolouski (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".</p>

          <h2>Information Collection and Use</h2>
          <p>The Application collects information when you download and use it. This information may include:</p>
          <ul>
            <li>Your device's Internet Protocol address (e.g. IP address)</li>
            <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
            <li>The time spent on the Application</li>
            <li>The operating system you use on your mobile device</li>
          </ul>

          <p>The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:</p>
          <ul>
            <li><strong>Geolocation Services:</strong> The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li>
            <li><strong>Analytics and Improvements:</strong> Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li>
            <li><strong>Third-Party Services:</strong> Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</li>
          </ul>

          <p>The Application uses Artificial Intelligence (AI) technologies to enhance user experience and provide certain features. The AI components may process user data to deliver personalized content, recommendations, or automated functionalities. All AI processing is performed in accordance with this privacy policy and applicable laws.</p>

          <p>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</p>

          <p>For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to email. The information that the Service Provider request will be retained by them and used as described in this privacy policy.</p>

          <h2>Third Party Access</h2>
          <p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>

          <p>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p>
          <ul>
            <li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
            <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Google Analytics for Firebase</a></li>
            <li><a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noopener noreferrer">Firebase Crashlytics</a></li>
            <li><a href="https://expo.io/privacy" target="_blank" rel="noopener noreferrer">Expo</a></li>
            <li><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat</a></li>
          </ul>

          <p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
          <ul>
            <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
            <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
            <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
          </ul>

          <h2>Opt-Out Rights</h2>
          <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>

          <h2>Data Retention Policy</h2>
          <p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at <a href="mailto:dmitrysakalouski@gmail.com">dmitrysakalouski@gmail.com</a> and they will respond in a reasonable time.</p>

          <h2>Children</h2>
          <p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13. The Application does not address anyone under the age of 13. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider at <a href="mailto:dmitrysakalouski@gmail.com">dmitrysakalouski@gmail.com</a>.</p>

          <h2>Security</h2>
          <p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>

          <h2>Changes</h2>
          <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
          <p>This privacy policy is effective as of 2028-06-24.</p>

          <h2>Your Consent</h2>
          <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <a href="mailto:dmitrysakalouski@gmail.com">dmitrysakalouski@gmail.com</a>.</p>
        </div>
      </div>

      <footer>
        <div className="footer-logo"><span className="grad">Check</span>Vault</div>
        <ul className="footer-links">
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
        </ul>
        <div className="footer-copy">© 2026 CheckVault. All rights reserved.</div>
      </footer>
    </>
  )
}

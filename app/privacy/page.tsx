import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Warrantly',
  description: 'Privacy Policy for Warrantly - How we collect, use, and protect your data',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 font-medium"
          >
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last Updated: November 22, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <Section title="1. Introduction">
            <p>Welcome to <strong>Warrantly</strong> ("we," "our," "us"). This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our mobile application.</p>
            <p>By using Warrantly, you agree to the collection and use of information in accordance with this policy.</p>
          </Section>

          <Section title="2. Information We Collect">
            <SubSection title="2.1 Information You Provide">
              <ul>
                <li><strong>Account Information:</strong> Email address, name (optional)</li>
                <li><strong>Warranty Data:</strong> Product names, purchase dates, serial numbers, barcodes, receipts</li>
                <li><strong>Claims Data:</strong> Claim descriptions, evidence photos, store information</li>
                <li><strong>Payment Information:</strong> Processed by LemonSqueezy (we do NOT store credit card details)</li>
              </ul>
            </SubSection>

            <SubSection title="2.2 Automatically Collected Information">
              <ul>
                <li><strong>Device Information:</strong> Device model, operating system, app version</li>
                <li><strong>Usage Data:</strong> Features used, AI credits consumed, errors encountered</li>
                <li><strong>Camera/Photos:</strong> Only when you grant permission to scan receipts or upload warranty images</li>
              </ul>
            </SubSection>

            <SubSection title="2.3 Third-Party Services">
              <p>We use the following third-party services that may collect information:</p>
              <ul>
                <li><strong>Supabase:</strong> Database and authentication</li>
                <li><strong>LemonSqueezy:</strong> Payment processing</li>
                <li><strong>OpenAI:</strong> AI-powered receipt OCR and claim writing (anonymized data only)</li>
                <li><strong>Expo:</strong> App distribution and analytics</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use collected information to:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span>Provide and maintain the Warrantly service</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span>Process your warranties, claims, and AI requests</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span>Send expiration reminders and notifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span>Process payments and manage subscriptions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span>Improve our app and develop new features</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span>Respond to customer support requests</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span>Comply with legal obligations</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="font-semibold mb-2">We do NOT:</p>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">❌</span>
                  <span>Sell your personal data to third parties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">❌</span>
                  <span>Use your warranty data for advertising</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">❌</span>
                  <span>Share your receipts or documents without consent</span>
                </li>
              </ul>
            </div>
          </Section>

          <Section title="4. Data Storage and Security">
            <SubSection title="4.1 Where We Store Data">
              <ul>
                <li><strong>Primary Storage:</strong> Supabase (AWS infrastructure, encrypted at rest)</li>
                <li><strong>Images/Documents:</strong> Supabase Storage (secure, private buckets)</li>
                <li><strong>Backups:</strong> Automated daily backups (encrypted)</li>
              </ul>
            </SubSection>

            <SubSection title="4.2 Security Measures">
              <ul>
                <li>🔒 End-to-end encryption for sensitive data</li>
                <li>🔒 Row-Level Security (RLS) policies</li>
                <li>🔒 Secure API authentication (JWT tokens)</li>
                <li>🔒 Regular security audits</li>
              </ul>
            </SubSection>

            <SubSection title="4.3 Data Retention">
              <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
                <ul>
                  <li><strong>Active Accounts:</strong> Data stored as long as your account is active</li>
                  <li><strong>⚠️ IMPORTANT:</strong> We do NOT guarantee data retention beyond <strong>2 years</strong> from upload date</li>
                  <li><strong>Account Deletion:</strong> Data permanently deleted within 30 days of account deletion request</li>
                </ul>
              </div>
            </SubSection>
          </Section>

          <Section title="5. Your Rights">
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Export:</strong> Download your warranties and claims data</li>
              <li><strong>Opt-Out:</strong> Disable notifications and marketing emails</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at: <a href="mailto:support@warrantly.io" className="text-purple-600 hover:underline">support@warrantly.io</a></p>
          </Section>

          <Section title="6. Children's Privacy">
            <p>Warrantly is NOT intended for users under 13 years old. We do not knowingly collect data from children. If you are a parent/guardian and believe your child has provided us with personal information, please contact us.</p>
          </Section>

          <Section title="7. International Data Transfers">
            <p>Your data may be transferred to and processed in countries outside your residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.</p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Changes will be posted in the app with an updated "Last Updated" date. Continued use of the app after changes constitutes acceptance.</p>
          </Section>

          <Section title="9. Contact Us">
            <p>If you have questions about this Privacy Policy, contact us:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:support@warrantly.io" className="text-purple-600 hover:underline">support@warrantly.io</a></li>
              <li><strong>In-App:</strong> Profile → Settings → Contact Support</li>
            </ul>
          </Section>

          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-2xl font-semibold text-purple-600">Your privacy matters to us. 🔒</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="prose prose-purple max-w-none">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-700 space-y-4">{children}</div>
    </div>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </div>
  )
}


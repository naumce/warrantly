import Link from 'next/link'

export const metadata = {
  title: 'Terms and Conditions | Warrantly',
  description: 'Terms and Conditions for Warrantly - Rules, limitations, and user responsibilities',
}

export default function TermsAndConditions() {
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
            Terms and Conditions
          </h1>
          <p className="text-gray-600">Last Updated: November 22, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <Section title="1. Acceptance of Terms">
            <p>By accessing or using <strong>Warrantly</strong> ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree, do NOT use the App.</p>
          </Section>

          <Section title="2. Description of Service">
            <p>Warrantly is a mobile application that helps you:</p>
            <ul>
              <li>Track product warranties and expiration dates</li>
              <li>Store receipts and proof of purchase</li>
              <li>File warranty claims</li>
              <li>Use AI-powered features (OCR, claim writing)</li>
            </ul>
          </Section>

          <Section title="3. User Accounts">
            <SubSection title="3.1 Registration">
              <ul>
                <li>You must provide a valid email address</li>
                <li>You are responsible for maintaining account security</li>
                <li>You must be 13+ years old to use the App</li>
              </ul>
            </SubSection>

            <SubSection title="3.2 Account Termination">
              <ul>
                <li>We reserve the right to suspend/terminate accounts that violate these Terms</li>
                <li>You may delete your account at any time</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="4. Subscription Plans and Payments">
            <SubSection title="4.1 Tiers">
              <ul>
                <li><strong>Free Tier:</strong> 2 warranties, 1 claim, 5 AI credits</li>
                <li><strong>Paid Tiers:</strong> Lifetime access with higher limits (see pricing page)</li>
              </ul>
            </SubSection>

            <SubSection title="4.2 Payments">
              <ul>
                <li>All payments processed via <strong>LemonSqueezy</strong></li>
                <li><strong>Lifetime purchases are ONE-TIME</strong> (no recurring charges)</li>
                <li><strong>No refunds</strong> after purchase, except as required by law</li>
                <li>Prices subject to change with 30 days notice</li>
              </ul>
            </SubSection>

            <SubSection title="4.3 AI Credits">
              <ul>
                <li>AI features consume credits (Receipt OCR, AI Claim Writer)</li>
                <li>Credits do NOT expire</li>
                <li>Additional credits can be purchased separately</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="5. ⚠️ DATA RETENTION AND BACKUP POLICY">
            <div className="p-6 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
              <SubSection title="5.1 Data Storage">
                <ul>
                  <li>We store your warranties, claims, and documents on secure servers</li>
                  <li className="font-bold text-red-600">❗ CRITICAL: We do NOT guarantee data retention beyond 2 YEARS from the upload date</li>
                  <li>Data older than 2 years MAY be archived or deleted without notice</li>
                </ul>
              </SubSection>

              <SubSection title="5.2 User Responsibility">
                <ul>
                  <li className="font-bold">YOU are responsible for backing up your own data</li>
                  <li>Export your warranties regularly (Profile → Export Data)</li>
                  <li>Keep physical copies of important receipts and documents</li>
                </ul>
              </SubSection>

              <SubSection title="5.3 Data Loss">
                <ul>
                  <li>We are NOT liable for any data loss, corruption, or deletion</li>
                  <li>We recommend regular manual backups of critical documents</li>
                </ul>
              </SubSection>
            </div>
          </Section>

          <Section title="6. ⚠️ DISCLAIMER OF WARRANTIES">
            <div className="p-6 bg-red-50 border-2 border-red-400 rounded-lg">
              <SubSection title="6.1 'AS IS' Service">
                <p>The App is provided <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> without warranties of any kind, either express or implied, including but not limited to:</p>
                <ul className="space-y-1">
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>Warranties of merchantability</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>Fitness for a particular purpose</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>Non-infringement</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>Accuracy, reliability, or completeness</span></li>
                </ul>
              </SubSection>

              <SubSection title="6.2 No Guarantee">
                <p>We do NOT guarantee that:</p>
                <ul className="space-y-1">
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>The App will be error-free or uninterrupted</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>Defects will be corrected</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>The App is free from viruses or harmful components</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>AI features will be 100% accurate</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>Data will be available at all times</span></li>
                </ul>
              </SubSection>
            </div>
          </Section>

          <Section title="7. ⚠️ LIMITATION OF LIABILITY">
            <div className="p-6 bg-red-50 border-2 border-red-400 rounded-lg">
              <SubSection title="7.1 What We're NOT Responsible For">
                <p className="font-bold mb-3">WE ARE NOT LIABLE FOR:</p>
                <ul className="space-y-2">
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span><strong>Lost Warranties:</strong> Failure to track expiration dates</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span><strong>Expired Products:</strong> Missing warranty claim deadlines</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span><strong>AI Errors:</strong> Inaccurate OCR results or AI-generated claim text</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span><strong>Data Loss:</strong> Corruption, deletion, or loss of your data</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span><strong>Third-Party Services:</strong> Actions of manufacturers, retailers, or warranty providers</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span><strong>Financial Loss:</strong> Any monetary damages from using (or inability to use) the App</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span><strong>Legal Issues:</strong> Disputes with stores, manufacturers, or warranty providers</span></li>
                  <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span><strong>Service Interruptions:</strong> Downtime, maintenance, or technical issues</span></li>
                </ul>
              </SubSection>

              <SubSection title="7.2 Maximum Liability">
                <p>In no event shall our total liability exceed the amount you paid for the App in the last 12 months (or $50, whichever is less).</p>
              </SubSection>

              <SubSection title="7.3 Indemnification">
                <p>You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from:</p>
                <ul>
                  <li>Your use of the App</li>
                  <li>Violation of these Terms</li>
                  <li>Violation of third-party rights</li>
                </ul>
              </SubSection>
            </div>
          </Section>

          <Section title="8. User Responsibilities">
            <SubSection title="8.1 You Agree To:">
              <ul className="space-y-1">
                <li className="flex items-start"><span className="text-green-600 mr-2">✅</span><span>Provide accurate warranty information</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✅</span><span>Use the App legally and ethically</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✅</span><span>Respect intellectual property rights</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✅</span><span>Not abuse AI features or system limits</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✅</span><span>Back up your own data regularly</span></li>
              </ul>
            </SubSection>

            <SubSection title="8.2 You Agree NOT To:">
              <ul className="space-y-1">
                <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>Share your account credentials</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>Upload illegal, offensive, or harmful content</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>Attempt to hack, reverse-engineer, or exploit the App</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>Use bots, scripts, or automation tools</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">❌</span><span>Resell or redistribute the App</span></li>
              </ul>
            </SubSection>
          </Section>

          <Section title="9. AI-Powered Features">
            <SubSection title="9.1 Receipt OCR">
              <ul>
                <li>AI processes receipt images to extract warranty data</li>
                <li><strong>Accuracy is NOT guaranteed</strong> — always verify extracted information</li>
                <li>Poor image quality may result in errors</li>
              </ul>
            </SubSection>

            <SubSection title="9.2 AI Claim Writer">
              <ul>
                <li>AI generates claim drafts based on warranty details</li>
                <li><strong>Generated text is a SUGGESTION</strong> — you are responsible for final content</li>
                <li>We are NOT liable for claim rejections or legal issues</li>
              </ul>
            </SubSection>

            <SubSection title="9.3 Data Usage">
              <ul>
                <li>Receipt images are sent to OpenAI for processing (anonymized)</li>
                <li>We do NOT store your receipts long-term unless you save them</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="10. Intellectual Property">
            <SubSection title="10.1 Our Rights">
              <ul>
                <li>The App, design, logo, and code are owned by Warrantly</li>
                <li>You may NOT copy, modify, or distribute the App without permission</li>
              </ul>
            </SubSection>

            <SubSection title="10.2 Your Content">
              <ul>
                <li>You retain ownership of warranties, receipts, and claims you upload</li>
                <li>By using the App, you grant us a license to store and process your content</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="11. Termination">
            <SubSection title="11.1 By You">
              <ul>
                <li>Delete your account anytime (Profile → Delete Account)</li>
                <li>Data will be permanently deleted within 30 days</li>
              </ul>
            </SubSection>

            <SubSection title="11.2 By Us">
              <p>We may suspend/terminate your account if you:</p>
              <ul>
                <li>Violate these Terms</li>
                <li>Abuse AI features or system limits</li>
                <li>Engage in fraudulent activity</li>
                <li>Fail to pay for services</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="12. Contact Us">
            <p>Questions about these Terms?</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:support@warrantly.io" className="text-purple-600 hover:underline">support@warrantly.io</a></li>
              <li><strong>In-App:</strong> Profile → Settings → Contact Support</li>
            </ul>
          </Section>

          <Section title="13. Acknowledgment">
            <div className="p-6 bg-purple-50 border-2 border-purple-300 rounded-lg">
              <p className="font-bold mb-3">By using Warrantly, you acknowledge that:</p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-purple-600 mr-2">✅</span><span>You have READ and UNDERSTAND these Terms</span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">✅</span><span>You accept the <strong>2-year data retention policy</strong></span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">✅</span><span>You understand we are NOT responsible for data loss</span></li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">✅</span><span>You agree to back up your own data regularly</span></li>
              </ul>
            </div>
          </Section>

          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-2xl font-semibold text-gray-700">Use Warrantly responsibly. ⚠️</p>
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
    <div className="ml-4 mb-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </div>
  )
}


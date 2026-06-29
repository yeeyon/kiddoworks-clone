export const metadata = {
  title: "Privacy Policy - KiddoWorks",
  description: "Read the KiddoWorks privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Privacy Policy</h1>
      <div className="mt-8 space-y-6 text-slate-700">
        <p>
          Your privacy is important to us. This policy explains what information we collect and how we use it.
        </p>
        <h2 className="text-xl font-bold text-slate-900">Information we collect</h2>
        <p>
          When you use our contact form, we collect the name, email address and message you provide so we can respond to your inquiry. We do not sell or share this information with third parties.
        </p>
        <h2 className="text-xl font-bold text-slate-900">Cookies</h2>
        <p>
          We may use basic cookies to improve your browsing experience. You can disable cookies in your browser settings at any time.
        </p>
        <h2 className="text-xl font-bold text-slate-900">External links</h2>
        <p>
          Our website may contain links to external sites. We are not responsible for the content or privacy practices of those sites.
        </p>
        <h2 className="text-xl font-bold text-slate-900">Changes</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on this page.
        </p>
        <p>
          If you have any questions, please contact us through the contact page.
        </p>
      </div>
    </div>
  );
}

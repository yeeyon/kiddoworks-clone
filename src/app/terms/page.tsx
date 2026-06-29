export const metadata = {
  title: "Terms and Conditions - KiddoWorks",
  description: "Read the KiddoWorks terms and conditions.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Terms and Conditions</h1>
      <div className="mt-8 space-y-6 text-slate-700">
        <p>
          By using KiddoWorks, you agree to these terms and conditions. Please read them carefully.
        </p>
        <h2 className="text-xl font-bold text-slate-900">Use of content</h2>
        <p>
          All worksheets and resources on this site are provided for personal and educational use. You may print and use them in classrooms or at home. You may not resell, redistribute or republish them without permission.
        </p>
        <h2 className="text-xl font-bold text-slate-900">User conduct</h2>
        <p>
          Users agree to use the site in a lawful manner and not to upload harmful content or attempt to disrupt the service.
        </p>
        <h2 className="text-xl font-bold text-slate-900">Disclaimer</h2>
        <p>
          We do our best to ensure accuracy, but we are not responsible for any errors in the content. Worksheets are supplementary materials and should be used alongside proper instruction.
        </p>
        <h2 className="text-xl font-bold text-slate-900">Changes to terms</h2>
        <p>
          We may update these terms at any time. Continued use of the site means you accept the updated terms.
        </p>
      </div>
    </div>
  );
}

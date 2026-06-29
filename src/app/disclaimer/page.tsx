export const metadata = {
  title: "Disclaimer - KiddoWorks",
  description: "KiddoWorks disclaimer.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Disclaimer</h1>
      <div className="mt-8 space-y-6 text-slate-700">
        <p>
          The information and materials on KiddoWorks are provided for general educational purposes only.
        </p>
        <p>
          While we make every effort to keep the content accurate and up to date, we make no warranties of any kind about the completeness, reliability or suitability of the information.
        </p>
        <p>
          Any reliance you place on the materials is strictly at your own risk. KiddoWorks will not be liable for any loss or damage arising from your use of this website.
        </p>
        <p>
          External links are provided for convenience and do not signify endorsement of the linked site or its content.
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "About Us - KiddoWorks",
  description: "Learn more about KiddoWorks and our mission to make learning fun.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">About KiddoWorks</h1>
      <div className="mt-8 space-y-6 text-slate-700">
        <p>
          KiddoWorks is a free educational resource built for teachers, parents and caregivers who want to give children a head start in reading, writing, math and creativity.
        </p>
        <p>
          We believe that learning happens best when it feels like play. That is why every worksheet in our library is designed with bright themes, friendly characters and clear instructions that kids can follow on their own or with a grown-up.
        </p>
        <h2 className="text-xl font-bold text-slate-900">Our mission</h2>
        <p>
          To make high-quality early-learning resources accessible to every family and classroom, without paywalls or complicated sign-ups. Just find a worksheet, print it and start learning.
        </p>
        <h2 className="text-xl font-bold text-slate-900">What you will find</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Letter tracing and alphabet practice</li>
          <li>Numbers, counting and basic operations</li>
          <li>Coloring pages, mazes and dot-to-dot puzzles</li>
          <li>Word searches, crosswords and vocabulary builders</li>
          <li>Matching, spot-the-difference and general-knowledge sheets</li>
        </ul>
        <p>
          Thank you for visiting. We hope KiddoWorks makes teaching and learning a little brighter.
        </p>
      </div>
      <div className="mt-10 text-center">
        <Link href="/contact" className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

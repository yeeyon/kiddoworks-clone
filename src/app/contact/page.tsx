import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact Us - SproutWorks",
  description: "Get in touch with the SproutWorks team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Contact Us</h1>
        <p className="mt-3 text-lg text-slate-600">Have a question, suggestion or just want to say hello? We&apos;d love to hear from you.</p>
      </div>
      <ContactForm />
    </div>
  );
}

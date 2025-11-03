import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const email = 'you@example.com';

  return (
    <div className="relative">
      {/* subtle gradient */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-indigo-500/10 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Let’s build something great</h2>
        <p className="mt-3 text-neutral-400 text-center">
          Have an idea or opportunity? I’d love to hear from you.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={`mailto:${email}`}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 hover:bg-neutral-900/40 transition"
          >
            <Mail className="h-6 w-6" />
            <p className="mt-3 font-medium">Email</p>
            <p className="text-sm text-neutral-400 group-hover:text-neutral-300">{email}</p>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 hover:bg-neutral-900/40 transition"
          >
            <Github className="h-6 w-6" />
            <p className="mt-3 font-medium">GitHub</p>
            <p className="text-sm text-neutral-400 group-hover:text-neutral-300">@yourhandle</p>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 hover:bg-neutral-900/40 transition"
          >
            <Linkedin className="h-6 w-6" />
            <p className="mt-3 font-medium">LinkedIn</p>
            <p className="text-sm text-neutral-400 group-hover:text-neutral-300">/in/yourname</p>
          </a>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`);
            const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`);
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
          }}
          className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-neutral-300">Name</label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-neutral-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="jane@company.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm text-neutral-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-semibold text-neutral-900 hover:shadow transition shadow-white/10"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

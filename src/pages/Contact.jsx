import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import SendButton from "../components/SendButton";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons";
import RevealSection from "../components/RevealSection";
import Button from "../components/Button";
import { profile } from "../data/profile";

const inputClass =
  "w-full px-4 py-3 rounded-xl border bg-transparent outline-none text-sm transition-colors focus:border-[var(--accent)]";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      await emailjs.send(
        "service_6uovo55",
        "template_8yvo0os",
        {
          name: form.name,
          email: form.email,
          message: form.message,
           timestamp: new Date().toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short",
        }),
        },
        {
          publicKey: "u7o8kMJunN5RVdIvk",
        }
      );

      setStatus("sent");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 pt-16 pb-12 text-center scroll-mt-24">
      <RevealSection>
        <p className="font-mono-ui text-sm mb-4" style={{ color: "var(--accent)" }}>
          /contact
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Let's build something.
        </h1>
        <p className="text-[var(--text-secondary)] mb-12">
          Have a role, project, or idea in mind? Send a message.
        </p>
      </RevealSection>

      <RevealSection
        delay={0.1}
        className="rounded-2xl border p-8 text-left mb-10"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
      >
        {status === "sent" ? (
          <p className="text-center py-10 font-mono-ui" style={{ color: "var(--accent)" }}>
            Message received. I'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-mono-ui text-xs mb-2 text-[var(--text-secondary)]">
                  NAME
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                  style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
                />
              </div>
              <div>
                <label className="block font-mono-ui text-xs mb-2 text-[var(--text-secondary)]">
                  EMAIL
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                  style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
                />
              </div>
            </div>
            <div>
              <label className="block font-mono-ui text-xs mb-2 text-[var(--text-secondary)]">
                MESSAGE
              </label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="What are you looking to build?"
                className={inputClass}
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              />
            </div>
            <SendButton status={status} />
            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Failed to send message. Please try again.
              </p>
            )}

          </form>
        )}
      </RevealSection>

      <RevealSection delay={0.15} className="flex flex-wrap justify-center gap-3 px-4">
        <Button as="a" href={profile.github} variant="outline" icon={GithubIcon}>
          GitHub
        </Button>
        <Button as="a" href={profile.linkedin} variant="outline" icon={LinkedinIcon}>
          LinkedIn
        </Button>
        <Button as="a" href={`mailto:${profile.email}`} variant="outline" icon={Mail}>
          Email
        </Button>
      </RevealSection>
    </section>
  );
}

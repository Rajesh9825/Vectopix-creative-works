import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const ref = useRef(null);
  const form = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="section-padding bg-gradient-blue relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">


      <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
  className="text-center mb-10"
>
  <span className="text-sm font-semibold text-primary uppercase tracking-widest">
    Get In Touch
  </span>

  <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
    Let's Work Together
  </h2>

  <p className="mt-4 text-white/80 max-w-xl mx-auto">
    Have a project in mind? We'd love to hear about it. Send us a message and we will get back to you soon.
  </p>
</motion.div>


        <motion.form
  ref={form}
  onSubmit={handleSubmit}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg"
>

  {/* Name + Email */}
  <div className="grid md:grid-cols-2 gap-4 mb-4">

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      value={formData.name}
      onChange={(e) =>
        setFormData({ ...formData, name: e.target.value })
      }
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
    />

  </div>

  {/* Subject */}
  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
    value={formData.subject}
    onChange={(e) =>
      setFormData({ ...formData, subject: e.target.value })
    }
    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary mb-4"
  />

  {/* Message */}
  <textarea
    name="message"
    placeholder="Your Message"
    rows={5}
    required
    value={formData.message}
    onChange={(e) =>
      setFormData({ ...formData, message: e.target.value })
    }
    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary resize-none mb-6"
  />

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition"
  >
    Send Message
    <Send className="w-4 h-4" />
  </button>

</motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
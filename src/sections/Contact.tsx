"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 bg-[#0a0f1a] text-white scroll-mt-24"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center px-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins mb-6 tracking-tight text-blue-400">
          Contact Me
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-12 font-inter">
          Interested in collaborating or discussing opportunities? Let’s get in touch — I’d love to hear from you!
        </p>
      </motion.div>

      <div className="max-w-xl mx-auto px-2 sm:px-0">
        <motion.form
          action="https://formsubmit.co/your-email"
          method="POST"
          className="w-full space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-5 py-4 bg-[#1f2937] text-white rounded-xl border border-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:scale-[1.01] transition-all duration-300 font-inter shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-4 bg-[#1f2937] text-white rounded-xl border border-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:scale-[1.01] transition-all duration-300 font-inter shadow-sm"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-5 py-4 bg-[#1f2937] text-white rounded-xl border border-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:scale-[1.01] transition-all duration-300 font-inter shadow-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:from-blue-700 hover:to-indigo-700 font-poppins text-sm sm:text-base focus:ring-4 focus:ring-blue-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

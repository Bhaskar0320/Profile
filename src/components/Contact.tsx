import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   const serviceID = "service_51mn5jp";
  //   const templateID = "template_1dxc2pj";
  //   const publicKey = "1UMpvyZwJvMaeyd8Z";

  //   emailjs
  //   .send(serviceID, templateID, formData, publicKey)
  //   .then((response) => {
  //     setIsSubmitting(false);
  //     setSubmitMessage({
  //       type: "success",
  //       text: "Your message has been sent successfully!",
  //     });
  //     setFormData({ name: "", email: "", subject: "", message: "" });

  //     setTimeout(() => {
  //       setSubmitMessage(null);
  //     }, 5000);
  //   })
  //   .catch((error) => {
  //     setIsSubmitting(false);
  //     setSubmitMessage({
  //       type: "error",
  //       text: "Failed to send the message. Please try again later.",
  //     });
  //   });

  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setSubmitMessage({
  //       type: "success",
  //       text: "Your message has been sent successfully! I will get back to you soon.",
  //     });

  //     // Reset form
  //     setFormData({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });

  //     // Clear success message after 5 seconds
  //     setTimeout(() => {
  //       setSubmitMessage(null);
  //     }, 5000);
  //   }, 1500);
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   const serviceID = "service_51mn5jp";
  //   const templateID = "template_1dxc2pj";
  //   const publicKey = "1UMpvyZwJvMaeyd8Z";

  //   try {
  //     const response = await emailjs.send(
  //       serviceID,
  //       templateID,
  //       {
  //         name: formData.name,
  //         email: formData.email,
  //         subject: formData.subject,
  //         message: formData.message,
  //       },
  //       publicKey
  //     );

  //     if (response.status === 200) {
  //       setSubmitMessage({
  //         type: "success",
  //         text: "Your message has been sent successfully!",
  //       });

  //       // Reset form
  //       setFormData({
  //         name: "",
  //         email: "",
  //         subject: "",
  //         message: "",
  //       });
  //     }
  //   } catch (error) {
  //     setSubmitMessage({
  //       type: "error",
  //       text: "Failed to send message. Please try again later.",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //     setTimeout(() => setSubmitMessage(null), 5000);
  //   }

  //   console.log("Sending email with data:", {
  //     from_name: formData.name,
  //     from_email: formData.email,
  //     subject: formData.subject,
  //     message: formData.message,
  //   });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_51mn5jp";
    const templateID = "template_1dxc2pj";
    const publicKey = "1UMpvyZwJvMaeyd8Z";

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          to_name: "Your Name", // Replace with the recipient's name
          from_name: formData.name, // Sender's name
          from_email: formData.email, // Sender's email
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      if (response.status === 200) {
        setSubmitMessage({
          type: "success",
          text: "Your message has been sent successfully!",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Email</h4>
                  <a
                    href="mailto:contact@example.com"
                    className="text-indigo-600 hover:underline"
                  >
                    bhaskaraman55@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-indigo-600 hover:underline"
                  >
                    +91 9369094498
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    Location
                  </h4>
                  <p className="text-gray-600">Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Bhaskar0320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/bhaskaraman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/bhaskaraman_20_03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                >
                  {/* <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg> */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="yourid@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </span>
                )}
              </button>

              {submitMessage && (
                <div
                  className={`mt-4 p-3 rounded-md ${
                    submitMessage.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

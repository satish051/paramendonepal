"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [inquiryType, setInquiryType] = useState("Request a Quote");
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const inquiryParam = searchParams.get("inquiry");
    const messageParam = searchParams.get("message");

    if (inquiryParam) setInquiryType(inquiryParam);
    if (messageParam) setMessage(messageParam);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          inquiryType,
          message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200">
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p>Your quote request has been received. Our team will contact you shortly.</p>
        <button 
          onClick={() => setStatus("idle")} 
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {status === "error" && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm border border-red-200">
          Something went wrong. Please try again.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">First name</label>
          <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="first-name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-leaf)] focus:border-transparent outline-none transition-shadow" placeholder="Jane" />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="last-name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-leaf)] focus:border-transparent outline-none transition-shadow" placeholder="Doe" />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-leaf)] focus:border-transparent outline-none transition-shadow" placeholder="jane@example.com" />
      </div>

      <div>
        <label htmlFor="inquiry-type" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
        <select 
          id="inquiry-type" 
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-leaf)] focus:border-transparent outline-none transition-shadow bg-white"
        >
          <option>Request a Quote</option>
          <option>Request a Sample</option>
          <option>Partnership Inquiry</option>
          <option>General Question</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea 
          required
          id="message" 
          rows={6} 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-leaf)] focus:border-transparent outline-none transition-shadow resize-none" 
          placeholder="How can we help you?"
        />
      </div>
      
      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="w-full bg-[var(--color-forest)] text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all disabled:opacity-70 flex justify-center"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

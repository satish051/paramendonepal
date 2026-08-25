import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Paramendo Nepal",
  description: "Get in touch with Paramendo Nepal for product quotes, samples, or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-white py-16 sm:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-[var(--color-forest)] tracking-tight sm:text-5xl mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            Interested in our upcycled products, want to request a sample, or looking to partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="bg-[var(--color-forest)] text-[var(--color-offwhite)] rounded-3xl p-10 lg:p-14">
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[var(--color-leaf)] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Community Recycling Center</h3>
                  <p className="text-[var(--color-offwhite)]/80">Ree, Dhading<br />Bagmati Province, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[var(--color-leaf)] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:info@paramendonepal.org" className="text-[var(--color-offwhite)]/80 hover:text-white transition-colors">
                    info@paramendonepal.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[var(--color-leaf)] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <a href="tel:+977000000000" className="text-[var(--color-offwhite)]/80 hover:text-white transition-colors">
                    +977 0000000000
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Stub */}
          <div className="bg-[var(--color-offwhite)] rounded-3xl p-10 lg:p-14 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[var(--color-forest)] mb-8">Send us a Message</h2>
            
            <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-xl"></div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

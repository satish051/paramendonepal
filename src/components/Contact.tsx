import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact">
      {/* Collaborate Banner */}
      <div className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Collaborate
          </h2>
          <p className="mt-4 text-xl text-green-100 max-w-2xl mx-auto">
            Be a change to climate change issues. Together we can work on tackling the most pressing issue of our time.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Contact us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900">
              Get in Touch
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Got questions or ready to collaborate? We’re all ears! Reach out to us today to discuss your ideas, schedule a consultation, or simply say hello. We can’t wait to hear from you!
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-full mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
              <a href="mailto:contact@paramendonepal.com" className="block text-green-600 hover:underline">contact@paramendonepal.com</a>
              <a href="mailto:paramendonepal@gmail.com" className="block text-green-600 hover:underline mt-1">paramendonepal@gmail.com</a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-full mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-600">
                Pulchowk, Lalitpur, Nepal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

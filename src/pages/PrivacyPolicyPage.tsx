import { Shield } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white pt-32 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <Shield className="text-black mx-auto mb-6 w-12 h-12" />
        <h1 className="font-heading text-5xl md:text-7xl tracking-wider text-black uppercase">
          Privacy Policy
        </h1>
        <div className="w-12 h-0.5 bg-red mt-4 mb-6 mx-auto" />
        <p className="font-body text-lg text-black/60">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
      </section>

      <div className="max-w-3xl mx-auto py-16 px-6 text-black/70 font-body text-base leading-relaxed">
        <div className="prose prose-lg max-w-none">
          <h2 className="font-heading text-2xl tracking-wider text-black mt-12 mb-4 uppercase">1. Introduction</h2>
          <p>
            Welcome to Paramendo Nepal ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at info@paramendonepal.com.
          </p>

          <h2 className="font-heading text-2xl tracking-wider text-black mt-12 mb-4 uppercase">2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Personal Information Provided by You:</strong> We collect names; phone numbers; email addresses; mailing addresses; and other similar information.</li>
          </ul>

          <h2 className="font-heading text-2xl tracking-wider text-black mt-12 mb-4 uppercase">3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>To send administrative information to you.</li>
            <li>To fulfill and manage your requests.</li>
            <li>To respond to user inquiries/offer support to users.</li>
          </ul>

          <h2 className="font-heading text-2xl tracking-wider text-black mt-12 mb-4 uppercase">4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>

          <h2 className="font-heading text-2xl tracking-wider text-black mt-12 mb-4 uppercase">5. How Long Do We Keep Your Information?</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
          </p>

          <h2 className="font-heading text-2xl tracking-wider text-black mt-12 mb-4 uppercase">6. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email us at info@paramendonepal.com or by post to:
          </p>
          <p className="mt-4">
            <strong>Paramendo Nepal</strong><br />
            Ree, Dhading<br />
            Bagmati Province, Nepal
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

import { Shield } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-20 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Paramendo Nepal ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at info@paramendonepal.com.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
            </p>
            <ul>
              <li><strong>Personal Information Provided by You:</strong> We collect names; phone numbers; email addresses; mailing addresses; and other similar information.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            <ul>
              <li>To send administrative information to you.</li>
              <li>To fulfill and manage your requests.</li>
              <li>To respond to user inquiries/offer support to users.</li>
            </ul>

            <h2>4. Will Your Information Be Shared With Anyone?</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
            </p>

            <h2>5. How Long Do We Keep Your Information?</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have questions or comments about this notice, you may email us at info@paramendonepal.com or by post to:
            </p>
            <p>
              <strong>Paramendo Nepal</strong><br />
              Ree, Dhading<br />
              Bagmati Province, Nepal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

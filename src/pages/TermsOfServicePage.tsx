import { FileText } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white pt-32 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <FileText className="text-black mx-auto mb-6 w-12 h-12" />
        <h1 className="font-heading text-5xl md:text-7xl tracking-wider text-black uppercase">
          Terms of Service
        </h1>
        <div className="w-12 h-0.5 bg-red mt-4 mb-6 mx-auto" />
        <p className="font-body text-lg text-black/60">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
      </section>

      <div className="max-w-3xl mx-auto py-16 px-6 text-black/70 font-body text-base leading-relaxed">
        <div className="prose prose-lg max-w-none">
          <h2 className="font-heading text-2xl tracking-wider text-black mt-12 mb-4 uppercase">1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Paramendo Nepal ("Company", "we", "us", or "our"), concerning your access to and use of the paramendonepal.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
          </p>
          <p className="mt-4">
            You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>

          <h2 className="font-heading text-2xl tracking-wider text-black mt-12 mb-4 uppercase">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>

          <h2 className="font-heading text-2xl tracking-wider text-black mt-12 mb-4 uppercase">3. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that: 
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
          </ul>

          <h2 className="font-heading text-2xl tracking-wider text-black mt-12 mb-4 uppercase">4. Prohibited Activities</h2>
          <p>
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>

          <h2 className="font-heading text-2xl tracking-wider text-black mt-12 mb-4 uppercase">5. Modifications and Interruptions</h2>
          <p>
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
          </p>

          <h2 className="font-heading text-2xl tracking-wider text-black mt-12 mb-4 uppercase">6. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
          </p>
          <p className="mt-4">
            <strong>Paramendo Nepal</strong><br />
            Ree, Dhading<br />
            Bagmati Province, Nepal<br />
            info@paramendonepal.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;

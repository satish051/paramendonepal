import ESGCertificate from "@/components/ESGCertificate";

export const metadata = {
  title: "ESG Certificate Generator | Paramendo Nepal",
};

export default function CertificatePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-24">
      <ESGCertificate />
    </div>
  );
}

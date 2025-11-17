import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-white/90">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">1. Services</h2>
              <p className="text-muted-foreground mb-6">
                Joy Travel Services provides digital marketing, website development, CRM solutions, and related services 
                exclusively to travel agencies and travel-related businesses. We do not provide flight booking, ticket 
                reservation, or any direct-to-consumer travel services.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Service Agreement</h2>
              <p className="text-muted-foreground mb-6">
                By engaging our services, you agree to the terms outlined in your specific service agreement. All projects 
                require a signed contract and agreed-upon scope of work before commencement.
              </p>

              <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
              <p className="text-muted-foreground mb-6">
                Payment terms are specified in individual service agreements. Generally, we require:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Initial deposit before project commencement</li>
                <li>Milestone payments as outlined in the agreement</li>
                <li>Final payment upon project completion</li>
                <li>Monthly retainer for ongoing services</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground mb-6">
                Upon full payment, clients receive ownership of custom-developed materials created specifically for their 
                project. Joy Travel Services retains rights to reuse general methodologies, techniques, and non-custom elements.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Client Responsibilities</h2>
              <p className="text-muted-foreground mb-6">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Providing accurate information and materials</li>
                <li>Timely feedback and approvals</li>
                <li>Access to necessary systems and platforms</li>
                <li>Compliance with applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">6. Warranties and Disclaimers</h2>
              <p className="text-muted-foreground mb-6">
                We provide services with professional care and expertise. However, we cannot guarantee specific results, 
                rankings, or revenue outcomes. Marketing and SEO results depend on various factors beyond our control.
              </p>

              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-6">
                Joy Travel Services' liability is limited to the amount paid for services. We are not liable for indirect, 
                incidental, or consequential damages arising from our services.
              </p>

              <h2 className="text-2xl font-bold mb-4">8. Confidentiality</h2>
              <p className="text-muted-foreground mb-6">
                We maintain strict confidentiality of client information and business data. We will not disclose confidential 
                information to third parties without written consent.
              </p>

              <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
              <p className="text-muted-foreground mb-6">
                Either party may terminate services with written notice as specified in the service agreement. Termination 
                does not relieve payment obligations for work completed.
              </p>

              <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground mb-6">
                We reserve the right to modify these terms at any time. Clients will be notified of significant changes. 
                Continued use of services constitutes acceptance of modified terms.
              </p>

              <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground mb-6">
                These terms are governed by applicable local laws. Any disputes will be resolved through arbitration or 
                appropriate legal channels.
              </p>

              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these terms, please contact us at:
                <br />
                Email: info@joytravelservices.com
                <br />
                Phone: +1 (234) 567-890
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;

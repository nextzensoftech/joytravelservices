import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-[120px]">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-white/90">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Name, email address, phone number, and company information</li>
                <li>Information provided through contact forms and service inquiries</li>
                <li>Business information related to service delivery</li>
                <li>Payment and billing information</li>
                <li>Communications between you and Joy Travel Services</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to comments, questions, and customer service requests</li>
                <li>Communicate about services, offers, and events</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share your information 
                only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>With vendors and service providers who perform services on our behalf</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights and property</li>
                <li>With your consent or at your direction</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-6">
                We use cookies and similar tracking technologies to collect information about your browsing activities. 
                You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Third-Party Links</h2>
              <p className="text-muted-foreground mb-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of 
                these external sites. We encourage you to read their privacy policies.
              </p>

              <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, 
                unless a longer retention period is required by law.
              </p>

              <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground mb-6">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information 
                from children.
              </p>

              <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
              <p className="text-muted-foreground mb-6">
                Your information may be transferred to and maintained on servers located outside your jurisdiction. We ensure 
                appropriate safeguards are in place for such transfers.
              </p>

              <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-6">
                We may update this privacy policy periodically. We will notify you of significant changes by posting the new 
                policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this privacy policy or our data practices, please contact us at:
                <br />
                Email: info@joytravelservices.com
                <br />
                Phone: +1 (234) 567-890
                <br />
                Address: 123 Business District, Tech City, TC 12345
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Joy Travel Services</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your trusted partner in travel industry digital transformation
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Joy Travel Services is a specialized digital services provider dedicated exclusively to the travel industry. 
                  We understand the unique challenges and opportunities that travel agencies face in today's digital landscape.
                </p>
                <p>
                  With years of experience working with travel businesses of all sizes, we've developed a comprehensive suite 
                  of services designed to help travel agencies establish a strong online presence, streamline their operations, 
                  and grow their customer base.
                </p>
                <p>
                  Our team combines deep expertise in web development, digital marketing, CRM systems, and travel industry 
                  best practices to deliver solutions that drive real results for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower travel agencies with cutting-edge digital tools and marketing strategies that help them 
                    compete and thrive in the modern marketplace. We're committed to delivering personalized, results-driven 
                    solutions that exceed expectations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the leading digital transformation partner for travel agencies worldwide, recognized for our 
                    innovation, expertise, and unwavering commitment to client success. We envision a future where every 
                    travel agency has access to world-class digital tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What sets us apart from other digital service providers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
                  <p className="text-muted-foreground">
                    Specialized knowledge of the travel industry and its unique digital requirements
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Personalized attention and ongoing support to ensure your success
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
                  <p className="text-muted-foreground">
                    Focused on delivering measurable results that impact your bottom line
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Years of Experience */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Years of Proven Experience</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With extensive experience serving travel agencies across various markets, we've helped countless 
                businesses achieve their digital goals. Our portfolio includes successful projects ranging from 
                small boutique agencies to large-scale travel operations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

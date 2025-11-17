import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import aboutOffice from "@/assets/about-office.jpg";
import aboutProcess1 from "@/assets/about-process1.jpg";
import aboutProcess2 from "@/assets/about-process2.jpg";
import aboutProcess3 from "@/assets/about-process3.jpg";
import aboutProcess4 from "@/assets/about-process4.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-[120px]">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
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
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={aboutTeam} 
                    alt="Joy Travel Services Team"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="text-sm font-medium">Our dedicated team of digital experts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Showcase */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Workspace</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A modern, collaborative environment where innovation meets creativity
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutOffice} 
                  alt="Joy Travel Services Office"
                  className="w-full h-auto object-cover"
                />
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

        {/* Our Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our proven process ensures successful delivery of every project
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={aboutProcess1} 
                      alt="Strategy & Planning"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                          1
                        </div>
                        <h3 className="text-xl font-bold text-white">Strategy & Planning</h3>
                      </div>
                      <p className="text-white/90 text-sm">
                        We collaborate with you to understand your goals and create a tailored strategy
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={aboutProcess2} 
                      alt="Development & Design"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                          2
                        </div>
                        <h3 className="text-xl font-bold text-white">Development & Design</h3>
                      </div>
                      <p className="text-white/90 text-sm">
                        Our experts bring your vision to life with cutting-edge technology and design
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={aboutProcess3} 
                      alt="Testing & Launch"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                          3
                        </div>
                        <h3 className="text-xl font-bold text-white">Testing & Launch</h3>
                      </div>
                      <p className="text-white/90 text-sm">
                        Rigorous testing ensures everything works perfectly before your successful launch
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={aboutProcess4} 
                      alt="Support & Growth"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                          4
                        </div>
                        <h3 className="text-xl font-bold text-white">Support & Growth</h3>
                      </div>
                      <p className="text-white/90 text-sm">
                        Ongoing support and optimization to help your business continue to grow
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
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

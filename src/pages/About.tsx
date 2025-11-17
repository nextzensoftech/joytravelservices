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

      <main className="pt-[112px] sm:pt-[120px]">
        {/* Page Header */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About Joy Travel Services</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4">
              Your trusted partner in travel industry digital transformation
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Who We Are</h2>
                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground">
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
              <div className="relative order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={aboutTeam} 
                    alt="Joy Travel Services Team"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-primary text-white p-4 sm:p-6 rounded-lg shadow-xl max-w-[200px] sm:max-w-xs">
                  <p className="text-xs sm:text-sm font-medium">Our dedicated team of digital experts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Showcase */}
        <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Workspace</h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                  A modern, collaborative environment where innovation meets creativity
                </p>
              </div>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
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
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                    <Target className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    To empower travel agencies with cutting-edge digital tools and marketing strategies that help them 
                    compete and thrive in the modern marketplace. We're committed to delivering personalized, results-driven 
                    solutions that exceed expectations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                    <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
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
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Why Choose Us</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                What sets us apart from other digital service providers
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Industry Expertise</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Specialized knowledge of the travel industry and its unique digital requirements
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Users className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Dedicated Support</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Personalized attention and ongoing support to ensure your success
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Target className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Results-Driven</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Focused on delivering measurable results that impact your bottom line
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">How We Work</h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                  Our proven process ensures successful delivery of every project
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={aboutProcess1} 
                      alt="Strategy & Planning"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm sm:text-base">
                          1
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">Strategy & Planning</h3>
                      </div>
                      <p className="text-white/90 text-xs sm:text-sm">
                        We collaborate with you to understand your goals and create a tailored strategy
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={aboutProcess2} 
                      alt="Development & Design"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm sm:text-base">
                          2
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">Development & Design</h3>
                      </div>
                      <p className="text-white/90 text-xs sm:text-sm">
                        Our experts bring your vision to life with cutting-edge technology and design
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={aboutProcess3} 
                      alt="Testing & Launch"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm sm:text-base">
                          3
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">Testing & Launch</h3>
                      </div>
                      <p className="text-white/90 text-xs sm:text-sm">
                        Rigorous testing ensures everything works perfectly before we launch
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={aboutProcess4} 
                      alt="Support & Growth"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm sm:text-base">
                          4
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">Support & Growth</h3>
                      </div>
                      <p className="text-white/90 text-xs sm:text-sm">
                        Ongoing support and optimization to help your business continue to grow
                      </p>
                    </div>
                  </div>
                </Card>
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

import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Feel free to reach out for opportunities, collaboration, or just to
          connect.
        </p>

        <div className="flex justify-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:preethampoojari146@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    preethampoojari146@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary"
                  >
                    +91 9076050054
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Mumbai, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 text-center">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/preethampoojari/"
                  target="_blank"
                >
                  <Linkedin />
                </a>

                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="https://github.com/Preethampoojari" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "support@shopnext.com",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Commerce St, Shopping City, SC 12345",
  },
];

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              Have a question or need assistance? We're here to help! 
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start space-x-4">
                    <Icon className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
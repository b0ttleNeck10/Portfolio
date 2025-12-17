import React from "react";

interface ContactCardProps {
  icon: string;
  title: string;
  link: string;
  href: string;
}

const contactData: ContactCardProps[] = [
  { icon: "📱", title: "Phone", link: "09762055986", href: "tel:09762055986" },
  { icon: "✉️", title: "Email", link: "Dexterlauron2@gmail.com", href: "mailto:Dexterlauron2@gmail.com" },
  { icon: "👤", title: "Facebook", link: "Dexter Lauron", href: "https://facebook.com/dexterlauron" },
];

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p style={{ textAlign: "center", fontSize: "18px", color: "rgba(255,255,255,0.8)", marginBottom: "20px" }}>
        Any questions? Reach out to me so we can talk about it!
      </p>
      <div className="contact-grid">
        {contactData.map((contact) => (
          <div className="contact-card" key={contact.title}>
            <div className="contact-icon">{contact.icon}</div>
            <h3>{contact.title}</h3>
            <a href={contact.href} target={contact.title === "Facebook" ? "_blank" : "_self"}>{contact.link}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;

import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <div className="contact">
        <h1 className="contact-header">SEND A MESSAGE</h1>
        <ContactForm />
      </div>
    </Layout>
  );
}

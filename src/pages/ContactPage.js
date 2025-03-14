import ContactForm from "../components/ContactForm"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ContactPage() {
	return (
		<main className="contact">
		<Header />
		<h1 className="contact-header">SEND A MESSAGE</h1>
		<ContactForm />
		<Footer />
		</main>
	)
}
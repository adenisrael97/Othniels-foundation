function HeroHelp() {
    return (
        <section className="w-full py-12 md:py-20 bg-linear-to-br from-yellow-50 via-orange-50 to-red-50 font-sans">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg tracking-tight">GET HELP</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">We&rsquo;re here to help you</h2>
                <p className="text-lg md:text-xl text-gray-700 mb-6 font-medium">
                    If you need assistance or know someone who does, please fill out the form below. Our team is ready to support you with resources, guidance, and care. Your well-being is our priority.
                </p>
                <div className="bg-orange-100 rounded-xl shadow-md py-6 px-4 mb-6">
                    <span className="block text-lg font-bold text-red-500 mb-2">Emergency Helpline</span>
                    <span className="block text-xl font-semibold text-orange-500">+234 800 123 4567</span>
                    <span className="block text-sm text-gray-600 mt-2">Call this number for urgent support or emergencies.</span>
                </div>
            </div>
        </section>
        );
}

// Assistance Request Form Component
function InfoCards() {
    return (
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 mt-10 mb-12">
            {/* Emergency Contact Card */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-red-500 rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center text-white">
                <FaPhoneAlt className="text-3xl mb-2" />
                <h4 className="text-xl font-bold mb-2">Emergency Contact</h4>
                <span className="block text-lg font-bold bg-white text-red-500 rounded-full px-4 py-2 mb-2">+234 800 123 4567</span>
                <p className="text-sm">Call this number for urgent support or emergencies.</p>
            </div>
            {/* What to Expect Card */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-orange-100 rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center text-orange-700">
                <FaListOl className="text-3xl mb-2 text-orange-500" />
                <h4 className="text-xl font-bold mb-2">What to Expect</h4>
                <ol className="list-decimal list-inside text-sm text-left w-full max-w-xs mx-auto">
                    <li>Quick response from our team</li>
                    <li>Confidential and respectful support</li>
                    <li>Guidance to the right resources</li>
                    <li>Follow-up for your well-being</li>
                </ol>
            </div>
            {/* Our Promises Card */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-green-500 rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center text-white">
                <FaHeart className="text-3xl mb-2" />
                <h4 className="text-xl font-bold mb-2">Our Promises</h4>
                <ul className="list-disc list-inside text-sm text-left w-full max-w-xs mx-auto">
                    <li>Compassionate care</li>
                    <li>Respect for your privacy</li>
                    <li>Timely assistance</li>
                    <li>Continuous support</li>
                </ul>
            </div>
            {/* Image Card */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center">
                <Image
                    src="/images/photo12.jpg"
                    alt="Support"
                    width={612}
                    height={160}
					className="rounded-xl w-full object-cover mb-2"
					style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
                <h4 className="text-xl font-bold text-orange-500 mb-2">Support & Care</h4>
                <p className="text-sm text-gray-700">Othniel Foundation is always here for you and your loved ones.</p>
            </div>
        </div>
    );
}

// Assistance Request Form Component
function AssistanceForm() {
    return (
        <div className="max-w-md w-full mx-auto px-4 py-8 bg-white rounded-xl shadow-lg mt-8 mb-12">
            <h3 className="text-2xl font-bold text-orange-500 mb-4 text-center">Request Assistance</h3>
            <form
                action="https://formspree.io/f/maqpdagp"
                method="POST"
                className="space-y-4"
            >
                <label className="block text-sm font-medium text-gray-700">
                    Full Name:
                    <input type="text" name="name" className="mt-1 w-full rounded-md border border-orange-300 px-3 py-2 focus:border-orange-500 focus:ring-orange-500" required />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                    Phone Number:
                    <input type="tel" name="phone" className="mt-1 w-full rounded-md border border-orange-300 px-3 py-2 focus:border-orange-500 focus:ring-orange-500" required />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                    Location:
                    <input type="text" name="location" className="mt-1 w-full rounded-md border border-orange-300 px-3 py-2 focus:border-orange-500 focus:ring-orange-500" required />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                    Urgency:
                    <select name="urgency" className="mt-1 w-full rounded-md border border-orange-300 px-3 py-2 focus:border-orange-500 focus:ring-orange-500" required>
                        <option value="">Select urgency</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="emergency">Emergency</option>
                    </select>
                </label>
                <label className="block text-sm font-medium text-gray-700">
                    Your email:
                    <input type="email" name="email" className="mt-1 w-full rounded-md border border-orange-300 px-3 py-2 focus:border-orange-500 focus:ring-orange-500" required />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                    Your message:
                    <textarea name="message" className="mt-1 w-full rounded-md border border-orange-300 px-3 py-2 focus:border-orange-500 focus:ring-orange-500" required />
                </label>
                <button type="submit" className="w-full rounded-md bg-orange-500 px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 mt-2">Send</button>
            </form>
        </div>
    );
}

// Emergency, Expect, Promise, Image Cards Section
import { FaPhoneAlt, FaCheckCircle, FaListOl, FaHeart } from "react-icons/fa";
import Image from "next/image";

// Export with AssistanceForm and InfoCards
function HeroHelpWithForm() {
    return (
        <>
            <HeroHelp />
            <AssistanceForm />
            <InfoCards />
        </>
    );
}

export default HeroHelpWithForm;


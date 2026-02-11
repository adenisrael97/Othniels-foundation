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
                    src="/images/istockphoto-640305394-612x612.jpg"
                    alt="Support"
                    width={612}
                    height={160}
                    className="rounded-xl w-full h-40 object-cover mb-2"
                    style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                />
                <h4 className="text-xl font-bold text-orange-500 mb-2">Support & Care</h4>
                <p className="text-sm text-gray-700">Adeniran Foundation is always here for you and your loved ones.</p>
            </div>
        </div>
    );
}

// Assistance Request Form Component
function AssistanceForm() {
    return (
        <div className="max-w-md w-full mx-auto px-4 py-8 bg-white rounded-xl shadow-lg mt-8 mb-12">
            <h3 className="text-2xl font-bold text-orange-500 mb-4 text-center">Request Assistance</h3>
            <form className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-orange-300 focus:border-orange-400" placeholder="Enter your full name" />
                </div>
                {/* Location */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                    <input type="text" className="w-full rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-orange-300 focus:border-orange-400" placeholder="Enter your location" />
                </div>
                {/* Phone Number */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-orange-300 focus:border-orange-400" placeholder="Enter your phone number" />
                </div>
                {/* Sex */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Sex</label>
                    <select className="w-full rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-orange-300 focus:border-orange-400">
                        <option value="">Select sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                {/* Urgency */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">How Urgent is the Need?</label>
                    <select className="w-full rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-orange-300 focus:border-orange-400">
                        <option value="">Select urgency</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="emergency">Emergency</option>
                    </select>
                </div>
                {/* Situation Description */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tell Us About the Situation</label>
                    <textarea className="w-full rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-orange-300 focus:border-orange-400 min-h-30" placeholder="Describe the situation in detail"></textarea>
                </div>
                {/* Submit Button */}
                <div className="text-center">
                    <button type="submit" className="bg-linear-to-r from-orange-500 via-yellow-400 to-red-500 hover:from-yellow-400 hover:to-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all text-base tracking-wide border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2">
                        Submit Request
                    </button>
                </div>
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


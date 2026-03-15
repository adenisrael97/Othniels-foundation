import Link from "next/link";
import { FaHandHoldingHeart, FaUserFriends, FaHandshake } from "react-icons/fa";

const helpOptions = [
    {
        title: "Donate",
        icon: <FaHandHoldingHeart className="text-red-500 text-3xl mb-2" />,
        content: "Your donation fuels our mission and helps us reach more lives. Every contribution counts!",
        button: "Donate Now",
        link: "/contact",
    },
    {
        title: "Volunteer",
        icon: <FaUserFriends className="text-orange-500 text-3xl mb-2" />,
        content: "Join our team of passionate volunteers and make a direct impact in your community.",
        button: "Become a Volunteer",
        link: "/contact",
    },
    {
        title: "Partner",
        icon: <FaHandshake className="text-yellow-500 text-3xl mb-2" />,
        content: "Collaborate with us to expand our reach and create sustainable change together.",
        button: "Partner With Us",
        link: "/contact",
    },
];

export default function HelpPrograms() {
    return (
        <section className="w-full py-10 md:py-16 bg-linear-to-br from-yellow-50 via-orange-50 to-red-50 font-sans">
            <div className="max-w-4xl mx-auto px-4">
                {/* Section Intro */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-2 tracking-tight">GET INVOLVED</h2>
                    <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-2 mt-6">How You Can Help</h3>
                    <p className="text-base md:text-lg text-gray-600 mb-8 font-normal">
                        There are many ways to support Othniel Foundation. Whether you donate, volunteer, or partner with us, your involvement makes a difference.
                    </p>
                </div>

                {/* Help Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {helpOptions.map((option, idx) => (
                        <div key={option.title} className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 border-t-4 border-orange-200">
                            {option.icon}
                            <h4 className="text-xl font-bold text-orange-500 mb-2">{option.title}</h4>
                            <p className="text-gray-700 text-sm mb-4 text-center">{option.content}</p>
                            <Link
                                href={option.link}
                                className="mt-auto bg-linear-to-r from-orange-500 via-yellow-400 to-red-500 hover:from-yellow-400 hover:to-orange-500 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all text-base tracking-wide border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                            >
                                {option.button}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
                {/* Need Help Section */}
                <div className="w-full bg-orange-100 rounded-2xl shadow-lg mt-12 py-8 px-6 flex flex-col items-center text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-2">Need Help?</h3>
                    <p className="text-base md:text-lg text-gray-700 mb-4 font-medium max-w-xl">
                        If you or someone you know needs support, Othniel Foundation is here to help. Reach out for assistance and let us guide you to the resources and programs you need.
                    </p>
                    <Link
                        href="/gethelp"
                        className="bg-linear-to-r from-orange-500 via-yellow-400 to-red-500 hover:from-yellow-400 hover:to-orange-500 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all text-base tracking-wide border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                    >
                        Request Assistance
                    </Link>
                </div>
            </section>
    );
}


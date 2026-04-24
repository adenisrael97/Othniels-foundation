import { FaHandHoldingHeart, FaUserFriends, FaHandshake } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { HelpCard } from "@/components/ui/Card";

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
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-2 tracking-tight">
            GET INVOLVED
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-2 mt-6">
            How You Can Help
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-8 font-normal">
            There are many ways to support Othniel Foundation. Whether you donate,
            volunteer, or partner with us, your involvement makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {helpOptions.map((option) => (
            <HelpCard
              key={option.title}
              icon={option.icon}
              title={option.title}
              description={option.content}
            >
              <Button variant="primary" size="md" href={option.link} className="mt-auto">
                {option.button}
              </Button>
            </HelpCard>
          ))}
        </div>
      </div>

      <div className="w-full bg-orange-100 rounded-2xl shadow-lg mt-12 py-8 px-6 flex flex-col items-center text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-2">Need Help?</h3>
        <p className="text-base md:text-lg text-gray-700 mb-4 font-medium max-w-xl">
          If you or someone you know needs support, Othniel Foundation is here to
          help. Reach out for assistance and let us guide you to the resources and
          programs you need.
        </p>
        <Button variant="primary" href="/gethelp">
          Request Assistance
        </Button>
      </div>
    </section>
  );
}

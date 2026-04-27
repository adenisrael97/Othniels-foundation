import { FaHandHoldingHeart, FaUserFriends, FaHandshake } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { HelpCard } from "@/components/ui/Card";

const helpOptions = [
  {
    title: "Donate",
    icon: <FaHandHoldingHeart />,
    content: "Your donation fuels our mission and helps us reach more lives. Every contribution, large or small, counts.",
    button: "Donate Now",
    link: "/contact",
  },
  {
    title: "Volunteer",
    icon: <FaUserFriends />,
    content: "Join our team of passionate volunteers and make a direct impact in communities that need you most.",
    button: "Become a Volunteer",
    link: "/contact",
  },
  {
    title: "Partner",
    icon: <FaHandshake />,
    content: "Collaborate with us to expand our reach and create sustainable, lasting change together.",
    button: "Partner With Us",
    link: "/contact",
  },
];

export default function HelpPrograms() {
  return (
    <section className="w-full bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="eyebrow">Get Involved</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            How You Can Help
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-md mx-auto leading-relaxed">
            Whether you donate, volunteer, or partner with us — your
            involvement makes a meaningful difference.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {helpOptions.map((option) => (
            <HelpCard
              key={option.title}
              icon={option.icon}
              title={option.title}
              description={option.content}
            >
              <Button variant="primary" size="sm" href={option.link}>
                {option.button}
              </Button>
            </HelpCard>
          ))}
        </div>

        {/* Need Help CTA */}
        <div className="mt-10 bg-white rounded-xl border border-gray-100 shadow-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-base font-semibold text-gray-900">Need Support?</p>
            <p className="text-sm text-gray-500 mt-1 max-w-md leading-relaxed">
              If you or someone you know needs assistance, Othniel Foundation
              is here to help. Reach out and we&apos;ll guide you to the right
              resources.
            </p>
          </div>
          <Button variant="brand" href="/gethelp" size="md" className="shrink-0">
            Request Assistance
          </Button>
        </div>
      </div>
    </section>
  );
}

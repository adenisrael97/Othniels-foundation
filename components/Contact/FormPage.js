"use client"
import { useState } from "react";
import { FaHandHoldingHeart, FaHandsHelping, FaRegLifeRing } from "react-icons/fa";

const TABS = [
    { label: "Donate", value: "donate", icon: <FaHandHoldingHeart className="inline-block mr-2 text-lg" /> },
    { label: "Volunteer", value: "volunteer", icon: <FaHandsHelping className="inline-block mr-2 text-lg" /> },
    { label: "Request Help", value: "help", icon: <FaRegLifeRing className="inline-block mr-2 text-lg" /> },
];

function DonateForm() {
    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="donation-amount" className="block text-sm font-medium text-gray-700">Amount</label>
                <input type="number" id="donation-amount" name="amount" placeholder="Enter amount (USD)" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:ring-orange-500" required />
            </div>
            <div>
                <label htmlFor="donor-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="donor-name" name="name" placeholder="Your name" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:ring-orange-500" required />
            </div>
            <div>
                <label htmlFor="donor-email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="donor-email" name="email" placeholder="you@email.com" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:ring-orange-500" required />
            </div>
            <button type="submit" className="w-full rounded-md bg-orange-500 px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 mt-2">Donate</button>
        </form>
    );
}

function VolunteerForm() {
    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="volunteer-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="volunteer-name" name="name" placeholder="Your name" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-yellow-500" required />
            </div>
            <div>
                <label htmlFor="volunteer-email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="volunteer-email" name="email" placeholder="you@email.com" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-yellow-500" required />
            </div>
            <div>
                <label htmlFor="volunteer-phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="volunteer-phone" name="phone" placeholder="e.g. +1234567890" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-yellow-500" required />
            </div>
            <div>
                <label htmlFor="volunteer-message" className="block text-sm font-medium text-gray-700">Why do you want to volunteer?</label>
                <textarea id="volunteer-message" name="message" rows={3} placeholder="Tell us why you're interested..." className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-yellow-500" required />
            </div>
            <button type="submit" className="w-full rounded-md bg-yellow-500 px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-2">Volunteer</button>
        </form>
    );
}

function HelpForm() {
    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="help-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="help-name" name="name" placeholder="Your name" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500" required />
            </div>
            <div>
                <label htmlFor="help-email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="help-email" name="email" placeholder="you@email.com" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500" required />
            </div>
            <div>
                <label htmlFor="help-location" className="block text-sm font-medium text-gray-700">Location</label>
                <input type="text" id="help-location" name="location" placeholder="City, Country" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500" required />
            </div>
            <div>
                <label htmlFor="help-urgency" className="block text-sm font-medium text-gray-700">How urgent is your need?</label>
                <select id="help-urgency" name="urgency" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500" required>
                    <option value="">Select urgency</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div>
                <label htmlFor="help-message" className="block text-sm font-medium text-gray-700">Tell us about your situation</label>
                <textarea id="help-message" name="message" rows={3} placeholder="Describe your need..." className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500" required />
            </div>
            <button type="submit" className="w-full rounded-md bg-green-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 mt-2">Request Help</button>
        </form>
    );
}

export default function Formpage() {
    const [activeTab, setActiveTab] = useState("donate");

    return (
        <section className="py-6 px-2 sm:px-4 bg-gray-50 min-h-[60vh] flex flex-col items-center justify-center">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
                <div className="flex flex-col xs:flex-row sm:flex-row justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 w-full">
                    {TABS.map((tab) => {
                        let activeStyles = "";
                        if (tab.value === "donate") {
                            activeStyles = activeTab === tab.value
                                ? "bg-orange-500 text-white shadow-lg border-orange-600"
                                : "bg-orange-50 text-orange-600 border-transparent hover:bg-orange-100";
                        } else if (tab.value === "volunteer") {
                            activeStyles = activeTab === tab.value
                                ? "bg-yellow-400 text-white shadow-lg border-yellow-500"
                                : "bg-yellow-50 text-yellow-600 border-transparent hover:bg-yellow-100";
                        } else if (tab.value === "help") {
                            activeStyles = activeTab === tab.value
                                ? "bg-green-600 text-white shadow-lg border-green-700"
                                : "bg-green-50 text-green-700 border-transparent hover:bg-green-100";
                        }
                        return (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={`flex items-center gap-1 px-4 sm:px-5 py-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 w-full sm:w-auto text-sm sm:text-base ${activeStyles}`}
                                aria-current={activeTab === tab.value ? "page" : undefined}
                                type="button"
                                style={{ minWidth: 0 }}
                            >
                                {tab.icon}
                                <span className="truncate">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-200 min-h-88 w-full">
                    {activeTab === "donate" && <DonateForm />}
                    {activeTab === "volunteer" && <VolunteerForm />}
                    {activeTab === "help" && <HelpForm />}
                </div>
            </div>
        </section>
    );
}
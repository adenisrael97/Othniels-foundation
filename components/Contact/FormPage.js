"use client"
import { useState } from "react";
import { FaHandHoldingHeart, FaHandsHelping, FaRegLifeRing } from "react-icons/fa";

const TABS = [
    { label: "Donate", value: "donate", icon: <FaHandHoldingHeart className="inline-block mr-2 text-lg" /> },
    { label: "Volunteer", value: "volunteer", icon: <FaHandsHelping className="inline-block mr-2 text-lg" /> },
];

function DonateForm() {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-orange-50 rounded-xl shadow-md border border-orange-200">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">Donate via Bank Transfer</h2>
            <div className="w-full max-w-xs bg-white rounded-lg shadow p-4 mb-4 border border-gray-100">
                <div className="mb-2">
                    <span className="block text-sm font-semibold text-gray-600">Account Number:</span>
                    <span className="block text-lg font-bold text-gray-900 tracking-widest">5601336137</span>
                </div>
                <div className="mb-2">
                    <span className="block text-sm font-semibold text-gray-600">Account Name:</span>
                    <span className="block text-base font-bold text-gray-900">OTHNIELS COMMUNITY SUPPORT FOUNDATION</span>
                </div>
                <div>
                    <span className="block text-sm font-semibold text-gray-600">Bank:</span>
                    <span className="block text-base font-bold text-gray-900">FIDELITY BANK</span>
                </div>
            </div>
            <p className="text-center text-gray-700 text-sm">Thank you for supporting our mission! Please use the details above to make your donation via bank transfer.</p>
        </div>
    );
}

function VolunteerForm() {
    return (
        <form
            action="https://formspree.io/f/mkoqvkeo"
            method="POST"
            className="space-y-4"
        >
            <label className="block text-sm font-medium text-gray-700">
                Your name:
                <input type="text" name="name" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-yellow-500" required />
            </label>
            <label className="block text-sm font-medium text-gray-700">
                Your email:
                <input type="email" name="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-yellow-500" required />
            </label>
            <label className="block text-sm font-medium text-gray-700">
                Your message:
                <textarea name="message" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:ring-yellow-500" required />
            </label>
            {/* your other form fields go here */}
            <button type="submit" className="w-full rounded-md bg-yellow-500 px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-2">Send</button>
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
                </div>
            </div>
        </section>
    );
}
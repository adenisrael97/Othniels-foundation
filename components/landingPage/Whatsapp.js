import React from "react";

const whatsappNumber = "+23454029416";
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

const Whatsapp = () => {
	return (
		<a
			href={whatsappLink}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Chat on WhatsApp"
			className="fixed bottom-6 right-6 z-50 bg-linear-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-lg w-16 h-16 flex items-center justify-center transition-shadow hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] cursor-pointer"
		>
			<svg
				width="36"
				height="36"
				viewBox="0 0 36 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="18" cy="18" r="18" fill="#25D366" />
				<path
					d="M27.6 10.8C25.2 8.4 22.2 7.2 18.9 7.2C13.2 7.2 8.4 12 8.4 17.7C8.4 19.5 9 21.3 10.2 22.8L7.2 28.8L13.2 25.8C14.7 26.7 16.5 27.3 18.3 27.3C24 27.3 28.8 22.5 28.8 16.8C28.8 13.5 27.6 10.8 27.6 10.8ZM18.9 25.2C17.4 25.2 15.9 24.6 14.7 23.7L14.1 23.4L11.4 24.6L12.6 21.9L12.3 21.3C11.4 20.1 10.8 18.6 10.8 17.1C10.8 12.9 14.1 9.6 18.3 9.6C21.6 9.6 24.9 12.9 24.9 16.8C24.9 20.1 21.6 23.4 18.9 25.2ZM21.6 20.1C21.3 20.4 20.7 20.7 20.1 20.7C19.5 20.7 18.9 20.7 18.3 20.1C17.7 19.5 16.5 18.3 16.2 17.7C15.9 17.1 16.2 16.5 16.5 16.2C16.8 15.9 17.1 15.6 17.4 15.6C17.7 15.6 18.3 15.6 18.6 16.2C18.9 16.8 19.2 17.1 19.5 17.4C19.8 17.7 20.1 18.3 20.4 18.6C20.7 18.9 21 19.2 21.3 19.5C21.6 19.8 21.9 19.8 21.6 20.1Z"
					fill="#fff"
				/>
			</svg>
		</a>
	);
};

export default Whatsapp;

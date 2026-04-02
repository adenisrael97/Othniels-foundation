export default function DonatePage() {
	return (
		<section className="w-full py-12 md:py-16 px-4 md:px-0 bg-linear-to-br from-white via-yellow-50 to-orange-50 font-sans">
			<div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-yellow-100 px-6 py-8 md:px-10 md:py-10">
				<h1 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4 text-center drop-shadow-sm">
					Donate to Othniel Foundation
				</h1>
				<p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-center">
					Your generosity helps Othniel Foundation provide education, healthcare, and life-changing support
					to vulnerable children, families, and communities. Thank you for partnering with us to make a
					lasting impact.
				</p>
				<div className="space-y-5">
					<div className="rounded-2xl border border-orange-200 bg-orange-50 px-5 py-4">
						<h2 className="text-lg font-bold text-orange-600 mb-2">Bank Transfer Details</h2>
						<p className="text-sm text-gray-700 mb-1">
							<span className="font-semibold">Account Name:</span> OTHNIELS COMMUNITY SUPPORT FOUNDATION
						</p>
						<p className="text-sm text-gray-700 mb-1">
							<span className="font-semibold">Account Number:</span> 5601336137
						</p>
						<p className="text-sm text-gray-700">
							<span className="font-semibold">Bank:</span> FIDELITY BANK
						</p>
					</div>
					<p className="text-xs md:text-sm text-gray-600 text-center mt-10">
						After making a transfer, you may kindly send us a confirmation message through the Contact page so
						we can acknowledge your gift and keep you updated on our work.
					</p>
				</div>
			</div>
		</section>
	);
}


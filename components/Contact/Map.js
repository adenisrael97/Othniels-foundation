import React from "react";

export default function Map() {
  return (
    <section className="w-full my-8">
      <div className="w-full h-125 md:h-162.5 rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Othniel Foundation Office Location"
          src="https://www.google.com/maps?q=Flat+2,+Jibia+Street,+Area+2,+Abuja&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

import React from "react";

export default function Map() {
  return (
    <section className="w-full my-8">
      <div className="w-full h-125 md:h-162.5 rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Adeniran Foundation Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.527282073019!2d3.379205315261019!3d6.524379524282095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c6b2b8b8b8b%3A0x7b8b8b8b8b8b8b8b!2sAdeniran%20Foundation%20Office!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
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

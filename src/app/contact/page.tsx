"use client";

import { useState } from "react";
import { Phone, Send, Clock, CheckCircle } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    outlet: "Aerocity",
    service: "Full Body Massage",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Unique Premium Spa,\nI would like to enquire for an appointment:\nName: ${formData.name}\nPhone: ${formData.phone}\nOutlet: ${formData.outlet}\nService: ${formData.service}\nNotes: ${formData.message}`
    );
    window.open(`https://wa.me/919718892869?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-2">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--color-primary)] mb-3">
            Contact &amp; Book an Appointment
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Reach out through our central helpline, WhatsApp concierge, or submit an instant booking enquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-pink-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-5">
                Direct Contact Lines
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+919718892869"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-pink-50/50 hover:bg-[#fff0f6] border border-pink-100 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block">
                      Direct Call Hotline
                    </span>
                    <span className="text-base font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                      +91 97188 92869
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919718892869"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-pink-50/50 hover:bg-[#fff0f6] border border-pink-100 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block">
                      WhatsApp Booking
                    </span>
                    <span className="text-base font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                      Instant Chat &amp; Slot Confirmation
                    </span>
                  </div>
                </a>

                <a
                  href="https://t.me/+EuZUAx-uEB41YjE1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-pink-50/50 hover:bg-[#fff0f6] border border-pink-100 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#229ED9] text-white flex items-center justify-center shrink-0">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block">
                      Telegram Concierge
                    </span>
                    <span className="text-base font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                      @UniquePremiumSpa
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-7 border border-pink-100 shadow-sm">
              <div className="flex items-center gap-2.5 mb-2.5 text-[var(--color-primary)]">
                <Clock className="w-4 h-4" />
                <h4 className="text-base font-bold text-gray-900">Working Hours</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Open 7 Days a week from <strong>10:00 AM till 10:30 PM</strong>. Advance appointments recommended for evening &amp; weekend sessions.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-pink-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-1.5">
                Book a Session Enquiry
              </h3>
              <p className="text-xs text-gray-500 mb-6 font-light">
                Fill the details below and our reservations team will confirm slot availability immediately.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-pink-50 text-center border border-pink-200">
                  <CheckCircle className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-2" />
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Enquiry Forwarded to WhatsApp!
                  </h4>
                  <p className="text-xs text-gray-600 mb-4">
                    Our team is reviewing your preferred slot and will reply momentarily.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[var(--color-primary)] font-bold hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1.5 uppercase tracking-wide">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-pink-200 text-xs sm:text-sm focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1.5 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-pink-200 text-xs sm:text-sm focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1.5 uppercase tracking-wide">
                        Preferred Outlet *
                      </label>
                      <select
                        value={formData.outlet}
                        onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-pink-200 text-xs sm:text-sm focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-white"
                      >
                        <option value="Aerocity">Aerocity (IGI Airport)</option>
                        <option value="Connaught Place">Connaught Place (CP)</option>
                        <option value="Gurgaon">Gurgaon (Golf Course Rd)</option>
                        <option value="New Friends Colony">New Friends Colony (NFC)</option>
                        <option value="Vasant Kunj">Vasant Kunj</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1.5 uppercase tracking-wide">
                        Select Therapy *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-pink-200 text-xs sm:text-sm focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-white"
                      >
                        <option value="Full Body Massage">Full Body Massage (Indian / Foreign Therapist)</option>
                        <option value="Complete Sessions">Complete Sessions (Indian / Foreign Therapist)</option>
                        <option value="B2B Massage">B2B Massage (Indian / Foreign Therapist)</option>
                        <option value="Sandwich Massage">Sandwich 4-Hand Massage (Dual / Foreign Therapist)</option>
                        <option value="Couple Massage">Couple VIP Massage (Indian / Foreign Therapist)</option>
                        <option value="Thai Massage">Authentic Thai Massage (Native Thai / Foreign Therapist)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1.5 uppercase tracking-wide">
                      Preferred Date &amp; Time / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Today at 5:00 PM, prefer Foreign / Russian / Thai therapist..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-pink-200 text-xs sm:text-sm focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[var(--color-primary)] text-white font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-primary-hover)] transition-all shadow-md shadow-pink-500/20 cursor-pointer"
                  >
                    Confirm &amp; Proceed on WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

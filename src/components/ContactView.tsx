import React, { useState } from 'react';
import { Mail, Clock, MapPin, Send, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

interface ContactViewProps {
  onNavigateHome: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigateHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Editorial Fact-Checking & Corrections',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      const ticketId = `EC-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsSubmitting(false);
      setSubmittedTicket(ticketId);
      setFormData({
        name: '',
        email: '',
        department: 'Editorial Fact-Checking & Corrections',
        subject: '',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      
      {/* Header Container */}
      <header className="border-b border-slate-200 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs text-blue-900 font-semibold uppercase tracking-wider mb-2">
          <Mail className="w-4 h-4 text-amber-600" />
          <span>Official Communication & Editorial Channels</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight mb-2">
          Contact Elders Chronicle
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-reading leading-relaxed">
          Submit primary manuscript corrections, scholarly inquiries, educational syndication requests, or reader correspondence.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Form (7 Cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
          
          {submittedTicket ? (
            <div className="py-6 text-center">
              <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
                Inquiry Logged Successfully
              </h2>
              <p className="text-xs text-slate-600 font-reading max-w-md mx-auto mb-4 leading-relaxed">
                Your message has been assigned Ticket Reference <span className="font-mono font-bold text-blue-950">#{submittedTicket}</span> and dispatched to our Senior Historical Research desk.
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded text-[11px] text-slate-500 mb-6 max-w-sm mx-auto">
                Standard Editorial Response Time: <strong className="text-slate-700">Within 48 business hours</strong>.
              </div>
              <button
                onClick={() => setSubmittedTicket(null)}
                className="px-4 py-2 bg-blue-950 text-white rounded text-xs font-semibold hover:bg-blue-900 transition-colors cursor-pointer"
              >
                Submit Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Scholarly Inquiry Form
                </span>
                <span className="text-[11px] text-slate-400">All fields required</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name-input" className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Prof. or Dr. Jane Doe"
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-900 text-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="historian@university.edu"
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-900 text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="dept-select" className="block text-xs font-semibold text-slate-700 mb-1">
                  Recipient Department
                </label>
                <select
                  id="dept-select"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-900 text-slate-900"
                >
                  <option value="Editorial Fact-Checking & Corrections">Editorial Fact-Checking & Archival Errata</option>
                  <option value="General Historical Inquiries">General Historical Inquiries & Letters to the Editor</option>
                  <option value="Academic Licensing & Syndication">Educational Syndication & Classroom Licensing</option>
                  <option value="Privacy & Legal Governance">Privacy Officer & Data Protection (GDPR/CCPA)</option>
                  <option value="Advertising & Compliance">Advertising & AdSense Compliance Desk</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject-input" className="block text-xs font-semibold text-slate-700 mb-1">
                  Subject Line
                </label>
                <input
                  id="subject-input"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g., Archival Citation Query: Lincoln Second Inaugural"
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-900 text-slate-900"
                />
              </div>

              <div>
                <label htmlFor="message-input" className="block text-xs font-semibold text-slate-700 mb-1">
                  Message / Detailed Documentation
                </label>
                <textarea
                  id="message-input"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify article title, primary source citation, or question..."
                  className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-900 text-slate-900 resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 bg-blue-950 hover:bg-blue-900 text-white rounded text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting to Archival Desk...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Official Communication</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                We strictly adhere to zero-telemetry and non-disclosure privacy protocols.
              </p>
            </form>
          )}

        </div>

        {/* Right Column: Direct Channels & Physical Office (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Direct Electronic Mail Desks */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-900" />
              <span>Direct Electronic Desks</span>
            </h2>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-semibold text-slate-800 block">General Inquiries:</span>
                <a href="mailto:contact@elderschronicle.com" className="text-blue-900 hover:underline font-mono">
                  contact@elderschronicle.com
                </a>
              </div>

              <div>
                <span className="font-semibold text-slate-800 block">Editorial & Fact Verification:</span>
                <a href="mailto:editorial@elderschronicle.com" className="text-blue-900 hover:underline font-mono">
                  editorial@elderschronicle.com
                </a>
              </div>

              <div>
                <span className="font-semibold text-slate-800 block">Educational Rights & Citations:</span>
                <a href="mailto:rights@elderschronicle.com" className="text-blue-900 hover:underline font-mono">
                  rights@elderschronicle.com
                </a>
              </div>

              <div>
                <span className="font-semibold text-slate-800 block">Data Protection & Privacy Desk:</span>
                <a href="mailto:privacy@elderschronicle.com" className="text-blue-900 hover:underline font-mono">
                  privacy@elderschronicle.com
                </a>
              </div>
            </div>
          </div>

          {/* Response SLA Notice */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-900" />
              <span>Response Turnaround Time</span>
            </h2>
            <p className="text-xs text-slate-600 font-reading leading-relaxed mb-3">
              All correspondence submitted via this portal or direct email is routed directly to the duty editor.
            </p>
            <div className="p-3 bg-amber-50/70 border border-amber-200 rounded text-xs text-amber-950 font-medium">
              Guaranteed Response: Within 48 business hours (Monday–Friday, 09:00–18:00 EST).
            </div>
          </div>

          {/* Physical Headquarters */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-900" />
              <span>Editorial Press Office</span>
            </h2>
            <address className="not-italic text-xs text-slate-700 space-y-1 font-sans">
              <div className="font-bold text-slate-900">Elders Chronicle Historical Publishing Group</div>
              <div>45 Rockefeller Plaza, Suite 2000</div>
              <div>New York, NY 10111</div>
              <div>United States of America</div>
            </address>
          </div>

        </div>

      </div>

    </div>
  );
};

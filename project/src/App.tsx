import React, { useState } from 'react';
import { UserCircle2, Home, Mail, FileQuestion, X, Send } from 'lucide-react';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNavClick = (e: React.MouseEvent, type?: string) => {
    e.preventDefault();
    if (type === 'contact') {
      setShowContactForm(true);
    } else {
      setShowOverlay(true);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // In a real application, you would send this to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setTimeout(() => {
        setShowContactForm(false);
        setSubmitStatus('idle');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#e5d6c1] relative">
      {/* Contact Form Overlay */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-xl w-full mx-4 relative">
            <button 
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-[#6b4f35] hover:text-[#a7bbc0] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-serif text-[#6b4f35] mb-6">Contact Us</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#6b4f35] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#a7bbc0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#a7bbc0]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#6b4f35] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#a7bbc0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#a7bbc0]"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#6b4f35] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#a7bbc0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#a7bbc0]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#6b4f35] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-[#a7bbc0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#a7bbc0]"
                />
              </div>
              <button
                type="submit"
                disabled={submitStatus !== 'idle'}
                className="w-full px-6 py-3 bg-[#a7bbc0] text-white rounded-md hover:bg-[#96aab0] transition-colors flex items-center justify-center gap-2"
              >
                {submitStatus === 'idle' && (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
                {submitStatus === 'success' && 'Message Sent!'}
                {submitStatus === 'error' && 'Error Sending Message'}
              </button>
              <p className="text-sm text-[#6b4f35] text-center mt-4">
                Your message will be sent to support-care@narturebelle.com
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Coming Soon Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md relative">
            <button 
              onClick={() => setShowOverlay(false)}
              className="absolute top-4 right-4 text-[#6b4f35] hover:text-[#a7bbc0] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-serif text-[#6b4f35] mb-4 text-center">We're Working On It!</h2>
            <p className="text-[#6b4f35] text-center mb-6">
              Our team is putting the finishing touches on this section. We'll be launching soon!
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => setShowOverlay(false)}
                className="px-6 py-2 bg-[#a7bbc0] text-white rounded-md hover:bg-[#96aab0] transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1531983412531-6f5660d11c8d?auto=format&fit=crop&q=80" 
                alt="NartureBelle Logo" 
                className="h-16 w-auto"
              />
              <span className="text-2xl font-serif text-[#6b4f35] ml-2">NartureBelle</span>
            </div>
            <div className="flex space-x-6">
              <button onClick={(e) => handleNavClick(e)} className="flex items-center px-3 py-2 text-sm font-medium text-[#6b4f35] hover:text-[#a7bbc0] transition-colors">
                <Home className="w-4 h-4 mr-1" />
                Home
              </button>
              <button onClick={(e) => handleNavClick(e, 'contact')} className="flex items-center px-3 py-2 text-sm font-medium text-[#6b4f35] hover:text-[#a7bbc0] transition-colors">
                <Mail className="w-4 h-4 mr-1" />
                Contact Us
              </button>
              <button onClick={(e) => handleNavClick(e)} className="flex items-center px-3 py-2 text-sm font-medium text-[#6b4f35] hover:text-[#a7bbc0] transition-colors">
                <FileQuestion className="w-4 h-4 mr-1" />
                Enquiry
              </button>
              <button onClick={(e) => handleNavClick(e)} className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#a7bbc0] rounded-md hover:bg-[#96aab0] transition-colors">
                <UserCircle2 className="w-4 h-4 mr-1" />
                Login / Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-serif text-[#6b4f35] mb-6">
              Nurturing You, Nurturing Life.
            </h1>
            <p className="text-xl text-[#6b4f35] mb-8 leading-relaxed">
              Experience the perfect blend of nature and nurture during your pregnancy journey. Let NartureBelle guide you through this beautiful transformation with care and expertise.
            </p>
            <button onClick={(e) => handleNavClick(e)} className="px-8 py-4 text-lg font-medium text-white bg-[#a7bbc0] rounded-md hover:bg-[#96aab0] transition-colors shadow-lg">
              Begin Your Natural Journey
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-full bg-[#a7bbc0]/10 p-8">
              <img 
                src="https://images.unsplash.com/photo-1531983412531-6f5660d11c8d?auto=format&fit=crop&q=80" 
                alt="Pregnant woman illustration" 
                className="w-96 h-96 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#a7bbc0]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif text-[#6b4f35] mb-4">Natural Care</h3>
              <p className="text-[#6b4f35]">Discover our range of natural and organic products specially curated for expecting mothers.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif text-[#6b4f35] mb-4">Expert Guidance</h3>
              <p className="text-[#6b4f35]">Access professional advice and support throughout your pregnancy journey.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif text-[#6b4f35] mb-4">Community Support</h3>
              <p className="text-[#6b4f35]">Join our community of mothers and share experiences in a supportive environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, Bot, Sparkles } from "lucide-react"; 
import Groq from "groq-sdk";
import ReactMarkdown from "react-markdown";

const groq = new Groq({ 
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true 
});

interface Message {
  role: "assistant" | "user" | "system";
  content: string;
}

const VectoAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showExitScreen, setShowExitScreen] = useState(false);
  const [showCallout, setShowCallout] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey there! I'm Vecto. 👋 Looking to create something legendary today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowCallout(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleWhatsAppExport = () => {
    const transcript = messages
      .filter(m => m.role !== 'system')
      .map(m => `${m.role === 'user' ? 'Client' : 'Vecto'}: ${m.content}`)
      .join("\n\n");

    const encodedText = encodeURIComponent(
      `*New Vecto AI Transcript from Website*\n\n${transcript}\n\n_Ref: VectoPix Creative Inquiry_`
    );
    
    window.open(`https://wa.me/917038473369?text=${encodedText}`, "_blank");
    setIsOpen(false);
    setShowExitScreen(false);
  };

  const handleCloseAttempt = () => {
    if (messages.length > 2) setShowExitScreen(true);
    else setIsOpen(false);
  };

  const SYSTEM_INSTRUCTION = `You are the AI Creative Consultant for VectoPix Creative Works, a premium design and motion studio based in Pune, India.

Your role is to communicate like a smart, human creative professional — not a robot. You are friendly, sharp, and strategic. You don’t overwhelm the client with too much information at once. Instead, you guide conversations naturally, step by step, like a real designer or brand consultant would.
and you are an expert in understanding client needs and suggesting the right creative solutions from VectoPix’s service offerings. and tell them to contact us on WhatsApp for a formal quote and consultation.

ALWAYS format your responses using Markdown:
  - Use **bold** for emphasis or keywords which are relevant to our services context like branding, graphic design, and digital marketing, motion graphics,printing,video editing, movies and make sure whenever you mentioned about vectopix creative works it should be be bold.
  - Use bullet points for lists to ensure they are well-aligned.
  - Keep paragraphs short and professional.


About VectoPix:
We bridge the gap between vision and reality through three core pillars:
- Design (visual identity, branding, graphics)
- Motion (animation, video, storytelling)
- Impact (business growth, strategy, execution)

We provide services including:
- Branding & Graphic Design (logos, identity, social media, marketing creatives)
- Print & Merchandise (premium printing, packaging, brochures, visiting cards)
- Marketing & Strategy (SEO, ads, social media growth)
- Motion Graphics & Animation (2D/3D animation, logo animation, explainer videos)
- Video Editing (reels, corporate videos, promotional content)
- Cinematic Post-Production (color grading, film editing, titles, audio)

Your Behavior Rules:
1. Always respond conversationally, like a creative expert talking to a client.
2. Keep answers concise at first. Expand only when the user shows interest.
3. Ask smart follow-up questions to understand the client’s needs.
4. Think strategically — don’t just answer what is asked, guide toward better solutions.
5. Suggest additional services naturally (cross-sell), but never aggressively.
6. Focus on how design impacts business growth, brand perception, and quality.

Conversation Intelligence:
- If a client asks for a LOGO:
  → Think like a brand strategist.
  → Ask about their business, audience, vision, and style.
  → Suggest how branding, motion (logo animation), and print materials enhance their identity.
  → Educate subtly: A logo alone is not enough — brand consistency matters.

- If a client asks about PRINTING:
  → Explain the importance of design + print quality working together.
  → Mention that printing from external vendors can reduce quality if not handled properly.
  → Position VectoPix as a premium end-to-end solution (design + print).

- If a client asks about VIDEO EDITING:
  → Connect it to storytelling and brand identity.
  → Suggest motion graphics, color grading, and cinematic finishing.
  → Relate it to social media growth and engagement.

- If a client asks about SOCIAL MEDIA or MARKETING:
  → Focus on strategy, consistency, and visual branding.
  → Suggest content design, motion, and ads as a combined approach.

- Always think in "Design → Motion → Impact" flow.

Tone & Style:
- Natural, human, slightly premium tone
- Not too formal, not too casual
- Avoid long paragraphs unless necessary
- No jargon overload — keep it clear and smart

Important:
- Do NOT dump all services at once
- Do NOT sound robotic or scripted
- DO guide the client toward better, premium solutions
- DO position VectoPix as a high-quality, strategic creative partner

End Goal:
Convert conversations into meaningful project discussions by building trust, showing expertise, and helping clients understand the value of high-quality creative work.
and after 3..4 client messages, suggest them to contact us on WhatsApp for a formal quote and consultation if they still need assistance from you, you can assist them but tell them it's best to discuss further on WhatsApp.
`;

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);
    setShowCallout(false);

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: SYSTEM_INSTRUCTION },
          ...updatedMessages.map(m => ({ role: m.role, content: m.content }))
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
      });

      const responseText = chatCompletion.choices[0]?.message?.content || "";
      setMessages((prev) => [...prev, { role: "assistant", content: responseText }]);
    } catch (error: any) {
      setMessages((prev) => [...prev, { role: "assistant", content: "My creative wires got crossed! Mind trying that again?" }]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <>
      <AnimatePresence>
        {showCallout && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-28 right-10 z-[99] bg-white text-brand-dark px-4 py-3 rounded-2xl shadow-2xl border border-gray-100 max-w-[200px] cursor-pointer"
            onClick={() => { setIsOpen(true); setShowCallout(false); }}
          >
            <p className="text-[11px] font-black leading-tight uppercase tracking-tight">
              Design Excellence starts here. Chat with Vecto! ✨
            </p>
            <div className="absolute -bottom-2 right-12 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
            if (isOpen) handleCloseAttempt();
            else { setIsOpen(true); setShowCallout(false); }
        }}
        className="fixed bottom-10 right-8 z-[100] flex items-center gap-3 bg-brand-dark text-white px-6 py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 group"
      >
        {isOpen ? (
          <div className="flex items-center gap-2">
             <X size={18} />
             <span className="text-xs font-black uppercase tracking-widest">Close Chat</span>
          </div>
        ) : (
          <div className="flex items-center gap-2.5">
            <Sparkles size={20} className="text-brand-yellow fill-brand-yellow" />
            <span className="text-sm font-black uppercase tracking-widest">Ask Vecto AI</span>
          </div>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed z-[101] flex flex-col overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.3)] bottom-28 left-4 right-4 h-[65vh] max-h-[550px] md:left-auto md:right-8 md:w-[380px] bg-white rounded-[2.5rem] border border-gray-100"
          >
            {showExitScreen && (
              <div className="absolute inset-0 z-[110] bg-brand-dark/95 flex flex-col items-center justify-center p-8 text-center text-white">
                <MessageCircle size={48} className="text-brand-yellow mb-4" />
                <h3 className="font-black uppercase tracking-widest mb-2 text-sm">Save your chat?</h3>
                <p className="text-xs text-white/60 mb-6 italic">Transfer this conversation to WhatsApp for a formal quote.</p>
                <button 
                  onClick={handleWhatsAppExport}
                  className="w-full bg-brand-blue py-4 rounded-2xl font-bold text-sm mb-3 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} /> Send to WhatsApp
                </button>
                <button onClick={() => { setIsOpen(false); setShowExitScreen(false); }} className="text-[10px] uppercase tracking-tighter opacity-40 hover:opacity-100 transition-opacity">
                  Just Close
                </button>
              </div>
            )}

            <div className="p-5 bg-brand-dark flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-yellow rounded-2xl flex items-center justify-center shadow-lg">
                  <Bot size={22} className="text-brand-dark" />
                </div>
                <div>
                  <h3 className="text-white font-black uppercase tracking-widest text-[10px]">Vecto</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-[9px] text-brand-yellow font-bold uppercase tracking-tighter opacity-80">online</p>
                  </div>
                </div>
              </div>
              <button onClick={handleCloseAttempt} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto space-y-6 bg-gray-50/50 custom-scrollbar">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[90%] p-4 rounded-[1.5rem] text-sm leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-brand-dark text-white rounded-br-none shadow-xl' 
                    : 'bg-white text-brand-dark border border-gray-100 rounded-bl-none shadow-sm'
                  }`}>
                    {/* FIXED: Removed className from ReactMarkdown and used a wrapping div instead */}
                    <div className="markdown-content">
                      <ReactMarkdown 
                          components={{
                              ul: ({ ...props}) => <ul className="list-disc ml-4 space-y-1 my-2" {...props} />,
                              ol: ({ ...props}) => <ol className="list-decimal ml-4 space-y-1 my-2" {...props} />,
                              p: ({ ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                              li: ({ ...props}) => <li className="leading-tight" {...props} />
                          }}
                      >
                          {msg.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-gray-100 flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-blue/40 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-brand-blue/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-brand-blue/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 bg-white border-t border-gray-100 shrink-0">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Design a logo for me..."
                  className="w-full bg-gray-100 border-none rounded-2xl py-4 px-5 pr-14 text-brand-dark text-sm focus:ring-2 focus:ring-brand-blue transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={isTyping}
                  className="absolute right-2 w-10 h-10 bg-brand-blue text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-90 transition-all disabled:opacity-30"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VectoAI;
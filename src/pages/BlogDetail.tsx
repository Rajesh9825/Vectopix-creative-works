import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "../data/blogData";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  if (!post) return <div className="pt-40 text-center">Post not found.</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Premium Reading Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand-blue z-[200] origin-left" style={{ scaleX }} />

      <div className="container mx-auto px-6 pt-40 pb-20">
        <button onClick={() => navigate("/blog")} className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-brand-dark transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Journal
        </button>

        <div className="max-w-4xl">
          <span className="px-4 py-2 bg-brand-yellow/10 text-brand-dark rounded-full text-[10px] font-black uppercase tracking-widest mb-8 inline-block">
            {post.category}
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-brand-dark uppercase tracking-tighter leading-[0.9] mb-10">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-10 border-y border-brand-dark/5 py-8 mb-16">
            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Calendar size={14} /> {post.date}
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Clock size={14} /> {post.readTime}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <img src={post.image} alt="" className="w-full aspect-video object-cover rounded-[3rem] mb-16 shadow-2xl" />
            {/* Semantic Article Content */}
            <div 
              className="prose prose-2xl prose-brand max-w-none 
              [&>p]:text-xl [&>p]:leading-relaxed [&>p]:text-muted-foreground [&>p]:mb-8
              [&>h2]:text-4xl [&>h2]:font-black [&>h2]:text-brand-dark [&>h2]:uppercase [&>h2]:tracking-tighter [&>h2]:mt-16 [&>h2]:mb-6
              [&>.cta-block]:bg-brand-dark [&>.cta-block]:p-10 [&>.cta-block]:rounded-[2.5rem] [&>.cta-block]:text-white [&>.cta-block]:mt-20"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>
          
          {/* Conversational Sticky Sidebar */}
          <div className="lg:col-span-4 hidden lg:block sticky top-32 h-fit">
            <div className="p-8 bg-brand-dark rounded-[2.5rem] text-white">
              <h4 className="text-brand-yellow font-black uppercase tracking-widest text-xs mb-4">Start your journey</h4>
              <p className="text-white/60 text-sm mb-8 leading-relaxed font-medium">Loved this insight? Let's apply these strategies to your brand.</p>
              <button onClick={() => navigate("/#contact")} className="w-full py-4 bg-white text-brand-dark rounded-full font-black uppercase text-xs hover:bg-brand-blue hover:text-white transition-all">
                Hire VectoPix
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
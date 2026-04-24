import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 bg-[#FCFCFC] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Minimal Header */}
        <div className="max-w-4xl mb-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-blue font-black uppercase tracking-[0.4em] text-[10px] mb-4">
            The VectoPix Journal
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-black text-brand-dark uppercase tracking-tighter leading-none">
            Stories & <span className="text-brand-yellow">Solutions.</span>
          </motion.h1>
        </div>

        {/* Professional Article List */}
        <div className="space-y-1">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="group border-b border-brand-dark/5 py-12 flex flex-col md:flex-row items-start md:items-center gap-10 cursor-pointer hover:bg-white transition-colors px-4"
            >
              <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest w-24">
                0{i + 1} — {post.category}
              </span>
              
              <div className="flex-grow">
                <h2 className="text-3xl md:text-5xl font-black text-brand-dark group-hover:text-brand-blue transition-colors uppercase tracking-tight leading-none mb-4">
                  {post.title}
                </h2>
                <p className="text-muted-foreground max-w-2xl font-medium line-clamp-1 italic">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-8">
                <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  <Clock size={14} /> {post.readTime}
                </div>
                <div className="w-16 h-16 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-yellow group-hover:border-brand-yellow transition-all duration-500">
                  <ArrowUpRight size={24} className="text-brand-dark" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
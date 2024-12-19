import React from 'react';
import { User, Clock, Calendar } from 'lucide-react';
import { BlogPost as BlogPostType } from '../../data/blog/types';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover rounded-xl mb-8"
      />
      
      <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>{post.author}</span>
          <span className="text-gray-400">|</span>
          <span className="text-[#2f3676]">{post.role}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{post.readTime}</span>
        </div>
      </div>

      <h1 className="text-4xl font-light mb-6">{post.title}</h1>
      <p className="text-xl text-gray-600 mb-12">{post.excerpt}</p>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <div className="mt-12 pt-8 border-t">
        <h3 className="text-2xl font-light mb-4">Share this article</h3>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-[#2f3676] text-white rounded-md hover:bg-[#1a1f4d] transition">
            Share on LinkedIn
          </button>
          <button className="px-6 py-2 bg-[#2f3676] text-white rounded-md hover:bg-[#1a1f4d] transition">
            Share on Twitter
          </button>
        </div>
      </div>
    </article>
  );
}
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

const RichTextRenderer = ({ content }) => {
    return (
        <ReactMarkdown
            className='whitespace-pre-wrap'
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            components={{
                h1: ({ node, ...props }) => <h1 className="text-4xl font-bold" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-3xl font-bold" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-2xl font-bold" {...props} />,
                h4: ({ node, ...props }) => <h4 className="text-xl font-bold" {...props} />,
                h5: ({ node, ...props }) => <h5 className="text-lg font-bold" {...props} />,
                h6: ({ node, ...props }) => <h6 className="text-base font-bold" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-inside" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal list-inside" {...props} />,
                li: ({ node, ...props }) => <li className="" {...props} />,
                p: ({ node, ...props }) => <p className="" {...props} />,
                strong: ({ node, ...props }) => <strong {...props} />,
                em: ({ node, ...props }) => <em {...props} />,
                code: ({ node, className, children, ...props }) => (
                    <code {...props} className={`bg-gray-100 p-1 rounded ${className}`}>
                        {children}
                    </code>
                ),
                pre: ({ node, ...props }) => (
                    <pre className="bg-gray-100 p-4 rounded-md w-full overflow-x-auto" {...props} />
                ),
                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-800 pl-4 italic" {...props} />,
                img: ({ node, ...props }) => (
                    <div className="w-full flex justify-center my-4">
                        <img alt="alternative text" className="max-w-full h-auto object-contain rounded-lg" loading="lazy" {...props} />
                    </div>
                ),
                a: ({ node, ...props }) => <a className="hover:text-blue-400 text-black underline" target="_blank" rel="noopener noreferrer" {...props} />,
                u: ({ node, ...props }) => <span className='underline text-red-500' {...props} />,
                s: ({ node, ...props }) => <s {...props} />,
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

export default RichTextRenderer;

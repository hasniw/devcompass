import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
    }
  };
}

function ArticleSchema({ post }: { post: ReturnType<typeof getBlogPostBySlug> }) {
  if (!post) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@type": "Organization", name: "DevCompass" },
    publisher: { "@type": "Organization", name: "DevCompass" }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <ArticleSchema post={post} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link>
          <span className="mx-2">›</span>
          <Link href="/blog/devenir-developpeur-2026" className="hover:text-indigo-600">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 truncate">{post.title}</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full text-xs font-medium">{post.category}</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">{post.title}</h1>
          <p className="text-xl text-gray-500 mt-4">{post.excerpt}</p>
        </header>

        <div className="prose prose-lg prose-gray max-w-none
          prose-headings:text-gray-900 prose-headings:font-bold
          prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900
          prose-li:text-gray-600
          prose-p:text-gray-600
          prose-blockquote:border-indigo-500 prose-blockquote:text-gray-600 prose-blockquote:italic">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ', '')}</h2>;
            if (line.startsWith('### ')) return <h3 key={i}>{line.replace('### ', '')}</h3>;
            if (line.startsWith('> ')) return <blockquote key={i}><p>{line.replace('> ', '')}</p></blockquote>;
            if (line.startsWith('- ')) return <li key={i}>{line.replace('- ', '')}</li>;
            if (line.startsWith('| ')) return null; // skip tables for simplicity
            if (line.trim() === '') return null;
            if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ') || line.startsWith('6. ') || line.startsWith('7. ')) {
              return <li key={i}>{line.replace(/^\d+\.\s/, '')}</li>;
            }
            return <p key={i}>{line}</p>;
          })}
        </div>

        {/* Related posts */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles connexes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogPosts.filter(p => p.slug !== post.slug).slice(0, 2).map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition">
                <span className="text-xs text-indigo-600 font-medium">{p.category}</span>
                <h3 className="font-semibold text-gray-900 mt-1">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}

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
    openGraph: { title: post.metaTitle, description: post.metaDescription, type: 'article', publishedTime: post.date },
  };
}

function ArticleSchema({ post }: { post: ReturnType<typeof getBlogPostBySlug> }) {
  if (!post) return null;
  const schema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: post.title, description: post.metaDescription, datePublished: post.date,
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
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-violet-400 transition">Accueil</Link>
          <span className="mx-2">›</span>
          <Link href="/blog/devenir-developpeur-2026" className="hover:text-violet-400 transition">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-white truncate">{post.title}</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded-full text-xs font-medium">{post.category}</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{post.title}</h1>
          <p className="text-xl text-gray-400 mt-4">{post.excerpt}</p>
        </header>

        <div className="prose prose-lg prose-invert max-w-none
          prose-headings:text-white prose-headings:font-bold
          prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white
          prose-li:text-gray-400
          prose-p:text-gray-400
          prose-blockquote:border-violet-500 prose-blockquote:text-gray-400 prose-blockquote:italic">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ', '')}</h2>;
            if (line.startsWith('### ')) return <h3 key={i}>{line.replace('### ', '')}</h3>;
            if (line.startsWith('> ')) return <blockquote key={i}><p>{line.replace('> ', '')}</p></blockquote>;
            if (line.startsWith('- ')) return <li key={i}>{line.replace('- ', '')}</li>;
            if (line.startsWith('| ')) return null;
            if (line.trim() === '') return null;
            if (/^\d+\.\s/.test(line)) return <li key={i}>{line.replace(/^\d+\.\s/, '')}</li>;
            return <p key={i}>{line}</p>;
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Articles connexes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogPosts.filter(p => p.slug !== post.slug).slice(0, 2).map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`}
                className="glass rounded-xl p-4 hover:bg-white/5 transition">
                <span className="text-xs text-violet-400 font-medium">{p.category}</span>
                <h3 className="font-semibold text-white mt-1">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}

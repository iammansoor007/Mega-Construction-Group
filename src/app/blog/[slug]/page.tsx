import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPostBySlug, getAllBlogPosts } from "@/data/blogsData";
import BlogDetailClient from "./_components/BlogDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Technical Guide Not Found | Mega Contracting NY Group",
    };
  }

  const BASE_URL = "https://www.megacontractingnyc.com";
  const canonicalUrl = `${BASE_URL}/blog/${post.slug}`;
  const fullImageUrl = post.featuredImage.startsWith("http")
    ? post.featuredImage
    : `${BASE_URL}${post.featuredImage}`;

  return {
    title: {
      absolute: `${post.seoTitle} | Mega Contracting NY Group`,
    },
    description: post.metaDescription,
    keywords: [
      post.primaryKeyword,
      ...post.supportingKeywords,
      "Mega Contracting NY Group",
      "Licensed General Contractor NYC",
      "DOB Work Permit NYC",
      "NYC Roofing Code",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: "Mega Contracting NY Group",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.editDate || post.publishDate,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [fullImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const BASE_URL = "https://www.megacontractingnyc.com";
  const canonicalUrl = `${BASE_URL}/blog/${post.slug}`;
  const fullImageUrl = post.featuredImage.startsWith("http")
    ? post.featuredImage
    : `${BASE_URL}${post.featuredImage}`;

  // Multi-schema: TechArticle / BlogPosting, BreadcrumbList, FAQPage
  const schemas: any[] = [
    {
      "@context": "https://schema.org",
      "@type": ["TechArticle", "BlogPosting"],
      headline: post.title,
      alternativeHeadline: post.seoTitle,
      description: post.metaDescription,
      image: fullImageUrl,
      datePublished: post.publishDate,
      dateModified: post.editDate || post.publishDate,
      inLanguage: "en-US",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl,
      },
      author: {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: post.author.license,
        },
        url: `${BASE_URL}/about`,
      },
      publisher: {
        "@type": "Organization",
        name: "Mega Contracting NY Group Inc.",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/assets/Mega-Contracting-Logo.png`,
        },
      },
      keywords: [post.primaryKeyword, ...post.supportingKeywords].join(", "),
      about: [
        { "@type": "Thing", name: post.primaryKeyword },
        ...post.supportingKeywords.map((kw) => ({ "@type": "Thing", name: kw })),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Technical Guides", item: `${BASE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      {schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a]">
        <BlogDetailClient post={post} />
        <Footer />
      </main>
    </>
  );
}

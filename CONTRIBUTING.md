# Contributing to RAID Blog

Thank you for your interest in contributing to the RAID blog! This guide will help you write and submit high-quality blog posts that align with our standards and provide value to our readers.

## Table of Contents

- [Getting Started](#getting-started)
- [Blog Post Structure](#blog-post-structure)
- [Writing Guidelines](#writing-guidelines)
- [Frontmatter Requirements](#frontmatter-requirements)
- [Content Guidelines](#content-guidelines)
- [SEO Best Practices](#seo-best-practices)
- [Code Examples](#code-examples)
- [Images and Media](#images-and-media)
- [Submission Process](#submission-process)
- [Review Process](#review-process)
- [Style Guide](#style-guide)

## Getting Started

### Prerequisites

- Basic knowledge of Markdown or MDX
- Understanding of the topic you want to write about
- Familiarity with Git (for submissions)

### Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Create your blog post in `src/content/blog/`

## Blog Post Structure

### File Location
All blog posts should be placed in the `src/content/blog/` directory.

### File Naming
- Use kebab-case for file names
- Include relevant keywords
- End with `.md` or `.mdx`
- Examples: `getting-started-with-astro.md`, `advanced-javascript-patterns.mdx`

### Basic Structure
```markdown
---
# Frontmatter (see requirements below)
---

# Introduction paragraph
Brief overview of what the post covers and why it matters.

## Main Content Sections
Well-organized content with clear headings...

## Conclusion
Summary and next steps...
```

## Writing Guidelines

### Voice and Tone
- **Conversational but Professional**: Write as if explaining to a colleague
- **Clear and Concise**: Avoid unnecessary jargon or overly complex sentences
- **Helpful and Practical**: Focus on actionable insights and real-world applications
- **Inclusive**: Use inclusive language and consider diverse audiences

### Content Quality Standards
- **Original Content**: All posts must be original work
- **Fact-Checked**: Verify all technical information and code examples
- **Up-to-Date**: Ensure all information is current and relevant
- **Comprehensive**: Cover topics thoroughly but concisely
- **Engaging**: Use examples, analogies, and practical scenarios

### Word Count Guidelines
- **Tutorial Posts**: 1,500-3,000 words
- **Opinion/Analysis**: 800-1,500 words
- **Quick Tips**: 400-800 words
- **In-Depth Guides**: 2,000-4,000 words

## Frontmatter Requirements

All blog posts must include proper frontmatter with the following fields:

```yaml
---
title: "Your SEO-Optimized Post Title (60 chars max)"
description: "Compelling meta description that summarizes the post (150-160 chars)"
pubDate: "Jun 17 2025"  # Publication date
updatedDate: "Jun 17 2025"  # Optional: Last update date
heroImage: "/blogs-raid/your-post-title/your-image.jpg" 
           # Optional: Featured image, but recommended
tags: ["tag1", "tag2", "tag3"]  # 3-8 relevant tags
authors: [
  { 
    name: "Your Name", 
    url: "https://yourwebsite.com"  # Optional
  }
]
draft: false  # Set to true for drafts
featured: false  # Set to true for featured posts
---
```

### Required Fields
- `title`: SEO-optimized, descriptive title
- `description`: Meta description for search engines
- `pubDate`: Publication date in "MMM DD YYYY" format
- `tags`: Array of relevant tags (minimum 3, maximum 8)
- `authors`: Array with at least your name

### Optional Fields
- `updatedDate`: When the post was last significantly updated
- `heroImage`: Featured image path (recommended)
- `draft`: Set to `true` to hide from production
- `featured`: Set to `true` for homepage featuring

## Content Guidelines

### Content Structure

#### 1. Introduction (First 2-3 paragraphs)
- Hook the reader with an interesting opening
- Clearly state what the post covers
- Explain why it matters to the reader
- Include a brief overview of what they'll learn

#### 2. Main Content
- Use clear, hierarchical headings (H2, H3, H4)
- Break up long paragraphs
- Include practical examples
- Add code snippets with explanations
- Use bullet points and numbered lists
- Include relevant images or diagrams

#### 3. Conclusion
- Summarize key takeaways
- Provide next steps or further reading
- Encourage engagement (comments, sharing)

### Writing Best Practices

#### Headers and Structure
- Use only one H1 (the title in frontmatter)
- Start with H2 for main sections
- Maintain logical hierarchy (H2 → H3 → H4)
- Keep headers descriptive and keyword-rich

#### Paragraphs and Sentences
- Keep paragraphs to 3-4 sentences maximum
- Vary sentence length for readability
- Use active voice when possible
- Include transition words between paragraphs

#### Lists and Formatting
- Use bullet points for unordered information
- Use numbered lists for sequential steps
- Bold important terms on first use
- Use `code formatting` for technical terms
- Italicize for emphasis (sparingly)

## SEO Best Practices

### Keyword Optimization
- Include primary keyword in title
- Use keyword in first paragraph
- Sprinkle related keywords naturally throughout
- Don't keyword stuff - maintain natural flow

### Internal and External Links
- Link to other relevant blog posts
- Include 2-3 high-quality external links
- Use descriptive anchor text
- Open external links in new tabs

### Meta Information
- Write compelling meta descriptions
- Use relevant tags for categorization
- Include alt text for all images
- Ensure proper heading hierarchy

## Code Examples

### Formatting
- Use proper syntax highlighting
- Include language specification in code blocks
- Add comments to explain complex code
- Test all code examples before publishing

### Example:
```javascript
// Calculate the sum of an array
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Usage example
const scores = [85, 92, 78, 96];
console.log(sumArray(scores)); // Output: 351
```

### Best Practices
- Keep examples concise but complete
- Show both the code and expected output
- Explain what each example demonstrates
- Provide context for why the code is useful

## Images and Media

### Image Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: Maximum 1MB per image
- **Dimensions**: 1200x630px for hero images
- **Location**: Store in `/public/your-post-title/` directory

Note : In frontmatter requirements your `heroImage` should be `/blogs-raid/your-post-title/your-image.jpg`

### Image Guidelines
- Use descriptive filenames
- Include alt text for accessibility
- Optimize images for web (use tools like TinyPNG)
- Prefer screenshots over stock photos for technical content


## Submission Process

### Step 1: Prepare Your Post
1. Write your blog post following these guidelines
2. Test locally using `npm run dev`
3. Proofread for grammar, spelling, and technical accuracy
4. Validate all links and code examples

### Step 2: Submit for Review
1. Create a new branch: `git checkout -b blog/your-post-title`
2. Add your post to `src/content/blog/`
3. Commit your changes with a descriptive message
4. Push to your fork and create a pull request

### Step 3: Pull Request Requirements
- **Title**: "Blog: [Your Post Title]"
- **Description**: Brief summary of the post and target audience
- **Checklist**: Confirm you've followed all guidelines
- **Preview**: Include a link to the deployed preview

## Review Process

### What We Look For
- **Technical Accuracy**: All code and information is correct
- **Writing Quality**: Clear, engaging, and well-structured
- **SEO Optimization**: Proper meta tags and keyword usage
- **Originality**: Unique insights and perspectives
- **Value**: Practical benefit to readers

### Timeline
- Initial review: 3-5 business days
- Revision requests: 1-2 business days for response
- Final approval: 1-2 business days
- Publication: Within 1 week of approval

### Possible Outcomes
- **Approved**: Post is published as-is
- **Approved with Minor Changes**: Small edits made by editors
- **Revision Requested**: Specific feedback provided for improvements
- **Declined**: Post doesn't meet standards (with constructive feedback)

## Style Guide

### Capitalization
- **Blog Titles**: Title Case for Main Words
- **Headings**: Sentence case (First word capitalized)
- **Technical Terms**: Follow industry standards (JavaScript, not Javascript)

### Punctuation
- Use Oxford commas in lists
- Put periods inside quotation marks
- Use em dashes (—) for breaks in thought
- Avoid excessive exclamation points

### Technical Writing
- Define acronyms on first use: "Application Programming Interface (API)"
- Use consistent terminology throughout
- Prefer active voice: "We recommend" vs "It is recommended"
- Write out numbers under 10, use numerals for 10+


## Questions?

If you have questions about contributing or need clarification on any guidelines:

1. Check existing blog posts for examples
2. Review the [Astro documentation](https://docs.astro.build)
3. Open an issue in the repository
4. Contact the maintainers

## Thank You!

We appreciate your contribution to the RAID blog community. Your expertise and insights help make our content valuable for developers worldwide.

---

*Last updated: June 17, 2025*

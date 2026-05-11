-- Insert 5 blog posts into the posts table
INSERT INTO public.posts (
  title, 
  slug, 
  content, 
  excerpt, 
  featured_image, 
  category, 
  status, 
  published_at, 
  author_id
) VALUES 
(
  'Why Every Small Business in India Needs a Website in 2026',
  'small-business-website-india-2026',
  '# Why Every Small Business in India Needs a Website in 2026\n\nIn an increasingly digital-first economy, a professional website is no longer a luxury but a fundamental necessity for growth and credibility.\n\n## 1. Digital Visibility\nWith millions of Indians coming online every month, your customers are searching for services on Google. If you are not there, your competitors will be.\n\n## 2. Customer Trust\nA website acts as your digital office. It provides a sense of legitimacy that social media profiles alone cannot match.\n\n## 3. 24/7 Availability\nYour website works for you even when you are asleep, answering common questions and collecting leads.',
  'In an increasingly digital-first economy, a professional website is no longer a luxury but a fundamental necessity for growth and credibility.',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
  'Business Strategy',
  'published',
  NOW(),
  'bd3bdecd-e22b-4109-be6f-515881fed734'
),
(
  'How to Choose the Right Tech Stack for Your Startup',
  'choose-right-tech-stack-startup',
  '# How to Choose the Right Tech Stack for Your Startup\n\nSelecting the right tools early can save thousands in technical debt and ensure your product can scale with your user base.\n\n## The Core Pillars\n- **Frontend**: React, Next.js, or Vue.js for high performance.\n- **Backend**: Node.js, Python, or Go depending on your team expertise.\n- **Database**: PostgreSQL (via Supabase) for robust data management.\n\n## Factors to Consider\n1. Developer Availability\n2. Ecosystem and Community Support\n3. Scalability and Hosting Costs',
  'Selecting the right tools early can save thousands in technical debt and ensure your product can scale with your user base.',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070',
  'Tech Guides',
  'published',
  NOW(),
  'bd3bdecd-e22b-4109-be6f-515881fed734'
),
(
  'The Rise of Digital Entrepreneurs in Tier-2 Cities',
  'digital-entrepreneurs-tier-2-cities',
  '# The Rise of Digital Entrepreneurs in Tier-2 Cities\n\nFrom Indore to Jaipur, a new wave of innovation is sweeping through India''s smaller cities, powered by accessibility to technology.\n\n## Breaking Geographical Barriers\nTechnology has leveled the playing field. An entrepreneur in Coimbatore can now serve clients in London as easily as one in Mumbai.\n\n## Local Innovation\nWe are seeing specialized solutions for local challenges, from Agri-tech to local logistics, born in the heart of Bharat.',
  'From Indore to Jaipur, a new wave of innovation is sweeping through India''s smaller cities, powered by accessibility to technology.',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070',
  'Industry News',
  'published',
  NOW(),
  'bd3bdecd-e22b-4109-be6f-515881fed734'
),
(
  'Optimizing Your Online Store for Mobile Users',
  'optimize-online-store-mobile-users',
  '# Optimizing Your Online Store for Mobile Users\n\nWith over 80% of Indian internet traffic coming from mobile devices, your e-commerce experience must be mobile-first to survive.\n\n## Key Strategies\n- **Page Speed**: Optimize images and minimize scripts.\n- **Simplified Checkout**: Reduce the number of steps to complete a purchase.\n- **Responsive Design**: Ensure buttons and text are easily interactable on small screens.',
  'With over 80% of Indian internet traffic coming from mobile devices, your e-commerce experience must be mobile-first to survive.',
  'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=2070',
  'E-commerce',
  'published',
  NOW(),
  'bd3bdecd-e22b-4109-be6f-515881fed734'
),
(
  'Understanding Digital Marketing: A Guide for Beginners',
  'digital-marketing-guide-beginners',
  '# Understanding Digital Marketing: A Guide for Beginners\n\nLearn the core pillars of SEO, Social Media, and Content Marketing to build a sustainable online presence for your brand.\n\n## The Three Pillars\n1. **SEO**: Organic visibility on search engines.\n2. **PPC**: Targeted advertising for immediate results.\n3. **Social Media**: Building a community and brand voice.\n\nContent is the glue that holds everything together.',
  'Learn the core pillars of SEO, Social Media, and Content Marketing to build a sustainable online presence for your brand.',
  'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2074',
  'Marketing',
  'published',
  NOW(),
  'bd3bdecd-e22b-4109-be6f-515881fed734'
);

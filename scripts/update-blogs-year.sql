-- Fix year from 2025 to 2026 in blog posts already seeded
-- Run this in Supabase SQL Editor

UPDATE posts SET
  title = 'How to Get Your Kerala Business to #1 on Google in 2026',
  slug  = 'how-to-rank-number-1-on-google-kerala-business-2026'
WHERE slug = 'how-to-rank-number-1-on-google-kerala-business-2025';

UPDATE posts SET
  title = 'Web Development for Kerala Businesses: Complete Guide 2026',
  slug  = 'web-development-kerala-businesses-complete-guide-2026',
  content = REPLACE(content, 'Professional Website in 2025', 'Professional Website in 2026')
WHERE slug = 'web-development-kerala-businesses-complete-guide-2025';

UPDATE posts SET
  title = 'How to Register Your Company in Kerala: Complete 2026 Guide',
  slug  = 'how-to-register-company-kerala-2026-guide'
WHERE slug = 'how-to-register-company-kerala-2025-guide';

UPDATE posts SET
  title   = 'How Much Does a Website Cost in Kerala? Honest 2026 Price Guide',
  slug    = 'website-cost-kerala-honest-price-guide-2026',
  excerpt = REPLACE(excerpt, '2025', '2026'),
  content = REPLACE(content, '2025', '2026')
WHERE slug = 'website-cost-kerala-honest-price-guide-2025';

UPDATE posts SET
  title = 'E-commerce Website Development in Kerala: Sell Online in 2026',
  slug  = 'ecommerce-website-development-kerala-sell-online-2026'
WHERE slug = 'ecommerce-website-development-kerala-sell-online-2025';

UPDATE posts SET
  title   = 'Best Digital Marketing Strategies for Kerala Businesses in 2026',
  slug    = 'best-digital-marketing-strategies-kerala-businesses-2026',
  excerpt = REPLACE(excerpt, '2025', '2026'),
  content = REPLACE(content, '2025', '2026')
WHERE slug = 'best-digital-marketing-strategies-kerala-businesses-2025';

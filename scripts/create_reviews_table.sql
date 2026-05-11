-- Create reviews table
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_role TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  avatar_url TEXT,
  status TEXT DEFAULT 'published',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Enable RLS
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Policies
DROP POLICY IF EXISTS "Reviews are viewable by everyone if published" ON public.reviews;
CREATE POLICY "Reviews are viewable by everyone if published" ON public.reviews
  FOR SELECT USING (status = 'published');

DROP POLICY IF EXISTS "Allow all actions for authenticated users on reviews" ON public.reviews;
CREATE POLICY "Allow all actions for authenticated users on reviews" ON public.reviews
  FOR ALL TO authenticated USING (true);

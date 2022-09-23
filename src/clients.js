import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://hndroapurgmojlmryusb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZHJvYXB1cmdtb2psbXJ5dXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM4OTU0MDQsImV4cCI6MTk3OTQ3MTQwNH0.Imx8T_DkvkfsCL6DeWI0TFvFDwXQu6Xd6jtIvDeednY'
);

export { supabase };

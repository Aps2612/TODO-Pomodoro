import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://dfbkfczwfvrahhcymizq.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmYmtmY3p3ZnZyYWhoY3ltaXpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3OTIwMTcsImV4cCI6MTk5ODM2ODAxN30.Um2xFFi3BmcLvveaYYCznLuO6qYddydjMP7k_WPatfQ"
console.log(supabaseUrl);
export const supabase = createClient(supabaseUrl,supabaseKey);

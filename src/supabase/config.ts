import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rvcfjmmklzqxgigrnefg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2Y2ZqbW1rbHpxeGdpZ3JuZWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc2MDk1MzUsImV4cCI6MjAwMzE4NTUzNX0.h5X_911EkNhYlo58NlMibG2nKakwroFI6T1psdrJNko";

const Supabase = createClient(supabaseUrl, supabaseKey);

export default Supabase;

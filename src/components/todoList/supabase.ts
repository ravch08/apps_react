import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://njuzfbuwzetchxtoqgtx.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qdXpmYnV3emV0Y2h4dG9xZ3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1ODU1NzksImV4cCI6MjAxMjE2MTU3OX0.sbjWVAoNl5tR_TFofOiJYlLfAlaULZF6sEHBSmGSIhk`;

export const supabase = createClient(supabaseUrl, supabaseKey);

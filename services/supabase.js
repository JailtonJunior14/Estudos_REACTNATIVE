import "react-native-url-polyfill";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://kplrmhzvlauxbcydhjtl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwbHJtaHp2bGF1eGJjeWRoanRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMjA1OTksImV4cCI6MjA1NTg5NjU5OX0.6JinwpVTul08zFU4fSR39EgVwtbX4juDPhoSl_k7uX0";

export const supabase = createClient(supabaseUrl, supabaseKey);
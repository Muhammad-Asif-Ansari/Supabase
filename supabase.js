
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const projectUrl = "https://jjtwqigzgbntuuuzqqot.supabase.co"
const projecApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqdHdxaWd6Z2JudHV1dXpxcW90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0OTAwMjEsImV4cCI6MjA1MjA2NjAyMX0.oiezr_OcUjAW9dT9RaUXo3FieAivAxoU-kpCADVo27k"
export const supabase = createClient(projectUrl, projecApiKey)
// console.log(supabase);



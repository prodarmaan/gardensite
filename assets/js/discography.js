const SUPABASE_URL = 'https://tkhrtahomhhtdrtvcpwr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRraHJ0YWhvbWhodGRydHZjcHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2NDMwMjAsImV4cCI6MjA3NjIxOTAyMH0.As0BPBVBRCis7ZyVDf9RdGOZsE4b--nv_gtMraOrFVY';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
console.log('Supabase client:', supabase);

async function loadDiscography() {
    const { data, error } = await supabaseClient
        .from('discography')
        .select('*')
        .order('id', { ascending: false });
    
    console.log('Data:', data, 'Error:', error);

    if (error) {
        console.error('Error loading discography:', error);
        return;
    }

    const grid = document.getElementById('discography-grid');
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'discography-card';
        
        card.innerHTML = `
            <img src="${item.cover}" alt="${item.artist}">
            <p>${item.artist}</p>
        `;
        
        grid.appendChild(card);
    });
}

loadDiscography();
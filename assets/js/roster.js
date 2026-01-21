const SUPABASE_URL = 'https://tkhrtahomhhtdrtvcpwr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRraHJ0YWhvbWhodGRydHZjcHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2NDMwMjAsImV4cCI6MjA3NjIxOTAyMH0.As0BPBVBRCis7ZyVDf9RdGOZsE4b--nv_gtMraOrFVY';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadRoster() {
    const { data, error } = await supabaseClient
        .from('roster')
        .select('*')
        .order('id', { ascending: false });

    console.log('Data:', data, 'Error:', error);

    if (error) {
        console.error('Error loading roster:', error);
        return;
    }

    const grid = document.getElementById('roster-grid');
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'roster-card';
        
        // default placeholder image
        const imageUrl = item.image || 'assets/graphics/placeholder.png';
        
        card.innerHTML = `
            <img src="${imageUrl}" alt="${item.name}">
            <p>${item.name}</p>
        `;
        
        grid.appendChild(card);
    });
}

loadRoster();
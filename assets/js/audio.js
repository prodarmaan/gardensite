// Initialize audio player that persists across pages
(function() {
    // Check if audio already exists in sessionStorage
    let audioElement = document.getElementById('background-audio');
    
    if (!audioElement) {
        audioElement = document.createElement('audio');
        audioElement.id = 'background-audio';
        audioElement.loop = true;
        audioElement.volume = 0.5; // Adjust volume (0.0 to 1.0)
        
        // Add your audio file path here
        audioElement.src = '/assets/misc/ost.wav';
        
        document.body.appendChild(audioElement);
        
        // Try to autoplay (may be blocked by browser)
        audioElement.play().catch(function(error) {
            console.log('Autoplay prevented. User interaction required.');
            
            // Add click listener to start audio on first user interaction
            document.addEventListener('click', function startAudio() {
                audioElement.play();
                document.removeEventListener('click', startAudio);
            }, { once: true });
        });
    }
    
    // Store current playback time before page unload
    window.addEventListener('beforeunload', function() {
        sessionStorage.setItem('audioTime', audioElement.currentTime);
    });
    
    // Resume from stored time if available
    let savedTime = sessionStorage.getItem('audioTime');
    if (savedTime && !isNaN(savedTime)) {
        audioElement.currentTime = parseFloat(savedTime);
    }
})();
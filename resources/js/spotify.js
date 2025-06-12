// Lista de pistas (puedes cambiar los nombres y las rutas)
const tracks = [
    { title: "BANDA MS  EL COLOR DE TUS OJOS VIDEO OFICIAL", url: "/resources/assets/music/BANDA MS  EL COLOR DE TUS OJOS VIDEO OFICIAL.mp3" },
    { title: "Charlie Zaa  Alma Mía  Celebración En Vivo ft Río Roma", url: "/resources/assets/music/Charlie Zaa  Alma Mía  Celebración En Vivo ft Río Roma.mp3" },
    { title: "La Sonora Dinamita  Cumbia Barulera ft Jorge Muñiz", url: "/resources/assets/music/La Sonora Dinamita  Cumbia Barulera ft Jorge Muñiz.mp3" },
    { title: "Charlie Zaa  De Cigarro en Cigarro  Celebración En Vivo ft Cristian Castro", url: "/resources/assets/music/Charlie Zaa  De Cigarro en Cigarro  Celebración En Vivo ft Cristian Castro.mp3" },
    { title: "Don Omar - Dile", url: "/resources/assets/music/Don Omar - Dile.mp3" },
    { title: "Eminem - Stan", url: "/resources/assets/music/Eminem - Stan.mp3" },
    { title: "Héroes del Silencio - Entre dos tierras (Live)", url: "/resources/assets/music/Héroes del Silencio - Entre dos tierras (Live).mp3" },
    { title: "Héroes del Silencio - Héroe de leyenda", url: "/resources/assets/music/Héroes del Silencio - Héroe de leyenda.mp3" },
    { title: "Jeanette - El Muchacho de los Ojos Tristes", url: "/resources/assets/music/Jeanette - El Muchacho de los Ojos Tristes.mp3" },
    { title: "La Factoria - Perdóname", url: "/resources/assets/music/La Factoria - Perdóname.mp3" },
    { title: "Mecano - Cruz de navajas", url: "/resources/assets/music/Mecano - Cruz de navajas.mp3" },
    { title: "Mecano - Me cuesta tanto olvidarte", url: "/resources/assets/music/Mecano - Me cuesta tanto olvidarte.mp3" },
    { title: "Rata Blanca - Mujer Amante", url: "/resources/assets/music/Rata Blanca - Mujer Amante.mp3" },
    { title: "Roberto Carlos  Amigo", url: "/resources/assets/music/Roberto Carlos  Amigo.mp3" },
    { title: "Roberto Carlos  Cama y mesa", url: "/resources/assets/music/Roberto Carlos  Cama y mesa.mp3" },
    { title: "Soda Stereo - En La Ciudad De La Furia (Remasterizado 2007)", url: "/resources/assets/music/Soda Stereo - En La Ciudad De La Furia (Remasterizado 2007).mp3" }
];

let currentTrackIndex = 0;

const playlistEl = document.getElementById('playlist');
const audioPlayer = document.getElementById('audioPlayer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Renderizar lista
tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = track.title;
    li.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack();
    });
    playlistEl.appendChild(li);
});

// Cargar pista actual
function loadTrack() {
    // Actualizar src
    audioPlayer.src = tracks[currentTrackIndex].url;
    audioPlayer.play();

    // Marcar pista activa
    document.querySelectorAll('#playlist li').forEach((li, index) => {
        li.classList.toggle('active', index === currentTrackIndex);
    });
}

// Botón anterior
prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack();
});

// Botón siguiente
nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack();
});

// Inicializar
loadTrack();

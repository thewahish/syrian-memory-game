// Syrian Memory Game - JavaScript
// Main game logic and functionality

// DOM Elements
const cardGrid = document.getElementById('cardGrid');
const movesDisplay = document.getElementById('moves');
const timeDisplay = document.getElementById('time');
const topScoreDisplay = document.getElementById('topScore');
const startButton = document.getElementById('startButton');
const messageBox = document.getElementById('messageBox');
const messageText = document.getElementById('messageText');
const restartButton = document.getElementById('restartButton');
const aboutButton = document.getElementById('aboutButton');
const aboutModal = document.getElementById('aboutModal');
const aboutModalClose = document.getElementById('aboutModalClose');
const difficultySelector = document.getElementById('difficultySelector');

// Music player elements
const musicPlayerIconButton = document.getElementById('musicPlayerIconButton');
const musicModal = document.getElementById('musicModal');
const musicModalClose = document.getElementById('musicModalClose');
const gameAudio = document.getElementById('gameAudio');
const playPauseButton = document.getElementById('playPauseButton');
const stopButton = document.getElementById('stopButton');
const prevSongButton = document.getElementById('prevSongButton');
const nextSongButton = document.getElementById('nextSongButton');
const volumeSlider = document.getElementById('volumeSlider');
const songSelector = document.getElementById('songSelector');
const seekSlider = document.getElementById('seekSlider');
const currentTimeDisplay = document.getElementById('currentTimeDisplay');
const durationDisplay = document.getElementById('durationDisplay');
const muteMusicToggleButton = document.getElementById('muteMusicToggleButton');
const musicVolumeIcon = document.getElementById('musicVolumeIcon');
const muteSfxToggleButton = document.getElementById('muteSfxToggleButton');
const sfxVolumeIcon = document.getElementById('sfxVolumeIcon');

// Fact display elements
const factDisplay = document.getElementById('factDisplay');
const factText = document.getElementById('factText');

// Audio Configuration
const BASE_AUDIO_URL = './assets/audio/music/';
const uniqueAudioFilenames = [
    'placeholder-song-1.mp3',
    'placeholder-song-2.mp3',
    'placeholder-song-3.mp3',
    'syrian-anthem.mp3',
    'revolutionary-song.mp3'
];

// Syrian Revolution Facts
const syrianRevolutionFacts = [
    "بدأت الثورة السورية في مارس 2011 بمظاهرات سلمية مطالبة بالحرية والكرامة.",
    "مدينة درعا هي الشرارة الأولى للثورة السورية بعد اعتقال أطفال كتبوا شعارات مناهضة للنظام.",
    "الشعب السوري خرج في مظاهرات حاشدة في جميع المدن السورية، رافعاً شعارات الحرية.",
    "علم الثورة السورية ذو الألوان الأخضر والأبيض والأسود مع ثلاث نجوم حمراء يرمز إلى الحرية والاستقلال.",
    "من أشهر شعارات الثورة السورية: 'الشعب يريد إسقاط النظام'.",
    "الثورة السورية ألهمت العديد من الفنانين لإنتاج أعمال تعبر عن معاناة الشعب وآماله.",
    "الخوذ البيضاء (الدفاع المدني السوري) هي منظمة إنسانية تطوعية تعمل على إنقاذ الأرواح في مناطق النزاع.",
    "المجلس الوطني السوري كان من أوائل الكيانات السياسية المعارضة التي تشكلت في الخارج.",
    "الحصار والتجويع كانا من الأساليب التي استخدمت ضد المدن الثائرة في سوريا.",
    "تسببت الثورة السورية في أكبر أزمة لاجئين في التاريخ الحديث.",
    "المسجد العمري في درعا كان نقطة تجمع رئيسية للمتظاهرين في بداية الثورة.",
    "العديد من الأطباء والمهندسين والأساتذة انضموا إلى صفوف الثورة السورية.",
    "تعتبر الثورة السورية جزءاً من الربيع العربي الذي اجتاح المنطقة.",
    "ملايين السوريين نزحوا داخلياً أو لجأوا إلى دول الجوار والعالم.",
    "العديد من المنظمات الإنسانية الدولية عملت على تقديم المساعدة للشعب السوري.",
    "الأطفال السوريون دفعوا ثمناً باهظاً للنزاع، وفقد الكثيرون طفولتهم.",
    "التعليم في سوريا تأثر بشكل كبير بسبب النزاع، وتوقفت العديد من المدارس عن العمل.",
    "العديد من المدن السورية القديمة تعرضت للدمار بسبب القصف والمعارك.",
    "العديد من المبادرات الشبابية ظهرت خلال الثورة لتقديم المساعدة والدعم للمحتاجين.",
    "المرأة السورية لعبت دوراً محورياً في الثورة، سواء في المظاهرات أو العمل الإغاثي.",
    "العديد من الناشطين السوريين استخدموا وسائل التواصل الاجتماعي لتوثيق الأحداث ونقل الحقيقة.",
    "العديد من الدول حول العالم استقبلت لاجئين سوريين وقدمت لهم المساعدة.",
    "الثورة السورية كشفت عن حجم التضامن الإنساني العالمي مع الشعب السوري.",
    "العديد من الأغاني الثورية السورية أصبحت رمزاً للصمود والأمل.",
    "المقابر الجماعية كانت شاهداً على الفظائع التي ارتكبت خلال النزاع.",
    "الشعب السوري ما زال يطالب بالحرية والعدالة والديمقراطية.",
    "العديد من الصحفيين والنشطاء فقدوا حياتهم أثناء تغطية أحداث الثورة.",
    "المجازر الكيميائية كانت نقطة سوداء في تاريخ النزاع السوري.",
    "العديد من الأطفال السوريين ولدوا في اللجوء ولم يعرفوا وطنهم الأم.",
    "رغم كل الصعوبات، ما زال الأمل يحدو الشعب السوري في تحقيق أهدافه."
];

// Difficulty configurations
const GRID_CONFIGS = {
    'easy': {
        cols: 4,
        rows: 4,
        cardValues: ['🌟', '🕊️', '🇸🇾', '🗽', '🌹', '📚', '🎵', '💚'], // 8 unique pairs for 16 cards
        initialTime: 90,
        cardSize: 100
    },
    'medium': {
        cols: 6,
        rows: 4,
        cardValues: ['🌟', '🕊️', '🇸🇾', '🗽', '🌹', '📚', '🎵', '💚', '🏛️', '📖', '🎭', '🌅'], // 12 unique pairs for 24 cards
        initialTime: 150,
        cardSize: 90
    },
    'hard': {
        cols: 8,
        rows: 6,
        cardValues: ['🌟', '🕊️', '🇸🇾', '🗽', '🌹', '📚', '🎵', '💚', '🏛️', '📖', '🎭', '🌅', '🌻', '🏺', '🎪', '🌙', '⭐', '🌺', '🏟️', '📜', '🎨', '🌸', '🏔️', '📱'], // 24 unique pairs for 48 cards
        initialTime: 240,
        cardSize: 70
    }
};

// Game state variables
let currentDifficulty = 'medium';
let currentCardValues = GRID_CONFIGS[currentDifficulty].cardValues;
let currentInitialTime = GRID_CONFIGS[currentDifficulty].initialTime;
let currentCardSize = GRID_CONFIGS[currentDifficulty].cardSize;

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timer = currentInitialTime;
let timerInterval;
let gameStarted = false;
let lockBoard = false;
let currentSongIndex = 0;
let topScore = localStorage.getItem('memoryTopScore') ? parseInt(localStorage.getItem('memoryTopScore')) : Infinity;
let topScoreTimeRemaining = localStorage.getItem('memoryTopScoreTimeRemaining') ? parseInt(localStorage.getItem('memoryTopScoreTimeRemaining')) : 0;
let isMuted = false;
let isSfxMuted = false;

// Sound effects with fallback handling
const soundEffects = {
    flip: createAudioWithFallback('./assets/audio/sfx/flip.mp3'),
    match: createAudioWithFallback('./assets/audio/sfx/match.mp3'),
    noMatch: createAudioWithFallback('./assets/audio/sfx/no-match.mp3'),
    win: createAudioWithFallback('./assets/audio/sfx/win.mp3'),
    lose: createAudioWithFallback('./assets/audio/sfx/lose.mp3')
};

// Utility Functions
function createAudioWithFallback(src) {
    const audio = new Audio();
    audio.volume = 0.5;
    audio.preload = 'auto';
    
    // Set source with error handling
    audio.addEventListener('error', () => {
        console.warn(`Could not load audio: ${src}`);
    });
    
    audio.src = src;
    return audio;
}

function playSoundEffect(effect) {
    if (!isSfxMuted && soundEffects[effect]) {
        const audio = soundEffects[effect];
        audio.currentTime = 0;
        audio.play().catch(e => console.warn("Could not play sound effect:", e));
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Game Functions
function createCards() {
    cardGrid.innerHTML = '';
    cards = [];
    const gameCardValues = [...currentCardValues, ...currentCardValues];
    shuffle(gameCardValues);

    cardGrid.style.gridTemplateColumns = `repeat(${GRID_CONFIGS[currentDifficulty].cols}, 1fr)`;
    cardGrid.style.gridTemplateRows = `repeat(${GRID_CONFIGS[currentDifficulty].rows}, 1fr)`;

    gameCardValues.forEach((value, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.value = value;
        cardElement.dataset.index = index;

        cardElement.style.width = `${currentCardSize}px`;
        cardElement.style.height = `${currentCardSize}px`;

        const cardFace = document.createElement('div');
        cardFace.classList.add('card-face');
        const cardContent = document.createElement('span');
        cardContent.classList.add('card-content');
        cardContent.textContent = value;
        cardFace.appendChild(cardContent);

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');

        cardElement.appendChild(cardFace);
        cardElement.appendChild(cardBack);

        cardElement.addEventListener('click', () => flipCard(cardElement));
        cards.push(cardElement);
        cardGrid.appendChild(cardElement);
    });
}

function flipCard(card) {
    if (!gameStarted || lockBoard || card.classList.contains('flipped') || card.classList.contains('matched')) {
        return;
    }

    playSoundEffect('flip');

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        moves++;
        movesDisplay.textContent = moves;
        lockBoard = true;
        checkForMatch();
    }
}

function getSyrianRevolutionFact() {
    if (syrianRevolutionFacts.length === 0) {
        return 'لا توجد حقائق متاحة في الوقت الحالي.';
    }
    const randomIndex = Math.floor(Math.random() * syrianRevolutionFacts.length);
    return syrianRevolutionFacts[randomIndex];
}

function displayFact() {
    factText.textContent = `✨ حقيقة: ${getSyrianRevolutionFact()}`;
    factDisplay.classList.add('active');
    setTimeout(() => {
        factDisplay.classList.remove('active');
    }, 5000);
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
        playSoundEffect('match');
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;

        displayFact();

        if (matchedPairs === currentCardValues.length) {
            endGame(true);
        }
        resetFlippedCards();
    } else {
        playSoundEffect('noMatch');
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            resetFlippedCards();
        }, 1000);
    }
}

function resetFlippedCards() {
    flippedCards = [];
    lockBoard = false;
}

function startTimer() {
    timer = currentInitialTime;
    timeDisplay.textContent = timer;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timer--;
        timeDisplay.textContent = timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
            endGame(false);
        }
    }, 1000);
}

function endGame(won) {
    gameStarted = false;
    clearInterval(timerInterval);
    
    if (won) {
        playSoundEffect('win');
        messageText.textContent = `تهانينا! لقد فزت في ${moves} حركة مع ${timer} ثانية متبقية.`;
        if (moves < topScore || (moves === topScore && timer > topScoreTimeRemaining)) {
            topScore = moves;
            topScoreTimeRemaining = timer;
            localStorage.setItem('memoryTopScore', topScore);
            localStorage.setItem('memoryTopScoreTimeRemaining', topScoreTimeRemaining);
            updateTopScoreDisplay();
            messageText.textContent += `\nأفضل نتيجة جديدة!`;
        }
    } else {
        playSoundEffect('lose');
        messageText.textContent = `انتهت اللعبة! لم تتمكن من مطابقة كل البطاقات في الوقت المحدد.`;
    }
    messageBox.classList.add('active');
}

function updateTopScoreDisplay() {
    const storedTopScore = localStorage.getItem('memoryTopScore');
    const storedTimeRemaining = localStorage.getItem('memoryTopScoreTimeRemaining');

    if (storedTopScore && storedTopScore !== 'Infinity') {
        const displayTime = storedTimeRemaining !== null ? storedTimeRemaining : '0';
        topScoreDisplay.textContent = `${storedTopScore} (${displayTime} ثانية)`;
    } else {
        topScoreDisplay.textContent = '--';
    }
}

function resetGame() {
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    timer = currentInitialTime;
    movesDisplay.textContent = moves;
    timeDisplay.textContent = timer;
    clearInterval(timerInterval);
    lockBoard = false;
    createCards();
    startButton.textContent = 'ابدأ اللعبة';
    restartButton.textContent = 'ابدأ اللعبة';
}

// Music Player Functions
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updateSeekSlider() {
    const currentTime = gameAudio.currentTime;
    const duration = gameAudio.duration;

    if (isFinite(duration) && duration > 0) {
        seekSlider.max = duration;
        seekSlider.value = currentTime;
    } else {
        seekSlider.max = 0;
        seekSlider.value = 0;
    }
    
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = isFinite(duration) ? formatTime(duration) : '0:00';
}

function loadAndPlaySong(index) {
    if (index < 0 || index >= uniqueAudioFilenames.length) {
        console.error("Invalid song index:", index);
        return;
    }
    currentSongIndex = index;
    gameAudio.pause();
    gameAudio.src = BASE_AUDIO_URL + uniqueAudioFilenames[currentSongIndex];
    songSelector.value = index;

    gameAudio.onloadedmetadata = () => {
        seekSlider.max = gameAudio.duration;
        updateSeekSlider();
    };
    gameAudio.ontimeupdate = updateSeekSlider;

    gameAudio.removeEventListener('canplaythrough', handleCanPlayThrough);
    gameAudio.addEventListener('canplaythrough', handleCanPlayThrough, { once: true });

    gameAudio.load();
}

function handleCanPlayThrough() {
    if (!isMuted && gameStarted) {
        gameAudio.play().catch(error => {
            console.warn("Autoplay prevented or failed:", error);
        });
    }
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % uniqueAudioFilenames.length;
    loadAndPlaySong(currentSongIndex);
}

function playPreviousSong() {
    currentSongIndex = (currentSongIndex - 1 + uniqueAudioFilenames.length) % uniqueAudioFilenames.length;
    loadAndPlaySong(currentSongIndex);
}

function togglePlayPauseMusic() {
    if (gameAudio.paused) {
        playMusic();
    } else {
        pauseMusic();
    }
}

function playMusic() {
    gameAudio.play().catch(error => {
        console.warn("Play failed:", error);
    });
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseMusic() {
    gameAudio.pause();
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
}

function stopMusic() {
    gameAudio.pause();
    gameAudio.currentTime = 0;
    seekSlider.value = 0;
    updateSeekSlider();
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
}

function setVolume() {
    gameAudio.volume = volumeSlider.value;
    updateVolumeIcon();
}

function updateVolumeIcon() {
    if (gameAudio.volume === 0 || isMuted) {
        musicVolumeIcon.classList.remove('fa-volume-up');
        musicVolumeIcon.classList.add('fa-volume-mute');
    } else {
        musicVolumeIcon.classList.remove('fa-volume-mute');
        musicVolumeIcon.classList.add('fa-volume-up');
    }
}

function seekMusic() {
    gameAudio.currentTime = seekSlider.value;
}

function toggleMusicMute() {
    isMuted = !isMuted;
    gameAudio.muted = isMuted;
    updateVolumeIcon();
    
    if (!isMuted && gameAudio.volume === 0) {
        gameAudio.volume = 0.5;
        volumeSlider.value = 0.5;
    }
}

function toggleSfxMute() {
    isSfxMuted = !isSfxMuted;
    
    for (const effect in soundEffects) {
        soundEffects[effect].muted = isSfxMuted;
    }

    if (isSfxMuted) {
        sfxVolumeIcon.classList.remove('fa-bell');
        sfxVolumeIcon.classList.add('fa-bell-slash');
    } else {
        sfxVolumeIcon.classList.remove('fa-bell-slash');
        sfxVolumeIcon.classList.add('fa-bell');
    }
}

function populateSongSelector() {
    songSelector.innerHTML = '';
    uniqueAudioFilenames.forEach((filename, index) => {
        const option = document.createElement('option');
        option.value = index;
        let displayName = filename.replace(/_/g, ' ').replace(/\.(mp3|wav|ogg|flac)$/i, '');
        option.textContent = displayName;
        songSelector.appendChild(option);
    });
    if (uniqueAudioFilenames.length > 0) {
        songSelector.value = 0;
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Game controls
    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', startGame);
    difficultySelector.addEventListener('change', handleDifficultyChange);

    // Music player controls
    musicPlayerIconButton.addEventListener('click', toggleMusicModal);
    musicModalClose.addEventListener('click', closeMusicModal);
    playPauseButton.addEventListener('click', togglePlayPauseMusic);
    stopButton.addEventListener('click', stopMusic);
    prevSongButton.addEventListener('click', playPreviousSong);
    nextSongButton.addEventListener('click', playNextSong);
    volumeSlider.addEventListener('input', setVolume);
    songSelector.addEventListener('change', (event) => {
        loadAndPlaySong(parseInt(event.target.value));
    });
    seekSlider.addEventListener('input', seekMusic);
    muteMusicToggleButton.addEventListener('click', toggleMusicMute);
    muteSfxToggleButton.addEventListener('click', toggleSfxMute);

    // About modal
    aboutButton.addEventListener('click', () => {
        aboutModal.style.display = 'flex';
    });
    aboutModalClose.addEventListener('click', () => {
        aboutModal.style.display = 'none';
    });

    // Audio events
    gameAudio.addEventListener('ended', playNextSong);

    // Window click events
    window.addEventListener('click', handleWindowClick);
}

function startGame() {
    resetGame();
    messageBox.classList.remove('active');
    startTimer();
    gameStarted = true;
    if (!isMuted) {
        loadAndPlaySong(currentSongIndex);
    }
}

function handleDifficultyChange(event) {
    currentDifficulty = event.target.value;
    currentCardValues = GRID_CONFIGS[currentDifficulty].cardValues;
    currentInitialTime = GRID_CONFIGS[currentDifficulty].initialTime;
    currentCardSize = GRID_CONFIGS[currentDifficulty].cardSize;
    resetGame();
}

function toggleMusicModal() {
    musicModal.classList.toggle('active');
}

function closeMusicModal() {
    musicModal.classList.remove('active');
}

function handleWindowClick(event) {
    // Close music modal if click is outside
    const isClickInsideMusicModal = musicModal.contains(event.target);
    const isClickOnMusicIconButton = musicPlayerIconButton.contains(event.target);
    
    if (!isClickInsideMusicModal && !isClickOnMusicIconButton) {
        musicModal.classList.remove('active');
    }

    // Close about modal if click is outside
    if (event.target == aboutModal) {
        aboutModal.style.display = 'none';
    }
}

// Initialization
function initializeGame() {
    // Set initial volume for audio elements
    gameAudio.volume = volumeSlider.value;
    
    // Initialize sound effects volume and mute state
    for (const effect in soundEffects) {
        soundEffects[effect].volume = 0.5;
        soundEffects[effect].muted = isSfxMuted;
    }

    // Set initial icon states
    updateVolumeIcon();
    
    if (isSfxMuted) {
        sfxVolumeIcon.classList.remove('fa-bell');
        sfxVolumeIcon.classList.add('fa-bell-slash');
    } else {
        sfxVolumeIcon.classList.remove('fa-bell-slash');
        sfxVolumeIcon.classList.add('fa-bell');
    }

    // Setup UI
    populateSongSelector();
    updateTopScoreDisplay();
    resetGame();
    
    // Set initial messages and states
    gameStarted = false;
    messageText.textContent = 'اضغط على "ابدأ اللعبة" للعب!';
    startButton.textContent = 'ابدأ اللعبة';
    restartButton.textContent = 'ابدأ اللعبة';
    messageBox.classList.add('active');

    // Setup all event listeners
    setupEventListeners();

    console.log('Syrian Memory Game initialized successfully!');
}

// Start the game when page loads
window.addEventListener('load', initializeGame);

// Error handling for audio loading
window.addEventListener('error', (event) => {
    if (event.target.tagName === 'AUDIO') {
        console.warn('Audio file could not be loaded:', event.target.src);
    }
});

// Prevent context menu on cards for better mobile experience
document.addEventListener('contextmenu', (event) => {
    if (event.target.closest('.card')) {
        event.preventDefault();
    }
});

// Additional utility functions for potential future enhancements
function saveGameState() {
    const gameState = {
        difficulty: currentDifficulty,
        topScore: topScore,
        topScoreTimeRemaining: topScoreTimeRemaining,
        musicMuted: isMuted,
        sfxMuted: isSfxMuted,
        volume: gameAudio.volume
    };
    localStorage.setItem('syrianMemoryGameState', JSON.stringify(gameState));
}

function loadGameState() {
    const savedState = localStorage.getItem('syrianMemoryGameState');
    if (savedState) {
        try {
            const gameState = JSON.parse(savedState);
            currentDifficulty = gameState.difficulty || 'medium';
            isMuted = gameState.musicMuted || false;
            isSfxMuted = gameState.sfxMuted || false;
            if (gameState.volume !== undefined) {
                gameAudio.volume = gameState.volume;
                volumeSlider.value = gameState.volume;
            }
            difficultySelector.value = currentDifficulty;
        } catch (error) {
            console.warn('Could not load saved game state:', error);
        }
    }
}

// Load saved state on initialization
window.addEventListener('load', loadGameState);

// Save state when page unloads
window.addEventListener('beforeunload', saveGameState);

function libraryApp() {
  return {
    /* ── State ── */
    isScrolled: false,
    activeSection: 'hero',
    activeMobNav: 'hero',

    heroSearchQuery: '',
    heroChips: ['Semua','Novel','Agama','Pendidikan','Anak'],
    activeHeroChip: 'Semua',

    activeRatingTab: '5',
    ratingTabs: [
      { value:'5', label:'5 Bintang' },
      { value:'4', label:'4 Bintang' },
      { value:'3', label:'3 Bintang' },
    ],

    searchModalOpen: false,
    searchQuery: '',
    popularSearchTags: ['Laskar Pelangi','Alkitab','Papua','Novel Remaja','Sains'],

    bookModalOpen: false,
    selectedBook: null,

    toastVisible: false,
    toastMessage: '',
    toastTimer: null,

    newsletterEmail: '',

    /* ── Data ── */
    books: [
      { id:1,  title:'Laskar Pelangi',         author:'Andrea Hirata',                  cat:'Novel',          rating:5,   reads:148, isNew:false, isBest:true,  color:'#7e22ce,#c084fc', icon:'fa-book' },
      { id:2,  title:'Bumi Manusia',            author:'Pramoedya Ananta Toer',          cat:'Novel',          rating:5,   reads:112, isNew:false, isBest:true,  color:'#3b0764,#7e22ce', icon:'fa-scroll' },
      { id:3,  title:'Sang Pemimpi',            author:'Andrea Hirata',                  cat:'Novel',          rating:4.8, reads:98,  isNew:false, isBest:true,  color:'#6b21a8,#a855f7', icon:'fa-feather' },
      { id:4,  title:'Negeri 5 Menara',         author:'Ahmad Fuadi',                    cat:'Novel',          rating:4.9, reads:86,  isNew:false, isBest:true,  color:'#581c87,#9333ea', icon:'fa-mosque' },
      { id:5,  title:'Ayat-Ayat Cinta',         author:'Habiburrahman El Shirazy',       cat:'Agama',          rating:4.8, reads:94,  isNew:false, isBest:true,  color:'#4a1372,#c084fc', icon:'fa-star-and-crescent' },
      { id:6,  title:'Filosofi Kopi',           author:'Dee Lestari',                    cat:'Novel',          rating:4.7, reads:72,  isNew:true,  isBest:false, color:'#92400e,#d97706', icon:'fa-mug-hot' },
      { id:7,  title:'Papua, Tanah Impianku',   author:'Alex Rumaseb',                   cat:'Sejarah Papua',  rating:4.9, reads:65,  isNew:true,  isBest:false, color:'#065f46,#10b981', icon:'fa-mountain' },
      { id:8,  title:'Matematika SD Kelas 6',   author:'Tim Penulis',                    cat:'Pendidikan',     rating:4.5, reads:54,  isNew:true,  isBest:false, color:'#1e40af,#3b82f6', icon:'fa-calculator' },
      { id:9,  title:'Kisah 25 Nabi',           author:'Syekh Ahmad Bahjat',             cat:'Agama',          rating:5,   reads:89,  isNew:true,  isBest:false, color:'#92400e,#f59e0b', icon:'fa-quran' },
      { id:10, title:'Harry Potter 1',          author:'J.K. Rowling',                   cat:'Fiksi',          rating:4.9, reads:103, isNew:true,  isBest:false, color:'#1e3a5f,#2563eb', icon:'fa-hat-wizard' },
      { id:11, title:'Cerita Anak Papua',        author:'Marthen Tapilatu',               cat:'Anak',           rating:4.8, reads:61,  isNew:true,  isBest:false, color:'#14532d,#22c55e', icon:'fa-child' },
      { id:12, title:'Buku Doa Harian',         author:'Tim Redaksi',                    cat:'Agama',          rating:4.7, reads:77,  isNew:false, isBest:true,  color:'#3d2c14,#b45309', icon:'fa-hands-praying' },
    ],

    categories: [
      { name:'Novel',             icon:'fa-book-open',         bg:'linear-gradient(135deg,#7e22ce,#c084fc)', count:320 },
      { name:'Agama & Rohani',    icon:'fa-place-of-worship',  bg:'linear-gradient(135deg,#b45309,#f59e0b)', count:185 },
      { name:'Pendidikan',        icon:'fa-graduation-cap',    bg:'linear-gradient(135deg,#1d4ed8,#60a5fa)', count:240 },
      { name:'Buku Anak',         icon:'fa-child-reaching',    bg:'linear-gradient(135deg,#0d9488,#34d399)', count:145 },
      { name:'Sejarah Papua',     icon:'fa-mountain-sun',      bg:'linear-gradient(135deg,#065f46,#6ee7b7)', count:78  },
      { name:'Sains & Teknologi', icon:'fa-flask',             bg:'linear-gradient(135deg,#1e40af,#93c5fd)', count:112 },
      { name:'Fiksi',             icon:'fa-wand-magic-sparkles',bg:'linear-gradient(135deg,#86198f,#f0abfc)',count:96  },
      { name:'Motivasi',          icon:'fa-fire-flame-curved', bg:'linear-gradient(135deg,#9a3412,#fb923c)', count:64  },
      { name:'Kesehatan',         icon:'fa-heart-pulse',       bg:'linear-gradient(135deg,#be123c,#fb7185)', count:55  },
      { name:'Puisi & Sastra',    icon:'fa-feather-pointed',   bg:'linear-gradient(135deg,#4c1d95,#a78bfa)', count:43  },
      { name:'Biografi',          icon:'fa-user-pen',          bg:'linear-gradient(135deg,#1e3a5f,#38bdf8)', count:38  },
      { name:'Memasak',           icon:'fa-utensils',          bg:'linear-gradient(135deg,#713f12,#fbbf24)', count:29  },
    ],

    testimonials: [
      { text:'Perpustakaan ini luar biasa! Saya dan anak-anak sering datang setiap minggu. Bukunya lengkap dan gratis, sungguh berkah buat kami.',    name:'Maria Yosef',         role:'Ibu Rumah Tangga, Jayapura', initial:'M' },
      { text:'Sebagai pelajar, FHL Library sangat membantu. Buku pelajaran dan novel tersedia lengkap. Kak Diana baik sekali!',                        name:'Jonas Rumbiak',       role:'Siswa SMA N 1 Jayapura',    initial:'J' },
      { text:'Tempat yang nyaman untuk membaca dan belajar. Koleksi buku rohani sangat lengkap dan selalu diperbarui. Tuhan memberkati!',              name:'Pendeta Samuel Wonda',role:'Gembala Sidang',             initial:'S' },
      { text:'Anak-anak di kampung kami jadi lebih suka membaca sejak ada perpustakaan ini. Terima kasih Diana!',                                      name:'Elisabeth Numberi',   role:'Guru SD, Sentani',           initial:'E' },
      { text:'Buku sejarah Papua yang langka bisa saya temukan di sini. Luar biasa koleksinya!',                                                       name:'Markus Ap',           role:'Mahasiswa UNCEN',            initial:'M' },
      { text:'FHL Library adalah tempat favorit saya. Bukunya bersih, rapinya terjaga, dan pengurusnya ramah semua.',                                  name:'Yuliana Kogoya',      role:'Pegawai Negeri',             initial:'Y' },
    ],

    /* ── Computed-like getters ── */
    get bestBooks() {
      return this.books.filter(b => b.isBest);
    },
    get newBooks() {
      return this.books.filter(b => b.isNew);
    },
    get ratedBooks() {
      const sorted = [...this.books].sort((a,b) => b.rating - a.rating);
      if (this.activeRatingTab === '5') return sorted.filter(b => b.rating >= 4.8);
      if (this.activeRatingTab === '4') return sorted.filter(b => b.rating >= 4.5 && b.rating < 4.8);
      return sorted.filter(b => b.rating < 4.5);
    },
    get searchResults() {
      const q = this.searchQuery.trim().toLowerCase();
      if (!q) return [];
      return this.books.filter(b =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.cat.toLowerCase().includes(q)
      ).slice(0, 5);
    },

    /* ── Methods ── */
    init() {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 20;

        const sections = ['hero','best-books','new-books','categories','how-it-works','about'];
        let current = 'hero';
        sections.forEach(id => {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top < 120) current = id;
        });
        this.activeSection = current;
      });
    },

    starHtml(r) {
      let s = '';
      const full = Math.floor(r), half = r % 1 >= 0.5;
      for (let i = 0; i < full; i++) s += '<i class="fa-solid fa-star"></i>';
      if (half) s += '<i class="fa-solid fa-star-half-stroke"></i>';
      return s;
    },

    openSearch() {
      this.searchModalOpen = true;
      this.$nextTick(() => this.$refs.searchInput && this.$refs.searchInput.focus());
    },
    closeSearch() {
      this.searchModalOpen = false;
      this.searchQuery = '';
    },
    openSearchWithQuery() {
      this.searchQuery = this.heroSearchQuery;
      this.openSearch();
    },

    openBook(id) {
      this.selectedBook = this.books.find(b => b.id === id) || null;
      this.bookModalOpen = true;
    },
    closeBook() {
      this.bookModalOpen = false;
      this.selectedBook = null;
    },

    borrowBook(title) {
      this.showToast(`Kunjungi perpustakaan untuk meminjam "${title}" 📖`);
    },

    showToast(msg) {
      this.toastMessage = msg;
      this.toastVisible = true;
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => { this.toastVisible = false; }, 3000);
    },

    scrollToSection(id) {
      this.activeMobNav = id;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
  };
}
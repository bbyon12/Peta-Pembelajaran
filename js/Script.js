/*
Nama file : Script.js
Tanggal ngoding: 25 December 2025
Kelas : 05TPLP017
Kelompok : 8
Anggota : FAIQ AFLAH NADIF, RUDI SAFRIAN, YOHANES HUTAGAOL
Deskripsi : File JavaScript utama berisi fungsi navigasi, kalkulator, dan event listener untuk interaktivitas
*/

// === LOGIKA NAVIGASI (SPA) ===
// Fungsi ini menyembunyikan semua halaman dan hanya menampilkan halaman yang dipilih
function navigateTo(pageId) {
    // 1. Ambil semua elemen dengan class 'page'
    const pages = document.querySelectorAll('.page');
    
    // 2. Sembunyikan semuanya
    pages.forEach(page => {
        page.classList.add('hidden');
    });

    // 3. Tampilkan halaman yang dituju
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        // Scroll otomatis ke paling atas agar nyaman dibaca
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// === LOGIKA KALKULATOR (BAB 5) ===
// Fungsi sederhana untuk menjumlahkan dua angka
function hitung() {
    // Ambil nilai dari input, jika kosong anggap 0
    const num1 = parseFloat(document.getElementById('angka1').value) || 0;
    const num2 = parseFloat(document.getElementById('angka2').value) || 0;
    
    // Jumlahkan
    const hasil = num1 + num2;
    
    // Tampilkan hasil di elemen span
    document.getElementById('hasil').innerText = hasil;
}

// === LOGIKA EVENT LISTENER (BAB 6) ===
// Kita gunakan DOMContentLoaded untuk memastikan elemen HTML sudah siap sebelum script dijalankan
document.addEventListener('DOMContentLoaded', () => {
    const btnDemo = document.getElementById('btn-demo');
    const teksDemo = document.getElementById('teks-demo');

    // Cek apakah tombol ada di halaman (untuk menghindari error di halaman lain)
    if (btnDemo) {
        btnDemo.addEventListener('click', () => {
            // Ubah teks
            teksDemo.innerText = "Wow! Teks berubah karena JavaScript! 🎉";
            // Ubah warna teks
            teksDemo.style.color = "#ff4081"; // Pink
            // Ubah status tombol
            btnDemo.innerText = "Sudah Diklik";
            btnDemo.style.backgroundColor = "#ccc";
            btnDemo.disabled = true;
        });
    }
});

// === INISIALISASI ===
// Secara default, buka halaman 'home' saat website pertama kali dimuat
navigateTo('home');

/*
Nama file : bab789-script.js
Tanggal ngoding: 4 Januari 2026
Deskripsi : JavaScript Khusus untuk bab789.html - Interaktivitas Form dan Galeri
*/

// Inisialisasi Lucide Icons
lucide.createIcons();

// 7.3 LOGIKA VALIDASI FORM REGISTRASI
const form = document.getElementById('registerForm');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');
const successMsg = document.getElementById('successMessage');

function showError(inputElement, show) {
    const errorText = inputElement.parentElement.querySelector('.error-msg') || inputElement.nextElementSibling;
    if (show) {
        inputElement.classList.add('border-comic-red', 'bg-red-50');
        inputElement.classList.remove('border-black');
        if(errorText) errorText.classList.remove('hidden');
    } else {
        inputElement.classList.remove('border-comic-red', 'bg-red-50');
        inputElement.classList.add('border-black');
        if(errorText) errorText.classList.add('hidden');
    }
}

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        successMsg.classList.add('hidden');

        // Email Validasi
        if (!emailInput.value || !emailInput.value.includes('@')) {
            showError(emailInput, true); isValid = false;
        } else showError(emailInput, false);

        // Password Length
        if (passInput.value.length < 8) {
            showError(passInput, true); isValid = false;
        } else showError(passInput, false);

        // Password Match
        if (confirmInput.value !== passInput.value || confirmInput.value === '') {
            showError(confirmInput, true); isValid = false;
        } else showError(confirmInput, false);

        if (isValid) {
            successMsg.classList.remove('hidden');
            setTimeout(() => {
                form.reset();
                successMsg.classList.add('hidden');
                [emailInput, passInput, confirmInput].forEach(el => showError(el, false));
            }, 3000);
        }
    });

    [emailInput, passInput, confirmInput].forEach(input => {
        input.addEventListener('input', () => showError(input, false));
    });
}

// 7.4 LOGIKA GALERI INTERAKTIF
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('imgFull');
const captionText = document.getElementById('caption');

function openModal(src, text) {
    modalImg.src = src;
    captionText.innerText = text;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.firstElementChild.classList.add('scale-100');
    modal.firstElementChild.classList.remove('scale-90');
}

function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

if (modal) {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); });
}

// === WEBSITE TANPA LOGIN - SEMUA HALAMAN BEBAS DIAKSES ===

// Logika Login Sederhana - DINONAKTIFKAN
// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('loginForm');
//     // ... kode login dihapus
// });

// Helper function untuk mendapatkan base path
function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/materi/')) {
        return '../';
    }
    return '';
}

// DEBUG: Force clear localStorage untuk testing
// localStorage.clear(); // Matikan untuk production

// Fungsi untuk mengecek status login - DINONAKTIFKAN
// function checkAuth() {
//     // ... kode checkAuth dihapus
// }

// Jalankan checkAuth segera saat script dimuat - DINONAKTIFKAN
// checkAuth();

// Fungsi Logout - DINONAKTIFKAN
// function logout() {
//     // ... kode logout dihapus
// }

// Jalankan pengecekan otomatis saat script dimuat - DINONAKTIFKAN
// checkAuth();

// Tampilkan nama user dari localStorage di halaman profile
document.addEventListener('DOMContentLoaded', function() {
    const user = localStorage.getItem('username');
    if(user && document.getElementById('displayUsername')) {
        document.getElementById('displayUsername').innerText = user.toUpperCase();
    }
});

// === BAB 8: JDM LEGENDS GARAGE LOGIC ===

// 1. DATA PRODUK (Database Simulasi)
const jdmCars = [
    { id: 1, name: "Toyota Supra MK4", price: 1500000000, category: "LEGEND", speed: "4.6s", hp: "320 HP", image: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?q=80&w=600&auto=format&fit=crop", desc: "Legenda bermesin 2JZ-GTE. Mobil sport paling ikonik dari era 90-an." },
    { id: 2, name: "Nissan GT-R R34", price: 2800000000, category: "GODZILLA", speed: "4.9s", hp: "276 HP", image: "https://ohlinsindonesia.com/wp-content/uploads/2023/02/Nissan-GTR-R34.jpg", desc: "Godzilla kembali! Dilengkapi dengan sistem ATTESA E-TS Pro AWD." },
    { id: 3, name: "Mazda RX-7 FD", price: 1200000000, category: "ROTARY", speed: "5.1s", hp: "252 HP", image: "https://imgx.gridoto.com/crop/0x309:1632x1359/700x465/photo/2020/08/08/807940849.jpg", desc: "Mesin Rotary 13B-REW twin-turbo. Keseimbangan sasis sempurna." },
    { id: 4, name: "Honda NSX Type R", price: 3500000000, category: "SUPERCAR", speed: "4.4s", hp: "290 HP", image: "https://images.pistonheads.com/nimg/40001/114645_25_Years_of_Type_R_-_The_1991_NSX-R_NA1.jpg", desc: "Ferrari-nya Jepang. Dikembangkan dengan masukan dari Ayrton Senna." },
    { id: 5, name: "Subaru Impreza 22B", price: 1800000000, category: "RALLY", speed: "4.7s", hp: "280 HP", image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=600&auto=format&fit=crop", desc: "Monster reli jalanan. Body wide-body asli dan handling AWD." },
    { id: 6, name: "Mitsubishi Evo IX", price: 900000000, category: "RALLY", speed: "4.8s", hp: "286 HP", image: "https://moladin.com/wp-content/uploads/2024/02/Saber-Great-of-Indonesia-evoIX-nmaa-1.jpg", desc: "Rival abadi Subaru. Mesin 4G63T MIVEC yang legendaris." }
];

// Format Rupiah
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(number);
}

// 2. RENDER PRODUCTS
function renderJDMCars() {
    const grid = document.getElementById('product-grid');
    if (!grid) return; // Skip jika tidak ada di halaman ini

    grid.innerHTML = jdmCars.map(car => `
        <article class="bg-white border-4 border-black shadow-hard group hover:-translate-y-2 hover:shadow-hard-hover transition-all duration-300">
            <div class="relative overflow-hidden border-b-4 border-black h-48">
                <img src="${car.image}" alt="${car.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <span class="absolute top-2 left-2 bg-jdm-yellow text-xs font-bold px-2 py-1 border-2 border-black">${car.category}</span>
            </div>
            <div class="p-4">
                <h3 class="font-comic text-2xl mb-1">${car.name}</h3>
                <p class="text-jdm-red font-bold text-lg mb-4">${formatRupiah(car.price)}</p>
                <div class="flex gap-2">
                    <button onclick="openJDMDetail(${car.id})" class="flex-1 bg-white text-black border-2 border-black py-2 font-bold hover:bg-black hover:text-white transition-colors">DETAIL</button>
                    <button onclick="addToJDMCart(${car.id})" class="bg-jdm-red text-white border-2 border-black px-3 hover:bg-white hover:text-jdm-red transition-colors"><i data-lucide="plus"></i></button>
                </div>
            </div>
        </article>
    `).join('');
    // Re-init icons setelah render
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// 3. LOGIKA KERANJANG (CART LOGIC)
let jdmCart = []; // Array untuk menyimpan item belanja

// Fungsi Tambah ke Cart (Logic)
function addToJDMCart(id) {
    const car = jdmCars.find(c => c.id === id);
    const existingItem = jdmCart.find(item => item.id === id);

    if (existingItem) {
        existingItem.qty++; // Jika sudah ada, tambah jumlahnya
    } else {
        jdmCart.push({ ...car, qty: 1 }); // Jika belum, masukkan item baru
    }

    updateJDMCartUI();

    // Animasi badge
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.classList.remove('animate-bounce');
        void badge.offsetWidth;
        badge.classList.add('animate-bounce');
    }
}

// Fungsi Update UI Keranjang
function updateJDMCartUI() {
    // 1. Update Badge Count
    const totalQty = jdmCart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById('cart-count');
    if (badge) badge.innerText = totalQty;

    // 2. Render List Item di Modal
    const container = document.getElementById('cartItemsContainer');

    if (!container) return; // Skip jika tidak ada di halaman ini

    if (jdmCart.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-500 font-bold py-10">Keranjang masih kosong nih! 🚗</p>`;
        const totalEl = document.getElementById('cartTotal');
        if (totalEl) totalEl.innerText = "Rp 0";
        return;
    }

    container.innerHTML = jdmCart.map(item => `
        <div class="flex gap-3 bg-white border-2 border-black p-2 items-center shadow-sm">
            <img src="${item.image}" class="w-16 h-16 object-cover border border-black">
            <div class="flex-1">
                <h4 class="font-bold text-sm leading-tight">${item.name}</h4>
                <p class="text-jdm-red text-xs font-bold">${formatRupiah(item.price)}</p>
            </div>
            <!-- Kontrol QTY -->
            <div class="flex items-center gap-2">
                <button onclick="decreaseJDMItem(${item.id})" class="w-6 h-6 bg-gray-200 border border-black font-bold hover:bg-red-200">-</button>
                <span class="font-comic text-lg w-4 text-center">${item.qty}</span>
                <button onclick="increaseJDMItem(${item.id})" class="w-6 h-6 bg-jdm-yellow border border-black font-bold hover:bg-yellow-400">+</button>
            </div>
        </div>
    `).join('');

    // 3. Update Total Harga
    const totalPrice = jdmCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const totalEl = document.getElementById('cartTotal');
    if (totalEl) totalEl.innerText = formatRupiah(totalPrice);
}

// Fungsi Tambah Qty (+)
function increaseJDMItem(id) {
    const item = jdmCart.find(i => i.id === id);
    if (item) {
        item.qty++;
        updateJDMCartUI();
    }
}

// Fungsi Kurang Qty (-)
function decreaseJDMItem(id) {
    const item = jdmCart.find(i => i.id === id);
    if (item) {
        item.qty--;
        if (item.qty === 0) {
            // Hapus item jika qty 0
            jdmCart = jdmCart.filter(i => i.id !== id);
        }
        updateJDMCartUI();
    }
}

// 4. MODAL LOGIC (Detail & Cart)

// Product Modal
function openJDMDetail(id) {
    const car = jdmCars.find(c => c.id === id);
    const modal = document.getElementById('productModal');
    if (!modal) return;

    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDesc = document.getElementById('modalDesc');
    const modalCategory = document.getElementById('modalCategory');
    const modalSpeed = document.getElementById('modalSpeed');
    const modalHp = document.getElementById('modalHp');

    if (modalImg) modalImg.src = car.image;
    if (modalTitle) modalTitle.innerText = car.name;
    if (modalPrice) modalPrice.innerText = formatRupiah(car.price);
    if (modalDesc) modalDesc.innerText = car.desc;
    if (modalCategory) modalCategory.innerText = car.category;
    if (modalSpeed) modalSpeed.innerText = car.speed;
    if (modalHp) modalHp.innerText = car.hp;

    // Re-bind tombol add to cart di modal detail
    const btn = document.getElementById('btnAddToCart');
    if (btn) {
        btn.onclick = () => { addToJDMCart(car.id); closeJDMModal(); openJDMCart(); }; // Auto buka cart setelah add
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeJDMModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// Cart Modal
function openJDMCart() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeJDMCart() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// Initialize JDM functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Init Lucide icons if available
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Render JDM cars if on bab8 page
    renderJDMCars();

    // Add click outside to close modals
    window.onclick = function(event) {
        const productModal = document.getElementById('productModal');
        const cartModal = document.getElementById('cartModal');

        if (event.target == productModal) closeJDMModal();
        if (event.target == cartModal) closeJDMCart();
    }
});

        function openModal(imageSrc, altText) {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('imgFull');
            const caption = document.getElementById('caption');

            modal.classList.remove('hidden');
            modal.classList.add('flex');
            modalImg.src = imageSrc;
            caption.innerHTML = altText;
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('imageModal');
            if (event.target == modal) {
                closeModal();
            }
        }

        // Initialize Lucide icons
        document.addEventListener('DOMContentLoaded', function() {
            lucide.createIcons();
        });
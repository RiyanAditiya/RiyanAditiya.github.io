document.addEventListener('DOMContentLoaded', function() {
        
    // 1. Ambil elemen dengan ID
    // Pastikan ID 'menuToggle' ada di elemen div/checkbox hamburger Anda
    const menuToggle = document.getElementById('menuToggle'); 
    // Pastikan ID 'mainMenu' ada di elemen ul Anda
    const mainMenu = document.getElementById('mainMenu');     
        
    // PERBAIKAN PENTING: Lakukan pengecekan elemen
    // Jika browser tidak menemukan salah satu ID, kode di bawahnya akan error.
    if (!menuToggle || !mainMenu) {
        // Jika ada yang hilang, kita hentikan eksekusi JS.
        console.error("Error: Elemen 'menuToggle' atau 'mainMenu' tidak ditemukan di HTML.");
        return; 
    }

    // 2. Tambahkan Event Listener ke Ikon Hamburger
    menuToggle.addEventListener('click', function() {
            
        // a. Toggle kelas 'open' pada UL untuk membuka/menutup menu.
        mainMenu.classList.toggle('open');
            
        // b. Kontrol Body Scroll: Cegah scrolling pada body saat menu terbuka.
        if (mainMenu.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = ''; // Mengembalikan scroll normal
        }
    });

    // 3. Tutup Menu Otomatis Saat Link Diklik
    const menuLinks = mainMenu.querySelectorAll('a');
        
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
                
            // Hapus kelas 'open' untuk menutup menu
            mainMenu.classList.remove('open');
                
            // Hapus kontrol body scroll
                document.body.style.overflow = '';
                
            // Reset status checkbox agar animasi X kembali ke 3 garis
            const checkbox = menuToggle.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = false;
            }
        });
    });

});
// Salin nomor ke clipboard
document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const number = this.getAttribute('data-number');
            
            // Salin ke clipboard
            navigator.clipboard.writeText(number).then(() => {
                // Tampilkan toast dengan animasi yang lebih lambat
                showToast('✅ Nomor berhasil disalin!');
                
                // Animasi tombol yang lebih halus
                const originalHTML = this.innerHTML;
                const originalBg = this.style.background;
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.style.background = 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)';
                
                // Kembalikan setelah 1.5 detik
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.style.background = originalBg;
                }, 1500);
            }).catch(err => {
                console.error('Gagal menyalin: ', err);
                showToast('❌ Gagal menyalin');
            });
        });
    });
    
    // Fungsi toast notification dengan animasi yang lebih lambat
    function showToast(message) {
        toastText.textContent = message;
        toast.classList.add('show');
        
        // Toast bertahan lebih lama
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }
    
    // Efek klik untuk tombol yang lebih halus
    const buttons = document.querySelectorAll('.copy-btn, .download-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Tambahkan efek tekan yang lebih halus
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                if (this.classList.contains('copy-btn')) {
                    this.style.transform = 'scale(1.1)';
                } else {
                    this.style.transform = '';
                }
            }, 200);
        });
    });
    
    // Hover effect untuk payment items
    const paymentItems = document.querySelectorAll('.payment-item');
    paymentItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Animasi tambahan saat hover tombol
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.style.background.includes('#48bb78')) {
                this.style.transform = 'scale(1.05) rotate(2deg)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.style.background.includes('#48bb78')) {
                this.style.transform = 'scale(1) rotate(0)';
            }
        });
    });
});
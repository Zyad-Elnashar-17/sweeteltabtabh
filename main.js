// وظيفة فتح الصورة في الـ Lightbox
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // منع التمرير عند فتح الصورة
}

// وظيفة إغلاق الـ Lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // إعادة التمرير
}

// إغلاق الـ Lightbox عند الضغط على زر Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});




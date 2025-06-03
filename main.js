document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const result = document.getElementById('formResult');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const message = form.message.value.trim();

        if (!name || !phone || !message) {
            result.textContent = "Lütfen tüm alanları doldurun.";
            result.style.color = "#dc2626";
            return;
        }

        // Mailto ile gönderim
        const mail = "haceknode@gmail.com";
        const subject = encodeURIComponent("Yeni İletişim Formu Mesajı");
        const body = encodeURIComponent(
            `İsim Soyisim: ${name}\nTelefon: ${phone}\nAçıklama:\n${message}`
        );
        window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;

        result.textContent = "Mail uygulamanız açıldı. Teşekkürler!";
        result.style.color = "#2563eb";
        form.reset();
    });
});

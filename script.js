// Esperamos a que todo el HTML cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. MANEJO DEL FORMULARIO DE CONTACTO
    // ==========================================
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevenir que la página se recargue al enviar
            event.preventDefault();

            // Aquí capturaríamos los datos si tuviéramos un backend
            const nombre = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;

            // Simulación de envío (Feedback para el usuario)
            if(nombre && email) {
                alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje. Nos pondremos en contacto contigo en ${email} pronto.`);
                
                // Limpiar el formulario
                contactForm.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }

    // ==========================================
    // 2. EFECTO DEL MENÚ AL HACER SCROLL
    // ==========================================
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            // Si bajamos más de 50px, añadimos una clase para dar sombra/color
            header.classList.add('scrolled');
        } else {
            // Si estamos arriba, quitamos la clase
            header.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 3. SMOOTH SCROLL PARA VÍNCULOS INTERNOS
    // ==========================================
    // Esto asegura que el desplazamiento sea suave en todos los navegadores
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Ajuste del offset para que el menú fijo no tape el título de la sección
                const headerOffset = 70; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    console.log("Sistema Trabajo Vivo: Online y listo 🚀");
});
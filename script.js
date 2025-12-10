// Esperamos a que todo el HTML cargue antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // 1. MANEJO DEL FORMULARIO DE CONTACTO (ENVÍO REAL)
  // ==========================================
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita recargar la página

      // El correo donde llegará la info (Cámbialo aquí cuando quieras)
      const destino = "donweasxd@gmail.com";
      const endpoint = `https://formsubmit.co/ajax/${destino}`;

      // Cambiamos el botón para que sepa que está cargando
      const boton = contactForm.querySelector("button");
      const textoOriginal = boton.innerHTML;
      boton.innerHTML =
        'Enviando... <i class="fa-solid fa-spinner fa-spin"></i>';
      boton.disabled = true;

      // Recopilamos los datos
      const formData = new FormData(contactForm);

      // Enviamos los datos al servidor
      fetch(endpoint, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          // Si todo sale bien:
          alert(
            "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto."
          );
          contactForm.reset(); // Limpia el formulario
        })
        .catch((error) => {
          // Si algo falla:
          alert("Hubo un error al enviar. Por favor intenta nuevamente.");
          console.error("Error:", error);
        })
        .finally(() => {
          // Restauramos el botón
          boton.innerHTML = textoOriginal;
          boton.disabled = false;
        });
    });
  }

  // ==========================================
  // 2. EFECTO DEL MENÚ AL HACER SCROLL
  // ==========================================
  const header = document.querySelector(".main-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Si bajamos más de 50px, añadimos una clase para dar sombra/color
      header.classList.add("scrolled");
    } else {
      // Si estamos arriba, quitamos la clase
      header.classList.remove("scrolled");
    }
  });

  // ==========================================
  // 3. SMOOTH SCROLL PARA VÍNCULOS INTERNOS
  // ==========================================
  // Esto asegura que el desplazamiento sea suave en todos los navegadores
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Ajuste del offset para que el menú fijo no tape el título de la sección
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
  // ==========================================
  // 4. DESPLEGAR EQUIPO (CON ANIMACIÓN DE CIERRE)
  // ==========================================
  const btnConocenos = document.getElementById("btn-conocenos");
  const teamContainer = document.getElementById("team-container");

  if (btnConocenos && teamContainer) {
    btnConocenos.addEventListener("click", function (e) {
      e.preventDefault();

      // Verificamos si ya está visible
      if (teamContainer.classList.contains("team-visible")) {
        // --- PROCESO DE CERRAR (NUEVO) ---

        // 1. Cambiamos el texto del botón inmediatamente
        btnConocenos.textContent = "Conócenos más";

        // 2. Quitamos la clase de visibilidad para que la opacidad baje a 0
        // (Gracias a que en CSS pusiste 'transition: opacity 1.2s', esto será suave)
        teamContainer.classList.remove("team-visible");

        // 3. Esperamos 1200ms (1.2 segundos) a que termine el desvanecimiento
        setTimeout(function () {
          // Solo después de esperar, quitamos la caja del espacio físico
          teamContainer.style.display = "none";
        }, 1200); // Este número debe coincidir con tu tiempo en el CSS
      } else {
        // --- PROCESO DE ABRIR ---

        // 1. Primero hacemos que exista en el espacio físico
        teamContainer.style.display = "block";

        // 2. Un pequeño respiro para que el navegador procese el cambio de display
        setTimeout(() => {
          // Agregamos la clase para que suba la opacidad a 1
          teamContainer.classList.add("team-visible");
        }, 10);

        // 3. Cambiamos el texto del botón
        btnConocenos.textContent = "Ocultar equipo";
      }
    });
  }
  console.log("Sistema Trabajo Vivo: Online y listo 🚀");
});

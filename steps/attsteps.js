const { I } = inject();

// Escenario 1: Abrir el sitio
Given('abro el sitio web de AT&T', () => {
  I.amOnPage('https://miattweb.att.com.mx/');
  I.wait(3);
});

// Escenario 2: Iniciar sesión
When('ingreso mis credenciales de usuario', () => {
  I.waitForElement('#username', 10);
  I.fillField('#username', '5626352830'); // ← reemplaza si es necesario
  I.waitForElement('#pwd', 10);
  I.fillField('#pwd', 'Cuha170100*'); // ← reemplaza si es necesario
  I.waitForElement('button[type="submit"]:not([disabled])', 10);
  I.click('button[type="submit"]');
  I.wait(5);
});

Then('debería acceder al panel de mi cuenta', () => {
  I.waitForElement('a[href="#/consume"]', 10);
  I.see('Mis consumos'); // ← texto visible tras iniciar sesión
});

// Escenario base para sesión iniciada
Given('estoy en mi cuenta de AT&T', () => {
  I.amOnPage('https://miattweb.att.com.mx/');
  I.waitForElement('#username', 10);
  I.fillField('#username', '5626352830');
  I.waitForElement('#pwd', 10);
  I.fillField('#pwd', 'Cuha170100*');
  I.waitForElement('button[type="submit"]:not([disabled])', 10);
  I.click('button[type="submit"]');
  I.wait(5);
});

// Navegación dinámica
When('navego a la sección {string}', (seccion) => {
  if (seccion === 'Mis consumos') {
    I.waitForElement('a[href="#/consume"]', 10);
    I.click('a[href="#/consume"]');
  } else if (seccion === 'Mis facturas') {
    I.waitForElement('a[href="#/invoice-history"]', 10);
    I.click('a[href="#/invoice-history"]');
  }
  I.wait(3);
});

// Descarga desde sección "Mis consumos"
When('descargo el archivo PDF de consumos', () => {
  I.waitForElement('.guage-level-3-right-text', 10);
  I.click('.guage-level-3-right-text');
  I.wait(5);
});

// Descarga desde sección "Mis facturas"
When('descargo el archivo PDF de la factura actual', () => {
  I.waitForElement('a.d-block img[alt="download"]', 10);
  I.click('a.d-block img[alt="download"]');
  I.wait(5);
});

// Validación de mensaje del modal de éxito
Then('el mensaje de descarga debe ser {string}', (mensaje) => {
  I.waitForElement('.popup-container', 10);
  I.see(mensaje);
  I.click('.popup-btn'); // cerrar modal (botón OK)
  I.wait(1);
});

// Cambio de mes
When('selecciono el mes {string}', async (mes) => {
  I.waitForElement('select', 10);
  const opciones = await I.grabTextFromAll('select option');
  console.log('Opciones disponibles:', opciones);
  await I.selectOption('select', mes);
  I.wait(3);
});

Then('deberían mostrarse las facturas del mes seleccionado', () => {
  I.seeElement('table'); // puedes cambiar por otro contenedor si es necesario
});
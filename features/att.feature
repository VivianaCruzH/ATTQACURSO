Feature: Navegación y gestión de cuenta en AT&T

  Scenario: Abrir el sitio principal de AT&T
    Given abro el sitio web de AT&T

  Scenario: Iniciar sesión en mi cuenta
    Given abro el sitio web de AT&T
    When ingreso mis credenciales de usuario
    Then debería acceder al panel de mi cuenta

  Scenario: Ver mis consumos y descargar PDF
    Given estoy en mi cuenta de AT&T
    When navego a la sección "Mis consumos"
    And descargo el archivo PDF de consumos
    Then el mensaje de descarga debe ser "Se han descargado los consumos correctamente"

  Scenario: Ver mis facturas y descargar PDF
    Given estoy en mi cuenta de AT&T
    When navego a la sección "Mis facturas"
    And descargo el archivo PDF de la factura actual
    Then el mensaje de descarga debe ser "Se ha descargado la factura correctamente"

  Scenario: Cambiar mes en facturas
    Given estoy en mi cuenta de AT&T
    When navego a la sección "Mis facturas"
    And selecciono el mes "Marzo"
    Then deberían mostrarse las facturas del mes seleccionado
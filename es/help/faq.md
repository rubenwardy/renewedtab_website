---
title: Ayuda y FAQ
layout: article
redirect_from:
  - /es/help/
---

# Preguntas Frecuentes  <!-- omit in toc -->


- [¿Cómo habilito el desenfoque en Firefox?](#cómo-habilito-el-desenfoque-en-firefox)
- [¿Cómo puedo ubicar widgets fuera de la cuadrícula / en la parte inferior de la pantalla?](#cómo-puedo-ubicar-widgets-fuera-de-la-cuadrícula--en-la-parte-inferior-de-la-pantalla)
- [¿Por qué la extensión solicita leer todos los datos de un sitio web?](#por-qué-la-extensión-solicita-leer-todos-los-datos-de-un-sitio-web)
- [¿Por qué sigue apareciendo un fondo que he bloqueado?](#por-qué-sigue-apareciendo-un-fondo-que-he-bloqueado)
- [¿Por qué no aparece la imagen de fondo?](#por-qué-no-aparece-la-imagen-de-fondo)
- [¿Por qué no admite sincronización de navegador?](#por-qué-no-admite-sincronización-de-navegador)
- [¿Por qué no está disponible para X navegador?](#por-qué-no-está-disponible-para-x-navegador)
- [¿Por qué me sale un error al ingresar una URL personalizada en la versión web?](#por-qué-me-sale-un-error-al-ingresar-una-url-personalizada-en-la-versión-web)
- [How do I add custom widgets?](#how-do-i-add-custom-widgets)
- [Solicitudes de Funciones, Informe de Errores, y Asistencia](#solicitudes-de-funciones-informe-de-errores-y-asistencia)


## ¿Cómo habilito el desenfoque en Firefox?

El desenfoque requiere activar una característica experimental en Firefox, llamada
`backdrop-filter`:

1. Abra una nueva pestaña y escriba `about:config` en la barra de dirección.
2. Acepte la advertencia.
3. Active `layout.css.backdrop-filter.enabled`.
4. Abra y reabra Firefox.

Por favor tenga en cuenta que puede experimentar problemas visuales con esto, ya que es una característica inestable de Firefox, por lo cual no está habilitada por defecto.


## ¿Cómo puedo ubicar widgets fuera de la cuadrícula / en la parte inferior de la pantalla?

Renewed Tab requiere que todos los widgets estén en la cuadrícula. Esto es genial para
la experiencia del usuario, ya que es simple, pero dificulta hacer ciertas cosas.

Para hacer que un widget parezca estar la parte inferior de la pantalla,
puede usar el widget invisible para agregar espacio vertical entre widgets.


## ¿Por qué la extensión solicita leer todos los datos de un sitio web?

Algunos widgets, como Feed, requieren que se cargue información desde una URL.
Los navegadores web tienden a tener sistemas de permisos estrictos, por lo
que una extensión de navegador necesita solicitar permiso para hacer ciertas cosas.
Ponerse en contacto con un sitio web es una de esas cosas.

Por ejemplo, para cargar el servicio de noticias de bbc.co.uk,
la extensión debe tener permiso para acceder a bbc.co.uk.

Renewed Tab no lee ninguna de su información personal o historial
de los sitios web a los que otorga acceso. Simplemente realiza una
solicitud web al sitio web para cargar el contenido.

Mensajes de ejemplo:

> "Renewed Tab" ha solicitado permisos adicionales.\\
> Podría:
> - Leer y cambiar sus datos en feeds.bbci.co.uk

> Renewed Tab solicita permisos adicionales.\\
> Quiere:
> - Acceder a tus datos para feeds.bbci.co.uk


## ¿Por qué sigue apareciendo un fondo que he bloqueado?

El servidor de API de Renewed Tab solo tiene 4 imágenes disponibles para elegir a la vez.
Si ha bloqueado muchas imágenes, es posible que termine con que todas
las imágenes disponibles están bloqueadas - si ese es el caso, entonces
se utilizará la primer imagen.

La razón por la que se hace esto es para evitar llamar demasiado la API de Unsplash.


## ¿Por qué no aparece la imagen de fondo?

Extensiones como DarkReader pueden tener conflictos con la imagen de fondo,
usted puede deshabilitarlas por sitio.

Alternativamente, puede ser un problema de conexión con la API de Renewed Tab o Unsplash,
o un problema de configuración.


## ¿Por qué no admite sincronización de navegador?

La sincronización de Chrome y Firefox está limitada a 8 KB por clave.
Es común que componentes como las notas excedan este límite,
lo que hace que no sea práctico admitir la sincronización.

Puede usar Ajustes (<i class="fas fa-cog"></i>) > Importar / Exportar para compartir su configuración entre navegadores.


## ¿Por qué no está disponible para X navegador?

Solo admitimos las últimas 2 versiones de Firefox y Chrome; es dificil probar
y brindar soporte para todos los navegadores.

Renewed Tab está construido usando tecnologías multiplataforma, lo que significa
que es probable que funcione en su navegador a pesar de no ser compatible.

Puede descargar .zips de la extensión de navegador:

1. Vaya a [GitLab pipelines](https://gitlab.com/renewedtab/renewedtab/-/pipelines).
2. Encuentre el commit que le interesa. Por lo general, quieres un commit de release, como "Release 1.2.3".
3. Haga click en el botón de descarga (<i class="tag fas fa-ellipsis-v"></i>) a la derecha de la fila.
4. Seleccione "Download webext:archive artifact".

Si tiene un problema con un navegador no compatible, es poco probable que podamos ayudarlo.
Sin embargo, podemos aceptar parches / PR para solucionar problemas en
plataformas no compatibles siempre que no introduzcan problemas de arqutectura,
y el problema no se deba a que el navegador implemente incorrectamente los estándares web.


## ¿Por qué me sale un error al ingresar una URL personalizada en la versión web?

Si intenta ingresar una URL personalizada que no está permitida en la versión web,
obtendrá el siguiente error:

> El acceso al host example.com no está permitido en la versión web. Por
> razones de seguridad, la versión web solo puede acceder a dominios preaprobados.
> Considere usar la extensión de Chrome/Firefox en su lugar.

La versión web utiliza un proxy para acceder a las URL, en lugar de contactarlas directamente.
Esto es para sortear las restricciones de
[Intercambio de Recursos de Origen Cruzado](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
(CORS): Las páginas web no pueden realizar solicitudes a otros sitios web sin que
el otro sitio web dé permiso.

El proxy de la versión web restringe los dominios que puede usar por
[razones de seguridad](https://owasp.org/www-community/attacks/Server_Side_Request_Forgery).
Si se permitiera cualquier dominio, los usuarios malintencionados podrían
alterar los registros DNS para permitir el acceso a los servicios internos del servidor.

Es posible que pueda solicitar que el proxy permita un sitio web. Sin embargo,
debería usar la extensión de Chrome/Firefox en su lugar, ya que esta no tiene la restricción.

Nota: Si obtiene el error mientras usa la extensión del navegador, hay algo
_incorrecto_. Por favor repórtelo a continuación.


## How do I add custom widgets?

See [Creating Your Own Custom Widgets for Renewed Tab](/blog/2022/07/24/custom-widgets/).


## Solicitudes de Funciones, Informe de Errores, y Asistencia

Publicar un issue en el rastreador de problemas es la forma preferida de discutir
errores en Renewed Tab y de solicitar funciones.

Si necesita ayuda, puede usar cualquiera de estas opciones.
Es probable que Discord o Matrix sean las más rápidas.

<div class="buttons">
	<a href="https://gitlab.com/renewedtab/renewedtab/-/issues" class="button is-primary">
		<i class="fab fa-gitlab mr-2"></i>
		Rastreador de problemas
	</a>
	<a href="https://rubenwardy.com/contact/" class="button">
		<i class="fas fa-envelope mr-2"></i>
		Póngase en contacto
	</a>
	<a href="https://discord.gg/zYjR54b" class="button">
		<i class="fab fa-discord mr-2"></i>
		Discord
	</a>
	<a href="https://matrix.to/#/#renewedtab:matrix.org" class="button" >
		<i class="fas fa-hashtag mr-2"></i>
		Matrix
	</a>
	<a href="https://github.com/rubenwardy/renewedtab" class="button">
		<i class="fab fa-github mr-2"></i>
		GitHub (mirror)
	</a>
</div>

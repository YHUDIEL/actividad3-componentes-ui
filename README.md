# UI Components

Libreria de componentes visuales interactivos construida con JavaScript vanilla, sin dependencias ni frameworks. Incluye dos componentes reutilizables: Modal y Toast.

El Modal resuelve la necesidad de mostrar ventanas emergentes configurables sin reescribir HTML cada vez. El Toast permite mostrar notificaciones temporales flotantes con distintos tipos y posiciones, sin interrumpir el flujo del usuario.

---

## Instalacion

Incluye el CSS en el `<head>` y el JS antes de cerrar `</body>`:

```html
<link rel="stylesheet" href="css/componente.css" />
<script src="js/componente.js"></script>
```

No requiere ninguna instalacion adicional ni gestor de paquetes.

---

## Modal

Muestra una ventana emergente con titulo, contenido, y botones de accion. Se cierra haciendo clic fuera del cuadro o presionando Escape.

### Parametros

| Parametro | Tipo | Default | Descripcion |
|---|---|---|---|
| `title` | string | `''` | Titulo del modal |
| `content` | string | `''` | Contenido del cuerpo, acepta HTML |
| `confirmText` | string | `'Aceptar'` | Texto del boton principal |
| `cancelText` | string | `'Cancelar'` | Texto del boton secundario |
| `showCancel` | boolean | `true` | Muestra u oculta el boton cancelar |
| `onConfirm` | function | `null` | Callback al confirmar |
| `onCancel` | function | `null` | Callback al cancelar o cerrar |

### Uso basico

```html
<button id="mi-boton">Abrir modal</button>
<script>
  document.getElementById('mi-boton').addEventListener('click', function () {
    UIModal.open({
      title: 'Confirmar accion',
      content: 'Esta accion no se puede deshacer. ¿Deseas continuar?',
      confirmText: 'Si, continuar',
      cancelText: 'Cancelar',
      onConfirm: function () {
        console.log('El usuario confirmo');
      },
      onCancel: function () {
        console.log('El usuario cancelo');
      },
    });
  });
</script>
```

### Modal sin boton cancelar

```js
UIModal.open({
  title: 'Aviso',
  content: 'Tu sesion expirara en 5 minutos.',
  confirmText: 'Entendido',
  showCancel: false,
});
```

### Cerrar el modal desde JS

```js
UIModal.close();
```

---

## Toast

Muestra una notificacion flotante temporal en una esquina de la pantalla. Desaparece automaticamente o puede cerrarse manualmente.

### Parametros

| Parametro | Tipo | Default | Descripcion |
|---|---|---|---|
| `message` | string | `''` | Texto de la notificacion |
| `type` | string | `'info'` | Tipo: `info`, `success`, `warning`, `error` |
| `duration` | number | `3000` | Milisegundos antes de desaparecer. `0` para no cerrar solo |
| `position` | string | `'bottom-right'` | Posicion: `bottom-right`, `bottom-left`, `top-right`, `top-left`, `top-center` |

### Uso basico

```js
UIToast.show({
  message: 'Cambios guardados correctamente',
  type: 'success',
});
```

### Toast con posicion y duracion personalizadas

```js
UIToast.show({
  message: 'Actualizacion disponible',
  type: 'info',
  duration: 5000,
  position: 'top-center',
});
```

### Toast persistente (sin auto-cierre)

```js
UIToast.show({
  message: 'Conexion perdida. Verifica tu red.',
  type: 'error',
  duration: 0,
});
```

---

## Estructura del repositorio

```
ui-components/
├── index.html
├── README.md
├── css/
│   └── componente.css
├── js/
│   ├── componente.js
│   └── demo.js
└── img/
```

---

## Capturas de pantalla

Agregar capturas del componente funcionando en esta seccion.

---

## Video

Agregar enlace al video demostrativo de maximo 1 minuto en esta seccion.

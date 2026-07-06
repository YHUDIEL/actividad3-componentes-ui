# Actividad 3 - Componentes UI

Yhudiel Mendoza Sanchez — No. de control: 22161164

Libreria de componentes visuales interactivos hecha en JavaScript puro, sin frameworks ni dependencias. Incluye dos componentes reutilizables: Modal y Toast. Cada uno puede instanciarse con distintos parametros o contenido sin reescribir el codigo del componente.

---

## Instalacion

Incluye el CSS en el `<head>` y el JS antes de cerrar `</body>`:

```html
<link rel="stylesheet" href="css/componente.css" />
<script src="js/componente.js"></script>
```

---

## Modal

Ventana emergente configurable. Se cierra con el boton X, presionando Escape o haciendo clic fuera del cuadro.

### Parametros

| Parametro | Tipo | Default | Descripcion |
|---|---|---|---|
| `titulo` | string | `''` | Titulo del modal |
| `contenido` | string | `''` | Contenido del cuerpo, acepta HTML |
| `textoConfirmar` | string | `'Aceptar'` | Texto del boton principal |
| `textoCancelar` | string | `'Cancelar'` | Texto del boton secundario |
| `mostrarCancelar` | boolean | `true` | Muestra u oculta el boton cancelar |
| `alConfirmar` | function | `null` | Callback al confirmar |
| `alCancelar` | function | `null` | Callback al cancelar o cerrar |

### Uso basico

```html
<button id="mi-boton">Abrir modal</button>
<script>
  document.getElementById('mi-boton').addEventListener('click', function () {
    UIModal.open({
      titulo: 'Confirmar accion',
      contenido: 'Esta accion no se puede deshacer. ¿Deseas continuar?',
      textoConfirmar: 'Si, continuar',
      textoCancelar: 'Cancelar',
      alConfirmar: function () {
        console.log('El usuario confirmo');
      },
      alCancelar: function () {
        console.log('El usuario cancelo');
      }
    });
  });
</script>
```

### Modal sin boton cancelar

```js
UIModal.open({
  titulo: 'Aviso',
  contenido: 'Tu sesion expirara en 5 minutos.',
  textoConfirmar: 'Entendido',
  mostrarCancelar: false
});
```

### Cerrar el modal desde JS

```js
UIModal.close();
```

---

## Toast

Notificacion flotante temporal. Desaparece automaticamente o se puede cerrar manualmente.

### Parametros

| Parametro | Tipo | Default | Descripcion |
|---|---|---|---|
| `mensaje` | string | `''` | Texto de la notificacion |
| `tipo` | string | `'info'` | Tipo: `info`, `success`, `warning`, `error` |
| `duracion` | number | `3000` | Milisegundos antes de desaparecer. `0` para no cerrar solo |
| `posicion` | string | `'bottom-right'` | Posicion: `bottom-right`, `top-center` |

### Uso basico

```js
UIToast.show({
  mensaje: 'Cambios guardados correctamente',
  tipo: 'success'
});
```

### Toast con duracion personalizada

```js
UIToast.show({
  mensaje: 'Actualizacion disponible',
  tipo: 'info',
  duracion: 5000,
  posicion: 'top-center'
});
```

### Toast sin auto-cierre

```js
UIToast.show({
  mensaje: 'Conexion perdida. Verifica tu red.',
  tipo: 'error',
  duracion: 0
});
```

---

## Estructura del repositorio

```
actividad3-componentes-ui/
├── index.html
├── README.md
├── css/
│   └── componente.css
├── js/
│   ├── componente.js
│   └── demo.js
└── img/
```

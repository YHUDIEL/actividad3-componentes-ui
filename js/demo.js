document.getElementById('btn-modal-basico').addEventListener('click', function () {
  UIModal.open({
    title: 'Modal basico',
    content: 'Este es un modal con configuracion minima. Puedes cerrarlo con el boton X, presionando Escape o haciendo clic fuera del cuadro.',
  });
});

document.getElementById('btn-modal-confirm').addEventListener('click', function () {
  UIModal.open({
    title: 'Confirmar accion',
    content: 'Esta accion no se puede deshacer. ¿Deseas continuar?',
    confirmText: 'Si, continuar',
    cancelText: 'Cancelar',
    onConfirm: function () {
      UIToast.show({ message: 'Accion confirmada', type: 'success' });
    },
    onCancel: function () {
      UIToast.show({ message: 'Accion cancelada', type: 'warning' });
    },
  });
});

document.getElementById('btn-modal-solo-ok').addEventListener('click', function () {
  UIModal.open({
    title: 'Aviso',
    content: 'Tu sesion expirara en 5 minutos. Guarda los cambios antes de que se cierre.',
    confirmText: 'Entendido',
    showCancel: false,
  });
});

document.getElementById('btn-modal-html').addEventListener('click', function () {
  UIModal.open({
    title: 'Detalles del producto',
    content:
      '<strong>Nombre:</strong> Monitor Ultrawide 34"<br><br>' +
      '<strong>Precio:</strong> $799 USD<br><br>' +
      '<strong>Descripcion:</strong> Panel IPS 144Hz, resolucion 3440x1440, compatible con FreeSync Premium.',
    confirmText: 'Agregar al carrito',
    cancelText: 'Cerrar',
    onConfirm: function () {
      UIToast.show({ message: 'Producto agregado al carrito', type: 'success' });
    },
  });
});

document.getElementById('btn-toast-info').addEventListener('click', function () {
  UIToast.show({ message: 'Hay una nueva actualizacion disponible', type: 'info' });
});

document.getElementById('btn-toast-success').addEventListener('click', function () {
  UIToast.show({ message: 'Cambios guardados correctamente', type: 'success' });
});

document.getElementById('btn-toast-warning').addEventListener('click', function () {
  UIToast.show({ message: 'El archivo supera el limite de 5 MB', type: 'warning' });
});

document.getElementById('btn-toast-error').addEventListener('click', function () {
  UIToast.show({ message: 'No se pudo conectar con el servidor', type: 'error' });
});

document.getElementById('btn-toast-top').addEventListener('click', function () {
  UIToast.show({
    message: 'Notificacion en la parte superior',
    type: 'info',
    position: 'top-center',
  });
});

document.getElementById('btn-toast-persistente').addEventListener('click', function () {
  UIToast.show({
    message: 'Esta notificacion no se cierra sola',
    type: 'warning',
    duration: 0,
  });
});

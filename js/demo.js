document.getElementById('btn-modal-basico').addEventListener('click', function () {
    UIModal.open({
        titulo: 'Informacion',
        contenido: 'Este es un modal reutilizable. Se puede cerrar con el boton X, presionando Escape o haciendo clic fuera del cuadro.',
        textoConfirmar: 'Entendido',
        mostrarCancelar: false
    });
});

document.getElementById('btn-modal-confirm').addEventListener('click', function () {
    UIModal.open({
        titulo: 'Confirmar accion',
        contenido: 'Esta accion no se puede deshacer. ¿Deseas continuar?',
        textoConfirmar: 'Si, continuar',
        textoCancelar: 'Cancelar',
        alConfirmar: function () {
            UIToast.show({ mensaje: 'Accion confirmada', tipo: 'success' });
        },
        alCancelar: function () {
            UIToast.show({ mensaje: 'Accion cancelada', tipo: 'warning' });
        }
    });
});

document.getElementById('btn-toast-info').addEventListener('click', function () {
    UIToast.show({ mensaje: 'Hay una actualizacion disponible', tipo: 'info' });
});

document.getElementById('btn-toast-success').addEventListener('click', function () {
    UIToast.show({ mensaje: 'Cambios guardados correctamente', tipo: 'success' });
});

document.getElementById('btn-toast-error').addEventListener('click', function () {
    UIToast.show({ mensaje: 'No se pudo conectar con el servidor', tipo: 'error' });
});

document.getElementById('btn-toast-varios').addEventListener('click', function () {
    UIToast.show({ mensaje: 'Primer aviso', tipo: 'info' });
    setTimeout(function () {
        UIToast.show({ mensaje: 'Segundo aviso', tipo: 'success' });
    }, 600);
    setTimeout(function () {
        UIToast.show({ mensaje: 'Tercer aviso', tipo: 'error' });
    }, 1200);
});

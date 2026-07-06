(function (global) {
    const UIModal = {
        open: function (opciones) {
            const config = {
                titulo: opciones.titulo || '',
                contenido: opciones.contenido || '',
                textoConfirmar: opciones.textoConfirmar || 'Aceptar',
                textoCancelar: opciones.textoCancelar || 'Cancelar',
                alConfirmar: opciones.alConfirmar || null,
                alCancelar: opciones.alCancelar || null,
                mostrarCancelar: opciones.mostrarCancelar !== undefined ? opciones.mostrarCancelar : true
            };

            const existente = document.getElementById('ui-modal-overlay');
            if (existente) existente.remove();

            const overlay = document.createElement('div');
            overlay.id = 'ui-modal-overlay';
            overlay.className = 'ui-modal-overlay';

            const modal = document.createElement('div');
            modal.className = 'ui-modal';

            const header = document.createElement('div');
            header.className = 'ui-modal-header';

            const titulo = document.createElement('h2');
            titulo.className = 'ui-modal-titulo';
            titulo.textContent = config.titulo;

            const cerrar = document.createElement('button');
            cerrar.className = 'ui-modal-cerrar';
            cerrar.textContent = '×';
            cerrar.addEventListener('click', function () {
                UIModal.close();
                if (config.alCancelar) config.alCancelar();
            });

            header.appendChild(titulo);
            header.appendChild(cerrar);

            const cuerpo = document.createElement('div');
            cuerpo.className = 'ui-modal-cuerpo';
            cuerpo.innerHTML = config.contenido;

            const pie = document.createElement('div');
            pie.className = 'ui-modal-pie';

            const btnConfirmar = document.createElement('button');
            btnConfirmar.className = 'btn-confirmar';
            btnConfirmar.textContent = config.textoConfirmar;
            btnConfirmar.addEventListener('click', function () {
                UIModal.close();
                if (config.alConfirmar) config.alConfirmar();
            });

            pie.appendChild(btnConfirmar);

            if (config.mostrarCancelar) {
                const btnCancelar = document.createElement('button');
                btnCancelar.className = 'btn-cancelar';
                btnCancelar.textContent = config.textoCancelar;
                btnCancelar.addEventListener('click', function () {
                    UIModal.close();
                    if (config.alCancelar) config.alCancelar();
                });
                pie.appendChild(btnCancelar);
            }

            modal.appendChild(header);
            modal.appendChild(cuerpo);
            modal.appendChild(pie);
            overlay.appendChild(modal);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', function (e) {
                if (e.target === overlay) {
                    UIModal.close();
                    if (config.alCancelar) config.alCancelar();
                }
            });

            document.addEventListener('keydown', function manejadorEsc(e) {
                if (e.key === 'Escape') {
                    UIModal.close();
                    if (config.alCancelar) config.alCancelar();
                    document.removeEventListener('keydown', manejadorEsc);
                }
            });

            requestAnimationFrame(function () {
                overlay.classList.add('activo');
            });
        },

        close: function () {
            const overlay = document.getElementById('ui-modal-overlay');
            if (!overlay) return;
            overlay.classList.remove('activo');
            overlay.addEventListener('transitionend', function () {
                overlay.remove();
            }, { once: true });
        }
    };

    const UIToast = {
        _contenedor: null,

        _getContenedor: function (pos) {
            if (!this._contenedor) {
                this._contenedor = document.createElement('div');
                this._contenedor.id = 'ui-toast-contenedor';
                this._contenedor.className = 'ui-toast-contenedor';
                document.body.appendChild(this._contenedor);
            }
            this._contenedor.dataset.pos = pos;
            return this._contenedor;
        },

        show: function (opciones) {
            const config = {
                mensaje: opciones.mensaje || '',
                tipo: opciones.tipo || 'info',
                duracion: opciones.duracion !== undefined ? opciones.duracion : 3000,
                posicion: opciones.posicion || 'bottom-right'
            };

            const contenedor = this._getContenedor(config.posicion);

            const toast = document.createElement('div');
            toast.className = 'ui-toast ' + config.tipo;

            const texto = document.createElement('span');
            texto.textContent = config.mensaje;

            const cerrar = document.createElement('button');
            cerrar.className = 'ui-toast-cerrar';
            cerrar.textContent = '×';
            cerrar.addEventListener('click', function () {
                UIToast._quitar(toast);
            });

            toast.appendChild(texto);
            toast.appendChild(cerrar);
            contenedor.appendChild(toast);

            requestAnimationFrame(function () {
                toast.classList.add('visible');
            });

            if (config.duracion > 0) {
                setTimeout(function () {
                    UIToast._quitar(toast);
                }, config.duracion);
            }
        },

        _quitar: function (toast) {
            toast.classList.remove('visible');
            toast.addEventListener('transitionend', function () {
                toast.remove();
            }, { once: true });
        }
    };

    global.UIModal = UIModal;
    global.UIToast = UIToast;
})(window);

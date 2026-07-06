(function (global) {
  const UIModal = {
    open: function (options) {
      const config = {
        title: options.title || '',
        content: options.content || '',
        confirmText: options.confirmText || 'Aceptar',
        cancelText: options.cancelText || 'Cancelar',
        onConfirm: options.onConfirm || null,
        onCancel: options.onCancel || null,
        showCancel: options.showCancel !== undefined ? options.showCancel : true,
      };

      const existing = document.getElementById('ui-modal-overlay');
      if (existing) existing.remove();

      const overlay = document.createElement('div');
      overlay.id = 'ui-modal-overlay';
      overlay.className = 'ui-modal-overlay';

      const modal = document.createElement('div');
      modal.className = 'ui-modal';

      const header = document.createElement('div');
      header.className = 'ui-modal-header';

      const title = document.createElement('h2');
      title.className = 'ui-modal-title';
      title.textContent = config.title;

      const closeBtn = document.createElement('button');
      closeBtn.className = 'ui-modal-close';
      closeBtn.textContent = '×';
      closeBtn.addEventListener('click', function () {
        UIModal.close();
        if (config.onCancel) config.onCancel();
      });

      header.appendChild(title);
      header.appendChild(closeBtn);

      const body = document.createElement('div');
      body.className = 'ui-modal-body';
      body.innerHTML = config.content;

      const footer = document.createElement('div');
      footer.className = 'ui-modal-footer';

      const confirmBtn = document.createElement('button');
      confirmBtn.className = 'ui-btn ui-btn-primary';
      confirmBtn.textContent = config.confirmText;
      confirmBtn.addEventListener('click', function () {
        UIModal.close();
        if (config.onConfirm) config.onConfirm();
      });

      footer.appendChild(confirmBtn);

      if (config.showCancel) {
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'ui-btn ui-btn-secondary';
        cancelBtn.textContent = config.cancelText;
        cancelBtn.addEventListener('click', function () {
          UIModal.close();
          if (config.onCancel) config.onCancel();
        });
        footer.appendChild(cancelBtn);
      }

      modal.appendChild(header);
      modal.appendChild(body);
      modal.appendChild(footer);
      overlay.appendChild(modal);
      document.body.appendChild(overlay);

      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
          UIModal.close();
          if (config.onCancel) config.onCancel();
        }
      });

      document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
          UIModal.close();
          if (config.onCancel) config.onCancel();
          document.removeEventListener('keydown', escHandler);
        }
      });

      requestAnimationFrame(function () {
        overlay.classList.add('ui-modal-overlay--active');
      });
    },

    close: function () {
      const overlay = document.getElementById('ui-modal-overlay');
      if (!overlay) return;
      overlay.classList.remove('ui-modal-overlay--active');
      overlay.addEventListener(
        'transitionend',
        function () {
          overlay.remove();
        },
        { once: true }
      );
    },
  };

  const UIToast = {
    _container: null,

    _getContainer: function (position) {
      if (!this._container) {
        this._container = document.createElement('div');
        this._container.id = 'ui-toast-container';
        this._container.className = 'ui-toast-container';
        document.body.appendChild(this._container);
      }
      this._container.dataset.position = position;
      return this._container;
    },

    show: function (options) {
      const config = {
        message: options.message || '',
        type: options.type || 'info',
        duration: options.duration !== undefined ? options.duration : 3000,
        position: options.position || 'bottom-right',
      };

      const container = this._getContainer(config.position);

      const toast = document.createElement('div');
      toast.className = 'ui-toast ui-toast--' + config.type;

      const text = document.createElement('span');
      text.textContent = config.message;

      const closeBtn = document.createElement('button');
      closeBtn.className = 'ui-toast-close';
      closeBtn.textContent = '×';
      closeBtn.addEventListener('click', function () {
        UIToast._dismiss(toast);
      });

      toast.appendChild(text);
      toast.appendChild(closeBtn);
      container.appendChild(toast);

      requestAnimationFrame(function () {
        toast.classList.add('ui-toast--visible');
      });

      if (config.duration > 0) {
        setTimeout(function () {
          UIToast._dismiss(toast);
        }, config.duration);
      }
    },

    _dismiss: function (toast) {
      toast.classList.remove('ui-toast--visible');
      toast.addEventListener(
        'transitionend',
        function () {
          toast.remove();
        },
        { once: true }
      );
    },
  };

  global.UIModal = UIModal;
  global.UIToast = UIToast;
})(window);

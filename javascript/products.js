  // 모바일 헤더 사이드바
        (function () {
            const openBtn = document.getElementById('openSidebar');
            const closeBtn = document.getElementById('closeSidebar');
            const sidebar = document.getElementById('sidebar');

            // overlay 요소가 없다면 생성
            let overlay = document.getElementById('sidebarOverlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = 'sidebarOverlay';
                overlay.className = 'sidebar-overlay';
                document.body.appendChild(overlay);
            }

            function openSide() {
                if (!sidebar) return;
                sidebar.classList.add('open');
                overlay.classList.add('show');
                document.body.classList.add('no-scroll');
                sidebar.setAttribute('aria-hidden', 'false');
            }
            function closeSide() {
                if (!sidebar) return;
                sidebar.classList.remove('open');
                overlay.classList.remove('show');
                document.body.classList.remove('no-scroll');
                sidebar.setAttribute('aria-hidden', 'true');
            }

            if (openBtn) openBtn.addEventListener('click', openSide);
            if (closeBtn) closeBtn.addEventListener('click', closeSide);
            overlay.addEventListener('click', closeSide);

            // Esc 키로도 닫기
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') closeSide();
            });
        })();
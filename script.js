document.addEventListener('DOMContentLoaded', () => {

    // --- INTERAZIONE POWER GRID (TABS ASIMMETRICHE) ---
    const nodes = document.querySelectorAll('.node-btn');
    const panels = document.querySelectorAll('.screen-panel');

    nodes.forEach(node => {
        node.addEventListener('click', () => {
            // Spegni tutti i nodi attivi
            nodes.forEach(n => n.classList.remove('active'));
            // Nascondi tutti i flussi sullo schermo dati
            panels.forEach(p => p.classList.remove('active'));

            // Accendi il nodo cliccato
            node.classList.add('active');

            // Avvia la decrittazione del pannello target
            const targetId = node.getAttribute('data-target');
            const activePanel = document.getElementById(targetId);
            if (activePanel) {
                activePanel.classList.add('active');
            }
            
            // Random glitch estetico sulla console al click
            triggerConsoleFlash();
        });
    });

    // --- EFFETTO FLASH ESTETICO ---
    function triggerConsoleFlash() {
        const screen = document.querySelector('.data-screen');
        screen.style.borderColor = 'var(--neon-pink)';
        setTimeout(() => {
            screen.style.borderColor = 'var(--text-light)';
        }, 150);
    }

    // --- NAVIGAZIONE ANCORAGGIO SOFT CORRETTA ---
    const links = document.querySelectorAll('.nav-cyber-btn, .hero-btns a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSec = document.querySelector(targetId);
                if (targetSec) {
                    const offset = document.querySelector('header').offsetHeight + 20;
                    const position = targetSec.getBoundingClientRect().top + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: position,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
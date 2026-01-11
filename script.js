document.addEventListener('DOMContentLoaded', () => {
    const bits = document.querySelectorAll('.bit');
    const terminalLines = document.querySelectorAll('.typing');
    const successLine = document.querySelector('.success');

    const initializeLogo = () => {
        bits.forEach((bit, index) => {
            bit.style.opacity = "0";
            bit.style.transform = "translateY(10px)";
            setTimeout(() => {
                bit.style.opacity = "0.3";
                bit.style.transform = "translateY(0)";
            }, 100 * index);
        });
    };

    bits.forEach(bit => {
        bit.addEventListener('mouseenter', () => {
            bit.style.opacity = "1";
            bit.style.transform = "scale(1.2)";
            bit.style.color = "#007AFF";
        });

        bit.addEventListener('mouseleave', () => {
            bit.style.opacity = "0.3";
            bit.style.transform = "scale(1)";
            bit.style.color = "white";
        });
    });

    const runTerminal = () => {
        if (successLine) successLine.style.opacity = "0";

        terminalLines.forEach((line, index) => {
            line.style.opacity = "0";
            line.style.transform = "translateX(-10px)";
            setTimeout(() => {
                line.style.opacity = "0.6";
                line.style.transform = "translateX(0)";
                line.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
            }, 800 + (index * 400));
        });

        setTimeout(() => {
            if (successLine) {
                successLine.style.opacity = "1";
                successLine.style.transform = "scale(1.05)";
                successLine.style.transition = "all 0.4s ease-out";
            }
        }, 800 + (terminalLines.length * 400) + 300);
    };

    initializeLogo();
    runTerminal();
});

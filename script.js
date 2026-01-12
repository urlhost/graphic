document.addEventListener('DOMContentLoaded', () => {
    const bits = document.querySelectorAll('.bit');
    const terminalLines = document.querySelectorAll('.typing');
    const successLine = document.querySelector('.success');
    const loginLine = document.querySelector('.login');

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

    const runTerminal = () => {
        if (successLine) successLine.style.opacity = "0";
        if (loginLine) loginLine.style.opacity = "0";
        
        // 1. Animate Terminal Lines
        terminalLines.forEach((line, index) => {
            line.style.opacity = "0";
            line.style.transform = "translateX(-10px)";
            setTimeout(() => {
                line.style.opacity = "0.6";
                line.style.transform = "translateX(0)";
                line.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
            }, 800 + (index * 400));
        });

        // Calculate when terminal lines finish
        const terminalFinishTime = 800 + (terminalLines.length * 400);

        // 2. Animate Success Line (appears after terminal lines)
        setTimeout(() => {
            if (successLine) {
                successLine.style.opacity = "1";
                successLine.style.transform = "scale(1.05)";
                successLine.style.transition = "all 0.4s ease-out";
                // Reset scale after pop
                setTimeout(() => successLine.style.transform = "scale(1)", 400);
            }
        }, terminalFinishTime + 300);

        // 3. Animate Login Line (appears after success line)
        setTimeout(() => {
            if (loginLine) {
                loginLine.style.opacity = "1";
                loginLine.style.transform = "scale(1.05)";
                loginLine.style.transition = "all 0.4s ease-out";
                // Reset scale after pop
                setTimeout(() => loginLine.style.transform = "scale(1)", 400);
            }
        }, terminalFinishTime + 1000); // 1000ms delay to feel distinct from success
    };

    initializeLogo();
    runTerminal();
});

document.addEventListener('DOMContentLoaded', () => {
    const terminalLines = document.querySelectorAll('.typing');
    const successLine = document.querySelector('.success');

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

        const terminalFinishTime = 800 + (terminalLines.length * 400);

        setTimeout(() => {
            if (successLine) {
                successLine.style.opacity = "1";
                successLine.style.transform = "scale(1.05)";
                successLine.style.transition = "all 0.4s ease-out";
                setTimeout(() => successLine.style.transform = "scale(1)", 400);
            }
        }, terminalFinishTime + 300);
    };
    
    runTerminal();
});

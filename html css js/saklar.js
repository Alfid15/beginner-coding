function updateLamp(checkbox) {
    if (!checkbox) return;
    const id = checkbox.id || '';
    const num = id.replace('default-toggle', '');
    const img = document.getElementById('lampu' + num);
    if (!img) return;
    img.src = checkbox.checked ? 'assets/images/on.png' : 'assets/images/off.png';
}
function groupToggle(name) {
    const groups = {
        keluarga: ['default-toggle1', 'default-toggle2', 'default-toggle3'], // 3 lampu
        makan: ['default-toggle4'], // 1 lampu
        tidur: ['default-toggle5', 'default-toggle6'], // 2 lampu
        tamu: ['default-toggle7', 'default-toggle8', 'default-toggle9', 'default-toggle10'], // 4 lampu
        all: ['default-toggle1', 'default-toggle2', 'default-toggle3', 'default-toggle4', 'default-toggle5', 'default-toggle6', 'default-toggle7', 'default-toggle8', 'default-toggle9', 'default-toggle10']
    };
    const ids = groups[name];
    if (!ids) return;
    const anyOff = ids.some(id => {
        const cb = document.getElementById(id);
        return cb && !cb.checked;
    });
    ids.forEach(id => {
        const cb = document.getElementById(id);
        if (!cb) return;
        cb.checked = !!anyOff;
        updateLamp(cb);
    });
    document.addEventListener('DOMContentLoaded', () => {
    for (let i = 1; i <= 10; i++) {
        const cb = document.getElementById('default-toggle' + i);
        if (cb) updateLamp(cb);
    }
});
}
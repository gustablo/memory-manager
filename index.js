const { freemem, totalmem } = require('os');

const calcMemories = () => {
    const toMb = 1024 / 1024;

    const free = parseInt(freemem() / toMb);
    const total = parseInt(totalmem() / toMb);

    const memInUse = parseInt(((freemem()) / totalmem()) * 100);

    const displayValues = {
        memInUse: `${memInUse}%`,
        freeMem: `${free}MB`,
        totalMem: `${total}MB`
    };

    return displayValues;
}

const start = (ms) => {
    setInterval(() => {
        const memories = calcMemories();
        console.clear();
        console.table(memories);
    }, ms);

}

start(1000);

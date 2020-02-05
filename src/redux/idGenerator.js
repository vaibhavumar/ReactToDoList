let lastId = 1;

export default function(prefix='id') {
    lastId++;
    return `${prefix}${lastId}`;
}
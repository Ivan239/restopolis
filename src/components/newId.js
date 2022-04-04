export default function newId() {
    return Math.floor((1 + Math.random()) * 0x10000000)
        .toString(16)
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "2142342353580", "", "Hello", 123456);
// blockchain이라는 배열은 Block이라는 클래스타입을 가지고 
// 거기에 genesisBlock이 가지고 있는 데이터를 넣을거다.
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map
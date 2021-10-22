class Block {
    public index:number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    constructor(
        index:number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "2142342353580","", "Hello", 123456);

// blockchain이라는 배열은 Block이라는 클래스타입을 가지고 
// 거기에 genesisBlock이 가지고 있는 데이터를 넣을거다.
let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

// typescript 덕분에 
//blockchian.push("stuff"); 이렇게 해도 블록이 아니라서 블록체인에 푸쉬되지 않는다.






export {};


import * as CryptoJS from "crypto-js";

class Block {
    
    //static method로써 클래스가 생성되지 않았어도 호출가능하다
    static calculateBlockHash = (
        index: number,
        previousHash: string,
        timestamp: number,
        data: string
        ): string =>
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
        
        static validateStructure = (aBlock : Block) : boolean => 
        typeof aBlock.index === "number" && 
        typeof aBlock.hash === "string" &&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.data === "string" &&
        typeof aBlock.timestamp === "number";
        
        public index: number;
        public hash: string;
        public previousHash: string;
        public data: string;
        public timestamp: number;
        
        constructor(
            index: number,
            hash: string,
            previousHash: string,
            data: string,
            timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "2142342353580", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLastestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLastestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex, 
        previousBlock.hash, 
        newTimestamp,
        data
    );
    const newBlock: Block = new Block(
        newIndex, 
        newHash, 
        previousBlock.hash, 
        data, 
        newTimestamp
    );
    return newBlock;
};

const getHashforBlock = (aBlock: Block) : string => Block.calculateBlockHash(aBlock.index, aBlock.hash, aBlock.timestamp, aBlock.data);

const isBlockValid = (candidateBlock : Block, previousBlock: Block) : boolean => {
    if(!Block.validateStructure(candidateBlock)){
        return false;
    } else if(previousBlock.index + 1 !== candidateBlock.index){
        return false;
    } else if(previousBlock.hash !== candidateBlock.previousHash){
        return false;
    } else if(getHashforBlock(candidateBlock) != candidateBlock.hash){//candidate의 hash가 다시 계산해도 같은 해쉬가 나오는지 테스트
        return false;
    } else {
        return true;
    };
}

const addBlock = (candidateBlock: Block) : void => {
    if(isBlockValid(candidateBlock, getLastestBlock())){
        blockchain.push(candidateBlock);
    }
};


export { };


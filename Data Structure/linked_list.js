class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(head){
this.head = head;
    }

    add(value){
        const newNode = new Node(value)
        let current = this.head
        while(current.next != null){
current = current.next;
        }
        current.next = newNode

    }
}
const head = new Node(1500)

const mBondhon = new LinkedList(head)
mBondhon.add(23)
mBondhon.add(24)
mBondhon.add(25)
mBondhon.add(27)
mBondhon.add(28)
console.log(JSON.stringify(mBondhon));

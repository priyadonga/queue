class Queue {
    constructor() {
        this.que = [];
        this.size = 5;
        this.head = 0;
        this.tail = -1; 
    }

    isEmpty() {
        if (this.que.length === 0) console.log("Queue Empty");
    }

    add(element) {
        if (this.que.length < this.size) {
            this.que.push(element);
            this.tail++; 
        } else {
            console.log("Queue full");
        }
    }

    print() {
        console.log(this.que);
    }

    delete() {
        if (this.que.length === 0) {
            console.log("Queue Empty");
        }
        this.que.splice(this.tail, 1);
        this.tail--;
    }
}

const que = new Queue();
que.add(5);
que.add(7);
que.add(8);
que.print(); 
que.delete();
que.print(); 
que.delete();
que.print(); 

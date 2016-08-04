function LinkedList() {
    this.head = null;
    this.length = 0;
}

// Insert a node at the beginning of the list
LinkedList.prototype.add = function(newNode) {
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
}

//Delete the first node that matches the passed data
LinkedList.prototype.deleteNode = function(data) {
    var currentNode = this.head;
    while(currentNode.next.data !== data) {
        currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
}

//Delete all nodes with data that matches passed parameter
LinkedList.prototype.deleteNodesWith = function(data) {
    var currentNode = this.head;
    for(var i = 0; i < this.length; i++) {
        if(currentNode.next.data === data) {
            currentNode.next = currentNode.next.next;
            this.length--;
        } else {
            currentNode = currentNode.next;
        }
    }
}

module.exports = LinkedList;

/*Find- based on data thats passed
*Contains- based on data thats passed
*Length
*FindFirst- Find first element that matches this query
*/

/* sophisticatedCode.js
   This code is a complex implementation of a data structure known as a Trie (prefix tree). 
   It allows efficient insertion, deletion, and searching of words in a large dictionary.
   The Trie is designed to support international characters using Unicode.
*/

class TrieNode {
  constructor(char) {
    this.char = char; // Unicode character
    this.children = new Map(); // Mapping characters to child TrieNodes
    this.isWord = false; // Flag to mark whether this node represents the end of a word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('\0'); // Root node representing an empty character
  }

  insert(word) {
    let node = this.root;
    
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      
      if (!node.children.has(char)) {
        const newNode = new TrieNode(char);
        node.children.set(char, newNode);
      }
      
      node = node.children.get(char);
    }
    
    node.isWord = true;
  }

  search(word) {
    let node = this.root;
    
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      
      if (!node.children.has(char)) {
        return false; // Word not found
      }
      
      node = node.children.get(char);
    }
    
    return node.isWord; // Check if the node represents the end of a word
  }

  delete(word) {
    this._recursiveDelete(this.root, word, 0);
  }

  _recursiveDelete(node, word, index) {
    if (index === word.length) {
      // Reached the end of the word
      if (!node.isWord) {
        return; // Word not found in the Trie
      }
      
      node.isWord = false;
    } else {
      const char = word.charAt(index);
      
      if (!node.children.has(char)) {
        return; // Word not found in the Trie
      }
      
      const childNode = node.children.get(char);
      this._recursiveDelete(childNode, word, index + 1);
      
      if (!childNode.children.size && !childNode.isWord) {
        node.children.delete(char); // Prune Trie branches with no words
      }
    }
  }
}

// Usage Example
const dictionary = new Trie();
dictionary.insert('apple');
dictionary.insert('banana');
dictionary.insert('orange');
dictionary.insert('pineapple');
dictionary.insert('grape');
dictionary.insert('watermelon');

console.log(dictionary.search('apple')); // Output: true
console.log(dictionary.search('watermelon')); // Output: true
console.log(dictionary.search('kiwi')); // Output: false

dictionary.delete('apple');
console.log(dictionary.search('apple')); // Output: false

dictionary.insert('pear');
console.log(dictionary.search('pear')); // Output: true
console.log(dictionary.search('pineapple')); // Output: true
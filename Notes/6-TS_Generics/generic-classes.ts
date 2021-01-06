class DataStorage<T extends string | number | boolean> {
  // OOnly primitive types allowed
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1){
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Theo");
// textStorage.addItem(12);
textStorage.addItem("Max");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
// numberStorage.addItem('Theo');
numberStorage.addItem(12);
numberStorage.addItem(14);
numberStorage.removeItem(14);
console.log(numberStorage.getItems());

// Need a more specialised fucntion for non-primitive types
// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({name:'Theo'});
// objectStorage.addItem({name:'Max'});
// objectStorage.removeItem({name:'Theo'}); // always remove the last item in obj (-1)
// console.log(objectStorage.getItems());

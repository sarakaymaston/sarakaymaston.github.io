const helper = {
  // calculates percentage 
  calculatePercentage: (number, total) => {
    return Math.round((number / total) * 100);
  },


  // returns an array of items with the defined selector
  getElemsFromSelector: (selector) => {
    return Array.from(document.querySelectorAll(selector));
  },

  // Returns an object that stores dimensions and position of an element
  getItemPosition: (item) => {
    const itemRect = item.getBoundingClientRect();
    const itemPos = {
      top: itemRect.top,
      left: itemRect.left,
      width: itemRect.width,
      height: itemRect.height,
    }
    return itemPos;
  },

  // Returns a random integer from a range of numbers
  getRandomInt: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, 

  // returns index of an object that contains a given property value in a given array
  findObjectsIndex: (arr, prop, propValue) => {
    const i = arr.findIndex(obj => obj[prop] === propValue);
    return i;
  },

  // takes in an array of objects, finds the object with the given id and returns the value of the defined prop in that object
  findPropertyValue: (arr, id, prop) => {
    const i = helper.findObjectsIndex(arr, 'id', id);
    const propValue = arr[i][prop];
    return propValue;
  },

  // check if all items on the layer are found (are scratched off)
  foundAllItems: (dataArr) => {
    return  dataArr.every(item => item.inInventory);
  },

  // fades out an element and unmounts is
  unmount: (el) => {
    el.classList.add('faded-out')
    el.addEventListener('transitionend', () => {
      el.parentElement.remove();
    })
  },

  // update a given property of an object based on its index in a given array
  updateProperty: (arr, index, prop, newValue) => {
    arr[index][prop] = newValue;
  }
};

export default helper;
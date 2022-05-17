/**
 * Get a zero-counted integer element index
 * @param {integer} elementCount
 * @param {integer or string} choice
 */
function getElementIndex(elementCount, choice, returnOneCountIndex = false) {
  let index;
  let choiceValue = choice;

  // if choice is a string value of a number,
  // convert it to an integer
  if (
    typeof choiceValue === 'string' &&
    !Number.isNaN(parseInt(choiceValue, 10))
  ) {
    choiceValue = parseInt(choice, 10);
  }

  if (Number.isInteger(choiceValue)) {
    // bounds the index to a valid value
    if (choiceValue >= elementCount) {
      index = elementCount - 1;
    } else if (choiceValue < -elementCount) {
      index = -elementCount;
    } else {
      index = choiceValue;
    }
  } else if (
    typeof choiceValue === 'string' &&
    choiceValue.match(/random/i) !== null
  ) {
    index = Math.floor(Math.random() * elementCount);
  }

  // by default, the function returns a zero-counted index (0 ... n-1)
  // if returnOneCountIndex === true, then return
  // one-counted index (1 ... n)
  if (returnOneCountIndex && index >= 0) {
    index += 1;
  }

  return index;
}

module.exports = getElementIndex;

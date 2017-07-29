function binarySearch(length, callback) {
  let low = 0;
  let high = length - 1;
  let best = -1;
  let mid;

  while (low <= high) {
    mid = ~~((low + high) / 2);
    let result = callback(mid);

    if (result < 0) {
      high = mid - 1;
    } else if (result > 0) {
      low = mid + 1;
    } else {
      best = mid;
      low = mid + 1;
    }
  }

  return best;
}

function isTextOverflowing(element) {
  let currentOverflow = element.style.overflow;
  if (!currentOverflow || currentOverflow === 'visible') {
    element.style.overflow = 'hidden';
  }

  let isOverflowing = element.clientWidth < element.scrollWidth || element.clientHeight < element.scrollHeight;
  element.style.overflow = currentOverflow;
  return isOverflowing;
}

export function ellipsify(container) {
  let content = container.lastElementChild;
  let text = content.innerText;

  if (isTextOverflowing(container)) {
    let checkFunc = function (i) {
      content.innerText = text.substring(0, i);
      return isTextOverflowing(container) ? -1 : 0;
    };

    let len = binarySearch(text.length - 1, checkFunc);
    content.innerText = text.substring(0, len).slice(0, -3) + '...';
  }
}

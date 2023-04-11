function sleep(interval = 3000) {
  var ms = interval + new Date().getTime();
  while (new Date() < ms);
  console.log(`sleeped ${interval}ms`);
}

function clickHandler() {
  console.log('clicked');
}

document.addEventListener('click', clickHandler);

sleep();
console.log('finished execution');

//external js: masonry.pkgd.js
var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 10,
  isFitWidth:true
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
  itemSelector: '.grid-item',
  columnWidth:true
});
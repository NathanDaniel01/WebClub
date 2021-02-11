//external js: masonry.pkgd.js
var elem = document.querySelector('.grid');
// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
  itemSelector: '.grid-item',
  columnWidth: 3,
  isFitWidth:true
});
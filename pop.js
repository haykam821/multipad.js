function idtoclass(index, id){
  switch (id) {
    case 'Joy-Con (L) (Vendor: 057e Product: 2006)':
      document.getElementsByTagName('div')[index].className = 'left';
      //alert('left',index)
      break;
    case 'Joy-Con (R) (Vendor: 057e Product: 2007)':
      document.getElementsByTagName('div')[index].className = 'right';
      break;
    case null:
      document.getElementsByTagName('div')[index].className = '';
      break;
    default:
      document.getElementsByTagName('div')[index].className = '';
      break;
  }
}

setInterval(function() {
    idtoclass(1, navigator.getGamepads()[0] == null ? null : navigator.getGamepads()[0].id);
    idtoclass(2, navigator.getGamepads()[1] == null ? null : navigator.getGamepads()[1].id);
    idtoclass(3, navigator.getGamepads()[2] == null ? null : navigator.getGamepads()[2].id);
    idtoclass(4, navigator.getGamepads()[3] == null ? null : navigator.getGamepads()[3].id);
});

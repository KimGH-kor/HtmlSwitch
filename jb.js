var link = {
  aclor : function(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
          alist[i].style.color=color;
          i= i + 1;
      }
  }
}

var body ={
  setcolor : function(color){
  document.querySelector('body').style.color = color;
  },
  setbg : function(color){
      document.querySelector('body').style.background = color;
  }
}

function boom(self){
  if(self.value === 'night'){
      body.setcolor('white');
      body.setbg('black');
      self.value = 'day';
      link.aclor('red')
  }else{
      body.setcolor('black');
      body.setbg('white');
      self.value = 'night';
      link.aclor('blue')
  }
}
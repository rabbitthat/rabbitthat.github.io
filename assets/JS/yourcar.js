var app = new Vue({
  el: '#app',
  data: {

  },
  methods: {

  },
  computed: {

  }
})

data: {
  itemList: [{
      id: '1',
      itemName: '輕奢華．尖頭絨布綁帶裝飾扁跟靴',
      imgUrl: '../Images/扁跟鞋.jpg',
      price: '3,980',
      count: '1'
    },
    {
      id: '2',
      itemName: '編織復古粗跟涼拖鞋',
      imgUrl: '../Images/粗跟涼鞋.jpg',
      price: '2,944',
      count: '1'
    },
    {
      id: '3',
      itemName: '雙帶竹編楔型涼拖鞋',
      imgUrl: '../Images/楔型涼鞋.jpg',
      price: '3,312',
      count: '1'
    },
    {
      id: '4',
      itemName: '小時光 格紋拼接馬銜釦平底樂福鞋',
      imgUrl: '../Images/樂福鞋.jpg',
      price: '2,780',
      count: '1'
    },
  ]
}

methods: {
  handlePlus: function (item) {
    item.count++;
  }
  handleSub: function (item) {
    if (item.count > 1) {
      item.count--;
    }
  }
  handledelete: function (index) {
    console.log(this);
    this.itemList.splice(index, 1);
  }
}
computed: {

}
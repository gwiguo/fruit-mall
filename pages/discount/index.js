import discountList from "../../mock/discount";

Page({
  data: {
    list:[]
  },
  onLoad(options){
      const { index } = options;
      this.setData({
          list:discountList.filter(item=>item.index==index)
      })
  }
})
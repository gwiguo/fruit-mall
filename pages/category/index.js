import originCategories from "../../mock/goodsRecommend";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    currentGoods: [],
    activeCategoryName: originCategories[0].category,
  },
  onLoad() {
    this.setData(
      {
        categories: [...new Set(originCategories.map((item) => item.category))],
        currentGoods: originCategories.filter(
          (item) => item.category == this.data.activeCategoryName
        ),
      });
  },
  tapCategory(e) {
    const activeCategoryName = e.currentTarget.dataset.category; 
    this.setData({
        activeCategoryName,
        // 在所有水果中筛选出category=点击的水果分类 
        currentGoods:originCategories.filter((item) => item.category == activeCategoryName)
    })
  },
  tapAdd(){
    wx.showToast({
      title: '开发中~',
      icon:"loading"
    })
  }
});

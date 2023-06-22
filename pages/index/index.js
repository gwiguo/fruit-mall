import banners from "../../mock/banner.js";
import navigation from "../../mock/navigation.js";
import goodsRecommend from "../../mock/goodsRecommend.js";

Page({
    data:{
        banners:[]
    },
    onLoad(){
        this.setData({
            banners,
            navigation,
            goodsRecommend
        })
    },
	tapBanner(e) {
        const url = e.currentTarget.dataset.url;
		wx.navigateTo({
			url:`${url}?index=${e.currentTarget.dataset.index}`
		})
    },
    tapMenu(){
        wx.showToast({
          title: '开发中~',
          icon:"loading"
        })
    }
})

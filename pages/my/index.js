Page({
  data: {    
    is_login:false,
    avatarUrl:"/images/my/微信图片_202305261523519.jpg",
    nickName:"闹够了没有",
  },
  login(){
    wx.showLoading({
        title:"登录中~",
        mask:true
    });
    this.setData({
        is_login:true,
    },()=>{
        setTimeout(()=>{
            wx.hideLoading();
        },500)        
    })
  },
  bindtap(){
    wx.showToast({
      title: '开发中~',
      icon:"loading"
    })
  }
})
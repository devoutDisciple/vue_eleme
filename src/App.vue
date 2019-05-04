<template>
	<div id="app">
		<!-- 使用 router-link 组件来导航. -->
    	<!-- 通过传入 `to` 属性指定链接. -->
    	<!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    	<!-- <router-link to="/foo">Go to Foo</router-link>
    	<router-link to="/bar">Go to Bar</router-link> -->
		<!-- 路由出口 -->
		<!-- 路由匹配到的组件将渲染在这里 -->
		<!-- <router-view></router-view> -->
		<div class="photosContainer">
			<div class="wrapper">
				<span class="imgItem">
					<img src="./assets/girl1.jpg" />
				</span>
			</div>
			<div class="bigImg">
				<img src="./assets/girl1.jpg" />
			</div>
			<div class="imgDetail">
				<div class="avatar">
					<img src="./assets/girl1.jpg" />
				</div>
				<p>会员: wang</p>
				<p>手机: 13588040662</p>
				<p>积分: 1560</p>
			</div>
		</div>
		<div class="rightBar">
			<div class="bar_item red">新品</div>
			<div class="bar_item red">新品</div>
			<div class="bar_item blue">会员</div>
			<div class="bar_item orange">积分</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		mounted:function(){
			$('.wrapper').on('click','.imgItem img',function () {
				console.log($(this));
				$('.bigImg').show();
				$('.imgDetail').show();
				$('.bigImg img').attr('src', $(this)[0].currentSrc)
				$('.avatar img').attr('src', $(this)[0].currentSrc)
			});
			var arr = [];
            var len = 30; //图片个数
            var num1 = Math.random() * 10
            var num2 = Math.random() * 10

            for (var i = 0; i < len; i++) {
                arr.push(Math.random() * len);
                $(".imgItem:eq("+i+")").css('marginLeft', arr[i] + 'px');
				$(".imgItem:eq("+i+")").css('marginTop', arr[i] + 'px');
				// let img = document.createElement("img");
				// img.src = `img/src/assets/girl${i}.jpg`;
				// $('.wrapper').append(img)
                $('.wrapper').append(`<span class="imgItem">
                	<img src="./img/girl${i}.jpg" />
            	</span>`)
            }
		},
	}
</script>

<style scoped>
*{
    margin:0;
    padding: 0;
}
#app{
	width: 100%;
	height: 100%;
	overflow: hidden;
	margin: 0;
}
.photosContainer{
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    background-image: url('./assets/4.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.wrapper{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    float: left;
    overflow: hidden;
}
.imgItem{
    display: block;
    float: left;
    width: 100px;
    margin-left: 25px;
    margin-top: 10px;
}
.imgItem:hover{
    cursor: pointer;
}
.imgItem.class1{
  margin-left: 10px;
  margin-top: 28px;
}
.imgItem.class2{
    margin-left: 24px;
    margin-top: 14px;
 }
 .imgItem.class3{
    margin-left: 20px;
    margin-top: 10px;
 }
 .imgItem.class4{
    margin-left: 15px;
    margin-top: 5px;
 }
 .imgItem.class5{
    margin-left: 30px;
    margin-top: 10px;
 }
 .imgItem.class6{
    margin-left: 10px;
    margin-top: 19px;
 }
 .imgItem.class7{
    margin: 10px;
 }
 .imgItem.class8{
   margin: 14px;
 }
 .imgItem.class9{
    margin: 20px;
 }
 .imgItem.class10{
    margin: 12px;
 }
 .imgItem.class11{
    margin: 23px;
 }
 .imgItem.class12{
    margin: 20px;
 }
 .imgItem.class13{
    margin: 24px;
 }
 .imgItem.class14{
    margin: 30px;
 }
 .imgItem.class15{
    margin: 33px;
 }
 .imgItem.class16{
  margin: 12px;
 }
 .imgItem.class17{
    margin: 22px;
 }
.imgItem>img{
    width: 100%;
}
.rightBar{
    width: 60px;
    height: 500px;
    position: fixed;
    right: 0;
    top: 15vh;

}
.rightBar>.bar_item{
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    border-radius: 50%;
    margin: 10px 0;
    font-size: 13px;
}
.bar_item:hover{
    cursor: pointer;
}
.rightBar>.bar_item.red{
    background-color: rgb(234,71,750);
}
.rightBar>.bar_item.blue{
    background-color: rgb(68,149,152);
}
.rightBar>.bar_item.orange{
    background-color: rgb(243,196,66);
}
.bigImg{
    position: absolute;
    left: 40%;
    top: 20%;
    width: 240px;
    display: none;
}
.bigImg>img{
    width: 100%;
}
.imgDetail{
    position: absolute;
    right:0;
    top: 0;
    width: 150px;
    height: 450px;
    background-color: rgb(242,242,242);
    display: none;
}
.imgDetail>.avatar{
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin: 20px auto;
}
.avatar>img{
    width: 100%;
}
.imgDetail>p{
    height: 30px;
    font-size: 13px;
    margin-left: 15px;
    color: rgb(154,154,154);
}
@media screen and (width:768px){
    .info>.cell{
        width:80%;
    }
}
</style>

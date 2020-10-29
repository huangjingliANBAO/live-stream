<template>
	<view class="content">
			<!-- 轮播图 -->
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="200" style="width: 750rpx;height: 250rpx;">
				<swiper-item>
					<image src="../../static/1.jpg" style="width: 750rpx;height: 250rpx;"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/2.jpg" style="width: 750rpx;height: 250rpx;"></image>
				</swiper-item>
			</swiper>
		<!-- </view> -->
		<view class="flex flex-wrap">
			<l-list v-for="(item,index) in list" :key="index" :item="item" :index="index" @into="live"></l-list>
		</view>
	</view>
</template>

<script>
import navBar from '../../components/common/nav-bar.vue';
import lList from '../../components/common/l-list.vue';
	export default {
		components:{
			navBar,lList
		},
		data() {
			return{
				
				list:[
				{
					rank: 4,
					image: '../../static/me.jpg',
					people: 990,
					title: '体育',
					finish:0    //0表示结束 1 表示正在直播
				},
				{
					rank: 1,
					image: '../../static/me.jpg',
					people: 122,
					title: 'S10',
					finish:0    //0表示结束 1 表示正在直播
				},
				{
					rank: 3,
					image: '../../static/me.jpg',
					people: 324,
					title: '王者荣耀',
					finish: 0    //0表示结束 1 表示正在直播
				},
				{
					rank: 6,
					image: '../../static/me.jpg',
					people: 684,
					title: '中超',
					finish: 1    //0表示结束 1 表示正在直播
				},
				{
					rank: 5,
					image: '../../static/me.jpg',
					people: 543,
					title: '财经',
					finish: 1    //0表示结束 1 表示正在直播
				},
				{
					rank: 2,
					image: '../../static/me.jpg',
					people: 1100,
					title: '学习',
					finish: 1    //0表示结束 1 表示正在直播
				},
				]
			}
		},
		onLoad() {
			// uni.hideTabBar();
		},
		methods:{
			live(value) {
				// console.log(value);
				uni.navigateTo({
					url: '/pages/live/live'
				})
				
			}
		}
	}
</script>

<style>
</style>
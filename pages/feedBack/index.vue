
<template>
	<view class="feedbackWrap">
		<!-- 描述问题的容器 -->
		<view class="descr">
			<view class="text">
				<view class="itemWrap">
					<textarea
						placeholder-style="color: #C2C2C2"
						placeholder="请描述您所发现的问题或者宝贵意见"
						@blur="blurFeedBack"
					>
					</textarea>
				</view>
			</view>
		</view>
		<view class="upLoadPic">
			<view class="imgWrap">
				<view class="positWrap">
					<view class="title">
						<span>补充图片(选填)</span>
					</view>
					<view class="button">
						<view  
							class="imgShow"
							v-for="(item,index) in imgListUrl"  
							:key="index"
							v-if="imgListUrl"
							@click="chooseImg(item)"
						>
							<image
								:src="item" 
								mode="aspectFit"
							>
							</image>
							<view class="iconRed"  @click.stop="deleteImg(index)">
								<i class="iconfont icon-chacha"></i>
							</view>
						</view>
						<view class="border" @click="upLoadImg">
							<view class="icon">
								<i class="iconfont icon-shizi-copy"></i>
							</view>
						</view>
						<!-- <image src="http://tmp/GlJVlxBCpspC3c1175721b9d6adcec8cedad155d51f4.jpg" mode=""></image> -->
					</view>
				</view>
			</view>
		</view>
		<view class="contact">
			<view class="phoneText">
				<view class="positWrap">
					<view class="title">
						<span>联系方式</span>
					</view>
					<view class="textar">
						<view class="itemWrap">
							<textarea placeholder-style="color: #C2C2C2;"
							placeholder="请留下您的手机号码,方便给您及时的回复"
							@blur="blurOphone"
							/>
							</textarea>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view 
			class="submitButton"
			:class="{getPush: watchContent === true}"
			@click="pushTo()"
		>
			<view class="text">
				<span>提交</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 存储描述容器内容的变量
				textareaContent: '',
				// 存储电话的变量
				textareaNumber: '',
				// 上传图片的地址
				imgListUrl: [
					
				]
			}
		},
		computed:{
			// 探测是否可以上传
			watchContent() {
				// 当用户建议数据存在时则 处于可上传状态
				if(this.textareaContent) {
					return true
				}
			}
		},
		methods: {
			// 问题描述容器失去焦点时获取内容并存到data中,方便后面提交数据
			blurFeedBack(e) {
				// console.log(e.detail.value)
				this.textareaContent = e.detail.value
			},
			// 联系号码存储到data中
			blurOphone(e) {
				// console.log(e.detail.value)
				this.textareaNumber = e.detail.value
			},
			// 上传图片
			upLoadImg() {
				console.log("请求选择图片")
				uni.chooseImage({
					count: 3, // 最大选择张数
					success:res => {
						console.log(res.tempFilePaths)
						this.imgListUrl.push(res.tempFilePaths)
						console.log(this.imgListUrl)
					}
				})
			},
			// 预览图片操作
			chooseImg(data) {
				uni.previewImage({
					urls: data
				})
			},
			// 删除图片操作
			deleteImg(index) {
				// console.log('删除图片' + index)
				// 删除元素,splice第一个参数是选择的元素下标，第二个是删除元素的个数，第三个是替换的元素
				this.imgListUrl.splice(index,1)
			},
			// 提交数据方法
			pushTo() {
				if(!this.textareaContent) {
					return
				}
				console.log('提交数据')
				uni.showToast({
					title: '提交成功',
					icon: 'success',
					success(){
						setTimeout(() => {
							uni.navigateBack({
								delta: 1
							})
						},1200)
					},
				})
			}
		}
	}
</script>

<style lang="scss">
	// 建议页主容器
	.feedbackWrap {
		width: 100%;
		height: 100%;
		min-height: 100%;
		background: #F7F7F7;
		// 问题描述容器
		.descr {
			width: 100%;
			height: 500rpx;
			// background: red;
			.text {
				width: 100%;
				height: 95%;
				background-color: #FFF;
				position: relative;
				.itemWrap {
					width: 95%;
					height: 85%;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
				}
			}
		}
		// 上传图片容器
		.upLoadPic {
			width: 100%;
			min-height: 350rpx;
			// background: blue;
			// 实际可显示内容区域
			.imgWrap {
				width: 100%;
				height: 332rpx;
				background-color: #FFF;
				position: relative;
				// 方便定位调位置的外层容器
				.positWrap {
					width: 95%;
					height: 85%;
					position: absolute;
					// background-color: red;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
					// 文字标题： 补充图片(选填)
					.title {
						width: 100%;
						height: 30%;
						line-height: 85rpx;
						// background-color: blue;
						color: #434343;
						// font-weight: bold;
						font-size: 44rpx;
					}
					// 上传图片按钮外容器
					.button {
						width: 100%;
						height: 70%;
						display: flex;
						// 展示已选择图片的容器
						.imgShow {
							width: 200rpx;
							height: 200rpx;
							// background-color: pink;
							margin-right: 10rpx;
							position: relative;
							image {
								width: 100%;
								height: 100%;
							}
							.iconRed {
								position: absolute;
								right: -12rpx;
								top: -18rpx;
								z-index: 999;
								width: 40rpx;
								height: 40rpx;
								.icon-chacha {
									font-size: 44rpx;
									color: red;
								}
							}
						}
						// 上传按钮容器
						.border {
							width: 200rpx;
							height: 200rpx;
							// background-color: pink;
							border: 1rpx dashed #EDEDED;
							position: relative;
							// 按钮中心的icon容器
							.icon {
								position: absolute;
								top: 50%;
								left: 50%;
								transform: translate(-50%,-50%);
								// icon
								.icon-shizi-copy {
									font-size: 60rpx;
									color: #C1C1C1;
								}
							}
						}
					}
				}
			}
		}
		// 联系方式容器
		.contact {
			width: 100%;
			height: 550rpx;
			// background: pink;
			.phoneText {
				width: 100%;
				height: 40%;
				background-color: #FFF;
				position: relative;
				.positWrap {
					width: 95%;
					height: 85%;
					position: absolute;
					// background-color: red;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
					.title {
						width: 100%;
						height: 50%;
						line-height: 94rpx;
						// background-color: red;
						color: #434343;
						// font-weight: bold;
						font-size: 44rpx;
					}
					.textar {
						width: 100%;
						height: 50%;
						// background-color: blue;
						position: relative;
						.itemWrap {
							width: 100%;
							height: 55%;
							line-height: 25rpx;
							// background-color: pink;
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%,-50%);
						}
					}
				}
			}
		}
		// 上传按钮容器
		.submitButton {
			position: fixed;
			width: 97%;
			height: 100rpx;
			line-height: 100rpx;
			background-color: #FEC284;
			border-radius: 50rpx;
			bottom: 10rpx;
			left: 50%;
			transform: translateX(-50%);
			.text {
				text-align: center;
				color: #FCDFBB;
			}
		}
		
		// 上传按钮处于可上传状态
		.getPush {
			background-color: orange;
			.text {
				color: #FFF;
			}
		}
	}
</style>

<template>
    <div style="background-color: #E9E9E9">
        <div class="container " style="color: #8cc6ff;">
            <div class="aotodiv" style="padding-top: 26px">
            <span style="font-size: 28px;text-shadow: #404040 1px 1px 4px">
                   广式坑爹货
            </span>
            </div>
            <div class="aotodiv">
                   <span style="font-size: 13px;font-weight: bold;">
                字段时发生长啊沙发沙发沙发沙发按时付款萨拉和法律界ask发
            </span>
            </div>
            <div style="margin-top: 80px; height: 100px;"
                 class="aotodiv vertical">
                <el-avatar :size="80" :src="imgsrc"></el-avatar>
                <span style="margin-left: 20px;font-size: 22px">
                            烦烦烦

                -------    {{ $route.meta}}------------
                        </span>
            </div>
            <div style="height: 1000px">

                <!-- 事件内容--  ID  --相关人----处理结果 ----- 回馈ID----->
                <!-- 创建------(发起 -保存--)   发起 ----->
                <!-- 接收------(同意 -打回--)  ----完成--- 反馈上一个ID-->
                <!--      < 节点 > ID -相关人物---人物事件-事件后相应反馈

                   <  表1 > 事件流----1-2-3-4-5-
                   <  表2 > 节点内容---------发送至---XXX ----XXX的处理回执----
                   < 事件发起 > 事件ID  ----发起人--事件流(表)ID----时间--
                           1----A---

                   new (persons------)
                           2-----AB---
                   < 节点模式 > 节点1 ----节点3----节点2 or END
                流程
                 1(创建者)->2（顺序关系)->3()
                       节点 U->同时发给多人->
                       事件流----1-2-3-4-5-6 ---事件进行至 节点3(xxx)
                                           (事件处理完毕----转发至下一流程(打回重审核
                                                          1.返回至上一级？ 2.返回至初始人重发失败
                                                   ))-----()
                                   (表---事件处理)
                         (独立人事件接收--  事件ID---事件内容----事件处理结果-->)
                3-->

            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: "Personinfo",
        mounted() {
        },
        data() {
            return {
                imgsrc: 'http://read.html5.qq.com/image?imageUrl=' +
                    'http://qlogo3.store.qq.com/qzone/349652514/349652514/100?1545056438'
            }
        }
    }
</script>

<style scoped>

    .vertical {

        display: flex;
        align-items: Center;

    }

    .container {
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        background-image: url("//i.gtimg.cn/qzone/space_item/orig/3/72019_top.jpg");
    }

    .aotodiv {
        margin: auto;
        max-width: 1100px;
    }

</style>
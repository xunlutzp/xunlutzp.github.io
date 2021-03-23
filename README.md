# Introduction

这是《寻路桐梓坡》内部测试版，不得传播。

对于详细介绍及许可信息等，请参阅[寻路桐梓坡 · 声明](sheng-ming.md)。

> [!WARNING|style:callout|label:需要注意]
> 虽然[声明](sheng-ming.md)中没有提及，但你仍不应传播《寻路桐梓坡》的内部测试版，即使目前已开源
>
> 后续可能会使用开源/知识共享许可协议“CC-BY-NC-ND 4.0”或其他进行许可
>
> 当前版本已测试性的接入了百度统计用于统计访问量，对于其隐私政策，请参阅[百度统计隐私政策](https://tongji.baidu.com/web/help/article?id=330&type=0&castk=LTE%3D)
>
> 在最终发布前，这些信息可能会随时变化。

## 内容编写进度

+ [寻路桐梓坡 · 序](qian-yan.md)（已完成）✅
+ [第一章：学习方法介绍](Ch1_xue-xi-fang-fa-jie-shao/readme.md)（一篇未提交，且未编入目录）❌
+ [第二章：竞技竞赛介绍](Ch2_jing-ji-jing-sai-jie-shao/readme.md)（已全部提交，但一篇被标记为待完善）⭕
+ [第三章：语言学习介绍](Ch3_yu-yan-xue-xi-jie-shao/readme.md)（已全部提交）✅
+ [第四章：活动与实践介绍](Ch4_huo-dong-yu-shi-jian-jie-shao/readme.md)（一篇未提交）❌
+ [第五章：科研训练和荣誉](Ch5_ke-yan-xun-lian-he-rong-yu/readme.md)（已全部提交）✅
+ [第六章：基地医院实习体会](Ch6_ji-di-yi-yuan-shi-xi-ti-hui/readme.md)（已全部提交，但一篇被标记为待完善）⭕
+ [第七章：国际交流项目](Ch7_guo-ji-jiao-liu-xiang-mu/readme.md)（已全部提交）✅
+ [第八章：世界观，价值观与感悟](Ch8_shi-jie-guan-jia-zhi-guan-yu-gan-wo/readme.md)（一篇未提交）❌

## 网页版排版进度

### 第一阶段（转写）

转写全部已提交的Word文档为Markdown文档并进行初步排版（已完成）✅

+ 开始于2021/03/03
+ 结束于2021/03/08
+ 17次提交（含1个合并请求）：328 changed files with 6,173 additions and 911 deletions.
    + 差异比较：[d58e30d...d88c130](https://github.com/zcx980605/Survive_XYSM_dev/compare/d58e30d...d88c130)

### 第二阶段（精细排版）

统一正文排版风格、标题风格、署名格式，编写CSS覆盖Gitbook默认主题的标题格式，调整所有内嵌的表格相关HTML代码以解决边框、空白等已知问题，解决移动设备上表格列宽不足等 + 完成附件嵌入，合入新提交的文档（已完成）✅

+ 开始于2021/03/10
+ 结束于2021/03/20
+ 12次提交：168 changed files with 1,946 additions and 1,148 deletions.
    + 差异比较：[d88c130...92beb3b](https://github.com/zcx980605/Survive_XYSM_dev/compare/d88c130...92beb3b)


### 第三阶段（内容无关校对）

更正标点符号错误，更正常见错别字，删除多余空格、回车，统一行尾序列为LF + 合入新提交的文档，更正上一阶段未发现的问题（正在进行）⏳

+ 开始于：2021/03/21
+ 本次更新（第2次提交）：2021/03/23

+ 内容记录：
    + “经验贴” --> “经验帖”：27个文件中的57处
    + “亦或” --> “抑或”：4个文件中的4处

### 第四阶段（内容校对）

合入内容校对组的修改（未开始）🕘

----

## 用于测试的信息

### 这是用于测试的三级标题

这段文字用于测试标题及段落间的的段前距与段后距，它是对这句话中的单个字符进行随机抽取后再连接而生成的：“而测前生是随及接测句距的前对成试进的段而随后它它随后于后字字成的题的距段成，测话机字前的取这段的抽后试距后段与中中取句这连后这连单句距段的的取机这这段段句标测段成，前标的随距符段对对题间后接是行及个”

抽题前于段后间生行，成的，用测话符它段符个句后题距的它话再单中字机的进间句及句进单，于，接对随行段段距后落中距测测连测 接的及后是用文文符的符文的是的字的的落后的行，生句接距个字段标测的个是取这间前与

### 以下文档需注意测试
#### 包含复杂格式的

[iGEM大赛经验帖](Ch2_jing-ji-jing-sai-jie-shao/4_iGEM-da-sai-jing-yan.md)（含有合并单元格的表格），[学习摄影的一些建议](Ch4_huo-dong-yu-shi-jian-jie-shao/15-1_xue-xi-she-ying-de-jian-yi.md)（同一行内顺序显示多张图片，对应位置居中显示题注），[日语学习](Ch3_yu-yan-xue-xi-jie-shao/5-1_ri-yu-xue-xi.md)（同一行内顺序显示多张图片，对应位置居中显示题注），[临床科研项目的经历分享](Ch5_ke-yan-xun-lian-he-rong-yu/4-2_lin-chuang-ke-yan-xiang-mu-jing-li.md)（同一行内显示多张图片），[中南大学“本-博”拔尖创新人才培养计划选拔经验](Ch5_ke-yan-xun-lian-he-rong-yu/10_CSU_ben-bo-ba-jian-chuang-xin-ji-hua-xuan-ba-jing-yan.md)（同一行内显示多张图片），[株洲市中心医院实习心得](Ch6_ji-di-yi-yuan-shi-xi-ti-hui/3_zhu-zhou-shi-zhong-xin-yi-yuan-shi-xi-xin-de.md)（同一行内显示多张图片），[医学生联合会短期交流经验分享](Ch7_guo-ji-jiao-liu-xiang-mu/2-0_yi-xue-sheng-lian-he-hui-duan-qi-jiao-liu.md)（同一行内显示多张图片）[回首向来萧瑟处，归去，也无风雨也无晴](Ch8_shi-jie-guan-jia-zhi-guan-yu-gan-wo/3_hui-shou-xiang-lai-xiao-se-chu.md)（设置了字体颜色）。

#### 引用了特殊插件的

+ ~~流程图绘制插件：[挑战杯系列赛事经验分享](Ch2_jing-ji-jing-sai-jie-shao/2_tiao-zhan-bei-xi-lie-sai-shi-jing-yan.md)~~（此插件已弃用，原流程图改为静态图片）
    
+ 为超宽表格添加横向滚动条：[iGEM大赛经验帖](Ch2_jing-ji-jing-sai-jie-shao/4_iGEM-da-sai-jing-yan.md)
    
+ 区块美化插件：[解剖学学习经验](Ch1_xue-xi-fang-fa-jie-shao/1-2_jie-pou-xue-xue-xi-jing-yan.md)，[局部解剖学学习体会](Ch1_xue-xi-fang-fa-jie-shao/1-4_ju-bu-jie-pou-xue-xue-xi-ti-hui.md)，[内科学学习心得](Ch1_xue-xi-fang-fa-jie-shao/5-2_nei-ke-xue-xue-xi-xin-de.md)，[药理学学习经验分享](Ch1_xue-xi-fang-fa-jie-shao/3_yao-li-xue-xue-xi-jing-yan.md)，[妇产科学学习攻略](Ch1_xue-xi-fang-fa-jie-shao/6_fu-chan-ke-xue-xue-xi-gong-lve.md)，[外科学总论学习经验分享](Ch1_xue-xi-fang-fa-jie-shao/8_wai-ke-xue-zong-lun-xue-xi-jing-yan.md)，[iGEM大赛经验帖](Ch2_jing-ji-jing-sai-jie-shao/4_iGEM-da-sai-jing-yan.md)，[全国大学生英语竞赛C类经验帖](Ch2_jing-ji-jing-sai-jie-shao/6-1_ying-yu-jing-sai-C-lei-jing-yan.md)，[托福学习经验](Ch3_yu-yan-xue-xi-jie-shao/1_tuo-fu-xue-xi-jing-yan.md)，[医学英语学习](Ch3_yu-yan-xue-xi-jie-shao/4_yi-xue-ying-yu-xue-xi.md)，[红会志愿活动经历及心得](Ch4_huo-dong-yu-shi-jian-jie-shao/9_hong-hui-zhi-yuan-huo-dong-jing-li.md)，[庄子《秋水》与comment论文](Ch5_ke-yan-xun-lian-he-rong-yu/6-3_zhuang-zi-qiu-shui-yu-comment-lun-wen.md)，[综合素质测评解读](Ch5_ke-yan-xun-lian-he-rong-yu/8_zong-he-su-zhi-ce-ping-jie-du.md)，[临五保研政策解读](Ch5_ke-yan-xun-lian-he-rong-yu/9_lin-wu-bao-yan-zheng-ce-jie-du.md)，[耶鲁大学短期交换经验帖](Ch7_guo-ji-jiao-liu-xiang-mu/1_ye-lu-da-xue-duan-qi-jiao-huan-jing-yan.md)，[常德实习生活心得体会](Ch6_ji-di-yi-yuan-shi-xi-ti-hui/2_chang-de-shi-xi-sheng-huo-xin-de-ti-hui.md)，[长沙市第一医院实习经验](Ch6_ji-di-yi-yuan-shi-xi-ti-hui/6_chang-sha-shi-yi-yi-yuan-shi-xi-jing-yan.md)，[长沙市第三医院实习经验](Ch6_ji-di-yi-yuan-shi-xi-ti-hui/7_chang-sha-shi-san-yi-yuan-shi-xi-jing-yan.md)，[湘雅医院实习心得](Ch6_ji-di-yi-yuan-shi-xi-ti-hui/9_xiang-ya-fu-yi-shi-xi-xin-de.md)，[放弃保研，备考中山孙逸仙的经历](Ch8_shi-jie-guan-jia-zhi-guan-yu-gan-wo/6_fang-qi-bao-yan-bei-kao-zhong-shan-sun-yi-xian.md)，[何为“临床躺学”](Ch8_shi-jie-guan-jia-zhi-guan-yu-gan-wo/8_he-wei-lin-chuang-tang-xue.md)。

#### 可能存在兼容性问题的

+ 包含svg格式图像的：[挑战杯系列赛事经验分享](Ch2_jing-ji-jing-sai-jie-shao/2_tiao-zhan-bei-xi-lie-sai-shi-jing-yan.md)，[内科学经验分享](Ch1_xue-xi-fang-fa-jie-shao/5-1_nei-ke-xue-jing-yan-fen-xiang.md)，[香港执业医师/LMCHK考试简介](Ch1_xue-xi-fang-fa-jie-shao/11_xiang-gang-zhi-ye-yi-shi-kao-shi-jian-jie.md)，[暑期社会实践之送医下乡经验帖](Ch4_huo-dong-yu-shi-jian-jie-shao/3_song-yi-xia-xiang-jing-yan.md)，[临床科研项目的经历分享](Ch5_ke-yan-xun-lian-he-rong-yu/4-2_lin-chuang-ke-yan-xiang-mu-jing-li.md)

+ 包含webp格式图像的：[临床交换之法国](Ch7_guo-ji-jiao-liu-xiang-mu/2-3_lin-chuang-jiao-huan-zhi-fa-guo.md)

+ 包含Emoji的：[内科学大题高频考点](Ch1_xue-xi-fang-fa-jie-shao/5_3_nei-ke-xue-da-ti-gao-pin-kao-dian.md)，[街舞社经历](Ch4_huo-dong-yu-shi-jian-jie-shao/7_jie-wu-she-jing-li.md)，[编程学习与应用](Ch4_huo-dong-yu-shi-jian-jie-shao/13_bian-cheng-xue-xi-yu-ying-yong.md)，[中科院神经所科研实习及神经科学暑期学校经验分享](Ch4_huo-dong-yu-shi-jian-jie-shao/14-1_ION-shi-xi-ji-shen-jing-ke-xue-shu-xiao-jing-yan.md)。

#### 包含图片的

[生理学学习经验](Ch1_xue-xi-fang-fa-jie-shao/2_sheng-li-xue-xue-xi-jing-yan.md)，[内科学学习心得](Ch1_xue-xi-fang-fa-jie-shao/5-2_nei-ke-xue-xue-xi-xin-de.md)，[香港执业医师/LMCHK考试简介](Ch1_xue-xi-fang-fa-jie-shao/11_xiang-gang-zhi-ye-yi-shi-kao-shi-jian-jie.md)，[辅修与多领域探索](Ch1_xue-xi-fang-fa-jie-shao/12_fu-xiu-yv-duo-ling-yv-tan-suo.md)，[挑战杯系列赛事经验分享](Ch2_jing-ji-jing-sai-jie-shao/2_tiao-zhan-bei-xi-lie-sai-shi-jing-yan.md)，[生理学竞赛经验帖](Ch2_jing-ji-jing-sai-jie-shao/3_sheng-li-xue-jing-sai-jing-yan.md)，[iGEM大赛经验帖](Ch2_jing-ji-jing-sai-jie-shao/4_iGEM-da-sai-jing-yan.md)，[基础医学创新论坛暨实验设计大赛经验帖](Ch2_jing-ji-jing-sai-jie-shao/5_ji-chu-yi-xue-shi-yan-she-ji-da-sai-jing-yan.md)，[全国/美国数模竞赛经验帖](Ch2_jing-ji-jing-sai-jie-shao/7_shu-mo-jing-sai-jing-yan.md)，[全国大学生创新创业年会参赛经验帖](Ch2_jing-ji-jing-sai-jie-shao/9_chuang-xin-chuang-ye-nian-hui-can-sai-jing-yan.md)，[英语六级考试经验帖](Ch3_yu-yan-xue-xi-jie-shao/3_ying-yu-liu-ji-kao-shi-jing-yan.md)，[医学英语学习](Ch3_yu-yan-xue-xi-jie-shao/4_yi-xue-ying-yu-xue-xi.md)，[日语学习](Ch3_yu-yan-xue-xi-jie-shao/5-1_ri-yu-xue-xi.md)，[俄语学习经验帖](Ch3_yu-yan-xue-xi-jie-shao/5-4_e-yu-xue-xi-jing-yan.md)，[中科院神经所科研实习及神经科学暑期学校经验分享](Ch4_huo-dong-yu-shi-jian-jie-shao/14-1_ION-shi-xi-ji-shen-jing-ke-xue-shu-xiao-jing-yan.md)，[北大-清华生命联合中心（CLS）神经与认知方向暑期培训班](Ch4_huo-dong-yu-shi-jian-jie-shao/14-2_CLS-shen-jing-yu-ren-zhi-shu-qi-pei-xun-ban.md)，[神经科学暑校回顾](Ch4_huo-dong-yu-shi-jian-jie-shao/14-3_shen-jing-ke-xue-shu-xiao-hui-gu.md)，[学习摄影的一些建议](Ch4_huo-dong-yu-shi-jian-jie-shao/15-1_xue-xi-she-ying-de-jian-yi.md)，[摄影自有一片天地——审美的培养](Ch4_huo-dong-yu-shi-jian-jie-shao/15-2_she-ying-zi-you-yi-pian-tian-di.md)，[关于临床研究的拙见](Ch5_ke-yan-xun-lian-he-rong-yu/4-1_lin-chuang-yan-jiu-de-zhuo-jian.md)，[临床科研项目的经历分享](Ch5_ke-yan-xun-lian-he-rong-yu/4-2_lin-chuang-ke-yan-xiang-mu-jing-li.md)，[临五保研政策解读](Ch5_ke-yan-xun-lian-he-rong-yu/9_lin-wu-bao-yan-zheng-ce-jie-du.md)，[中南大学“本-博”拔尖创新人才培养计划选拔经验](Ch5_ke-yan-xun-lian-he-rong-yu/10_CSU_ben-bo-ba-jian-chuang-xin-ji-hua-xuan-ba-jing-yan.md)，[株洲市中心医院实习心得](Ch6_ji-di-yi-yuan-shi-xi-ti-hui/3_zhu-zhou-shi-zhong-xin-yi-yuan-shi-xi-xin-de.md)，[医学生联合会短期交流经验分享](Ch7_guo-ji-jiao-liu-xiang-mu/2-0_yi-xue-sheng-lian-he-hui-duan-qi-jiao-liu.md)，[临床交换之日本](Ch7_guo-ji-jiao-liu-xiang-mu/2-1_lin-chuang-jiao-huan-zhi-ri-ben.md)，[临床交换之捷克](Ch7_guo-ji-jiao-liu-xiang-mu/2-2_lin-chuang-jiao-huan-zhi-jie-ke.md)，[临床交换之法国](Ch7_guo-ji-jiao-liu-xiang-mu/2-3_lin-chuang-jiao-huan-zhi-fa-guo.md)，[科研交换之立陶宛](Ch7_guo-ji-jiao-liu-xiang-mu/2-4_ke-yan-jiao-huan-zhi-li-tao-wan.md)，[科研交换之巴西](Ch7_guo-ji-jiao-liu-xiang-mu/2-5_ke-yan-jiao-huan-zhi-ba-xi.md)。

#### 其他

+ 包含文章间链接的（除外目录）：[运动心得](Ch4_huo-dong-yu-shi-jian-jie-shao/12_yun-dong-xin-de.md)

+ 包含附件的：[内科学经验分享](Ch1_xue-xi-fang-fa-jie-shao/5-1_nei-ke-xue-jing-yan-fen-xiang.md)，[香港执业医师/LMCHK考试简介](Ch1_xue-xi-fang-fa-jie-shao/11_xiang-gang-zhi-ye-yi-shi-kao-shi-jian-jie.md)，[暑期社会实践之送医下乡经验帖](Ch4_huo-dong-yu-shi-jian-jie-shao/3_song-yi-xia-xiang-jing-yan.md)，[临床科研项目的经历分享](Ch5_ke-yan-xun-lian-he-rong-yu/4-2_lin-chuang-ke-yan-xiang-mu-jing-li.md)。

+ 包含脚注的：[香港执业医师/LMCHK考试简介](Ch1_xue-xi-fang-fa-jie-shao/11_xiang-gang-zhi-ye-yi-shi-kao-shi-jian-jie.md)，[科研论文类型的介绍](Ch5_ke-yan-xun-lian-he-rong-yu/5_ke-yan-lun-wen-lei-xing-jie-shao.md)，[CSU荣誉、头衔与奖学金解读](Ch5_ke-yan-xun-lian-he-rong-yu/7_CSU-rong-yu-tou-xian-jiang-xue-jin-jie-du.md)。

##### 这是用于测试的五级标题
###### 这是用于测试的六级标题
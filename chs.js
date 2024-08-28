/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Continue": "继续",
    "You are a beautiful little planet, hanging out in a cosy little solar system": "你是一个美丽的小星球，生活在一个舒适的小太阳系里",
    "About": "关于",
    "Sound": "声音",
    "Music": "音乐",
    "Start over": "重新开始",
    "Import savegame": "导入存档",
    "Export savegame": "导出存档",
    "Back": "返回",
    "Impatient mode": "急躁模式",
    "Your surface": "您的表面",
    "Explore": "探索",
    "Space": "太空",
    "On your surface there are beautiful lush forests, and vast oceans. Unfortunately there is no life to enjoy the paradise": "在你的表面上有美丽茂盛的森林和浩瀚的海洋。不幸的是没有生命可以享受天堂",
    "Asteroid": "小行星",
    "There's something out there in the distance": "远处有什么东西",
    "Talk to the robot": "与机器人交谈",
    "Leave Burger on the asteroid": "把伯格留在小行星上",
    "Take Burger with you": "把伯格带走",
    "The robot seems happy to see you. It says that it was just enjoying the sunshine and that its name is Burger. It tells you that it can't remember much of anything since all of its memory was on a USB stick, and somehow it has gotten that USB stick misplaced. How unfortunate!": "机器人似乎很高兴见到你。它说它只是在享受阳光，它的名字叫伯格。它告诉你它什么都记不住，因为它所有的内存都在u盘上，不知怎么的，它把u盘放错了地方。多么不幸啊!",
    "You reach the huge potato-shaped chunk of asteroid. Nothing is there except for a small robot": "你到达了一个巨大的土豆形状的小行星。这里除了一个小机器人什么也没有",
    "Burger chirps happily as he softly lands on your surface.": "当伯格轻轻落在你的表面时，它高兴地叫着。",
    "Ok!": "好的!",
    "On your surface there are beautiful lush forests, and vast oceans. Burger is chirping through the forests": "在你的表面上有美丽茂盛的森林和浩瀚的海洋。伯格在森林里叽叽喳喳地叫着",
    "Shack you need to build before you can build everything else": "在你能建造其他东西之前，你需要建造一个小屋",
    "Talk to Burger": "和伯格交谈",
    "Workshop": "作坊",
    "Hello?": "哈喽？",
    "It's all totally dark here. Is anything here at all?": "这里一片漆黑。这里有什么东西吗?",
    "Wait, something is here!": "等等，这里有东西!",
    "Hey, look! A beautiful planet appeared": "嘿，看!一颗美丽的行星出现了",
    "BANG!": "砰！",
    "Is that you?": "那是你吗？",
    "That's pretty cool. Being a planet must be so exciting!": "太酷了。成为一颗行星一定很令人兴奋!",
    "You are so big and round and full of life": "你太大又圆，充满了生命",
    "But don't worry about it. There's probably plenty of life out in the universe": "不过别担心。宇宙中可能有很多生命",
    "Oh.. what's that? There's no life on your surface?": "哦. .那是什么?你的表面上没有生命吗?",
    "Build": "建造",
    "Well that figures. You were only just created in that big explosion before": "这是有道理的。你刚刚在之前的大爆炸中被创造出来",
    "Burger is happy to see you. It tells you that it can in fact be quite productive.\n What do you want burger to do?": "伯格很高兴见到你。它告诉你，它实际上可以非常高效。你想让伯格做什么?",
    "Chop wood": "砍木头",
    "Dig for gold": "开采黄金",
    "Hear secret": "聆听秘密",
    "Burger is chirping happily as it is getting to work": "伯格高兴地叫着，因为它要去工作了",
    "Right now Burger is chopping": "现在伯格砍伐",
    "In this workshop you can build anything! As long as it's one of the few options below": "在这个工坊里，你可以建造任何东西!只要它是下面几个选项之一",
    "Nimble axe": "灵动斧",
    "Upgrade": "升级",
    "Slot machine": "游戏机",
    "Don't know what to use your gold for? Now you can use your gold to win even more gold! If you are lucky you might even win some stardust": "不知道用你的黄金做什么?现在你可以用你的黄金赢得更多!如果幸运的话，你甚至可能赢得一些星尘",
    "Fragile gold drill": "脆弱的黄金钻头",
    "House for friends": "朋友之家",
    "If you want anybody living on you, they need some place to live": "如果你想让别人住在你身上，他们得有地方住",
    "BAM!": "砰!",
    "Axe upgraded!": "斧子已升级！",
    "Average axe": "平均斧",
    "Slightly luxurious axe": "略豪华的斧头",
    "You don't have any friends yet.. Sad. Very sad": "你还没有朋友…真悲哀。非常难过",
    "Friend house": "好友之家",
    "You reach the huge potato-shaped chunk of asteroid. Nothing is there.. at all": "你到达了巨大的土豆形状的小行星。什么都没有……完全没有",
    "Psst! Burger is telling you a secret.\n The asteroid is actually a giant Coco Pops. What a revelation!": "嘘!伯格告诉你一个秘密。\n这颗小行星实际上是一个巨大的可可棒棒糖。这是什么启示啊!",
    "Hear news": "听新闻",
    "Show me": "给我看看",
    "Burger tells you that it has found a strange valley while working. It seems to be riddled with ancient dungeon entrances..": "伯格告诉你，它在工作时发现了一个奇怪的山谷。它似乎布满了古老的地牢入口…",
    "It's a valley full of dungeons. Leading into.. you? You'll need somebody to go down there, because you obviously can't": "这是一个充满地牢的山谷。通向……你?你需要有人去那里，因为显然你去不了",
    "Dungeons": "地牢",
    "Hear good news": "听好消息",
    "Right now Burger has a": "现在伯格有一个",
    "of mining": "开采",
    "Gold drill upgraded!": "黄金钻头已升级！",
    "Good enough gold drill": "足够好的黄金钻头",
    "Burger seems in a particularly good mood today. It shows you a handfuld of some glittery stuff.": "伯格今天看起来心情特别好。它向你展示了一些闪闪发光的东西。",
    "Burger tells you that it won it on the slot machine. You should give it a try!": "伯格告诉你它是在游戏机上赢的。你应该试试!",
    "Get the stardust!": "获取星尘！",
    "It's STARDUST!": "是星尘！",
    "Ka-ching!": "咔嚓!",
    "Very luxurious axe": "非常豪华的斧头",
    "Check it out": "去看看",
    "You see a small object in the distance. Is it a flying saucer? With a tiny gnome-like guy sitting in it? Smiling?": "你看到远处有一个小物体。它是一个飞碟吗?里面坐着个侏儒似的家伙?微笑?",
    "Space Ben is sitting in his space shop.. Looking at you. Do you want to buy something? Do you?": "太空本坐在他的太空商店里。看着你。你想买什么东西吗?是吗?",
    "Starmap": "星图",
    "Green USB stick": "绿色U盘",
    "Orange USB stick": "橙色U盘",
    "Red USB stick": "红色U盘",
    "Perhaps it's full of secrets": "也许它充满了秘密",
    "Somebody drew with space ink on this old piece of paper.. It's supposed to show the way to someplace cool": "有人用太空墨水在这张旧纸上画画。它应该能指引我们去一个很酷的地方",
    "Buy": "购买",
    "Shop": "商店",
    "Oh yeah!": "哦，耶!",
    "You bought a very mystical starmap. Attempt to read it?": "你买了一张非常神秘的星图。试着阅读一下?",
    "You found a freezer floating in space!": "你发现了一个漂浮在太空中的冰箱!",
    "Yes!": "好！",
    "Are you sure you want to open the freezer? Really?": "你确定要打开冰箱吗?真的吗?",
    "OH BOY!": "哦，天哪!",
    "It's a furious bullman. Somebody clearly wanted this guy to cool it! He screams that his name is Derek, and that he is really cold and really pissed. However, he joins your space quest": "这是一个愤怒的牛头人。显然有人想让这家伙冷静下来!他尖叫着说他叫德里克，他很冷，很生气。然而，他加入了你的太空探索",
    "Derek's breathing heavily": "德里克呼吸沉重",
    "Equipment": "装备",
    "Talk": "交谈",
    "Derek is not wearing anything. How embarrassing!": "德里克什么都没穿。多尴尬啊!",
    "He bellows his thankfulness. He is indeed very happy that you let him beat up jerks. It's what he loves to do the most.": "他大声表示感谢。你让他揍混蛋，他确实很高兴。这是他最喜欢做的事。",
    "Talk more": "继续交谈",
    "Derek wipes away some spare froth from his mouth": "德里克擦去嘴里多余的泡沫",
    "Derek yells loudly while he practices some punches.": "德里克一边大声喊叫一边练习出拳。",
    "He explains, that he is allowed to go home only after beating the toughest most endless dungeon there is. Such a dungeon is said to exist in the belly of a monstrous creature.": "他解释说，只有在打败了最艰难、最无尽的地牢后，他才能回家。据说这样的地牢存在于一个怪物的肚子里。",
    "He grows tired of shouting, and with a calm voice he tells you about how he ended up in a freezer. It is custom for all young Derekulians to be sent out in the universe to prove their jerk handling skills.": "他厌倦了大喊大叫，然后用平静的声音告诉你他是如何被关进冷冻室的。对于所有年轻的德雷库利安人来说，被送到宇宙中去证明他们对付混蛋的能力是一种习惯。",
    "He shouts loudly, and starts to cry and shout at the same time? He misses his home world Derekulus X.": "他大声喊叫，同时又哭又喊。他想念他的故乡——德瑞库勒斯X。",
    "He stumbles over a log of wood, and gets embarrassed that you can't hide your laughter.": "他被一根木头绊倒了，因为你无法掩饰你的笑声而感到尴尬。",
    "Space Ben will conduct some research into making stronger health potion. For a reasonable price your potions will heal": "太空本将进行一些研究，以制作更强的健康药水。以合理的价格，你的药剂将恢复",
    ".. You have": ".. 你有",
    "Buy Chests": "购买宝箱",
    "Experimental Potion Research": "试验药剂的研究",
    "Health potion": "生命药水",
    "It heals like": "它可以恢复大约",
    "upgrade": "升级",
    "You found something very stupid looking": "你发现了一些看起来很蠢的东西",
    "Axe of all trades": "万金油之斧",
    "Derek's Dungeon School": "德里克地牢学校",
    "Want your Derek to get any better. Education is the only way to go!": "希望你的德里克能好起来。教育是唯一的出路!",
    "build": "建造",
    "Welcome to the School of Derek! That bull might look primitive, but you can teach him a few odd tricks": "欢迎来到德里克学校!那头公牛可能看起来很原始，但你可以教它一些奇怪的把戏",
    "Classroom": "教室",
    "Gym": "健身房",
    "Upgrade Derek's potion belt capacity, so he can carry": "升级德里克的魔药腰带容量，让他可以携带",
    "Upgrade Derek's strength to": "把德里克的力量升级到",
    "Upgrade Derek's health to": "把德里克的生命值升级到",
    ". A healthy Derek is a Derek that's still alive. You should know this by now": "． 健康的德里克才是活着的德里克。你现在应该知道了",
    ". He can throttle more jerks to their doom without getting hurt": "． 他可以掐死更多的混蛋而不受伤",
    "And I'm pretty tough! I have": "而且我很坚强!我有",
    "Bull Fart": "牛屁",
    "Door of Regret": "悔恨之门",
    "Hey man! Am I pumped or what!?": "嘿，伙计!我是不是太兴奋了?",
    "Look! I'm carrying": "看！我带了",
    "Make Derek STRONGER!": "让德里克更强大!",
    "More spacious potion belt": "更宽敞的药水腰带",
    "Pump Derek's health": "提升德里克的生命值",
    "potions. He is gonna need all that juice": "药水。他会需要那些果汁的",
    "Research SUCCESSFUL!": "研究成功！",
    "Decent Chest": "像样的宝箱",
    "Excellent Chest": "卓越的宝箱",
    "Scruffy Chest": "邋遢的宝箱",
    "Crazy Chest": "疯狂的宝箱",
    "Where did Space Ben get all these chests from? You probably shouldn't ask": "太空本从哪弄来这些箱子的?你也许不应该问",
    "You reach the huge potato-shaped chunk of asteroid. No wait. It's actually a giant Coco Pops!": "你到达了一个巨大的土豆形状的小行星。不，等等。它实际上是一个巨大的可可棒棒糖!",
    "Automatic Swirly Straw": "自动旋涡吸管",
    "You reach the huge potato-shaped chunk of asteroid. No wait. It's actually a giant Coco Pops!\nYour automatic wooden straw is sucking out delicious coco at a rate of": "你到达了一个巨大的土豆形状的小行星。不，等等。它实际上是一个巨大的可可棒棒糖!你的自动木吸管正在吸出美味的可可，速度是",
    "Upgrade swirly straw": "升级旋涡吸管",
    ". Delightful!": "。太好了!",
    "Suck that coco!": "吮吸可可!",
    "Try your luck on the slot machine. You might win some gold. You might even win some stardust": "在游戏机上碰碰运气。你可能会赢得一些黄金。你甚至可能赢得一些星尘",
    "Play the slots": "玩游戏机",
    "You plug the USB stick into burgers face. He jolts and bobs with sweet memories: He used to own a big villa in a neighbouring galaxy. He had wife, kids and even a dog": "你把u盘插到伯格的脸上。他在甜蜜的回忆中摇摆不定:他曾经在邻近的星系拥有一座大别墅。他有妻子，孩子，甚至还有一条狗",
    "Get new friend": "结交新朋友",
    "Meet the dog": "认识狗子",
    "You meet burgers old dog. It's very sweaty. Burger tells you that they used to be best friends": "你见到了伯格的老狗。它很容易出汗。伯格告诉你,他们曾经是最好的朋友",
    "Sweatson": "汗森",
    "You have some friends!": "你有了一些朋友!",
    "Sweatson is sweating his ears off, but still finds time to dig": "汗森已经汗流浃背了，但仍找时间去挖掘",
    "for you": "给你",
    "Sweatson is sweating bullets.": "汗森是流汗的子弹。",
    "You remember something about that dogs can't sweat, and that's why they make that insanse panting noise. Somehow you don't believe that anymore.": "你记得狗不会出汗，所以它们才会发出疯狂的喘气声。不知怎么的，你不再相信了。",
    "He attempts to bark, but accidentally swallows some sweat": "他试图吠叫，但不小心吞下了一些汗水",
    "Pompous gold drill": "浮夸的黄金钻头",
    "My health is like": "我的生命值大约是",
    "Check out all that new health!": "看看这些所有的新生命值！",
    "strength": "力量",
    "Space for more potions!": "更多存放药水的空间!",
    "Derek is STRONG!": "德里克变强了!",
    "你把U盘插进伯格里。据他回忆，他嘟嘟唧唧地叫着:他还是个年轻的机器人时，曾在一家冰淇淋店和这个融化的家伙一起工作": "",
    "Meet Meltyface": "认识熔化面",
    "Derek ate something rotten. Bull farts have been known to clear the room on more than one occasion": "德里克吃了腐烂的东西。众所周知，牛的屁不止一次能把房间弄得满地都是",
    "Thirsty": "口渴",
    "Cool!": "酷！",
    "Derek has nothing equipped here": "德里克这里什么装备都没有",
    "Cool Dungeon (abyssal)": "很酷的地牢(深渊)",
    "Burger advice": "伯格的建议",
    "Derek can't wait to go see what's down those dungeons. You better choose a dungeon soon. Derek is breathing heavily.": "德里克迫不及待地想去看看地牢里有什么。你最好快点选个地牢。德里克呼吸沉重。",
    "Juicy Dungeon (shallow)": "多汁的地牢(浅)",
    "Scary Dungeon (deep)": "可怕的地牢(深)",
    "Through chirps and beeps, he convinces you that it's best to start with the shallow dungeon. He talks a great deal about learning curves and Derek Safety Regulations.": "通过啾啾声和哔哔声，他说服你最好从浅层地牢开始。他讲了很多关于学习曲线和德里克安全规则的内容。",
    "You can tell that Burger knows a great deal about dungeons.": "你可以看出伯格对地牢非常了解。",
    "Honestly you get quite tired of listening after a while": "老实说，你听了一段时间就会感到厌倦",
    "More advice": "更多建议",
    "It's very embarrassing to enter the wrong door. Teach Derek to make a graceful exit, so he won't humiliate himself": "走错门是很尴尬的。教德里克优雅地退场，这样他就不会丢人了",
    "Derek does not yet know how to do this. You better teach him by buying this skill!": "德里克还不知道该怎么做。你最好买下这个技能来教他!",
    "Teach Derek to become so thirsty, that he will try to find health potions in desperation": "教德里克变得如此口渴，他会在绝望中寻找生命药水",
    "Skill upgraded!": "技能已升级！",
    "Burger carefully chirps a warning. It is important to have Derek properly educated before going into the dungeon. The poor bull might die, and it is said that only stardust will bring him back to life again.": "汉堡小心翼翼地发出警告。在进入地牢之前，让德里克接受适当的教育是很重要的。可怜的公牛可能会死，据说只有星尘才能使他起死回生。",
    "Especially about doors in dungeons. He tells you that jerks typically like to hide behind doors of extra cool treasure. Like presents. He talks to lengths about jerk gravitational physics and treasure logic.": "特别是关于地下城的门。他告诉你，混蛋通常喜欢躲在特别酷的宝藏门后面。喜欢的礼物。他大谈特谈重力物理和宝藏逻辑。",
    "He chirps out some wisdom - The deeper you are in the dungeon, the more jerks you are going to see. He writes some simple, but mind boggling functions.": "他唧唧喳喳地说出了一些智慧——你在地牢里越深，你就会看到越多的混蛋。他编写了一些简单但令人难以置信的函数。",
    "He looks out in the distance. His slow chirps tell you that there must be more dungeons out in the universe. Much harder than these dungeons on your surface. You try to get Burger to tell you more, but something seems to be wrong with his memory parts again.": "他向远处望去。他缓慢的唧唧声告诉你，宇宙中肯定有更多的地牢。比你表面上的地下城难多了。你试图让伯格告诉你更多，但他的记忆部分似乎又出了问题。",
    "But he tells you that": "但是他告诉你在twitter上",
    "on twitter knows even more, and is just as eager to talk about dungeons.": "可以知道更多，他们也同样渴望谈论地牢。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Derek": "德里克",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Head (": "头部 (",
    "Legs (": "腿部 (",
    "Hand (": "手部 (",
    "Chance: ": "几率: ",
    "Uses: ": "使用: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    " (on)": " (开)",
    " (off)": " (关)",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Derek can search for something healthy to drink (.+) time\(s\) per dungeon. He has a (.+) chance of finding anything$/, '德里克在每个地下城可以搜索生命药水 $1 次。他有 $2 的几率找到任何线索'],
    [/^Derek can totally regret entering a door (.+) time\(s\) per dungeon$/, '在每个地牢中，德里克可以后悔进入一扇门 $1 次'],
    [/^Derek can fart (.+) time\(s\) per dungeon$/, '德里克每个地牢可以放 $1 次屁'],
    [/^it heals like (.+) health.. You have (.+) potions$/, '治疗效果相当于 $1 生命值…你有 $2 药水'],
    [/^Fill potion belt \((.+) gold\)$/, '填满药水腰带 \($1黄金\)'],
    [/^Burger will have a (.+) chance of mining (.+) gold\/sec$/, '伯格将有 $1 的几率开采 $2 黄金\/秒'],
    [/^Will suck (.+) coco\/sec$/, '将会吮吸 $1 可可\/秒'],
    [/^Sucks up (.+) coco\/sec$/, '吮吸 $1 可可\/秒'],
    [/^Burger will chop (.+) wood\/sec$/, '伯格将会砍伐 $1 木头\/秒'],
	[/^([\d\.]+)\/([\d\.]+) potions$/, '$1\/$2 药水'],
	[/^([\d\.]+)\/([\d\.]+) health$/, '$1\/$2 生命值'],
	[/^([\d\.]+)\/([\d\.]+) health potions!$/, '$1\/$2 生命药水！'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)\% chance$/, '$1]\% 几率'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) gold\/sec$/, '$1 黄金\/秒'],
    [/^([\d\.,]+) wood\/sec$/, '$1 木头\/秒'],
    [/^([\d\.,]+) health$/, '$1 生命值'],
    [/^([\d\.,]+) coco per second$/, '$1 可可每秒'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\(([\d\.,]+) gold\)$/, '\($1 黄金\)'],
    [/^\(([\d\.,]+) stardust\)$/, '\($1 星尘\)'],
    [/^\(([\d\.,]+) wood$/, '\($1 木头'],
    [/^\((.+)\% chance$/, '\($1\% 几率'],
    [/^\+([\d\.,]+)\/s$/, '\+$1\/秒'],
    [/^Bull Fart ([\d\.,]+)$/, '牛屁 $1'],
    [/^Door of Regret ([\d\.,]+)$/, '悔恨之门 $1'],
    [/^Thirsty ([\d\.,]+)$/, '口渴 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);
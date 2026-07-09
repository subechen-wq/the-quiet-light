/* ============================================
   The Quiet Light — 故事資料庫
   ============================================
   新增故事方法：
   1. 複製下面任一個 { ... } 區塊
   2. 貼到陣列最前面（最新故事排最前）
   3. 修改 id（唯一值，不可重複）
   4. 修改 title、date、excerpt、body
   5. body 每段用 <p>...</p> 包起來
   6. 存檔後上傳到 GitHub
   ============================================ */

const STORIES = [
     {
    id: "story-004",
    title: "雨天的書店",
    titleEn: "The Bookshop on a Rainy Day",
    date: "2026.07",
    excerpt: "雨是從上午就開始下的，到了下午還沒有停的意思。蘇曉彤走進那家書店的時候，鞋子已經濕了……",
    body: `
      <p>雨是從上午就開始下的，到了下午還沒有停的意思。</p>
      <p>蘇曉彤走進那家書店的時候，鞋子已經濕了。</p>
      <p>她其實沒有特別想進來，只是雨突然變大，而這扇門剛好開著。書店很小，窄窄的，兩排木頭書架把空間切成一條走廊，盡頭有一盞黃燈，亮著。店裡有一種氣味——舊紙、木頭、還有某種說不清楚的東西，像是很多個下雨天疊在一起的味道。</p>
      <p>老闆是個中年男人，坐在角落看書，抬頭看了她一眼，又低下去了。沒有說歡迎光臨，也沒有說隨便看。</p>
      <p>蘇曉彤在書架前站定，開始漫無目的地看書脊上的字。她不是來買書的。她只是需要一個地方，讓自己在雨停之前，有個可以待著的理由。</p>
      <p>然後她抽出了那本書。不是刻意的，只是手指劃過去，停在了那裡。</p>
      <p>書很舊，封面是褪色的墨綠，書名她沒有認出來。她翻開——扉頁上有字。不是印刷的字，是手寫的，鋼筆，墨水有些暈開了，像是寫的時候那個地方也在下雨。</p>
      <p>「你也在等雨停嗎？別著急，你聽，這是讓你停下來好好休息的聲音。」蘇曉彤努力辨認著模糊的字跡。</p>
      <p>她愣了一下，嘴角輕輕動了一下。然後小心地繼續翻著已泛黃的脆弱書頁。</p>
      <p>書裡夾著一張紙條，差點掉出來。她用兩根手指捏住，展開。同一支鋼筆，同一個人的字，但這張紙條上只有一句話，寫在正中央，像是想了很久才決定寫下來的：</p>
      <p>「我把這本書留在這裡，是希望它找到一個比我更需要它的人。」</p>
      <p>蘇曉彤站在那裡，窗外的雨聲一陣大一陣小。她不知道這本書在這家店裡放了多久，也不知道那個人現在在哪裡。但她想著，那個人當年選擇把這本書放走——這件事本身，就需要一點勇氣。</p>
      <p>她走向老闆，把書放到桌上。「這本書多少錢？」</p>
      <p>老闆抬起頭，目光移向那本墨綠色封面的書，嘴角抿成一條直線。「小姐，這本書在那個書架上放了二十幾年，至今還沒有任何人把它取下來看過。」他帶著複雜的眼神說。</p>
      <p>「那麼這本書一定是在等著我的到來。」蘇曉彤帶著堅定的眼神笑著說。</p>
      <p>老闆看了她一會兒，那條直線慢慢鬆開了，變成一個很淡的弧度。他沒有說話，只是報了一個價，接過她遞來的錢，又低下頭去看自己的書。</p>
      <p>蘇曉彤把那本墨綠色的書放進包包，推開門走出去。</p>
      <p>雨已經停了。石板路還是濕的，積著淺淺的水，把天空的顏色接住了。彩虹掛在遠處樓頂的上方，淡淡的，像是有人用水彩隨手畫上去的，不確定它會在那裡多久。</p>
      <p>她沒有急著走。包包裡那本書的重量，她感覺得到——一本舊書能有多重？但今天，它好像比平常的書都重一點點。裡面裝著的，不只是書頁。</p>
      <p>她想起扉頁上那行字。你也在等雨停嗎？別著急，你聽，這是讓你停下來好好休息的聲音。</p>
      <p>她聽了聽。街道上有水滴從樹葉落下的聲音，有遠處車輪碾過濕路的聲音，有風吹過來帶著雨後泥土氣息的聲音。</p>
      <p>都是很普通的聲音。但今天，她都聽見了。</p>
      <p>有些東西，等了二十年，等的就是你路過的那一天。</p>
      <div style="margin: 3rem 0; height: 1px; background: rgba(217,165,92,0.2);"></div>
      <p style="font-size:.75rem; letter-spacing:.3em; text-transform:uppercase; color:rgba(217,165,92,0.5); margin-bottom:1.5rem;">English</p>
      <p>The rain had started in the morning and showed no sign of stopping by afternoon.</p>
      <p>By the time Xiao-Tong Su stepped into the bookshop, her shoes were already wet.</p>
      <p>She hadn't particularly meant to come in — the rain had simply grown heavier, and the door happened to be open. The shop was small and narrow, two wooden shelves dividing the space into a single corridor, a yellow lamp burning at the far end. The air carried a particular smell — old paper, wood, and something harder to name, like the accumulation of many rainy days layered one over another.</p>
      <p>The owner, a middle-aged man, sat reading in the corner. He glanced up once, then looked back down. No welcome. No feel free to browse.</p>
      <p>Xiao-Tong Su stood before the shelves and let her eyes drift across the spines. She wasn't here to buy a book. She just needed somewhere to be — a reason to stay somewhere until the rain stopped.</p>
      <p>Then she pulled out a book. Not deliberately — her fingers simply slid along the shelf and stopped there.</p>
      <p>It was old, the cover a faded olive green, the title unfamiliar. She opened it. The title page held writing — not printed, but handwritten in fountain pen, the ink slightly blurred, as if wherever that person had sat when they wrote it, it had been raining there too.</p>
      <p>"Are you waiting for the rain to stop too? Don't rush. Listen — this is the sound telling you to slow down and rest." Xiao-Tong Su leaned in, tracing the faded words.</p>
      <p>She went still for a moment. The corner of her mouth moved, just slightly. Then she carefully turned the fragile, yellowed pages.</p>
      <p>A slip of paper was tucked inside, nearly falling out. She caught it between two fingers and unfolded it. The same pen, the same hand — but this note held only one sentence, written at the center of the page, as though the person had thought for a long time before deciding to write it down:</p>
      <p>"I am leaving this book here, hoping it will find someone who needs it more than I do."</p>
      <p>Xiao-Tong Su stood there as the rain outside rose and fell. She didn't know how long the book had been in this shop, or where that person was now. But she thought about the act itself — choosing to leave something behind — and how that must have taken a certain kind of courage.</p>
      <p>She carried the book to the counter. "How much is this one?"</p>
      <p>The owner looked up, his gaze moving to the olive-green cover. His mouth pressed into a straight line. "Miss," he said, something complicated in his expression, "that book has been on that shelf for over twenty years. No one has ever taken it down."</p>
      <p>"Then it must have been waiting for me," Xiao-Tong Su said, with a steady smile.</p>
      <p>He looked at her for a moment. The straight line softened gradually into something faint and curved. He said nothing — just named a price, took her money, and lowered his eyes back to his book.</p>
      <p>Xiao-Tong Su tucked the olive-green book into her bag and pushed open the door.</p>
      <p>The rain had stopped. The stone path was still wet, holding shallow pools that caught the color of the sky. A rainbow hung above the distant rooftops, pale, like something painted quickly in watercolor — uncertain how long it would stay.</p>
      <p>She didn't hurry. She could feel the weight of the book in her bag — how heavy could an old book be? And yet today it felt heavier than usual. What it carried was more than pages.</p>
      <p>She thought of the words on the title page. Are you waiting for the rain to stop too? Don't rush. Listen — this is the sound telling you to slow down and rest.</p>
      <p>She listened. There was the drip of water falling from leaves, the sound of distant wheels on a wet road, the wind carrying the scent of rain-soaked earth.</p>
      <p>All ordinary sounds. But today, she heard every one of them.</p>
      <p>Some things wait twenty years. They are waiting for the day you happen to walk past.</p>
    `
  },
  {
    id: "story-003",
    title: "最後一班車",
    titleEn: "The Last Train",
    date: "2026.06",
    excerpt: "深夜十二點半，捷運廣播說，這是今天最後一班往南港展覽館方向的列車。車廂裡只剩下他們兩個人……",
    body: `
      <p>深夜十二點半。</p>
      <p>捷運廣播說，這是今天最後一班往南港展覽館方向的列車。</p>
      <p>車廂裡只剩下他們兩個人。</p>
      <p>男人靠著椅背，領帶鬆了一半，眼鏡有點歪，公事包放在腳邊，他連撿起來的力氣都覺得多餘。他已經不記得今天幾點進辦公室了。他只知道，窗外的城市一站一站地後退，每退一站，身體就像又重了一點。</p>
      <p>對面坐著一個老太太。</p>
      <p>她的年紀看起來很大了，頭髮全白，身形小小的。她懷裡抱著一盆仙人掌，仙人掌不大，種在一個紅色的陶盆裡，老太太兩手輕輕托著它，像是抱著一個很重要的東西。</p>
      <p>她看起來很清醒。不像他。</p>
      <p>感受到目光的老太太回過頭來看向對面的男人，瞇起眼睛輕輕一笑。</p>
      <p>男人不好意思地點頭回以微笑。</p>
      <p>「這麼晚了，車廂空蕩蕩的，原以為只有我和我的小仙人掌，上一個車站終於有人陪我們作伴了。」老太太仍帶著那副和藹可親的笑容說著。</p>
      <p>「是的，我偶爾比較晚下班，正好搭上最後一班車，」男子被老太太突如其來的搭話嚇了一跳，「您也剛要回家嗎？」</p>
      <p>老太太低頭看了看懷裡的仙人掌，又抬頭看他。「我去看我女兒，」她說，「她住在這條線的終點站。每個月去一次，今天聊得太久，沒注意到時間。」</p>
      <p>她說這話的時候，臉上還是那個笑，但眼睛裡有什麼東西不一樣——不是悲傷，比悲傷更安靜的東西，像是一個人把某件事放了很久，放到已經不重了。</p>
      <p>「每個月都這麼晚回去？」男人沒想到自己開口問了。</p>
      <p>「不晚，」老太太搖搖頭，「搭最後一班車回去，剛剛好。月台上沒什麼人，走起來慢一點也沒關係。」</p>
      <p>她說「慢一點也沒關係」的時候，男人胸口有什麼東西鬆動了一下。他今天已經為「沒關係」三個字努力了很久，努力讓自己相信很多事都沒關係。但從老太太嘴裡說出來的那句，聽起來不一樣。聽起來是真的。</p>
      <p>「這樣啊，您女兒真幸福。」男子沒再多說什麼，嘆了一口氣便往後靠著椅子閉目養神。</p>
      <p>「你看起來過了很充實的一天呢！辛苦你了！」老太太笑著看向他。</p>
      <p>男子聽到這話愣了一下。難道我今天經歷的一切都寫在臉上了嗎？</p>
      <p>「雖然人生總會有偶爾辛苦的時候，但這不總是壞的，它會在未來某個時刻結成美好的果實回報你，所以生活總是令人期待呢！」老太太看著手裡的仙人掌笑著說，眼角的皺紋裡藏著某種他說不清楚的東西。</p>
      <p>列車在下一站停了一下，沒有人上來，門又關上了。車廂重新安靜。</p>
      <p>男人睜開眼睛，看著老太太手裡那盆仙人掌，問：「您養這個很久了嗎？」</p>
      <p>「三十年了，」她說，「我先生走的那年買的。說是要養一個不需要太多照顧、也能活得好好的東西。」她頓了頓，「後來發現，它其實也需要人陪。只是它不說。」</p>
      <p>男人沒有說話。他看著那盆小小的、長了幾根刺的仙人掌，忽然覺得有點想笑，又有點想哭，兩種感覺同時在胸口裡，哪一個都沒有贏。</p>
      <p>「終點站到了，」廣播響起來，「南港展覽館站，本列車終點站，請旅客準備下車。」</p>
      <p>老太太站起來，把仙人掌穩穩地抱好，朝他點了點頭，「辛苦了，好好休息。」就這樣走了。</p>
      <p>月台的燈光把她的背影拉得很長。男人坐在空蕩蕩的車廂裡，看著她走遠，直到她轉過月台的柱子，消失了。</p>
      <p>他低下頭，看了看自己的手。</p>
      <p>然後他想起來——他今天忘記吃午餐了。</p>
      <p>明天，他想，明天中午要好好吃一頓。</p>
      <p><em>就這樣一件事，先做這一件就好。</em></p>

      <div style="margin: 3rem 0; height: 1px; background: rgba(217,165,92,0.2);"></div>
      <p style="font-size:.75rem; letter-spacing:.3em; text-transform:uppercase; color:rgba(217,165,92,0.5); margin-bottom:1.5rem;">English</p>

      <p>Half past midnight.</p>
      <p>The MRT announcement said this was the last train toward Nangang Exhibition Center.</p>
      <p>There were only two of them left in the carriage.</p>
      <p>The man leaned against the seat back, his tie half-loosened, his glasses slightly crooked, his briefcase sitting at his feet — even the act of picking it up felt like too much. He had forgotten what time he'd arrived at the office that morning. All he knew was that the city outside was retreating, station by station, and with each station that passed, his body felt a little heavier.</p>
      <p>Across from him sat an old woman.</p>
      <p>She looked very old — hair entirely white, her frame small and slight. She held a cactus in her arms, a modest thing in a red clay pot, cradled in both hands as though it were something precious.</p>
      <p>She looked wide awake. Unlike him.</p>
      <p>The old woman felt his gaze and turned to look at him, narrowing her eyes into a gentle smile.</p>
      <p>The man nodded back, a little embarrassed, and managed a smile of his own.</p>
      <p>"So late, and the carriage so empty — I thought it would just be me and my little cactus all the way," the old woman said, her warm smile still in place. "It's nice to have company at last."</p>
      <p>"I stay late sometimes," the man said, caught off guard by her sudden friendliness. "Just made the last train. Are you heading home too?"</p>
      <p>The old woman glanced down at the cactus in her arms, then back at him. "I went to visit my daughter," she said. "She lives at the end of this line. I go once a month. We talked too long today — I lost track of the time."</p>
      <p>She said it with the same smile, but something in her eyes was different — not sadness, something quieter than sadness, like a person who had been carrying something for so long it had stopped feeling heavy.</p>
      <p>"You take the last train back every month?" The man hadn't meant to ask.</p>
      <p>"It's not late," the old woman said, shaking her head. "The last train is just right. The platform is empty. I can walk slowly. That's fine."</p>
      <p>When she said that's fine, something loosened in the man's chest. He had spent the whole day trying to convince himself that things were fine — so many things. But hearing those words from her was different. They sounded like she meant them.</p>
      <p>"I see. Your daughter is lucky to have you." He said nothing more, let out a quiet breath, and leaned back, closing his eyes.</p>
      <p>"You look like you've had a very full day," the old woman said warmly. "You've worked hard."</p>
      <p>The man opened his eyes, startled. Was everything I went through today really written on my face?</p>
      <p>"Life has its difficult stretches," the old woman said, looking down at the cactus with a smile, "but that doesn't make them bad. Someday, all of this will ripen into something good and come back to you. That's why living is always worth looking forward to." The lines around her eyes held something he couldn't quite name.</p>
      <p>The train paused at the next station. No one boarded. The doors closed again. The carriage settled back into silence.</p>
      <p>The man opened his eyes and looked at the cactus in her hands. "Have you had it long?" he asked.</p>
      <p>"Thirty years," she said. "I bought it the year my husband passed. I wanted something that didn't need much looking after — something that could get along just fine on its own." She paused. "I found out later that it needs company too. It just doesn't say so."</p>
      <p>The man said nothing. He looked at that small, spiny little plant and felt something rise in him that was almost laughter and almost tears — both at once, neither winning.</p>
      <p>"This train will terminate at Nangang Exhibition Center," the announcement came. "Passengers, please prepare to disembark."</p>
      <p>The old woman rose, settled the cactus carefully in her arms, and gave him a small nod. "Take care of yourself. Rest well." And then she was gone.</p>
      <p>The platform lights stretched her silhouette long. The man sat in the empty carriage and watched her go, until she turned past a column and disappeared.</p>
      <p>He looked down at his own hands.</p>
      <p>And then it came to him — he had forgotten to eat lunch today.</p>
      <p>Tomorrow, he thought. Tomorrow I'll have a proper meal.</p>
      <p><em>Just that one thing. Start with just that one thing.</em></p>
    `
  },
  {
    id: "story-002",
    title: "修鐘人",
    titleEn: "The Clockmender",
    date: "2026.06",
    excerpt: "那條巷子在地圖上找不到。不是因為它不存在，是因為它只在你需要它的時候才出現……",
    body: `
      <p>那條巷子在地圖上找不到。</p>
      <p>不是因為它不存在，是因為它只在你需要它的時候才出現。</p>
      <p>林有德在那裡開店已經四十年了，或者說，他自己也不確定是多少年。這間店沒有招牌，門口掛著幾個形狀各異的舊鐘，風一吹，會發出輕微的、彼此不同調的聲音，像是一群人各自喃喃說著自己的故事。</p>
      <p>他正低頭修一只懷錶的時候，門開了。</p>
      <p>進來的是一個年輕女人，眼睛裡帶著一種說不清楚的慌張，像是趕了很久的路，卻又忘記自己要去哪裡。</p>
      <p>她四下張望，然後看著林有德說：「我的時間壞掉了。」</p>
      <p>林有德放下手裡的工具，抬起頭，看了她一眼。他見過很多說這句話的人。</p>
      <p>「讓我看看。」他慢條斯理地推了一下閃著金邊的細框眼鏡說。</p>
      <p>年輕女人緊張地左右張望。她的手有些抖，把那塊懷錶遞了過去——看起來頗有年代感卻又不失精緻，錶蓋上鑲著一顆藍寶石。</p>
      <p>林有德接過來，瞇著眼睛仔細看。錶面的玻璃有一道細裂，但針還在走。</p>
      <p>他用拇指輕輕摩挲了一下錶背，感覺到上面有字，便傾了傾燈，湊近去看。是一個名字，和一個年份。年份比眼前這個女人的年紀還要老。</p>
      <p>他沒有問那是誰的名字。他把錶翻回正面，用一根細針輕輕撥了一下時針，錶裡頭傳出一個很輕的聲音——不像機械的聲音，更像是某個人輕輕嘆了一口氣。</p>
      <p>林有德把錶放在桌上，這才看向她。</p>
      <p>「這錶沒有壞，」他說，「是你的時間打結了。」</p>
      <p>女人愣了一下。「打結？」</p>
      <p>「有些人的時間，」他拿起桌上的放大鏡，語氣像在說一件很普通的事，「會卡在某一個地方，一直轉，出不去。」</p>
      <p>他停頓了一秒。「你是卡在哪一年？」</p>
      <p>「卡在哪一年？」年輕女人眼神空洞地複述著林有德的詢問。店裡所有的鐘，在那一刻，同時慢了半拍。</p>
      <p>「妳來到這裡的上一刻在哪裡？在做什麼？」林有德問。懷錶的玻璃錶面，映著年輕女人徬徨的表情。</p>
      <p>年輕女人不再發抖，冷靜下來，開始回想。</p>
      <p>「我在醫院，」她說，聲音很平，像是說一件跟自己無關的事，「在走廊上。然後我就走出來，走進了這條巷子。」</p>
      <p>林有德沒有說話，等著。</p>
      <p>「我不知道我走了多久，」她繼續說，「我只是一直走，然後門就在那裡了。」</p>
      <p>林有德見過太多這樣的人——不是迷路來的，是被什麼東西鬆開了，才能找到這裡。他重新拿起那只懷錶，把它輕輕放在她手心裡。</p>
      <p>「這錶是誰的？」他問，聲音更輕了。</p>
      <p>她低頭看著錶，過了很久才說：「我媽媽的。」</p>
      <p>又過了一秒。「她上個月走了。」</p>
      <p>店裡所有的鐘，在那個瞬間，同時慢了半拍。不是停下來，只是……慢了一點點，像是在替什麼事情讓出一點空間。</p>
      <p>林有德沒有接話。他緩緩起身，走到角落搬了張椅子放到年輕女人身邊，然後轉身倒了一杯剛泡好不久的熱茶放到她手裡，再回到自己的位子，開始慢慢地梳理這塊打結的錶。</p>
      <p>年輕女人看著他緩慢而細緻的動作，不安的心也跟著平靜了下來。她捧著熱茶，坐到了一旁的椅子上。</p>
      <p>「我媽媽在離開之前曾對我說，即便只剩下我自己了，也要好好去體驗這個世界。」說完，她喝了一口熱茶。</p>
      <p>林有德的手沒有停。他用一根細如髮絲的工具，把錶芯裡某個看不見的地方輕輕撥了一下。懷錶發出一個很小的聲音，像是什麼東西鬆開了。不是機械的聲音。更像是，一口很久沒有呼出去的氣，終於呼出去了。</p>
      <p>「妳媽媽說得對，」林有德沒有抬頭，聲音很輕，「時間不會因為有人離開就停下來。它只是換了一個走法。」</p>
      <p>他把懷錶放回她手裡。錶還是原來的錶，玻璃上的裂沒有消失，藍寶石還是原來那顆。但指針走動的聲音，好像比剛才清晰了一點點。滴，答。滴，答。很穩，不急。</p>
      <p>女人捧著錶，低著頭，沒有說話。也不需要說什麼。</p>
      <p>過了一會兒，她站起來，把茶杯放回桌上，向林有德輕輕點了點頭。他也點了點頭，已經重新低下頭去修下一只錶了。</p>
      <p>她推開門，走出去。</p>
      <p>巷子還在那裡。陽光落在石板路上，比她進來的時候，暖了一些。</p>
      <p>她往前走。錶在她口袋裡，輕輕跳動著。</p>
      <p><em>滴。答。滴。答。一步，一步，繼續走。</em></p>

      <div style="margin: 3rem 0; height: 1px; background: rgba(217,165,92,0.2);"></div>
      <p style="font-size:.75rem; letter-spacing:.3em; text-transform:uppercase; color:rgba(217,165,92,0.5); margin-bottom:1.5rem;">English</p>

      <p>The alley couldn't be found on any map.</p>
      <p>Not because it didn't exist — but because it only appeared when you needed it to.</p>
      <p>De-Lin had kept his shop there for forty years, or thereabouts — he was no longer certain. The shop had no sign. At the entrance hung several old clocks of different shapes, and when the wind blew, they chimed softly out of time with one another, like a gathering of people each murmuring their own story.</p>
      <p>He was bent over a pocket watch when the door opened.</p>
      <p>A young woman stepped inside, her eyes carrying a restlessness she couldn't quite name — as if she had been hurrying for a long time and had forgotten where she was going.</p>
      <p>She looked around the shop, then looked at De-Lin and said: "My time is broken."</p>
      <p>De-Lin set down his tools, lifted his head, and looked at her. He had met many people who said this.</p>
      <p>"Let me have a look." He pushed his thin gold-rimmed glasses up the bridge of his nose, unhurried.</p>
      <p>The young woman glanced nervously around the shop. Her hands were trembling as she held out the pocket watch — elegant despite its age, with a sapphire set into the case.</p>
      <p>De-Lin took it and examined it closely. A hairline crack ran across the glass face, but the hands were still moving.</p>
      <p>He turned the watch over and ran his thumb across the back. He felt engraving, tilted the lamp closer, and read. A name, and a year. The year was older than the woman standing before him.</p>
      <p>He didn't ask whose name it was. He flipped the watch back over, nudged the hour hand gently with a fine pin, and the watch emitted a faint sound — not the sound of machinery. More like a quiet sigh.</p>
      <p>De-Lin set the watch on the table and looked up at her.</p>
      <p>"The watch isn't broken," he said. "Your time has come undone."</p>
      <p>The woman blinked. "Come undone?"</p>
      <p>"Some people's time," he said, picking up his magnifying glass, his tone as matter-of-fact as if discussing the weather, "gets caught in one place and keeps turning, going nowhere."</p>
      <p>He paused. "Which year are you caught in?"</p>
      <p>"Which year am I caught in?" she echoed, her eyes distant. In that moment, every clock in the shop slowed by half a beat.</p>
      <p>"Where were you, just before you came here? What were you doing?" De-Lin asked. The cracked glass of the pocket watch reflected her lost expression back at her.</p>
      <p>The trembling in her hands had stopped. She grew still, and began to remember.</p>
      <p>"I was at the hospital," she said, her voice flat, as though describing something that had happened to someone else. "In the corridor. And then I walked out, and into this alley."</p>
      <p>De-Lin said nothing. He waited.</p>
      <p>"I don't know how long I walked," she continued. "I just kept walking, and then the door was there."</p>
      <p>De-Lin had seen many like her — people who had not stumbled here by accident, but had been loosened from something, just enough to find this place. He picked up the pocket watch and set it gently in her palm.</p>
      <p>"Whose watch is this?" he asked, his voice softer now.</p>
      <p>She looked down at it for a long moment. "My mother's."</p>
      <p>Another beat of silence. "She passed away last month."</p>
      <p>Every clock in the shop slowed by half a beat. Not stopping — just easing, as though making a little room for something.</p>
      <p>De-Lin did not respond with words. He rose slowly from his seat, carried a chair from the corner and placed it beside the young woman, then turned to pour a cup of tea that had been steeping nearby and pressed it into her hands. Then he returned to his place and began, carefully, to work on the tangled watch.</p>
      <p>She watched his slow, precise movements, and felt the unease inside her begin to settle. She cradled the warm tea and lowered herself into the chair.</p>
      <p>"Before she left, my mother told me — even if I was on my own, I should go and really live in this world." She finished speaking, and took a sip of tea.</p>
      <p>De-Lin's hands did not stop. With a tool as fine as a hair, he reached into the heart of the watch and gently shifted something invisible. The watch made a small sound — not mechanical. More like a breath that had been held for a very long time, finally let go.</p>
      <p>"Your mother was right," De-Lin said, without looking up, his voice quiet. "Time doesn't stop when someone leaves. It only learns a different way to move."</p>
      <p>He placed the watch back in her hands. It was the same watch — the crack in the glass still there, the same sapphire. But the sound of the hands moving seemed, somehow, a little clearer than before. Tick. Tock. Tick. Tock. Steady. Unhurried.</p>
      <p>The young woman held the watch, head bowed, and said nothing. There was nothing that needed to be said.</p>
      <p>After a while, she stood, set the teacup back on the table, and gave De-Lin a small nod. He nodded back, already bent over the next watch.</p>
      <p>She pushed the door open and stepped outside.</p>
      <p>The alley was still there. Sunlight lay across the stone path, a little warmer than when she had arrived.</p>
      <p>She walked on. The watch ticked softly in her pocket.</p>
      <p><em>Tick. Tock. Tick. Tock. One step, and then another.</em></p>
    `
  },
  {
    id: "story-001",
    title: "燈還亮著",
    titleEn: "The Light Is Still On",
    date: "2026.06",
    excerpt: "夜裡十一點，陳靜終於離開辦公室。不是因為工作做完了，是因為她的眼睛開始看不清楚螢幕上的字……",
    body: `
      <p>夜裡十一點，陳靜終於離開辦公室。</p>
      <p>不是因為工作做完了。是因為她的眼睛開始看不清楚螢幕上的字，她知道那是身體在說：夠了。</p>
      <p>外頭的空氣比她預期的涼。她沒有叫車，雖然可以叫。她只是想走一走——或者說，她需要一段什麼都不必決定的時間，哪怕只有十五分鐘。</p>
      <p>街燈把她的影子拉得很長，又縮短，又拉長。</p>
      <p>便利商店的玻璃門透出暖黃色的光，她走過去，沒有進去，只是在門口停了一秒鐘，感受那一點點熱氣從縫隙裡漫出來，像是有人替她開了一道縫。</p>
      <p>她來到了白天總是熱鬧喧囂的街口。中央的噴泉還在孜孜不倦地灑著水，商家一間接著一間拉下鐵門，身邊來往的人們，不知道是和她一樣剛下班正要回家，還是正在前往上班的路上，又或是有其他去往的地方。噴泉的水聲在她背後漸漸遠了。</p>
      <p>她轉進一條窄一點的巷子，這裡沒有商店，只有住家。窗子裡透出來的燈光各自不同——有一戶是藍白色的，電視的光，在牆上輕輕跳動；有一戶是暖橘色的，像是有人還在廚房裡做著什麼；還有一戶，窗簾拉著，只有一條細細的光從縫裡漏出來，像是捨不得完全熄滅。</p>
      <p>陳靜走得慢下來，她自己沒有意識到。</p>
      <p>她只是看著那些光，一扇一扇地看過去，心裡有什麼東西，說不清楚是羨慕，還是安慰，還是兩者都有一點。</p>
      <p>就這樣，她沿著熟悉的路，走過那段沒有路燈的短坡，回到了家。</p>
      <p>她走上樓梯，從包包裡摸出鑰匙，正準備開門，視線突然撇到一旁養了很久的龜背芋。她停了下來。透過那些裂縫般的大葉片，隱約察覺到有什麼東西藏在後面。</p>
      <p>她俯身往葉片後看。</p>
      <p>是一隻貓。</p>
      <p>不是她的貓，她沒有養貓。是一隻虎斑的、體型不大的貓，蜷縮在花盆和牆壁之間那塊剛剛好的陰影裡，眼睛微微睜著，看著她，但沒有要走的意思。</p>
      <p>陳靜和牠對看了幾秒鐘。</p>
      <p>她不知道牠從哪裡來，也不知道牠在這裡待了多久。但牠看起來不害怕，只是……在這裡。安靜地在這裡，像是覺得這個地方可以待。</p>
      <p>鑰匙還握在她手裡，她忘記要插進鎖孔了。</p>
      <p>過了片刻，小貓輕輕「喵」了一聲。陳靜終於回過神來。她沒有轉身開門，而是把小貓從葉片後面輕輕抱出來。小貓沒有掙扎，任她抱著，毛摸起來比她想的還要軟，身體也比看起來還要輕，像是一個會發熱的小抱枕。</p>
      <p>她仔細看了看，沒有項圈，沒有晶片牌，耳朵也沒有剪。她對著小貓說：「你是和家人走散了嗎？」</p>
      <p>小貓「喵」了一聲，像是在回答。</p>
      <p>陳靜便抱著小貓，開門，回家。</p>
      <p>她把小貓放在沙發上，去廚房倒了一點水在碟子裡，又找出一個昨天沒吃完的鮪魚罐頭，她把罐頭裡的湯汁瀝乾，用熱水汆燙了一下，放在牠面前。</p>
      <p>小貓低頭聞了聞，開始吃。</p>
      <p>陳靜在沙發另一端坐下來，外套還沒脫。她看著牠吃東西，聽著那個細小的、專心的聲音，忽然覺得今天的事情——那些沒做完的、沒說好的、沒想清楚的——好像都退到了很遠的地方。</p>
      <p>不是消失了。只是遠了一點。</p>
      <p>她靠進沙發背裡，輕輕說了一句：「那你今晚就住這裡吧。」</p>
      <p>小貓沒有回答，只是吃完了，然後走過來，在她腿上踩了兩下，蜷起來，閉上眼睛。</p>
      <p>陳靜也閉上眼睛。</p>
      <p>窗外的城市還亮著，但那些光，離她很遠。</p>
      <p><em>今晚，她不是一個人。</em></p>

      <div style="margin: 3rem 0; height: 1px; background: rgba(217,165,92,0.2);"></div>
      <p style="font-size:.75rem; letter-spacing:.3em; text-transform:uppercase; color:rgba(217,165,92,0.5); margin-bottom:1.5rem;">English</p>

      <p>At eleven o'clock at night, Jing Chen finally left the office.</p>
      <p>Not because the work was finished. It was because her eyes had begun to blur over the words on the screen, and she understood that her body was telling her: enough.</p>
      <p>The air outside was cooler than she expected. She didn't call a cab, though she could have. She just wanted to walk — or rather, she needed a stretch of time where she didn't have to decide anything. Even if it was only fifteen minutes.</p>
      <p>The streetlights pulled her shadow long, then short, then long again.</p>
      <p>The convenience store's glass door glowed with warm amber light. She walked past without going in, pausing for just a moment at the entrance to feel the trace of warmth seeping through the gap — as if someone had opened a small crack in the world, just for her.</p>
      <p>She reached the intersection that buzzed with life during the day. The fountain at the center still scattered water into the air, tirelessly, as shops one by one pulled down their metal shutters. The people passing by — she couldn't tell if they were heading home after a long day, heading out for a night shift, or somewhere else entirely. The sound of the fountain faded behind her.</p>
      <p>She turned down a narrower alley. No shops here, only homes. The light from each window was a little different — one was a cool blue-white, a television flickering against the wall; one glowed warm orange, as if someone were still busy in the kitchen; and one had its curtains drawn, only a thin thread of light escaping from the edge, as though it couldn't quite bring itself to go dark.</p>
      <p>Jing Chen's pace slowed without her noticing.</p>
      <p>She moved from window to window, watching the lights, feeling something stir inside her that she couldn't name — envy, or comfort, or perhaps a little of both.</p>
      <p>And so she walked on, past the short slope without a streetlamp, following the route she knew by heart, until she was home.</p>
      <p>She climbed the stairs, rummaged in her bag for her keys, and was just about to unlock the door when her gaze snagged on the monstera plant she'd kept for years. She stopped. Through those wide, slit-like leaves, she sensed something hidden behind them.</p>
      <p>She leaned in to look.</p>
      <p>A cat.</p>
      <p>Not her cat — she didn't have one. A small tabby, curled into the shadow between the flowerpot and the wall, eyes barely open, watching her, with no intention of leaving.</p>
      <p>Jing Chen looked at it for a few seconds.</p>
      <p>She had no idea where it had come from, or how long it had been there. But it didn't seem frightened — it was simply here. Quietly here, as if it had decided this was a place worth staying.</p>
      <p>The key was still in her hand. She had forgotten to put it in the lock.</p>
      <p>After a moment, the cat let out a soft meow. Jing Chen came back to herself. Instead of turning to open the door, she gently lifted the cat out from behind the leaves. It didn't struggle — it let her hold it, the fur softer than she'd imagined, the body lighter than it looked, like a small, warm pillow.</p>
      <p>She looked it over carefully. No collar, no chip tag, no clipped ear. She said quietly: "Did you get separated from your family?"</p>
      <p>The cat meowed back, as if in answer.</p>
      <p>So Jing Chen held the cat, opened the door, and went inside.</p>
      <p>She set the cat on the sofa, went to the kitchen to fill a small dish with water, and found an unfinished tin of tuna from the day before. She drained the broth, blanched it with hot water, and placed it in front of it.</p>
      <p>The cat sniffed it, then began to eat.</p>
      <p>Jing Chen sat at the other end of the sofa, still in her coat. She watched the cat eat, listened to that small, focused sound, and felt — without quite knowing why — that everything from today, all the unfinished things, the things she hadn't said right, the things she hadn't figured out, had drifted somewhere far away.</p>
      <p>Not gone. Just farther.</p>
      <p>She leaned back into the sofa and said, very softly: "You can stay here tonight."</p>
      <p>The cat didn't answer. It simply finished eating, walked over, kneaded her lap twice, curled up, and closed its eyes.</p>
      <p>Jing Chen closed her eyes too.</p>
      <p>The city outside was still lit up. But all that light felt very far away.</p>
      <p><em>Tonight, she was not alone.</em></p>
    `
  }
];

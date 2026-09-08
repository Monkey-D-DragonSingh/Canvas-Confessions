// Curated historical works, not search-result sampling. Confessions are original
// fictional voices, not quotations from artists, manuscripts, or historical people.
// Run: node scripts/import-norse.mjs [--verify | --contact-sheets]
import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const imageDir = path.join(root, 'public/paintings/norse');
const dataFile = path.join(root, 'app/lib/data/norse.json');
const frolich = 'Lorenz Fr\u00f8lich';
const gehrts = 'Johannes Gehrts';
const collingwood = 'W. G. Collingwood';

// Each Commons page ID identifies one independently reviewed composition.
// Publication dates are explicitly distinguished from undated original paintings.
const works = [
  [192975, 'thor-battles-giants-winge', "Thor's Fight with the Giants", 'M\u00e5rten Eskil Winge', '1872', 'chaos', ['divine', 'war'],
    `I have made a weapon of the sky, and still the giants rise. Beneath my chariot the world is all teeth, stone, and reaching hands. They will call this courage because I am standing above the terror instead of underneath it. Yet each flash shows me another face that refuses to disappear. I lift the hammer again. I cannot admit that thunder is the sound I make when silence would let me hear them.`],
  [71207, 'thor-midgard-serpent-fuseli', 'Thor Battering the Midgard Serpent', 'Henry Fuseli', '1790', 'dread', ['divine', 'war', 'nightmares'],
    `I pulled until the sea seemed stitched to my fist. Now the thing beneath every voyage has lifted its head, and our little boat has become the narrow place between two kinds of ending. My arm knows the hammer better than my mind knows fear. I wish that were enough. Beneath my feet the boards complain like living creatures, and I understand how small a god can look from the water.`],
  [677059, 'death-baldr-eckersberg', 'The Death of Baldr', 'Christoffer Wilhelm Eckersberg', '1817', 'melancholy', ['divine', 'death', 'sins'],
    `I thought the laughter meant I was safe. Every weapon had become a harmless visitor, and I stood among my own people without the old animal caution. Now their faces lean over me as if love could call the wound back out. A little mistletoe has accomplished what iron could not. I am leaving them with an impossible question: how did a room full of gods fail to recognize the hand that wanted me gone?`],
  [297033, 'night-arbo', 'Night (Nott Riding Hrimfaxi)', 'Peter Nicolai Arbo', '1887', 'isolation', ['divine', 'dreams', 'solitude'],
    `I bring the dark without asking who deserves to rest. Beneath my horse, roofs and fields lose their sharp divisions; grief becomes a shape beside a bed. They fear my coming, though I cover their wounds more gently than daylight does. There is no house where I may dismount. I pass every sleeping window, carrying the mercy of not being seen, and no one thinks to leave a light for me.`],
  [378305, 'day-arbo', 'Day (Dagr Riding Skinfaxi)', 'Peter Nicolai Arbo', '1874', 'longing', ['divine', 'dreams'],
    `I carry the brightness others have begged for, but I cannot linger to see what it repairs. My horse scatters morning across the world, and every window becomes a small demand. Wake, work, begin again. They believe that light arrives without effort. I know the weight of this raised arm. Sometimes I envy the sleepers who can turn their faces from me and keep, for one more breath, a private night.`],
  [4176574, 'punishment-loki-penrose', 'The Punishment of Loki', 'James Doyle Penrose', 'c. 1912 (published reproduction)', 'dread', ['divine', 'nightmares'],
    `I once trusted my mouth to open any prison. A joke, a promise, a different face: there was always a way between the bars. Here the stone does not listen. The serpent takes its time, and I have learned a terrible respect for creatures that need no cleverness. I can count each breath before the pain. What I cannot count is how many people I taught to wait for my suffering.`],
  [4722868, 'wolves-sol-mani-dollman', 'The Wolves Pursuing Sol and Mani (Book Illustration)', 'John Charles Dollman', '1909 (publication)', 'dread', ['divine', 'nightmares'],
    `I keep the sun moving because stopping would give the darkness a mouthful. Below, someone calls this a beautiful morning. They cannot see the hunger running level with the wheels, or hear the breath that never falls behind. I have no destination beyond another circuit. If you praise the steady order of the heavens, remember that I am not keeping time. I am fleeing, and time is what my flight leaves behind.`],
  [5801861, 'gefjon-ploughs-frolich', 'Gefjon Ploughs the Earth in Sweden', frolich, 'Undated (before 1908)', 'chaos', ['divine', 'dreams'],
    `I asked for land, and they imagined a gift small enough to remain harmless. Now my sons lean into the harness and the country tears along our furrow. I hear roots part beneath the strength of their altered bodies. A new shore is being born behind us. They will remember the island and forget the pulling. I cannot look at the oxen without seeing the children whose shoulders carried my impossible answer.`],
  [148539120, 'thor-hymir-frolich', 'Thor and Hymir', frolich, '1870-1875', 'dread', ['divine', 'war'],
    `I took the thunderer out upon water that had always obeyed older fears. A boat should teach its passengers humility; this one has carried a challenge instead. Beside me his strength makes every ordinary motion dangerous. I know what lies below, and I know the distance back to shore. He looks into the sea as if an enemy were merely a task. I look at the same water and remember how quickly it closes.`],
  [5250493, 'stranger-sigurd-horse-dollman', 'The Stranger Advises Sigurd How to Choose His Horse (Book Illustration)', 'John Charles Dollman', '1909 (publication)', 'longing', ['divine', 'dreams'],
    `I had thought a horse was something a young man chose for himself. Then the stranger spoke, and the animals before me seemed to be waiting for an older decision. His words had the patience of roads I had not traveled. I wanted the finest mount, the fastest beginning. Now I wonder whether I was choosing a companion or accepting a path. The horse can carry me forward; it cannot promise what waits there.`],
  [5250474, 'sigurd-gunnar-fire-dollman', 'Sigurd and Gunnar at the Fire (Book Illustration)', 'John Charles Dollman', '1909 (publication)', 'dread', ['longing', 'sins', 'nightmares'],
    `I stand beside a fire that knows the difference between a promise and a disguise. Gunnar needs my courage to look like his own, and I have agreed to lend more than a sword. Beyond the flames a woman waits for the truth of whoever reaches her. I tell myself this is loyalty. The heat strips that comfortable word away. Already I can feel a future in which every kindness has another man's face.`],
  [4657633, 'tree-yggdrasil-collingwood', 'The Tree of Yggdrasil (Book Illustration)', collingwood, '1908 (publication)', 'dread', ['divine', 'dreams'],
    `I hold creatures that would destroy one another if my branches did not keep them apart. Above me wings settle; below me teeth continue their patient work. The little messenger runs my length carrying words sharper than claws. Everyone calls me the world tree, as though a name could make this burden natural. I grow around each injury. That is not the same as healing, but it is how the worlds remain aloft.`],
  [4740927, 'odin-rides-hel-collingwood', 'Odin Rides to Hel (Book Illustration)', collingwood, '1908 (publication)', 'dread', ['divine', 'death', 'dreams'],
    `I ride where a father's questions should never have to go. Sleipnir finds a road in the cold, and I keep my spear upright because I do not know what else to do with my hands. Dreams have troubled my son. I have ruled enough lives to understand the shape of a warning. Still I am going to ask the dead for an answer, hoping they might tell a kinder story than the living.`],
  [4755659, 'ragnarok-collingwood', 'Ragnarok (Book Illustration after the Heysham Hogback Motif)', collingwood, '1908 (publication)', 'chaos', ['divine', 'war', 'death'],
    `I have reached the battle that was waiting inside every earlier victory. Here the beasts are not interruptions to the world's order; they are its last appointed guests. Around me each familiar strength meets the shape that will undo it. I would like one unrecorded moment, a space outside the old design in which to lower my weapon. Instead I take my place in the knot, and pull until the pattern breaks.`],
  [4755753, 'restoration-collingwood', 'The Restoration (Book Illustration after the Heysham Hogback Motif)', collingwood, '1908 (publication)', 'longing', ['divine', 'dreams'],
    `I did not expect the world to have an afterward. I had imagined only the breaking, the mouths of beasts, the final names shouted into fire. Yet the pattern turns and leaves room for life again. I approach this new beginning with the caution of someone entering a house rebuilt after mourning. Nothing here can return what burned. Still I want to learn how to welcome a morning that is not an apology.`],
  [129455207, 'hel-gehrts', 'Hel (Book Illustration)', gehrts, '1888 (publication)', 'isolation', ['divine', 'death', 'solitude'],
    `I receive the ones who were not carried into songs. No shining account of battle is required at my threshold. They come tired, frightened, ordinary, and discover that I have room. Above us they speak my name as a threat. They do not see the labor of keeping so many endings from becoming nothing. I sit among what the bright halls refuse to remember, and the silence beside me is crowded with lives.`],
  [129455210, 'sigmund-sword-gehrts', "Sigmund's Sword (Book Illustration)", gehrts, '1888 (publication)', 'dread', ['divine', 'war'],
    `I drove the blade into the living wood and watched desire move around the hall. Each man measured the hilt against his own imagined greatness. None asked why a stranger would bring such a gift, or what a gift from me might cost. I know the hand that will free it. I also know that a sword can enter a family like a guest and remain until every chair stands empty.`],
  [129455212, 'thor-chariot-gehrts', 'Thor in His Chariot (Book Illustration)', gehrts, '1888 (publication)', 'chaos', ['divine', 'war'],
    `I hear the wheels before the people below hear thunder. The goats pull against the weight of heaven, and my hammer answers the trembling in my arm. A god of storms is expected to be certain. I am certain only that something must stand between the fragile roofs and what comes out of the wild. If my arrival frightens those I mean to guard, I have no gentler language large enough for the sky.`],
  [129455225, 'last-battle-gehrts', 'The Last Battle (Book Illustration)', gehrts, '1888 (publication)', 'chaos', ['divine', 'war', 'death'],
    `I can see the wolf's mouth and the place where my future ends. Knowledge has never been a shield; I have merely carried it longer than most. Around me the other gods meet their own foretold enemies, each battle suddenly intimate. I ride forward because retreat would not restore a single day. Let no one mistake that motion for hope. It is the last responsibility of a king who has run out of bargains.`],
  [129455226, 'odin-sinfjotli-gehrts', "Odin Receives Sinfjotli's Body (Book Illustration)", gehrts, '1888 (publication)', 'melancholy', ['divine', 'death', 'longing'],
    `I carried my son until the weight stopped belonging to him and became the whole world. The stranger's boat waits with an awful calm. My arms remember a child; my eyes insist on the man who will never answer again. I should ask where the ferryman is taking him, but every shore has become the wrong one. When I release this body, there will be nothing left for my hands to understand.`],
  [129455253, 'odin-throne-gehrts', 'Odin on His Throne (Book Illustration)', gehrts, '1888 (publication)', 'isolation', ['divine', 'solitude'],
    `I send thought and memory out across the world, then wait like an old man listening for footsteps. The wolves at my feet know a simpler hunger than mine. Reports arrive, kingdoms turn, and still one empty place remains beside every fact. They think the throne raises me above uncertainty. It only gives uncertainty a wider view. When the ravens return, I am grateful before I am wise, and I never let the hall notice.`],
  [129455261, 'odin-gunnlod-gehrts', 'Odin with Gunnlod (Book Illustration)', gehrts, '1888 (publication)', 'longing', ['divine', 'longing', 'sins'],
    `I guarded the precious drink until the stranger made guarding feel like loneliness. He spoke as though the stone around us were a temporary inconvenience, as though there were a life beyond this chamber with room for me. I wanted to believe that desire could arrive without an errand. Now I watch his face and cannot tell which part of his tenderness belongs to the woman before him, and which part belongs to the mead.`],
  [5233086, 'vidar-shoe-henneberg', 'Vidar Fastening His Shoe (Wood Engraving)', 'Hans Christian Henneberg after Constantin Hansen', '1854 (publication)', 'dread', ['divine', 'war'],
    `I bend over a shoe while the others speak of weapons. There is nothing magnificent in this preparation, only leather, pressure, and the patience of a hand that must not slip. One day my foot will need to hold against a mouth large enough to swallow a father. Today the strap is still quiet. I tighten it carefully, trying not to imagine how ordinary this moment will seem to anyone who knows what follows.`],
  [4638773, 'alviss-thrud-frolich', 'Alviss and Thrud (Book Illustration)', frolich, '1895 (publication)', 'longing', ['divine', 'longing'],
    `I lift the ring as though this small circle could contain the distance between us. She smiles, and for a moment the dark halls I know seem less permanent. I have collected names for everything beneath the sky, but none of them tells me what her smile promises. My hands know how to fashion lasting things. They do not know how to ask whether I am welcome in the future I have made for us.`],
  [4650069, 'gullveig-frolich', 'Gullveig Raised over the Fire (Book Illustration)', frolich, '1895 (publication)', 'dread', ['divine', 'sins', 'war', 'nightmares'],
    `I felt the points beneath me before I understood what their judgment required. They raised me into fire and called the burning an answer. The hall was full of faces certain that violence could make an unwelcome power disappear. I will not give them that certainty. Each return is another wound in their explanation. Let them count the flames. I remember the hands on the spears, and the comfort those hands took in acting together.`],
  [4667540, 'lif-lifthrasir-frolich', 'Lif and Lifthrasir (Book Illustration)', frolich, '1895 (publication)', 'longing', ['dreams', 'longing'],
    `I stand beside the only other voice left for me to answer. Water falls between the leaves as if it has forgotten the fire, but I have not. We are supposed to be a beginning. I am still someone who survived an ending. When our hands move toward one another, there is no crowd to bless us and no old household to return to. We must make ordinary life from the terrifying fact that we remain.`],
  [4667581, 'lokasenna-frolich', 'Lokasenna: The Quarrel of the Gods (Book Illustration)', frolich, '1895 (publication)', 'madness', ['divine', 'sins'],
    `I know where every pleasant story in this hall conceals its rot. Their cups shine, their places are assigned, and no one wants the evening interrupted by memory. So I speak. With each accusation the room grows smaller, until all that divine dignity is merely a collection of people avoiding one another's eyes. I tell myself that truth is my purpose. Yet I am listening for the hurt in their silence, and enjoying it.`],
  [4668350, 'vidar-horseback-frolich', 'Vidar on Horseback (Book Illustration)', frolich, '1895 (publication)', 'isolation', ['divine', 'solitude'],
    `I ride without making a speech of my departure. The horse knows the weight upon its back and asks for nothing more. Others fill the halls with plans, boasts, and the bright clash of promises. I have learned to leave space around the things I cannot change. My silence is not emptiness. It is a room I keep ready for the grief that has not yet arrived, though I already know its name.`],
  [4668384, 'vidar-fenrir-frolich', 'Vidar and Fenrir (Book Illustration)', frolich, '1895 (publication)', 'chaos', ['divine', 'war', 'death'],
    `I put my foot where no living foot should stand. The jaw strains against it, and all the careful years of preparation become this single pressure. My father is gone inside the creature before me. No force I bring can turn that fact backward. Still my hands pull. They will call this vengeance fulfilled, but the space I open in the wolf's mouth is not a door through which anyone can come home.`],
  [4669492, 'mani-sol-frolich', 'Mani and Sol (Book Illustration)', frolich, '1895 (publication)', 'longing', ['divine', 'dreams', 'longing'],
    `I share the heavens with someone I can never keep beside me. Our paths make an order the world depends upon, and that order is another name for parting. Below us lovers measure their meetings by our light. I want to tell them how fortunate they are to be allowed an hour together. Instead I hold my course. Even the sky has duties that look beautiful only when seen from far away.`],
  [4670123, 'odin-frigg-counsel-frolich', 'Odin and Frigg before the Wisdom Contest (Book Illustration)', frolich, '1895 (publication)', 'dread', ['divine', 'longing'],
    `I have watched him prepare to leave often enough to recognize the stillness before it. He asks my counsel, yet the road has already entered his eyes. Wisdom is the word he gives this hunger. I know how much it has cost him, and how eagerly he mistakes another danger for an answer. I can warn him, bless him, or remain silent. None of these choices puts my hand upon the door.`],
  [4828141, 'odin-fenrir-frolich', 'Odin Rides against Fenrir (Book Illustration)', frolich, '1895 (publication)', 'dread', ['divine', 'war', 'death'],
    `I have seen this meeting in words before I see it in flesh. The wolf is larger than a prophecy sounds when spoken safely in a hall. My horse gathers itself beneath me, trusting the direction of my hands. That trust is the last thing here that hurts. I could turn, but the ending would only find a different road. So I lower the spear toward the mouth that has been waiting through my whole life.`],
  [4828178, 'freyr-surtr-frolich', 'Freyr and Surtr (Book Illustration)', frolich, '1895 (publication)', 'dread', ['divine', 'war', 'death', 'longing'],
    `I remember what I gave away for love when the fire comes toward me. Once that bargain seemed to open the world; now it leaves an absence in my hand. Surtr does not need to know the story. His burning blade will meet whatever courage I have left, and courage will have to stand where the lost sword should be. I do not regret wanting her. I regret that wanting and surviving were made to quarrel.`],
  [4830400, 'aesir-vanir-war-frolich', 'The Aesir-Vanir War (Book Illustration)', frolich, '1895 (publication)', 'chaos', ['divine', 'war'],
    `I throw the spear, and the air divides into before and after. Until this motion there were still words we had not tried. Now every raised shield answers for us. A ruler can make war look like one clean gesture, but he cannot gather back the scattered hours of pain that follow it. My hand is empty after the cast. The terrible thing is how light it feels, while everyone below me begins to pay.`],
  [4830559, 'loki-sigyn-frolich', 'Loki and Sigyn (Book Illustration)', frolich, '1895 (publication)', 'melancholy', ['divine', 'longing', 'nightmares'],
    `I cannot hold the bowl forever, and that is the cruelty hidden inside my mercy. It fills. My arms tremble. To protect him again I must turn away for the instant that will hurt him most. I have become an expert in that impossible interval. No one sings of the walk to empty a vessel. They remember the poison and the god beneath it, not the woman measuring love in what her hands can carry.`],
  [4830741, 'odin-saga-frolich', 'Odin and Saga Drinking Together (Book Illustration)', frolich, '1895 (publication)', 'longing', ['divine', 'dreams'],
    `I offer a cup, not an answer. Beside the water we can let a story unfold without forcing it to become a warning. He is accustomed to asking what happens next; I ask what he remembers. There is a difference, and for a little while he accepts it. The drink catches the light between us. I wish the worlds could be held this way, passed from hand to hand without conquest, and set down gently.`],
  [4942125, 'sol-daughter-fenrir-frolich', 'Sol, Her Daughter, and Fenrir (Book Illustration)', frolich, '1895 (publication)', 'dread', ['divine', 'death', 'dreams'],
    `I cannot promise my child that the wolf will miss me. The old words are clear about the hunger following my course. What I can give her is the road itself, the knowledge of how to carry light when everyone below has learned to fear the dark. I look toward her and try to make inheritance sound like hope. A mother should leave more than unfinished work, but morning is the only treasure I possess.`],
  [5288741, 'ask-embla-frolich', 'Odin, Lodur, and Hoenir Create Ask and Embla (Book Illustration)', frolich, '1895 (publication)', 'longing', ['divine', 'dreams'],
    `I remember nothing before the breath, yet the wood seems to remember me. Hands bend toward us, granting the things that will let us stand apart from the shore. I do not know their names. I know only the astonishing trouble of having a body and another body beside mine. The world was already here, but now it can be lonely. I turn toward my companion before I understand that turning as a kind of prayer.`],
  [5393766, 'three-norns-frolich', 'The Three Norns at the Well (Book Illustration)', frolich, '1895 (publication)', 'dread', ['divine', 'dreams'],
    `I sit beside the well with my sisters, listening to the roots take what we give. Those above us imagine fate as a sentence spoken once. They do not see the tending, the daily nearness of what grows and what gnaws. I know the shape of lives that have not begun. Sometimes I pause with my task unfinished, wishing that a little silence in my hands could become freedom in someone else's world.`],
  [5394503, 'odin-volva-frolich', 'Odin and the Seeress (Book Illustration)', frolich, '1895 (publication)', 'dread', ['divine', 'dreams'],
    `I see the bracelets before I meet his eye. He has brought payment for a truth he hopes will still be negotiable. The steam rises between us, briefly giving every warning a softer outline. I could let him mistake that softness for mercy. Instead I speak what I know. Powerful men believe a question becomes different when they ask it. Before my kettle, even this god is only someone afraid to hear an answer.`],
  [5399484, 'jarnvidr-eggther-frolich', 'The Iron Wood and Eggther (Book Illustration)', frolich, '1895 (publication)', 'dread', ['nightmares', 'dreams'],
    `I play while the wolves grow in the wood. A visitor might hear the strings and think this a peaceful occupation, the herdsman's reward at evening. But the rooster knows what hour approaches, and the old woman has not raised her brood for gentle weather. Music does not always comfort. Sometimes it is the sound of waiting becoming pleased with itself. I keep the tune moving because I know who will dance when it ends.`],
  [5399502, 'nastrond-frolich', 'Nastrond: The Shore of Corpses (Book Illustration)', frolich, '1895 (publication)', 'dread', ['death', 'nightmares'],
    `I used to think an oath vanished when no one could enforce it. Here every broken word has found a body, and the serpents overhead have all the patience I denied the people I deceived. We wade because there is nowhere dry to stand. Venom touches my shoulders with the intimacy of remembered speech. I search for an excuse and hear it dissolve. Nothing in this hall is more poisonous than the promises I once made freely.`],
  [5404098, 'bragi-idunn-frolich', 'Bragi and Idunn (Book Illustration)', frolich, '1895 (publication)', 'longing', ['divine', 'longing', 'dreams'],
    `I sing beside the apples that keep our listeners young. My fingers return to familiar strings, while she holds a remedy no verse can equal. Between us the hall receives two kinds of forgetting: a body released from age, a heart distracted from its wounds. I sometimes wonder which gift they would miss first. Then she moves behind me, and I play for the one person whose quiet presence makes the song worth finishing.`],
  [5404295, 'sacrifice-odin-frolich', 'The Sacrifice of Odin (Book Illustration)', frolich, '1895 (publication)', 'dread', ['divine', 'death', 'solitude'],
    `I have given myself to myself, which leaves no one to petition for release. The branches hold me where hunger can strip every grand intention down to its bones. Below, the roots continue their older labor. I came seeking signs powerful enough to master the world, yet the first lesson is how little of my own body obeys me. If wisdom arrives, it will find me without a throne, unable even to reach the ground.`],
  [5404472, 'freyja-hyndla-frolich', 'Freyja Visits Hyndla (Book Illustration)', frolich, '1895 (publication)', 'longing', ['divine', 'dreams'],
    `I have come for the names that make a life recognizable. Beside my boar I wait while the old knower weighs what she will tell me. A lineage can sound like dry leaves in the mouth, but to the one who has lost it each name is a door. I will not leave with empty hands. Let her resent the visit. I know how much of a person can disappear when no one remembers where he belongs.`],
  [5466906, 'yggdrasil-frolich', 'Yggdrasil (Book Illustration)', frolich, '1895 (publication)', 'isolation', ['divine', 'dreams', 'solitude'],
    `I stand where roads become branches and depths become roots. Every traveler borrows my shape to explain the worlds, but none asks what it is to remain here through their changes. The well keeps its dark counsel at my feet. My leaves answer weather that no single kingdom owns. I do not move toward anyone, and still everyone passes through me. Perhaps that is why shelter and loneliness have learned to grow from the same trunk.`],
  [5728202, 'skirnir-gerd-frolich', 'Skirnir Threatens Gerd (Book Illustration)', frolich, '1895 (publication)', 'dread', ['divine', 'longing', 'sins'],
    `I thought refusal was a word I was permitted to use. The messenger has brought his master's desire into my home as though it were a law of nature. When gifts fail, his voice changes. I begin to understand that the choice offered to me has walls. They may later call this a courtship. I want someone to remember the moment before agreement, when I was standing in my own place and being taught to fear it.`],
  [5728255, 'baldr-death-frolich', "Baldr's Death (Book Illustration)", frolich, '1895 (publication)', 'melancholy', ['divine', 'death', 'longing'],
    `I gather him against me, though gathering is no longer a way to keep him. His weight has changed without changing at all. A moment ago the world contained his next breath; now it has become a place that will go on without it. I search his face for a small refusal, a sign that death has misunderstood. Around us the story is already forming. In my arms there is only someone I cannot persuade to stay.`],
  [5731859, 'odin-vafthrudnir-frolich', 'Odin and Vafthrudnir (Book Illustration)', frolich, '1895 (publication)', 'dread', ['divine', 'death'],
    `I welcomed the stranger into a contest of knowing. Across from me he sits with the calm of someone who has hidden the sharpest question until the end. I can name the beginnings of worlds and the fates of gods, yet the room grows colder with each answer. Knowledge is a dangerous thing to wager when the stake is your own head. I listen to his next words and begin to hear the name he has withheld.`],
  [5731948, 'thor-wades-frolich', 'Thor Wades while the Aesir Ride (Book Illustration)', frolich, '1895 (publication)', 'isolation', ['divine', 'solitude'],
    `I take the river while the others ride above it. Their way is bright and measured; mine presses cold against the body and demands another step. No one watching from the bridge can feel the current testing my knees. Strength is useful because it makes this look easy. It is lonely for the same reason. I keep moving toward the gathering, carrying the water's resistance with me into a hall where everyone else will arrive dry.`],
];

const clean = (html = '') => html
  .replace(/<a\b[^>]*href="(https?:\/\/[^"<>]+)"[^>]*>([\s\S]*?)<\/a>/g, (_, url, label) => label.includes(url) ? label : `${label} (${url})`)
  .replace(/<[^>]*>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');

async function request(url) {
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'CanvasConfessions-NorseImporter/1.0 (historical art research)' },
        signal: AbortSignal.timeout(60000),
      });
      if (response.ok) return response;
      await response.body?.cancel();
      const error = new Error(`HTTP ${response.status}: ${url}`);
      error.retryable = [500, 502, 503, 504].includes(response.status);
      throw error;
    } catch (error) {
      if (error.retryable === false || attempt === 4) throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, 1500 * (attempt + 1)));
  }
  throw new Error(`Download failed: ${url}`);
}

async function verify() {
  const entries = JSON.parse(await readFile(dataFile, 'utf8'));
  const files = await readdir(imageDir);
  assert.equal(entries.length, 50);
  assert.equal(files.length, 50);
  const fields = ['slug', 'title', 'artist', 'year', 'image', 'excerpt', 'mood', 'collection', 'rooms', 'sourceUrl', 'imageCredit', 'license'].sort();
  const moods = new Set(['dread', 'chaos', 'melancholy', 'isolation', 'longing', 'madness']);
  const rooms = new Set(['sins', 'death', 'war', 'longing', 'solitude', 'nightmares', 'divine', 'dreams']);
  const hashes = new Set();
  const pixels = new Set();
  let totalBytes = 0;
  let minEdge = Infinity;
  let maxEdge = 0;
  for (const entry of entries) {
    assert.deepEqual(Object.keys(entry).sort(), fields);
    for (const field of fields.filter((field) => field !== 'rooms')) {
      assert(typeof entry[field] === 'string' && entry[field].trim(), `${entry.slug}: invalid ${field}`);
    }
    assert.match(entry.slug, /^norse-[a-z0-9-]+$/);
    assert.equal(entry.image, `/paintings/norse/${entry.slug}.jpg`);
    assert.equal(entry.collection, 'norse');
    assert(moods.has(entry.mood));
    assert(Array.isArray(entry.rooms) && entry.rooms.length >= 2 && entry.rooms.every((room) => rooms.has(room)));
    assert.equal(new Set(entry.rooms).size, entry.rooms.length);
    const words = entry.excerpt.split(/\s+/).length;
    assert(words >= 50 && words <= 100, `${entry.slug}: ${words} words`);
    assert(/\bI\b/.test(entry.excerpt), `${entry.slug}: missing first-person voice`);
    assert(entry.artist && entry.year && entry.imageCredit && entry.license);
    assert.match(entry.sourceUrl, /^https:\/\/commons\.wikimedia\.org\//);
    const bytes = await readFile(path.join(imageDir, `${entry.slug}.jpg`));
    const metadata = await sharp(bytes).metadata();
    assert.equal(metadata.format, 'jpeg');
    const edge = Math.max(metadata.width, metadata.height);
    assert(edge >= 800 && edge <= 1400, `${entry.slug}: ${edge}px`);
    const decoded = await sharp(bytes).raw().toBuffer();
    hashes.add(digest(bytes));
    pixels.add(digest(decoded));
    totalBytes += bytes.length;
    minEdge = Math.min(minEdge, edge);
    maxEdge = Math.max(maxEdge, edge);
  }
  for (const field of ['slug', 'image', 'sourceUrl', 'excerpt']) {
    assert.equal(new Set(entries.map((entry) => entry[field])).size, 50, `Duplicate ${field}`);
  }
  assert.deepEqual(files.sort(), entries.map((entry) => `${entry.slug}.jpg`).sort(), 'Unexpected or missing assets');
  assert.equal(new Set(entries.map((entry) => `${entry.artist}|${entry.title}`)).size, 50, 'Duplicate artwork credit');
  assert.equal(hashes.size, 50, 'Duplicate JPEG contents');
  assert.equal(pixels.size, 50, 'Duplicate decoded pixels');
  console.log(JSON.stringify({ entries: 50, jpegFiles: 50, uniqueJpegHashes: hashes.size, uniquePixelHashes: pixels.size, longestEdge: [minEdge, maxEdge], totalBytes, confessionWords: [Math.min(...entries.map((e) => e.excerpt.split(/\s+/).length)), Math.max(...entries.map((e) => e.excerpt.split(/\s+/).length))] }, null, 2));
  return entries;
}

if (process.argv.includes('--verify')) {
  await verify();
} else if (process.argv.includes('--contact-sheets')) {
  const entries = await verify();
  const temp = 'C:/Users/RUDRAP~1/AppData/Local/Temp/opencode';
  assert((await stat(temp)).isDirectory());
  for (let offset = 0; offset < entries.length; offset += 10) {
    const tiles = [];
    for (let index = offset; index < Math.min(offset + 10, entries.length); index++) {
      const tile = await sharp(path.join(imageDir, `${entries[index].slug}.jpg`))
        .resize(300, 250, { fit: 'contain', background: '#eeeeee' }).toBuffer();
      const label = Buffer.from(`<svg width="300" height="40"><rect width="300" height="40" fill="white"/><text x="8" y="25" font-size="18">${index + 1}. ${entries[index].slug.slice(6, 29)}</text></svg>`);
      const position = index - offset;
      tiles.push({ input: tile, left: (position % 5) * 300, top: Math.floor(position / 5) * 290 });
      tiles.push({ input: label, left: (position % 5) * 300, top: Math.floor(position / 5) * 290 + 250 });
    }
    const destination = path.join(temp, `norse-contact-${offset / 10 + 1}.jpg`);
    await sharp({ create: { width: 1500, height: 580, channels: 3, background: 'white' } }).composite(tiles).jpeg().toFile(destination);
    console.log(destination);
  }
} else {
  assert.equal(works.length, 50);
  assert.equal(new Set(works.map(([id]) => id)).size, 50);
  // Verify existing parent directories before creating only this collection's paths.
  for (const parent of ['app/lib', 'public/paintings']) assert((await stat(path.join(root, parent))).isDirectory());
  await mkdir(path.dirname(dataFile), { recursive: true });
  await mkdir(imageDir, { recursive: true });
  const params = new URLSearchParams({ action: 'query', pageids: works.map(([id]) => id).join('|'), prop: 'imageinfo', iiprop: 'url|size|extmetadata', iiurlwidth: '1280', iiurlheight: '1280', format: 'json' });
  const response = await request(`https://commons.wikimedia.org/w/api.php?${params}`);
  const metadata = await response.json();
  assert(metadata.query?.pages, JSON.stringify(metadata.error));
  const entries = [];
  for (const [id, suffix, title, artist, year, mood, rooms, excerpt] of works) {
    const page = metadata.query.pages[id];
    const info = page?.imageinfo?.[0];
    assert(info?.thumburl, `No verified thumbnail: ${id}`);
    const meta = info.extmetadata;
    assert.equal(meta.LicenseShortName?.value, 'Public domain', `Review changed license: ${id}`);
    const slug = `norse-${suffix}`;
    const destination = path.join(imageDir, `${slug}.jpg`);
    let exists = false;
    try {
      exists = (await stat(destination)).isFile();
    } catch (error) { if (error.code !== 'ENOENT') throw error; }
    if (exists) {
      try {
        await sharp(destination, { failOn: 'warning' }).raw().toBuffer();
      } catch {
        console.warn(`Replacing undecodable cached image: ${slug}`);
        exists = false;
      }
    }
    if (!exists) {
      const imageUrl = new URL(info.thumburl);
      imageUrl.search = '';
      imageUrl.pathname = imageUrl.pathname.replace(/%2C/gi, ',');
      let download;
      try {
        download = await request(imageUrl);
      } catch {
        // The API returns originals for small images. Use a standard cached
        // thumbnail when that original is unavailable, not the same URL again.
        const fallbackUrl = new URL(info.url);
        fallbackUrl.search = '';
        fallbackUrl.pathname = fallbackUrl.pathname.replace(/%2C/gi, ',');
        const filename = fallbackUrl.pathname.split('/').at(-1);
        const thumbnailPath = fallbackUrl.pathname.replace('/commons/', '/commons/thumb/');
        for (const width of [960, 1280, 1920]) {
          fallbackUrl.pathname = `${thumbnailPath}/${width}px-${filename}`;
          try {
            download = await request(fallbackUrl);
            break;
          } catch (error) {
            if (width === 1920) throw error;
          }
        }
      }
      assert(download.headers.get('content-type')?.startsWith('image/'), `Not an image: ${id}`);
      const buffer = Buffer.from(await download.arrayBuffer());
      assert(buffer.length < 15_000_000, `Unexpectedly large thumbnail: ${id}`);
      await sharp(buffer).rotate().resize({ width: Math.min(1280, info.width), height: Math.min(1280, info.height), fit: 'inside', withoutEnlargement: true })
        .flatten({ background: 'white' }).jpeg({ quality: 87, mozjpeg: true }).toFile(destination);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    entries.push({ slug, title, artist, year, image: `/paintings/norse/${slug}.jpg`, excerpt, mood, collection: 'norse', rooms,
      sourceUrl: info.descriptionurl,
      imageCredit: `${artist}. Wikimedia Commons: ${page.title.slice(5)}. Source credit: ${clean(meta.Credit?.value) || 'See linked Commons file record'}. Local JPEG resized from the Commons image.`,
      license: 'Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).',
    });
    console.log(`${entries.length}/50 ${slug}`);
  }
  await writeFile(dataFile, `${JSON.stringify(entries, null, 2)}\n`);
  await verify();
}

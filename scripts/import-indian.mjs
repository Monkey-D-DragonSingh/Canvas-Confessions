import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = path.join(root, 'app/lib/data/indian.json');
const assetDir = path.join(root, 'public/paintings/indian');
const api = 'https://openaccess-api.clevelandart.org/api/artworks/';

// Original fictional first-person responses to the scenes, not scripture or historical quotations.
// The first 30 works concern Krishna; the last 20 cover other mythological subjects.
// Individual painted sides are eligible, but never their combined parent or another side of that leaf.
const selections = [
  {
    id: 154759, key: 'krishna-summoning-the-cows', mood: 'longing', rooms: ['longing', 'divine'],
    excerpt: 'I carry the red staff, but my brother needs only a breath through his flute. The cows turn toward him as though each has heard its own name. Beside the Yamuna, I watch the herd gather and wonder whether belonging always begins this quietly. My cloak shields me from the air; his music seems to shelter everything else. Before we return to the village, I want to remain his brother a little longer, without anyone asking us to be more.',
  },
  {
    id: 314225, key: 'adoration-of-young-krishna', mood: 'longing', rooms: ['divine', 'longing'],
    excerpt: 'I came beneath the pipal tree with the marks of Shiva on my forehead. Now a child holding a rattle receives the devotion I thought I knew how to direct. Garlands hang above his yellow tunic, and my practiced distinctions grow less certain. Nothing has been taken from my faith. Something has opened within it. I lower my head, allowing wonder to arrive before explanation, while the small instrument in his hand waits to make its ordinary sound.',
  },
  {
    id: 314369, key: 'krishna-playing-in-the-yamuna', mood: 'longing', rooms: ['longing', 'divine'],
    excerpt: 'I turn my face from the splash, laughing before I can decide to preserve my dignity. Our clothes wait in the tree, his crown beside the bank; the scorching day has finally found an answer in the river. Here, nearness is measured in the water passing between our hands. I know the afternoon cannot stay like this. That knowledge makes every drop more precious, not because it lasts, but because for this moment none of us is standing apart.',
  },
  {
    id: 162523, key: 'yasoda-krishna-churning-butter', mood: 'longing', rooms: ['divine', 'longing'],
    excerpt: 'I pull the churn through the milk and feel his small hand interrupt the household again. Krishna has found the cream before the butter is ready. There will be work to repeat, a pot to guard, another attempt at a stern voice. Yet the hand that steals from me is also the hand I reach for without thinking. Let others describe the mysteries of this child. I know the particular weight of feeding him, and how quickly hunger becomes an excuse for closeness.',
  },
  {
    id: 146117, key: 'krishna-cowherds-return-to-braj', mood: 'melancholy', rooms: ['divine', 'dreams'],
    excerpt: 'I eat rice from a banana leaf with the others, grateful for an appetite that asks no difficult questions. We were hidden, then restored; Brahma has departed, and Krishna sits among us as though friendship were still the simplest thing. Soon we will drive the cattle back to Braj. I try to hold the taste of this meal in my memory. After being misplaced by a god, even the familiar road home feels like something I must learn to trust again.',
  },
  {
    id: 314490, key: 'krishna-under-a-canopy', mood: 'longing', rooms: ['longing', 'divine'],
    excerpt: 'I hold a rose because its small shape gives my hand a purpose. Across the carpeted terrace, Krishna holds another, while the attendant keeps the air moving between us. The open doorway is not an invitation I can hear, yet I cannot stop noticing it. Marble, canopy, flowers: everything has been arranged for ease. Only my heart refuses the arrangement. I stand near enough to speak and discover how much a silence can contain before either person breaks it.',
  },
  {
    id: 142546, key: 'krishna-vanquishing-bakasura', mood: 'dread', rooms: ['nightmares', 'divine'],
    excerpt: 'I trusted the long beak to make a weapon of my disguise. The king sent me against a child, and I mistook smallness for an absence of power. Now the bird cannot contain what I am. My hidden form tumbles out, stripped of the shape that made the attack possible. There is no cleverness left in this falling. I have become the distance between the harmless creature I pretended to be and the violence I carried inside it.',
  },
  {
    id: 154754, key: 'sakhi-persuades-radha', mood: 'longing', rooms: ['longing', 'divine'],
    excerpt: 'I have carried his longing through the forest, and now I must find words gentle enough for hers. Radha listens beside me while Krishna prepares a bed of leaves beyond our conversation. In the flute melody, her name has become something the air can hold. I cannot decide for either of them. A confidante can lead the way, not take the final step. So I speak of his waiting and leave room for her answer to remain her own.',
  },
  {
    id: 314446, key: 'krishna-quells-kaliya', mood: 'dread', rooms: ['sins', 'divine'],
    excerpt: 'I lift a flower in my mouth where poison once made the water mine. Above me, Krishna dances, and every head I raise meets the measure of his feet. My palace cannot protect me from what I have done to this pool. The cowherds need to drink; the river must belong to more than my fear of losing it. If I am permitted to leave for the ocean, I will carry the memory of this weight farther than my venom ever traveled.',
  },
  {
    id: 142535, key: 'krishna-stealing-curds', mood: 'dread', rooms: ['divine', 'dreams'],
    excerpt: 'I raise the stick, but my eyes remain on the ladder. One unsteady movement could turn this scolding into a cry. Krishna reaches for the curds with the confidence of someone who has never considered that a mother can be angry and frightened at once. Balarama stands nearby holding his snake, another wonder I have no time to understand. In this house, even the divine must be kept from falling. I wish he would let me finish one warning before smiling.',
  },
  {
    id: 151967, key: 'cremation-of-putana', mood: 'dread', rooms: ['death', 'nightmares', 'divine'],
    excerpt: 'I bathe the baby while the men carry the enormous remains toward the fire. My hands know how to wash a child; they do not know how to measure the danger that has passed through him. Putana came as a nurse. That borrowed tenderness is what I cannot stop remembering. Krishna lives, and everyone says we are safe. Still, I pour the water carefully, as though an ordinary act of care might restore the difference between protection and its disguise.',
  },
  {
    id: 115988, key: 'krishna-awaiting-radha', mood: 'longing', rooms: ['longing', 'solitude', 'divine'],
    excerpt: 'I have a bed, a fan, and attendants who understand every comfort except the one I need. My eyes stay fixed on the place where Radha might appear. Waiting makes even a generous room feel unfinished. Nothing here can hurry her without changing the meaning of her arrival. I want the step she chooses freely, not the certainty power could provide. Until then, the whisk moves, the air changes, and the empty space before me keeps its stubborn shape.',
  },
  {
    id: 314492, key: 'krishna-toll-from-the-milkmaids', mood: 'chaos', rooms: ['divine', 'longing'],
    excerpt: 'I balance the pot and try not to laugh when Krishna announces that the path belongs to him. We have milk and yogurt to deliver, and suddenly the road has acquired a toll collector with a threat as light as his smile. My arms cannot afford his game even if my heart welcomes the interruption. Behind us, the cowherd grows impatient. I ask what payment could possibly satisfy someone who already knows how completely he has stopped our afternoon.',
  },
  {
    id: 314115, key: 'krishna-balarama-reunite-with-parents', mood: 'melancholy', rooms: ['longing', 'divine'],
    excerpt: 'I recognize my son in the gesture before I can believe the years have ended. He bends to touch our feet, and the white wall behind us seems to hold every day we spent apart. Fine garments cannot return his childhood to this room. Freedom has come with grown sons whose lives I must learn almost from the beginning. I reach toward him, not to claim what prison stole, but to welcome the person who survived beyond my sight.',
  },
  {
    id: 314463, key: 'krishna-radha-quarreling', mood: 'melancholy', rooms: ['longing', 'sins'],
    excerpt: 'I ask where he has been, and he answers by comparing my eyes to lotus petals. Dawn rises behind the leaves with less hesitation than the truth between us. I do not want my anger made beautiful before it has been heard. The night was long; I lived through every part he now tries to soften with a compliment. If reconciliation is to enter this morning, it must come through the question I asked, not around it.',
  },
  {
    id: 314236, key: 'krishna-celebrates-holi', mood: 'chaos', rooms: ['divine', 'longing'],
    excerpt: 'I hear the drum before the color reaches me. Then Krishna sends a bright stream across the space I thought would keep me composed, and the whole festival seems to arrive at my chest. Flutes, horns, and laughter refuse to take turns. Powder freckles the air until nobody can stand outside the celebration untouched. I came prepared to watch the spring return. Now my clothes carry its evidence, and the careful distance I kept has vanished into the crowd.',
  },
  {
    id: 162094, key: 'krishna-lifting-govardhan', mood: 'dread', rooms: ['divine', 'nightmares'],
    excerpt: 'I press close with the cattle beneath a mountain held on one little finger. Above us, Indra rides through the storm he has sent, while Balarama adds his staff to the shelter as though love must always offer whatever it carries. Krishna touches a child with his free hand. That small kindness steadies me more than the impossible roof. The rain has not stopped, but I can breathe beside my neighbors without wondering which of us the sky will take first.',
  },
  {
    id: 314425, key: 'krishna-cowherds-dive-into-river', mood: 'chaos', rooms: ['dreams', 'divine'],
    excerpt: 'I am between the bank and the river, committed to the leap before I have learned its ending. Krishna is already in the air with the others; three boys still wait behind us. Across the water, Radha and her friends watch from the platform. Their amusement reaches me in the instant when courage and embarrassment feel exactly alike. Soon there will be a splash. For now, I belong to neither shore nor current, only to the decision my feet have made.',
  },
  {
    id: 314429, key: 'rukmini-pleads-for-rukma', mood: 'dread', rooms: ['war', 'longing'],
    excerpt: 'I chose Krishna, but I did not choose my brother dying for his refusal to accept it. Rukma stands bound in the striped tunic I recognize, defeated and still unbearably familiar. My plea has kept him alive. It has not made this meeting gentle. Around us, victory has already taken lives that no appeal can return. I try to imagine a future large enough for my chosen love and the family it has wounded, without pretending those loyalties no longer hurt.',
  },
  {
    id: 314438, key: 'krishna-receives-rukmini-invitation', mood: 'longing', rooms: ['longing', 'divine'],
    excerpt: 'I have brought the letter as far as my own hands can carry it. Krishna sits before me in Dvaraka, and beneath the palace the ocean keeps moving as though no decision could alter its course. Yet a princess waits beyond these waters for an answer that will change hers. I watch him receive the message. The journey here was long, but this pause is harder: I have become the witness to a hope I cannot fulfill myself.',
  },
  {
    id: 151021, key: 'krishna-receives-a-flower-garland', mood: 'longing', rooms: ['longing', 'divine'],
    excerpt: 'I offer flowers because my voice cannot arrange its gratitude so neatly. Each blossom was small in my hand; together they make a circle large enough to carry what I have brought to Krishna. The garland will fade. I knew that while preparing it, and still I chose living things instead of something permanent. Perhaps an offering does not need to outlast the moment of being received. Perhaps it is enough that I have come near without asking to possess what I love.',
  },
  {
    id: 143307, key: 'markandeya-cosmic-ocean', mood: 'isolation', rooms: ['solitude', 'dreams', 'divine'],
    excerpt: 'I have survived the world, and survival has become an ocean without a shore. Every creature I could name has disappeared into the end of its cycle. Then a banyan leaf carries a child across the darkness, his toe lifted to his mouth. I look closer and find the universe where I expected only a small body. Immortality had taught me the exhaustion of remaining. This impossible infant teaches me that remaining need not be the same as being alone.',
  },
  {
    id: 152014, key: 'birth-of-krishna', mood: 'longing', rooms: ['divine', 'dreams'],
    excerpt: 'I lie beside the newborn while the village celebrates beyond the chamber. Women gather at the door, coins pass among the men, and somewhere the drums persuade another pair of feet to dance. All that abundance begins with the small breathing body next to mine. I want to welcome every visitor and close the door at the same time. Let the world have its festival. For a little longer, I want to learn the sound he makes before waking.',
  },
  {
    id: 162511, key: 'vasudeva-carries-infant-krishna', mood: 'dread', rooms: ['nightmares', 'divine'],
    excerpt: 'I carry my son into the storm while the guards sleep behind us. Each step must take him farther from Kamsa and closer to a home where nobody will know him by my fear. Above the child, the serpent spreads its shelter. I accept the protection without understanding how to thank it. A father should be allowed to keep his newborn close. Tonight, love requires that I deliver him safely into arms other than my own.',
  },
  {
    id: 136468, key: 'krishna-gopis-rasamandala', mood: 'melancholy', rooms: ['longing', 'divine'],
    excerpt: 'I came to the lotus-covered river smiling, certain that being near him would be enough for the night. The full moon shone above us while we called him the god of love. Then Krishna spoke of leaving. Around me, women sank to the ground, and the same bank became a place I no longer knew how to stand upon. We had arrived in different colors, with different faces. Grief found us together before any of us could answer him.',
  },
  {
    id: 151879, key: 'krishna-asks-for-sweets', mood: 'longing', rooms: ['dreams', 'divine'],
    excerpt: 'I listen as he explains why another sweet is necessary for the future. There will be cattle to herd, demons to defeat, wrestlers, even a throne; apparently none of it can be managed on the food he has already eaten. His argument grows larger than the boy before me. I am his mother, not the keeper of all those coming victories. Still, I reach toward the treats, wishing that everything ahead could be helped so simply by feeding him.',
  },
  {
    id: 314437, key: 'music-for-radha-and-krishna', mood: 'longing', rooms: ['longing', 'divine'],
    excerpt: 'I keep the rhythm while Radha and Krishna listen with their arms around each other. The strings travel farther than my hands, into the forest and the quiet they share. A performer learns to watch for the moment an audience stops noticing the effort. Tonight I find it in their ease. I am not inside that embrace, but the music gives me a way to belong beside it. When the last note comes, I will miss the room it made among us.',
  },
  {
    id: 170893, key: 'radha-krishna-forest-storm', mood: 'longing', rooms: ['longing', 'divine'],
    excerpt: 'I hurry with the coverlet because the rain has reached him. Perhaps someone wiser would remember that Krishna can lift a mountain, that our little shelter cannot be necessary. My hands do not wait for such reasoning. Birds and monkeys crowd the trees while we raise the cloth above him. There is a tenderness in doing what may not be needed. I would rather offer this corner of dry air than stand aside admiring a power that asks nothing of me.',
  },
  {
    id: 146038, key: 'akrura-drives-krishna-to-mathura', mood: 'dread', rooms: ['war', 'longing', 'divine'],
    excerpt: 'I guide the chariot away from the village, feeling the urgency of the brothers behind me. Mathura holds their imprisoned parents and the uncle they must confront. Behind us remain the companions who knew them first as boys. The road cannot face both directions, but my thoughts keep trying. I have been entrusted with an arrival that may undo a kingdom. For now, my task is smaller and no less serious: keep the wheels moving while the familiar world falls away.',
  },
  {
    id: 117677, key: 'krishnas-insomnia', mood: 'longing', rooms: ['solitude', 'longing', 'dreams'],
    excerpt: 'I cannot persuade the night to become rest. Every thought of Radha returns with the persistence of a name remembered just before sleep. There is no battle to settle this wakefulness, no distance I can cross by turning over once more. The hours belong to waiting, and waiting refuses to be commanded. I had imagined longing as a movement toward someone. Tonight it is the stillness of remaining here, listening to a world that seems able to sleep without her.',
  },
  {
    id: 314364, key: 'shiva-enthroned-in-landscape', mood: 'isolation', rooms: ['solitude', 'divine'],
    excerpt: 'I sit where the serpents coil upon the royal seat, with rock and trees for company. The tiger hide at my waist remembers a life outside the language of palaces. A throne need not mean a court; here it holds a stillness no procession could improve. Those who approach may see distance in my quiet. I leave space for them to discover another possibility: that nothing must be performed before they are allowed to stand in the presence of the sacred.',
  },
  {
    id: 130218, key: 'shiva-devi-on-gajasuras-hide', mood: 'longing', rooms: ['divine', 'longing', 'death'],
    excerpt: 'I sit upon his lap while the elephant hide carries us through the monsoon clouds. The skull cup, sword, and drum remain in his hands; none has to disappear for his other hand to rest gently on my shoulder. I meet his gaze without asking him to become only tender. Creation and destruction travel together above the earth. Here, in the closeness between us, I feel no need to deny either one in order to recognize love.',
  },
  {
    id: 136471, key: 'shiva-under-trees', mood: 'longing', rooms: ['solitude', 'longing', 'divine'],
    excerpt: 'I stand beneath two trees that have found a way to grow around each other. The trident is familiar in my hand, the serpent familiar at my neck, yet their entwined branches hold my attention. On earth, even shade can suggest companionship. I have come down among living things, and the quiet here is different from withdrawal. It is a quiet with room beside it, a space where another presence might stand without disturbing what I am.',
  },
  {
    id: 314247, key: 'descent-of-the-ganges', mood: 'longing', rooms: ['divine', 'solitude'],
    excerpt: 'I balance on one leg until the years cease to resemble a human measure. Above me, Shiva turns his attention from the offered cup. I have asked for the Ganges with a body that can do little except remain faithful to its asking. Now the river flows from his hair, and my long discipline meets something greater than endurance. Water will travel where my feet could not. What began as a solitary vigil can finally become a gift for others.',
  },
  {
    id: 162474, key: 'shiva-bearing-sati', mood: 'melancholy', rooms: ['death', 'longing', 'divine'],
    excerpt: 'I bear Sati above me, and the distance between carrying and keeping has become unbearable. The trident can raise her body; it cannot restore the answering presence I knew. Let no one call this loss beautiful merely because a god must endure it. What I hold is not an emblem that makes grief easier to explain. It is the person whose absence changes every place I enter, even while I am unable to put her down.',
  },
  {
    id: 132820, key: 'shiva-mahakala-dancing', mood: 'dread', rooms: ['death', 'divine'],
    excerpt: 'I watch Mahakala dance and feel the limits of every promise I have made against change. This is not a still image of time waiting politely beyond my door. Movement gives it presence, and the ferocious aspect of Shiva allows no bargain with permanence. I had come hoping that devotion might make me exempt from endings. Instead, I stand before a rhythm in which endings belong, trying to learn reverence without pretending I have stopped being afraid.',
  },
  {
    id: 162435, key: 'parvati-garlands-shiva', mood: 'longing', rooms: ['longing', 'divine'],
    excerpt: 'I lift the wedding garland toward Shiva, aware of how much intention can gather in a simple motion. The flowers do not explain our differences, and they need not erase them. My hands bring an answer rather than an argument. In the space before the garland settles, I feel the seriousness of choosing closeness: not a promise that nothing will change, but a willingness to meet what comes without making distance our first refuge.',
  },
  {
    id: 162532, key: 'ganesha-janani', mood: 'longing', rooms: ['divine', 'longing'],
    excerpt: 'I hold Ganesh as a child, not as the beginning of someone else\'s prayer. His elephant head rests within the circle of my care, and the world may wait before asking him to remove its obstacles. There is a history of hurt behind this embrace, but hurt is not the only thing a mother is permitted to remember. I know him also through nearness, through the ordinary devotion of making my arms a place where he belongs.',
  },
  {
    id: 130637, key: 'rama-lakshmana-fighting-ravana', mood: 'chaos', rooms: ['war', 'divine', 'nightmares'],
    excerpt: 'I stand beside my brother while Ravana raises more weapons than any single body should be able to bear. Even a snake has become part of his arsenal. Rama aims the crescent-shaped arrow toward the strange swarm above the crowns, and the dark landscape seems to narrow around that line of purpose. I cannot fight the whole terror at once. I can remain at his side, draw my bow, and refuse to let the number of threats decide the measure of our resolve.',
  },
  {
    id: 154752, key: 'rama-sita-lakshmana-in-forest', mood: 'melancholy', rooms: ['solitude', 'longing'],
    excerpt: 'I turn the food above the fire while Rama and Sita rest near our small forest home. Exile has taught my hands tasks that a palace would have kept from them. Bark cloth, gathered food, a hut: none resembles the life we left, yet an evening can still be made hospitable. I cannot return my brother to his kingdom tonight. I can prepare a meal carefully enough that, for a while, being banished is not the only thing we know about ourselves.',
  },
  {
    id: 314433, key: 'rama-visits-bharadvajas-hermitage', mood: 'longing', rooms: ['divine', 'longing'],
    excerpt: 'I fold my hands as the travelers arrive, knowing that welcome need not wait for a throne to recognize dignity. Rama, Sita, and Lakshmana bow before me, carrying exile into a place where rivers meet. The ornamented walls cannot undo their separation from home. But a threshold can choose what kind of encounter happens upon it. I offer the hermitage without asking them to disguise their weariness, and for this meeting the forest road is allowed to pause.',
  },
  {
    id: 142315, key: 'sita-in-the-garden-of-lanka', mood: 'isolation', rooms: ['solitude', 'longing', 'nightmares'],
    excerpt: 'I kneel beneath the ashoka tree, surrounded by guards and a city that mistakes golden walls for generosity. Ravana comes with his demand, and I answer from the one place he has not enclosed: my refusal. Beyond Lanka lies the sea, another boundary I cannot cross by wishing. I do not confuse being unharmed with being free. Until rescue reaches this garden, I keep my answer intact, a small unyielding country no crown here has the right to govern.',
  },
  {
    id: 162460, key: 'hanuman-carries-rama-lakshmana', mood: 'longing', rooms: ['divine', 'longing'],
    excerpt: 'I make my shoulders a road for Rama and Lakshmana. Their search for Sita gives my strength a direction; without that purpose, becoming enormous would only make me large. I feel the responsibility of their weight and welcome it. Devotion is not always a word spoken with folded hands. Sometimes it is the work of carrying someone farther than they could go alone, keeping steady beneath them while the place they need remains beyond the next step.',
  },
  {
    id: 149597, key: 'hanuman-mountain-of-healing-plants', mood: 'dread', rooms: ['war', 'death', 'divine'],
    excerpt: 'I have brought the mountain because hesitation might cost the life we are trying to save. Rama works to remove the arrow from Lakshmana while the bear and I prepare to help. My strength has carried the plants here; now it must yield to the careful work of healing. The battlefield taught us to act with force. Beside the wounded body, I learn another urgency, one that measures success not by what falls, but by whether someone rises again.',
  },
  {
    id: 133294, key: 'durga-slaying-mahisha', mood: 'dread', rooms: ['war', 'divine'],
    excerpt: 'I look toward Mahisha from the chariot, where the creatures drawing me hold their course. Above him, the clouds turn; below, dust gathers around the violence he has brought into the world. Flowering trees remain behind me, a reminder of what force must serve if it is to mean anything beyond itself. The clash has not yet come. In this charged distance, I keep my purpose clear: the world is not his to ravage, and protection cannot remain only a wish.',
  },
  {
    id: 314432, key: 'goddess-annihilates-raktabija', mood: 'chaos', rooms: ['war', 'nightmares', 'divine'],
    excerpt: 'I fight beside the Goddess and see why our ordinary blows cannot end this battle. Each drop of Raktabija\'s blood makes another enemy wherever it touches earth. Victory seems to multiply the danger until she catches what must not fall. I have never witnessed such fierce precision. Her terrible form is not destruction without purpose; it is the answer to a violence that reproduces itself. I keep fighting, grateful that protection can take a shape larger than my understanding.',
  },
  {
    id: 314460, key: 'vishnu-on-ananta', mood: 'longing', rooms: ['dreams', 'divine'],
    excerpt: 'I touch Vishnu\'s feet gently while Ananta bears his rest upon the cosmic waters. Before there are days to count, there is this care, patient enough not to mistake waking for a command. Lotuses spread across the painted ocean; another will carry Brahma into the work of creation. The world is approaching, but it has not yet filled the silence with needs. I remain beside the sleeper, knowing that an immense beginning can arrive through a gesture almost too tender to notice.',
  },
  {
    id: 147948, key: 'vishnu-battles-madhu-kaitabha', mood: 'chaos', rooms: ['war', 'dreams', 'divine'],
    excerpt: 'I wake upon the serpent bed to a struggle already seeking its place in a world not yet made. Madhu and Kaitabha rise against me above the cosmic ocean, and rest gives way to the work of preserving possibility. There are no cities to defend, no fields that can name their need. Still, creation requires this resistance. Before a single ordinary life begins, I must confront what would deny it room, here among the waters from which its future will emerge.',
  },
  {
    id: 162426, key: 'matsya-fish-avatara-of-vishnu', mood: 'dread', rooms: ['divine', 'nightmares'],
    excerpt: 'I look to Matsya and remember how quickly water can change from sustenance into a world without footing. Vishnu takes the form of a fish, meeting danger within the element that frightens me rather than promising it will disappear. I have spent my life trusting solid ground. This sacred form asks me to imagine preservation differently: not always as remaining where I am, but as being guided through a change too vast for my own strength to navigate.',
  },
  {
    id: 162528, key: 'three-steps-of-vishnu', mood: 'dread', rooms: ['divine', 'sins'],
    excerpt: 'I thought three steps could be measured by the land I owned. Before Vishnu, that certainty becomes smaller than the promise I made. What seemed a modest request reveals the limits of calling anything mine. I can count boundaries, but I cannot contain the one who crosses them. Standing before this immense measure, I begin to understand surrender as something harder than losing a possession: the relinquishing of the belief that possession ever made me master of the world.',
  },
];

const clean = (value) => value.replace(/\s+/g, ' ').trim();
const normalize = (value) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
const digest = (buffer) => createHash('sha256').update(buffer).digest('hex');
const asciiJson = (value) => JSON.stringify(value, null, 2).replace(/[\u007f-\uffff]/g, (char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`) + '\n';
const moods = new Set(['dread', 'chaos', 'melancholy', 'isolation', 'longing', 'madness']);
const rooms = new Set(['sins', 'death', 'war', 'longing', 'solitude', 'nightmares', 'divine', 'dreams']);

assert.equal(selections.length, 50);
assert.equal(new Set(selections.map((item) => item.id)).size, 50);
assert.equal(new Set(selections.map((item) => item.key)).size, 50);
for (const selection of selections) {
  const words = selection.excerpt.split(/\s+/).length;
  assert(words >= 50 && words <= 100, `${selection.key}: ${words} words`);
  assert.match(selection.excerpt, /\bI\b/);
  assert(moods.has(selection.mood));
  assert(selection.rooms.length && selection.rooms.every((room) => rooms.has(room)));
}

async function request(url) {
  let error;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'CanvasConfessions-IndianImporter/1.0 (public-domain art research)' },
        signal: AbortSignal.timeout(90000),
      });
      if (!response.ok) {
        await response.body?.cancel();
        throw new Error(`${response.status} ${url}`);
      }
      return response;
    } catch (caught) {
      error = caught;
      await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
    }
  }
  throw error;
}

function museumEntry(artwork, selection) {
  assert.equal(artwork.id, selection.id);
  assert.equal(artwork.share_license_status, 'CC0');
  assert.equal(artwork.type, 'Painting');
  assert(artwork.culture.some((culture) => /\bIndia\b/i.test(culture)), artwork.title);
  assert(!/\(recto\).*\(verso\)|^Leaf from/i.test(artwork.title), `Combined parent: ${artwork.title}`);
  assert(artwork.images.print?.url && artwork.creation_date && artwork.creditline);
  const artist = artwork.creators.filter((creator) => creator.role === 'artist').map((creator) => {
    const name = creator.description.replace(/\s*\([^)]*\)\s*$/, '').trim();
    return creator.qualifier ? `${creator.qualifier[0].toUpperCase()}${creator.qualifier.slice(1)} ${name}` : name;
  }).join('; ') || `Unknown artist (${artwork.culture.join('; ')})`;
  const slug = `indian-${selection.key}`;
  return {
    slug, title: clean(artwork.title), artist,
    year: clean(artwork.creation_date), image: `/paintings/indian/${slug}.jpg`,
    excerpt: selection.excerpt, mood: selection.mood, collection: 'indian', rooms: selection.rooms,
    sourceUrl: `https://www.clevelandart.org/art/${artwork.accession_number}`,
    imageCredit: `${artist}; The Cleveland Museum of Art, ${clean(artwork.creditline)}, ${artwork.accession_number}. ${artwork.image_credit ? `${clean(artwork.image_credit)}. ` : ''}Open Access image; resized from the museum's digital image.`,
    license: 'CC0 1.0 Universal',
  };
}

const resize = (buffer) => sharp(buffer).rotate().resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 88, mozjpeg: true });

async function verify() {
  const entries = JSON.parse(await readFile(dataPath, 'utf8'));
  assert.equal(entries.length, 50);
  const keys = ['slug', 'title', 'artist', 'year', 'image', 'excerpt', 'mood', 'collection', 'rooms', 'sourceUrl', 'imageCredit', 'license'].sort();
  const fileHashes = new Set();
  const pixelHashes = new Set();
  const thumbnails = [];
  const words = [];
  let bytes = 0;
  for (const [index, entry] of entries.entries()) {
    assert.deepEqual(Object.keys(entry).sort(), keys);
    for (const key of keys.filter((key) => key !== 'rooms')) assert(typeof entry[key] === 'string' && entry[key].trim(), `${entry.slug}: ${key}`);
    assert.equal(entry.slug, `indian-${selections[index].key}`);
    assert.equal(entry.image, `/paintings/indian/${entry.slug}.jpg`);
    assert.equal(entry.collection, 'indian');
    assert.equal(entry.license, 'CC0 1.0 Universal');
    assert.equal(entry.excerpt, selections[index].excerpt);
    assert.equal(entry.mood, selections[index].mood);
    assert.deepEqual(entry.rooms, selections[index].rooms);
    assert.equal(new Set(entry.rooms).size, entry.rooms.length);
    assert.match(entry.sourceUrl, /^https:\/\/www\.clevelandart\.org\/art\/[\w.]+$/);
    assert.match(entry.imageCredit, /The Cleveland Museum of Art/);
    words.push(entry.excerpt.split(/\s+/).length);
    const buffer = await readFile(path.join(assetDir, `${entry.slug}.jpg`));
    const metadata = await sharp(buffer).metadata();
    assert.equal(metadata.format, 'jpeg');
    assert.equal(Math.max(metadata.width, metadata.height), 1200);
    assert(buffer.length > 15000, `Suspiciously small image: ${entry.slug}`);
    fileHashes.add(digest(buffer));
    pixelHashes.add(digest(await sharp(buffer).removeAlpha().raw().toBuffer()));
    thumbnails.push(await sharp(buffer).resize(32, 32, { fit: 'fill' }).greyscale().raw().toBuffer());
    bytes += buffer.length;
  }
  for (const field of ['slug', 'title', 'image', 'excerpt', 'sourceUrl']) {
    assert.equal(new Set(entries.map((entry) => normalize(entry[field]))).size, 50, `Duplicate ${field}`);
  }
  // A leaf and either of its painted sides must not both enter this collection.
  const leafIds = entries.map((entry) => entry.sourceUrl.replace(/\.[a-z]$/, ''));
  assert.equal(new Set(leafIds).size, 50, 'Repeated leaf accession');
  assert.equal(fileHashes.size, 50, 'Repeated JPEG bytes');
  assert.equal(pixelHashes.size, 50, 'Repeated decoded pixels');
  let closest = { difference: Infinity };
  for (let a = 0; a < thumbnails.length; a++) {
    for (let b = a + 1; b < thumbnails.length; b++) {
      const difference = thumbnails[a].reduce((sum, value, i) => sum + Math.abs(value - thumbnails[b][i]), 0) / thumbnails[a].length;
      if (difference < closest.difference) closest = { difference, a: entries[a].slug, b: entries[b].slug };
      assert(difference > 3, `Possible duplicate composition: ${entries[a].slug}, ${entries[b].slug}`);
    }
  }
  assert.deepEqual((await readdir(assetDir)).sort(), entries.map((entry) => `${entry.slug}.jpg`).sort(), 'Missing or unreferenced assets');
  console.log(JSON.stringify({
    entries: entries.length, krishnaPaintings: 30, otherMythologyPaintings: 20,
    uniqueSlugs: 50, uniqueTitles: 50, uniqueMuseumRecords: 50, uniqueLeaves: 50,
    uniqueFileHashes: fileHashes.size, uniqueDecodedImageHashes: pixelHashes.size,
    localJpegs: 50, longestEdge: 1200,
    excerptWords: { min: Math.min(...words), max: Math.max(...words) },
    totalBytes: bytes, closestThumbnailPair: closest,
  }, null, 2));
  return entries;
}

async function download() {
  // Check the intended parent directories before creating either output location.
  for (const parent of ['app/lib/data', 'public/paintings']) assert((await stat(path.join(root, parent))).isDirectory());
  await mkdir(assetDir, { recursive: true });
  const entries = [];
  const sourceHashes = new Set();
  for (let start = 0; start < selections.length; start += 5) {
    entries.push(...await Promise.all(selections.slice(start, start + 5).map(async (selection) => {
      const { data: artwork } = await (await request(`${api}${selection.id}`)).json();
      const entry = museumEntry(artwork, selection);
      const imageUrl = artwork.images.print.url;
      assert.equal(new URL(imageUrl).hostname, 'openaccess-cdn.clevelandart.org');
      const response = await request(imageUrl);
      assert.match(response.headers.get('content-type'), /^image\//);
      const original = Buffer.from(await response.arrayBuffer());
      const hash = digest(original);
      assert(!sourceHashes.has(hash), `Duplicate source: ${entry.title}`);
      sourceHashes.add(hash);
      const metadata = await sharp(original).metadata();
      assert(Math.max(metadata.width, metadata.height) >= 1200, 'Do not upscale museum images');
      await resize(original).toFile(path.join(assetDir, `${entry.slug}.jpg`));
      console.log(`Downloaded ${selection.id}: ${entry.title} (source SHA-256 ${hash})`);
      return entry;
    })));
  }
  assert.equal(sourceHashes.size, 50);
  await writeFile(dataPath, asciiJson(entries));
  await verify();
  console.log('All 50 live source records passed Painting, India culture, CC0, and non-parent checks; 50 unique source image hashes.');
}

async function verifySources() {
  const entries = await verify();
  const sourceHashes = new Set();
  for (let start = 0; start < selections.length; start += 5) {
    await Promise.all(selections.slice(start, start + 5).map(async (selection, offset) => {
      const { data: artwork } = await (await request(`${api}${selection.id}`)).json();
      const entry = entries[start + offset];
      assert.deepEqual(entry, museumEntry(artwork, selection), `Museum metadata changed: ${entry.slug}`);
      const source = Buffer.from(await (await request(artwork.images.print.url)).arrayBuffer());
      sourceHashes.add(digest(source));
      const expected = await resize(source).toBuffer();
      const actual = await readFile(path.join(assetDir, `${entry.slug}.jpg`));
      assert.equal(digest(actual), digest(expected), `Image/source mismatch: ${entry.slug}`);
      console.log(`Live CC0 metadata and source-to-local image verified: ${entry.slug}`);
    }));
  }
  assert.equal(sourceHashes.size, 50);
  console.log('All 50 museum records and source-to-local image transformations verified; 50 unique source hashes.');
}

const mode = process.argv[2];
if (mode === '--verify') await verify();
else if (mode === '--verify-sources') await verifySources();
else if (mode === undefined) await download();
else throw new Error('Usage: node scripts/import-indian.mjs [--verify|--verify-sources]');

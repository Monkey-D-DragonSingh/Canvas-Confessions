import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import vm from 'node:vm';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = path.join(root, 'app/lib/data/classical.json');
const assetDir = path.join(root, 'public/paintings/classical');
const api = 'https://openaccess-api.clevelandart.org/api/artworks/';

// These are original fictional voices inspired by the scenes, not historical quotations.
// One accession per composition; no alternate views, variants, or individual series panels.
const selections = [
  {
    id: 110180, key: 'the-race-track-ryder', mood: 'dread', rooms: ['death', 'nightmares'],
    excerpt: 'I keep to the curve because there is nowhere left to arrive. My pale horse carries no wager, only the rider every wager forgets to count. The scythe leans above us; a snake rehearses our movement in the grass. Once, this oval promised a finish. Now the same earth passes beneath the same hooves, and the empty sky refuses to announce a winner. I can hear the spectators who are no longer here.',
  },
  {
    id: 148758, key: 'crucifixion-of-saint-andrew-caravaggio', mood: 'dread', rooms: ['death', 'divine', 'sins'],
    excerpt: 'I can feel their hands trying to undo what other hands have fastened. Below me, faces emerge from the dark as if the night itself has come to watch. There is no distance left between my body and their uncertainty. The rope has become a question neither strength nor pity can answer. Do not turn this wood into an ornament yet. I am still upon it, and the people beneath me are still deciding what mercy means.',
  },
  {
    id: 149665, key: 'ruin-by-the-sea-bocklin', mood: 'isolation', rooms: ['solitude', 'nightmares'],
    excerpt: 'I used to keep the sea outside. Now it speaks through every opening in me. The cypresses bend like visitors who cannot bring themselves to enter, and that sick green light finds rooms I thought I had buried. You ask who lived here. I remember footsteps, but not the names attached to them. Stay on the shore if you must. From there, my emptiness can still be mistaken for a view.',
  },
  {
    id: 128842, key: 'saint-peter-repentant-la-tour', mood: 'melancholy', rooms: ['sins', 'solitude', 'divine'],
    excerpt: 'I have outlived the words I said, but not the moment of saying them. The lantern keeps a little country of light around my knees. Beyond it waits the rooster, a small ordinary creature with a voice large enough to divide my life. My hands clasp nothing. I hold them together because I remember how easily I once let go. Forgiveness has reached this room. Sleep has not yet found the door.',
  },
  {
    id: 149108, key: 'scenes-of-witchcraft-night-rosa', mood: 'dread', rooms: ['nightmares', 'dreams'],
    excerpt: 'I thought the trees would hide us from whatever answered. Now I stand among the travelers and watch the conjurer make an opening in the night. The column beside him belongs to an older ruin; the things gathering below it seem older still. Nobody speaks of leaving. We have become afraid that movement might count as an invitation. I came to witness a trick. My body has stopped believing in tricks.',
  },
  {
    id: 146416, key: 'eve-of-the-deluge-linnell', mood: 'dread', rooms: ['divine', 'nightmares'],
    excerpt: 'I look at the burning color above the land and try to remember an ordinary evening. There must have been one when clouds were only clouds, when gathering the living did not mean counting everything that would be lost. The world is still solid beneath me. That is what makes the warning unbearable. Nothing has fallen yet, and already I cannot look at a tree without imagining the water taking its place.',
  },
  {
    id: 136680, key: 'saint-jerome-ribera', mood: 'melancholy', rooms: ['death', 'solitude', 'divine'],
    excerpt: 'I have translated words that promise eternity, yet the skull requires no translation. It waits beside the book with its patient, toothless certainty. Light catches my skin and makes the years upon it impossible to conceal. The stone in my hand is easier to carry than the life I have brought into this wilderness. I wanted silence to make me pure. Instead, it has made every unspoken thought painfully easy to hear.',
  },
  {
    id: 118679, key: 'lazarus-and-the-rich-man-bassano', mood: 'isolation', rooms: ['sins', 'solitude', 'divine'],
    excerpt: 'I lie close enough to smell the meal and too far away to belong to it. Above the floor, dishes pass between hands that have learned not to notice mine. A dog approaches without asking what I own. Its rough attention is the only welcome this house has offered. You might call the distance between us a few steps. From where I am lying, it is the whole shape of their world.',
  },
  {
    id: 143803, key: 'samson-and-delilah-honthorst', mood: 'dread', rooms: ['sins', 'longing', 'nightmares'],
    excerpt: 'I hold the light close enough to see what trust has made possible. His sleeping weight rests against us without suspicion. The old woman asks for silence, and suddenly the smallest noise seems capable of waking the person I was before this bargain. A lock of hair should weigh almost nothing. Tonight it contains a life. I have not raised a sword, yet everything around this candle has become a weapon.',
  },
  {
    id: 147020, key: 'samson-valentin', mood: 'melancholy', rooms: ['war', 'solitude'],
    excerpt: 'I can rest my head in one hand, but I cannot put down what the other has done. The jawbone lies near me, absurdly small for the number of lives attached to it. The lion has become another object in a room that calls me victorious. My armor holds its shape better than I do. Everyone knows the story of my strength. Nobody has asked why strength should leave a man sitting this quietly.',
  },
  {
    id: 139729, key: 'sleep-restout', mood: 'isolation', rooms: ['dreams', 'solitude'],
    excerpt: 'I fold my wings into a sleep that cannot carry me anywhere. The poppies keep their counsel beside my body; even the air seems drugged by their stillness. You may think a god has nothing to fear in closing his eyes. But I make the country you enter when the room disappears, and I know how easily its roads change. Tonight I want only a darkness that asks nothing of me.',
  },
  {
    id: 153389, key: 'david-leighton', mood: 'melancholy', rooms: ['death', 'war', 'longing'],
    excerpt: 'I let the crown fall because it could not tell me how to remain a father. Beyond this chamber, they can speak of armies and obedience. Here, the victory has only one name missing from it. My body leans toward an escape the walls cannot provide. If I were small enough to leave through the air, perhaps I could stop hearing the country celebrate what has broken the room inside me.',
  },
  {
    id: 162295, key: 'oedipus-at-colonus-harriet', mood: 'melancholy', rooms: ['solitude', 'longing'],
    excerpt: 'I reach for my daughter as though my arm could shelter her from the history attached to it. The world beyond my blindness is full of people who know my story before they know my voice. Antigone remains close enough for me to recognize the shape of loyalty. I cannot offer her a kingdom. I can barely offer a road. Still, she stands beside me, and exile has not yet taken everything.',
  },
  {
    id: 141641, key: 'memento-mori-harnett', mood: 'dread', rooms: ['death', 'solitude'],
    excerpt: 'I have finished measuring you. The last sand has fallen, the candle has spent its little weather, and the book keeps opening at a thought you would rather postpone. Beside them I grin without amusement. Once I had a face that needed a mirror. Now every surface on this table reflects the same ending. You are welcome to linger over the workmanship. I know how carefully the living inspect anything except the warning.',
  },
  {
    id: 159309, key: 'sweet-melancholy-vien', mood: 'longing', rooms: ['longing', 'solitude'],
    excerpt: 'I have read the letter often enough to know where hope stops between its lines. The room offers lovely things to occupy my hands: pearls, a table, the careful furniture of a life that ought to satisfy me. Instead, my head sinks into my palm. Nothing here is broken in a way a visitor could repair. Even the brazier has a purpose. I remain beside it, warming a future that will not arrive.',
  },
  {
    id: 155871, key: 'a-eunuchs-dream-lecomte-du-nouy', mood: 'madness', rooms: ['dreams', 'nightmares', 'longing'],
    excerpt: 'I watch the smoke offer what the room withholds. She gathers out of it, almost near enough to answer, but the little figure with the blade has entered the vision too. Even my dreaming cannot leave my wounds outside. They have made a spectacle of my wanting; I wanted only to be wanted in return. The pipe grows quiet in my hand. Above me, tenderness and terror refuse to separate.',
  },
  {
    id: 140152, key: 'esther-ahasuerus-and-haman-steen', mood: 'dread', rooms: ['sins', 'divine'],
    excerpt: 'I arranged the destruction of strangers as though it were another matter for the table. Now Esther has spoken, and the king turns toward me. The glass still shines. The lemon still curls its bright skin beside the dishes. How can such small luxuries remain unchanged when the room has become a sentence? I sink into my seat, searching for the authority that was mine a moment ago. Nobody returns it.',
  },
  {
    id: 144732, key: 'storm-in-the-mountains-church', mood: 'dread', rooms: ['death', 'solitude'],
    excerpt: 'I am the tree the lightning chose. The mountain behind me still wears its vast composure, but my branches have forgotten how to hold a sky. Clouds pass as though nothing has happened. Beneath them, the living wood continues its slow business around my ruin. You can call this a cycle if you need the comfort of a shape. From inside the split trunk, it feels like an interruption that will never finish.',
  },
  {
    id: 109973, key: 'wisdom-and-destiny-keller', mood: 'dread', rooms: ['dreams', 'divine'],
    excerpt: 'I stand where the shepherd does not look. His small peace depends upon the distance between his day and the figures waiting at its edge. Beside Wisdom, I have no need to hurry. The landscape is generous enough to hold his innocence and my certainty without letting either touch the other. You see an allegory. I see how gently a life can proceed while everything that will change it remains already present.',
  },
  {
    id: 105224, key: 'the-ghost-story-macewen', mood: 'dread', rooms: ['nightmares', 'dreams'],
    excerpt: 'I squeeze my doll until its little body seems steadier than mine. The woman at the spinning wheel has not moved far from her ordinary work, yet her story has changed every shadow in the room. The others listen with faces I cannot read. I want someone to laugh and break the spell. Nobody does. A moment ago, the door was only a door. Now I keep watching the space beneath it.',
  },
  {
    id: 124804, key: 'the-contemplator-carriere', mood: 'longing', rooms: ['dreams', 'solitude', 'longing'],
    excerpt: 'I place a hand over my heart to prove that something here still answers. Above me, the crescent keeps its thin, unreachable promise. My other hand moves toward it before I remember the distance. In this brown half-light, even my body seems to be turning into a thought. I do not know whether I am watching the heavens or remembering them. Either way, the stars have more room than I do.',
  },
  {
    id: 154283, key: 'symbolic-head-redon', mood: 'madness', rooms: ['dreams', 'solitude'],
    excerpt: 'I turn inward because the frames keep closing. One rectangle contains another, and none of them leads out. My helmet is a strange protection against a danger that has no direction. I hold the green staff as if there were ground beyond this thought on which to plant it. You may search my profile for a destination. I have become the pause between seeing a world and consenting to live inside it.',
  },
  {
    id: 150353, key: 'ruins-of-an-ancient-city-martin', mood: 'melancholy', rooms: ['death', 'solitude'],
    excerpt: 'I built my streets to make arrival feel inevitable. Now they guide the evening through buildings that cannot remember their inhabitants. The valley opens beneath me with a depth no monument can argue against. From far away, ruin looks orderly: a column here, a wall there, gold settling over everything. Come closer and count the thresholds. Each one was once crossed by somebody who believed there would always be a home to return to.',
  },
  {
    id: 170741, key: 'cordelia-parting-from-her-sisters-brown', mood: 'longing', rooms: ['sins', 'longing'],
    excerpt: 'I leave them the words that purchased their inheritance. My own would not grow sweet enough to serve the bargain, and now parting must do the work affection could not. I look at my sisters and try to find the girls who once shared a room with me. Ceremony stands between us in splendid colors. It would be easier if they looked like strangers. They still look like people I expected to love me.',
  },
  {
    id: 128375, key: 'vision-of-saint-jerome-langetti', mood: 'dread', rooms: ['divine', 'nightmares'],
    excerpt: 'I withdrew from the world, but the summons has followed me here. The angel enters my solitude with a force no closed eye can keep outside. My old body turns toward a judgment I had hoped to prepare for in private. Books cannot make an answer for me now. I had imagined revelation as a light falling gently across a page. Instead, the page has vanished, and the light is asking for me.',
  },
  {
    id: 166783, key: 'death-of-sophonisba-guerin', mood: 'melancholy', rooms: ['death', 'war'],
    excerpt: 'I keep the pen moving because the page is the last place where my hand can still decide something. They have spoken of dignity as though it could undo captivity, as though a noble word could make this room less cruel. My body begins to withdraw from the chair. Do not admire my composure without noticing what demanded it. I wanted a life beyond their victory, not a beautiful pose at its edge.',
  },
  {
    id: 130132, key: 'christ-with-joseph-of-arimathea-savoldo', mood: 'melancholy', rooms: ['death', 'divine'],
    excerpt: 'I asked for the body, and now the weight of that request rests against me. The cloudy sky offers no place to set it down. There are only two of us in this narrow world: the one who cannot feel the carrying, and the one who must remember it. I try to hold him without allowing my own fear to become another pressure. The tomb is mine. The absence will not belong to me alone.',
  },
  {
    id: 148971, key: 'glaucus-and-nydia-alma-tadema', mood: 'longing', rooms: ['longing', 'solitude'],
    excerpt: 'I weave the roses carefully, giving my hands the confession my voice cannot risk. Glaucus is near enough for every ordinary sound to matter. I know the flowers by touch; I know my place in this house by everything nobody needs to say. A garland can be accepted without a question. That is its kindness and its cruelty. When I finish, he will hold something of mine without knowing how much I have given.',
  },
  {
    id: 127224, key: 'mount-vesuvius-at-midnight-bierstadt', mood: 'chaos', rooms: ['nightmares', 'death'],
    excerpt: 'I thought midnight would conceal the mountain. Instead, it has given the fire a world of its own. The red wound opens above me and throws its answer into the sky; ash makes darkness visible in a way the moon never could. I stand before a landscape that has begun to move from within. Every solid thing I trusted has acquired a terrible possibility. Even the ground beneath my feet seems to be listening.',
  },
  {
    id: 141728, key: 'revolt-at-cairo-girodet', mood: 'chaos', rooms: ['war', 'sins'],
    excerpt: 'I cannot find a horizon between the bodies. A weapon rises where a hand was a moment ago; cloth twists through the crush as though color itself were being dragged into the fight. Someone will arrange this struggle into a campaign and give each side a name. From inside it, I can barely tell where my own fear ends. There is no grand view here. There is only the next blow and the person beneath it.',
  },
  {
    id: 151377, key: 'fall-of-simon-magus-batoni', mood: 'chaos', rooms: ['sins', 'divine', 'nightmares'],
    excerpt: 'I made the crowd look upward, and for a moment their belief felt like wings. Now the support beneath me has gone. The distance I used to measure my glory has become the distance of my fall. Below, raised hands belong to prayers I cannot interrupt. I claimed a height that would prove me more than human. My body is answering instead, terribly ordinary, with nothing left to persuade the air.',
  },
  {
    id: 97170, key: 'dead-christ-with-angels-bassano', mood: 'melancholy', rooms: ['death', 'divine'],
    excerpt: 'I have wings, and they are useless for this. Beside the other angel, I attend a body that will not become lighter because heaven has sent us. We can arrange our care around the wounds, but care cannot pretend they are not there. The silence between us is not the silence of certainty. It is the difficult hush of keeping watch when love has arrived with empty hands and nowhere else to go.',
  },
  {
    id: 105480, key: 'midnight-cazin', mood: 'isolation', rooms: ['solitude', 'dreams'],
    excerpt: 'I know this town in daylight, but midnight has taken away the evidence. The canal keeps its dark reflection close, and the buildings stand with the patience of things that do not need an answer. I listen for a window opening, a footstep, any small refusal of the stillness. Nothing comes. Perhaps everyone is asleep. Perhaps I am remembering a place that has continued without me and no longer knows how to let me in.',
  },
  {
    id: 135483, key: 'ruins-in-a-rocky-landscape-rosa', mood: 'melancholy', rooms: ['solitude'],
    excerpt: 'I sit beneath the rocks while the old masonry catches its last share of light. The others can idle here as though a ruin were merely another kind of shelter. I keep thinking about the hands that fitted those stones together. They wanted something to remain. Now our afternoon passes through their intention without asking permission. The landscape is beautiful, and that troubles me: it has made such an easy place for their disappearance.',
  },
  {
    id: 129386, key: 'christ-on-the-cross-el-greco', mood: 'dread', rooms: ['death', 'divine'],
    excerpt: 'I stretch between the earth and a sky that will not take my weight. Blood gives the body a language the heavens do not answer aloud. You may let your eyes follow the long lines upward and call the movement spiritual. Stay with the flesh a moment longer. Before this can become a sign, it is a wound. Before you find a promise in it, someone has to remain here and suffer its length.',
  },
  {
    id: 151015, key: 'interior-gwen-john', mood: 'isolation', rooms: ['solitude', 'longing'],
    excerpt: 'I left the cups where another afternoon could find them. The brown teapot sits with the composure of an object that has never needed company, while the room holds its pale light without complaint. Nothing insists that I should be lonely. That makes the feeling harder to explain. I can imagine a hand entering this small arrangement, lifting a cup, changing the silence. For now, even that imagined movement seems too loud.',
  },
  {
    id: 92937, key: 'stag-at-sharkeys-bellows', mood: 'chaos', rooms: ['nightmares'],
    excerpt: 'I lean into the other body because distance would give the fist room to return. Around the ropes, mouths open in a darkness crowded with appetite. They can see the whole fight. I can see only the shoulder, the glare, the brief space in which I must breathe. Their excitement rises when my balance fails. It is strange to become entertainment at the exact moment every part of you is trying to remain intact.',
  },
  {
    id: 141639, key: 'twilight-in-the-wilderness-church', mood: 'dread', rooms: ['solitude', 'dreams'],
    excerpt: 'I watch the sky turn red above water that has done nothing to deserve a warning. The dark trees make a border around the brightness, but they cannot contain it. This should be the hour when the world releases its demands. Instead, every cloud looks like news traveling toward me. I know that sunset is not a fire. I keep repeating that knowledge while the wilderness glows as though it has heard otherwise.',
  },
  {
    id: 122351, key: 'burning-of-parliament-turner', mood: 'chaos', rooms: ['nightmares'],
    excerpt: 'I came to the river because everyone was coming, and now the water has become another surface for the burning. Boats press toward the blaze with a courage that looks very small from this bank. Above them, the buildings lose their edges inside the light. I cannot stop looking. That is the shame I carry away: while others struggled to save what remained, some part of me stood still before the terrible color.',
  },
  {
    id: 126769, key: 'tiger-and-buffalo-rousseau', mood: 'dread', rooms: ['nightmares', 'dreams'],
    excerpt: 'I thought the leaves would hide the movement. Their sharp green shapes crowd around us, immense and strangely calm, while the tiger closes the distance my body cannot afford. Nothing in this garden bends to make an escape. Fruit hangs above the struggle as though ripening were the only event worth noticing. I am not inside a peaceful wilderness. I am inside the instant when its beauty stops having anything to do with my survival.',
  },
  {
    id: 149410, key: 'in-the-waves-gauguin', mood: 'longing', rooms: ['longing', 'dreams'],
    excerpt: 'I turn my face away from the shore and let the green water gather around my shoulders. Behind me, the orange earth is too vivid, too full of a life that has already decided what I should be. The waves do not know that version of me. They are cold and indifferent, not kind, but their indifference leaves room for a different breath. I want to return without returning to exactly the same self.',
  },
  {
    id: 106088, key: 'morning-after-a-storm-homer', mood: 'isolation', rooms: ['solitude'],
    excerpt: 'I have survived the night, but the sea has not agreed to become gentle. Morning lays its light across water still breaking against the rocks, and the shore receives each blow without a witness. I listen for some announcement that the danger is over. There is only the next wave. Perhaps survival is this: standing before the same power that frightened you yesterday and learning that daylight changes the view, not the power.',
  },
  {
    id: 136217, key: 'christ-and-virgin-at-nazareth-zurbaran', mood: 'dread', rooms: ['divine', 'death', 'longing'],
    excerpt: 'I watch him pause over the thorn, and the room becomes larger than the afternoon can bear. There are books and fruit upon the table, ordinary things insisting that we are still at home. My tears have arrived before I can explain them. A small hurt should need only a mother and a moment of care. Yet I look at his hand and feel a future moving toward us that my own hands cannot stop.',
  },
  {
    id: 143602, key: 'waterfall-and-dead-beech-ruisdael', mood: 'melancholy', rooms: ['death', 'solitude'],
    excerpt: 'I lie across the foreground with the pale exposure of something that once had leaves. Water keeps speaking below me; travelers follow the distant path toward a patch of sun. Nobody needs my shade anymore. Beyond the branches, an old building catches gold along its broken edge. We make a handsome pair, the ruin and I. It is possible to become part of a beautiful landscape precisely because you have stopped being alive.',
  },
  {
    id: 144967, key: 'point-judith-heade', mood: 'isolation', rooms: ['solitude', 'longing'],
    excerpt: 'I search the dark water for the sails, then lose them again in the moonlight. The shore has become a place without small details, only a low edge between two enormous silences. I had thought knowing the name of this coast would make it familiar. At night, names do not reach very far. Somewhere to the left, people are aboard those ships. I hold that fact like a faint light I cannot bring closer.',
  },
  {
    id: 81391, key: 'moonrise-at-the-priory-denis', mood: 'isolation', rooms: ['dreams', 'solitude'],
    excerpt: 'I hang the linen beneath the moon and watch an ordinary task acquire the stillness of a ceremony. My dark clothes disappear into the garden while the pale fabric takes what light remains. The walls keep the night close around me. Tomorrow these sheets will belong to daylight and familiar rooms. Tonight they move like thoughts I have not spoken, suspended between my hands and the strange gold above the priory.',
  },
  {
    id: 145960, key: 'terminus-holbein', mood: 'isolation', rooms: ['solitude', 'divine'],
    excerpt: 'I am made to mark the place beyond which something must not pass. A human face has been given to my refusal, as though a boundary would be easier to understand if it could look back. I cannot step aside without ceasing to be myself. You may admire such steadfastness. From here, it feels very close to being unable to leave. Everything that travels past me has a freedom my permanence cannot purchase.',
  },
  {
    id: 144270, key: 'saint-paul-the-hermit-preti', mood: 'longing', rooms: ['solitude', 'divine'],
    excerpt: 'I look upward before I notice how empty my hands have become. The rough cloth against my body has learned every shape of hunger. Somewhere above, the raven carries the small mercy on which another day depends. They will call this solitude a choice, and perhaps it began as one. But the desert has its own long hours. I am grateful for the bread, and ashamed of how much I also wait for the bird.',
  },
  {
    id: 117032, key: 'sacrifice-of-isaac-del-sarto', mood: 'dread', rooms: ['divine', 'nightmares'],
    excerpt: 'I know the hand above me. That is what makes the knife impossible to understand. My father has become a stranger without changing his face, and I cannot find the place where obedience ends and I begin. Then the angel interrupts the air. You see rescue entering the picture. I feel the moment before it, still lodged inside my body. Even if the blade never falls, I will remember having waited for it.',
  },
  {
    id: 129220, key: 'mass-of-saint-gregory-baldung', mood: 'dread', rooms: ['divine', 'death'],
    excerpt: 'I kneel at the altar and discover that an answer can be more frightening than a doubt. The wounded body stands where ritual had taught my eyes what to expect. Around me, the others stare; the instruments of suffering make belief terribly specific. I wanted certainty to bring us peace. Instead, the familiar room has opened upon pain that refuses to stay in the past. My prayer continues, but it no longer sounds the same.',
  },
];

const normalize = (value) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
const digest = (buffer) => createHash('sha256').update(buffer).digest('hex');
const asciiJson = (value) => JSON.stringify(value, null, 2).replace(/[\u007f-\uffff]/g, (char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`) + '\n';

async function request(url) {
  let error;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'CanvasConfessions-ClassicalImporter/1.0 (public-domain art research)' },
        signal: AbortSignal.timeout(90000),
      });
      if (!response.ok) throw new Error(`${response.status} ${url}`);
      return response;
    } catch (caught) {
      error = caught;
      await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
    }
  }
  throw error;
}

async function existingTitles() {
  const original = await readFile(path.join(root, 'app/lib/paintings.ts'), 'utf8');
  const context = { exports: {} };
  vm.runInNewContext(ts.transpileModule(original, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, context);
  // Already-merged records are not duplicates of themselves.
  return context.exports.paintings.filter((painting) => painting.collection !== 'classical').map((painting) => painting.title);
}

async function verify() {
  const entries = JSON.parse(await readFile(dataPath, 'utf8'));
  const oldTitles = await existingTitles();
  const normalizedOldTitles = new Set(oldTitles.map(normalize));
  assert.equal(entries.length, 50, 'Exactly 50 entries required');
  assert.equal(selections.length, 50);
  assert.equal(new Set(selections.map((item) => item.id)).size, 50);
  const keys = ['slug', 'title', 'artist', 'year', 'image', 'excerpt', 'mood', 'collection', 'rooms', 'sourceUrl', 'imageCredit', 'license'].sort();
  const moods = new Set(['dread', 'chaos', 'melancholy', 'isolation', 'longing', 'madness']);
  const rooms = new Set(['sins', 'death', 'war', 'longing', 'solitude', 'nightmares', 'divine', 'dreams']);
  const hashes = new Set();
  const pixelHashes = new Set();
  const thumbnails = [];
  let bytes = 0;
  const counts = [];
  for (const [index, entry] of entries.entries()) {
    assert.deepEqual(Object.keys(entry).sort(), keys, entry.slug);
    for (const key of keys.filter((key) => key !== 'rooms')) assert.equal(typeof entry[key], 'string', `${entry.slug}: ${key}`);
    assert.equal(entry.slug, `classical-${selections[index].key}`);
    assert.equal(entry.image, `/paintings/classical/${entry.slug}.jpg`);
    assert.equal(entry.excerpt, selections[index].excerpt);
    assert.equal(entry.mood, selections[index].mood);
    assert.deepEqual(entry.rooms, selections[index].rooms);
    assert.equal(entry.collection, 'classical');
    assert.equal(entry.license, 'CC0 1.0 Universal');
    assert(moods.has(entry.mood));
    assert(entry.rooms.length && entry.rooms.every((room) => rooms.has(room)));
    assert.equal(new Set(entry.rooms).size, entry.rooms.length);
    assert.match(entry.sourceUrl, /^https:\/\/www\.clevelandart\.org\/art\/[\w.]+$/);
    assert.match(entry.imageCredit, /The Cleveland Museum of Art/);
    assert(!normalizedOldTitles.has(normalize(entry.title)), `Existing title: ${entry.title}`);
    const words = entry.excerpt.trim().split(/\s+/).length;
    counts.push(words);
    assert(words >= 50 && words <= 100, `${entry.slug}: ${words} words`);
    assert.match(entry.excerpt, /\b(I|my|me)\b/);
    const buffer = await readFile(path.join(root, 'public', entry.image));
    const metadata = await sharp(buffer).metadata();
    assert.equal(metadata.format, 'jpeg');
    assert.equal(Math.max(metadata.width, metadata.height), 1200);
    assert(buffer.length > 15000, `Suspiciously small image: ${entry.slug}`);
    hashes.add(digest(buffer));
    const pixels = await sharp(buffer).removeAlpha().raw().toBuffer();
    pixelHashes.add(digest(pixels));
    const thumb = await sharp(buffer).resize(32, 32, { fit: 'fill' }).greyscale().raw().toBuffer();
    thumbnails.push(thumb);
    bytes += buffer.length;
  }
  for (const field of ['slug', 'title', 'image', 'excerpt', 'sourceUrl']) {
    assert.equal(new Set(entries.map((entry) => normalize(entry[field]))).size, 50, `Duplicate ${field}`);
  }
  assert.equal(hashes.size, 50, 'Repeated file content');
  assert.equal(pixelHashes.size, 50, 'Repeated decoded image content');
  // Catch identical compositions even if a source was recompressed or resized.
  let closest = { difference: Infinity };
  for (let a = 0; a < thumbnails.length; a++) {
    for (let b = a + 1; b < thumbnails.length; b++) {
      const difference = thumbnails[a].reduce((sum, value, i) => sum + Math.abs(value - thumbnails[b][i]), 0) / thumbnails[a].length;
      if (difference < closest.difference) closest = { difference, a: entries[a].slug, b: entries[b].slug };
      assert(difference > 3, `Possible repeated composition: ${entries[a].slug}, ${entries[b].slug}`);
    }
  }
  const jpgs = (await readdir(assetDir)).filter((file) => /\.jpe?g$/i.test(file));
  assert.deepEqual(jpgs.sort(), entries.map((entry) => path.basename(entry.image)).sort(), 'Unreferenced or missing JPEG');
  console.log(JSON.stringify({
    entries: entries.length, existingTitlesChecked: oldTitles.length,
    uniqueSlugs: 50, uniqueTitles: 50, uniqueMuseumRecords: 50,
    uniqueFileHashes: hashes.size, uniqueDecodedImageHashes: pixelHashes.size,
    localJpegs: jpgs.length, longestEdge: 1200,
    excerptWords: { min: Math.min(...counts), max: Math.max(...counts) },
    sins: entries.filter((entry) => entry.rooms.includes('sins')).map((entry) => entry.title),
    totalBytes: bytes, closestThumbnailPair: closest,
  }, null, 2));
}

async function download() {
  // Verify the intended parents before generating data or downloading assets.
  for (const parent of ['app/lib', 'public/paintings']) assert((await stat(path.join(root, parent))).isDirectory());
  await mkdir(path.dirname(dataPath), { recursive: true });
  await mkdir(assetDir, { recursive: true });
  const entries = [];
  const sourceHashes = new Set();
  for (let start = 0; start < selections.length; start += 3) {
    const batch = await Promise.all(selections.slice(start, start + 3).map(async (selection) => {
      const { data: artwork } = await (await request(`${api}${selection.id}`)).json();
      assert.equal(artwork.id, selection.id);
      assert.equal(artwork.share_license_status, 'CC0');
      assert.equal(artwork.type, 'Painting');
      assert(artwork.creation_date_latest < 1930, artwork.title);
      assert(!/India|Norse/i.test(artwork.culture.join(' ')), artwork.title);
      const artist = artwork.creators.filter((creator) => creator.role === 'artist').map((creator) => {
        const name = creator.description.replace(/\s*\([^)]*\)\s*$/, '').trim();
        return creator.qualifier ? `${creator.qualifier[0].toUpperCase()}${creator.qualifier.slice(1)} ${name}` : name;
      }).join('; ');
      assert(artist, artwork.title);
      const slug = `classical-${selection.key}`;
      const imageUrl = artwork.images.print.url;
      assert.equal(new URL(imageUrl).hostname, 'openaccess-cdn.clevelandart.org');
      const response = await request(imageUrl);
      assert.match(response.headers.get('content-type'), /^image\//);
      const original = Buffer.from(await response.arrayBuffer());
      const hash = digest(original);
      assert(!sourceHashes.has(hash), `Duplicate source download: ${artwork.title}`);
      sourceHashes.add(hash);
      const metadata = await sharp(original).metadata();
      assert(Math.max(metadata.width, metadata.height) >= 1200, 'Do not upscale source images');
      await sharp(original).rotate().resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 88, mozjpeg: true }).toFile(path.join(assetDir, `${slug}.jpg`));
      const entry = {
        slug, title: artwork.title.replace(/\s+/g, ' ').trim(), artist,
        year: artwork.creation_date, image: `/paintings/classical/${slug}.jpg`,
        excerpt: selection.excerpt, mood: selection.mood, collection: 'classical', rooms: selection.rooms,
        sourceUrl: `https://www.clevelandart.org/art/${artwork.accession_number}`,
        imageCredit: `${artist}; The Cleveland Museum of Art, ${artwork.creditline}, ${artwork.accession_number}. ${artwork.image_credit ? `${artwork.image_credit}. ` : ''}Open Access image; resized from the museum's digital image.`,
        license: 'CC0 1.0 Universal',
      };
      console.log(`Downloaded ${selection.id}: ${entry.title} (${original.length} source bytes; SHA-256 ${hash})`);
      return entry;
    }));
    entries.push(...batch);
  }
  assert.equal(sourceHashes.size, 50);
  await writeFile(dataPath, asciiJson(entries));
  await verify();
}

async function verifySources() {
  const entries = JSON.parse(await readFile(dataPath, 'utf8'));
  for (let start = 0; start < entries.length; start += 3) {
    await Promise.all(entries.slice(start, start + 3).map(async (entry, offset) => {
      const selection = selections[start + offset];
      const { data } = await (await request(`${api}${selection.id}`)).json();
      assert.equal(data.share_license_status, 'CC0');
      assert.equal(entry.title, data.title.replace(/\s+/g, ' ').trim());
      assert.equal(entry.year, data.creation_date);
      assert.equal(entry.sourceUrl, `https://www.clevelandart.org/art/${data.accession_number}`);
      assert(entry.imageCredit.includes(data.creditline));
      const page = await request(entry.sourceUrl);
      assert.match(page.headers.get('content-type'), /text\/html/);
      await page.body.cancel();
      const source = Buffer.from(await (await request(data.images.print.url)).arrayBuffer());
      const expected = await sharp(source).rotate().resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 88, mozjpeg: true }).toBuffer();
      const actual = await readFile(path.join(root, 'public', entry.image));
      assert.equal(digest(actual), digest(expected), `Local image does not match museum image: ${entry.slug}`);
      console.log(`Source page, CC0 metadata, and image bytes verified: ${entry.slug}`);
    }));
  }
  console.log('All 50 live museum pages and source-to-local image transformations verified.');
}

const mode = process.argv[2];
if (mode === '--verify') await verify();
else if (mode === '--verify-sources') { await verify(); await verifySources(); }
else if (mode === undefined) await download();
else throw new Error('Usage: node scripts/import-classical.mjs [--verify|--verify-sources]');

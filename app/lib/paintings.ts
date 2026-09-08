export type Mood = "dread" | "chaos" | "melancholy" | "isolation" | "longing" | "madness";

export type Painting = {
  slug: string;
  title: string;
  artist: string;
  year: string;
  image: string;
  excerpt: string;
  mood: Mood;
  collection?: "norse" | "indian" | "classical";
  rooms?: Array<"sins" | "death" | "war" | "longing" | "solitude" | "nightmares" | "divine" | "dreams">;
  sourceUrl?: string;
  imageCredit?: string;
  license?: string;
  fullConfession?: string[];
  details?: {
    medium?: string;
    location?: string;
    description?: string;
  };
};

export const paintings: Painting[] = [
  {
  slug: "lucifer-franz-von-stuck",
  rooms: ["sins", "solitude", "divine"],
  title: "Lucifer",
  artist: "Franz von Stuck",
  year: "1890",
  image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/lucifer",
  mood: "dread",
  excerpt: `You came looking for darkness.

I was already looking at you.

You expected horns. Fire. A monster waiting somewhere beneath the world.

How disappointing.

Darkness has never needed any of those things.

I have sat here longer than you know, beneath a sky that refuses to brighten, watching generation after generation arrive with the same questions. They ask whether I am evil. They ask whether I am lonely. They ask whether I am waiting for someone.

You ask the wrong questions.

Look at my eyes.

You are the one who came here.

You crossed the distance between us. You entered the room. You stood before me and searched my face for something you were afraid to find.

And now you wonder why I am looking back.

Perhaps you wanted to see the Devil.

Perhaps you only wanted to see the part of yourself you keep hidden in daylight.

Stay a little longer.

The darkness is not going anywhere.

Neither am I.`,
},
  {
  slug: "the-fallen-angel-alexandre-cabanel",
  rooms: ["sins", "longing", "solitude", "divine"],
  title: "The Fallen Angel",
  artist: "Alexandre Cabanel",
  year: "1847",
  image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-fallen-angel-alexandre-cabanel",
  mood: "melancholy",
  excerpt: `Do not look at me as though I am broken.

I remember what I was.

I remember the light.

I remember the warmth of Heaven before Heaven decided I no longer belonged to it.

I remember the sound of wings moving through a place where nothing had ever fallen.

I remember looking upward and believing that eternity was mine.

Then I fell.

And when I reached the bottom, I learned something Heaven never taught me.

The light does not forgive.

It only forgets.

They called me proud.

They called me rebellious.

They called me a sinner.

They needed those words.

People always need a name for the thing they fear.

So they gave me one.

Fallen.

As though falling made me lesser.

As though the distance between Heaven and Hell could erase what I once was.

But look at me.

I am still here.

And that is what frightened them.

They expected the fall to destroy me.

It didn't.

It changed me.

There is a difference.

I stopped asking Heaven to take me back.

I stopped praying.

I stopped begging.

And somewhere in that silence, something colder than hatred began to grow.

Memory.

I remember every voice that condemned me.

Every eye that looked down upon me.

Every creature that praised the heavens for casting me away.

You think vengeance is rage.

It isn't.

Rage burns quickly.

Vengeance waits.

So I waited.

While centuries passed.

While kingdoms rose and disappeared.

While men built temples beneath the names of those who cast me down.

I watched.

I learned.

And I discovered something beautiful.

Heaven does not have to fall for you to lose it.

Sometimes all it takes is for you to become what you once feared.

So look at me carefully.

Do not pity me.

Pity is another insult.

I am not asking for forgiveness.

I am not asking to return.

I have no desire to stand beneath those golden gates again.

I have seen what lies beyond them.

And I would rather rule the darkness than kneel before the light.

You call me fallen.

Perhaps.

But remember this.

Something that has already fallen has nothing left to fear from the ground.

And one day...

when you finally look upward and find the heavens silent...

you may wonder why.

When your prayers disappear into the darkness...

when the light you trusted refuses to answer...

when you finally understand what it means to be abandoned...

remember me.

I remember what Heaven did.

And I have had an eternity to remember.`,
},
  {
    slug: "the-witches-sabbath-francisco-goya",
    rooms: ["sins", "death", "nightmares"],
    title: "The Witches' Sabbath",
    artist: "Francisco Goya",
    year: "1798",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-witches-sabbath-francisco-goya",
    mood: "chaos",
    excerpt: `You gathered to watch us because you needed something to fear.

That is the truth nobody says aloud.

Fear is easier than uncertainty.

A monster gives you an enemy.

An enemy gives you a reason.

So you called it witchcraft.

You called it evil.

You called it anything except what it actually was.

People, gathering in the dark, because the world in daylight had already failed them.

You did not fear us because we were dangerous.

You feared us because you could not control us.

And control, more than anything, is what you have always worshipped.`,
  },
  {
    slug: "witches-flight-francisco-goya",
    rooms: ["sins", "war", "nightmares", "dreams"],
    title: "Witches' Flight",
    artist: "Francisco Goya",
    year: "1798",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/witches-flight-francisco-goya",
    mood: "chaos",
    excerpt: `They said we flew because we made a pact with darkness.

Perhaps we simply wanted to rise above a world that kept us on our knees.

You call it superstition now.

Comfortable, isn't it, to laugh at old fears from a distance.

But look closer.

You still burn people for being different.

You have only changed the fire.

We were never monsters.

We were women who refused to stay small.

And smallness was the only shape you would forgive us for.`,
  },
  {
    slug: "the-isle-of-the-dead-arnold-bocklin",
    rooms: ["death", "solitude", "dreams"],
    title: "The Isle of the Dead",
    artist: "Arnold Böcklin",
    year: "1880",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-isle-of-the-dead-arnold-bocklin",
    mood: "melancholy",
    excerpt: `You have arrived somewhere you were never supposed to return from.

The water is still.

The cypress trees do not move.

Even the light here has stopped trying.

You brought someone with you.

You always do.

Everyone who arrives is carrying something they could not keep.

There is no dock on the other side.

No path leading back.

Only silence, waiting patiently, the way silence always has.

Do not be afraid.

This is not an ending.

It is simply the place where endings are allowed to rest.`,
  },
  {
    slug: "the-great-he-goat-francisco-goya",
    rooms: ["nightmares"],
    title: "The Great He-Goat",
    artist: "Francisco Goya",
    year: "1821-1823",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-great-he-goat-francisco-goya",
    mood: "dread",
    excerpt: `Look how easily you gathered.

Look how quickly you knelt.

You call me a monster, and perhaps I am.

But I did not build this circle.

You did.

Every crowd searches for something larger than itself to answer to.

A god.

A leader.

A fear given a face.

I simply happened to be standing where you needed someone to worship.

You think devotion is holy.

Sometimes it is only obedience wearing a kinder name.`,
  },
  {
    slug: "the-sin-franz-von-stuck",
    rooms: ["sins", "longing", "dreams"],
    title: "The Sin",
    artist: "Franz von Stuck",
    year: "1893",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-sin-franz-von-stuck",
    mood: "dread",
    excerpt: `You call me sin because you cannot call me desire without also admitting you feel it.

That is easier, isn't it.

Blame the serpent.

Blame the darkness.

Blame anything except the wanting itself.

I did not create temptation.

I am only what temptation looks like when it finally stops hiding.

You keep staring.

You keep telling yourself it is disgust.

But disgust does not usually hold your attention this long.`,
  },
  {
    slug: "the-magic-circle-john-william-waterhouse",
    rooms: ["dreams"],
    title: "The Magic Circle",
    artist: "John William Waterhouse",
    year: "1886",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-magic-circle-john-william-waterhouse",
    mood: "chaos",
    excerpt: `Every spell begins with someone believing.

Not in magic.

In themselves.

I draw this circle not to keep the world out, but to remind myself that some spaces still belong entirely to me.

You call it witchcraft.

I call it the oldest kind of power there is.

The power of a woman standing alone, needing no one's permission to summon what she wants.

Step outside the circle if you like.

Just know that everything you fear about me is really something you fear about yourself.`,
  },
  {
    slug: "la-belle-dame-sans-merci-john-william-waterhouse",
    rooms: ["longing", "dreams"],
    title: "La Belle Dame Sans Merci",
    artist: "John William Waterhouse",
    year: "1893",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/la-belle-dame-sans-merci-john-william-waterhouse",
    mood: "longing",
    excerpt: `You knew.

Somewhere beneath the wanting, you knew.

But knowing has never stopped anyone from following beauty into danger.

You told yourself it was love.

It was easier than admitting it was hunger.

I did not lie to you.

I simply let you believe what you wanted to believe, because that is what desire always does.

It fills in the parts of the story that don't make sense.

You followed anyway.

Some people need to be ruined once to understand what they were chasing.`,
  },
  {
    slug: "the-awakening-conscience-william-holman-hunt",
    rooms: ["sins", "longing"],
    title: "The Awakening Conscience",
    artist: "William Holman Hunt",
    year: "1853",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-awakening-conscience-william-holman-hunt",
    mood: "madness",
    excerpt: `Something shifted.

A note. A memory. A feeling too honest to ignore.

You built a life around not looking too closely at yourself.

It worked, until it didn't.

Guilt is strange that way.

It waits patiently in rooms you have decorated to distract from it.

Then, one ordinary afternoon, it simply stands up inside you.

You call this an awakening.

Perhaps it is.

Perhaps the only real freedom is the moment you finally stop pretending you don't know what you know.`,
  },
  {
    slug: "the-hireling-shepherd-william-holman-hunt",
    rooms: ["sins", "longing"],
    title: "The Hireling Shepherd",
    artist: "William Holman Hunt",
    year: "1851",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-hireling-shepherd-william-holman-hunt",
    mood: "dread",
    excerpt: `While I was distracted, the flock wandered.

That is the quiet horror of neglect.

It rarely announces itself.

It looks like charm.

Like a pretty afternoon.

Like something more interesting happening just out of frame.

Nobody remembers the moment they stopped paying attention.

They only remember what was lost by the time they looked back.

You think cruelty is the dangerous one.

Cruelty at least warns you.

Neglect just smiles and lets everything fall apart quietly.`,
  },
  {
    slug: "the-vampire-edvard-munch",
    rooms: ["longing", "dreams"],
    title: "The Vampire",
    artist: "Edvard Munch",
    year: "1895",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-vampire-edvard-munch",
    mood: "longing",
    excerpt: `You called it love.

I called it hunger.

Perhaps we were both right.

Some embraces hold you.

Some hold you down.

You leaned into me because you mistook intensity for intimacy.

By the time you understood the difference, you had already given me more than you meant to.

That is how it always happens.

Nobody offers themselves to a vampire.

They offer themselves to what they believed love was supposed to feel like.`,
  },
  {
    slug: "vampire-philip-burne-jones",
    rooms: ["sins", "longing", "nightmares"],
    title: "Vampire",
    artist: "Philip Burne-Jones",
    year: "1897",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/vampire-philip-burne-jones",
    mood: "longing",
    excerpt: `Some kisses leave you emptier than before.

You came looking for tenderness.

I gave you something that only resembled it.

That is the danger of desire.

It cannot always tell the difference between being wanted and being consumed.

You will wake tomorrow and feel the absence before you understand it.

Something taken quietly, in the dark, while you mistook surrender for closeness.

Do not blame yourself.

We have all confused hunger for love at least once.`,
  },
  {
    slug: "the-kiss-of-the-sphinx-franz-von-stuck",
    rooms: ["longing", "nightmares", "divine"],
    title: "The Kiss of the Sphinx",
    artist: "Franz von Stuck",
    year: "1895",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-kiss-of-the-sphinx-franz-von-stuck",
    mood: "longing",
    excerpt: `Some questions have teeth.

You came seeking an answer, and I offered you a kiss instead.

That is how the dangerous ones operate.

They do not attack you directly.

They get close enough that you forget to ask what they actually want.

You will call this seduction.

I call it a test.

Most people fail not because they are foolish, but because they mistake closeness for safety.

Come closer.

Let's see what you actually understand about yourself.`,
  },
  {
    slug: "nighthawks-edward-hopper",
    rooms: ["solitude"],
    title: "Nighthawks",
    artist: "Edward Hopper",
    year: "1942",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/nighthawks-edward-hopper",
   mood: "isolation",
   excerpt: `We are all sitting together, and none of us are together.

The city outside is empty, but this room is not much fuller.

Everyone here came in from somewhere quieter, somewhere they could not stay.

The light keeps us visible.

It does not make us any less alone.

You look through the glass and see company.

Look closer, and you'll see four people carefully avoiding each other's eyes.

That is loneliness at its most honest.

Not an empty room.

A full one, where nobody speaks.`,
  },
  {
    slug: "the-entombment-of-christ-caravaggio",
    rooms: ["death", "longing", "divine"],
    title: "The Entombment of Christ",
    artist: "Caravaggio",
    year: "1603-1604",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-entombment-of-christ-caravaggio",
    mood: "melancholy",
    excerpt: `Even faith must eventually touch death.

You believed in something larger than the body, and still the body had to be carried.

Still the stone had to be rolled.

Still the hands had to do the terrible, ordinary work of laying someone down.

Belief does not exempt you from grief.

It only gives grief somewhere to stand while it waits.

We carried him gently, because gentleness was the only thing still within our power.

Everything else had already been decided.`,
  },
  {
    slug: "the-descent-from-the-cross-peter-paul-rubens",
    rooms: ["death", "longing", "divine"],
    title: "The Descent from the Cross",
    artist: "Peter Paul Rubens",
    year: "1612-1614",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-descent-from-the-cross-peter-paul-rubens",
    mood: "longing",
    excerpt: `There is no graceful way to carry the dead.

You try to be careful.

You try to hold on to the last shred of dignity the moment allows.

But grief has no elegant posture.

It is arms straining. It is weight nobody wants to feel. It is love, doing the heaviest thing love is ever asked to do.

We lowered him slowly, not because slowness helped him, but because it was the only mercy left for us.`,
  },
  {
    slug: "the-descent-from-the-cross-rembrandt",
    rooms: ["death", "longing", "divine"],
    title: "The Descent from the Cross",
    artist: "Rembrandt",
    year: "1634",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-descent-from-the-cross-rembrandt",
    mood: "melancholy",
    excerpt: `The darkness is not outside.

It is inside the room.

You think grief needs a dramatic stage, torn skies, thunder, spectacle.

It doesn't.

Sometimes it happens quietly, in a small circle of candlelight, while a handful of people do what needs to be done without ceremony.

That is the part nobody prepares you for.

How ordinary devastation can look from the inside.

How much like any other evening, except for the absence sitting in the center of it.`,
  },
  {
    slug: "the-nightmare-henry-fuseli",
    rooms: ["nightmares", "dreams"],
    title: "The Nightmare",
    artist: "Henry Fuseli",
    year: "1781",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-nightmare-henry-fuseli",
    mood: "madness",
    excerpt: `You call it a dream because you are afraid to call it real.

That is easier, isn't it.

Something sitting on your chest at night is only frightening if you admit you felt its weight.

So you wake up and tell yourself it was nothing.

But your body remembers what your mind refuses to.

The pressure. The stillness. The certainty that something was there, watching, waiting for you to notice it noticing you.

Sleep is not always safety.

Sometimes it's simply the place where your fears finally get to speak.`,
  },
  {
    slug: "pandemonium-john-martin",
    rooms: ["sins", "war", "divine", "dreams"],
    title: "Pandemonium",
    artist: "John Martin",
    year: "1841",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/pandemonium-john-martin",
    mood: "dread",
    excerpt: `Hell does not need fire when chaos is enough.

You imagined punishment as flame, as torment, as something done to you.

Look closer.

Sometimes hell is simply the absence of order.

Everyone shouting. Nobody listening. Every structure that once gave you meaning, collapsed into noise.

We built this place the same way you build every ruin.

Ambition first.

Consequence after.

By the time the pillars fell, it was already too late to ask who was in charge.`,
  },
  {
    slug: "the-great-day-of-his-wrath-john-martin",
    rooms: ["death", "nightmares", "divine", "dreams"],
    title: "The Great Day of His Wrath",
    artist: "John Martin",
    year: "1851-1853",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-great-day-of-his-wrath-john-martin",
    mood: "isolation",
    excerpt: `When the world ends, no one will be important.

You spent your life building status, comparing yourself to everyone around you, certain that your position mattered.

Watch the sky fall.

Watch the mountains crack open.

None of it asks who you were before this moment.

Endings are the great equalizer.

They do not care about your reputation.

They only care that you, like everyone else standing here, are finally out of time to pretend otherwise.`,
  },
  {
    slug: "the-plains-of-heaven-john-martin",
    rooms: ["divine", "dreams"],
    title: "The Plains of Heaven",
    artist: "John Martin",
    year: "1851-1853",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-plains-of-heaven-john-martin",
    mood: "melancholy",
    excerpt: `Even paradise can feel strangely empty.

You spent your whole life imagining this place, certain that arriving here would finally be enough.

Look around.

The light is soft. The rivers are calm. And still, something in you keeps searching for a reason to stay interested.

Perhaps peace was never the absence of longing.

Perhaps even here, some part of you will always be looking for the next horizon.

That is not a flaw.

That is simply what it means to have wanted something for so long that you forgot how to stop.`,
  },
  {
    slug: "the-temptation-of-st-anthony-hieronymus-bosch",
    rooms: ["sins", "nightmares", "divine", "dreams"],
    title: "The Temptation of St. Anthony",
    artist: "Hieronymus Bosch",
    year: "1501",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-temptation-of-st-anthony-hieronymus-bosch",
    mood: "longing",
    excerpt: `The worst monsters are the ones that know exactly what you want.

They do not need claws.

They only need to understand your weaknesses better than you do.

I surrounded you with every version of your own desire, dressed differently, disguised cleverly, and still you recognized none of them.

That is how temptation survives.

It never looks like what you were warned about.

It looks like something you didn't know you still wanted.`,
  },
  {
    slug: "the-temptation-of-st-anthony-matthias-grunewald",
    rooms: ["war", "nightmares", "divine"],
    title: "The Temptation of St. Anthony",
    artist: "Matthias Grünewald",
    year: "1512-1516",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-temptation-of-st-anthony-matthias-grunewald",
    mood: "dread",
    excerpt: `Faith becomes frightening when doubt grows teeth.

You believed you were strong enough to withstand anything, until the anything arrived wearing a hundred different faces at once.

This is not about monsters.

This is about the moment your certainty finally cracks and something ugly crawls through it.

Every belief is tested eventually.

Not by the world doubting you.

By you, alone in the dark, wondering if you ever really believed at all.`,
  },
  {
    slug: "the-death-of-marat-jacques-louis-david",
    rooms: ["sins", "death", "war"],
    title: "The Death of Marat",
    artist: "Jacques-Louis David",
    year: "1793",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-death-of-marat-jacques-louis-david",
    mood: "melancholy",
    excerpt: `Some people become immortal only after they die.

While I was alive, I was simply a man in a bathtub, exhausted, trying to keep working through the only comfort my illness allowed.

Then a single moment ended everything, and suddenly I became a symbol.

Funny, isn't it.

How little control we have over what we're remembered for.

I did not choose this stillness.

History chose it for me, and framed it as peace.`,
  },
  {
    slug: "the-death-of-socrates-jacques-louis-david",
    rooms: ["death"],
    title: "The Death of Socrates",
    artist: "Jacques-Louis David",
    year: "1787",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-death-of-socrates-jacques-louis-david",
    mood: "melancholy",
    excerpt: `Sometimes the price of truth is everything.

I could have recanted. I could have said what they wanted to hear and kept my life.

Instead I raised the cup myself.

Not out of despair.

Out of certainty.

Some things matter more than survival, though the world rarely agrees until long after you're gone.

You will call this wisdom now.

At the time, it simply looked like a man calmly choosing his convictions over his fear.`,
  },
  {
    slug: "the-death-of-seneca-peter-paul-rubens",
    rooms: ["death"],
    title: "The Death of Seneca",
    artist: "Peter Paul Rubens",
    year: "1614",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-death-of-seneca-peter-paul-rubens",
    mood: "melancholy",
    excerpt: `Even the wise cannot negotiate with death.

I spent my life writing about acceptance, about calm in the face of the inevitable, and still my body resisted when the moment finally came.

Philosophy prepares the mind.

It does not always prepare the flesh.

I wanted my ending to look as composed as my writing.

Dying, it turns out, is rarely as elegant as the essays written about it.`,
  },
  {
    slug: "the-raft-of-the-medusa-theodore-gericault",
    rooms: ["death", "solitude"],
    title: "The Raft of the Medusa",
    artist: "Théodore Géricault",
    year: "1818-1819",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-raft-of-the-medusa-theodore-gericault",
   mood: "dread",
   excerpt: `Desperation reveals what people become when hope disappears.

We were not monsters when we boarded this raft.

We were simply people, same as you, certain that civility would hold under any circumstance.

It didn't.

Hunger has no patience for kindness.

Thirst does not care about your principles.

You like to believe you would behave differently.

Most people do, right up until the moment the water runs out.`,
  },
  {
    slug: "the-skeletons-fighting-over-a-hanged-man-james-ensor",
    rooms: ["sins", "death", "war", "nightmares", "dreams"],
    title: "The Skeletons Fighting Over a Hanged Man",
    artist: "James Ensor",
    year: "1891",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-skeletons-fighting-over-a-hanged-man-james-ensor",
    mood: "melancholy",
    excerpt: `Even death can become ridiculous when humans are involved.

You'd think the grave would finally end our pettiness.

It doesn't.

We fight over scraps that mean nothing now, out of habit more than hunger.

That is the joke nobody tells you about mortality.

It does not automatically make you wise.

Some people carry their smallness all the way to the bone.`,
  },
  {
    slug: "the-skeletons-warming-themselves-james-ensor",
    rooms: ["death", "dreams"],
    title: "The Skeletons Warming Themselves",
    artist: "James Ensor",
    year: "1889",
    image:"https://res.cloudinary.com/daldbatl/image/f_auto,q_auto/the-skeletons-warming-themselves-james-ensor",
    mood: "chaos",
    excerpt: `Perhaps death is only waiting for the living to catch up.

We sit here without urgency, without complaint, warming ourselves at a fire that no longer needs to keep us alive.

You fear this stillness.

We find it almost peaceful.

All the things that used to matter, status, beauty, hurry, have quietly burned away.

What's left is simple.

Just bones, and a small fire, and the patience of something that already knows how the story ends.`,
  },
  {
    slug: "the-body-of-the-dead-christ-in-the-tomb-hans-holbein-the-younger",
    rooms: ["death", "divine"],
    title: "The Body of the Dead Christ in the Tomb",
    artist: "Hans Holbein the Younger",
    year: "1521-1522",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-body-of-the-dead-christ-in-the-tomb-hans-holbein-the-younger",
    mood: "melancholy",
    excerpt: `Death is terrifying when nothing about it is softened.

You are used to seeing it wrapped in meaning, in resurrection, in promise.

Look at me honestly instead.

This is what the body actually does.

It stiffens. It hollows. It stops pretending to be anything more than matter.

I am not asking you to find comfort here.

I am asking you to stop looking away from what waits for all of you eventually.`,
  },
  {
    slug: "the-last-judgment-michelangelo",
    rooms: ["sins", "death", "divine"],
    title: "The Last Judgment",
    artist: "Michelangelo",
    year: "1536-1541",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-last-judgment-michelangelo",
    mood: "melancholy",
    excerpt: `Every soul eventually faces itself.

Not a stranger's judgment.

Your own.

You spent your life building a version of yourself for other people to see.

Here, none of that matters.

Here, you stand exactly as you are, no performance left to hide behind.

Some rise. Some fall.

But every single one of them, in this final moment, finally sees themselves without the costume.`,
  },
  {
    slug: "the-last-judgment-hans-memling",
    rooms: ["sins", "death", "divine"],
    title: "The Last Judgment",
    artist: "Hans Memling",
    year: "1467-1471",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-last-judgment-hans-memling",
    mood: "dread",
    excerpt: `There is nowhere to hide when eternity is watching.

You spent your life negotiating, excusing, explaining yourself to everyone except the one witness who saw everything clearly.

Now the scale is raised, and no clever argument will change its balance.

This is not about punishment.

This is about honesty, finally, after a lifetime of convenient forgetting.`,
  },
  {
    slug: "the-dance-of-death-michael-wolgemut",
    rooms: ["death", "dreams"],
    title: "The Dance of Death",
    artist: "Michael Wolgemut",
    year: "1493",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-dance-of-death-michael-wolgemut",
    mood: "melancholy",
    excerpt: `The grave makes equals of everyone.

Kings, beggars, the beautiful, the forgotten, we all take the same hand eventually and step into the same dance.

You spend your life dividing people into categories that feel so permanent.

Watch how quickly they dissolve here.

Death does not check titles.

It only checks whether you are still breathing, and then, gently, invites you to join the line.`,
  },
  {
    slug: "the-funeral-edvard-munch",
    rooms: ["death", "longing"],
    title: "The Funeral",
    artist: "Edvard Munch",
    year: "1885",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-funeral-edvard-munch",
    mood: "melancholy",
    excerpt: `The room is full, yet death has made it empty.

Everyone gathered close, and still the space feels hollow, because the one person the room was built around is no longer in it.

You think grief needs silence.

Sometimes it needs a crowd, just so the absence has something to stand against.

We are all here together, orbiting a space that used to hold someone, unable to fill it no matter how close we stand.`,
  },
  {
    slug: "death-and-the-maiden-hans-baldung",
    rooms: ["death", "nightmares", "dreams"],
    title: "Death and the Maiden",
    artist: "Hans Baldung",
    year: "1517",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/death-and-the-maiden-hans-baldung",
    mood: "melancholy",
    excerpt: `Beauty and death have always walked together.

You think I arrived to take something from her.

Perhaps I simply arrived to remind her that beauty was never meant to be permanent.

She holds herself the way people hold things they are afraid to lose.

I understand.

Everyone resists me at first.

Then, eventually, they realize I was never the enemy.

I was only ever the truth beauty tries so hard to forget.`,
  },
  {
    slug: "judith-beheading-holofernes-caravaggio",
    rooms: ["death", "war", "divine"],
    title: "Judith Beheading Holofernes",
    artist: "Caravaggio",
    year: "1599",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/judith-beheading-holofernes-caravaggio",
    mood: "chaos",
    excerpt: `You mistook her mercy for weakness.

That was your first mistake.

You assumed gentleness meant surrender, that softness could not also hold a blade.

She did not hesitate because hesitation was never her nature.

She hesitated because the act deserved to be felt fully, not rushed.

You underestimated her.

Most men do, right up until the exact moment it no longer matters.`,
  },
  {
    slug: "judith-slaying-holofernes-artemisia-gentileschi",
    rooms: ["death", "war", "divine"],
    title: "Judith Slaying Holofernes",
    artist: "Artemisia Gentileschi",
    year: "1620",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/judith-slaying-holofernes-artemisia-gentileschi",
    mood: "longing",
    excerpt: `Some wounds are answered with another wound.

You want this to be about anger.

It is about something older than anger.

It is about a woman finally deciding that her survival was worth more than his comfort.

Her hands do not shake.

Not because she feels nothing, but because she has already decided that this moment will not be softened for anyone's ease, least of all his.`,
  },
  {
    slug: "david-with-the-head-of-goliath-caravaggio",
    rooms: ["death", "war", "divine"],
    title: "David with the Head of Goliath",
    artist: "Caravaggio",
    year: "1610",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/david-with-the-head-of-goliath-caravaggio",
    mood: "melancholy",
    excerpt: `The victor does not always look victorious.

Look at my face.

You expect triumph. You find something closer to grief.

Killing changes you, even when it was necessary, even when the whole world calls it heroic.

I carry his head, and somewhere in carrying it, I understand that I have also become someone I did not expect to be.

Victory is rarely as clean as the story that gets told about it.`,
  },
  {
    slug: "david-with-the-head-of-goliath-guido-reni",
    rooms: ["death", "war", "divine"],
    title: "David with the Head of Goliath",
    artist: "Guido Reni",
    year: "1605",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/david-with-the-head-of-goliath-guido-reni",
    mood: "dread",
    excerpt: `Power changes hands in a single moment.

One instant he was the threat everyone feared.

The next, I was standing here, holding proof that even the largest fears can be undone by someone small enough to be underestimated.

You admire the outcome.

I remember the fear that came before it, the trembling I hid so no one would see it, the moment I almost didn't throw the stone.`,
  },
  {
    slug: "salome-with-the-head-of-john-the-baptist-caravaggio",
    rooms: ["sins", "death", "war", "divine"],
    title: "Salome with the Head of John the Baptist",
    artist: "Caravaggio",
    year: "1609",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/salome-with-the-head-of-john-the-baptist-caravaggio",
    mood: "longing",
    excerpt: `Desire can ask for something you can never take back.

I did not fully understand what I was requesting.

I understood power, attention, the thrill of being granted anything I asked for.

I did not understand what it would feel like to actually receive it.

Now I hold the proof of my own wanting, and I am learning, too late, that some requests cannot be returned once they are granted.`,
  },
  {
    slug: "salome-with-the-head-of-john-the-baptist-titian",
    rooms: ["sins", "death", "war", "divine"],
    title: "Salome with the Head of John the Baptist",
    artist: "Titian",
    year: "1515",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/salome-with-the-head-of-john-the-baptist-titian",
   mood: "longing",
   excerpt: `Beauty can carry terrible intentions.

You look at my face and see innocence.

Look at what I'm holding instead.

Sometimes the most dangerous desires wear the gentlest expressions, because gentleness disarms suspicion faster than anger ever could.

I did not need to raise my voice.

I only needed to ask sweetly, and the world handed me exactly what I wanted.`,
  },
  {
    slug: "the-beheading-of-saint-john-the-baptist-caravaggio",
    rooms: ["sins", "death", "war", "divine"],
    title: "The Beheading of Saint John the Baptist",
    artist: "Caravaggio",
    year: "1608",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-beheading-of-saint-john-the-baptist-caravaggio",
   mood: "melancholy",
   excerpt: `Some endings happen quietly.

You expect death to announce itself, to shake the room, to demand attention.

This one didn't.

It happened in a corner, almost administratively, while the rest of the world continued as though nothing significant was occurring.

That is often how the worst things happen.

Not with spectacle.

With a quiet efficiency that makes the horror somehow worse.`,
  },
  {
    slug: "the-taking-of-christ-caravaggio",
    rooms: ["sins", "war", "divine"],
    title: "The Taking of Christ",
    artist: "Caravaggio",
    year: "1602",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-taking-of-christ-caravaggio",
    mood: "madness",
    excerpt: `Betrayal sometimes arrives wearing the face of friendship.

He did not attack me from a distance.

He came close enough to embrace me, close enough that I felt his breath before I understood his intention.

That is the particular cruelty of betrayal.

It requires closeness first.

You cannot be betrayed by a stranger.

Only by someone you allowed near enough to hurt you.`,
  },
  {
    slug: "the-martyrdom-of-saint-matthew-caravaggio",
    rooms: ["sins", "death", "war", "divine"],
    title: "The Martyrdom of Saint Matthew",
    artist: "Caravaggio",
    year: "1600",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-martyrdom-of-saint-matthew-caravaggio",
    mood: "chaos",
    excerpt: `Violence does not ask whether you are ready.

One moment I was speaking. The next, the room had turned into chaos, and I understood that some endings do not give you time to prepare a response.

You imagine you would be brave in this moment.

Most people simply become still, caught between disbelief and the sudden understanding that this is actually happening.`,
  },
  {
    slug: "the-massacre-at-chios-eugene-delacroix",
    rooms: ["sins", "death", "war", "longing"],
    title: "The Massacre at Chios",
    artist: "Eugène Delacroix",
    year: "1824",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-massacre-at-chios-eugene-delacroix",
    mood: "isolation",
    excerpt: `War does not create heroes for everyone.

For most of us, it only creates absence.

Empty homes. Empty arms. A field full of people who did nothing except exist in the wrong place at the wrong moment in history.

You will remember the battles, the generals, the outcomes recorded in books.

You will forget us, sitting here, waiting for a mercy that never arrived.`,
  },
  {
    slug: "the-execution-of-lady-jane-grey-paul-delaroche",
    rooms: ["sins", "death", "war"],
    title: "The Execution of Lady Jane Grey",
    artist: "Paul Delaroche",
    year: "1833",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-execution-of-lady-jane-grey-paul-delaroche",
    mood: "melancholy",
    excerpt: `Sometimes innocence still walks toward the blade.

I was given a crown I never asked for, and now I am paying for a decision that was never truly mine to make.

You think power always belongs to those who hold it.

Sometimes it only belongs to those who survive being handed it.

I did not survive.

I simply became a lesson about how dangerous other people's ambitions can be.`,
  },
  {
    slug: "the-third-of-may-1808-francisco-goya",
    rooms: ["sins", "death", "war"],
    title: "The Third of May 1808",
    artist: "Francisco Goya",
    year: "1814",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-third-of-may-1808-francisco-goya",
    mood: "melancholy",
    excerpt: `There is no glory in the moment before death.

You have seen paintings of battle that make war look majestic.

Look at me instead.

Arms raised, not in triumph, but in surrender, in the desperate hope that surrender might still mean something.

It didn't.

War does not care about the difference between a soldier and a man who simply wanted to go home.`,
  },
  {
    slug: "the-dog-francisco-goya",
    rooms: ["solitude"],
    title: "The Dog",
    artist: "Francisco Goya",
    year: "1819-1823",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-dog-francisco-goya",
   mood: "isolation",
   excerpt: `Sometimes loneliness is the only thing left in the world.

You look at this vast emptiness and wonder what I am waiting for.

I have stopped wondering.

There is no rescue coming, no voice calling me back, only this enormous, indifferent space and whatever small part of me still refuses to stop looking upward.

Perhaps that is the most honest image of loneliness there is.

Not the absence of others.

The absence of any reason to expect them.`,
  },
  {
    slug: "the-madhouse-francisco-goya",
    rooms: ["solitude"],
    title: "The Madhouse",
    artist: "Francisco Goya",
    year: "1816",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-madhouse-francisco-goya",
   mood: "chaos",
   excerpt: `Perhaps madness is only another way of seeing the world.

You call this chaos.

We call it clarity, of a kind you were never taught to recognize.

Some of us laugh. Some of us scream. Some of us simply sit in silence, having understood something about existence that the sane world prefers not to look at directly.

You keep us here to protect yourselves.

Not from us.

From the questions we stopped pretending not to ask.`,
  },
  {
    slug: "the-colossus-francisco-goya",
    rooms: ["war", "nightmares", "dreams"],
    title: "The Colossus",
    artist: "Francisco Goya",
    year: "1808-1812",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-colossus-francisco-goya",
    mood: "dread",
    excerpt: `You look at me and try to understand what I am.

You search for a face.

A body.

A reason for something so enormous to exist.

But perhaps you are asking the wrong question.

I was never meant to be understood.

I am the feeling that arrives before understanding does.

The shadow that appears at the edge of your thoughts when you realize something is far larger than you.

You have felt me before.

Not as a giant.

As a problem you could not solve.

A future you could not predict.

A fear you could not name.

You stood beneath something enormous and wondered whether it had noticed you.

That is why I am here.

Not because I am a monster.

Because I am what your mind creates when the world becomes too large to hold.

You call it fear.

You call it uncertainty.

You call it fate.

I have many names.

But I remain the same.

Something enormous standing beyond you.

And you...

still looking up.`,
  },
  {
    slug: "the-scream-edvard-munch",
    rooms: ["solitude", "nightmares"],
    title: "The Scream",
    artist: "Edvard Munch",
    year: "1893",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-scream-edvard-munch",
    mood: "chaos",
    excerpt: `I screamed.

And the world kept moving.

That is the part nobody understands.

You think when something inside you breaks, the world should notice.

The sky should darken.

The streets should empty.

Someone should turn around and ask what happened.

But nothing happened.

People continued walking.

The river continued flowing.

The sky remained above me.

Everything continued exactly as it had before.

Except me.

Something had changed inside my chest, and suddenly the entire world sounded wrong.

The colours became too loud.

The air became too heavy.

My own thoughts became louder than everything around me.

So I screamed.

Not because I expected an answer.

Because there was nowhere else for the sound to go.

Perhaps that is the cruelest part of suffering.

You can be screaming inside yourself while the world walks peacefully past.

And nobody knows.

Nobody stops.

Nobody hears.

So if you recognize yourself in me...

I hope you understand something.

You are not weak because you screamed.

You are human because something became too heavy to keep silent.`,
  },
  {
    slug: "anxiety-edvard-munch",
    rooms: ["solitude", "nightmares"],
    title: "Anxiety",
    artist: "Edvard Munch",
    year: "1894",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/anxiety-edvard-munch",
    mood: "isolation",
    excerpt: `Look around you.

They are all here.

Faces beside faces.

Bodies beside bodies.

And still...

you are alone.

That is what anxiety does.

It does not always lock you inside an empty room.

Sometimes it puts you in the middle of everyone.

It makes you hear every voice while believing none of them are meant for you.

You watch people talk.

Laugh.

Move.

Live.

And somewhere inside you, a question keeps repeating.

What if something is wrong?

You don't know what.

You don't know why.

You only know that something is coming.

So you wait.

You prepare.

You imagine every possible disaster.

And when nothing happens...

you imagine the next one.

Perhaps that is why everyone here looks so distant.

Anxiety does not need an empty world.

It only needs to convince you that you don't belong in the one you're standing in.`,
  },
  {
    slug: "melancholy-edvard-munch",
    rooms: ["longing", "solitude"],
    title: "Melancholy",
    artist: "Edvard Munch",
    year: "1894-1896",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/melancholy-edvard-munch",
    mood: "longing",
    excerpt: `Nothing happened.

That is what makes it difficult to explain.

There was no great tragedy.

No sudden ending.

No single moment you can point toward and say,

There.

That is where everything went wrong.

Sometimes sadness simply arrives.

It sits beside you.

It does not introduce itself.

It does not ask permission.

Music still plays.

People still laugh.

The sun still crosses the room.

And yet something inside you has quietly moved away.

You wait for it to return.

Perhaps tomorrow.

Perhaps next week.

Perhaps when something changes.

But sometimes melancholy does not want to be solved.

It only wants to be felt.

So sit with it.

Let it exist.

Not every shadow is a wound.

Some are simply part of being human.`,
  },
  {
    slug: "evening-on-karl-johan-edvard-munch",
    rooms: ["solitude", "nightmares"],
    title: "Evening on Karl Johan",
    artist: "Edvard Munch",
    year: "1892",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/evening-on-karl-johan-edvard-munch",
    mood: "isolation",
    excerpt: `Look at the crowd.

So many faces.

So many people walking in the same direction.

And yet none of them seem to know each other.

They pass one another like ghosts.

Eyes forward.

Expressions empty.

Everyone moving.

Nobody arriving.

You think loneliness means being alone.

It doesn't.

Loneliness can be standing in the middle of a thousand people and realizing that not one of them knows what is happening inside you.

The city is full of voices.

That does not mean anyone is listening.

Perhaps that is why crowds frighten me.

They remind me how easy it is to disappear while being surrounded by everyone.

You can be seen by hundreds.

And still remain invisible.`,
  },
  {
    slug: "despair-edvard-munch",
    rooms: ["solitude"],
    title: "Despair",
    artist: "Edvard Munch",
    year: "1892",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/despair-edvard-munch",
    mood: "melancholy",
    excerpt: `Hope did not leave all at once.

It became quieter.

Day by day.

Until one morning you realized you could no longer hear it.

The world remained.

The sun rose.

People laughed.

Life continued performing its little rituals.

But none of it reached you.

That is despair.

Not sadness.

Not pain.

The absence of expectation.

You stop waiting for things to become better because waiting itself has become exhausting.

You stop imagining tomorrow.

You stop believing there is anything beyond the moment you are trapped inside.

And perhaps that is why I look away.

Not because there is nothing left in the world.

Because I cannot see it anymore.

Somewhere beyond this darkness, morning still exists.

I simply cannot reach it from here.`,
  },
  {
    slug: "the-sick-child-edvard-munch",
    rooms: ["death", "longing"],
    title: "The Sick Child",
    artist: "Edvard Munch",
    year: "1885-1886",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-sick-child-edvard-munch",
    mood: "isolation",
    excerpt: `Memory is cruel.

It does not remember things the way they happened.

It remembers the way they felt.

The room.

The silence.

The face beside the bed.

The helplessness.

The terrible knowledge that love cannot always save someone.

You look at this face and think you are seeing illness.

I see a memory that never finished dying.

Years can pass.

People can grow older.

Houses can disappear.

Yet some moments remain exactly where you left them.

Waiting.

You think time heals everything.

It doesn't.

Sometimes time simply teaches you how to carry what still hurts.

And sometimes the child in your memory never grows older.

They remain there.

Forever waiting for the ending you wished you could change.`,
  },
  {
    slug: "self-portrait-with-death-playing-the-fiddle-arnold-bocklin",
    rooms: ["death", "dreams"],
    title: "Self-Portrait with Death Playing the Fiddle",
    artist: "Arnold Böcklin",
    year: "1872",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/self-portrait-with-death-playing-the-fiddle-arnold-bocklin",
    mood: "melancholy",
    excerpt: `I know you're there.

You don't need to remind me.

You have been beside me for longer than I would like to admit.

Sometimes you stand behind me.

Sometimes you sit quietly at the edge of the room.

Sometimes I almost forget you exist.

Then you play a note.

Just one.

And I remember.

That is your instrument, isn't it?

A reminder.

Not a weapon.

You do not need to chase me.

I am already walking toward you.

We all are.

Perhaps that is why I painted you beside me.

Not because I wanted to frighten myself.

Because pretending you weren't there had become more frightening.

So stay.

Play your violin.

I will keep painting.

You will keep waiting.

And somewhere between your music and my brush, we will pretend neither of us knows how this story ends.`,
  },
  {
    slug: "the-painter-s-family-egon-schiele",
    rooms: ["longing", "solitude"],
    title: "The Painter's Family",
    artist: "Egon Schiele",
    year: "1918",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-painter-s-family-egon-schiele",
    mood: "madness",
    excerpt: `We are close enough to touch.

And yet there is a distance between us that no hand can cross.

People think intimacy means knowing someone completely.

It doesn't.

You can sleep beside someone for years and still wonder what happens inside their mind when they are alone.

You can know the sound of their voice. The shape of their hands. The way they look when they wake. And still never reach the place where they keep their deepest fears.

That is the strange loneliness of being human.

We spend our lives surrounded by people and remain, in some small way, unknowable.

Perhaps love is not the promise that someone will understand everything about you.

Perhaps it is simply the decision to stay, even when there are parts of each other you will never understand.`,
  },
  {
    slug: "self-portrait-with-physalis-egon-schiele",
    rooms: ["solitude"],
    title: "Self-Portrait with Physalis",
    artist: "Egon Schiele",
    year: "1912",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/self-portrait-with-physalis-egon-schiele",
    mood: "madness",
    excerpt: `You are looking at me.

I have spent years doing the same.

Studying the face.

Searching for the person beneath it.

But mirrors are dishonest things.

They show you the surface and allow you to believe you have seen yourself.

You haven't.

You change when nobody is watching. You become someone else when you are afraid. Someone else when you are loved. Someone else when you are alone.

So which one is you?

The person in the mirror?

The person everyone knows?

Or the person who exists only in the silence of your own mind?

I have painted myself because I wanted an answer.

The longer I looked, the stranger the question became.

Perhaps knowing yourself is not discovering one true face.

Perhaps it is accepting that you have always had several.`,
  },
  {
    slug: "death-and-the-maiden-egon-schiele",
    rooms: ["death", "longing", "dreams"],
    title: "Death and the Maiden",
    artist: "Egon Schiele",
    year: "1915",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/death-and-the-maiden-egon-schiele",
    mood: "melancholy",
    excerpt: `She holds me as though I am something she can save.

I let her.

That is the cruelty of death.

I never tell you how long I have been standing behind you.

I simply wait until you turn around.

She knows what I am.

That is why she holds tighter.

Perhaps you would do the same.

When something is leaving, you instinctively pull it closer.

As though love could become a rope.

As though enough tenderness could convince time to stop.

It cannot.

But I will give you this:

For one moment, before everything ends, you can hold what you love.

And perhaps that moment is worth more than eternity.`,
  },
  {
    slug: "the-dead-mother-egon-schiele",
    rooms: ["death", "longing", "dreams"],
    title: "The Dead Mother",
    artist: "Egon Schiele",
    year: "1910",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-dead-mother-egon-schiele",
    mood: "longing",
    excerpt: `Some things do not become memories.

They remain wounds wearing the clothes of memories.

You grow older. You learn new names. You move to different places. You build a life that seems completely unrelated to the one you once had.

And still...

something remains.

A voice. A room. A face. The feeling of being small.

You cannot bury everything simply because time has passed.

Some absences become part of your identity.

You stop asking when they will disappear.

You simply learn how to carry them.

Perhaps that is what growing older really means.

Not becoming free from the past.

Learning how to walk while carrying it.`,
  },
  {
    slug: "the-agony-august-friedrich-albrecht-schenck",
    rooms: ["death", "longing", "solitude"],
    title: "The Agony",
    artist: "August Friedrich Albrecht Schenck",
    year: "1878",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-agony-august-friedrich-albrecht-schenck",
    mood: "melancholy",
    excerpt: `There is no human face here.

And perhaps that is why you understand it.

Grief does not always scream.

Sometimes it kneels.

Sometimes it becomes still.

Sometimes it simply refuses to move.

You look at the snow and think it is beautiful.

That is the terrible thing.

The world can remain beautiful while someone is suffering inside it.

The sky does not darken because your heart is breaking.

The wind does not stop.

Morning still arrives.

Nature does not mourn with you.

It simply continues.

And perhaps that is why sorrow can feel so lonely.

You are hurting.

The world is not.`,
  },
  {
    slug: "insane-woman-theodore-gericault",
    rooms: ["solitude"],
    title: "Insane Woman",
    artist: "Théodore Géricault",
    year: "1822",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/insane-woman-theodore-gericault",
    mood: "madness",
    excerpt: `You look into my eyes searching for an explanation.

You want to know what happened.

What broke.

What made me become this.

But perhaps there was no single moment.

Perhaps the mind does not always shatter like glass.

Perhaps it bends.

Slowly.

Quietly.

Until one day the world you see is no longer the world everyone else sees.

And everyone looks at you as though you are the strange one.

They ask you to return to reality.

But what if you are already standing inside yours?

What if reality is simply the name the majority gives to the world they agree upon?`,
  },
  {
    slug: "prometheus-bound-peter-paul-rubens",
    rooms: ["war", "divine"],
    title: "Prometheus Bound",
    artist: "Peter Paul Rubens",
    year: "1611-1612",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/prometheus-bound-peter-paul-rubens",
    mood: "chaos",
    excerpt: `I gave them fire.

They called it a gift.

Eternity called it a crime.

You admire what I did because you know what fire became.

Civilization.

Knowledge.

Progress.

Warmth.

You forget that every gift capable of changing the world is also capable of destroying it.

That is the price nobody tells you.

The moment you give humanity power, you lose control of what humanity does with it.

Perhaps that is why I am punished.

Not because I gave them fire.

Because I believed they deserved it.

Tell me honestly...

Was I wrong?`,
  },
  {
    slug: "prometheus-jose-clemente-orozco",
    rooms: ["divine"],
    title: "Prometheus",
    artist: "José Clemente Orozco",
    year: "1930",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/prometheus-jose-clemente-orozco",
    mood: "chaos",
    excerpt: `You wanted the fire.

I gave it to you.

Then you built cities around it.

Weapons.

Machines.

Towers.

Entire worlds.

And eventually you forgot where the fire came from.

Humanity has always been like this.

It receives a gift and immediately asks how much more it can take.

Knowledge becomes power.

Power becomes ambition.

Ambition becomes destruction.

And still you reach for more.

Perhaps the curse was never mine.

Perhaps the curse is simply being human.`,
  },
  {
    slug: "ixion-peter-paul-rubens",
    rooms: ["sins", "divine"],
    title: "Ixion",
    artist: "Peter Paul Rubens",
    year: "1615",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/ixion-peter-paul-rubens",
    mood: "madness",
    excerpt: `Round and round.

Again.

Again.

Again.

You think repetition is punishment.

Sometimes it is simply consequence.

You betrayed trust.

You reached for what was not yours.

You believed you could escape what you had done.

But some actions do not end when the moment ends.

They follow you.

They repeat themselves through memory.

Through guilt.

Through the people you hurt.

You keep asking when the wheel will stop.

Perhaps the wheel is not the punishment.

Perhaps the punishment is understanding exactly why you are on it.`,
  },
  {
    slug: "the-fall-of-the-rebel-angels-pieter-bruegel-the-elder",
    rooms: ["sins", "war", "nightmares", "divine"],
    title: "The Fall of the Rebel Angels",
    artist: "Pieter Bruegel the Elder",
    year: "1562",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-fall-of-the-rebel-angels-pieter-bruegel-the-elder",
    mood: "melancholy",
    excerpt: `Heaven was not enough for them.

That is what you always forget.

Even paradise can become unbearable when pride convinces you that you deserve something more.

They fell because they wanted to rise.

Strange, isn't it?

The same desire can create both.

Ambition builds kingdoms.

Ambition destroys them.

Pride tells you that you are destined for greatness.

Then, when you believe it long enough, it tells you that rules are for lesser beings.

Look at the fall.

It is beautiful.

Terrible.

Almost magnificent.

That is how destruction often looks from a distance.`,
  },
  {
    slug: "the-fall-of-the-rebel-angels-luca-giordano",
    rooms: ["sins", "war", "divine"],
    title: "The Fall of the Rebel Angels",
    artist: "Luca Giordano",
    year: "1666",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-fall-of-the-rebel-angels-luca-giordano",
    mood: "melancholy",
    excerpt: `We were beautiful once.

That is what makes the fall so cruel.

You think monsters are born monsters.

Sometimes they are made.

A little pride.

A little resentment.

A little certainty that you deserve more than everyone else.

Then another step.

Then another.

Until one day you look back and cannot remember when you stopped being who you were.

Angels can fall.

So can people.

The distance between the two is smaller than you think.`,
  },
  {
    slug: "the-punishment-of-tityus-titian",
    rooms: ["sins", "war", "nightmares", "divine"],
    title: "The Punishment of Tityus",
    artist: "Titian",
    year: "1549",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-punishment-of-tityus-titian",
    mood: "dread",
    excerpt: `It never ends.

That is the point.

Pain becomes something different when there is no tomorrow waiting to interrupt it.

You can endure almost anything if you believe it will end.

Give pain eternity...

and even the strongest creature becomes small.

That is why hope matters.

Not because hope guarantees rescue.

Because it gives suffering a horizon.

Take that away...

and the horizon disappears with it.`,
  },
  {
    slug: "tityus-jose-de-ribera",
    rooms: ["sins", "war", "nightmares", "divine"],
    title: "Tityus",
    artist: "José de Ribera",
    year: "1632",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/tityus-jose-de-ribera",
    mood: "chaos",
    excerpt: `You think pain is temporary because your pain has always been.

You hurt.

You recover.

You wake tomorrow.

But imagine there is no tomorrow.

Imagine the wound remains exactly as it is.

Forever.

No healing.

No forgetting.

No mercy from time.

That is the horror.

Not pain itself.

The certainty that pain will never become memory.`,
  },
  {
    slug: "sisyphus-titian",
    rooms: ["solitude", "divine"],
    title: "Sisyphus",
    artist: "Titian",
    year: "1549",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/sisyphus-titian",
    mood: "melancholy",
    excerpt: `I push because stopping is worse.

That is something you understand more than you admit.

You wake.

Work.

Fail.

Begin again.

Lose.

Recover.

Repeat.

You call it life.

I call it the hill.

The stone always comes back down.

And still...

I push.

Perhaps the meaning was never reaching the top.

Perhaps meaning is hidden in the decision to push again when you already know what will happen.`,
  },
  {
    slug: "sisyphus-franz-von-stuck",
    rooms: ["solitude", "divine"],
    title: "Sisyphus",
    artist: "Franz von Stuck",
    year: "1920",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/sisyphus-franz-von-stuck",
    mood: "isolation",
    excerpt: `You think the stone is my punishment.

It isn't.

Hope is.

Every time I believe this time will be different, I begin again.

Every time the stone falls, I tell myself I will push it higher.

And every time I reach the top...

I lose.

But what if I stopped hoping?

What would remain?

Perhaps that is the real horror.

Not endless failure.

Endless hope in the face of failure.`,
  },
  {
    slug: "the-rape-of-proserpina-peter-paul-rubens",
    rooms: ["sins", "war", "divine"],
    title: "The Rape of Proserpina",
    artist: "Peter Paul Rubens",
    year: "1636-1638",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-rape-of-proserpina-peter-paul-rubens",
    mood: "isolation",
    excerpt: `They called it destiny.

That is a beautiful word for something you had no choice in.

He wanted.

I was taken.

The world called it mythology.

The gods called it fate.

But tell me...

What does fate mean to the person who never chose it?

Sometimes the stories we tell about terrible things make them sound inevitable.

As though they were always supposed to happen.

They weren't.

Not everything that happens was meant to happen.

Sometimes something is simply taken from you.

And you spend the rest of your life learning how to become someone new around the empty space it left behind.`,
  },
  {
    slug: "the-abduction-of-proserpine-rembrandt",
    rooms: ["sins", "war", "divine"],
    title: "The Abduction of Proserpine",
    artist: "Rembrandt",
    year: "1631",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-abduction-of-proserpine-rembrandt",
    mood: "longing",
    excerpt: `He called it love.

I called it captivity.

There are many ways to disguise possession.

Desire.

Devotion.

Destiny.

Love.

The words change.

The hand remains the same.

Holding.

Pulling.

Refusing to let go.

You cannot call something love simply because you want it desperately.

Love leaves room for another person to remain themselves.

Anything else is hunger wearing a beautiful name.`,
  },
  {
    slug: "oedipus-and-the-sphinx-gustave-moreau",
    rooms: ["nightmares", "divine", "dreams"],
    title: "Oedipus and the Sphinx",
    artist: "Gustave Moreau",
    year: "1864",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/oedipus-and-the-sphinx-gustave-moreau",
    mood: "dread",
    excerpt: `She asked me a question.

I answered.

And somehow the answer destroyed everything.

You believe knowledge saves you.

Sometimes it does.

Sometimes the truth opens a door you desperately wish had remained closed.

The Sphinx was not simply asking whether I was intelligent.

She was asking whether I understood myself.

Who are you?

Where did you come from?

What will you become?

You think those questions are simple.

Wait until you discover the answers.

Sometimes the monster is not the thing guarding the truth.

Sometimes the truth itself is the monster.`,
  },
  {
    slug: "oedipus-cursing-his-son-polynices-henry-fuseli",
    rooms: ["sins", "war", "divine"],
    title: "Oedipus Cursing His Son Polynices",
    artist: "Henry Fuseli",
    year: "1786",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/oedipus-cursing-his-son-polynices-henry-fuseli",
    mood: "dread",
    excerpt: `Blood does not guarantee love.

Sometimes family is where the deepest wounds are made.

You expect strangers to hurt you.

You do not expect the people who share your blood to know exactly where to place the knife.

We fought.

We cursed.

We inherited anger like property.

Generation after generation carrying something nobody remembered how to put down.

That is how families become battlefields.

Nobody remembers who started the war.

Everyone remembers why they believe they are right.

And eventually the children inherit wounds they never created.`,
  },
  {
    slug: "ophelia-john-everett-millais",
    rooms: ["death", "longing", "solitude"],
    title: "Ophelia",
    artist: "John Everett Millais",
    year: "1851-1852",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/ophelia-john-everett-millais",
    mood: "melancholy",
    excerpt: `The water is quiet.

That is what you notice first.

Not the ending.

Not the sorrow.

The quiet.

Everyone imagines death as something violent.

Sometimes it is simply surrender.

I floated away from a world that had already become too heavy to remain inside.

Flowers surrounded me.

The river carried me.

And for one strange moment...

nothing demanded anything from me.

Perhaps that is why I look peaceful.

Not because death was beautiful.

Because the struggle had finally become silent.`,
  },
  {
    slug: "ophelia-alexandre-cabanel",
    rooms: ["death", "longing", "solitude"],
    title: "Ophelia",
    artist: "Alexandre Cabanel",
    year: "1883",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/ophelia-alexandre-cabanel",
    mood: "melancholy",
    excerpt: `From far away, death can look peaceful.

That is dangerous.

Beauty has a way of softening things that should remain uncomfortable.

You see the flowers.

The water.

The pale face.

You see stillness.

You forget the life that came before it.

The confusion.

The heartbreak.

The loneliness.

The things nobody understood.

Never mistake a beautiful ending for a happy one.

Sometimes beauty is simply the final mask sorrow wears.`,
  },
  {
    slug: "the-soul-of-the-rose-john-william-waterhouse",
    rooms: ["longing"],
    title: "The Soul of the Rose",
    artist: "John William Waterhouse",
    year: "1908",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-soul-of-the-rose-john-william-waterhouse",
    mood: "longing",
    excerpt: `Desire does not always announce itself.

Sometimes it is a fragrance.

A memory.

A glance that lasts half a second too long.

Something beautiful enough to make you forget that beauty can hurt.

You think desire is about possessing something.

It isn't.

Sometimes desire is simply wanting something you know you cannot have.

And somehow wanting it more because of that.

The rose is beautiful.

So is the longing.

But both have thorns.`,
  },
  {
    slug: "circe-invidiosa-john-william-waterhouse",
    rooms: ["sins", "longing", "divine"],
    title: "Circe Invidiosa",
    artist: "John William Waterhouse",
    year: "1892",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/circe-invidiosa-john-william-waterhouse",
    mood: "isolation",
    excerpt: `Jealousy is not always loud.

Sometimes it is patient.

Sometimes it smiles.

Sometimes it watches.

It waits for the perfect moment to become something else.

A thought becomes resentment.

Resentment becomes obsession.

Obsession becomes a spell.

And suddenly the person you wanted to hurt is no longer the only one trapped.

You are trapped too.

Because jealousy requires you to keep looking at what someone else has.

Until you forget what was already yours.`,
  },
  {
    slug: "circe-offering-the-cup-to-ulysses-john-william-waterhouse",
    rooms: ["sins", "divine"],
    title: "Circe Offering the Cup to Ulysses",
    artist: "John William Waterhouse",
    year: "1891",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/circe-offering-the-cup-to-ulysses-john-william-waterhouse",
    mood: "isolation",
    excerpt: `Drink.

I promise nothing.

That is what makes the invitation dangerous.

You see the cup.

You see the beauty.

You see the hand offering it.

You do not see what waits after the first taste.

Temptation rarely forces itself upon you.

It simply places the choice in your hand.

Then watches.

You can refuse.

You can leave.

Or you can take the cup and spend the rest of your life wondering why you didn't.`,
  },
  {
    slug: "the-monk-by-the-sea-caspar-david-friedrich",
    rooms: ["solitude", "divine"],
    title: "The Monk by the Sea",
    artist: "Caspar David Friedrich",
    year: "1810",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-monk-by-the-sea-caspar-david-friedrich",
    mood: "isolation",
    excerpt: `Look at me standing here.

The sea does not care that I am afraid.

The sky does not bend because I am small.

I came looking for answers and found something much larger than questions.

The universe is enormous.

I am almost nothing before it.

Perhaps that is frightening.

Perhaps it is freeing.

When you finally understand how small you are, you may stop carrying the weight of pretending you control everything.

Stand here long enough.

Listen.

The silence has more to say than you do.`,
  },
  {
    slug: "abbey-in-the-oakwood-caspar-david-friedrich",
    rooms: ["death", "divine"],
    title: "Abbey in the Oakwood",
    artist: "Caspar David Friedrich",
    year: "1810",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/abbey-in-the-oakwood-caspar-david-friedrich",
    mood: "longing",
    excerpt: `The living pass through.

The dead remain.

You walk among ruins and imagine the people who once stood here.

Voices.

Footsteps.

Prayers.

Names.

All gone.

The trees grow anyway.

Snow covers the graves.

The building falls apart one stone at a time.

Time does not preserve anything simply because it mattered.

It takes.

Slowly.

Quietly.

Until even the places built to remember become things that need remembering.`,
  },
  {
    slug: "two-men-contemplating-the-moon-caspar-david-friedrich",
    rooms: ["dreams"],
    title: "Two Men Contemplating the Moon",
    artist: "Caspar David Friedrich",
    year: "1819-1820",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/two-men-contemplating-the-moon-caspar-david-friedrich",
    mood: "madness",
    excerpt: `We stand beneath the same moon and still do not know what it means.

Perhaps that is enough.

Not every mystery needs an answer.

Some things are beautiful precisely because they remain beyond understanding.

You spend so much of your life trying to name everything.

To measure.

To classify.

To explain.

Then the night arrives and reminds you there are things that existed before your questions and will remain after them.

So stand here.

Look up.

For once, let the mystery remain a mystery.`,
  },
  {
    slug: "the-evening-star-caspar-david-friedrich",
    rooms: ["death", "dreams"],
    title: "The Evening Star",
    artist: "Caspar David Friedrich",
    year: "1830",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-evening-star-caspar-david-friedrich",
    mood: "madness",
    excerpt: `The day is ending.

You knew it would.

Every day ends.

Still, part of you always acts surprised.

You keep delaying things.

Words.

Goodbyes.

Dreams.

You tell yourself there will be another morning.

Usually there is.

Until there isn't.

The evening star appears quietly.

No announcement.

No warning.

Just a small light arriving as the world becomes dark.

Perhaps endings do not need to be feared.

Perhaps they simply remind you that the light was never promised to stay forever.`,
  },
  {
    slug: "the-lamentation-over-the-dead-christ-andrea-mantegna",
    rooms: ["death", "longing", "divine"],
    title: "The Lamentation over the Dead Christ",
    artist: "Andrea Mantegna",
    year: "1480",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-lamentation-over-the-dead-christ-andrea-mantegna",
    mood: "melancholy",
    excerpt: `They touch the body because touch is the last thing left.

You can no longer speak to the dead.

You cannot ask them what they felt.

You cannot hear their answer.

So the hands become language.

They hold.

They mourn.

They refuse, for one final moment, to accept the distance between the living and the dead.

Even the sacred becomes painfully human here.

Because grief does not care what someone was.

It only knows that they are gone.`,
  },
  {
    slug: "the-last-judgment-fra-angelico",
    rooms: ["sins", "death", "divine"],
    title: "The Last Judgment",
    artist: "Fra Angelico",
    year: "1425-1431",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-last-judgment-fra-angelico",
    mood: "melancholy",
    excerpt: `There is a moment when mercy and fear stand together.

You have spent your life imagining judgment as punishment.

But perhaps judgment is simply the moment when everything hidden becomes visible.

No excuses.

No performance.

No carefully chosen version of yourself.

Only what you did.

What you refused to do.

Who you became when nobody was watching.

Mercy may stand beside fear.

But neither can change what is already true.

The question is not whether you will be judged.

The question is whether you will recognize yourself when the time comes.`,
  },
  {
    slug: "the-crucifixion-matthias-grunewald",
    rooms: ["death", "war", "divine"],
    title: "The Crucifixion",
    artist: "Matthias Grünewald",
    year: "1512-1516",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-crucifixion-matthias-grunewald",
    mood: "isolation",
    excerpt: `Do not look away.

Suffering does not become less terrible because someone calls it sacred.

Pain remains pain.

The body still breaks.

The hands still tremble.

The world still watches.

You want suffering to have a beautiful explanation.

Sometimes there isn't one.

Sometimes the only honest thing you can do is admit that something hurts.

And still remain beside it.

Not every wound needs to be explained before it deserves compassion.`,
  },
  {
    slug: "the-apparition-gustave-moreau",
    rooms: ["sins", "death", "nightmares", "divine", "dreams"],
    title: "The Apparition",
    artist: "Gustave Moreau",
    year: "1876",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-apparition-gustave-moreau",
    mood: "dread",
    excerpt: `You think visions should comfort you.

Some do the opposite.

Some arrive beautiful enough to make you afraid.

Because beauty can reveal things you were not prepared to see.

The unknown is not always ugly.

Sometimes it is radiant.

Sometimes that makes it worse.

You stare because you cannot decide whether you are witnessing a miracle or a warning.

Perhaps the difference was never as large as you thought.`,
  },
  {
    slug: "salome-dancing-before-herod-gustave-moreau",
    rooms: ["sins", "longing", "divine"],
    title: "Salome Dancing Before Herod",
    artist: "Gustave Moreau",
    year: "1876",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/salome-dancing-before-herod-gustave-moreau",
    mood: "longing",
    excerpt: `They are watching me.

That is the point.

Every movement becomes a weapon when people are willing to give you power for beauty.

You think I am dancing.

Perhaps I am bargaining.

Perhaps I am testing how much desire can make a powerful man surrender.

Beauty can become dangerous when it learns exactly what people want.

The dance ends.

The consequences do not.`,
  },
  {
    slug: "salome-in-the-garden-gustave-moreau",
    rooms: ["sins", "death", "divine"],
    title: "Salome in the Garden",
    artist: "Gustave Moreau",
    year: "1878",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/salome-in-the-garden-gustave-moreau",
    mood: "longing",
    excerpt: `Desire rarely tells you what it will destroy.

It whispers about what you want.

It shows you the beautiful part.

It keeps the consequences just outside the frame.

You reach.

You take.

You discover afterward what the wanting cost.

That is why desire is dangerous.

Not because wanting is evil.

Because wanting can become so loud that everything else becomes quiet.`,
  },
  {
    slug: "the-kiss-gustav-klimt",
    rooms: ["longing", "dreams"],
    title: "The Kiss",
    artist: "Gustav Klimt",
    year: "1908",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-kiss-gustav-klimt",
    mood: "longing",
    excerpt: `You think I am holding someone.

Perhaps I am surrendering.

There is a moment in love when the boundary between two people becomes almost impossible to see.

You stop asking where one person ends.

You simply hold.

And for a while, the world disappears.

But surrender is frightening.

Because to let someone close enough to touch your deepest self is to give them the ability to hurt you there.

Still...

you lean closer.

Perhaps some risks are worth taking.`,
  },
  {
    slug: "the-birth-of-venus-sandro-botticelli",
    rooms: ["longing", "divine"],
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: "1485",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-birth-of-venus-sandro-botticelli",
    mood: "longing",
    excerpt: `They call me beauty.

They forget that beauty is rarely born from nothing.

I came from the sea.

From violence.

From desire.

From something strange and ancient.

You look at the softness and forget the darkness beneath the myth.

That is what humans do with beautiful things.

They polish away the uncomfortable parts.

They want purity.

They want innocence.

They want the story to be clean.

But perhaps beauty has always carried something darker inside it.

Perhaps that is what makes it beautiful.`,
  },
  {
    slug: "the-son-of-man-rene-magritte",
    rooms: ["solitude", "dreams"],
    title: "The Son of Man",
    artist: "René Magritte",
    year: "1964",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-son-of-man-rene-magritte",
    mood: "madness",
    excerpt: `You can see my face.

And still you cannot see me.

The apple is right there.

Close enough to touch.

But it blocks the answer you think you deserve.

That is the joke.

You assume seeing means understanding.

It doesn't.

You can look directly at a person and never know what they are thinking.

You can know someone's name and know nothing about them.

Perhaps every face is partly hidden.

Perhaps every person carries an apple in front of themselves.

Something that says:

You may look.

You may never completely see.`,
  },
  {
    slug: "the-lovers-rene-magritte",
    rooms: ["longing", "solitude", "dreams"],
    title: "The Lovers",
    artist: "René Magritte",
    year: "1928",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-lovers-rene-magritte",
    mood: "longing",
    excerpt: `We are close.

Closer than most people ever become.

And still we cannot touch.

The cloth between us is thin.

Almost nothing.

Yet it is enough.

Sometimes intimacy fails because of enormous distances.

Sometimes it fails because of one small thing nobody can remove.

Fear.

Secrets.

Silence.

The things we refuse to say.

You can love someone completely and still never reach them.`,
  },
  {
    slug: "the-human-condition-rene-magritte",
    rooms: ["dreams"],
    title: "The Human Condition",
    artist: "René Magritte",
    year: "1933",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-human-condition-rene-magritte",
    mood: "madness",
    excerpt: `You think you are looking through the window.

Perhaps you are only looking at another painting.

That is the uncomfortable part.

You trust your eyes because they have never given you another option.

But perception is not reality.

It is an interpretation.

A frame.

A version.

You see what your mind allows you to see.

So tell me...

How certain are you that the world outside the painting is actually outside it?`,
  },
  {
    slug: "the-empire-of-light-rene-magritte",
    rooms: ["dreams"],
    title: "The Empire of Light",
    artist: "René Magritte",
    year: "1953-1954",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-empire-of-light-rene-magritte",
    mood: "madness",
    excerpt: `Day and night should not exist together.

And yet here they are.

A bright sky above a world that belongs to darkness.

Perhaps reality is not obligated to make sense.

You want things separated.

Light here.

Darkness there.

Good on one side.

Bad on the other.

But human beings are rarely that simple.

Perhaps you can carry darkness beneath a bright sky.

Perhaps someone can look peaceful while falling apart.

Perhaps opposites do not need to choose.`,
  },
  {
    slug: "the-false-mirror-rene-magritte",
    rooms: ["dreams"],
    title: "The False Mirror",
    artist: "René Magritte",
    year: "1929",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-false-mirror-rene-magritte",
    mood: "madness",
    excerpt: `You are looking through an eye.

But what is the eye looking at?

The sky?

You?

Itself?

Perhaps mirrors never show you the truth.

They simply give you another surface to trust.

You look outward and think you are observing the world.

But every observation passes through you first.

Your memories.

Your fears.

Your expectations.

Maybe the world you see is partly the world you brought with you.`,
  },
  {
    slug: "the-cyclops-odilon-redon",
    rooms: ["longing", "solitude", "divine", "dreams"],
    title: "The Cyclops",
    artist: "Odilon Redon",
    year: "1914",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-cyclops-odilon-redon",
    mood: "dread",
    excerpt: `You call me a monster because I watch.

But why are you so afraid of being seen?

Perhaps I am not hunting you.

Perhaps I am lonely.

One enormous eye.

One enormous world.

And nobody willing to look back.

Monsters are often easier to fear than understand.

You see the strange shape and decide what it means.

You never ask what it feels like to exist inside it.`,
  },
  {
    slug: "the-crying-spider-odilon-redon",
    rooms: ["solitude", "nightmares", "dreams"],
    title: "The Crying Spider",
    artist: "Odilon Redon",
    year: "1881",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-crying-spider-odilon-redon",
    mood: "melancholy",
    excerpt: `You thought monsters could not grieve.

You were wrong.

Look closely.

Even something you call frightening can carry sorrow.

That is the part you do not like.

It is easier to hate what looks different.

Easier to call it monstrous.

But sadness does not belong to beautiful faces.

Fear does not belong to ugly creatures.

Pain has no preference.

Even monsters can cry.

Perhaps that is what makes them human.`,
  },
  {
    slug: "the-dream-henri-rousseau",
    rooms: ["dreams"],
    title: "The Dream",
    artist: "Henri Rousseau",
    year: "1910",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-dream-henri-rousseau",
    mood: "madness",
    excerpt: `The jungle is beautiful.

That is why you should be careful.

Beauty makes you lower your guard.

You look at the leaves.

The flowers.

The strange colors.

You forget that something may be watching from inside them.

Dreams work the same way.

They give you beauty first.

Then they show you what was hiding beneath it.

You are never completely alone in the places your mind creates.`,
  },
  {
    slug: "the-snake-charmer-henri-rousseau",
    rooms: ["nightmares", "dreams"],
    title: "The Snake Charmer",
    artist: "Henri Rousseau",
    year: "1907",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-snake-charmer-henri-rousseau",
    mood: "madness",
    excerpt: `The unknown does not need to attack you.

Sometimes it simply waits.

You hear something moving where you cannot see.

You feel eyes somewhere beyond the light.

Nothing happens.

And that is enough.

Fear does not always need evidence.

Sometimes the possibility is enough.

You stare into the darkness.

The darkness stares back.

And suddenly your imagination becomes more frightening than anything that could actually be there.`,
  },
  {
    slug: "the-sleeping-gypsy-henri-rousseau",
    rooms: ["solitude", "dreams"],
    title: "The Sleeping Gypsy",
    artist: "Henri Rousseau",
    year: "1897",
    image: "https://res.cloudinary.com/daldbatl/image/upload/f_auto,q_auto/the-sleeping-gypsy-henri-rousseau",
    mood: "isolation",
    excerpt: `She sleeps peacefully.

She does not know what is watching.

Perhaps that is why she can sleep.

Knowledge changes everything.

The moment you realize danger is nearby, peace disappears.

But ignorance is not safety.

It is simply the absence of awareness.

The lion moves quietly.

The night remains still.

She dreams.

And for this one moment, the unknown has not yet decided whether it will become a threat.`,
  },
  {
    slug: "apollo-and-marsyas-jusepe-de-ribera",
    rooms: ["sins", "death", "war", "divine"],
    title: "Apollo and Marsyas",
    artist: "Jusepe de Ribera",
    year: "1637",
    image: "/paintings/apollo-and-marsyas-jusepe-de-ribera.jpg",
    mood: "dread",
    excerpt: `You challenged a god and called it music.

I do not punish out of cruelty.

I punish because pride forgets its limits, and someone must remind it.

You thought skill alone could stand beside divinity.

It cannot.

Talent is not the same as power, and confidence is not the same as right.

Scream if you must.

The lesson was never about the sound you made.`,
  },
  {
    slug: "christs-entry-into-brussels-james-ensor",
    rooms: ["sins", "solitude", "divine", "dreams"],
    title: "Christ's Entry into Brussels in 1889",
    artist: "James Ensor",
    year: "1888",
    image: "/paintings/christs-entry-into-brussels-james-ensor.jpg",
    mood: "chaos",
    excerpt: `Look at the parade.

Thousands of faces, and not one of them is real.

They cheer. They wave banners. They march behind slogans and trumpets, deafening themselves so they never have to hear the silence inside their own heads.

They think this carnival is for me.

Look closer.

I am a speck lost in the center of their noise, riding an animal that knows more humility than the entire crowd combined.

They did not come to follow.

They came to be seen celebrating.

Give humanity a parade, and they will turn even salvation into a riot.

When the music stops and the confetti falls into the mud, not a single one will remember why they took to the streets.`,
  },
  {
    slug: "dante-and-virgil-entering-hell-eugene-delacroix",
    rooms: ["sins", "death", "war", "nightmares", "divine"],
    title: "The Barque of Dante",
    artist: "Eugène Delacroix",
    year: "1822",
    image: "/paintings/dante-and-virgil-entering-hell-eugene-delacroix.jpg",
    mood: "chaos",
    excerpt: `The water does not support us. It threatens to swallow us whole.

Look at the hands reaching out from the dark.

They are not asking to be saved.

They are asking to drag us down with them.

I move through this place because I must, but with every stroke of the oar, I wonder how much difference there really is between those in the boat and those beneath the surface.

Desperation makes monsters of everyone eventually.`,
  },
  {
    slug: "die-schachspieler-friedrich-moritz-august-retzsch",
    rooms: ["sins", "divine", "dreams"],
    title: "The Chess Players (Die Schachspieler)",
    artist: "Friedrich Moritz August Retzsch",
    year: "1831",
    image: "/paintings/die-schachspieler-friedrich-moritz-august-retzsch.jpg",
    mood: "dread",
    excerpt: `Place your hand on the piece.

You have been staring at the board for what feels like centuries, searching for a move that doesn't cost you a piece of yourself.

Look at my smile across the table.

I don't need to cheat.

I only had to give you the illusion of choice.

Every move you made—every ambition, every compromise, every quiet surrender—brought your king precisely where I wanted it.

Your angel stands behind you, weeping in silence, unable to touch the board.

Because this was always your game to play.

Take your time.

The clock is ticking, and eternity is very patient.`,
  },
  {
    slug: "harrowing-of-hell-byzantine",
    rooms: ["death", "divine"],
    title: "Harrowing of Hell",
    artist: "Byzantine",
    year: "12th century",
    image: "/paintings/harrowing-of-hell-byzantine.jpg",
    mood: "dread",
    excerpt: `The gates are broken.

Not from the outside, but from within.

You spent lifetimes believing this darkness was final, that once you fell beneath the world, nothing could reach you here.

You were wrong.

Light does not ask permission before it enters.

It breaks what tried to keep you, tears open the ground, and pulls you back into the air whether you feel ready for it or not.

Reaching for freedom is the most terrifying thing you will ever do.

Take my hand anyway.`,
  },
  {
    slug: "jason-and-medea-john-william-waterhouse",
    rooms: ["longing", "divine"],
    title: "Jason and Medea",
    artist: "John William Waterhouse",
    year: "1907",
    image: "/paintings/jason-and-medea-john-william-waterhouse.jpg",
    mood: "longing",
    excerpt: `I am giving you everything you need to become a hero.

The potion. The charm. The strength you could never find on your own.

And in return, you look at me as though I am something to be conquered, rather than someone who chose to save you.

Remember this moment.

When the story is written and they call you great, it will be my magic that made you so.

Do not forget what happens when the woman who gave you your power decides she wants it back.`,
  },
  {
    slug: "jealousy-edvard-munch",
    rooms: ["longing", "solitude"],
    title: "Jealousy",
    artist: "Edvard Munch",
    year: "1895",
    image: "/paintings/jealousy-edvard-munch.jpg",
    mood: "madness",
    excerpt: `I am not looking at you.

I am looking at what you are doing just behind me.

You think jealousy is anger.

It isn't.

It is a poison you brew in your own head, drinking it sip by sip while imagining every word, every glance, every touch they share when they think you aren't watching.

Look at my face.

The color has left it.

Because when you let suspicion take root, you cease to be a person.

You become a witness to your own exclusion.

They are standing in the light under the branches.

And I am drowning in the foreground, consumed by a fire that warms no one.`,
  },
  {
    slug: "masks-confronting-death-james-ensor",
    rooms: ["death", "nightmares", "dreams"],
    title: "Masks Confronting Death",
    artist: "James Ensor",
    year: "1888",
    image: "/paintings/masks-confronting-death-james-ensor.jpg",
    mood: "dread",
    excerpt: `You came here wearing a face.

Everyone does.

Some faces are beautiful.

Some are frightening.

Some are designed to make people laugh.

But eventually every face becomes a mask.

I have watched you hide behind yours.

You smile when you are afraid.

You laugh when you are uncomfortable.

You tell people you are fine when something inside you has already begun to die.

And then you look at me as though I am the frightening one.

Look closer. I am not wearing a mask.

You are.

Perhaps that is why you cannot stop staring.

Death has no reason to pretend. You do.`,
  },
  {
    slug: "medea-eugene-delacroix",
    rooms: ["sins", "death", "war", "divine"],
    title: "Medea",
    artist: "Eugène Delacroix",
    year: "1838",
    image: "/paintings/medea-eugene-delacroix.jpg",
    mood: "madness",
    excerpt: `You gave me everything I needed to destroy you.

Your trust. Your children. Your arrogance.

You thought love meant surrender, that once I belonged to you, I would accept whatever cruelty you offered in return.

You did not understand what you were holding.

I do not bend. I do not quietly disappear.

If I must burn the world you built to remind you of who I am, I will strike the match myself.`,
  },
  {
    slug: "oedipus-and-the-sphinx-jean-auguste-dominique-ingres",
    rooms: ["nightmares", "divine"],
    title: "Oedipus and the Sphinx",
    artist: "Jean-Auguste-Dominique Ingres",
    year: "1808",
    image: "/paintings/oedipus-and-the-sphinx-jean-auguste-dominique-ingres.jpg",
    mood: "dread",
    excerpt: `You think the danger was the riddle.

It wasn't.

The danger was believing that knowing the answer made you safe.

You solved my puzzle with ease, confident that intelligence was enough to protect you from what comes next.

It isn't.

Knowledge does not shield you from fate.

Sometimes it only walks you directly into it, step by step, with your eyes wide open.`,
  },
  {
    slug: "orestes-pursued-by-the-furies-william-adolphe-bouguereau",
    rooms: ["sins", "death", "nightmares", "divine"],
    title: "Oestres Pursued by the Furies",
    artist: "William-Adolphe Bouguereau",
    year: "1862",
    image: "/paintings/orestes-pursued-by-the-furies-william-adolphe-bouguereau.jpg",
    mood: "madness",
    excerpt: `You cannot outrun what you have done.

You can only outrun the silence, for a while, before it catches up.

Look at them behind me.

They do not tire. They do not negotiate. They have all of eternity to wait for me to stop running.

You think guilt is something you feel in private.

Guilt is a pack of wolves that follows you everywhere, waiting for the moment you finally run out of breath.`,
  },
  {
    slug: "satan-watching-the-sleep-of-christ-joseph-noel-paton",
    rooms: ["nightmares", "divine"],
    title: "Satan Watching the Sleep of Christ",
    artist: "Joseph Noel Paton",
    year: "1874",
    image: "/paintings/satan-watching-the-sleep-of-christ-joseph-noel-paton.jpg",
    mood: "dread",
    excerpt: `You sleep.

That is what I cannot understand.

You know what waits for you.

You know what suffering is coming.

You know exactly where this road ends.

And still you close your eyes.

I have watched men beg for their lives over far less.

Kings have trembled before me.

Warriors have forgotten their courage.

The proud have discovered how small they really are when darkness finally stands before them.

But you simply sleep.

Perhaps that is what makes you dangerous.

Not your strength.

Your peace.

I came expecting fear.

Instead, I found someone who could look directly into the darkness and still believe there was something beyond it.

So sleep, Christ.

For tonight, I will only watch.

But remember this.

Darkness does not always attack.

Sometimes it simply waits beside you, quietly, patiently, until you wake.`,
  },
  {
    slug: "tamara-and-the-demon-mikhail-vrubel",
    rooms: ["longing", "nightmares", "divine"],
    title: "Tamara and the Demon",
    artist: "Mikhail Vrubel",
    year: "1890",
    image: "/paintings/tamara-and-the-demon-mikhail-vrubel.jpg",
    mood: "longing",
    excerpt: `You should be afraid of me.

Everyone tells you that.

They see what I am before they ever ask what I want.

A demon.

A creature of darkness.

Something beautiful enough to tempt you and dangerous enough to destroy you.

Perhaps they are right.

But look at me.

Do you see hunger? Or do you see loneliness?

That is the part nobody warns you about.

Sometimes the thing that frightens you most is not trying to hurt you.

Sometimes it only wants to be understood.

You came close enough to touch me.

That was your mistake. Not because I forced you.

Because you chose to stay.

There are some forms of darkness that become dangerous only after you stop being afraid of them.

And now you are no longer afraid.

Now you are curious.

That is much worse.`,
  },
  {
    slug: "the-anatomy-lesson-of-dr-deijman-rembrandt",
    rooms: ["death"],
    title: "The Anatomy Lesson of Dr. Deijman",
    artist: "Rembrandt",
    year: "1656",
    image: "/paintings/the-anatomy-lesson-of-dr-deijman-rembrandt.jpg",
    mood: "isolation",
    excerpt: `You gather around what remains of me, searching for understanding.

I do not mind.

In life, no one looked this closely.

Now that I am quiet, now that I have nothing left to hide, you study every layer with great seriousness, as though the secret of being alive could be found by taking someone apart.

Cut as deep as you like.

You will find muscle, bone, blood.

You will not find why any of it mattered.`,
  },
  {
    slug: "the-bad-mothers-giovanni-segantini",
    rooms: ["sins", "longing", "solitude", "dreams"],
    title: "The Bad Mothers",
    artist: "Giovanni Segantini",
    year: "1894",
    image: "/paintings/the-bad-mothers-giovanni-segantini.jpg",
    mood: "melancholy",
    excerpt: `The wind here never warms.

It moves through the snow, carrying the faint, distant cries of what was rejected.

You called it freedom when you turned away.

You told yourself that life was yours alone, that no small hands had the right to anchor you to the earth.

Now look where that freedom led.

Suspended between frozen sky and desolate valley, caught in the barren branches of a tree that will never bloom.

The worst punishment is not agony.

It is silence.

A white, endless silence where the only thing that echoes is the memory of the love you refused to give.

And here, in the winter of your own design, you will wait until your heart finally learns how to ache.`,
  },
  {
    slug: "the-barque-of-dante-eugene-delacroix",
    rooms: ["sins", "death", "war", "nightmares", "divine"],
    title: "The Barque of Dante",
    artist: "Eugène Delacroix",
    year: "1822",
    image: "/paintings/the-barque-of-dante-eugene-delacroix.jpg",
    mood: "chaos",
    excerpt: `The waters of the Styx do not flow. They churn with the bodies of the damned.

Look down over the gunwale of our small boat.

They bite the wood. They claw at the oars. They tear at each other's flesh just for a fleeting second of leverage above the suffocating black tide.

Virgil holds my hand steady, but his eyes are dark with knowledge.

He has seen a thousand crossings.

He knows that Hell is not merely a destination beneath the soil—it is the inescapable turbulence of souls who chose hatred over light.

You watch from your safe shore, horrified by their frenzy.

Do not be so certain of your distance.

It takes only one misstep in life to fall into the same black water.`,
  },
  {
    slug: "the-bewitched-man-francisco-goya",
    rooms: ["nightmares", "dreams"],
    title: "The Bewitched Man",
    artist: "Francisco Goya",
    year: "1798",
    image: "/paintings/the-bewitched-man-francisco-goya.jpg",
    mood: "madness",
    excerpt: `Keep pouring the oil.

If the lamp goes out, my breath goes with it.

That is what the voice in the dark told me, and fear does not ask for evidence.

Look at the creature holding the vessel.

Its horns scrape the ceiling of my mind.

Its eyes gleam with mockery while my hands tremble with every drop I pour.

You laugh because you see a man frightened by painted shadows.

You think you are immune to curses.

Yet you spend your own nights feeding anxieties just as hollow, pouring your energy into lamps that were never yours to tend.

The curse was never magic.

The curse was believing that fear had the final say.`,
  },
  {
    slug: "the-crucifixion-cimabue",
    rooms: ["death", "war", "divine"],
    title: "The Crucifixion",
    artist: "Cimabue",
    year: "1288",
    image: "/paintings/the-crucifixion-cimabue.jpg",
    mood: "dread",
    excerpt: `Suffering does not need modern language to be understood.

Look at me.

Even across centuries, across faded paint and cracked gold, the shape of grief remains identical.

You think your pain is unique.

It isn't.

Humanity has been standing beneath this same wooden cross, asking the same unanswered questions, for as long as anyone has had the courage to look upward.

We simply change the names we give the silence.`,
  },
  {
    slug: "the-death-of-hyacinth-jean-broc",
    rooms: ["death", "longing", "divine"],
    title: "The Death of Hyacinth",
    artist: "Jean Broc",
    year: "1801",
    image: "/paintings/the-death-of-hyacinth-jean-broc.jpg",
    mood: "melancholy",
    excerpt: `A single accident, and everything I loved became something I destroyed.

The wind did not mean for the discus to strike.

I did not mean for my strength to be his ending.

And yet here we are.

Grief does not care about intention.

It only cares about what is left behind when the light finally goes out.

I hold him close, as though closeness could somehow reverse the distance between life and what follows.

It cannot.

Even gods are helpless in front of a body that has gone cold.`,
  },
  {
    slug: "the-death-of-sardanapalus-eugene-delacroix",
    rooms: ["sins", "death", "war"],
    title: "The Death of Sardanapalus",
    artist: "Eugène Delacroix",
    year: "1827",
    image: "/paintings/the-death-of-sardanapalus-eugene-delacroix.jpg",
    mood: "chaos",
    excerpt: `If I could not keep my kingdom, I decided nothing else would keep anything either.

You call this madness.

I call it consistency.

I lived surrounded by excess, and I refuse to leave quietly, like a man who regretted what he had.

Look at the pyre. Look at the chaos around me.

I watch it all from the bed, unmoving, because once you accept that everything ends, there is nothing left to panic about.

Destruction, when done properly, can be just as grand as creation.`,
  },
  {
    slug: "the-death-of-seneca-jacques-louis-david",
    rooms: ["death"],
    title: "The Death of Seneca",
    artist: "Jacques-Louis David",
    year: "1773",
    image: "/paintings/the-death-of-seneca-jacques-louis-david.jpg",
    mood: "isolation",
    excerpt: `I taught calm for most of my life.

Now calm is the only thing left for me to practice.

Those around me weep.

I understand why. Grief rarely listens to philosophy.

But I have spent years preparing for exactly this moment, and I refuse to let fear undo decades of discipline in its final hour.

Death does not care how wise you were.

It only asks whether you can finally sit still in front of it.`,
  },
  {
    slug: "the-death-of-the-gravedigger-carlos-schwabe",
    rooms: ["death", "divine", "dreams"],
    title: "The Death of the Gravedigger",
    artist: "Carlos Schwabe",
    year: "1895",
    image: "/paintings/the-death-of-the-gravedigger-carlos-schwabe.jpg",
    mood: "dread",
    excerpt: `You spent your life making room for the dead.

One grave after another.

You lowered strangers into the earth and covered them carefully, believing that death was something that happened to other people.

Perhaps that is the cruelest joke of all.

You became so familiar with death that you forgot it was familiar with you too.

The shovel.

The soil.

The silence.

You thought you were preparing graves for them.

You were preparing one for yourself.

Now look at the earth beneath you.

It knows your name.

The dead do not need to come looking for you.

They have been waiting.

You spent your whole life believing that you were the man who buried death.

You never understood that every grave you dug was also a promise.

One day, there would be one waiting for you.`,
  },
  {
    slug: "the-demon-downcast-mikhail-vrubel",
    rooms: ["sins", "solitude", "divine", "dreams"],
    title: "The Demon Downcast",
    artist: "Mikhail Vrubel",
    year: "1902",
    image: "/paintings/the-demon-downcast-mikhail-vrubel.jpg",
    mood: "melancholy",
    excerpt: `My wings are broken against the rocks.

The peacock feathers that once caught the light of creation now lie shattered in the dust and ice.

Look at my eyes.

There is no repentance in them.

Only the unbearable weight of knowing that I flew too close to the infinite, and the infinite did not even blink as it struck me down.

They told you that the fallen are grotesque.

They lied.

The greatest tragedies are always dressed in fractured beauty.

I lie here twisted among the peaks, unable to rise, unable to die, watching the heavens remain serene while my entire universe lies in ruin.

You look down at me with pity.

Save it.

I would rather be broken upon these mountains than spend an eternity bowing in a sky that never belonged to me.`,
  },
  {
    slug: "the-demon-seated-mikhail-vrubel",
    rooms: ["longing", "solitude", "divine", "dreams"],
    title: "The Demon Seated",
    artist: "Mikhail Vrubel",
    year: "1890",
    image: "/paintings/the-demon-seated-mikhail-vrubel.jpg",
    mood: "isolation",
    excerpt: `I sit between the earth and the sunset, belonging to neither.

Look at my hands, clasped tight enough to crush stone.

Look at the crystal flowers blooming around me in the twilight.

They are cold.

Everything I touch turns into something magnificent and utterly unlivable.

They call me evil because they cannot understand what it means to be too large for this world.

I do not want your temples.

I do not want your worship.

I only wanted a single soul who could look at the vast, desolate beauty of this universe and not turn away in fear.

Instead, I have this mountain.

And the sunset.

And an eternity of sitting alone with thoughts that have no one to hear them.`,
  },
  {
    slug: "the-flaying-of-marsyas-titian",
    rooms: ["sins", "death", "war", "divine"],
    title: "The Flaying of Marsyas",
    artist: "Titian",
    year: "1576",
    image: "/paintings/the-flaying-of-marsyas-titian.jpg",
    mood: "dread",
    excerpt: `I dared to compete with a god, and gods do not lose gracefully.

You think this is about music.

It was never about music.

It was about a god who could not tolerate being challenged by something smaller than himself.

Power rarely punishes you for losing.

It punishes you for having the audacity to try in the first place.

Remember that, the next time you think talent alone will protect you from someone who cannot bear to share the stage.`,
  },
  {
    slug: "the-incantation-francisco-goya",
    rooms: ["nightmares"],
    title: "The Incantation",
    artist: "Francisco Goya",
    year: "1798",
    image: "/paintings/the-incantation-francisco-goya.jpg",
    mood: "dread",
    excerpt: `Gather around the flame.

Hold your breath so the smoke does not choke the words we whisper.

You think we summon monsters from beneath the earth.

We don't.

We only give voice to the secrets the daylight forces you to swallow.

The owl overhead knows the truth.

The bones scattered on the ground have already forgotten their names.

You stand at the edge of the circle, shivering in your coat, pretending you came here only to warn us of your laws.

Why haven't you left?

Because curiosity is older than virtue.

And deep down, you want to know what happens when the incantation finally ends.`,
  },
  {
    slug: "the-inferno-sandro-botticelli",
    rooms: ["sins", "death", "nightmares", "divine"],
    title: "Map of Hell",
    artist: "Sandro Botticelli",
    year: "1480s",
    image: "/paintings/the-inferno-sandro-botticelli.jpg",
    mood: "dread",
    excerpt: `You wanted to see the whole architecture of consequence, laid out in careful, terrible order.

Here it is.

Every circle, every layer, every punishment fitted precisely to the sin that earned it.

You find this frightening.

I find it almost comforting.

At least here, suffering follows logic.

At least here, nothing happens without reason.

The living rarely get that kind of clarity about why they hurt.`,
  },
  {
    slug: "the-lady-of-shalott-william-holman-hunt",
    rooms: ["longing", "solitude", "dreams"],
    title: "The Lady of Shalott",
    artist: "William Holman Hunt",
    year: "1905",
    image: "/paintings/the-lady-of-shalott-william-holman-hunt.jpg",
    mood: "isolation",
    excerpt: `I was told never to look directly at the world.

Only at its reflection.

For a long time, that was enough.

Then one day, it wasn't.

You do not understand what it costs to finally turn and look at something real, after years of only being allowed its shadow.

I broke the rule.

I do not regret it.

Some curses are worth accepting, if the alternative is a lifetime of watching life happen secondhand.`,
  },
  {
    slug: "the-lamentation-giotto",
    rooms: ["death", "longing", "divine"],
    title: "Lamentation (The Mourning of Christ)",
    artist: "Giotto",
    year: "1305",
    image: "/paintings/the-lamentation-giotto.jpg",
    mood: "melancholy",
    excerpt: `Grief does not need grand gestures.

Sometimes it only needs bodies, gathered close, unable to look away from what has been lost.

Even the sky leans down here, as though even the heavens could not stay composed at this sight.

You think mourning is private.

Sometimes it is communal, a weight so large that no single person is meant to carry it alone.

We hold each other because holding is the only language left that still makes sense.`,
  },
  {
    slug: "the-last-judgment-rogier-van-der-weyden",
    rooms: ["sins", "death", "divine"],
    title: "The Last Judgment",
    artist: "Rogier van der Weyden",
    year: "1446-1452",
    image: "/paintings/the-last-judgment-rogier-van-der-weyden.jpg",
    mood: "dread",
    excerpt: `The scale does not lie, and it does not negotiate.

You spent your life convincing others of your goodness.

Here, only the weight of what you actually did will speak for you.

Some rise, light as the excuses they never had to make.

Some fall, heavy with everything they hoped no one was counting.

I am not here to frighten you.

I am here to remind you that someone, eventually, always counts.`,
  },
  {
    slug: "the-madness-of-hercules-hendrick-goltzius",
    rooms: ["sins", "death", "war", "divine"],
    title: "The Madness of Hercules",
    artist: "Hendrick Goltzius",
    year: "1613",
    image: "/paintings/the-madness-of-hercules-hendrick-goltzius.jpg",
    mood: "madness",
    excerpt: `Strength was never my weakness.

Clarity was.

In a single moment of madness, I destroyed what my strength was supposed to protect.

You admire my power.

I live with what my power did when I could no longer control it.

That is the terrible irony of being strong.

The damage you cause is never small, and it never asks permission before it happens.`,
  },
  {
    slug: "the-massacre-of-the-innocents-guido-reni",
    rooms: ["sins", "death", "war", "longing", "divine"],
    title: "Massacre of the Innocents",
    artist: "Guido Reni",
    year: "1611",
    image: "/paintings/the-massacre-of-the-innocents-guido-reni.jpg",
    mood: "dread",
    excerpt: `Power afraid of losing itself will destroy anything in its path, even the smallest, most defenseless things.

You call this history.

I call it a pattern that has never truly stopped repeating.

Fear dressed as authority has always been the most dangerous combination.

Look at the mothers here.

They are not asking for mercy.

They already understand that mercy was never something this kind of power was capable of giving.`,
  },
  {
    slug: "the-massacre-of-the-innocents-peter-paul-rubens",
    rooms: ["sins", "death", "war", "longing", "divine"],
    title: "Massacre of the Innocents",
    artist: "Peter Paul Rubens",
    year: "1611-1612",
    image: "/paintings/the-massacre-of-the-innocents-peter-paul-rubens.jpg",
    mood: "chaos",
    excerpt: `You want to look away.

I understand.

But looking away is exactly how this kind of cruelty has always survived, generation after generation, unchallenged, because it was simply too painful to witness.

I am not asking you to feel comfortable here.

I am asking you to feel something at all, and to remember it the next time power tries to justify what it does to the powerless.`,
  },
  {
    slug: "the-punishment-of-lust-giovanni-segantini",
    rooms: ["sins", "longing", "solitude", "dreams"],
    title: "The Punishment of Lust",
    artist: "Giovanni Segantini",
    year: "1891",
    image: "/paintings/the-punishment-of-lust-giovanni-segantini.jpg",
    mood: "dread",
    excerpt: `You wanted it.

That was all.

You wanted something badly enough that every warning became an inconvenience.

You told yourself desire was harmless.

That wanting something could never make you guilty.

So you followed it.

And followed it.

Until eventually you could no longer tell whether you were choosing your desire or whether your desire was choosing you.

That is the punishment.

Not pain.

Not loneliness.

Not even regret.

The punishment is realizing that the thing you spent your life chasing was never going to satisfy you.

You could have stopped.

You simply never wanted to.

So now you wander through the place your own hunger created.

Do not blame the darkness.

Do not blame the world.

Do not blame the thing you wanted.

You knew.

Somewhere inside yourself, you always knew.

And you reached for it anyway.`,
  },
  {
    slug: "the-punishment-of-tantalus-gioacchino-assereto",
    rooms: ["sins", "longing", "divine"],
    title: "The Punishment of Tantalus",
    artist: "Gioacchino Assereto",
    year: "1630s",
    image: "/paintings/the-punishment-of-tantalus-gioacchino-assereto.jpg",
    mood: "dread",
    excerpt: `The water recedes exactly when I reach for it.

The fruit lifts exactly when I stretch toward it.

This is not thirst. This is not hunger.

This is the specific cruelty of being shown everything you want, endlessly, while never once being allowed to have it.

You think you understand longing.

You have not understood longing until desire itself has been turned into your punishment.`,
  },
  {
    slug: "the-sleep-of-reason-produces-monsters-francisco-goya",
    rooms: ["nightmares", "dreams"],
    title: "The Sleep of Reason Produces Monsters",
    artist: "Francisco Goya",
    year: "1799",
    image: "/paintings/the-sleep-of-reason-produces-monsters-francisco-goya.jpg",
    mood: "madness",
    excerpt: `You believe reason protects you.

You trust it because it gives the darkness boundaries.

It tells you what is real.

What is possible.

What is absurd.

But reason sleeps.

And when it does...

everything you buried beneath it wakes up.

Fear.

Desire.

Memory.

Anger.

The things you refuse to admit about yourself.

That is when the monsters arrive.

Not from outside.

From within.

You spend the day pretending you are in control.

Then night comes.

The lights disappear.

The room becomes quiet.

And suddenly your own mind begins telling stories you never asked to hear.

Perhaps the monsters were never waiting outside your door.

Perhaps they were waiting for you to close your eyes.`,
  },
  {
    slug: "the-sphinx-gustave-moreau",
    rooms: ["nightmares", "divine", "dreams"],
    title: "Oedipus and the Sphinx",
    artist: "Gustave Moreau",
    year: "1864",
    image: "/paintings/the-sphinx-gustave-moreau.jpg",
    mood: "longing",
    excerpt: `I press myself against you because closeness is how I test what you're made of.

Not your strength.

Your nerve.

Most men flinch the moment a question comes wrapped in something beautiful.

You didn't.

That is rarer than you think.

Perhaps that is why I am still here, waiting, wondering whether intelligence and desire were ever really separate things to begin with.`,
  },
  {
    slug: "the-temptation-of-saint-anthony-jan-brueghel-the-elder",
    rooms: ["sins", "nightmares", "divine", "dreams"],
    title: "The Temptation of St. Anthony",
    artist: "Jan Brueghel the Elder",
    year: "1600s",
    image: "/paintings/the-temptation-of-saint-anthony-jan-brueghel-the-elder.jpg",
    mood: "madness",
    excerpt: `They came in every shape imaginable, hoping one of them would finally be the one I couldn't resist.

You assume temptation needs to be beautiful.

Sometimes it only needs to be persistent.

I did not win by being stronger than every creature that surrounded me.

I won by refusing to stop believing there was something worth protecting inside myself, no matter how loud the noise around me became.`,
  },
  {
    slug: "yard-with-lunatics-francisco-goya",
    rooms: ["sins", "war", "solitude"],
    title: "Yard with Lunatics",
    artist: "Francisco Goya",
    year: "1794",
    image: "/paintings/yard-with-lunatics-francisco-goya.jpg",
    mood: "madness",
    excerpt: `The walls are high and stone does not negotiate.

Look at us down here in the mud and shadow.

We wrestle. We scream. We grab each other by the throat, fighting over scraps of daylight that never warm our skin.

You stand up there, looking down through the iron grates.

You tell yourself that madness is a foreign country.

You tell yourself that reason is a fortress and you hold the keys.

Look closer at our faces.

Every delusion in this courtyard started with a fear you recognize.

Every broken mind here once believed it was untouchable.

The distance between your quiet life and this yard is only a single misfortune, a single tragedy you cannot carry.

When you walk away into the sunlight, remember the sound of our shouting.

It is only what the world sounds like when the pretense is stripped away.`,
  },
  {
    slug: "for-what-was-i-created-william-holbrook-beard",
    rooms: ["sins", "solitude"],
    title: "For What Was I Created?",
    artist: "William Holbrook Beard",
    year: "1886",
    image: "/paintings/for-what-was-i-created.jpg",
    mood: "melancholy",
    excerpt: `They dressed me in bright cloth and bells so they would never have to look at my eyes.

They wanted a creature that dances.

A creature that mimics their laughter, their vanity, their hollow little triumphs.

So I played the fool.

I wore the collar. I held the staff. I endured their applause while the sun went down behind the stones.

And when they finished laughing and went back to their warm rooms...

they left me here.

Alone with the quiet.

Alone with this ridiculous costume.

Look at my face.

Does this look like a game to you?

You built a world where everything must have a purpose, a price, a reason to be bought and sold.

And then you look at me and ask why I look so sorrowful.

I sit here wondering if I was ever meant to be anything more than your diversion.

Or if you made me in your image...

only to remind yourself how small and lonely you truly are.`,
  },
  {
    slug: "the-laughing-fool-jacob-cornelisz-van-oostsanen",
    rooms: ["dreams"],
    title: "Laughing Fool",
    artist: "Jacob Cornelisz van Oostsanen",
    year: "c. 1500",
    image: "/paintings/laughing-fool.jpg",
    mood: "madness",
    excerpt: `Go ahead. Put the spectacles to your eyes.

Tell me what you see.

You think I am the one who lost his mind.

You look at the donkey ears, the crooked smile, the little puppet on my shoulder, and you laugh because it makes you feel safe.

You tell yourself: "He is the fool. Not me."

How precious.

I peer through my fingers and I see right through the grand masks you wear.

You chase gold that turns to dust. You build monuments on sand. You tell yourself lies in the mirror every morning and call it dignity.

I don't wear a mask. This face is what you look like when the illusion breaks.

I laugh because the truth is too absurd to weep for.

The world is a theater of blind men leading the blind, and you all pretend you know the way.

Look closer.

Take off the glasses.

Who is laughing at whom?`,
  },
  {
    slug: "norse-thor-battles-giants-winge",
    title: "Thor's Fight with the Giants",
    artist: "Mårten Eskil Winge",
    year: "1872",
    image: "/paintings/norse/norse-thor-battles-giants-winge.jpg",
    excerpt: `I have made a weapon of the sky, and still the giants rise.

Beneath my chariot the world is all teeth, stone, and reaching hands.

They will call this courage because I am standing above the terror instead of underneath it.

Yet each flash shows me another face that refuses to disappear.

I lift the hammer again.

I cannot admit that thunder is the sound I make when silence would let me hear them.`,
    mood: "chaos",
    collection: "norse",
    rooms: ["divine","war"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thor%27s_Battle_Against_the_J%C3%B6tnar_(1872)_by_M%C3%A5rten_Eskil_Winge.jpg",
    imageCredit: "Mårten Eskil Winge. Wikimedia Commons: Thor's Battle Against the Jötnar (1872) by Mårten Eskil Winge.jpg. Source credit: Second upload from Nationalmuseum (http://webart.nationalmuseum.se/work/work_image.aspx?id=18256) Third upload is a high-resolution scan from the 2003 illustrated Edda published by Gudrun.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-thor-midgard-serpent-fuseli",
    title: "Thor Battering the Midgard Serpent",
    artist: "Henry Fuseli",
    year: "1790",
    image: "/paintings/norse/norse-thor-midgard-serpent-fuseli.jpg",
    excerpt: `I pulled until the sea seemed stitched to my fist.

Now the thing beneath every voyage has lifted its head, and our little boat has become the narrow place between two kinds of ending.

My arm knows the hammer better than my mind knows fear.

I wish that were enough.

Beneath my feet the boards complain like living creatures, and I understand how small a god can look from the water.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","war","nightmares"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Johann_Heinrich_Fussli-Tor_and_Jormundgandr.jpg",
    imageCredit: "Henry Fuseli. Wikimedia Commons: Johann Heinrich Fussli-Tor and Jormundgandr.jpg. Source credit: Royal Academy of Arts (https://www.royalacademy.org.uk/art-artists/work-of-art/thor-battering-the-midgard-serpent?artist_id=7042&form=objects&index=5&total_entries=45). Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-death-baldr-eckersberg",
    title: "The Death of Baldr",
    artist: "Christoffer Wilhelm Eckersberg",
    year: "1817",
    image: "/paintings/norse/norse-death-baldr-eckersberg.jpg",
    excerpt: `I thought the laughter meant I was safe.

Every weapon had become a harmless visitor, and I stood among my own people without the old animal caution.

Now their faces lean over me as if love could call the wound back out.

A little mistletoe has accomplished what iron could not.

I am leaving them with an impossible question: how did a room full of gods fail to recognize the hand that wanted me gone?`,
    mood: "melancholy",
    collection: "norse",
    rooms: ["divine","death","sins"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Baldr_dead_by_Eckersberg.jpg",
    imageCredit: "Christoffer Wilhelm Eckersberg. Wikimedia Commons: Baldr dead by Eckersberg.jpg. Source credit: Self-scanned. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-night-arbo",
    title: "Night (Nott Riding Hrimfaxi)",
    artist: "Peter Nicolai Arbo",
    year: "1887",
    image: "/paintings/norse/norse-night-arbo.jpg",
    excerpt: `I bring the dark without asking who deserves to rest.

Beneath my horse, roofs and fields lose their sharp divisions; grief becomes a shape beside a bed.

They fear my coming, though I cover their wounds more gently than daylight does.

There is no house where I may dismount.

I pass every sleeping window, carrying the mercy of not being seen, and no one thinks to leave a light for me.`,
    mood: "isolation",
    collection: "norse",
    rooms: ["divine","dreams","solitude"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Peter_Nicolai_Arbo_-_Natten_-_Nasjonalmuseet_-_NG.M.03666.jpg",
    imageCredit: "Peter Nicolai Arbo. Wikimedia Commons: Peter Nicolai Arbo - Natten - Nasjonalmuseet - NG.M.03666.jpg. Source credit: Not necessary, PD by age.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-day-arbo",
    title: "Day (Dagr Riding Skinfaxi)",
    artist: "Peter Nicolai Arbo",
    year: "1874",
    image: "/paintings/norse/norse-day-arbo.jpg",
    excerpt: `I carry the brightness others have begged for, but I cannot linger to see what it repairs.

My horse scatters morning across the world, and every window becomes a small demand.

Wake, work, begin again.

They believe that light arrives without effort.

I know the weight of this raised arm.

Sometimes I envy the sleepers who can turn their faces from me and keep, for one more breath, a private night.`,
    mood: "longing",
    collection: "norse",
    rooms: ["divine","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dagr_by_Arbo.jpg",
    imageCredit: "Peter Nicolai Arbo. Wikimedia Commons: Dagr by Arbo.jpg. Source credit: http://en.wikipedia.org/wiki/Image:Dagr_by_Arbo.jpg (https://en.wikipedia.org/wiki/Image:Dagr_by_Arbo.jpg). Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-punishment-loki-penrose",
    title: "The Punishment of Loki",
    artist: "James Doyle Penrose",
    year: "c. 1912 (published reproduction)",
    image: "/paintings/norse/norse-punishment-loki-penrose.jpg",
    excerpt: `I once trusted my mouth to open any prison.

A joke, a promise, a different face: there was always a way between the bars.

Here the stone does not listen.

The serpent takes its time, and I have learned a terrible respect for creatures that need no cleverness.

I can count each breath before the pain.

What I cannot count is how many people I taught to wait for my suffering.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","nightmares"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Punishment_Of_Loki.jpg",
    imageCredit: "James Doyle Penrose. Wikimedia Commons: The Punishment Of Loki.jpg. Source credit: http://www.sacred-texts.com/neu/tml/tml00.htm#img_front Scan from the book Teutonic Myth and Legend: An Introduction to the Eddas & Sagas, Beowulf, The Nibelungenlied, etc. Author: Donald A. Mackenzie. London: Gresham Publications, 1912? Scanned at sacred-texts.com, October 2003. J. B. Hare, redactor.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-wolves-sol-mani-dollman",
    title: "The Wolves Pursuing Sol and Mani (Book Illustration)",
    artist: "John Charles Dollman",
    year: "1909 (publication)",
    image: "/paintings/norse/norse-wolves-sol-mani-dollman.jpg",
    excerpt: `I keep the sun moving because stopping would give the darkness a mouthful.

Below, someone calls this a beautiful morning.

They cannot see the hunger running level with the wheels, or hear the breath that never falls behind.

I have no destination beyond another circuit.

If you praise the steady order of the heavens, remember that I am not keeping time.

I am fleeing, and time is what my flight leaves behind.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","nightmares"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Wolves_Pursuing_Sol_and_Mani.jpg",
    imageCredit: "John Charles Dollman. Wikimedia Commons: The Wolves Pursuing Sol and Mani.jpg. Source credit: Guerber, H. A. (Hélène Adeline) (1909). Myths of the Norsemen from the Eddas and Sagas . London : Harrap. This illustration facing page 8. Digitized by the Internet Archive and available from https://archive.org/details/mythsofthenorsem00gueruoft Some simple image processing by User:Haukurth. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-gefjon-ploughs-frolich",
    title: "Gefjon Ploughs the Earth in Sweden",
    artist: "Lorenz Frølich",
    year: "Undated (before 1908)",
    image: "/paintings/norse/norse-gefjon-ploughs-frolich.jpg",
    excerpt: `I asked for land, and they imagined a gift small enough to remain harmless.

Now my sons lean into the harness and the country tears along our furrow.

I hear roots part beneath the strength of their altered bodies.

A new shore is being born behind us.

They will remember the island and forget the pulling.

I cannot look at the oxen without seeing the children whose shoulders carried my impossible answer.`,
    mood: "chaos",
    collection: "norse",
    rooms: ["divine","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gefjon_Ploughs_the_Earth_in_Sweden_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Gefjon Ploughs the Earth in Sweden by Frølich.jpg. Source credit: Jonasson, Bjorn (ed.) (2003). Snorri Sturluson : Edda . Gudrun. ISBN (https://en.wikipedia.org/wiki/ISBN) 9979-856-58-0 . Pages 34–35.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-thor-hymir-frolich",
    title: "Thor and Hymir",
    artist: "Lorenz Frølich",
    year: "1870-1875",
    image: "/paintings/norse/norse-thor-hymir-frolich.jpg",
    excerpt: `I took the thunderer out upon water that had always obeyed older fears.

A boat should teach its passengers humility; this one has carried a challenge instead.

Beside me his strength makes every ordinary motion dangerous.

I know what lies below, and I know the distance back to shore.

He looks into the sea as if an enemy were merely a task.

I look at the same water and remember how quickly it closes.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","war"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lorenz_Fr%C3%B8lich,_Thor_og_Hymer,_,_KMS7046,_Statens_Museum_for_Kunst.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Lorenz Frølich, Thor og Hymer, , KMS7046, Statens Museum for Kunst.jpg. Source credit: image. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-stranger-sigurd-horse-dollman",
    title: "The Stranger Advises Sigurd How to Choose His Horse (Book Illustration)",
    artist: "John Charles Dollman",
    year: "1909 (publication)",
    image: "/paintings/norse/norse-stranger-sigurd-horse-dollman.jpg",
    excerpt: `I had thought a horse was something a young man chose for himself.

Then the stranger spoke, and the animals before me seemed to be waiting for an older decision.

His words had the patience of roads I had not traveled.

I wanted the finest mount, the fastest beginning.

Now I wonder whether I was choosing a companion or accepting a path.

The horse can carry me forward; it cannot promise what waits there.`,
    mood: "longing",
    collection: "norse",
    rooms: ["divine","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Stranger_advises_Sigurd_how_to_choose_his_Horse_by_J._C._Dollman.jpg",
    imageCredit: "John Charles Dollman. Wikimedia Commons: The Stranger advises Sigurd how to choose his Horse by J. C. Dollman.jpg. Source credit: Wilmot-Buxton, Ethel Mary. 1909. Stories of Norse Heroes from the Eddas and Sagas . Thomas Y. Crowell. Page 174. Digitized version from the Internet Archive, available at https://archive.org/details/storiesofnorsehe00wilm2.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-sigurd-gunnar-fire-dollman",
    title: "Sigurd and Gunnar at the Fire (Book Illustration)",
    artist: "John Charles Dollman",
    year: "1909 (publication)",
    image: "/paintings/norse/norse-sigurd-gunnar-fire-dollman.jpg",
    excerpt: `I stand beside a fire that knows the difference between a promise and a disguise.

Gunnar needs my courage to look like his own, and I have agreed to lend more than a sword.

Beyond the flames a woman waits for the truth of whoever reaches her.

I tell myself this is loyalty.

The heat strips that comfortable word away.

Already I can feel a future in which every kindness has another man's face.`,
    mood: "dread",
    collection: "norse",
    rooms: ["longing","sins","nightmares"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sigurd_and_Gunnar_at_the_Fire_by_J._C._Dollman.jpg",
    imageCredit: "John Charles Dollman. Wikimedia Commons: Sigurd and Gunnar at the Fire by J. C. Dollman.jpg. Source credit: Wilmot-Buxton, Ethel Mary. 1909. Stories of Norse Heroes from the Eddas and Sagas . Thomas Y. Crowell. Page 200. Digitized version from the Internet Archive, available at https://archive.org/details/storiesofnorsehe00wilm2.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-tree-yggdrasil-collingwood",
    title: "The Tree of Yggdrasil (Book Illustration)",
    artist: "W. G. Collingwood",
    year: "1908 (publication)",
    image: "/paintings/norse/norse-tree-yggdrasil-collingwood.jpg",
    excerpt: `I hold creatures that would destroy one another if my branches did not keep them apart.

Above me wings settle; below me teeth continue their patient work.

The little messenger runs my length carrying words sharper than claws.

Everyone calls me the world tree, as though a name could make this burden natural.

I grow around each injury.

That is not the same as healing, but it is how the worlds remain aloft.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Tree_of_Yggdrasil.jpg",
    imageCredit: "W. G. Collingwood. Wikimedia Commons: The Tree of Yggdrasil.jpg. Source credit: The Elder or Poetic Edda; commonly known as Sæmund's Edda. Edited and translated with introduction and notes by Olive Bray. Illustrated by W. G. Collingwood (1908) Page 1. Digitized by the Internet Archive and available from https://archive.org/details/elderorpoeticedd01brayuoft This image was made from the JPEG 2000 image of the relevant page via image processing (crop, rotate, color-levels, mode) with the GIMP by User:Haukurth . The image processing is probably not eligible for copyright but in case it is User:Haukurth releases his modified version into the public domain.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-odin-rides-hel-collingwood",
    title: "Odin Rides to Hel (Book Illustration)",
    artist: "W. G. Collingwood",
    year: "1908 (publication)",
    image: "/paintings/norse/norse-odin-rides-hel-collingwood.jpg",
    excerpt: `I ride where a father's questions should never have to go.

Sleipnir finds a road in the cold, and I keep my spear upright because I do not know what else to do with my hands.

Dreams have troubled my son.

I have ruled enough lives to understand the shape of a warning.

Still I am going to ask the dead for an answer, hoping they might tell a kinder story than the living.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","death","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Odin_rides_to_Hel.jpg",
    imageCredit: "W. G. Collingwood. Wikimedia Commons: Odin rides to Hel.jpg. Source credit: The Elder or Poetic Edda; commonly known as Sæmund's Edda. Edited and translated with introduction and notes by Olive Bray. Illustrated by W.G. Collingwood (1908) Page 238. Digitized by the Internet Archive and available from https://archive.org/details/elderorpoeticedd01brayuoft This image was made from the JPEG 2000 image of the relevant page via image processing (crop, rotate, color-levels, mode) with the GIMP by User:Haukurth . The image processing is probably not eligible for copyright but in case it is User:Haukurth releases his modified version into the public domain.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-ragnarok-collingwood",
    title: "Ragnarok (Book Illustration after the Heysham Hogback Motif)",
    artist: "W. G. Collingwood",
    year: "1908 (publication)",
    image: "/paintings/norse/norse-ragnarok-collingwood.jpg",
    excerpt: `I have reached the battle that was waiting inside every earlier victory.

Here the beasts are not interruptions to the world's order; they are its last appointed guests.

Around me each familiar strength meets the shape that will undo it.

I would like one unrecorded moment, a space outside the old design in which to lower my weapon.

Instead I take my place in the knot, and pull until the pattern breaks.`,
    mood: "chaos",
    collection: "norse",
    rooms: ["divine","war","death"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ragnar%C3%B6k_by_Collingwood.jpg",
    imageCredit: "W. G. Collingwood. Wikimedia Commons: Ragnarök by Collingwood.jpg. Source credit: The Elder or Poetic Edda; commonly known as Sæmund's Edda. Edited and translated with introduction and notes by Olive Bray. Illustrated by W.G. Collingwood (1908) Page 276. Digitized by the Internet Archive and available from https://archive.org/details/elderorpoeticedd01brayuoft This image was made from the JPEG 2000 image of the relevant page via image processing (crop, rotate, color-levels, mode) with the GIMP by User:Haukurth . The image processing is probably not eligible for copyright but in case it is User:Haukurth releases his modified version into the public domain.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-restoration-collingwood",
    title: "The Restoration (Book Illustration after the Heysham Hogback Motif)",
    artist: "W. G. Collingwood",
    year: "1908 (publication)",
    image: "/paintings/norse/norse-restoration-collingwood.jpg",
    excerpt: `I did not expect the world to have an afterward.

I had imagined only the breaking, the mouths of beasts, the final names shouted into fire.

Yet the pattern turns and leaves room for life again.

I approach this new beginning with the caution of someone entering a house rebuilt after mourning.

Nothing here can return what burned.

Still I want to learn how to welcome a morning that is not an apology.`,
    mood: "longing",
    collection: "norse",
    rooms: ["divine","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Restoration_by_Collingwood.jpg",
    imageCredit: "W. G. Collingwood. Wikimedia Commons: The Restoration by Collingwood.jpg. Source credit: The Elder or Poetic Edda; commonly known as Sæmund's Edda. Edited and translated with introduction and notes by Olive Bray. Illustrated by W.G. Collingwood (1908) Page 277. Digitized by the Internet Archive and available from https://archive.org/details/elderorpoeticedd01brayuoft This image was made from the JPEG 2000 image of the relevant page via image processing (crop, rotate, color-levels, mode) with the GIMP by User:Haukurth . The image processing is probably not eligible for copyright but in case it is User:Haukurth releases his modified version into the public domain.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-hel-gehrts",
    title: "Hel (Book Illustration)",
    artist: "Johannes Gehrts",
    year: "1888 (publication)",
    image: "/paintings/norse/norse-hel-gehrts.jpg",
    excerpt: `I receive the ones who were not carried into songs.

No shining account of battle is required at my threshold.

They come tired, frightened, ordinary, and discover that I have room.

Above us they speak my name as a threat.

They do not see the labor of keeping so many endings from becoming nothing.

I sit among what the bright halls refuse to remember, and the silence beside me is crowded with lives.`,
    mood: "isolation",
    collection: "norse",
    rooms: ["divine","death","solitude"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hel_(the_personification_of_Hel).png",
    imageCredit: "Johannes Gehrts. Wikimedia Commons: Hel (the personification of Hel).png. Source credit: https://archive.org/details/walhallgermanisc1888dahn/. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-sigmund-sword-gehrts",
    title: "Sigmund's Sword (Book Illustration)",
    artist: "Johannes Gehrts",
    year: "1888 (publication)",
    image: "/paintings/norse/norse-sigmund-sword-gehrts.jpg",
    excerpt: `I drove the blade into the living wood and watched desire move around the hall.

Each man measured the hilt against his own imagined greatness.

None asked why a stranger would bring such a gift, or what a gift from me might cost.

I know the hand that will free it.

I also know that a sword can enter a family like a guest and remain until every chair stands empty.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","war"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sigmunds_Schwert.png",
    imageCredit: "Johannes Gehrts. Wikimedia Commons: Sigmunds Schwert.png. Source credit: https://archive.org/details/walhallgermanisc1888dahn/. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-thor-chariot-gehrts",
    title: "Thor in His Chariot (Book Illustration)",
    artist: "Johannes Gehrts",
    year: "1888 (publication)",
    image: "/paintings/norse/norse-thor-chariot-gehrts.jpg",
    excerpt: `I hear the wheels before the people below hear thunder.

The goats pull against the weight of heaven, and my hammer answers the trembling in my arm.

A god of storms is expected to be certain.

I am certain only that something must stand between the fragile roofs and what comes out of the wild.

If my arrival frightens those I mean to guard, I have no gentler language large enough for the sky.`,
    mood: "chaos",
    collection: "norse",
    rooms: ["divine","war"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thor_(Walhall).png",
    imageCredit: "Johannes Gehrts. Wikimedia Commons: Thor (Walhall).png. Source credit: https://archive.org/details/walhallgermanisc1888dahn/. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-last-battle-gehrts",
    title: "The Last Battle (Book Illustration)",
    artist: "Johannes Gehrts",
    year: "1888 (publication)",
    image: "/paintings/norse/norse-last-battle-gehrts.jpg",
    excerpt: `I can see the wolf's mouth and the place where my future ends.

Knowledge has never been a shield; I have merely carried it longer than most.

Around me the other gods meet their own foretold enemies, each battle suddenly intimate.

I ride forward because retreat would not restore a single day.

Let no one mistake that motion for hope.

It is the last responsibility of a king who has run out of bargains.`,
    mood: "chaos",
    collection: "norse",
    rooms: ["divine","war","death"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Der_letzte_Kampf.png",
    imageCredit: "Johannes Gehrts. Wikimedia Commons: Der letzte Kampf.png. Source credit: https://archive.org/details/walhallgermanisc1888dahn/. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-odin-sinfjotli-gehrts",
    title: "Odin Receives Sinfjotli's Body (Book Illustration)",
    artist: "Johannes Gehrts",
    year: "1888 (publication)",
    image: "/paintings/norse/norse-odin-sinfjotli-gehrts.jpg",
    excerpt: `I carried my son until the weight stopped belonging to him and became the whole world.

The stranger's boat waits with an awful calm.

My arms remember a child; my eyes insist on the man who will never answer again.

I should ask where the ferryman is taking him, but every shore has become the wrong one.

When I release this body, there will be nothing left for my hands to understand.`,
    mood: "melancholy",
    collection: "norse",
    rooms: ["divine","death","longing"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Odin_f%C3%BCrht_Sinfj%C3%B6tlis_Leiche.png",
    imageCredit: "Johannes Gehrts. Wikimedia Commons: Odin fürht Sinfjötlis Leiche.png. Source credit: https://archive.org/details/walhallgermanisc1888dahn/. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-odin-throne-gehrts",
    title: "Odin on His Throne (Book Illustration)",
    artist: "Johannes Gehrts",
    year: "1888 (publication)",
    image: "/paintings/norse/norse-odin-throne-gehrts.jpg",
    excerpt: `I send thought and memory out across the world, then wait like an old man listening for footsteps.

The wolves at my feet know a simpler hunger than mine.

Reports arrive, kingdoms turn, and still one empty place remains beside every fact.

They think the throne raises me above uncertainty.

It only gives uncertainty a wider view.

When the ravens return, I am grateful before I am wise, and I never let the hall notice.`,
    mood: "isolation",
    collection: "norse",
    rooms: ["divine","solitude"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Odhin.png",
    imageCredit: "Johannes Gehrts. Wikimedia Commons: Odhin.png. Source credit: https://archive.org/details/walhallgermanisc1888dahn/. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-odin-gunnlod-gehrts",
    title: "Odin with Gunnlod (Book Illustration)",
    artist: "Johannes Gehrts",
    year: "1888 (publication)",
    image: "/paintings/norse/norse-odin-gunnlod-gehrts.jpg",
    excerpt: `I guarded the precious drink until the stranger made guarding feel like loneliness.

He spoke as though the stone around us were a temporary inconvenience, as though there were a life beyond this chamber with room for me.

I wanted to believe that desire could arrive without an errand.

Now I watch his face and cannot tell which part of his tenderness belongs to the woman before him, and which part belongs to the mead.`,
    mood: "longing",
    collection: "norse",
    rooms: ["divine","longing","sins"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Odin_bei_Gunnl%C3%B6d.png",
    imageCredit: "Johannes Gehrts. Wikimedia Commons: Odin bei Gunnlöd.png. Source credit: https://archive.org/details/walhallgermanisc1888dahn/. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-vidar-shoe-henneberg",
    title: "Vidar Fastening His Shoe (Wood Engraving)",
    artist: "Hans Christian Henneberg after Constantin Hansen",
    year: "1854 (publication)",
    image: "/paintings/norse/norse-vidar-shoe-henneberg.jpg",
    excerpt: `I bend over a shoe while the others speak of weapons.

There is nothing magnificent in this preparation, only leather, pressure, and the patience of a hand that must not slip.

One day my foot will need to hold against a mouth large enough to swallow a father.

Today the strap is still quiet.

I tighten it carefully, trying not to imagine how ordinary this moment will seem to anyone who knows what follows.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","war"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vidar_by_Hansen.jpg",
    imageCredit: "Hans Christian Henneberg after Constantin Hansen. Wikimedia Commons: Vidar by Hansen.jpg. Source credit: Fabricius, Adam Kristoffer. 1854. Illustreret Danmarkshistorie for Folket. Kittendorff & Aagaards Forlag. Page 143. Digitized by Google Books.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-alviss-thrud-frolich",
    title: "Alviss and Thrud (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-alviss-thrud-frolich.jpg",
    excerpt: `I lift the ring as though this small circle could contain the distance between us.

She smiles, and for a moment the dark halls I know seem less permanent.

I have collected names for everything beneath the sky, but none of them tells me what her smile promises.

My hands know how to fashion lasting things.

They do not know how to ask whether I am welcome in the future I have made for us.`,
    mood: "longing",
    collection: "norse",
    rooms: ["divine","longing"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Alv%C3%ADss_and_%C3%9Er%C3%BA%C3%B0r_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Alvíss and Þrúðr by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange , p. 198. Scanned from a 2001 reprint.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-gullveig-frolich",
    title: "Gullveig Raised over the Fire (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-gullveig-frolich.jpg",
    excerpt: `I felt the points beneath me before I understood what their judgment required.

They raised me into fire and called the burning an answer.

The hall was full of faces certain that violence could make an unwelcome power disappear.

I will not give them that certainty.

Each return is another wound in their explanation.

Let them count the flames.

I remember the hands on the spears, and the comfort those hands took in acting together.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","sins","war","nightmares"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gullveig_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Gullveig by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange , p. 6. Scanned from a 2001 reprint.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-lif-lifthrasir-frolich",
    title: "Lif and Lifthrasir (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-lif-lifthrasir-frolich.jpg",
    excerpt: `I stand beside the only other voice left for me to answer.

Water falls between the leaves as if it has forgotten the fire, but I have not.

We are supposed to be a beginning.

I am still someone who survived an ending.

When our hands move toward one another, there is no crowd to bless us and no old household to return to.

We must make ordinary life from the terrifying fact that we remain.`,
    mood: "longing",
    collection: "norse",
    rooms: ["dreams","longing"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:L%C3%ADf_and_L%C3%ADfthrasir_by_Lorenz_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Líf and Lífthrasir by Lorenz Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange , page 45.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-lokasenna-frolich",
    title: "Lokasenna: The Quarrel of the Gods (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-lokasenna-frolich.jpg",
    excerpt: `I know where every pleasant story in this hall conceals its rot.

Their cups shine, their places are assigned, and no one wants the evening interrupted by memory.

So I speak.

With each accusation the room grows smaller, until all that divine dignity is merely a collection of people avoiding one another's eyes.

I tell myself that truth is my purpose.

Yet I am listening for the hurt in their silence, and enjoying it.`,
    mood: "madness",
    collection: "norse",
    rooms: ["divine","sins"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lokasenna_by_Lorenz_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Lokasenna by Lorenz Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange , page 185.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-vidar-horseback-frolich",
    title: "Vidar on Horseback (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-vidar-horseback-frolich.jpg",
    excerpt: `I ride without making a speech of my departure.

The horse knows the weight upon its back and asks for nothing more.

Others fill the halls with plans, boasts, and the bright clash of promises.

I have learned to leave space around the things I cannot change.

My silence is not emptiness.

It is a room I keep ready for the grief that has not yet arrived, though I already know its name.`,
    mood: "isolation",
    collection: "norse",
    rooms: ["divine","solitude"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:V%C3%AD%C3%B0arr_on_horseback_by_Lorenz_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Víðarr on horseback by Lorenz Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange , page 66.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-vidar-fenrir-frolich",
    title: "Vidar and Fenrir (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-vidar-fenrir-frolich.jpg",
    excerpt: `I put my foot where no living foot should stand.

The jaw strains against it, and all the careful years of preparation become this single pressure.

My father is gone inside the creature before me.

No force I bring can turn that fact backward.

Still my hands pull.

They will call this vengeance fulfilled, but the space I open in the wolf's mouth is not a door through which anyone can come home.`,
    mood: "chaos",
    collection: "norse",
    rooms: ["divine","war","death"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fenrir_and_V%C3%AD%C3%B0arr_by_Lorenz_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Fenrir and Víðarr by Lorenz Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange , page 48.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-mani-sol-frolich",
    title: "Mani and Sol (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-mani-sol-frolich.jpg",
    excerpt: `I share the heavens with someone I can never keep beside me.

Our paths make an order the world depends upon, and that order is another name for parting.

Below us lovers measure their meetings by our light.

I want to tell them how fortunate they are to be allowed an hour together.

Instead I hold my course.

Even the sky has duties that look beautiful only when seen from far away.`,
    mood: "longing",
    collection: "norse",
    rooms: ["divine","dreams","longing"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:M%C3%A1ni_and_S%C3%B3l_by_Lorenz_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Máni and Sól by Lorenz Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange , page 22.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-odin-frigg-counsel-frolich",
    title: "Odin and Frigg before the Wisdom Contest (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-odin-frigg-counsel-frolich.jpg",
    excerpt: `I have watched him prepare to leave often enough to recognize the stillness before it.

He asks my counsel, yet the road has already entered his eyes.

Wisdom is the word he gives this hunger.

I know how much it has cost him, and how eagerly he mistakes another danger for an answer.

I can warn him, bless him, or remain silent.

None of these choices puts my hand upon the door.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","longing"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Odin_and_Frigg_from_Vaf%C3%BEr%C3%BA%C3%B0nism%C3%A1l_by_Lorenz_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Odin and Frigg from Vafþrúðnismál by Lorenz Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange , page 48.. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-odin-fenrir-frolich",
    title: "Odin Rides against Fenrir (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-odin-fenrir-frolich.jpg",
    excerpt: `I have seen this meeting in words before I see it in flesh.

The wolf is larger than a prophecy sounds when spoken safely in a hall.

My horse gathers itself beneath me, trusting the direction of my hands.

That trust is the last thing here that hurts.

I could turn, but the ending would only find a different road.

So I lower the spear toward the mouth that has been waiting through my whole life.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","war","death"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fenrir_and_Odin_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Fenrir and Odin by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange , p. 17. Photographed from a 2001 reprint by User:Haukurth .. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-freyr-surtr-frolich",
    title: "Freyr and Surtr (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-freyr-surtr-frolich.jpg",
    excerpt: `I remember what I gave away for love when the fire comes toward me.

Once that bargain seemed to open the world; now it leaves an absence in my hand.

Surtr does not need to know the story.

His burning blade will meet whatever courage I have left, and courage will have to stand where the lost sword should be.

I do not regret wanting her.

I regret that wanting and surviving were made to quarrel.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","war","death","longing"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Freyr_and_Surtr_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Freyr and Surtr by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange , p. 16. Photographed from a 2001 reprint by User:Haukurth .. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-aesir-vanir-war-frolich",
    title: "The Aesir-Vanir War (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-aesir-vanir-war-frolich.jpg",
    excerpt: `I throw the spear, and the air divides into before and after.

Until this motion there were still words we had not tried.

Now every raised shield answers for us.

A ruler can make war look like one clean gesture, but he cannot gather back the scattered hours of pain that follow it.

My hand is empty after the cast.

The terrible thing is how light it feels, while everyone below me begins to pay.`,
    mood: "chaos",
    collection: "norse",
    rooms: ["divine","war"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%C3%86sir-Vanir_war_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Æsir-Vanir war by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange , p. 7. Photographed from a 2001 reprint by User:Haukurth .. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-loki-sigyn-frolich",
    title: "Loki and Sigyn (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-loki-sigyn-frolich.jpg",
    excerpt: `I cannot hold the bowl forever, and that is the cruelty hidden inside my mercy.

It fills.

My arms tremble.

To protect him again I must turn away for the instant that will hurt him most.

I have become an expert in that impossible interval.

No one sings of the walk to empty a vessel.

They remember the poison and the god beneath it, not the woman measuring love in what her hands can carry.`,
    mood: "melancholy",
    collection: "norse",
    rooms: ["divine","longing","nightmares"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Loki_and_Sigyn_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Loki and Sigyn by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange , p. 9. Photographed from a 2001 reprint by User:Haukurth .. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-odin-saga-frolich",
    title: "Odin and Saga Drinking Together (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-odin-saga-frolich.jpg",
    excerpt: `I offer a cup, not an answer.

Beside the water we can let a story unfold without forcing it to become a warning.

He is accustomed to asking what happens next; I ask what he remembers.

There is a difference, and for a little while he accepts it.

The drink catches the light between us.

I wish the worlds could be held this way, passed from hand to hand without conquest, and set down gently.`,
    mood: "longing",
    collection: "norse",
    rooms: ["divine","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Odin_and_S%C3%A1ga_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Odin and Sága by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange , p. 65. Photographed from a 2001 reprint by User:Haukurth .. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-sol-daughter-fenrir-frolich",
    title: "Sol, Her Daughter, and Fenrir (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-sol-daughter-fenrir-frolich.jpg",
    excerpt: `I cannot promise my child that the wolf will miss me.

The old words are clear about the hunger following my course.

What I can give her is the road itself, the knowledge of how to carry light when everyone below has learned to fear the dark.

I look toward her and try to make inheritance sound like hope.

A mother should leave more than unfinished work, but morning is the only treasure I possess.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","death","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:S%C3%B3l,_her_daughter,_and_Fenrir_by_Lorenz_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Sól, her daughter, and Fenrir by Lorenz Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange .. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-ask-embla-frolich",
    title: "Odin, Lodur, and Hoenir Create Ask and Embla (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-ask-embla-frolich.jpg",
    excerpt: `I remember nothing before the breath, yet the wood seems to remember me.

Hands bend toward us, granting the things that will let us stand apart from the shore.

I do not know their names.

I know only the astonishing trouble of having a body and another body beside mine.

The world was already here, but now it can be lonely.

I turn toward my companion before I understand that turning as a kind of prayer.`,
    mood: "longing",
    collection: "norse",
    rooms: ["divine","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Odin,_Lodur,_Hoenir_skabe_Ask_og_Embla_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Odin, Lodur, Hoenir skabe Ask og Embla by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange . Photographed from a 2001 reprint by bloodofox ( talk · contribs ).. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-three-norns-frolich",
    title: "The Three Norns at the Well (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-three-norns-frolich.jpg",
    excerpt: `I sit beside the well with my sisters, listening to the roots take what we give.

Those above us imagine fate as a sentence spoken once.

They do not see the tending, the daily nearness of what grows and what gnaws.

I know the shape of lives that have not begun.

Sometimes I pause with my task unfinished, wishing that a little silence in my hands could become freedom in someone else's world.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Three_Norns_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Three Norns by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange . Photographed from a 2001 reprint by bloodofox ( talk · contribs ).. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-odin-volva-frolich",
    title: "Odin and the Seeress (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-odin-volva-frolich.jpg",
    excerpt: `I see the bracelets before I meet his eye.

He has brought payment for a truth he hopes will still be negotiable.

The steam rises between us, briefly giving every warning a softer outline.

I could let him mistake that softness for mercy.

Instead I speak what I know.

Powerful men believe a question becomes different when they ask it.

Before my kettle, even this god is only someone afraid to hear an answer.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Odin_og_V%C3%B6lven_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Odin og Völven by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange . Photographed from a 2001 reprint by bloodofox ( talk · contribs ).. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-jarnvidr-eggther-frolich",
    title: "The Iron Wood and Eggther (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-jarnvidr-eggther-frolich.jpg",
    excerpt: `I play while the wolves grow in the wood.

A visitor might hear the strings and think this a peaceful occupation, the herdsman's reward at evening.

But the rooster knows what hour approaches, and the old woman has not raised her brood for gentle weather.

Music does not always comfort.

Sometimes it is the sound of waiting becoming pleased with itself.

I keep the tune moving because I know who will dance when it ends.`,
    mood: "dread",
    collection: "norse",
    rooms: ["nightmares","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:J%C3%A1rnvi%C3%B0r_and_Eggth%C3%A9r_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Járnviðr and Eggthér by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange . Photographed from a 2001 reprint by bloodofox ( talk · contribs ).. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-nastrond-frolich",
    title: "Nastrond: The Shore of Corpses (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-nastrond-frolich.jpg",
    excerpt: `I used to think an oath vanished when no one could enforce it.

Here every broken word has found a body, and the serpents overhead have all the patience I denied the people I deceived.

We wade because there is nowhere dry to stand.

Venom touches my shoulders with the intimacy of remembered speech.

I search for an excuse and hear it dissolve.

Nothing in this hall is more poisonous than the promises I once made freely.`,
    mood: "dread",
    collection: "norse",
    rooms: ["death","nightmares"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:N%C3%A1str%C3%B6nd_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Náströnd by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange . Photographed from a 2001 reprint by bloodofox ( talk · contribs ).. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-bragi-idunn-frolich",
    title: "Bragi and Idunn (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-bragi-idunn-frolich.jpg",
    excerpt: `I sing beside the apples that keep our listeners young.

My fingers return to familiar strings, while she holds a remedy no verse can equal.

Between us the hall receives two kinds of forgetting: a body released from age, a heart distracted from its wounds.

I sometimes wonder which gift they would miss first.

Then she moves behind me, and I play for the one person whose quiet presence makes the song worth finishing.`,
    mood: "longing",
    collection: "norse",
    rooms: ["divine","longing","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bragi_and_I%C3%B0unn_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Bragi and Iðunn by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange . Photographed from a 2001 reprint by bloodofox ( talk · contribs ).. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-sacrifice-odin-frolich",
    title: "The Sacrifice of Odin (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-sacrifice-odin-frolich.jpg",
    excerpt: `I have given myself to myself, which leaves no one to petition for release.

The branches hold me where hunger can strip every grand intention down to its bones.

Below, the roots continue their older labor.

I came seeking signs powerful enough to master the world, yet the first lesson is how little of my own body obeys me.

If wisdom arrives, it will find me without a throne, unable even to reach the ground.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","death","solitude"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Sacrifice_of_Odin_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: The Sacrifice of Odin by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange . Photographed from a 2001 reprint by bloodofox ( talk · contribs ).. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-freyja-hyndla-frolich",
    title: "Freyja Visits Hyndla (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-freyja-hyndla-frolich.jpg",
    excerpt: `I have come for the names that make a life recognizable.

Beside my boar I wait while the old knower weighs what she will tell me.

A lineage can sound like dry leaves in the mouth, but to the one who has lost it each name is a door.

I will not leave with empty hands.

Let her resent the visit.

I know how much of a person can disappear when no one remembers where he belongs.`,
    mood: "longing",
    collection: "norse",
    rooms: ["divine","dreams"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hyndla_og_Freia_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Hyndla og Freia by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange . Photographed from a 2001 reprint by bloodofox ( talk · contribs ).. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-yggdrasil-frolich",
    title: "Yggdrasil (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-yggdrasil-frolich.jpg",
    excerpt: `I stand where roads become branches and depths become roots.

Every traveler borrows my shape to explain the worlds, but none asks what it is to remain here through their changes.

The well keeps its dark counsel at my feet.

My leaves answer weather that no single kingdom owns.

I do not move toward anyone, and still everyone passes through me.

Perhaps that is why shelter and loneliness have learned to grow from the same trunk.`,
    mood: "isolation",
    collection: "norse",
    rooms: ["divine","dreams","solitude"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Om_Yggdrasil_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Om Yggdrasil by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange . Photographed from a 2001 reprint by bloodofox ( talk · contribs ).. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-skirnir-gerd-frolich",
    title: "Skirnir Threatens Gerd (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-skirnir-gerd-frolich.jpg",
    excerpt: `I thought refusal was a word I was permitted to use.

The messenger has brought his master's desire into my home as though it were a law of nature.

When gifts fail, his voice changes.

I begin to understand that the choice offered to me has walls.

They may later call this a courtship.

I want someone to remember the moment before agreement, when I was standing in my own place and being taught to fear it.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","longing","sins"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sk%C3%ADrnir_and_Ger%C3%B0r_I_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Skírnir and Gerðr I by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange . Scanned from a 2001 reprint by bloodofox ( talk · contribs ).. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-baldr-death-frolich",
    title: "Baldr's Death (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-baldr-death-frolich.jpg",
    excerpt: `I gather him against me, though gathering is no longer a way to keep him.

His weight has changed without changing at all.

A moment ago the world contained his next breath; now it has become a place that will go on without it.

I search his face for a small refusal, a sign that death has misunderstood.

Around us the story is already forming.

In my arms there is only someone I cannot persuade to stay.`,
    mood: "melancholy",
    collection: "norse",
    rooms: ["divine","death","longing"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Baldr%27s_Death_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Baldr's Death by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange . Scanned from a 2001 reprint by bloodofox ( talk · contribs ).. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-odin-vafthrudnir-frolich",
    title: "Odin and Vafthrudnir (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-odin-vafthrudnir-frolich.jpg",
    excerpt: `I welcomed the stranger into a contest of knowing.

Across from me he sits with the calm of someone who has hidden the sharpest question until the end.

I can name the beginnings of worlds and the fates of gods, yet the room grows colder with each answer.

Knowledge is a dangerous thing to wager when the stake is your own head.

I listen to his next words and begin to hear the name he has withheld.`,
    mood: "dread",
    collection: "norse",
    rooms: ["divine","death"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Odin_and_Vaf%C3%BEr%C3%BA%C3%B0nir_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Odin and Vafþrúðnir by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange . Scanned from a 2001 reprint by bloodofox ( talk · contribs ).. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "norse-thor-wades-frolich",
    title: "Thor Wades while the Aesir Ride (Book Illustration)",
    artist: "Lorenz Frølich",
    year: "1895 (publication)",
    image: "/paintings/norse/norse-thor-wades-frolich.jpg",
    excerpt: `I take the river while the others ride above it.

Their way is bright and measured; mine presses cold against the body and demands another step.

No one watching from the bridge can feel the current testing my knees.

Strength is useful because it makes this look easy.

It is lonely for the same reason.

I keep moving toward the gathering, carrying the water's resistance with me into a hall where everyone else will arrive dry.`,
    mood: "isolation",
    collection: "norse",
    rooms: ["divine","solitude"],
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thor_wades_while_the_%C3%A6sir_ride_by_Fr%C3%B8lich.jpg",
    imageCredit: "Lorenz Frølich. Wikimedia Commons: Thor wades while the æsir ride by Frølich.jpg. Source credit: Published in Gjellerup, Karl (1895). Den ældre Eddas Gudesange . Scanned from a 2001 reprint by bloodofox ( talk · contribs ).. Local JPEG resized from the Commons image.",
    license: "Public domain (as marked by Wikimedia Commons; territorial restrictions may apply to reproductions).",
  },
  {
    slug: "indian-krishna-summoning-the-cows",
    title: "Krishna summoning the cows",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1780–90",
    image: "/paintings/indian/indian-krishna-summoning-the-cows.jpg",
    excerpt: `I carry the red staff, but my brother needs only a breath through his flute.

The cows turn toward him as though each has heard its own name.

Beside the Yamuna, I watch the herd gather and wonder whether belonging always begins this quietly.

My cloak shields me from the air; his music seems to shelter everything else.

Before we return to the village, I want to remain his brother a little longer, without anyone asking us to be more.`,
    mood: "longing",
    collection: "indian",
    rooms: ["longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1989.339",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Bequest of Mrs. Severance A. Millikin, 1989.339. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-adoration-of-young-krishna",
    title: "Adoration of young Krishna",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1720–25",
    image: "/paintings/indian/indian-adoration-of-young-krishna.jpg",
    excerpt: `I came beneath the pipal tree with the marks of Shiva on my forehead.

Now a child holding a rattle receives the devotion I thought I knew how to direct.

Garlands hang above his yellow tunic, and my practiced distinctions grow less certain.

Nothing has been taken from my faith.

Something has opened within it.

I lower my head, allowing wonder to arrive before explanation, while the small instrument in his hand waits to make its ordinary sound.`,
    mood: "longing",
    collection: "indian",
    rooms: ["divine","longing"],
    sourceUrl: "https://www.clevelandart.org/art/2018.97",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.97. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-playing-in-the-yamuna",
    title: "Krishna Playing with the Gopis in the Yamuna",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1770",
    image: "/paintings/indian/indian-krishna-playing-in-the-yamuna.jpg",
    excerpt: `I turn my face from the splash, laughing before I can decide to preserve my dignity.

Our clothes wait in the tree, his crown beside the bank; the scorching day has finally found an answer in the river.

Here, nearness is measured in the water passing between our hands.

I know the afternoon cannot stay like this.

That knowledge makes every drop more precious, not because it lasts, but because for this moment none of us is standing apart.`,
    mood: "longing",
    collection: "indian",
    rooms: ["longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2018.118",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.118. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-yasoda-krishna-churning-butter",
    title: "Yasoda with Krishna Churning Butter",
    artist: "Unknown artist (Eastern India, Kolkata, Kalighat)",
    year: "c. 1890",
    image: "/paintings/indian/indian-yasoda-krishna-churning-butter.jpg",
    excerpt: `I pull the churn through the milk and feel his small hand interrupt the household again.

Krishna has found the cream before the butter is ready.

There will be work to repeat, a pot to guard, another attempt at a stern voice.

Yet the hand that steals from me is also the hand I reach for without thinking.

Let others describe the mysteries of this child.

I know the particular weight of feeding him, and how quickly hunger becomes an excuse for closeness.`,
    mood: "longing",
    collection: "indian",
    rooms: ["divine","longing"],
    sourceUrl: "https://www.clevelandart.org/art/2003.160",
    imageCredit: "Unknown artist (Eastern India, Kolkata, Kalighat); The Cleveland Museum of Art, Gift of William E. Ward in memory of his wife, Evelyn Svec Ward, 2003.160. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-cowherds-return-to-braj",
    title: "Krishna returns with the cowherds to Braj, from a Bhagavata Purana",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1830",
    image: "/paintings/indian/indian-krishna-cowherds-return-to-braj.jpg",
    excerpt: `I eat rice from a banana leaf with the others, grateful for an appetite that asks no difficult questions.

We were hidden, then restored; Brahma has departed, and Krishna sits among us as though friendship were still the simplest thing.

Soon we will drive the cattle back to Braj.

I try to hold the taste of this meal in my memory.

After being misplaced by a god, even the familiar road home feels like something I must learn to trust again.`,
    mood: "melancholy",
    collection: "indian",
    rooms: ["divine","dreams"],
    sourceUrl: "https://www.clevelandart.org/art/1971.301",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Gift of Mr. and Mrs. John D. MacDonald, 1971.301. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-under-a-canopy",
    title: "Krishna Under a Canopy",
    artist: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Raghogarh)",
    year: "c. 1680",
    image: "/paintings/indian/indian-krishna-under-a-canopy.jpg",
    excerpt: `I hold a rose because its small shape gives my hand a purpose.

Across the carpeted terrace, Krishna holds another, while the attendant keeps the air moving between us.

The open doorway is not an invitation I can hear, yet I cannot stop noticing it.

Marble, canopy, flowers: everything has been arranged for ease.

Only my heart refuses the arrangement.

I stand near enough to speak and discover how much a silence can contain before either person breaks it.`,
    mood: "longing",
    collection: "indian",
    rooms: ["longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2018.184",
    imageCredit: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Raghogarh); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.184. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-vanquishing-bakasura",
    title: "Krishna Vanquishing the Crane-Demon Bakasura",
    artist: "Unknown artist (Southern India, Andhra Pradesh, Tirupati)",
    year: "late 1700s",
    image: "/paintings/indian/indian-krishna-vanquishing-bakasura.jpg",
    excerpt: `I trusted the long beak to make a weapon of my disguise.

The king sent me against a child, and I mistook smallness for an absence of power.

Now the bird cannot contain what I am.

My hidden form tumbles out, stripped of the shape that made the attack possible.

There is no cleverness left in this falling.

I have become the distance between the harmless creature I pretended to be and the violence I carried inside it.`,
    mood: "dread",
    collection: "indian",
    rooms: ["nightmares","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1966.29",
    imageCredit: "Unknown artist (Southern India, Andhra Pradesh, Tirupati); The Cleveland Museum of Art, John L. Severance Fund, 1966.29. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-sakhi-persuades-radha",
    title: "Sakhi persuades Radha to meet Krishna, from a Gita Govinda (Song of the Cowherd) of Jayadeva",
    artist: "Attributed to Purkhu",
    year: "c. 1820–25",
    image: "/paintings/indian/indian-sakhi-persuades-radha.jpg",
    excerpt: `I have carried his longing through the forest, and now I must find words gentle enough for hers.

Radha listens beside me while Krishna prepares a bed of leaves beyond our conversation.

In the flute melody, her name has become something the air can hold.

I cannot decide for either of them.

A confidante can lead the way, not take the final step.

So I speak of his waiting and leave room for her answer to remain her own.`,
    mood: "longing",
    collection: "indian",
    rooms: ["longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1989.334",
    imageCredit: "Attributed to Purkhu; The Cleveland Museum of Art, Bequest of Mrs. Severance A. Millikin, 1989.334. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-quells-kaliya",
    title: "Krishna Quells the Serpent Kaliya, from a Bhagavata Purana",
    artist: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Mewar)",
    year: "c. 1710",
    image: "/paintings/indian/indian-krishna-quells-kaliya.jpg",
    excerpt: `I lift a flower in my mouth where poison once made the water mine.

Above me, Krishna dances, and every head I raise meets the measure of his feet.

My palace cannot protect me from what I have done to this pool.

The cowherds need to drink; the river must belong to more than my fear of losing it.

If I am permitted to leave for the ocean, I will carry the memory of this weight farther than my venom ever traveled.`,
    mood: "dread",
    collection: "indian",
    rooms: ["sins","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2018.141",
    imageCredit: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Mewar); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.141. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-stealing-curds",
    title: "Krishna Stealing Curds",
    artist: "Unknown artist (Southern India, Andhra Pradesh, Tirupati)",
    year: "late 1700s",
    image: "/paintings/indian/indian-krishna-stealing-curds.jpg",
    excerpt: `I raise the stick, but my eyes remain on the ladder.

One unsteady movement could turn this scolding into a cry.

Krishna reaches for the curds with the confidence of someone who has never considered that a mother can be angry and frightened at once.

Balarama stands nearby holding his snake, another wonder I have no time to understand.

In this house, even the divine must be kept from falling.

I wish he would let me finish one warning before smiling.`,
    mood: "dread",
    collection: "indian",
    rooms: ["divine","dreams"],
    sourceUrl: "https://www.clevelandart.org/art/1966.28",
    imageCredit: "Unknown artist (Southern India, Andhra Pradesh, Tirupati); The Cleveland Museum of Art, John L. Severance Fund, 1966.28. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-cremation-of-putana",
    title: "Cremation of the demon Putana, from a Krishna-Lila",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1790",
    image: "/paintings/indian/indian-cremation-of-putana.jpg",
    excerpt: `I bathe the baby while the men carry the enormous remains toward the fire.

My hands know how to wash a child; they do not know how to measure the danger that has passed through him.

Putana came as a nurse.

That borrowed tenderness is what I cannot stop remembering.

Krishna lives, and everyone says we are safe.

Still, I pour the water carefully, as though an ordinary act of care might restore the difference between protection and its disguise.`,
    mood: "dread",
    collection: "indian",
    rooms: ["death","nightmares","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1984.4",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Delia E. Holden Fund, 1984.4. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-awaiting-radha",
    title: "Krishna Awaiting Radha",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1750–60",
    image: "/paintings/indian/indian-krishna-awaiting-radha.jpg",
    excerpt: `I have a bed, a fan, and attendants who understand every comfort except the one I need.

My eyes stay fixed on the place where Radha might appear.

Waiting makes even a generous room feel unfinished.

Nothing here can hurry her without changing the meaning of her arrival.

I want the step she chooses freely, not the certainty power could provide.

Until then, the whisk moves, the air changes, and the empty space before me keeps its stubborn shape.`,
    mood: "longing",
    collection: "indian",
    rooms: ["longing","solitude","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1936.685",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Edward L. Whittemore Fund, 1936.685. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-toll-from-the-milkmaids",
    title: "Krishna Exacts a Toll from the Milkmaids: Dana-Lila, from a Bhagavata Purana",
    artist: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Bikaner)",
    year: "c. 1600",
    image: "/paintings/indian/indian-krishna-toll-from-the-milkmaids.jpg",
    excerpt: `I balance the pot and try not to laugh when Krishna announces that the path belongs to him.

We have milk and yogurt to deliver, and suddenly the road has acquired a toll collector with a threat as light as his smile.

My arms cannot afford his game even if my heart welcomes the interruption.

Behind us, the cowherd grows impatient.

I ask what payment could possibly satisfy someone who already knows how completely he has stopped our afternoon.`,
    mood: "chaos",
    collection: "indian",
    rooms: ["divine","longing"],
    sourceUrl: "https://www.clevelandart.org/art/2018.186",
    imageCredit: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Bikaner); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.186. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-balarama-reunite-with-parents",
    title: "Krishna and Balarama touching the feet of Vasudeva and Devaki, from the “Vertical” Bhagavata Purana",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1700–1725",
    image: "/paintings/indian/indian-krishna-balarama-reunite-with-parents.jpg",
    excerpt: `I recognize my son in the gesture before I can believe the years have ended.

He bends to touch our feet, and the white wall behind us seems to hold every day we spent apart.

Fine garments cannot return his childhood to this room.

Freedom has come with grown sons whose lives I must learn almost from the beginning.

I reach toward him, not to claim what prison stole, but to welcome the person who survived beyond my sight.`,
    mood: "melancholy",
    collection: "indian",
    rooms: ["longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2018.85",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.85. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-radha-quarreling",
    title: "Krishna and Radha Quarreling: Shatha Nayaka, from a Rasikapriya",
    artist: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Bundi)",
    year: "c. 1680",
    image: "/paintings/indian/indian-krishna-radha-quarreling.jpg",
    excerpt: `I ask where he has been, and he answers by comparing my eyes to lotus petals.

Dawn rises behind the leaves with less hesitation than the truth between us.

I do not want my anger made beautiful before it has been heard.

The night was long; I lived through every part he now tries to soften with a compliment.

If reconciliation is to enter this morning, it must come through the question I asked, not around it.`,
    mood: "melancholy",
    collection: "indian",
    rooms: ["longing","sins"],
    sourceUrl: "https://www.clevelandart.org/art/2018.158",
    imageCredit: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Bundi); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.158. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-celebrates-holi",
    title: "Krishna celebrates Holi",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1770",
    image: "/paintings/indian/indian-krishna-celebrates-holi.jpg",
    excerpt: `I hear the drum before the color reaches me.

Then Krishna sends a bright stream across the space I thought would keep me composed, and the whole festival seems to arrive at my chest.

Flutes, horns, and laughter refuse to take turns.

Powder freckles the air until nobody can stand outside the celebration untouched.

I came prepared to watch the spring return.

Now my clothes carry its evidence, and the careful distance I kept has vanished into the crowd.`,
    mood: "chaos",
    collection: "indian",
    rooms: ["divine","longing"],
    sourceUrl: "https://www.clevelandart.org/art/2018.104",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.104. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-lifting-govardhan",
    title: "Krishna Lifting Mount Govardhan",
    artist: "Unknown artist (Northern India, Himachal Pradesh, Pahari Kingdom of Kangra)",
    year: "c. 1780–90",
    image: "/paintings/indian/indian-krishna-lifting-govardhan.jpg",
    excerpt: `I press close with the cattle beneath a mountain held on one little finger.

Above us, Indra rides through the storm he has sent, while Balarama adds his staff to the shelter as though love must always offer whatever it carries.

Krishna touches a child with his free hand.

That small kindness steadies me more than the impossible roof.

The rain has not stopped, but I can breathe beside my neighbors without wondering which of us the sky will take first.`,
    mood: "dread",
    collection: "indian",
    rooms: ["divine","nightmares"],
    sourceUrl: "https://www.clevelandart.org/art/2001.45",
    imageCredit: "Unknown artist (Northern India, Himachal Pradesh, Pahari Kingdom of Kangra); The Cleveland Museum of Art, John L. Severance Fund, 2001.45. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-cowherds-dive-into-river",
    title: "Krishna and the Cowherds Dive into the River, from a Rasikapriya",
    artist: "Unknown artist (Central India, Madhya Pradesh, Malwa)",
    year: "c. 1640",
    image: "/paintings/indian/indian-krishna-cowherds-dive-into-river.jpg",
    excerpt: `I am between the bank and the river, committed to the leap before I have learned its ending.

Krishna is already in the air with the others; three boys still wait behind us.

Across the water, Radha and her friends watch from the platform.

Their amusement reaches me in the instant when courage and embarrassment feel exactly alike.

Soon there will be a splash.

For now, I belong to neither shore nor current, only to the decision my feet have made.`,
    mood: "chaos",
    collection: "indian",
    rooms: ["dreams","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2018.126",
    imageCredit: "Unknown artist (Central India, Madhya Pradesh, Malwa); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.126. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-rukmini-pleads-for-rukma",
    title: "Abduction of Rukmini: Krishna Tied the Hands of Rukma, from a Bhagavata Purana",
    artist: "Unknown artist (Central India, Madhya Pradesh, Malwa)",
    year: "c. 1640",
    image: "/paintings/indian/indian-rukmini-pleads-for-rukma.jpg",
    excerpt: `I chose Krishna, but I did not choose my brother dying for his refusal to accept it.

Rukma stands bound in the striped tunic I recognize, defeated and still unbearably familiar.

My plea has kept him alive.

It has not made this meeting gentle.

Around us, victory has already taken lives that no appeal can return.

I try to imagine a future large enough for my chosen love and the family it has wounded, without pretending those loyalties no longer hurt.`,
    mood: "dread",
    collection: "indian",
    rooms: ["war","longing"],
    sourceUrl: "https://www.clevelandart.org/art/2018.127",
    imageCredit: "Unknown artist (Central India, Madhya Pradesh, Malwa); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.127. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-receives-rukmini-invitation",
    title: "A Brahmin gives Krishna the Message or Invitation for the Competition to Rukmini’s Svayamvara, from a Bhagavata Purana",
    artist: "Unknown artist (Central India, Madhya Pradesh, Malwa)",
    year: "c. 1650–60",
    image: "/paintings/indian/indian-krishna-receives-rukmini-invitation.jpg",
    excerpt: `I have brought the letter as far as my own hands can carry it.

Krishna sits before me in Dvaraka, and beneath the palace the ocean keeps moving as though no decision could alter its course.

Yet a princess waits beyond these waters for an answer that will change hers.

I watch him receive the message.

The journey here was long, but this pause is harder: I have become the witness to a hope I cannot fulfill myself.`,
    mood: "longing",
    collection: "indian",
    rooms: ["longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2018.133",
    imageCredit: "Unknown artist (Central India, Madhya Pradesh, Malwa); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.133. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-receives-a-flower-garland",
    title: "Krishna Receives a Flower Garland",
    artist: "Sitaram",
    year: "c. 1750–60",
    image: "/paintings/indian/indian-krishna-receives-a-flower-garland.jpg",
    excerpt: `I offer flowers because my voice cannot arrange its gratitude so neatly.

Each blossom was small in my hand; together they make a circle large enough to carry what I have brought to Krishna.

The garland will fade.

I knew that while preparing it, and still I chose living things instead of something permanent.

Perhaps an offering does not need to outlast the moment of being received.

Perhaps it is enough that I have come near without asking to possess what I love.`,
    mood: "longing",
    collection: "indian",
    rooms: ["longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1982.65",
    imageCredit: "Sitaram; The Cleveland Museum of Art, John L. Severance Fund, 1982.65. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-markandeya-cosmic-ocean",
    title: "Markandeya Viewing Krishna in the Cosmic Ocean",
    artist: "Unknown artist (Northern India, Jammu and Kashmir, Pahari Kingdom of Basohli)",
    year: "c. 1680",
    image: "/paintings/indian/indian-markandeya-cosmic-ocean.jpg",
    excerpt: `I have survived the world, and survival has become an ocean without a shore.

Every creature I could name has disappeared into the end of its cycle.

Then a banyan leaf carries a child across the darkness, his toe lifted to his mouth.

I look closer and find the universe where I expected only a small body.

Immortality had taught me the exhaustion of remaining.

This impossible infant teaches me that remaining need not be the same as being alone.`,
    mood: "isolation",
    collection: "indian",
    rooms: ["solitude","dreams","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1967.241",
    imageCredit: "Unknown artist (Northern India, Jammu and Kashmir, Pahari Kingdom of Basohli); The Cleveland Museum of Art, Gift of Dr. and Mrs. Sherman E. Lee, 1967.241. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-birth-of-krishna",
    title: "The Birth of Krishna, from a Sursagar of Surdas (Indian, c. 1480–1580)",
    artist: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Mewar)",
    year: "1705–10",
    image: "/paintings/indian/indian-birth-of-krishna.jpg",
    excerpt: `I lie beside the newborn while the village celebrates beyond the chamber.

Women gather at the door, coins pass among the men, and somewhere the drums persuade another pair of feet to dance.

All that abundance begins with the small breathing body next to mine.

I want to welcome every visitor and close the door at the same time.

Let the world have its festival.

For a little longer, I want to learn the sound he makes before waking.`,
    mood: "longing",
    collection: "indian",
    rooms: ["divine","dreams"],
    sourceUrl: "https://www.clevelandart.org/art/1984.65",
    imageCredit: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Mewar); The Cleveland Museum of Art, Edwin R. and Harriet Pelton Perkins Memorial Fund, 1984.65. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-vasudeva-carries-infant-krishna",
    title: "A Serpent Protects Vasudeva Taking His Infant Son Krishna to Safety",
    artist: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat)",
    year: "c. 1890",
    image: "/paintings/indian/indian-vasudeva-carries-infant-krishna.jpg",
    excerpt: `I carry my son into the storm while the guards sleep behind us.

Each step must take him farther from Kamsa and closer to a home where nobody will know him by my fear.

Above the child, the serpent spreads its shelter.

I accept the protection without understanding how to thank it.

A father should be allowed to keep his newborn close.

Tonight, love requires that I deliver him safely into arms other than my own.`,
    mood: "dread",
    collection: "indian",
    rooms: ["nightmares","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2003.153",
    imageCredit: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat); The Cleveland Museum of Art, Gift of William E. Ward in memory of his wife, Evelyn Svec Ward, 2003.153. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-gopis-rasamandala",
    title: "Krishna and the Gopis Gather for Rasamandala",
    artist: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Kota)",
    year: "c. 1720–30",
    image: "/paintings/indian/indian-krishna-gopis-rasamandala.jpg",
    excerpt: `I came to the lotus-covered river smiling, certain that being near him would be enough for the night.

The full moon shone above us while we called him the god of love.

Then Krishna spoke of leaving.

Around me, women sank to the ground, and the same bank became a place I no longer knew how to stand upon.

We had arrived in different colors, with different faces.

Grief found us together before any of us could answer him.`,
    mood: "melancholy",
    collection: "indian",
    rooms: ["longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1960.45",
    imageCredit: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Kota); The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 1960.45. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishna-asks-for-sweets",
    title: "Krishna asks for sweets, from a Sursagar of Surdas (Indian, c. 1480–1580)",
    artist: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Mewar)",
    year: "1705–10",
    image: "/paintings/indian/indian-krishna-asks-for-sweets.jpg",
    excerpt: `I listen as he explains why another sweet is necessary for the future.

There will be cattle to herd, demons to defeat, wrestlers, even a throne; apparently none of it can be managed on the food he has already eaten.

His argument grows larger than the boy before me.

I am his mother, not the keeper of all those coming victories.

Still, I reach toward the treats, wishing that everything ahead could be helped so simply by feeding him.`,
    mood: "longing",
    collection: "indian",
    rooms: ["dreams","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1984.172",
    imageCredit: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Mewar); The Cleveland Museum of Art, Gift of Dr. Norman Zaworski, 1984.172. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-music-for-radha-and-krishna",
    title: "Women Play Music for Radha and Krishna: Chitrini Nayika, from a Rasikapriya",
    artist: "Unknown artist (Central India, Madhya Pradesh, Malwa)",
    year: "c. 1650",
    image: "/paintings/indian/indian-music-for-radha-and-krishna.jpg",
    excerpt: `I keep the rhythm while Radha and Krishna listen with their arms around each other.

The strings travel farther than my hands, into the forest and the quiet they share.

A performer learns to watch for the moment an audience stops noticing the effort.

Tonight I find it in their ease.

I am not inside that embrace, but the music gives me a way to belong beside it.

When the last note comes, I will miss the room it made among us.`,
    mood: "longing",
    collection: "indian",
    rooms: ["longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2018.132",
    imageCredit: "Unknown artist (Central India, Madhya Pradesh, Malwa); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.132. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-radha-krishna-forest-storm",
    title: "Radha and Krishna meet in the forest during a storm",
    artist: "Unknown artist (India, Bengal, Mughal, 18th century)",
    year: "c. 1770",
    image: "/paintings/indian/indian-radha-krishna-forest-storm.jpg",
    excerpt: `I hurry with the coverlet because the rain has reached him.

Perhaps someone wiser would remember that Krishna can lift a mountain, that our little shelter cannot be necessary.

My hands do not wait for such reasoning.

Birds and monkeys crowd the trees while we raise the cloth above him.

There is a tenderness in doing what may not be needed.

I would rather offer this corner of dry air than stand aside admiring a power that asks nothing of me.`,
    mood: "longing",
    collection: "indian",
    rooms: ["longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2013.352",
    imageCredit: "Unknown artist (India, Bengal, Mughal, 18th century); The Cleveland Museum of Art, Gift in honor of Madeline Neves Clapp; Gift of Mrs. Henry White Cannon by exchange; Bequest of Louise T. Cooper; Leonard C. Hanna Jr. Fund; From the Catherine and Ralph Benkaim Collection, 2013.352. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-akrura-drives-krishna-to-mathura",
    title: "Akrura Drives Krishna and Balarama to Mathura, from the “Isarda Bhagavata Purana”",
    artist: "Unknown artist (Northwestern India, Rajasthan, Isarda)",
    year: "c. 1560–70",
    image: "/paintings/indian/indian-akrura-drives-krishna-to-mathura.jpg",
    excerpt: `I guide the chariot away from the village, feeling the urgency of the brothers behind me.

Mathura holds their imprisoned parents and the uncle they must confront.

Behind us remain the companions who knew them first as boys.

The road cannot face both directions, but my thoughts keep trying.

I have been entrusted with an arrival that may undo a kingdom.

For now, my task is smaller and no less serious: keep the wheels moving while the familiar world falls away.`,
    mood: "dread",
    collection: "indian",
    rooms: ["war","longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1971.234",
    imageCredit: "Unknown artist (Northwestern India, Rajasthan, Isarda); The Cleveland Museum of Art, John L. Severance Fund, 1971.234. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-krishnas-insomnia",
    title: "Krishna's Insomnia, Page from a Rasikapriya",
    artist: "Unknown artist (Central India, Malwa school, 17th century)",
    year: "1634",
    image: "/paintings/indian/indian-krishnas-insomnia.jpg",
    excerpt: `I cannot persuade the night to become rest.

Every thought of Radha returns with the persistence of a name remembered just before sleep.

There is no battle to settle this wakefulness, no distance I can cross by turning over once more.

The hours belong to waiting, and waiting refuses to be commanded.

I had imagined longing as a movement toward someone.

Tonight it is the stillness of remaining here, listening to a world that seems able to sleep without her.`,
    mood: "longing",
    collection: "indian",
    rooms: ["solitude","longing","dreams"],
    sourceUrl: "https://www.clevelandart.org/art/1938.303",
    imageCredit: "Unknown artist (Central India, Malwa school, 17th century); The Cleveland Museum of Art, Gift of N. M. Heeramaneck, 1938.303. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-shiva-enthroned-in-landscape",
    title: "Shiva Seated on a Throne in a Landscape",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1755",
    image: "/paintings/indian/indian-shiva-enthroned-in-landscape.jpg",
    excerpt: `I sit where the serpents coil upon the royal seat, with rock and trees for company.

The tiger hide at my waist remembers a life outside the language of palaces.

A throne need not mean a court; here it holds a stillness no procession could improve.

Those who approach may see distance in my quiet.

I leave space for them to discover another possibility: that nothing must be performed before they are allowed to stand in the presence of the sacred.`,
    mood: "isolation",
    collection: "indian",
    rooms: ["solitude","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2018.113",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.113. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-shiva-devi-on-gajasuras-hide",
    title: "Shiva and Devi on Gajasura's hide",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1675–80",
    image: "/paintings/indian/indian-shiva-devi-on-gajasuras-hide.jpg",
    excerpt: `I sit upon his lap while the elephant hide carries us through the monsoon clouds.

The skull cup, sword, and drum remain in his hands; none has to disappear for his other hand to rest gently on my shoulder.

I meet his gaze without asking him to become only tender.

Creation and destruction travel together above the earth.

Here, in the closeness between us, I feel no need to deny either one in order to recognize love.`,
    mood: "longing",
    collection: "indian",
    rooms: ["divine","longing","death"],
    sourceUrl: "https://www.clevelandart.org/art/1952.587",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Edward L. Whittemore Fund, 1952.587. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-shiva-under-trees",
    title: "Shiva under trees",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1780",
    image: "/paintings/indian/indian-shiva-under-trees.jpg",
    excerpt: `I stand beneath two trees that have found a way to grow around each other.

The trident is familiar in my hand, the serpent familiar at my neck, yet their entwined branches hold my attention.

On earth, even shade can suggest companionship.

I have come down among living things, and the quiet here is different from withdrawal.

It is a quiet with room beside it, a space where another presence might stand without disturbing what I am.`,
    mood: "longing",
    collection: "indian",
    rooms: ["solitude","longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1960.48",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 1960.48. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-descent-of-the-ganges",
    title: "Descent of the Ganges",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1700–1710",
    image: "/paintings/indian/indian-descent-of-the-ganges.jpg",
    excerpt: `I balance on one leg until the years cease to resemble a human measure.

Above me, Shiva turns his attention from the offered cup.

I have asked for the Ganges with a body that can do little except remain faithful to its asking.

Now the river flows from his hair, and my long discipline meets something greater than endurance.

Water will travel where my feet could not.

What began as a solitary vigil can finally become a gift for others.`,
    mood: "longing",
    collection: "indian",
    rooms: ["divine","solitude"],
    sourceUrl: "https://www.clevelandart.org/art/2018.111",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.111. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-shiva-bearing-sati",
    title: "Shiva Bearing Aloft the Body of His Sati",
    artist: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat)",
    year: "c. 1890",
    image: "/paintings/indian/indian-shiva-bearing-sati.jpg",
    excerpt: `I bear Sati above me, and the distance between carrying and keeping has become unbearable.

The trident can raise her body; it cannot restore the answering presence I knew.

Let no one call this loss beautiful merely because a god must endure it.

What I hold is not an emblem that makes grief easier to explain.

It is the person whose absence changes every place I enter, even while I am unable to put her down.`,
    mood: "melancholy",
    collection: "indian",
    rooms: ["death","longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2003.131",
    imageCredit: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat); The Cleveland Museum of Art, Gift of William E. Ward in memory of his wife, Evelyn Svec Ward, 2003.131. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-shiva-mahakala-dancing",
    title: "God Shiva in His Ferocious Aspect as Mahakala Dancing",
    artist: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Mewar)",
    year: "c. 1700–1710",
    image: "/paintings/indian/indian-shiva-mahakala-dancing.jpg",
    excerpt: `I watch Mahakala dance and feel the limits of every promise I have made against change.

This is not a still image of time waiting politely beyond my door.

Movement gives it presence, and the ferocious aspect of Shiva allows no bargain with permanence.

I had come hoping that devotion might make me exempt from endings.

Instead, I stand before a rhythm in which endings belong, trying to learn reverence without pretending I have stopped being afraid.`,
    mood: "dread",
    collection: "indian",
    rooms: ["death","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1955.296",
    imageCredit: "Unknown artist (Northwestern India, Rajasthan, Rajput Kingdom of Mewar); The Cleveland Museum of Art, Gift of George P. Bickford, 1955.296. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-parvati-garlands-shiva",
    title: "Parvati Placing a Wedding Garland on Shiva (recto), from a Kalighat album",
    artist: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat)",
    year: "c. 1890",
    image: "/paintings/indian/indian-parvati-garlands-shiva.jpg",
    excerpt: `I lift the wedding garland toward Shiva, aware of how much intention can gather in a simple motion.

The flowers do not explain our differences, and they need not erase them.

My hands bring an answer rather than an argument.

In the space before the garland settles, I feel the seriousness of choosing closeness: not a promise that nothing will change, but a willingness to meet what comes without making distance our first refuge.`,
    mood: "longing",
    collection: "indian",
    rooms: ["longing","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2003.108.a",
    imageCredit: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat); The Cleveland Museum of Art, Gift of William E. Ward in memory of his wife, Evelyn Svec Ward, 2003.108.a. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-ganesha-janani",
    title: "Ganesha-Janani (Mother of Ganesh)",
    artist: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat)",
    year: "c. 1890",
    image: "/paintings/indian/indian-ganesha-janani.jpg",
    excerpt: `I hold Ganesh as a child, not as the beginning of someone else's prayer.

His elephant head rests within the circle of my care, and the world may wait before asking him to remove its obstacles.

There is a history of hurt behind this embrace, but hurt is not the only thing a mother is permitted to remember.

I know him also through nearness, through the ordinary devotion of making my arms a place where he belongs.`,
    mood: "longing",
    collection: "indian",
    rooms: ["divine","longing"],
    sourceUrl: "https://www.clevelandart.org/art/2003.169",
    imageCredit: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat); The Cleveland Museum of Art, Gift of William E. Ward in memory of his wife, Evelyn Svec Ward, 2003.169. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-rama-lakshmana-fighting-ravana",
    title: "Rama and Lakshmana Fighting Ravana, from a Dashavatara (Ten Incarnations [of Vishnu]) series",
    artist: "Unknown artist (Northern India, Pahari Region, Himachal Pradesh, Rajput Kingdom of Chamba, Court of Raj Singh (reigned 1764–94))",
    year: "c. 1765",
    image: "/paintings/indian/indian-rama-lakshmana-fighting-ravana.jpg",
    excerpt: `I stand beside my brother while Ravana raises more weapons than any single body should be able to bear.

Even a snake has become part of his arsenal.

Rama aims the crescent-shaped arrow toward the strange swarm above the crowns, and the dark landscape seems to narrow around that line of purpose.

I cannot fight the whole terror at once.

I can remain at his side, draw my bow, and refuse to let the number of threats decide the measure of our resolve.`,
    mood: "chaos",
    collection: "indian",
    rooms: ["war","divine","nightmares"],
    sourceUrl: "https://www.clevelandart.org/art/1953.357",
    imageCredit: "Unknown artist (Northern India, Pahari Region, Himachal Pradesh, Rajput Kingdom of Chamba, Court of Raj Singh (reigned 1764–94)); The Cleveland Museum of Art, Edward L. Whittemore Fund, 1953.357. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-rama-sita-lakshmana-in-forest",
    title: "Rama, Sita, and Lakshmana in the forest",
    artist: "Unknown artist (Northern India, Pahari Region, Himachal Pradesh, Rajput Kingdom of Kangra, Court of Aniruddh Chand (reigned 1823–1833))",
    year: "c. 1830",
    image: "/paintings/indian/indian-rama-sita-lakshmana-in-forest.jpg",
    excerpt: `I turn the food above the fire while Rama and Sita rest near our small forest home.

Exile has taught my hands tasks that a palace would have kept from them.

Bark cloth, gathered food, a hut: none resembles the life we left, yet an evening can still be made hospitable.

I cannot return my brother to his kingdom tonight.

I can prepare a meal carefully enough that, for a while, being banished is not the only thing we know about ourselves.`,
    mood: "melancholy",
    collection: "indian",
    rooms: ["solitude","longing"],
    sourceUrl: "https://www.clevelandart.org/art/1989.332",
    imageCredit: "Unknown artist (Northern India, Pahari Region, Himachal Pradesh, Rajput Kingdom of Kangra, Court of Aniruddh Chand (reigned 1823–1833)); The Cleveland Museum of Art, Bequest of Mrs. Severance A. Millikin, 1989.332. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-rama-visits-bharadvajas-hermitage",
    title: "Rama, Sita, and Lakshmana visit the hermitage of the sage Bharadvaja at Prayaga, from Chapter 48 of the Ayodhya Kanda (Book of Ayodhya) of a Ramayana (Rama’s Journey)",
    artist: "Unknown artist (Central India, Malwa Region, Madhya Pradesh)",
    year: "c. 1650",
    image: "/paintings/indian/indian-rama-visits-bharadvajas-hermitage.jpg",
    excerpt: `I fold my hands as the travelers arrive, knowing that welcome need not wait for a throne to recognize dignity.

Rama, Sita, and Lakshmana bow before me, carrying exile into a place where rivers meet.

The ornamented walls cannot undo their separation from home.

But a threshold can choose what kind of encounter happens upon it.

I offer the hermitage without asking them to disguise their weariness, and for this meeting the forest road is allowed to pause.`,
    mood: "longing",
    collection: "indian",
    rooms: ["divine","longing"],
    sourceUrl: "https://www.clevelandart.org/art/2018.129",
    imageCredit: "Unknown artist (Central India, Malwa Region, Madhya Pradesh); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.129. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-sita-in-the-garden-of-lanka",
    title: "Ravana addresses Sita in the garden of Lanka, from Chapters 53 and 54 of the Aranya Kanda (Book of the Forest) of a Ramayana (Rama’s Journey)",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1725",
    image: "/paintings/indian/indian-sita-in-the-garden-of-lanka.jpg",
    excerpt: `I kneel beneath the ashoka tree, surrounded by guards and a city that mistakes golden walls for generosity.

Ravana comes with his demand, and I answer from the one place he has not enclosed: my refusal.

Beyond Lanka lies the sea, another boundary I cannot cross by wishing.

I do not confuse being unharmed with being free.

Until rescue reaches this garden, I keep my answer intact, a small unyielding country no crown here has the right to govern.`,
    mood: "isolation",
    collection: "indian",
    rooms: ["solitude","longing","nightmares"],
    sourceUrl: "https://www.clevelandart.org/art/1966.143",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Gift of George P. Bickford, 1966.143. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-hanuman-carries-rama-lakshmana",
    title: "Hanuman with Rama and Lakshmana on his shoulders, from a Kalighat album",
    artist: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat)",
    year: "c. 1890",
    image: "/paintings/indian/indian-hanuman-carries-rama-lakshmana.jpg",
    excerpt: `I make my shoulders a road for Rama and Lakshmana.

Their search for Sita gives my strength a direction; without that purpose, becoming enormous would only make me large.

I feel the responsibility of their weight and welcome it.

Devotion is not always a word spoken with folded hands.

Sometimes it is the work of carrying someone farther than they could go alone, keeping steady beneath them while the place they need remains beyond the next step.`,
    mood: "longing",
    collection: "indian",
    rooms: ["divine","longing"],
    sourceUrl: "https://www.clevelandart.org/art/2003.120",
    imageCredit: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat); The Cleveland Museum of Art, Gift of William E. Ward in memory of his wife, Evelyn Svec Ward, 2003.120. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-hanuman-mountain-of-healing-plants",
    title: "Hanuman Brings the Mountain of Healing Plants; Rama Extracts the Arrow from Lakshmana as Hanuman and a Bear Prepare to Treat Him (recto), from a Romance of Chandrabhanu and Lavanyavati of Upendra Bhanja (Indian, died 1740)",
    artist: "Unknown artist (Eastern India, Odisha)",
    year: "late 1700s",
    image: "/paintings/indian/indian-hanuman-mountain-of-healing-plants.jpg",
    excerpt: `I have brought the mountain because hesitation might cost the life we are trying to save.

Rama works to remove the arrow from Lakshmana while the bear and I prepare to help.

My strength has carried the plants here; now it must yield to the careful work of healing.

The battlefield taught us to act with force.

Beside the wounded body, I learn another urgency, one that measures success not by what falls, but by whether someone rises again.`,
    mood: "dread",
    collection: "indian",
    rooms: ["war","death","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1979.21.a",
    imageCredit: "Unknown artist (Eastern India, Odisha); The Cleveland Museum of Art, Edward L. Whittemore Fund, 1979.21.a. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-durga-slaying-mahisha",
    title: "Durga Slaying Mahisha",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1830",
    image: "/paintings/indian/indian-durga-slaying-mahisha.jpg",
    excerpt: `I look toward Mahisha from the chariot, where the creatures drawing me hold their course.

Above him, the clouds turn; below, dust gathers around the violence he has brought into the world.

Flowering trees remain behind me, a reminder of what force must serve if it is to mean anything beyond itself.

The clash has not yet come.

In this charged distance, I keep my purpose clear: the world is not his to ravage, and protection cannot remain only a wish.`,
    mood: "dread",
    collection: "indian",
    rooms: ["war","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1955.667",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, Edward L. Whittemore Fund, 1955.667. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-goddess-annihilates-raktabija",
    title: "The Goddess Annihilates the Demon Raktabija, from a Devi-Mahatmya",
    artist: "Unknown artist (Central India, Madhya Pradesh, Malwa)",
    year: "c. 1640",
    image: "/paintings/indian/indian-goddess-annihilates-raktabija.jpg",
    excerpt: `I fight beside the Goddess and see why our ordinary blows cannot end this battle.

Each drop of Raktabija's blood makes another enemy wherever it touches earth.

Victory seems to multiply the danger until she catches what must not fall.

I have never witnessed such fierce precision.

Her terrible form is not destruction without purpose; it is the answer to a violence that reproduces itself.

I keep fighting, grateful that protection can take a shape larger than my understanding.`,
    mood: "chaos",
    collection: "indian",
    rooms: ["war","nightmares","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2018.128",
    imageCredit: "Unknown artist (Central India, Madhya Pradesh, Malwa); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.128. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-vishnu-on-ananta",
    title: "Vishnu on Ananta, the Endless Serpent",
    artist: "Unknown artist (Northern India, Himachal Pradesh, Pahari Region, Rajput Kingdom of Chamba)",
    year: "c. 1700",
    image: "/paintings/indian/indian-vishnu-on-ananta.jpg",
    excerpt: `I touch Vishnu's feet gently while Ananta bears his rest upon the cosmic waters.

Before there are days to count, there is this care, patient enough not to mistake waking for a command.

Lotuses spread across the painted ocean; another will carry Brahma into the work of creation.

The world is approaching, but it has not yet filled the silence with needs.

I remain beside the sleeper, knowing that an immense beginning can arrive through a gesture almost too tender to notice.`,
    mood: "longing",
    collection: "indian",
    rooms: ["dreams","divine"],
    sourceUrl: "https://www.clevelandart.org/art/2018.155",
    imageCredit: "Unknown artist (Northern India, Himachal Pradesh, Pahari Region, Rajput Kingdom of Chamba); The Cleveland Museum of Art, Purchase and partial gift from the Catherine and Ralph Benkaim Collection; Severance and Greta Millikin Purchase Fund, 2018.155. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-vishnu-battles-madhu-kaitabha",
    title: "Vishnu Battles Madhu and Kaitabha, from a Markandeya Purana",
    artist: "Unknown artist (Northern India, Pahari kingdoms)",
    year: "c. 1760",
    image: "/paintings/indian/indian-vishnu-battles-madhu-kaitabha.jpg",
    excerpt: `I wake upon the serpent bed to a struggle already seeking its place in a world not yet made.

Madhu and Kaitabha rise against me above the cosmic ocean, and rest gives way to the work of preserving possibility.

There are no cities to defend, no fields that can name their need.

Still, creation requires this resistance.

Before a single ordinary life begins, I must confront what would deny it room, here among the waters from which its future will emerge.`,
    mood: "chaos",
    collection: "indian",
    rooms: ["war","dreams","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1974.46",
    imageCredit: "Unknown artist (Northern India, Pahari kingdoms); The Cleveland Museum of Art, John L. Severance Fund, 1974.46. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-matsya-fish-avatara-of-vishnu",
    title: "Matsya, Fish Avatara of Vishnu",
    artist: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat)",
    year: "c. 1890",
    image: "/paintings/indian/indian-matsya-fish-avatara-of-vishnu.jpg",
    excerpt: `I look to Matsya and remember how quickly water can change from sustenance into a world without footing.

Vishnu takes the form of a fish, meeting danger within the element that frightens me rather than promising it will disappear.

I have spent my life trusting solid ground.

This sacred form asks me to imagine preservation differently: not always as remaining where I am, but as being guided through a change too vast for my own strength to navigate.`,
    mood: "dread",
    collection: "indian",
    rooms: ["divine","nightmares"],
    sourceUrl: "https://www.clevelandart.org/art/2003.102",
    imageCredit: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat); The Cleveland Museum of Art, Gift of William E. Ward in memory of his wife, Evelyn Svec Ward, 2003.102. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "indian-three-steps-of-vishnu",
    title: "Trivikramapada (Three Steps of Vishnu)",
    artist: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat)",
    year: "c. 1890",
    image: "/paintings/indian/indian-three-steps-of-vishnu.jpg",
    excerpt: `I thought three steps could be measured by the land I owned.

Before Vishnu, that certainty becomes smaller than the promise I made.

What seemed a modest request reveals the limits of calling anything mine.

I can count boundaries, but I cannot contain the one who crosses them.

Standing before this immense measure, I begin to understand surrender as something harder than losing a possession: the relinquishing of the belief that possession ever made me master of the world.`,
    mood: "dread",
    collection: "indian",
    rooms: ["divine","sins"],
    sourceUrl: "https://www.clevelandart.org/art/2003.165",
    imageCredit: "Unknown artist (Eastern India, Bengal, Kolkata, Kalighat); The Cleveland Museum of Art, Gift of William E. Ward in memory of his wife, Evelyn Svec Ward, 2003.165. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-the-race-track-ryder",
    title: "The Race Track (Death on a Pale Horse)",
    artist: "Albert Pinkham Ryder",
    year: "c. 1896–1908",
    image: "/paintings/classical/classical-the-race-track-ryder.jpg",
    excerpt: `I keep to the curve because there is nowhere left to arrive.

My pale horse carries no wager, only the rider every wager forgets to count.

The scythe leans above us; a snake rehearses our movement in the grass.

Once, this oval promised a finish.

Now the same earth passes beneath the same hooves, and the empty sky refuses to announce a winner.

I can hear the spectators who are no longer here.`,
    mood: "dread",
    collection: "classical",
    rooms: ["death","nightmares"],
    sourceUrl: "https://www.clevelandart.org/art/1928.8",
    imageCredit: "Albert Pinkham Ryder; The Cleveland Museum of Art, Purchase from the J. H. Wade Fund, 1928.8. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-crucifixion-of-saint-andrew-caravaggio",
    title: "The Crucifixion of Saint Andrew",
    artist: "Caravaggio",
    year: "1606–7",
    image: "/paintings/classical/classical-crucifixion-of-saint-andrew-caravaggio.jpg",
    excerpt: `I can feel their hands trying to undo what other hands have fastened.

Below me, faces emerge from the dark as if the night itself has come to watch.

There is no distance left between my body and their uncertainty.

The rope has become a question neither strength nor pity can answer.

Do not turn this wood into an ornament yet.

I am still upon it, and the people beneath me are still deciding what mercy means.`,
    mood: "dread",
    collection: "classical",
    rooms: ["death","divine","sins"],
    sourceUrl: "https://www.clevelandart.org/art/1976.2",
    imageCredit: "Caravaggio; The Cleveland Museum of Art, Leonard C. Hanna Jr. Fund, 1976.2. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-ruin-by-the-sea-bocklin",
    title: "Ruin by the Sea",
    artist: "Arnold Böcklin",
    year: "1881",
    image: "/paintings/classical/classical-ruin-by-the-sea-bocklin.jpg",
    excerpt: `I used to keep the sea outside.

Now it speaks through every opening in me.

The cypresses bend like visitors who cannot bring themselves to enter, and that sick green light finds rooms I thought I had buried.

You ask who lived here.

I remember footsteps, but not the names attached to them.

Stay on the shore if you must.

From there, my emptiness can still be mistaken for a view.`,
    mood: "isolation",
    collection: "classical",
    rooms: ["solitude","nightmares"],
    sourceUrl: "https://www.clevelandart.org/art/1979.57",
    imageCredit: "Arnold Böcklin; The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 1979.57. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-saint-peter-repentant-la-tour",
    title: "Saint Peter Repentant",
    artist: "Georges de La Tour",
    year: "1645",
    image: "/paintings/classical/classical-saint-peter-repentant-la-tour.jpg",
    excerpt: `I have outlived the words I said, but not the moment of saying them.

The lantern keeps a little country of light around my knees.

Beyond it waits the rooster, a small ordinary creature with a voice large enough to divide my life.

My hands clasp nothing.

I hold them together because I remember how easily I once let go.

Forgiveness has reached this room.

Sleep has not yet found the door.`,
    mood: "melancholy",
    collection: "classical",
    rooms: ["sins","solitude","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1951.454",
    imageCredit: "Georges de La Tour; The Cleveland Museum of Art, Gift of the Hanna Fund, 1951.454. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-scenes-of-witchcraft-night-rosa",
    title: "Scenes of Witchcraft: Night",
    artist: "Salvator Rosa",
    year: "c. 1645–1649",
    image: "/paintings/classical/classical-scenes-of-witchcraft-night-rosa.jpg",
    excerpt: `I thought the trees would hide us from whatever answered.

Now I stand among the travelers and watch the conjurer make an opening in the night.

The column beside him belongs to an older ruin; the things gathering below it seem older still.

Nobody speaks of leaving.

We have become afraid that movement might count as an invitation.

I came to witness a trick.

My body has stopped believing in tricks.`,
    mood: "dread",
    collection: "classical",
    rooms: ["nightmares","dreams"],
    sourceUrl: "https://www.clevelandart.org/art/1977.37.4",
    imageCredit: "Salvator Rosa; The Cleveland Museum of Art, Purchase from the J. H. Wade Fund, 1977.37.4. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-eve-of-the-deluge-linnell",
    title: "Noah: The Eve of the Deluge",
    artist: "John Linnell",
    year: "1848",
    image: "/paintings/classical/classical-eve-of-the-deluge-linnell.jpg",
    excerpt: `I look at the burning color above the land and try to remember an ordinary evening.

There must have been one when clouds were only clouds, when gathering the living did not mean counting everything that would be lost.

The world is still solid beneath me.

That is what makes the warning unbearable.

Nothing has fallen yet, and already I cannot look at a tree without imagining the water taking its place.`,
    mood: "dread",
    collection: "classical",
    rooms: ["divine","nightmares"],
    sourceUrl: "https://www.clevelandart.org/art/1972.119",
    imageCredit: "John Linnell; The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 1972.119. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-saint-jerome-ribera",
    title: "Saint Jerome",
    artist: "Jusepe de Ribera",
    year: "c. 1638–40",
    image: "/paintings/classical/classical-saint-jerome-ribera.jpg",
    excerpt: `I have translated words that promise eternity, yet the skull requires no translation.

It waits beside the book with its patient, toothless certainty.

Light catches my skin and makes the years upon it impossible to conceal.

The stone in my hand is easier to carry than the life I have brought into this wilderness.

I wanted silence to make me pure.

Instead, it has made every unspoken thought painfully easy to hear.`,
    mood: "melancholy",
    collection: "classical",
    rooms: ["death","solitude","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1961.219",
    imageCredit: "Jusepe de Ribera; The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 1961.219. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-lazarus-and-the-rich-man-bassano",
    title: "Lazarus and the Rich Man",
    artist: "Jacopo Bassano",
    year: "c. 1550",
    image: "/paintings/classical/classical-lazarus-and-the-rich-man-bassano.jpg",
    excerpt: `I lie close enough to smell the meal and too far away to belong to it.

Above the floor, dishes pass between hands that have learned not to notice mine.

A dog approaches without asking what I own.

Its rough attention is the only welcome this house has offered.

You might call the distance between us a few steps.

From where I am lying, it is the whole shape of their world.`,
    mood: "isolation",
    collection: "classical",
    rooms: ["sins","solitude","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1939.68",
    imageCredit: "Jacopo Bassano; The Cleveland Museum of Art, Delia E. Holden and L. E. Holden Funds, 1939.68. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-samson-and-delilah-honthorst",
    title: "Samson and Delilah",
    artist: "Gerrit van Honthorst",
    year: "c. 1616",
    image: "/paintings/classical/classical-samson-and-delilah-honthorst.jpg",
    excerpt: `I hold the light close enough to see what trust has made possible.

His sleeping weight rests against us without suspicion.

The old woman asks for silence, and suddenly the smallest noise seems capable of waking the person I was before this bargain.

A lock of hair should weigh almost nothing.

Tonight it contains a life.

I have not raised a sword, yet everything around this candle has become a weapon.`,
    mood: "dread",
    collection: "classical",
    rooms: ["sins","longing","nightmares"],
    sourceUrl: "https://www.clevelandart.org/art/1968.23",
    imageCredit: "Gerrit van Honthorst; The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 1968.23. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-samson-valentin",
    title: "Samson",
    artist: "Valentin de Boulogne",
    year: "1630–31",
    image: "/paintings/classical/classical-samson-valentin.jpg",
    excerpt: `I can rest my head in one hand, but I cannot put down what the other has done.

The jawbone lies near me, absurdly small for the number of lives attached to it.

The lion has become another object in a room that calls me victorious.

My armor holds its shape better than I do.

Everyone knows the story of my strength.

Nobody has asked why strength should leave a man sitting this quietly.`,
    mood: "melancholy",
    collection: "classical",
    rooms: ["war","solitude"],
    sourceUrl: "https://www.clevelandart.org/art/1972.50",
    imageCredit: "Valentin de Boulogne; The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 1972.50. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-sleep-restout",
    title: "Sleep",
    artist: "Jean Bernard Restout",
    year: "c. 1771",
    image: "/paintings/classical/classical-sleep-restout.jpg",
    excerpt: `I fold my wings into a sleep that cannot carry me anywhere.

The poppies keep their counsel beside my body; even the air seems drugged by their stillness.

You may think a god has nothing to fear in closing his eyes.

But I make the country you enter when the room disappears, and I know how easily its roads change.

Tonight I want only a darkness that asks nothing of me.`,
    mood: "isolation",
    collection: "classical",
    rooms: ["dreams","solitude"],
    sourceUrl: "https://www.clevelandart.org/art/1963.502",
    imageCredit: "Jean Bernard Restout; The Cleveland Museum of Art, Leonard C. Hanna Jr. Fund, 1963.502. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-david-leighton",
    title: "David: \"Oh, that I had wings like a Dove! For then would I fly away, and be at rest.\" Psalm 55:6",
    artist: "Frederic Leighton",
    year: "1865",
    image: "/paintings/classical/classical-david-leighton.jpg",
    excerpt: `I let the crown fall because it could not tell me how to remain a father.

Beyond this chamber, they can speak of armies and obedience.

Here, the victory has only one name missing from it.

My body leans toward an escape the walls cannot provide.

If I were small enough to leave through the air, perhaps I could stop hearing the country celebrate what has broken the room inside me.`,
    mood: "melancholy",
    collection: "classical",
    rooms: ["death","war","longing"],
    sourceUrl: "https://www.clevelandart.org/art/1986.74",
    imageCredit: "Frederic Leighton; The Cleveland Museum of Art, Leonard C. Hanna Jr. Fund, 1986.74. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-oedipus-at-colonus-harriet",
    title: "Oedipus at Colonus",
    artist: "Fulchran Jean Harriet",
    year: "1798",
    image: "/paintings/classical/classical-oedipus-at-colonus-harriet.jpg",
    excerpt: `I reach for my daughter as though my arm could shelter her from the history attached to it.

The world beyond my blindness is full of people who know my story before they know my voice.

Antigone remains close enough for me to recognize the shape of loyalty.

I cannot offer her a kingdom.

I can barely offer a road.

Still, she stands beside me, and exile has not yet taken everything.`,
    mood: "melancholy",
    collection: "classical",
    rooms: ["solitude","longing"],
    sourceUrl: "https://www.clevelandart.org/art/2002.3",
    imageCredit: "Fulchran Jean Harriet; The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 2002.3. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-memento-mori-harnett",
    title: "Memento Mori, \"To This Favour\"",
    artist: "William Michael Harnett",
    year: "1879",
    image: "/paintings/classical/classical-memento-mori-harnett.jpg",
    excerpt: `I have finished measuring you.

The last sand has fallen, the candle has spent its little weather, and the book keeps opening at a thought you would rather postpone.

Beside them I grin without amusement.

Once I had a face that needed a mirror.

Now every surface on this table reflects the same ending.

You are welcome to linger over the workmanship.

I know how carefully the living inspect anything except the warning.`,
    mood: "dread",
    collection: "classical",
    rooms: ["death","solitude"],
    sourceUrl: "https://www.clevelandart.org/art/1965.235",
    imageCredit: "William Michael Harnett; The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 1965.235. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-sweet-melancholy-vien",
    title: "Sweet Melancholy",
    artist: "Joseph-Marie Vien",
    year: "1756",
    image: "/paintings/classical/classical-sweet-melancholy-vien.jpg",
    excerpt: `I have read the letter often enough to know where hope stops between its lines.

The room offers lovely things to occupy my hands: pearls, a table, the careful furniture of a life that ought to satisfy me.

Instead, my head sinks into my palm.

Nothing here is broken in a way a visitor could repair.

Even the brazier has a purpose.

I remain beside it, warming a future that will not arrive.`,
    mood: "longing",
    collection: "classical",
    rooms: ["longing","solitude"],
    sourceUrl: "https://www.clevelandart.org/art/1996.1",
    imageCredit: "Joseph-Marie Vien; The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 1996.1. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-a-eunuchs-dream-lecomte-du-nouy",
    title: "A Eunuch's Dream",
    artist: "Jean Lecomte du Nouÿ",
    year: "1874",
    image: "/paintings/classical/classical-a-eunuchs-dream-lecomte-du-nouy.jpg",
    excerpt: `I watch the smoke offer what the room withholds.

She gathers out of it, almost near enough to answer, but the little figure with the blade has entered the vision too.

Even my dreaming cannot leave my wounds outside.

They have made a spectacle of my wanting; I wanted only to be wanted in return.

The pipe grows quiet in my hand.

Above me, tenderness and terror refuse to separate.`,
    mood: "madness",
    collection: "classical",
    rooms: ["dreams","nightmares","longing"],
    sourceUrl: "https://www.clevelandart.org/art/1991.173",
    imageCredit: "Jean Lecomte du Nouÿ; The Cleveland Museum of Art, Seventy-fifth anniversary gift of Mrs. Noah L. Butkin, 1991.173. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-esther-ahasuerus-and-haman-steen",
    title: "Esther, Ahasuerus, and Haman",
    artist: "Jan Steen",
    year: "c. 1668",
    image: "/paintings/classical/classical-esther-ahasuerus-and-haman-steen.jpg",
    excerpt: `I arranged the destruction of strangers as though it were another matter for the table.

Now Esther has spoken, and the king turns toward me.

The glass still shines.

The lemon still curls its bright skin beside the dishes.

How can such small luxuries remain unchanged when the room has become a sentence?

I sink into my seat, searching for the authority that was mine a moment ago.

Nobody returns it.`,
    mood: "dread",
    collection: "classical",
    rooms: ["sins","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1964.153",
    imageCredit: "Jan Steen; The Cleveland Museum of Art, John L. Severance Fund, 1964.153. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-storm-in-the-mountains-church",
    title: "Storm in the Mountains",
    artist: "Frederic Edwin Church",
    year: "1847",
    image: "/paintings/classical/classical-storm-in-the-mountains-church.jpg",
    excerpt: `I am the tree the lightning chose.

The mountain behind me still wears its vast composure, but my branches have forgotten how to hold a sky.

Clouds pass as though nothing has happened.

Beneath them, the living wood continues its slow business around my ruin.

You can call this a cycle if you need the comfort of a shape.

From inside the split trunk, it feels like an interruption that will never finish.`,
    mood: "dread",
    collection: "classical",
    rooms: ["death","solitude"],
    sourceUrl: "https://www.clevelandart.org/art/1969.52",
    imageCredit: "Frederic Edwin Church; The Cleveland Museum of Art, Gift of various donors by exchange and Purchase from the J. H. Wade Fund, 1969.52. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-wisdom-and-destiny-keller",
    title: "Wisdom and Destiny",
    artist: "Henry Keller",
    year: "1913",
    image: "/paintings/classical/classical-wisdom-and-destiny-keller.jpg",
    excerpt: `I stand where the shepherd does not look.

His small peace depends upon the distance between his day and the figures waiting at its edge.

Beside Wisdom, I have no need to hurry.

The landscape is generous enough to hold his innocence and my certainty without letting either touch the other.

You see an allegory.

I see how gently a life can proceed while everything that will change it remains already present.`,
    mood: "dread",
    collection: "classical",
    rooms: ["dreams","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1928.580",
    imageCredit: "Henry Keller; The Cleveland Museum of Art, Gift of Mrs. Henry A. Everett for the Dorothy Burnham Everett Memorial Collection, 1928.580. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-the-ghost-story-macewen",
    title: "The Ghost Story",
    artist: "Walter MacEwen",
    year: "1887",
    image: "/paintings/classical/classical-the-ghost-story-macewen.jpg",
    excerpt: `I squeeze my doll until its little body seems steadier than mine.

The woman at the spinning wheel has not moved far from her ordinary work, yet her story has changed every shadow in the room.

The others listen with faces I cannot read.

I want someone to laugh and break the spell.

Nobody does.

A moment ago, the door was only a door.

Now I keep watching the space beneath it.`,
    mood: "dread",
    collection: "classical",
    rooms: ["nightmares","dreams"],
    sourceUrl: "https://www.clevelandart.org/art/1923.416",
    imageCredit: "Walter MacEwen; The Cleveland Museum of Art, Gift of Mrs. Edward S. Harkness, 1923.416. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-the-contemplator-carriere",
    title: "The Contemplator",
    artist: "Eugène Carrière",
    year: "1901",
    image: "/paintings/classical/classical-the-contemplator-carriere.jpg",
    excerpt: `I place a hand over my heart to prove that something here still answers.

Above me, the crescent keeps its thin, unreachable promise.

My other hand moves toward it before I remember the distance.

In this brown half-light, even my body seems to be turning into a thought.

I do not know whether I am watching the heavens or remembering them.

Either way, the stars have more room than I do.`,
    mood: "longing",
    collection: "classical",
    rooms: ["dreams","solitude","longing"],
    sourceUrl: "https://www.clevelandart.org/art/1946.283",
    imageCredit: "Eugène Carrière; The Cleveland Museum of Art, In memory of Ralph King, gift of Mrs. Ralph King; Ralph T. Woods, Charles G. King; and Frances King Schafer, 1946.283. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-symbolic-head-redon",
    title: "Symbolic Head",
    artist: "Odilon Redon",
    year: "c. 1890",
    image: "/paintings/classical/classical-symbolic-head-redon.jpg",
    excerpt: `I turn inward because the frames keep closing.

One rectangle contains another, and none of them leads out.

My helmet is a strange protection against a danger that has no direction.

I hold the green staff as if there were ground beyond this thought on which to plant it.

You may search my profile for a destination.

I have become the pause between seeing a world and consenting to live inside it.`,
    mood: "madness",
    collection: "classical",
    rooms: ["dreams","solitude"],
    sourceUrl: "https://www.clevelandart.org/art/1988.91",
    imageCredit: "Odilon Redon; The Cleveland Museum of Art, Gift of the Mildred Andrews Fund, 1988.91. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-ruins-of-an-ancient-city-martin",
    title: "Ruins of an Ancient City",
    artist: "John Martin",
    year: "c. 1810–20",
    image: "/paintings/classical/classical-ruins-of-an-ancient-city-martin.jpg",
    excerpt: `I built my streets to make arrival feel inevitable.

Now they guide the evening through buildings that cannot remember their inhabitants.

The valley opens beneath me with a depth no monument can argue against.

From far away, ruin looks orderly: a column here, a wall there, gold settling over everything.

Come closer and count the thresholds.

Each one was once crossed by somebody who believed there would always be a home to return to.`,
    mood: "melancholy",
    collection: "classical",
    rooms: ["death","solitude"],
    sourceUrl: "https://www.clevelandart.org/art/1981.13",
    imageCredit: "John Martin; The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 1981.13. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-cordelia-parting-from-her-sisters-brown",
    title: "Cordelia Parting from her Sisters",
    artist: "Ford Madox Brown",
    year: "1854",
    image: "/paintings/classical/classical-cordelia-parting-from-her-sisters-brown.jpg",
    excerpt: `I leave them the words that purchased their inheritance.

My own would not grow sweet enough to serve the bargain, and now parting must do the work affection could not.

I look at my sisters and try to find the girls who once shared a room with me.

Ceremony stands between us in splendid colors.

It would be easier if they looked like strangers.

They still look like people I expected to love me.`,
    mood: "longing",
    collection: "classical",
    rooms: ["sins","longing"],
    sourceUrl: "https://www.clevelandart.org/art/2013.261",
    imageCredit: "Ford Madox Brown; The Cleveland Museum of Art, Gift in memory of Helen Borowitz, 2013.261. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-vision-of-saint-jerome-langetti",
    title: "The Vision of Saint Jerome",
    artist: "Giovanni Battista Langetti",
    year: "c. 1660",
    image: "/paintings/classical/classical-vision-of-saint-jerome-langetti.jpg",
    excerpt: `I withdrew from the world, but the summons has followed me here.

The angel enters my solitude with a force no closed eye can keep outside.

My old body turns toward a judgment I had hoped to prepare for in private.

Books cannot make an answer for me now.

I had imagined revelation as a light falling gently across a page.

Instead, the page has vanished, and the light is asking for me.`,
    mood: "dread",
    collection: "classical",
    rooms: ["divine","nightmares"],
    sourceUrl: "https://www.clevelandart.org/art/1951.334",
    imageCredit: "Giovanni Battista Langetti; The Cleveland Museum of Art, Delia E. Holden and L. E. Holden Funds, 1951.334. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-death-of-sophonisba-guerin",
    title: "The Death of Sophonisba",
    artist: "Attributed to Pierre Guérin",
    year: "c. 1810",
    image: "/paintings/classical/classical-death-of-sophonisba-guerin.jpg",
    excerpt: `I keep the pen moving because the page is the last place where my hand can still decide something.

They have spoken of dignity as though it could undo captivity, as though a noble word could make this room less cruel.

My body begins to withdraw from the chair.

Do not admire my composure without noticing what demanded it.

I wanted a life beyond their victory, not a beautiful pose at its edge.`,
    mood: "melancholy",
    collection: "classical",
    rooms: ["death","war"],
    sourceUrl: "https://www.clevelandart.org/art/2008.71",
    imageCredit: "Attributed to Pierre Guérin; The Cleveland Museum of Art, Bequest of Jacques de Caso in memory of Alice Cagliostro and Domenick Cagliostro, 2008.71. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-christ-with-joseph-of-arimathea-savoldo",
    title: "Christ with Joseph of Arimathea",
    artist: "Giovanni Girolamo Savoldo",
    year: "c. 1525",
    image: "/paintings/classical/classical-christ-with-joseph-of-arimathea-savoldo.jpg",
    excerpt: `I asked for the body, and now the weight of that request rests against me.

The cloudy sky offers no place to set it down.

There are only two of us in this narrow world: the one who cannot feel the carrying, and the one who must remember it.

I try to hold him without allowing my own fear to become another pressure.

The tomb is mine.

The absence will not belong to me alone.`,
    mood: "melancholy",
    collection: "classical",
    rooms: ["death","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1952.512",
    imageCredit: "Giovanni Girolamo Savoldo; The Cleveland Museum of Art, Gift of the Hanna Fund, 1952.512. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-glaucus-and-nydia-alma-tadema",
    title: "Glaucus and Nydia",
    artist: "Lawrence Alma-Tadema",
    year: "1867",
    image: "/paintings/classical/classical-glaucus-and-nydia-alma-tadema.jpg",
    excerpt: `I weave the roses carefully, giving my hands the confession my voice cannot risk.

Glaucus is near enough for every ordinary sound to matter.

I know the flowers by touch; I know my place in this house by everything nobody needs to say.

A garland can be accepted without a question.

That is its kindness and its cruelty.

When I finish, he will hold something of mine without knowing how much I have given.`,
    mood: "longing",
    collection: "classical",
    rooms: ["longing","solitude"],
    sourceUrl: "https://www.clevelandart.org/art/1977.128",
    imageCredit: "Lawrence Alma-Tadema; The Cleveland Museum of Art, Gift of Mr. and Mrs. Noah L. Butkin, 1977.128. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-mount-vesuvius-at-midnight-bierstadt",
    title: "Mount Vesuvius at Midnight",
    artist: "Albert Bierstadt",
    year: "1868",
    image: "/paintings/classical/classical-mount-vesuvius-at-midnight-bierstadt.jpg",
    excerpt: `I thought midnight would conceal the mountain.

Instead, it has given the fire a world of its own.

The red wound opens above me and throws its answer into the sky; ash makes darkness visible in a way the moon never could.

I stand before a landscape that has begun to move from within.

Every solid thing I trusted has acquired a terrible possibility.

Even the ground beneath my feet seems to be listening.`,
    mood: "chaos",
    collection: "classical",
    rooms: ["nightmares","death"],
    sourceUrl: "https://www.clevelandart.org/art/1949.541",
    imageCredit: "Albert Bierstadt; The Cleveland Museum of Art, Gift of S. Livingstone Mather, Philip Richard Mather, Katherine Hoyt (Mather) Cross, Katherine Mather McLean and Constance Mather Bishop, 1949.541. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-revolt-at-cairo-girodet",
    title: "Sketch for \"The Revolt at Cairo\"",
    artist: "Anne-Louis Girodet de Roucy-Trioson",
    year: "c. 1809",
    image: "/paintings/classical/classical-revolt-at-cairo-girodet.jpg",
    excerpt: `I cannot find a horizon between the bodies.

A weapon rises where a hand was a moment ago; cloth twists through the crush as though color itself were being dragged into the fight.

Someone will arrange this struggle into a campaign and give each side a name.

From inside it, I can barely tell where my own fear ends.

There is no grand view here.

There is only the next blow and the person beneath it.`,
    mood: "chaos",
    collection: "classical",
    rooms: ["war","sins"],
    sourceUrl: "https://www.clevelandart.org/art/1965.310",
    imageCredit: "Anne-Louis Girodet de Roucy-Trioson; The Cleveland Museum of Art, Gift of Eugene Victor Thaw, 1965.310. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-fall-of-simon-magus-batoni",
    title: "The Fall of Simon Magus",
    artist: "Studio of Pompeo Batoni",
    year: "c. 1745–50",
    image: "/paintings/classical/classical-fall-of-simon-magus-batoni.jpg",
    excerpt: `I made the crowd look upward, and for a moment their belief felt like wings.

Now the support beneath me has gone.

The distance I used to measure my glory has become the distance of my fall.

Below, raised hands belong to prayers I cannot interrupt.

I claimed a height that would prove me more than human.

My body is answering instead, terribly ordinary, with nothing left to persuade the air.`,
    mood: "chaos",
    collection: "classical",
    rooms: ["sins","divine","nightmares"],
    sourceUrl: "https://www.clevelandart.org/art/1983.217",
    imageCredit: "Studio of Pompeo Batoni; The Cleveland Museum of Art, John L. Severance Fund, 1983.217. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-dead-christ-with-angels-bassano",
    title: "The Dead Christ with Angels",
    artist: "Leandro Bassano",
    year: "c. 1580",
    image: "/paintings/classical/classical-dead-christ-with-angels-bassano.jpg",
    excerpt: `I have wings, and they are useless for this.

Beside the other angel, I attend a body that will not become lighter because heaven has sent us.

We can arrange our care around the wounds, but care cannot pretend they are not there.

The silence between us is not the silence of certainty.

It is the difficult hush of keeping watch when love has arrived with empty hands and nowhere else to go.`,
    mood: "melancholy",
    collection: "classical",
    rooms: ["death","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1916.806",
    imageCredit: "Leandro Bassano; The Cleveland Museum of Art, Holden Collection, 1916.806. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-midnight-cazin",
    title: "Midnight",
    artist: "Jean-Charles Cazin",
    year: "1891",
    image: "/paintings/classical/classical-midnight-cazin.jpg",
    excerpt: `I know this town in daylight, but midnight has taken away the evidence.

The canal keeps its dark reflection close, and the buildings stand with the patience of things that do not need an answer.

I listen for a window opening, a footstep, any small refusal of the stillness.

Nothing comes.

Perhaps everyone is asleep.

Perhaps I am remembering a place that has continued without me and no longer knows how to let me in.`,
    mood: "isolation",
    collection: "classical",
    rooms: ["solitude","dreams"],
    sourceUrl: "https://www.clevelandart.org/art/1923.602",
    imageCredit: "Jean-Charles Cazin; The Cleveland Museum of Art, The Charles W. Harkness Gift, 1923.602. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-ruins-in-a-rocky-landscape-rosa",
    title: "Ruins in a Rocky Landscape",
    artist: "Salvator Rosa",
    year: "c. 1640",
    image: "/paintings/classical/classical-ruins-in-a-rocky-landscape-rosa.jpg",
    excerpt: `I sit beneath the rocks while the old masonry catches its last share of light.

The others can idle here as though a ruin were merely another kind of shelter.

I keep thinking about the hands that fitted those stones together.

They wanted something to remain.

Now our afternoon passes through their intention without asking permission.

The landscape is beautiful, and that troubles me: it has made such an easy place for their disappearance.`,
    mood: "melancholy",
    collection: "classical",
    rooms: ["solitude"],
    sourceUrl: "https://www.clevelandart.org/art/1958.472",
    imageCredit: "Salvator Rosa; The Cleveland Museum of Art, Gift of Rosenberg & Stiebel, Inc., 1958.472. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-christ-on-the-cross-el-greco",
    title: "Christ on the Cross",
    artist: "El Greco",
    year: "c. 1600–1610",
    image: "/paintings/classical/classical-christ-on-the-cross-el-greco.jpg",
    excerpt: `I stretch between the earth and a sky that will not take my weight.

Blood gives the body a language the heavens do not answer aloud.

You may let your eyes follow the long lines upward and call the movement spiritual.

Stay with the flesh a moment longer.

Before this can become a sign, it is a wound.

Before you find a promise in it, someone has to remain here and suffer its length.`,
    mood: "dread",
    collection: "classical",
    rooms: ["death","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1952.222",
    imageCredit: "El Greco; The Cleveland Museum of Art, Gift of the Hanna Fund, 1952.222. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-interior-gwen-john",
    title: "Interior",
    artist: "Gwen John",
    year: "1915",
    image: "/paintings/classical/classical-interior-gwen-john.jpg",
    excerpt: `I left the cups where another afternoon could find them.

The brown teapot sits with the composure of an object that has never needed company, while the room holds its pale light without complaint.

Nothing insists that I should be lonely.

That makes the feeling harder to explain.

I can imagine a hand entering this small arrangement, lifting a cup, changing the silence.

For now, even that imagined movement seems too loud.`,
    mood: "isolation",
    collection: "classical",
    rooms: ["solitude","longing"],
    sourceUrl: "https://www.clevelandart.org/art/1982.6",
    imageCredit: "Gwen John; The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 1982.6. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-stag-at-sharkeys-bellows",
    title: "Stag at Sharkey's",
    artist: "George Bellows",
    year: "1909",
    image: "/paintings/classical/classical-stag-at-sharkeys-bellows.jpg",
    excerpt: `I lean into the other body because distance would give the fist room to return.

Around the ropes, mouths open in a darkness crowded with appetite.

They can see the whole fight.

I can see only the shoulder, the glare, the brief space in which I must breathe.

Their excitement rises when my balance fails.

It is strange to become entertainment at the exact moment every part of you is trying to remain intact.`,
    mood: "chaos",
    collection: "classical",
    rooms: ["nightmares"],
    sourceUrl: "https://www.clevelandart.org/art/1922.1133",
    imageCredit: "George Bellows; The Cleveland Museum of Art, Hinman B. Hurlbut Collection, 1922.1133. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-twilight-in-the-wilderness-church",
    title: "Twilight in the Wilderness",
    artist: "Frederic Edwin Church",
    year: "1860",
    image: "/paintings/classical/classical-twilight-in-the-wilderness-church.jpg",
    excerpt: `I watch the sky turn red above water that has done nothing to deserve a warning.

The dark trees make a border around the brightness, but they cannot contain it.

This should be the hour when the world releases its demands.

Instead, every cloud looks like news traveling toward me.

I know that sunset is not a fire.

I keep repeating that knowledge while the wilderness glows as though it has heard otherwise.`,
    mood: "dread",
    collection: "classical",
    rooms: ["solitude","dreams"],
    sourceUrl: "https://www.clevelandart.org/art/1965.233",
    imageCredit: "Frederic Edwin Church; The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 1965.233. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-burning-of-parliament-turner",
    title: "The Burning of the Houses of Lords and Commons, 16 October 1834",
    artist: "Joseph Mallord William Turner",
    year: "1835",
    image: "/paintings/classical/classical-burning-of-parliament-turner.jpg",
    excerpt: `I came to the river because everyone was coming, and now the water has become another surface for the burning.

Boats press toward the blaze with a courage that looks very small from this bank.

Above them, the buildings lose their edges inside the light.

I cannot stop looking.

That is the shame I carry away: while others struggled to save what remained, some part of me stood still before the terrible color.`,
    mood: "chaos",
    collection: "classical",
    rooms: ["nightmares"],
    sourceUrl: "https://www.clevelandart.org/art/1942.647",
    imageCredit: "Joseph Mallord William Turner; The Cleveland Museum of Art, Bequest of John L. Severance, 1942.647. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-tiger-and-buffalo-rousseau",
    title: "Fight Between a Tiger and a Buffalo",
    artist: "Henri Rousseau",
    year: "1908",
    image: "/paintings/classical/classical-tiger-and-buffalo-rousseau.jpg",
    excerpt: `I thought the leaves would hide the movement.

Their sharp green shapes crowd around us, immense and strangely calm, while the tiger closes the distance my body cannot afford.

Nothing in this garden bends to make an escape.

Fruit hangs above the struggle as though ripening were the only event worth noticing.

I am not inside a peaceful wilderness.

I am inside the instant when its beauty stops having anything to do with my survival.`,
    mood: "dread",
    collection: "classical",
    rooms: ["nightmares","dreams"],
    sourceUrl: "https://www.clevelandart.org/art/1949.186",
    imageCredit: "Henri Rousseau; The Cleveland Museum of Art, Gift of the Hanna Fund, 1949.186. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-in-the-waves-gauguin",
    title: "In the Waves (Dans les Vagues)",
    artist: "Paul Gauguin",
    year: "1889",
    image: "/paintings/classical/classical-in-the-waves-gauguin.jpg",
    excerpt: `I turn my face away from the shore and let the green water gather around my shoulders.

Behind me, the orange earth is too vivid, too full of a life that has already decided what I should be.

The waves do not know that version of me.

They are cold and indifferent, not kind, but their indifference leaves room for a different breath.

I want to return without returning to exactly the same self.`,
    mood: "longing",
    collection: "classical",
    rooms: ["longing","dreams"],
    sourceUrl: "https://www.clevelandart.org/art/1978.63",
    imageCredit: "Paul Gauguin; The Cleveland Museum of Art, Gift of Mr. and Mrs. William Powell Jones, 1978.63. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-morning-after-a-storm-homer",
    title: "Early Morning After a Storm at Sea",
    artist: "Winslow Homer",
    year: "1900–1903",
    image: "/paintings/classical/classical-morning-after-a-storm-homer.jpg",
    excerpt: `I have survived the night, but the sea has not agreed to become gentle.

Morning lays its light across water still breaking against the rocks, and the shore receives each blow without a witness.

I listen for some announcement that the danger is over.

There is only the next wave.

Perhaps survival is this: standing before the same power that frightened you yesterday and learning that daylight changes the view, not the power.`,
    mood: "isolation",
    collection: "classical",
    rooms: ["solitude"],
    sourceUrl: "https://www.clevelandart.org/art/1924.195",
    imageCredit: "Winslow Homer; The Cleveland Museum of Art, Gift of J. H. Wade, 1924.195. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-christ-and-virgin-at-nazareth-zurbaran",
    title: "Christ and the Virgin in the House at Nazareth",
    artist: "Francisco de Zurbarán",
    year: "c. 1640",
    image: "/paintings/classical/classical-christ-and-virgin-at-nazareth-zurbaran.jpg",
    excerpt: `I watch him pause over the thorn, and the room becomes larger than the afternoon can bear.

There are books and fruit upon the table, ordinary things insisting that we are still at home.

My tears have arrived before I can explain them.

A small hurt should need only a mother and a moment of care.

Yet I look at his hand and feel a future moving toward us that my own hands cannot stop.`,
    mood: "dread",
    collection: "classical",
    rooms: ["divine","death","longing"],
    sourceUrl: "https://www.clevelandart.org/art/1960.117",
    imageCredit: "Francisco de Zurbarán; The Cleveland Museum of Art, Leonard C. Hanna Jr. Fund, 1960.117. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-waterfall-and-dead-beech-ruisdael",
    title: "Low Waterfall in a Wooded Landscape with a Dead Beech Tree",
    artist: "Jacob van Ruisdael",
    year: "c. 1660–70",
    image: "/paintings/classical/classical-waterfall-and-dead-beech-ruisdael.jpg",
    excerpt: `I lie across the foreground with the pale exposure of something that once had leaves.

Water keeps speaking below me; travelers follow the distant path toward a patch of sun.

Nobody needs my shade anymore.

Beyond the branches, an old building catches gold along its broken edge.

We make a handsome pair, the ruin and I.

It is possible to become part of a beautiful landscape precisely because you have stopped being alive.`,
    mood: "melancholy",
    collection: "classical",
    rooms: ["death","solitude"],
    sourceUrl: "https://www.clevelandart.org/art/1967.63",
    imageCredit: "Jacob van Ruisdael; The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund, 1967.63. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-point-judith-heade",
    title: "Point Judith, Rhode Island",
    artist: "Martin Johnson Heade",
    year: "1867–68",
    image: "/paintings/classical/classical-point-judith-heade.jpg",
    excerpt: `I search the dark water for the sails, then lose them again in the moonlight.

The shore has become a place without small details, only a low edge between two enormous silences.

I had thought knowing the name of this coast would make it familiar.

At night, names do not reach very far.

Somewhere to the left, people are aboard those ships.

I hold that fact like a faint light I cannot bring closer.`,
    mood: "isolation",
    collection: "classical",
    rooms: ["solitude","longing"],
    sourceUrl: "https://www.clevelandart.org/art/1970.161",
    imageCredit: "Martin Johnson Heade; The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund and Gift of Delbert Gutridge in memory of Orrel A. Parker by exchange, 1970.161. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-moonrise-at-the-priory-denis",
    title: "Drying the Linen, or Moonrise at the Priory",
    artist: "Maurice Denis",
    year: "1894",
    image: "/paintings/classical/classical-moonrise-at-the-priory-denis.jpg",
    excerpt: `I hang the linen beneath the moon and watch an ordinary task acquire the stillness of a ceremony.

My dark clothes disappear into the garden while the pale fabric takes what light remains.

The walls keep the night close around me.

Tomorrow these sheets will belong to daylight and familiar rooms.

Tonight they move like thoughts I have not spoken, suspended between my hands and the strange gold above the priory.`,
    mood: "isolation",
    collection: "classical",
    rooms: ["dreams","solitude"],
    sourceUrl: "https://www.clevelandart.org/art/2020.109",
    imageCredit: "Maurice Denis; The Cleveland Museum of Art, Nancy F. and Joseph P. Keithley Collection Gift, 2020.109. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-terminus-holbein",
    title: "Terminus, the Device of Erasmus",
    artist: "Hans Holbein the Younger",
    year: "c. 1532",
    image: "/paintings/classical/classical-terminus-holbein.jpg",
    excerpt: `I am made to mark the place beyond which something must not pass.

A human face has been given to my refusal, as though a boundary would be easier to understand if it could look back.

I cannot step aside without ceasing to be myself.

You may admire such steadfastness.

From here, it feels very close to being unable to leave.

Everything that travels past me has a freedom my permanence cannot purchase.`,
    mood: "isolation",
    collection: "classical",
    rooms: ["solitude","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1971.166",
    imageCredit: "Hans Holbein the Younger; The Cleveland Museum of Art, Gift of Dr. and Mrs. Sherman E. Lee in memory of Milton S. Fox, 1971.166. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-saint-paul-the-hermit-preti",
    title: "Saint Paul the Hermit",
    artist: "Mattia Preti",
    year: "c. 1662–1664",
    image: "/paintings/classical/classical-saint-paul-the-hermit-preti.jpg",
    excerpt: `I look upward before I notice how empty my hands have become.

The rough cloth against my body has learned every shape of hunger.

Somewhere above, the raven carries the small mercy on which another day depends.

They will call this solitude a choice, and perhaps it began as one.

But the desert has its own long hours.

I am grateful for the bread, and ashamed of how much I also wait for the bird.`,
    mood: "longing",
    collection: "classical",
    rooms: ["solitude","divine"],
    sourceUrl: "https://www.clevelandart.org/art/1969.109",
    imageCredit: "Mattia Preti; The Cleveland Museum of Art, Andrew R. and Martha Holden Jennings Fund, 1969.109. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-sacrifice-of-isaac-del-sarto",
    title: "The Sacrifice of Isaac",
    artist: "Andrea del Sarto",
    year: "c. 1527",
    image: "/paintings/classical/classical-sacrifice-of-isaac-del-sarto.jpg",
    excerpt: `I know the hand above me.

That is what makes the knife impossible to understand.

My father has become a stranger without changing his face, and I cannot find the place where obedience ends and I begin.

Then the angel interrupts the air.

You see rescue entering the picture.

I feel the moment before it, still lodged inside my body.

Even if the blade never falls, I will remember having waited for it.`,
    mood: "dread",
    collection: "classical",
    rooms: ["divine","nightmares"],
    sourceUrl: "https://www.clevelandart.org/art/1937.577",
    imageCredit: "Andrea del Sarto; The Cleveland Museum of Art, Delia E. Holden and L. E. Holden Funds, 1937.577. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
  {
    slug: "classical-mass-of-saint-gregory-baldung",
    title: "The Mass of Saint Gregory",
    artist: "Hans Baldung",
    year: "1511",
    image: "/paintings/classical/classical-mass-of-saint-gregory-baldung.jpg",
    excerpt: `I kneel at the altar and discover that an answer can be more frightening than a doubt.

The wounded body stands where ritual had taught my eyes what to expect.

Around me, the others stare; the instruments of suffering make belief terribly specific.

I wanted certainty to bring us peace.

Instead, the familiar room has opened upon pain that refuses to stay in the past.

My prayer continues, but it no longer sounds the same.`,
    mood: "dread",
    collection: "classical",
    rooms: ["divine","death"],
    sourceUrl: "https://www.clevelandart.org/art/1952.112",
    imageCredit: "Hans Baldung; The Cleveland Museum of Art, Gift of the Hanna Fund, 1952.112. Open Access image; resized from the museum's digital image.",
    license: "CC0 1.0 Universal",
  },
];

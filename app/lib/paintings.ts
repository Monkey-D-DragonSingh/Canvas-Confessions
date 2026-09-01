export type Mood = "dread" | "chaos" | "melancholy" | "isolation" | "longing" | "madness";

export type Painting = {
  slug: string;
  title: string;
  artist: string;
  year: string;
  image: string;
  excerpt: string;
  mood: Mood;
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
];

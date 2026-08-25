export type Painting = {
  slug: string;
  title: string;
  artist: string;
  year: string;
  image: string;
  excerpt: string;
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
  image: "/paintings/lucifer.jpg",
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
  image: "/paintings/the-fallen-angel-alexandre-cabanel.jpg",
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
    image: "/paintings/the-witches-sabbath-francisco-goya.jpg",
    excerpt: "Fear becomes powerful when enough people believe in it.",
  },
  {
    slug: "witches-flight-francisco-goya",
    title: "Witches' Flight",
    artist: "Francisco Goya",
    year: "1798",
    image: "/paintings/witches-flight-francisco-goya.jpg",
    excerpt: "Perhaps superstition is only fear wearing a costume.",
  },
  {
    slug: "the-isle-of-the-dead-arnold-bocklin",
    title: "The Isle of the Dead",
    artist: "Arnold Böcklin",
    year: "1880",
    image: "/paintings/the-isle-of-the-dead-arnold-bocklin.JPG",
    excerpt: "You have arrived somewhere you were never supposed to return from.",
  },
  {
    slug: "the-great-he-goat-francisco-goya",
    title: "The Great He-Goat",
    artist: "Francisco Goya",
    year: "1821-1823",
    image: "/paintings/the-great-he-goat-francisco-goya.jpg",
    excerpt: "Every crowd eventually chooses something to worship.",
  },
  {
    slug: "the-sin-franz-von-stuck",
    title: "The Sin",
    artist: "Franz von Stuck",
    year: "1893",
    image: "/paintings/the-sin-franz-von-stuck.jpg",
    excerpt: "Desire becomes frightening when it knows you cannot resist.",
  },
  {
    slug: "the-magic-circle-john-william-waterhouse",
    title: "The Magic Circle",
    artist: "John William Waterhouse",
    year: "1886",
    image: "/paintings/the-magic-circle-john-william-waterhouse.jpg",
    excerpt: "Every spell begins with someone believing.",
  },
  {
    slug: "la-belle-dame-sans-merci-john-william-waterhouse",
    title: "La Belle Dame Sans Merci",
    artist: "John William Waterhouse",
    year: "1893",
    image: "/paintings/la-belle-dame-sans-merci-john-william-waterhouse.jpg",
    excerpt: "You knew she was dangerous. You followed anyway.",
  },
  {
    slug: "the-awakening-conscience-william-holman-hunt",
    title: "The Awakening Conscience",
    artist: "William Holman Hunt",
    year: "1853",
    image: "/paintings/the-awakening-conscience-william-holman-hunt.jpg",
    excerpt: "Sometimes guilt is the first sign that you are still alive.",
  },
  {
    slug: "the-hireling-shepherd-william-holman-hunt",
    title: "The Hireling Shepherd",
    artist: "William Holman Hunt",
    year: "1851",
    image: "/paintings/the-hireling-shepherd-william-holman-hunt.jpg",
    excerpt: "Neglect can be more dangerous than cruelty.",
  },
  {
    slug: "the-vampire-edvard-munch",
    title: "The Vampire",
    artist: "Edvard Munch",
    year: "1895",
    image: "/paintings/the-vampire-edvard-munch.jpg",
    excerpt: "You called it love. I called it hunger.",
  },
  {
    slug: "vampire-philip-burne-jones",
    title: "Vampire",
    artist: "Philip Burne-Jones",
    year: "1897",
    image: "/paintings/vampire-philip-burne-jones.jpg",
    excerpt: "Some kisses leave you emptier than before.",
  },
  {
    slug: "the-kiss-of-the-sphinx-franz-von-stuck",
    title: "The Kiss of the Sphinx",
    artist: "Franz von Stuck",
    year: "1895",
    image: "/paintings/the-kiss-of-the-sphinx-franz-von-stuck.jpg",
    excerpt: "Some questions have teeth.",
  },
  {
    slug: "nighthawks-edward-hopper",
    title: "Nighthawks",
    artist: "Edward Hopper",
    year: "1942",
    image: "/paintings/nighthawks-edward-hopper.jpg",
    excerpt: "We are all sitting together, and none of us are together.",
  },
  {
    slug: "the-entombment-of-christ-caravaggio",
    title: "The Entombment of Christ",
    artist: "Caravaggio",
    year: "1603-1604",
    image: "/paintings/the-entombment-of-christ-caravaggio.jpg",
    excerpt: "Even faith must eventually touch death.",
  },
  {
    slug: "the-descent-from-the-cross-peter-paul-rubens",
    title: "The Descent from the Cross",
    artist: "Peter Paul Rubens",
    year: "1612-1614",
    image: "/paintings/the-descent-from-the-cross-peter-paul-rubens.jpg",
    excerpt: "There is no graceful way to carry the dead.",
  },
  {
    slug: "the-descent-from-the-cross-rembrandt",
    title: "The Descent from the Cross",
    artist: "Rembrandt",
    year: "1634",
    image: "/paintings/the-descent-from-the-cross-rembrandt.jpg",
    excerpt: "The darkness is not outside. It is inside the room.",
  },
  {
    slug: "the-nightmare-henry-fuseli",
    title: "The Nightmare",
    artist: "Henry Fuseli",
    year: "1781",
    image: "/paintings/the-nightmare-henry-fuseli.jpg",
    excerpt: "You call it a dream because you are afraid to call it real.",
  },
  {
    slug: "pandemonium-john-martin",
    title: "Pandemonium",
    artist: "John Martin",
    year: "1841",
    image: "/paintings/pandemonium-john-martin.JPG",
    excerpt: "Hell does not need fire when chaos is enough.",
  },
  {
    slug: "the-great-day-of-his-wrath-john-martin",
    title: "The Great Day of His Wrath",
    artist: "John Martin",
    year: "1851-1853",
    image: "/paintings/the-great-day-of-his-wrath-john-martin.jpg",
    excerpt: "When the world ends, no one will be important.",
  },
  {
    slug: "the-plains-of-heaven-john-martin",
    title: "The Plains of Heaven",
    artist: "John Martin",
    year: "1851-1853",
    image: "/paintings/the-plains-of-heaven-john-martin.jpg",
    excerpt: "Even paradise can feel strangely empty.",
  },
  {
    slug: "the-temptation-of-st-anthony-hieronymus-bosch",
    title: "The Temptation of St. Anthony",
    artist: "Hieronymus Bosch",
    year: "1501",
    image: "/paintings/the-temptation-of-st-anthony-hieronymus-bosch.jpg",
    excerpt: "The worst monsters are the ones that know exactly what you want.",
  },
  {
    slug: "the-temptation-of-st-anthony-matthias-grunewald",
    title: "The Temptation of St. Anthony",
    artist: "Matthias Grünewald",
    year: "1512-1516",
    image: "/paintings/the-temptation-of-st-anthony-matthias-grunewald.jpg",
    excerpt: "Faith becomes frightening when doubt grows teeth.",
  },
  {
    slug: "the-death-of-marat-jacques-louis-david",
    title: "The Death of Marat",
    artist: "Jacques-Louis David",
    year: "1793",
    image: "/paintings/the-death-of-marat-jacques-louis-david.jpg",
    excerpt: "Some people become immortal only after they die.",
  },
  {
    slug: "the-death-of-socrates-jacques-louis-david",
    title: "The Death of Socrates",
    artist: "Jacques-Louis David",
    year: "1787",
    image: "/paintings/the-death-of-socrates-jacques-louis-david.jpg",
    excerpt: "Sometimes the price of truth is everything.",
  },
  {
    slug: "the-death-of-seneca-peter-paul-rubens",
    title: "The Death of Seneca",
    artist: "Peter Paul Rubens",
    year: "1614",
    image: "/paintings/the-death-of-seneca-peter-paul-rubens.jpg",
    excerpt: "Even the wise cannot negotiate with death.",
  },
  {
    slug: "the-raft-of-the-medusa-theodore-gericault",
    title: "The Raft of the Medusa",
    artist: "Théodore Géricault",
    year: "1818-1819",
    image: "/paintings/the-raft-of-the-medusa-theodore-gericault.jpg",
    excerpt: "Desperation reveals what people become when hope disappears.",
  },
  {
    slug: "the-skeletons-fighting-over-a-hanged-man-james-ensor",
    title: "The Skeletons Fighting Over a Hanged Man",
    artist: "James Ensor",
    year: "1891",
    image: "/paintings/the-skeletons-fighting-over-a-hanged-man-james-ensor.jpg",
    excerpt: "Even death can become ridiculous when humans are involved.",
  },
  {
    slug: "the-skeletons-warming-themselves-james-ensor",
    title: "The Skeletons Warming Themselves",
    artist: "James Ensor",
    year: "1889",
    image: "/paintings/the-skeletons-warming-themselves-james-ensor.jpg",
    excerpt: "Perhaps death is only waiting for the living to catch up.",
  },
  {
    slug: "the-body-of-the-dead-christ-in-the-tomb-hans-holbein-the-younger",
    title: "The Body of the Dead Christ in the Tomb",
    artist: "Hans Holbein the Younger",
    year: "1521-1522",
    image: "/paintings/the-body-of-the-dead-christ-in-the-tomb-hans-holbein-the-younger.JPG",
    excerpt: "Death is terrifying when nothing about it is softened.",
  },
  {
    slug: "the-last-judgment-michelangelo",
    title: "The Last Judgment",
    artist: "Michelangelo",
    year: "1536-1541",
    image: "/paintings/the-last-judgment-michelangelo.jpg",
    excerpt: "Every soul eventually faces itself.",
  },
  {
    slug: "the-last-judgment-hans-memling",
    title: "The Last Judgment",
    artist: "Hans Memling",
    year: "1467-1471",
    image: "/paintings/the-last-judgment-hans-memling.jpg",
    excerpt: "There is nowhere to hide when eternity is watching.",
  },
  {
    slug: "the-dance-of-death-michael-wolgemut",
    title: "The Dance of Death",
    artist: "Michael Wolgemut",
    year: "1493",
    image: "/paintings/the-dance-of-death-michael-wolgemut.jpg",
    excerpt: "The grave makes equals of everyone.",
  },
  {
    slug: "the-funeral-edvard-munch",
    title: "The Funeral",
    artist: "Edvard Munch",
    year: "1885",
    image: "/paintings/the-funeral-edvard-munch.jpg",
    excerpt: "The room is full, yet death has made it empty.",
  },
  {
    slug: "death-and-the-maiden-hans-baldung",
    title: "Death and the Maiden",
    artist: "Hans Baldung",
    year: "1517",
    image: "/paintings/death-and-the-maiden-hans-baldung.jpg",
    excerpt: "Beauty and death have always walked together.",
  },
  {
    slug: "judith-beheading-holofernes-caravaggio",
    title: "Judith Beheading Holofernes",
    artist: "Caravaggio",
    year: "1599",
    image: "/paintings/judith-beheading-holofernes-caravaggio.jpg",
    excerpt: "You mistook her mercy for weakness.",
  },
  {
    slug: "judith-slaying-holofernes-artemisia-gentileschi",
    title: "Judith Slaying Holofernes",
    artist: "Artemisia Gentileschi",
    year: "1620",
    image: "/paintings/judith-slaying-holofernes-artemisia-gentileschi.jpg",
    excerpt: "Some wounds are answered with another wound.",
  },
  {
    slug: "david-with-the-head-of-goliath-caravaggio",
    title: "David with the Head of Goliath",
    artist: "Caravaggio",
    year: "1610",
    image: "/paintings/david-with-the-head-of-goliath-caravaggio.jpg",
    excerpt: "The victor does not always look victorious.",
  },
  {
    slug: "david-with-the-head-of-goliath-guido-reni",
    title: "David with the Head of Goliath",
    artist: "Guido Reni",
    year: "1605",
    image: "/paintings/david-with-the-head-of-goliath-guido-reni.jpg",
    excerpt: "Power changes hands in a single moment.",
  },
  {
    slug: "salome-with-the-head-of-john-the-baptist-caravaggio",
    title: "Salome with the Head of John the Baptist",
    artist: "Caravaggio",
    year: "1609",
    image: "/paintings/salome-with-the-head-of-john-the-baptist-caravaggio.jpg",
    excerpt: "Desire can ask for something you can never take back.",
  },
  {
    slug: "salome-with-the-head-of-john-the-baptist-titian",
    title: "Salome with the Head of John the Baptist",
    artist: "Titian",
    year: "1515",
    image: "/paintings/salome-with-the-head-of-john-the-baptist-titian.jpg",
    excerpt: "Beauty can carry terrible intentions.",
  },
  {
    slug: "the-beheading-of-saint-john-the-baptist-caravaggio",
    title: "The Beheading of Saint John the Baptist",
    artist: "Caravaggio",
    year: "1608",
    image: "/paintings/the-beheading-of-saint-john-the-baptist-caravaggio.jpg",
    excerpt: "Some endings happen quietly.",
  },
  {
    slug: "the-taking-of-christ-caravaggio",
    title: "The Taking of Christ",
    artist: "Caravaggio",
    year: "1602",
    image: "/paintings/the-taking-of-christ-caravaggio.jpg",
    excerpt: "Betrayal sometimes arrives wearing the face of friendship.",
  },
  {
    slug: "the-martyrdom-of-saint-matthew-caravaggio",
    title: "The Martyrdom of Saint Matthew",
    artist: "Caravaggio",
    year: "1600",
    image: "/paintings/the-martyrdom-of-saint-matthew-caravaggio.jpg",
    excerpt: "Violence does not ask whether you are ready.",
  },
  {
    slug: "the-massacre-at-chios-eugene-delacroix",
    title: "The Massacre at Chios",
    artist: "Eugène Delacroix",
    year: "1824",
    image: "/paintings/the-massacre-at-chios-eugene-delacroix.jpg",
    excerpt: "War does not create heroes for everyone.",
  },
  {
    slug: "the-execution-of-lady-jane-grey-paul-delaroche",
    title: "The Execution of Lady Jane Grey",
    artist: "Paul Delaroche",
    year: "1833",
    image: "/paintings/the-execution-of-lady-jane-grey-paul-delaroche.jpg",
    excerpt: "Sometimes innocence still walks toward the blade.",
  },
  {
    slug: "the-third-of-may-1808-francisco-goya",
    title: "The Third of May 1808",
    artist: "Francisco Goya",
    year: "1814",
    image: "/paintings/the-third-of-may-1808-francisco-goya.jpg",
    excerpt: "There is no glory in the moment before death.",
  },
  {
    slug: "the-dog-francisco-goya",
    title: "The Dog",
    artist: "Francisco Goya",
    year: "1819-1823",
    image: "/paintings/the-dog-francisco-goya.jpg",
    excerpt: "Sometimes loneliness is the only thing left in the world.",
  },
  {
    slug: "the-madhouse-francisco-goya",
    title: "The Madhouse",
    artist: "Francisco Goya",
    year: "1816",
    image: "/paintings/the-madhouse-francisco-goya.jpg",
    excerpt: "Perhaps madness is only another way of seeing the world.",
  },
  {
    slug: "the-colossus-francisco-goya",
    title: "The Colossus",
    artist: "Francisco Goya",
    year: "1808-1812",
    image: "/paintings/the-colossus-francisco-goya.jpg",
    excerpt: "Some fears are too enormous to understand.",
  },
  {
    slug: "the-scream-edvard-munch",
    title: "The Scream",
    artist: "Edvard Munch",
    year: "1893",
    image: "/paintings/the-scream-edvard-munch.jpg",
    excerpt: "I screamed, but the world kept moving.",
  },
  {
    slug: "anxiety-edvard-munch",
    title: "Anxiety",
    artist: "Edvard Munch",
    year: "1894",
    image: "/paintings/anxiety-edvard-munch.jpg",
    excerpt: "Everyone is standing beside you, and somehow you are still alone.",
  },
  {
    slug: "melancholy-edvard-munch",
    title: "Melancholy",
    artist: "Edvard Munch",
    year: "1894-1896",
    image: "/paintings/melancholy-edvard-munch.jpg",
    excerpt: "Some sadness does not need a reason.",
  },
  {
    slug: "evening-on-karl-johan-edvard-munch",
    title: "Evening on Karl Johan",
    artist: "Edvard Munch",
    year: "1892",
    image: "/paintings/evening-on-karl-johan-edvard-munch.jpg",
    excerpt: "Sometimes the crowd is lonelier than solitude.",
  },
  {
    slug: "despair-edvard-munch",
    title: "Despair",
    artist: "Edvard Munch",
    year: "1892",
    image: "/paintings/despair-edvard-munch.jpg",
    excerpt: "The world looks different when hope leaves it.",
  },
  {
    slug: "the-sick-child-edvard-munch",
    title: "The Sick Child",
    artist: "Edvard Munch",
    year: "1885-1886",
    image: "/paintings/the-sick-child-edvard-munch.jpg",
    excerpt: "Memory can hurt more than the moment itself.",
  },
  {
    slug: "self-portrait-with-death-playing-the-fiddle-arnold-bocklin",
    title: "Self-Portrait with Death Playing the Fiddle",
    artist: "Arnold Böcklin",
    year: "1872",
    image: "/paintings/self-portrait-with-death-playing-the-fiddle-arnold-bocklin.jpg",
    excerpt: "I know you're there. You don't need to remind me.",
  },
  {
    slug: "the-painter-s-family-egon-schiele",
    title: "The Painter's Family",
    artist: "Egon Schiele",
    year: "1918",
    image: "/paintings/the-painter-s-family-egon-schiele.jpeg",
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
    image: "/paintings/self-portrait-with-physalis-egon-schiele.jpg",
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
    image: "/paintings/death-and-the-maiden-egon-schiele.jpg",
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
    image: "/paintings/the-dead-mother-egon-schiele.jpg",
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
    image: "/paintings/the-agony-august-friedrich-albrecht-schenck.jpg",
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
    image: "/paintings/insane-woman-theodore-gericault.jpg",
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
    image: "/paintings/prometheus-bound-peter-paul-rubens.jpg",
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
    image: "/paintings/prometheus-jose-clemente-orozco.jpg",
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
    image: "/paintings/ixion-peter-paul-rubens.jpg",
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
    image: "/paintings/the-fall-of-the-rebel-angels-pieter-bruegel-the-elder.jpg",
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
    image: "/paintings/the-fall-of-the-rebel-angels-luca-giordano.jpg",
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
    image: "/paintings/the-punishment-of-tityus-titian.jpg",
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
    image: "/paintings/tityus-jose-de-ribera.jpg",
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
    image: "/paintings/sisyphus-titian.jpg",
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
    image: "/paintings/sisyphus-franz-von-stuck.jpg",
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
    image: "/paintings/the-rape-of-proserpina-peter-paul-rubens.jpg",
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
    image: "/paintings/the-abduction-of-proserpine-rembrandt.jpg",
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
    image: "/paintings/oedipus-and-the-sphinx-gustave-moreau.jpg",
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
    image: "/paintings/oedipus-cursing-his-son-polynices-henry-fuseli.jpg",
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
    image: "/paintings/ophelia-john-everett-millais.jpg",
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
    image: "/paintings/ophelia-alexandre-cabanel.JPG",
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
    image: "/paintings/the-soul-of-the-rose-john-william-waterhouse.jpg",
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
    image: "/paintings/circe-invidiosa-john-william-waterhouse.jpg",
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
    image: "/paintings/circe-offering-the-cup-to-ulysses-john-william-waterhouse.jpg",
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
    image: "/paintings/the-monk-by-the-sea-caspar-david-friedrich.jpg",
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
    image: "/paintings/abbey-in-the-oakwood-caspar-david-friedrich.jpg",
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
    image: "/paintings/two-men-contemplating-the-moon-caspar-david-friedrich.jpg",
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
    image: "/paintings/the-evening-star-caspar-david-friedrich.jpg",
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
    image: "/paintings/the-lamentation-over-the-dead-christ-andrea-mantegna.jpg",
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
    image: "/paintings/the-last-judgment-fra-angelico.jpg",
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
    image: "/paintings/the-crucifixion-matthias-grunewald.jpg",
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
    image: "/paintings/the-apparition-gustave-moreau.jpg",
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
    image: "/paintings/salome-dancing-before-herod-gustave-moreau.jpg",
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
    image: "/paintings/salome-in-the-garden-gustave-moreau.jpg",
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
    image: "/paintings/the-kiss-gustav-klimt.jpg",
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
    image: "/paintings/the-birth-of-venus-sandro-botticelli.jpg",
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
    image: "/paintings/the-son-of-man-rene-magritte.png",
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
    image: "/paintings/the-lovers-rene-magritte.jpg",
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
    image: "/paintings/the-human-condition-rene-magritte.jpg",
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
    image: "/paintings/the-empire-of-light-rene-magritte.jpg",
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
    image: "/paintings/the-false-mirror-rene-magritte.jpg",
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
    image: "/paintings/the-cyclops-odilon-redon.jpg",
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
    image: "/paintings/the-crying-spider-odilon-redon.jpg",
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
    image: "/paintings/the-dream-henri-rousseau.jpg",
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
    image: "/paintings/the-snake-charmer-henri-rousseau.jpg",
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
    image: "/paintings/the-sleeping-gypsy-henri-rousseau.jpg",
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
];

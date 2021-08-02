(function() {
    const leads = [
        'Begone! You',
        'Bless your little heart, you',
        'Look, you',
        'You are a',
    ]

    const adjectives = [
        'acrimonius',
        'asinine',
        'banal',
        'belligerent',
        'bitter',
        'contrary',
        'crotchety',
        'decrepit',
        'degenerate',
        'depraved',
        'hostile',
        'inconsiderate',
        'morose',
        'mundane',
        'obstinate',
        'obtuse',
        'petulant',
        'pin headed',
        'pugnacious',
        'sour',
        'stagnant',
        'surly',
        'uncultured',
        'uneducated',
        'unseasoned',
        'untidy',
        'vague',
        'vapid',
    ]

    const nouns = [
        'block of moldy cheese',
        'bowl of hotdog water',
        'brick',
        'broken crayon',
        'broken window',
        'bucket of dirty mop water',
        'chicken wing',
        'cornworm',
        'cracked egg',
        'empty cup',
        'fart in a jar',
        'flat spare tire',
        'greasy napkin',
        'jar of pickle juice',
        'jug of spoiled milk',
        'melted ice cream cone',
        'mud puddle',
        'overgrown fish',
        'peanut',
        'pile of chewed gum',
        'potato',
        'rotten banana',
        'rusty gate',
        'slice of stale bread',
        'soggy cheeto',
        'wet sock',
        'wobbly chair',
    ]

    function randomFrom(array) {
        return array[Math.floor(Math.random()*array.length)]
    }

    function insult() {
        let lead = randomFrom(leads)
        const adjective = randomFrom(adjectives)
        const noun = randomFrom(nouns)

        if (['a', 'e', 'i', 'o', 'u'].includes(adjective[0]) && lead.endsWith(' a')) {
          lead = `${lead}n`
        }

        document.getElementById('insult').innerHTML = `${lead} ${adjective} ${noun}.\n`
    }

    document.getElementById('button').onclick = insult

    insult()
})()

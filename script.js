// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to shuffle answers and adjust the correct answer index
function shuffleAnswers(questionData) {
    const answers = questionData.answers.slice(); // Make a copy of the answers array
    const correctAnswer = answers[questionData.correct]; // Store the correct answer
    shuffle(answers); // Shuffle the answers
    questionData.correct = answers.indexOf(correctAnswer); // Update the correct index
    questionData.answers = answers; // Update the answers array
}

// Function to load quiz data and shuffle each question's answers
function loadQuiz(quizData) {
    quizData.antonyms.forEach(shuffleAnswers);
    quizData.synonyms.forEach(shuffleAnswers);
    // Add more categories or sections if needed
}

const quizData = {
    antonyms: [
        { question: "What is the opposite of 'amateur'?", answers: ["Professional", "Child", "Foreigner", "Winter"], correct: 0 },
        { question: "What is the opposite of 'adult'?", answers: ["Child", "Professional", "Friend", "Poverty"], correct: 0 },
        { question: "What is the opposite of 'arrival'?", answers: ["Departure", "Exit", "Front", "Defeat"], correct: 0 },
        { question: "What is the opposite of 'back, rear'?", answers: ["Front", "Foot", "Wealth", "Safety"], correct: 0 },
        { question: "What is the opposite of 'birth'?", answers: ["Death", "Youth", "Expenditure", "Enemy"], correct: 0 },
        { question: "What is the opposite of 'captivity'?", answers: ["Freedom", "Safety", "Master", "Victory"], correct: 0 },
        { question: "What is the opposite of 'danger'?", answers: ["Safety", "Cold", "Exit", "Summer"], correct: 0 },
        { question: "What is the opposite of 'entrance'?", answers: ["Exit", "Arrival", "Sickness", "Guest"], correct: 0 },
        { question: "What is the opposite of 'friend'?", answers: ["Enemy", "Landlord", "Winter", "Foot"], correct: 0 },
        { question: "What is the opposite of 'health'?", answers: ["Sickness", "Cold", "Defeat", "Danger"], correct: 0 },
        { question: "What is the opposite of 'good'?", answers: ["Evil", "Defeat", "Past", "Wealth"], correct: 0 },
        { question: "What is the opposite of 'head'?", answers: ["Foot", "Weakness", "Cold", "Strength"], correct: 0 },
        { question: "What is the opposite of 'heat'?", answers: ["Cold", "Liquid", "Winter", "Safety"], correct: 0 },
        { question: "What is the opposite of 'host'?", answers: ["Guest", "Servant", "Foot", "Summer"], correct: 0 },
        { question: "What is the opposite of 'income'?", answers: ["Expenditure", "Safety", "Arrival", "Health"], correct: 0 },
        { question: "What is the opposite of 'liquid'?", answers: ["Solid", "Winter", "Freedom", "Friend"], correct: 0 },
        { question: "What is the opposite of 'master'?", answers: ["Servant", "Guest", "Defeat", "Summer"], correct: 0 },
        { question: "What is the opposite of 'mountain'?", answers: ["Valley", "Past", "Heat", "Landlord"], correct: 0 },
        { question: "What is the opposite of 'native'?", answers: ["Foreigner", "Professional", "Victory", "Tenant"], correct: 0 },
        { question: "What is the opposite of 'past'?", answers: ["Future", "Evil", "Youth", "Strength"], correct: 0 },
        { question: "What is the opposite of 'poverty'?", answers: ["Wealth", "Sickness", "Answer", "Victory"], correct: 0 },
        { question: "What is the opposite of 'question'?", answers: ["Answer", "Defeat", "Strength", "Valley"], correct: 0 },
        { question: "What is the opposite of 'sale'?", answers: ["Purchase", "Victory", "Youth", "Safety"], correct: 0 },
        { question: "What is the opposite of 'summer'?", answers: ["Winter", "Tenant", "Strength", "Freedom"], correct: 0 },
        { question: "What is the opposite of 'tenant'?", answers: ["Landlord", "Guest", "Solid", "Death"], correct: 0 },
        { question: "What is the opposite of 'victory'?", answers: ["Defeat", "Peace", "Expenditure", "Cold"], correct: 0 },
        { question: "What is the opposite of 'war'?", answers: ["Peace", "Safety", "Poverty", "Winter"], correct: 0 },
        { question: "What is the opposite of 'weakness'?", answers: ["Strength", "Wealth", "Answer", "Mountain"], correct: 0 },
        { question: "What is the opposite of 'youth'?", answers: ["Age", "Good", "Friend", "Arrival"], correct: 0 },

        { question: "What is the opposite of 'ancient'?", answers: ["Modern", "Lazy", "Public", "Shallow"], correct: 0 },
        { question: "What is the opposite of 'angry'?", answers: ["Pleased", "Excited", "Junior", "Rough"], correct: 0 },
        { question: "What is the opposite of 'beneficial'?", answers: ["Harmful", "Neat", "Wild", "Solid"], correct: 0 },
        { question: "What is the opposite of 'bright'?", answers: ["Dark", "Fresh", "Senior", "Weak"], correct: 0 },
        { question: "What is the opposite of 'calm'?", answers: ["Excited or rough", "Solid", "Hollow", "Lazy"], correct: 0 },
        { question: "What is the opposite of 'common'?", answers: ["Rare", "Inferior", "Unique", "Permanent"], correct: 0 },
        { question: "What is the opposite of 'cool'?", answers: ["Warm", "Temporary", "Raw", "Safe"], correct: 0 },
        { question: "What is the opposite of 'deep'?", answers: ["Shallow", "Old-fashioned", "Blunt", "True"], correct: 0 },
        { question: "What is the opposite of 'delicate'?", answers: ["Strong", "Wasteful", "Temporary", "Private"], correct: 0 },
        { question: "What is the opposite of 'doubtful'?", answers: ["Certain", "Vacant", "Tame", "Fair"], correct: 0 },
        { question: "What is the opposite of 'fair'?", answers: ["Dark", "Solid", "Fresh", "Sharp"], correct: 0 },
        { question: "What is the opposite of 'fresh'?", answers: ["Stale", "Raw", "Guilty", "Neat"], correct: 0 },
        { question: "What is the opposite of 'generous'?", answers: ["Selfish", "Tame", "Harsh", "Extravagant"], correct: 0 },
        { question: "What is the opposite of 'tame'?", answers: ["Wild", "Superior", "Vacant", "Temporary"], correct: 0 },
        { question: "What is the opposite of 'temporary'?", answers: ["Permanent", "Full", "Cool", "Certain"], correct: 0 },
        { question: "What is the opposite of 'thrifty'?", answers: ["Extravagant", "Superior", "Unique", "Solid"], correct: 0 },
        { question: "What is the opposite of 'true'?", answers: ["False or unture/untrue", "liquid", "Solid", "Private"], correct: 0 },
        
        { question: "What is the opposite of 'hollow'?", answers: ["Solid", "Fair", "Selfish", "Moving"], correct: 0 },
        { question: "What is the opposite of 'inferior'?", answers: ["Superior", "Guilty", "Economical", "Temporary"], correct: 0 },
        { question: "What is the opposite of 'innocent'?", answers: ["Guilty", "Moving", "Hollow", "Shallow"], correct: 0 },
        { question: "What is the opposite of 'kind'?", answers: ["Cruel", "Solid", "Wild", "Vacant"], correct: 0 },
        { question: "What is the opposite of 'lazy'?", answers: ["Hardworking", "Neat", "Fair", "Certain"], correct: 0 },
        { question: "What is the opposite of 'modern'?", answers: ["Old-fashioned", "Senior", "Neat", "Fresh"], correct: 0 },
        { question: "What is the opposite of 'moving'?", answers: ["Stationary", "Safe", "Selfish", "Ancient"], correct: 0 },
        { question: "What is the opposite of 'neat'?", answers: ["Untidy", "Lazy", "Stale", "Selfish"], correct: 0 },
        { question: "What is the opposite of 'negative'?", answers: ["Positive", "Superior", "Inferior", "Fresh"], correct: 0 },
        { question: "What is the opposite of 'public'?", answers: ["Private", "Vacant", "Permanent", "Excited"], correct: 0 },
        { question: "What is the opposite of 'raw'?", answers: ["Cooked", "Kind", "Positive", "Certain"], correct: 0 },
        { question: "What is the opposite of 'safe'?", answers: ["Dangerous", "Selfish", "Ancient", "Lazy"], correct: 0 },
        { question: "What is the opposite of 'senior'?", answers: ["Junior", "Public", "Neat", "Moving"], correct: 0 },
        { question: "What is the opposite of 'sharp'?", answers: ["Blunt", "Fair", "Moving", "Superior"], correct: 0 },
        { question: "What is the opposite of 'unique'?", answers: ["Common", "Solid", "Vacant", "Selfish"], correct: 0 },
        { question: "What is the opposite of 'vacant'?", answers: ["Full", "Temporary", "Junior", "Private"], correct: 0 },
        { question: "What is the opposite of 'wasteful'?", answers: ["Economical", "Untidy", "Solid", "Selfish"], correct: 0 },
        { question: "What is the opposite of 'weak'?", answers: ["Strong", "Modern", "Neat", "Moving"], correct: 0 },
    
        // Antonyms of Verbs
        { question: "What is the opposite of 'accept'?", answers: ["Refuse", "Deny", "Forbid", "Praise"], correct: 0 },
        { question: "What is the opposite of 'admit'?", answers: ["Deny", "Refuse", "Forbid", "Separate"], correct: 0 },
        { question: "What is the opposite of 'allow'?", answers: ["Forbid", "Separate", "Miss", "Praise"], correct: 0 },
        { question: "What is the opposite of 'bend'?", answers: ["Straighten", "Miss", "Forbid", "Separate"], correct: 0 },
        { question: "What is the opposite of 'blame'?", answers: ["Praise", "Lead", "Miss", "Join"], correct: 0 },
        { question: "What is the opposite of 'give'?", answers: ["Take, Receive", "Hit", "Join", "Refuse"], correct: 0 },
        { question: "What is the opposite of 'hit'?", answers: ["Miss", "Praise", "Lead", "Separate"], correct: 0 },
        { question: "What is the opposite of 'join'?", answers: ["Separate", "Lead", "Miss", "Praise"], correct: 0 },
        { question: "What is the opposite of 'lead'?", answers: ["Follow", "Give", "Refuse", "Take"], correct: 0 },
        { question: "What is the opposite of 'love'?", answers: ["Hate", "Miss", "Praise", "Lead"], correct: 0 },
        {
            question: "What is the antonym of 'build'?",
            answers: ["Create", "Destroy", "Construct", "Assemble"],
            correct: 1
          },
          {
            question: "What is the antonym of 'capture'?",
            answers: ["Release", "Hold", "Catch", "Detain"],
            correct: 0
          },
          {
            question: "What is the antonym of 'employ'?",
            answers: ["Hire", "Dismiss", "Assign", "Recruit"],
            correct: 1
          },
          {
            question: "What is the antonym of 'empty'?",
            answers: ["Fill", "Drain", "Reduce", "Vacant"],
            correct: 0
          },
          {
            question: "What is the antonym of 'expand'?",
            answers: ["Enlarge", "Grow", "Contract", "Widen"],
            correct: 2
          },
          {
            question: "What is the antonym of 'fail'?",
            answers: ["Lose", "Drop", "Succeed", "Break"],
            correct: 2
          },
          {
            question: "What is the antonym of 'float'?",
            answers: ["Sink", "Rise", "Soar", "Hover"],
            correct: 0
          },
          {
            question: "What is the antonym of 'gain'?",
            answers: ["Acquire", "Win", "Lose", "Obtain"],
            correct: 2
          },
          {
            question: "What is the antonym of 'punish'?",
            answers: ["Reward", "Blame", "Discipline", "Sanction"],
            correct: 0
          },
          {
            question: "What is the antonym of 'push'?",
            answers: ["Move", "Pull", "Shove", "Press"],
            correct: 1
          },
          {
            question: "What is the antonym of 'remember'?",
            answers: ["Forget", "Recall", "Remind", "Recognize"],
            correct: 0
          },
          {
            question: "What is the antonym of 'rise'?",
            answers: ["Elevate", "Lift", "Fall", "Climb"],
            correct: 2
          },
          {
            question: "What is the antonym of 'shorten'?",
            answers: ["Extend", "Grow", "Shrink", "Lengthen"],
            correct: 3
          },
          {
            question: "What is the antonym of 'shout'?",
            answers: ["Scream", "Whisper", "Cry", "Yell"],
            correct: 1
          },
          {
            question: "What is the antonym of 'throw'?",
            answers: ["Drop", "Hold", "Catch", "Toss"],
            correct: 2
          },
          {
            question: "What is the antonym of 'work'?",
            answers: ["Rest", "Play", "Relax", "Idle"],
            correct: 1
          },
          {
            question: "What is the antonym of 'alone'?",
            answers: ["Apart", "Together", "Separate", "Lonely"],
            correct: 1
          },
          {
            question: "What is the antonym of 'always'?",
            answers: ["Sometimes", "Never", "Often", "Occasionally"],
            correct: 1
          },
          {
            question: "What is the antonym of 'clearly'?",
            answers: ["Blurry", "Vaguely", "Distinctly", "Precisely"],
            correct: 1
          },
          {
            question: "What is the antonym of 'early'?",
            answers: ["Late", "Soon", "Prompt", "Lately"],
            correct: 0
          },
          {
            question: "What is the antonym of 'everywhere'?",
            answers: ["Nowhere", "Somewhere", "Here", "There"],
            correct: 0
          },
          {
            question: "What is the antonym of 'fast'?",
            answers: ["Quick", "Slow", "Rapid", "Speedy"],
            correct: 1
          },
          {
            question: "What is the antonym of 'home'?",
            answers: ["Away", "Foreign", "Abroad", "Distant"],
            correct: 2
          },
          {
            question: "What is the antonym of 'often'?",
            answers: ["Never", "Sometimes", "Seldom", "Always"],
            correct: 2
          },
          {
            question: "What is the antonym of 'regularly'?",
            answers: ["Frequently", "Occasionally", "Periodically", "Usually"],
            correct: 1
          },
          {
            question: "What is the antonym of 'sometimes'?",
            answers: ["Always", "Never", "Occasionally", "Often"],
            correct: 1
          },
          {
            question: "What is the antonym of 'wholly'?",
            answers: ["Fully", "Partly", "Entirely", "Mostly"],
            correct: 1
          },
          {
            question: "What is the antonym of 'well'?",
            answers: ["Good", "Healthy", "Badly", "Fine"],
            correct: 2
          }
        // Add more questions here...
    ],
    synonyms: [
        //Synonyms of noun
        { question: "What is a synonym for 'act'?", answers: ["Deed", "Entry", "Conduct", "Start"], correct: 0 },
        { question: "What is a synonym for 'admission'?", answers: ["Entry", "Conduct", "Learning", "Verdict"], correct: 0 },
        { question: "What is a synonym for 'affection'?", answers: ["Love", "Learning", "Verdict", "Start"], correct: 0 },
        { question: "What is a synonym for 'beginning'?", answers: ["Start", "Trip", "Result", "Reason"], correct: 0 },
        { question: "What is a synonym for 'behaviour'?", answers: ["Conduct", "Sorrow", "Injury", "Trip"], correct: 0 },
        { question: "What is a synonym for 'cause'?", answers: ["Reason", "Odour", "Desire", "Judgement"], correct: 0 },
        { question: "What is a synonym for 'chance'?", answers: ["Opportunity", "Satisfaction", "Verdict", "Desire"], correct: 0 },
        { question: "What is a synonym for 'character'?", answers: ["Nature", "Grief", "Verdict", "Remedy"], correct: 0 },
        { question: "What is a synonym for 'consequence'?", answers: ["Result", "Strength", "Value", "Smell"], correct: 0 },
        { question: "What is a synonym for 'conversation'?", answers: ["Talk", "Grief", "Conduct", "Freedom"], correct: 0 },
        { question: "What is a synonym for 'competition'?", answers: ["Contest", "Verdict", "Grief", "Cure"], correct: 0 },
        { question: "What is a synonym for 'hunger'?", answers: ["Appetite", "Desire", "Verdict", "Misery"], correct: 0 },
        { question: "What is a synonym for 'idea'?", answers: ["Thought", "Conduct", "Wish", "Subject"], correct: 0 },
        { question: "What is a synonym for 'intention'?", answers: ["Purpose", "Entry", "Value", "Verdict"], correct: 0 },
        { question: "What is a synonym for 'journey'?", answers: ["Trip", "Riches", "Remedy", "Talk"], correct: 0 },
        { question: "What is a synonym for 'judgement'?", answers: ["Verdict", "Nature", "Conduct", "Start"], correct: 0 },
        { question: "What is a synonym for 'knowledge'?", answers: ["Learning", "Trip", "Wish", "Purpose"], correct: 0 },
        { question: "What is a synonym for 'midday'?", answers: ["Noon", "Remedy", "Verdict", "Purpose"], correct: 0 },
        { question: "What is a synonym for 'misery'?", answers: ["Unhappiness", "Talk", "Judgement", "Smell"], correct: 0 },
        { question: "What is a synonym for 'cure'?", answers: ["Remedy", "Conduct", "Satisfaction", "Learning"], correct: 0 },
        { question: "What is a synonym for 'defect'?", answers: ["Fault", "Riches", "Proof", "Conduct"], correct: 0 },
        { question: "What is a synonym for 'desire'?", answers: ["Wish", "Remedy", "Entry", "Conduct"], correct: 0 },
        { question: "What is a synonym for 'display'?", answers: ["Exhibition", "Talk", "Cure", "Smell"], correct: 0 },
        { question: "What is a synonym for 'donation'?", answers: ["Contribution", "Talk", "Learning", "Entry"], correct: 0 },
        { question: "What is a synonym for 'earnings'?", answers: ["Income", "Liberty", "Pleasure", "Verdict"], correct: 0 },
        { question: "What is a synonym for 'envy'?", answers: ["Jealousy", "Riches", "Proof", "Learning"], correct: 0 },
        { question: "What is a synonym for 'evidence'?", answers: ["Proof", "Trip", "Result", "Talk"], correct: 0 },
        { question: "What is a synonym for 'freedom'?", answers: ["Liberty", "Cure", "Talk", "Verdict"], correct: 0 },
        { question: "What is a synonym for 'grief'?", answers: ["Sorrow", "Conduct", "Wish", "Fault"], correct: 0 },
        { question: "What is a synonym for 'harm'?", answers: ["Injury", "Conduct", "Odour", "Verdict"], correct: 0 },
        { question: "What is a synonym for 'odour'?", answers: ["Smell", "Fault", "Conduct", "Verdict"], correct: 0 },
        { question: "What is a synonym for 'pleasure'?", answers: ["Satisfaction", "Conduct", "Learning", "Talk"], correct: 0 },
        { question: "What is a synonym for 'principle'?", answers: ["Rule", "Result", "Odour", "Learning"], correct: 0 },
        { question: "What is a synonym for 'riches'?", answers: ["Wealth", "Sorrow", "Grief", "Start"], correct: 0 },
        { question: "What is a synonym for 'strength'?", answers: ["Power", "Contest", "Judgement", "Verdict"], correct: 0 },
        { question: "What is a synonym for 'subject'?", answers: ["Topic", "Remedy", "Start", "Odour"], correct: 0 },
        { question: "What is a synonym for 'system'?", answers: ["Method", "Learning", "Thought", "Conduct"], correct: 0 },
        { question: "What is a synonym for 'value'?", answers: ["Worth", "Learning", "Remedy", "Result"], correct: 0 },

        //Synonyms of Adjective
        { question: "What is a synonym for 'accurate'?", answers: ["Exact", "Watchful", "Productive", "Angry"], correct: 0 },
        { question: "What is a synonym for 'alert'?", answers: ["Watchful", "Exact", "Worried", "Yearly"], correct: 0 },
        { question: "What is a synonym for 'annual'?", answers: ["Yearly", "Productive", "Scared", "Fertile"], correct: 0 },
        { question: "What is a synonym for 'anxious'?", answers: ["Worried", "Scared", "Difficult", "Exact"], correct: 0 },
        { question: "What is a synonym for 'fertile'?", answers: ["Productive", "Exact", "Angry", "Scared"], correct: 0 },
        { question: "What is a synonym for 'frightened'?", answers: ["Scared", "Worried", "Furious", "Exact"], correct: 0 },
        { question: "What is a synonym for 'furious'?", answers: ["Angry", "Worried", "Productive", "Hard"], correct: 0 },
        { question: "What is a synonym for 'hard'?", answers: ["Difficult", "Yearly", "Worried", "Angry"], correct: 0 },

        { question: "What is a synonym for 'attractive'?", answers: ["Awful", "Pretty", "Clumsy", "Rough"], correct: 1 },
        { question: "What is a synonym for 'awful'?", answers: ["Brave", "Terrible", "Common", "Ordinary"], correct: 1 },
        { question: "What is a synonym for 'brave'?", answers: ["Bright", "Courageous", "Tired", "Ignorant"], correct: 1 },
        { question: "What is a synonym for 'bright'?", answers: ["Intelligent", "Dull", "Careful", "Moist"], correct: 0 },
        { question: "What is a synonym for 'cautious'?", answers: ["Careful", "Awkward", "Ignorant", "Polite"], correct: 0 },
        { question: "What is a synonym for 'clear'?", answers: ["Rough", "Distinct", "Old", "Hopeless"], correct: 1 },
        { question: "What is a synonym for 'clumsy'?", answers: ["Normal", "Awkward", "Strong", "Active"], correct: 1 },
        { question: "What is a synonym for 'coarse'?", answers: ["Rough", "Confident", "Faithful", "Ordinary"], correct: 0 },
        { question: "What is a synonym for 'common'?", answers: ["Ordinary", "Awful", "Extravagant", "Moist"], correct: 0 },
        { question: "What is a synonym for 'confident'?", answers: ["Normal", "Hopeful", "Doubtful", "Wary"], correct: 1 },
        { question: "What is a synonym for 'damp'?", answers: ["Moist", "Strong", "Rough", "Powerful"], correct: 0 },
        { question: "What is a synonym for 'desperate'?", answers: ["Hopeless", "Fair", "Tired", "Cautious"], correct: 0 },
        { question: "What is a synonym for 'diligent'?", answers: ["Industrious", "Hard-working", "Kind", "Ignorant"], correct: 1 },
        { question: "What is a synonym for 'doubtful'?", answers: ["Uncertain", "Ignorant", "Polite", "Clumsy"], correct: 0 },
        { question: "What is a synonym for 'energetic'?", answers: ["Active", "Tired", "Old", "Lazy"], correct: 0 },
        { question: "What is a synonym for 'fair'?", answers: ["Just", "Wasteful", "Necessary", "Courageous"], correct: 0 },
        { question: "What is a synonym for 'hardworking'?", answers: ["Industrious", "Weary", "Moist", "Confident"], correct: 0 },
        { question: "What is a synonym for 'ignorant'?", answers: ["Jealous", "Uncertain", "Stupid", "Rough"], correct: 2 },
        { question: "What is a synonym for 'jealous'?", answers: ["Envious", "Clumsy", "Kind", "Safe"], correct: 0 },
        { question: "What is a synonym for 'kind'?", answers: ["Charitable", "Mean", "Uncertain", "Hopeless"], correct: 0 },
        { question: "What is a synonym for 'loyal'?", answers: ["Faithful", "Cautious", "Cowardly", "Tired"], correct: 0 },
        { question: "What is a synonym for 'mean'?", answers: ["Stingy", "Generous", "Wasteful", "Polite"], correct: 0 },
        { question: "What is a synonym for 'necessary'?", answers: ["Essential", "Old", "Bright", "Confident"], correct: 0 },
        { question: "What is a synonym for 'normal'?", answers: ["Usual", "Awful", "Desperate", "Elderly"], correct: 0 },
        { question: "What is a synonym for 'old'?", answers: ["Elderly", "Bright", "Doubtful", "Kind"], correct: 0 },
        { question: "What is a synonym for 'polite'?", answers: ["Courteous", "Mean", "Hardworking", "Faithful"], correct: 0 },
        { question: "What is a synonym for 'safe'?", answers: ["Secure", "Hopeless", "Stupid", "Clumsy"], correct: 0 },
        { question: "What is a synonym for 'similar'?", answers: ["Alike", "Strong", "Intelligent", "Ignorant"], correct: 0 },
        { question: "What is a synonym for 'strong'?", answers: ["Powerful", "Awkward", "Transparent", "Wasteful"], correct: 0 },
        { question: "What is a synonym for 'tired'?", answers: ["Weary", "Faithful", "Careful", "Cautious"], correct: 0 },
        { question: "What is a synonym for 'transparent'?", answers: ["Clear", "Awful", "Envious", "Safe"], correct: 0 },
        { question: "What is a synonym for 'wasteful'?", answers: ["Extravagant", "Stupid", "Tired", "Elderly"], correct: 0 },

        //Synonyms of verb
        { question: "What is a synonym for 'abandon'?", answers: ["Help", "Leave", "Get", "Let"], correct: 1 },
        { question: "What is a synonym for 'aid'?", answers: ["Let", "Help", "Finish", "Receive"], correct: 1 },
        { question: "What is a synonym for 'allow'?", answers: ["Let", "Ask", "Inquire", "Watch"], correct: 0 },
        { question: "What is a synonym for 'acquire'?", answers: ["Receive", "Own", "Get", "Control"], correct: 2 },
        { question: "What is a synonym for 'ask'?", answers: ["Select", "Inquire", "Possess", "Teach"], correct: 1 },
        { question: "What is a synonym for 'build'?", answers: ["Teach", "Possess", "Construct", "Show"], correct: 2 },
        { question: "What is a synonym for 'buy'?", answers: ["Get", "Receive", "Purchase", "Control"], correct: 2 },
        { question: "What is a synonym for 'capture'?", answers: ["Find", "Seize", "Heal", "Complete"], correct: 1 },
        { question: "What is a synonym for 'choose'?", answers: ["Look", "Select", "Allow", "Admit"], correct: 1 },
        { question: "What is a synonym for 'glance'?", answers: ["Look", "Choose", "Hurt", "Search"], correct: 0 },
        { question: "What is a synonym for 'hate'?", answers: ["Like", "Dislike", "Love", "Heal"], correct: 1 },
        { question: "What is a synonym for 'hurt'?", answers: ["Protect", "Stay", "Harm", "Depart"], correct: 2 },
        { question: "What is a synonym for 'imagine'?", answers: ["Think", "Feel", "Stay", "Watch"], correct: 0 },
        { question: "What is a synonym for 'increase'?", answers: ["Expand", "Enlarge", "Control", "Find"], correct: 1 },
        { question: "What is a synonym for 'leave'?", answers: ["Depart", "Vanish", "Choose", "Ask"], correct: 0 },
        { question: "What is a synonym for 'own'?", answers: ["Possess", "Allow", "Ask", "Vanish"], correct: 0 },
        { question: "What is a synonym for 'protect'?", answers: ["Allow", "Defend", "Admit", "Reveal"], correct: 1 },
        { question: "What is a synonym for 'receive'?", answers: ["Stay", "Watch", "Get", "Own"], correct: 0 },
        { question: "What is a synonym for 'confess'?", answers: ["Reveal", "Admit", "Search", "Forgive"], correct: 1 },
        { question: "What is a synonym for 'control'?", answers: ["Manage", "Enlarge", "Finish", "Ask"], correct: 0 },
        { question: "What is a synonym for 'cure'?", answers: ["Heal", "Design", "Build", "Forgive"], correct: 0 },
        { question: "What is a synonym for 'decrease'?", answers: ["Enlarge", "Reduce", "Protect", "Manage"], correct: 1 },
        { question: "What is a synonym for 'design'?", answers: ["Plan", "Heal", "Help", "Reveal"], correct: 0 },
        { question: "What is a synonym for 'educate'?", answers: ["Find", "Seek", "Teach", "Receive"], correct: 2 },
        { question: "What is a synonym for 'find'?", answers: ["Seek", "Show", "Discover", "Manage"], correct: 2 },
        { question: "What is a synonym for 'finish'?", answers: ["Design", "Complete", "Protect", "Try"], correct: 1 },
        { question: "What is a synonym for 'forgive'?", answers: ["Admit", "Pardon", "Finish", "Search"], correct: 1 },
        { question: "What is a synonym for 'reside'?", answers: ["Stay", "Vanish", "Start", "Depart"], correct: 0 },
        { question: "What is a synonym for 'reveal'?", answers: ["Show", "Look", "Depart", "Search"], correct: 0 },
        { question: "What is a synonym for 'search'?", answers: ["Watch", "Seek", "Reveal", "Try"], correct: 1 },
        { question: "What is a synonym for 'start'?", answers: ["Seek", "Try", "Begin", "Attempt"], correct: 2 },
        { question: "What is a synonym for 'surround'?", answers: ["Begin", "Reveal", "Encircle", "Depart"], correct: 2 },
        { question: "What is a synonym for 'try'?", answers: ["Depart", "Attempt", "Leave", "Discover"], correct: 1 },
        { question: "What is a synonym for 'vanish'?", answers: ["Disappear", "Watch", "Stay", "Admit"], correct: 0 },
        { question: "What is a synonym for 'want'?", answers: ["Allow", "Need", "Receive", "Increase"], correct: 1 },
        { question: "What is a synonym for 'watch'?", answers: ["Look", "Forgive", "Protect", "Admit"], correct: 0 },

        //Synonyms for adverb
        {
            question: "What is a synonym for 'almost'?",
            answers: ["nearly", "yearly", "liberally", "seriously"],
            correct: 0
          },
          {
            question: "What is a synonym for 'annually'?",
            answers: ["nearly", "yearly", "liberally", "seriously"],
            correct: 1
          },
          {
            question: "What is a synonym for 'generously'?",
            answers: ["nearly", "yearly", "liberally", "seriously"],
            correct: 2
          },
          {
            question: "What is a synonym for 'gravely'?",
            answers: ["nearly", "yearly", "liberally", "seriously"],
            correct: 3
          },
        { question: "What is a synonym for 'certainly'?", answers: ["Plainly", "Surely", "Properly", "Quickly"], correct: 1 },
        { question: "What is a synonym for 'clearly'?", answers: ["Plainly", "Surely", "Totally", "Previously"], correct: 0 },
        { question: "What is a synonym for 'cleverly'?", answers: ["Honestly", "Instantly", "Skillfully", "Rapidly"], correct: 2 },
        { question: "What is a synonym for 'completely'?", answers: ["Totally", "Strongly", "Honestly", "Joyfully"], correct: 0 },
        { question: "What is a synonym for 'correctly'?", answers: ["Previously", "Properly", "Often", "Frankly"], correct: 1 },
        { question: "What is a synonym for 'formerly'?", answers: ["Properly", "Previously", "Instantly", "Often"], correct: 1 },
        { question: "What is a synonym for 'frankly'?", answers: ["Properly", "Sincerely", "Honestly", "Rapidly"], correct: 2 },
        { question: "What is a synonym for 'frequently'?", answers: ["Often", "Instantly", "Truly", "Strongly"], correct: 0 },
        { question: "What is a synonym for 'happily'?", answers: ["Wrongly", "Joyfully", "Powerfully", "Skillfully"], correct: 1 },
        { question: "What is a synonym for 'immediately'?", answers: ["Instantly", "Previously", "Totally", "Properly"], correct: 0 },
        { question: "What is a synonym for 'incorrectly'?", answers: ["Surely", "Joyfully", "Wrongly", "Properly"], correct: 2 },
        { question: "What is a synonym for 'intentionally'?", answers: ["Purposely", "Often", "Frankly", "Truly"], correct: 0 },
        { question: "What is a synonym for 'powerfully'?", answers: ["Properly", "Wrongly", "Strongly", "Previously"], correct: 2 },
        { question: "What is a synonym for 'rapidly'?", answers: ["Sincerely", "Quickly", "Purposely", "Skillfully"], correct: 1 },
        { question: "What is a synonym for 'sincerely'?", answers: ["Truly", "Previously", "Skillfully", "Totally"], correct: 0 }
        // Add more questions here...
    ],
    oneword: [
        { question: "A place where books are kept?", answers: ["Library", "Kitchen", "Garage", "Garden"], correct: 0 },
        // Add more questions here...
    ]
};

// Call loadQuiz to shuffle all the questions
loadQuiz(quizData);

// Now, quizData will have shuffled answers with correct index adjusted
console.log(quizData);

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let incorrectQuestions = [];

const startQuiz = (category) => {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    incorrectQuestions = [];
    document.getElementById('quiz-category').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    loadQuestion();
};

const loadQuestion = () => {
    const quizTitle = document.getElementById('quiz-title');
    const questionText = document.getElementById('question-text');
    const answersDiv = document.getElementById('answers');
    const quizType = quizData[currentCategory][currentQuestionIndex];

    quizTitle.innerText = `${capitalize(currentCategory)} Quiz`;
    questionText.innerText = quizType.question;
    answersDiv.innerHTML = '';

    quizType.answers.forEach((answer, index) => {
        const answerBtn = document.createElement('button');
        answerBtn.classList.add('answer-btn');
        answerBtn.innerText = answer;
        answerBtn.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answerBtn);
    });
};

const checkAnswer = (selectedIndex) => {
    const correctIndex = quizData[currentCategory][currentQuestionIndex].correct;
    const answerButtons = document.querySelectorAll('.answer-btn');

    answerButtons.forEach((btn, index) => {
        if (index === correctIndex) {
            btn.classList.add('correct');
        }
        if (index === selectedIndex && index !== correctIndex) {
            btn.classList.add('wrong');
        }
    });

    if (selectedIndex === correctIndex) {
        score++;
        setTimeout(nextQuestion, 1000);
    } else {
        score--;
        incorrectQuestions.push(currentQuestionIndex);
        setTimeout(() => {
            answerButtons[selectedIndex].classList.remove('wrong');
            answerButtons[correctIndex].classList.remove('correct');
            nextQuestion(true);
        }, 1000);
    }

    document.getElementById('score').innerText = score;
};

const nextQuestion = (isRepeat = false) => {
    if (isRepeat && incorrectQuestions.length > 0) {
        currentQuestionIndex = incorrectQuestions[Math.floor(Math.random() * incorrectQuestions.length)];
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex >= quizData[currentCategory].length) {
            alert('Quiz completed!');
            resetQuiz();
            return;
        }
    }
    loadQuestion();
};

const resetQuiz = () => {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('quiz-category').classList.remove('hidden');
};

const exitQuiz = () => {
    alert('Thank you for playing!');
};

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

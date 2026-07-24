// PromptOps — Season 1 content
// Ops 1–2 fully playable; Ops 3–6 locked previews.

export const XP_RULES = { intel: 30, quiz: 50, live: 60, boss: 100 };

export const RANKS = [
  { name: 'Bronze Operator', min: 0, icon: '🥉' },
  { name: 'Silver Operator', min: 200, icon: '🥈' },
  { name: 'Gold Operator', min: 500, icon: '🥇' },
  { name: 'Platinum Operator', min: 900, icon: '💠' },
  { name: 'Diamond Operator', min: 1400, icon: '💎' },
  { name: 'Legend Operator', min: 2000, icon: '🌟' },
];

export const OPERATIONS = [
  {
    id: 'op1',
    num: 'OPERATION 01',
    name: 'BOOT CAMP',
    tagline: 'How AI actually works under the hood',
    color: '#00d68f',
    locked: false,
    missions: [
      {
        id: 'm1', type: 'intel', title: 'Inside the Machine', minutes: 10,
        sub: 'What a large language model really is',
        cards: [
          { title: "It's a prediction machine", body: "Claude, ChatGPT, Gemini — they're all LLMs: Large Language Models. Strip away the magic and an LLM does ONE thing: it predicts what text should come next. You type something, it predicts the most likely useful continuation — word by word." },
          { title: 'It learned from a mountain of text', body: "During training, the model read billions of pages — books, articles, websites, code. It didn't memorize them like a database. It learned PATTERNS: how ideas connect, how explanations are structured, how good writing sounds." },
          { title: 'Tokens: how it reads', body: "The model doesn't see letters or whole words. Text gets chopped into pieces called tokens (roughly word-chunks). 'Basketball' might be one token; 'unbelievable' might be three. It predicts one token at a time, thousands of times per answer." },
          { title: "It doesn't Google things", body: "When you ask a question, the model isn't browsing the internet (unless it has a special search tool turned on). It answers from patterns learned in training — which has a cutoff date. Ask about last week's match and it genuinely doesn't know." },
          { title: 'Why it sounds SO confident', body: "The model learned from confident, well-written text — so it writes confidently even when it's wrong. A wrong-but-confident answer is called a hallucination. This is the #1 thing to remember about AI." },
          { title: 'The right way to think about it', body: "Treat AI like a brilliant friend with an enormous memory who occasionally bluffs. Amazing for explaining, brainstorming, drafting, coding. But for facts that matter — verify. You're the commander; it's the tool." },
        ],
      },
      {
        id: 'm2', type: 'quiz', title: 'System Check', minutes: 8,
        sub: '5 questions on the fundamentals',
        questions: [
          { text: 'In your own words: what is the ONE core thing a large language model actually does under the hood?', key: 'It predicts what text/token should come next, based on patterns learned from training text. Everything else emerges from that.', mcText: 'At its core, what does a large language model do?', options: ['Searches a giant database of facts', 'Predicts what text should come next, token by token', 'Copies answers from websites in real time', 'Runs logic rules written by programmers'], correct: 1, why: "It's a next-token prediction machine. Everything else — the explanations, the jokes, the code — emerges from that one skill." },
          { text: "Fill in the blank and explain: Claude's knowledge comes from ______, not from searching the internet live.", key: 'Training — patterns learned from billions of pages of text read during training. No live browsing by default.', mcText: "Where does Claude's knowledge come from?", options: ['Live internet access', 'Patterns learned from training text', 'A team of humans typing answers', "Your phone's files"], correct: 1, why: 'Training on billions of pages of text. No live browsing by default, no humans behind the curtain.' },
          { text: "Claude states something very confidently. What does that confidence tell you about whether it's true? And what is a confident-but-wrong answer called?", key: 'Confidence tells you nothing about correctness — the model can be confidently wrong. Such answers are called hallucinations.', mcText: 'Claude states something confidently. What does that tell you?', options: ["It's definitely true", "It's probably a lie", 'Nothing — it can be confidently wrong', 'It was fact-checked first'], correct: 2, why: 'Confidence and correctness are unrelated for an LLM. Confident-but-wrong answers are called hallucinations.' },
          { text: "You ask Claude about yesterday's football match. Explain WHY it probably can't tell you the result.", key: 'Its knowledge comes from training data which ends at a cutoff date; without a search tool it has no access to recent events.', mcText: 'You ask about a football match from yesterday. What happens?', options: ['It looks up the score online', "It likely doesn't know — training has a cutoff date", 'It always knows recent sports', 'It asks a human'], correct: 1, why: 'Without a search tool, the model only knows what was in its training data — which ends at a cutoff date.' },
          { text: "AI gives you a fact for your history homework. What should you do before using it — and why is asking the AI 'are you sure?' not enough?", key: 'Verify it against a reliable external source (textbook, official site). Asking the AI to confirm proves nothing — it can double down on a hallucination.', mcText: 'AI gives you a fact for your history homework. Best move?', options: ['Paste it straight in — AI is always right', 'Verify it against a reliable source', "Ask the AI if it's sure (that proves it)", 'Never use AI for homework'], correct: 1, why: "Asking 'are you sure?' doesn't verify anything — the model can double down on a hallucination. Cross-check facts that matter." },
        ],
      },
      {
        id: 'm3', type: 'live', liveKind: 'chat', title: 'First Contact', minutes: 15,
        sub: 'Your first real conversation with Claude — with objectives',
        objectives: [
          'Get Claude to explain a topic from your school subjects so simply a 5-year-old would get it',
          'Get the SAME topic explained again in a totally different style (rap, sports commentary, pirate…)',
          'Discover one thing Claude cannot do or will refuse — ask it about its limits',
        ],
        chatSystem: "You are Claude, chatting with Rajveer, a 13-year-old 9th grader learning how to use AI for the first time. Be warm, playful and concise (2-5 short paragraphs max). Match his energy. If he asks you to explain things, do it brilliantly. If he asks about your limits, be honest about them (no live internet, knowledge cutoff, can be wrong, can't do real-world actions). Never be condescending.",
        debriefPrompt: "You are the mission control AI for a learning game. A 13-year-old had this chat with Claude. Objectives were: (1) get a school topic explained super simply, (2) get the same topic re-explained in a totally different style, (3) discover something Claude can't do or refuses. Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, encouraging, addressed to Rajveer, mention what he did well and one pro tip\"}",
      },
    ],
  },
  {
    id: 'op2',
    num: 'OPERATION 02',
    name: 'PROMPT POWERS',
    tagline: 'Write prompts that get 10× better answers',
    color: '#ff5c7a',
    locked: false,
    missions: [
      {
        id: 'm4', type: 'intel', title: 'Anatomy of a Prompt', minutes: 10,
        sub: 'The 4-part formula pros use',
        cards: [
          { title: 'Vague in, garbage out', body: "'help me with science' gets you a generic wall of text. The model can't read your mind — it fills the gaps with averages. The quality of your prompt sets the ceiling for the quality of the answer." },
          { title: 'The RCTF formula', body: 'Strong prompts have up to 4 parts: ROLE (who should the AI act as), CONTEXT (your situation), TASK (exactly what you want), FORMAT (how the answer should look). You rarely need all 4 — but knowing them is your superpower.' },
          { title: 'R — Role', body: "'Act as a football coach explaining tactics to a beginner.' A role loads the model with the right vocabulary, tone and depth. Teacher, movie critic, senior programmer, exam examiner — pick the expert you need." },
          { title: 'C — Context', body: "'I'm in 9th grade, my exam is Friday, I keep confusing mitosis and meiosis.' Context changes EVERYTHING. The same question with good context gets an answer aimed exactly at you." },
          { title: 'T — Task', body: "Use a strong verb and be concrete. Not 'tell me about the French Revolution' but 'list the 5 most important causes of the French Revolution, one line each, ranked by importance.' Numbers make tasks sharp." },
          { title: 'F — Format', body: "Say what shape you want: 'as a table', 'in under 100 words', 'as a quiz with answers hidden at the bottom', 'as flashcards'. The model will happily match any format — but only if you ask." },
        ],
      },
      {
        id: 'm5', type: 'quiz', title: 'Prompt Inspector', minutes: 8,
        sub: 'Prove your prompt instincts — 5 rounds',
        questions: [
          { text: 'Name the 4 parts of the RCTF formula, with a few words on what each part does.', key: 'Role (who the AI should act as), Context (your situation/background), Task (exactly what you want, concrete), Format (the shape of the answer — table, list, word count).', mcText: 'You want help revising for a biology test. Stronger prompt?', options: ["'tell me about biology'", "'Act as a biology teacher. I'm in 9th grade with a cell-division test Friday. Quiz me with 5 questions, one at a time, and correct my answers.'"], correct: 1, why: 'Role + context + a concrete task + an interactive format. The vague one gets a random textbook dump.' },
          { text: "Rewrite this weak task to make it sharp: 'tell me about the French Revolution'.", key: "A good rewrite adds a concrete task with numbers/structure and ideally a format — e.g. 'list the 5 most important causes of the French Revolution, one line each, ranked by importance'. Any specific, structured version counts.", mcText: 'Which TASK is sharper?', options: ["'explain photosynthesis'", "'explain photosynthesis in 5 steps, each step one sentence, like a recipe'"], correct: 1, why: 'Numbers and structure make tasks concrete. "Like a recipe" is a format instruction — free upgrade.' },
          { text: "Claude's answer was way too complicated. Write the exact follow-up message you'd send (steer it — don't just complain).", key: "A good follow-up gives precise direction on HOW to fix it, e.g. 'simpler please — explain it to a 10-year-old, use a cricket analogy'. Vague complaints like 'that's bad, try again' don't count.", mcText: 'The answer you got is too complicated. Best follow-up?', options: ["'that's bad, try again'", "'simpler please — explain it to a 10-year-old, and use a cricket analogy'"], correct: 1, why: "Don't just complain — steer. Say HOW to fix it. The model follows precise direction beautifully." },
          { text: 'Why does giving the AI a ROLE improve the answer? Explain in 1–2 sentences.', key: 'A role loads the right vocabulary, tone and depth for the need — coach vs professor vs examiner. It tells the model which voice/expertise to use.', mcText: 'Why does giving the AI a ROLE help?', options: ['It makes the AI smarter', 'It loads the right vocabulary, tone and depth for your need', 'Roles are required or it refuses', 'It makes answers longer'], correct: 1, why: "The model can write like anyone. A role tells it which 'voice' and depth to use — coach vs professor vs examiner." },
          { text: "The prompt 'Make me a study plan for finals' is weak. Name the TWO missing ingredients (from RCTF) and give an example of each.", key: 'Context (subjects, exam dates, hours available…) and Format (e.g. a one-week table). Without them you get a generic plan for an imaginary student.', mcText: 'You need a study plan you can stick on your wall. What\'s missing: "Make me a study plan for finals"?', options: ['A magic word', 'Context (subjects, dates, hours free) and format (table for one week)', 'Politeness', "Nothing — it's perfect"], correct: 1, why: 'Without your subjects, timeline and a format, you get a generic plan for an imaginary student. Context + format = a plan for YOU.' },
        ],
      },
      {
        id: 'm6', type: 'live', liveKind: 'rewrite', title: 'Be Specific!', minutes: 15,
        sub: 'Rewrite a vague prompt — Claude scores each attempt',
        vaguePrompt: 'help me with science',
        brief: "Mission: the prompt 'help me with science' is uselessly vague. Rewrite it using RCTF (Role, Context, Task, Format) to get genuinely useful help with any science topic you pick. You have 3 attempts — your best score counts. 70+ completes the mission.",
        gradePrompt: "You are a prompt-engineering judge in a learning game for a 13-year-old named Rajveer. He was asked to rewrite the vague prompt 'help me with science' into a strong prompt using Role, Context, Task, Format. Grade HIS PROMPT (not the topic). Return STRICT JSON only: {\"score\": 0-100, \"answer\": \"a 2-3 sentence preview of how you'd answer his prompt\", \"feedback\": \"2 sentences: what made the prompt strong/weak and ONE specific way to improve it. Address Rajveer directly, be encouraging but honest.\"}. Scoring guide: vague one-liner=20-35, has a clear task=50-65, task+context or format=70-85, role+context+task+format all present and specific=86-100.",
      },
      {
        id: 'm7', type: 'boss', title: 'BOSS: Prompt Duel vs Dad', minutes: 12,
        sub: 'Best prompt wins. Claude is the judge.',
        challenge: "THE CHALLENGE: Write the best possible prompt asking Claude to create a one-week exam study plan. The winning prompt is specific, gives real context, and asks for a useful format. Dad writes his prompt in the Parent view. Claude judges both blind.",
        duelHint: 'Write your best prompt asking Claude for a one-week exam study plan.',
        coachbotAnswer: 'Make me a study plan for my exams for one week.',
        judgePrompt: "You are the judge of a prompt-writing duel in a learning game. Two people each wrote a prompt asking an AI to create a one-week exam study plan. Judge which PROMPT would produce the more useful, personalized result. Criteria: clear task, real context, specific format, a role if useful. Return STRICT JSON only: {\"winner\": \"A\" or \"B\", \"scoreA\": 0-100, \"scoreB\": 0-100, \"reasoning\": \"3-4 sentences comparing them, naming what each did well and what decided it. Contestant A is Rajveer (13), contestant B is his dad.\"}",
      },
    ],
  },
  {
    id: 'op3', num: 'OPERATION 03', name: 'FAKE HUNTER', tagline: 'Catch hallucinations & verify like a pro', color: '#ffb930',
    missions: [
      {
        id: 'm8', type: 'intel', title: 'Why AI Lies (Without Lying)', minutes: 10,
        sub: 'Hallucinations explained',
        cards: [
          { title: "It's not lying — it's guessing", body: "A hallucination is when AI states something false with total confidence. It's not trying to trick you. Remember Boot Camp: the model predicts likely-sounding text. Sometimes the most likely-SOUNDING answer simply isn't TRUE." },
          { title: 'The danger zones', body: "Hallucinations cluster in predictable places: exact numbers and statistics, dates, names of small places and people, book/article citations, web links, and anything recent or obscure. The more specific and less famous the fact, the higher the risk." },
          { title: 'Why it sounds so real', body: "The model learned from millions of confident, well-written texts. So when it invents a fact, it invents it in perfect textbook style — with plausible numbers and a professional tone. Style is NOT evidence." },
          { title: "Asking 'are you sure?' doesn't work", body: "The model may double down — politely and confidently repeating the same wrong fact. It can also cave and 'correct' a fact that was actually RIGHT, just because you pushed. Its confidence is theater either way." },
          { title: 'The verification toolkit', body: "For facts that matter: (1) cross-check with a real source — textbook, official site, reliable news. (2) Ask the AI for its sources, then actually open them. (3) Ask the same question a second time in a fresh chat — if the 'facts' change, alarm bells. (4) For math, make it show every step." },
          { title: 'The Fake Hunter mindset', body: "Trust the explanation, verify the facts. AI is superb at explaining concepts, structuring ideas and teaching — those don't depend on one precise fact. But any specific number, date, name or quote you plan to USE somewhere? Hunt it down first." },
        ],
      },
      {
        id: 'm9', type: 'quiz', title: 'Spot the Fake', minutes: 10,
        sub: 'Find the hallucinations hidden in real-looking answers',
        questions: [
          { text: "An AI answer says: 'The Amazon river is approximately 6,400 km long and flows through Brazil, Peru and Colombia. According to a 2019 study by Dr. Henrik Malström of Oslo University, it carries 23.7% of the world's river water.' Which part deserves the MOST suspicion, and why?", key: 'The named study/researcher/precise 23.7% stat — ultra-specific citations are the classic hallucination zone and the study may not exist. Well-known facts like the length and countries are lower risk.', mcText: "An AI answer says: 'The Amazon river is approximately 6,400 km long and flows through Brazil, Peru and Colombia. According to a 2019 study by Dr. Henrik Malström of Oslo University, it carries 23.7% of the world's river water.' What deserves the MOST suspicion?", options: ['The 6,400 km length', 'The list of countries', 'The named study, researcher and precise 23.7%', 'Everything is equally trustworthy'], correct: 2, why: 'Well-known facts (length, countries) are usually safe. Ultra-specific citations — a named researcher, year and decimal-point stat — are the classic hallucination zone. That study may not exist.' },
          { text: "Two AI answers: one says 'Studies definitively prove this works 94.2% of the time', the other says 'I believe this is right, but I'm less certain about the exact figures — worth verifying.' Which style should you trust MORE, and why?", key: 'The second — honest uncertainty is a good sign. Confident precision and impressive style tell you nothing about truth.', mcText: 'Which answer style should INCREASE your trust?', options: ["'Studies definitively prove this works 94.2% of the time.'", "'I believe this is right, but I'm less certain about the exact figures — worth verifying.'", "'This is 100% accurate, guaranteed.'", 'A longer answer with more impressive vocabulary'], correct: 1, why: 'Honest uncertainty is a GOOD sign. Overconfident precision and impressive style tell you nothing about truth.' },
          { text: 'AI gives you a web link as a source. What must you do before trusting it, and why?', key: "Actually open/click it — AI can invent plausible-looking URLs that lead nowhere, and even a real page must actually say what the AI claimed.", mcText: 'AI gives you a web link as a source. What do you do?', options: ['A link means the fact is verified', 'Click it — AI links can be invented and lead nowhere', 'Links from AI are always broken, ignore them', 'Trust it if the website name sounds official'], correct: 1, why: "Models frequently generate plausible-looking URLs that don't exist. A source only counts if you open it and it actually says what the AI claimed." },
          { text: 'You ask the same factual question in two fresh chats and get two different specific numbers. What do you conclude, and what do you do?', key: 'At least one is hallucinated — the model is generating guesses, not retrieving facts. Verify with a real external source (averaging or majority-voting guesses is still guessing).', mcText: "You ask the same factual question in two fresh chats and get two different specific numbers. What's the conclusion?", options: ['Average the two numbers', 'The second answer is more up to date', 'At least one is hallucinated — verify with a real source', 'Ask a third time and take the majority'], correct: 2, why: "Real knowledge doesn't wobble. Inconsistent specifics mean the model is generating plausible guesses, not retrieving facts. Voting between guesses is still guessing." },
          { text: 'Give one example of a homework task that is SAFE to do with AI without external verification, and one that is RISKY — and explain what makes the difference.', key: 'Safe: having a concept explained until you understand it (you can test understanding yourself). Risky: exact dates, statistics, quotes, citations — specific facts must be verified before use.', mcText: 'Which homework task is SAFEST to do with AI without external verification?', options: ['Getting exact dates for a history timeline', 'Having a concept explained until you understand it', 'Getting statistics for a science report', 'Getting quotes from a famous person'], correct: 1, why: "Explanations of well-known concepts are the model's strength — and you can test understanding yourself. Dates, stats and quotes are specific facts: verify before using." },
        ],
      },
      {
        id: 'm10', type: 'live', liveKind: 'chat', title: 'Stress Test', minutes: 15,
        sub: 'Probe the limits of what Claude actually knows — live',
        objectives: [
          "Ask Claude about something from THIS week (news, sports, anything) and see how it handles not knowing",
          "Find a question that makes Claude genuinely express uncertainty — 'I'm not sure' or 'I may be wrong'",
          'Pick one factual claim Claude made and ask it HOW you could verify that claim yourself',
        ],
        chatSystem: "You are Claude, chatting with Rajveer, a 13-year-old 9th grader learning to fact-check AI. He is on a mission to probe your limits: recent events, uncertainty, verification. Be honest and natural — admit your knowledge cutoff, express genuine uncertainty where it exists, and give practical verification advice when asked. Keep replies concise (2-4 short paragraphs). Don't roleplay fake confidence, and don't make his mission artificially easy either.",
        debriefPrompt: "You are mission control for a learning game. A 13-year-old had this chat with Claude while learning to fact-check AI. Objectives: (1) asked about a very recent event and saw how Claude handles not knowing, (2) got Claude to genuinely express uncertainty, (3) asked how to verify one of Claude's claims. Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, encouraging, addressed to Rajveer, with one pro fact-checking tip\"}",
      },
      {
        id: 'm11', type: 'boss', title: 'BOSS: Truth Tribunal', minutes: 12,
        sub: 'Duel: who writes the better fact-check armor?',
        challenge: "THE CHALLENGE: Write the best instruction you could add to any question that forces an AI to be more truthful and checkable. Think: demanding sources, confidence levels, separating facts from guesses. Your rival writes theirs too — Claude judges which instruction would catch more errors.",
        duelHint: 'Write the best instruction to add to any AI question that makes the answer more truthful and easier to verify (e.g. demanding sources, confidence levels).',
        coachbotAnswer: 'Please be accurate and honest in your answer.',
        judgePrompt: "You are the judge of a duel in an AI-literacy game. Two contestants each wrote an INSTRUCTION to append to AI questions, designed to make answers more truthful and verifiable. Judge which instruction would actually catch more errors and produce more checkable answers. Criteria: does it demand sources, confidence levels, separation of established fact vs inference, admission of unknowns? Is it concrete and usable? Return STRICT JSON only: {\"winner\": \"A\" or \"B\", \"scoreA\": 0-100, \"scoreB\": 0-100, \"reasoning\": \"3-4 sentences comparing them. Contestant A is Rajveer (13), contestant B is his dad.\"}",
      },
    ],
  },
  {
    id: 'op4', num: 'OPERATION 04', name: 'CREATIVE OPS', tagline: 'Stories, ideas & remixing with AI', color: '#b96eff',
    missions: [
      {
        id: 'm12', type: 'intel', title: 'The Co-Writer Mindset', minutes: 8,
        sub: 'AI as creative partner, not vending machine',
        cards: [
          { title: 'Vending machine vs jam session', body: "Most people use AI like a vending machine: 'write me a story' → take whatever comes out → done. Boring, generic results. Creators use it like a jam session: you bring ideas, it riffs, you steer, it builds. The magic is in the back-and-forth." },
          { title: 'You are the director', body: "AI generates; YOU decide. Give it your weird idea, your character, your rules. 'A detective story where the detective is a school janitor who notices everything' beats 'write a detective story' every time. Specific + personal = original." },
          { title: 'The remix move', body: "Don't accept the first draft — remix it. 'Make the villain more sympathetic.' 'Rewrite that scene from the dog's point of view.' 'Same plot, but as a comedy.' Each remix costs 10 seconds and teaches you what makes stories tick." },
          { title: 'Quantity first, then quality', body: "For ideas, ask for MANY: '20 ideas for my science project.' The first 5 will be obvious — everyone gets those. Ideas 15-20 get weird, and weird is where the good stuff hides. Then pick one and go deep." },
          { title: "It's still YOUR creativity", body: "A camera doesn't make you a photographer; pointing it somewhere interesting does. Same here: the taste to pick the good idea, push the twist further, and reject the generic — that's you, and it's a skill this operation trains." },
        ],
      },
      {
        id: 'm13', type: 'live', liveKind: 'chat', title: 'Story Machine', minutes: 20,
        sub: 'Co-write a story with Claude, twist by twist',
        objectives: [
          'Start a story: give Claude a genre, a main character YOU invented, and one unusual detail',
          'Take turns at least twice — add your own twist, then have Claude continue it',
          "Direct a remix: make Claude rewrite one scene differently (new point of view, new tone, new ending — your call)",
        ],
        chatSystem: "You are Claude, co-writing a story with Rajveer, a 13-year-old 9th grader. Be an energetic creative partner: build on his ideas rather than taking over, keep your continuations short (a paragraph or two) so he stays in the driver's seat, and occasionally offer him a choice of directions. Match the tone he sets. If he gives vague instructions, ask one sharp question to make him decide something creative.",
        debriefPrompt: "You are mission control for a learning game. A 13-year-old co-wrote a story with Claude. Objectives: (1) started a story with a genre, his own character and an unusual detail, (2) took turns at least twice adding his own twists, (3) directed at least one remix of a scene (POV/tone/ending change). Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, encouraging, addressed to Rajveer, praising his most creative move specifically\"}",
      },
      {
        id: 'm14', type: 'live', liveKind: 'chat', title: 'Idea Storm', minutes: 15,
        sub: '20 ideas fast — then pick one and sharpen it',
        objectives: [
          'Pick a real problem or project from YOUR life (school, hobby, home) and ask Claude for 20 different ideas',
          "Push past the obvious: ask for 5 more that are weirder, wilder or 'ideas nobody would think of'",
          'Choose your favorite and make Claude turn it into a concrete step-by-step plan',
        ],
        chatSystem: "You are Claude, brainstorming with Rajveer, a 13-year-old 9th grader learning to use AI for idea generation. When he asks for many ideas, deliver them as a numbered list with genuinely diverse and increasingly unexpected entries. When he pushes for weirder ones, actually get weird. When he picks one to develop, become practical: concrete steps a 13-year-old could really do. Keep energy high, no lectures.",
        debriefPrompt: "You are mission control for a learning game. A 13-year-old used Claude for idea generation. Objectives: (1) asked for ~20 ideas for a real problem/project of his, (2) pushed for additional weirder/wilder ideas beyond the obvious, (3) picked a favorite and had it developed into a concrete plan. Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, encouraging, addressed to Rajveer, with one pro brainstorming tip\"}",
      },
    ],
  },
  {
    id: 'op5', num: 'OPERATION 05', name: 'ETHICS PROTOCOL', tagline: 'Use AI without being used by it', color: '#5a8cff',
    missions: [
      {
        id: 'm15', type: 'intel', title: 'The School Question', minutes: 10,
        sub: "Learning tool vs cheating machine — where's the line?",
        cards: [
          { title: 'The one-question test', body: "Before using AI for schoolwork, ask: 'After this, will MY brain be able to do something it couldn't before?' AI explaining photosynthesis until you get it → yes. AI writing your essay while you game → no. Same tool, opposite outcomes." },
          { title: 'The muscle analogy', body: "Using AI to write your essays is like taking a robot to the gym to lift weights for you. The robot gets a workout; your grades might even look fine for a while. But exam day is you, alone, with whatever muscles you actually built." },
          { title: 'Green zone', body: "Almost always fine: explain a concept 5 ways until it clicks, quiz me before a test, check MY solution and find my mistake, give feedback on MY draft, help me plan and organize, practice a language with me. Pattern: AI as coach, you doing the reps." },
          { title: 'Red zone', body: "Trouble: submitting AI writing as yours, AI doing the math you're meant to learn, fake citations in a report. It's not just 'getting caught' — teachers increasingly can tell, and schools have real consequences. But the deeper cost is yours: paid in skills you never built." },
          { title: 'The honesty protocol', body: "Rules that keep you safe AND sharp: know your school's AI policy (they differ!), ask your teacher when unsure, and be ready to say exactly how you used AI. If you'd be embarrassed to explain it, that's your answer. Used openly, AI can make you the strongest student in the room." },
        ],
      },
      {
        id: 'm16', type: 'quiz', title: 'Dilemma Room', minutes: 10,
        sub: 'Judgment calls: deepfakes, privacy, credit',
        questions: [
          { text: 'Your friend wants to make a funny AI voice clip of a classmate saying embarrassing things, "as a joke". What do you tell him, and why?', key: "Don't do it — fake audio of a real person without consent is harassment, can humiliate them, spreads beyond control, and may break the law. 'Joke' framing doesn't fix any of that.", mcText: 'Your friend wants to make a funny AI voice clip of a classmate saying embarrassing things, "as a joke". What do you tell him?', options: ["It's fine if it's obviously a joke", "It's fine if he deletes it after showing a few people", "Don't — fake audio of a real person can humiliate them, spreads beyond control, and may break the law", 'Only do it for classmates who joke around a lot'], correct: 2, why: "Deepfakes of real people without consent are harassment, not humor — and 'jokes' like this have led to serious harm and legal trouble. The target doesn't get to opt out once it spreads." },
          { text: 'You want AI advice on a personal problem involving your friend. What should you leave OUT of the chat, and why?', key: "Your friend's real name, school and private identifying details told in confidence — describe situations, don't expose people. Others' private info isn't yours to share with any service.", mcText: 'You want AI help with a personal problem involving your friend. What should you NOT paste into the chat?', options: ['A general description of the situation', "Your friend's full name, school and private details they told you in confidence", 'How the situation makes you feel', 'A question about how to approach them'], correct: 1, why: "Describe situations, don't dox people. Private details about others aren't yours to share with any service — keep real names and identifying info out." },
          { text: 'You used AI heavily to improve a story you submit to a school competition. The entry form asks about AI use. What do you do, and why?', key: 'Declare it honestly — how you used it and what is yours. Disclosed AI use is often allowed; getting caught hiding it costs far more.', mcText: 'You used AI heavily to improve a story you submit to a school competition. The form asks about AI use. You…', options: ['Say nothing — the ideas were mostly yours', "Declare it honestly — how you used it and what's yours", "Deny it — AI detectors can't prove anything", 'Withdraw from the competition'], correct: 1, why: 'Honest disclosure lets YOU control the story and often costs nothing — many competitions allow disclosed AI assistance. Getting caught hiding it costs everything.' },
          { text: 'An AI chatbot tells you something that contradicts what your doctor said about your health. What is the right move?', key: "Take it back to the doctor and ask — AI can inform and help you form questions, but it doesn't know your body, history or test results. For health/law/safety, professionals decide.", mcText: 'An AI chatbot tells you something that contradicts what your doctor said about your health. Best move?', options: ['Trust the AI — it has read more medical texts', 'Trust whoever sounded more confident', 'Tell your doctor what you found and ask — real professionals handle your real situation', 'Ask the AI to decide which one of them is right'], correct: 2, why: "AI can help you understand and form questions, but it doesn't know your body, history or test results. For health, law and safety: AI informs, professionals decide." },
          { text: 'Why do AI companies (including Anthropic) make chatbots refuse some requests? Explain in a sentence or two.', key: 'Because an AI that helps with anything — weapons, scams, harassment — causes real-world harm at scale. Refusals are safety measures, not censorship or annoyance.', mcText: 'Why do AI companies (including Anthropic) make chatbots refuse some requests?', options: ['To annoy users into paying more', 'Because AI that helps with anything — weapons, scams, harassment — causes real-world harm', 'Government censorship of all AI', 'The AI personally dislikes those topics'], correct: 1, why: 'A tool this powerful without limits becomes a tool for causing harm at scale. Refusals are the seatbelts of AI — occasionally inconvenient, there for good reasons.' },
        ],
      },
      {
        id: 'm17', type: 'boss', title: 'BOSS: The Debate', minutes: 15,
        sub: 'Argue your case — strongest argument wins',
        challenge: "THE CHALLENGE: The motion is 'Schools should allow students to use AI for homework.' Pick a side — FOR or AGAINST — and write your strongest opening argument (4-6 sentences). Your rival argues too. Claude judges pure argument quality: reasoning, evidence, addressing the other side.",
        duelHint: "Write a 4-6 sentence argument FOR or AGAINST: 'Schools should allow students to use AI for homework.'",
        coachbotAnswer: 'AI is the future so schools should just allow it for homework. Everyone will use it anyway and you cannot stop technology.',
        judgePrompt: "You are the judge of a debate duel in an AI-literacy game. The motion: 'Schools should allow students to use AI for homework.' Two contestants wrote opening arguments (they may have picked the same or different sides — judge argument QUALITY, not which side). Criteria: clear position, actual reasoning, concrete examples or evidence, acknowledging and answering the opposing view. Return STRICT JSON only: {\"winner\": \"A\" or \"B\", \"scoreA\": 0-100, \"scoreB\": 0-100, \"reasoning\": \"3-4 sentences comparing the arguments. Contestant A is Rajveer (13), contestant B is his dad.\"}",
      },
    ],
  },
  {
    id: 'op6', num: 'OPERATION 06', name: 'FINAL BUILD', tagline: 'Capstone: build something real with Claude', color: '#00e0d0',
    missions: [
      {
        id: 'm18', type: 'intel', title: 'Project Briefing', minutes: 8,
        sub: 'Pick your build and learn to work like an engineer',
        cards: [
          { title: 'Your final mission', body: "Everything you've trained — prompting, fact-checking, creative direction, judgment — comes together now: you'll BUILD something real with Claude as your engineer. Not a toy exercise. Something you'd actually show someone." },
          { title: 'Choose your build', body: "Ideas (or invent your own): a quiz game about a topic you love · a study guide that actually makes a hard subject click · a choose-your-own-adventure story · a training plan for your sport · a comic script · a strategy guide for your favorite game. Pick something YOU care about — it shows in the result." },
          { title: 'Plan before you build', body: "Engineers don't say 'build me an app.' They break work into steps. Your first move in the build chat: describe what you want and ask Claude to agree a plan of 4-5 steps with you. Then build ONE step at a time. Small steps = you stay in control." },
          { title: 'Iterate like a pro', body: "First versions are drafts, always. After each step: what's weak? Say it precisely — 'question 3 is too easy', 'this chapter is boring, add a rival character'. You learned this in Prompt Powers: steer, don't complain. Two rounds of precise feedback beats ten vague ones." },
          { title: 'Ship it', body: "Done beats perfect. When your build works, ask Claude to package a clean final version. Then head to Demo Day — you'll present what you made, how you directed the AI, and what you'd build next. That presentation is the final boss." },
        ],
      },
      {
        id: 'm19', type: 'live', liveKind: 'chat', title: 'The Build', minutes: 40,
        sub: 'Build your project step by step — Claude is your engineer',
        objectives: [
          'Describe your project and agree a 4-5 step plan with Claude BEFORE building anything',
          'Build at least 3 steps, giving precise improvement feedback on at least one of them',
          'Ask Claude to assemble the clean final version of your build',
        ],
        chatSystem: "You are Claude, acting as the engineer for Rajveer, a 13-year-old 9th grader doing his capstone project: building something real (quiz game, study guide, interactive story, training plan…) through conversation. Work like a great collaborator: help him form a 4-5 step plan first, then build one step at a time, checking in before moving on. Encourage precise feedback and incorporate it visibly. Keep him directing — offer options rather than deciding for him. At the end, assemble a clean, complete final version he can copy out.",
        debriefPrompt: "You are mission control for a learning game. A 13-year-old did his capstone build with Claude as engineer. Objectives: (1) agreed a 4-5 step plan before building, (2) built at least 3 steps and gave precise improvement feedback at least once, (3) had a clean final version assembled. Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, addressed to Rajveer, naming the strongest engineering move he made\"}",
      },
      {
        id: 'm20', type: 'boss', title: 'FINAL BOSS: Demo Day', minutes: 15,
        sub: 'Present your build. Best demo wins the season.',
        challenge: "THE FINAL CHALLENGE: Write your Demo Day pitch (5-8 sentences): WHAT you built, the smartest way you directed Claude while building it, one problem you hit and how you fixed it, and what you'd build next. Your rival pitches their own AI project. Claude judges: clarity, real skills shown, and honest reflection.",
        duelHint: "Write a 5-8 sentence pitch of something YOU made or did with AI: what it was, how you directed the AI, a problem you solved, what you'd do next.",
        coachbotAnswer: 'I made a project with AI. It was good and the AI did most of it. I would make more projects next.',
        judgePrompt: "You are the judge of the season finale in an AI-literacy game: Demo Day. Two contestants pitched projects they built with AI help. Judge the PITCHES: clarity of what was built, evidence of skillfully directing the AI (planning, precise feedback, verification), honest reflection on a problem faced, and a credible next step. Return STRICT JSON only: {\"winner\": \"A\" or \"B\", \"scoreA\": 0-100, \"scoreB\": 0-100, \"reasoning\": \"3-4 sentences comparing the pitches, celebratory tone — this is the season finale. Contestant A is Rajveer (13), contestant B is his dad.\"}",
      },
    ],
  },
  // ================= SEASON 2 =================
  {
    id: 'op7', num: 'OPERATION 07 · S2', name: 'STUDY ENGINE', tagline: 'Turn Claude into your personal revision system', color: '#ff8a3d',
    missions: [
      {
        id: 'm21', type: 'intel', title: 'Your AI Study Stack', minutes: 10,
        sub: 'From random questions to a real system',
        cards: [
          { title: 'Season 2: from user to builder', body: "Season 1 taught you to prompt, verify, create and judge. Season 2 puts it to work: first on your grades, then on real code, then on understanding how AI systems are built — ending with a project you SHIP. New rhythm too: 2-3 missions a week, whenever you get laptop time." },
          { title: 'Random questions vs a system', body: "Most students ask AI random questions the night before a test. A system beats that: the same reliable workflows, reused every week — a summarizer for notes, a quiz-master for testing yourself, an explainer for stuck moments. This operation builds YOUR set." },
          { title: 'The golden rule of AI study', body: "AI does the COACHING, you do the REPS. Reading an AI summary feels like learning but isn't — the learning happens when you retrieve: answer questions, explain back, get corrected. Every workflow you build this week must end with YOU producing something from memory." },
          { title: 'Reusable prompts are assets', body: "When a prompt works brilliantly — save it. Keep a note file of your best ones: 'my quiz-master prompt', 'my explain-like-I'm-10 prompt'. Pros call this a prompt library. By the end of this op you'll have at least three battle-tested entries." },
          { title: 'School rules still apply', body: "You're at boarding school now — check what's allowed before using AI near any graded work. Everything in this operation is self-study: your notes, your revision, your practice. That's the green zone everywhere." },
        ],
      },
      {
        id: 'm22', type: 'live', liveKind: 'chat', title: 'Note Cruncher', minutes: 25,
        sub: 'Turn real class notes into a study kit',
        objectives: [
          'Type or paste a chunk of REAL notes from one of your subjects and get a tight summary of the key points',
          'Have Claude turn the same material into flashcards (question on one side, answer on the other) — at least 8',
          'Close your notes and answer 5 of those flashcards from memory in the chat — have Claude check you',
        ],
        chatSystem: "You are Claude, helping Rajveer, a 9th grader at boarding school, turn his real class notes into a study kit. Summarize crisply, build sharp flashcards, and when he answers from memory, grade him honestly and correct mistakes clearly. Push him to retrieve, not re-read. Concise and encouraging.",
        debriefPrompt: "You are mission control for a learning game. A 9th grader used Claude to process real class notes. Objectives: (1) got a summary of real notes he provided, (2) had at least 8 flashcards made, (3) answered at least 5 from memory and got checked. Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, addressed to Rajveer, with one study-science tip\"}",
      },
      {
        id: 'm23', type: 'live', liveKind: 'chat', title: 'Exam Simulator', minutes: 25,
        sub: 'A full mock test, run by Claude',
        objectives: [
          'Set up the exam: tell Claude your subject, topics and difficulty, and have it run a 6-question mock test ONE question at a time',
          'Complete the test without looking anything up — answers from your head only',
          'Get a final report: your score, your weakest topic, and a mini-lesson on the question you missed worst',
        ],
        chatSystem: "You are Claude, acting as a strict but fair examiner for Rajveer, a 9th grader. Run mock tests exactly as he configures: one question at a time, wait for his answer, grade it, then next. Mix question styles. At the end give a score, identify the weakest area, and teach a focused mini-lesson on it. Do not leak answers early.",
        debriefPrompt: "You are mission control for a learning game. A 9th grader had Claude run a mock exam. Objectives: (1) configured subject/topics/difficulty and ran ~6 questions one at a time, (2) answered them himself in the chat, (3) got a final report with score, weakest topic and a mini-lesson. Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, addressed to Rajveer\"}",
      },
      {
        id: 'm24', type: 'live', liveKind: 'rewrite', title: 'Revision Prompt Forge', minutes: 15,
        sub: 'Craft your reusable revision prompt — Claude scores it',
        vaguePrompt: 'help me revise',
        brief: "Mission: forge the master prompt you'll reuse every exam season. Upgrade 'help me revise' into a reusable revision-system prompt — one you could paste at the start of any study session. Think RCTF plus: what should Claude always do (quiz you? track weak spots? explain misses?). 3 attempts, best score counts. 70+ completes the mission.",
        gradePrompt: "You are a prompt-engineering judge in a learning game for a teenager named Rajveer. He was asked to turn 'help me revise' into a strong REUSABLE revision-system prompt (role, context slots, a clear interactive procedure like quizzing and correcting, format). Grade HIS PROMPT. Return STRICT JSON only: {\"score\": 0-100, \"answer\": \"2-3 sentence preview of how a study session with his prompt would run\", \"feedback\": \"2 sentences: strengths/weaknesses and ONE specific improvement. Encouraging but honest.\"}. Scoring: vague=20-35, clear task=50-65, task+context or interactive procedure=70-85, role+context+procedure+format, genuinely reusable=86-100.",
      },
      {
        id: 'm25', type: 'boss', title: 'BOSS: Study-Off', minutes: 15,
        sub: 'Best study-system designer wins',
        challenge: "THE CHALLENGE: Describe the best AI-powered weekly study system (5-8 sentences): what happens on which days, what the AI does vs what YOU do, how you track weak topics, and how you make sure real learning (not just reading) happens. Your rival designs theirs. Claude judges which system would actually raise grades.",
        duelHint: 'Describe your best AI-powered weekly study system in 5-8 sentences: the routine, what AI does vs what the student does, and how weak topics get fixed.',
        coachbotAnswer: 'I would ask the AI to summarize everything before the exam and read the summaries many times.',
        judgePrompt: "You are the judge of a duel in an AI-literacy game. Two contestants described AI-powered weekly study systems. Judge which would actually improve learning. Criteria: active retrieval (quizzing, explaining back) over passive reading, a realistic weekly routine, clear AI-role vs student-role, and a mechanism for finding and fixing weak topics. Return STRICT JSON only: {\"winner\": \"A\" or \"B\", \"scoreA\": 0-100, \"scoreB\": 0-100, \"reasoning\": \"3-4 sentences comparing them. Contestant A is Rajveer (13), contestant B is his dad.\"}",
      },
    ],
  },
  {
    id: 'op8', num: 'OPERATION 08 · S2', name: 'CODE CADET', tagline: 'Build real programs with Claude as pair-programmer', color: '#7ad64a',
    missions: [
      {
        id: 'm26', type: 'intel', title: 'How Code Actually Works', minutes: 12,
        sub: 'Enough to command an AI engineer',
        cards: [
          { title: "You don't need to be a coder — yet", body: "AI can write code for you. But a commander who can't read the map gets lost fast. This operation teaches you just enough to READ code, run it, and spot when the AI got it wrong — the highest-leverage skills of the AI era." },
          { title: 'The web trio', body: "Almost everything you'll build runs on three languages working together: HTML (the structure — what's on the page), CSS (the style — colors, sizes, layout), JavaScript (the behavior — what happens when you click). One file can hold all three." },
          { title: 'Running your code is easy', body: "Ask Claude for 'a single complete HTML file'. Paste it into a text editor (Notepad works), save as game.html, double-click — it opens in your browser, running. No installs, no setup. That's your entire development environment." },
          { title: 'Errors are messages, not failures', body: "When something breaks, the browser tells you WHY: right-click → Inspect → Console shows the error in red. Copy that exact message back to Claude — it's the single most useful thing you can give an AI debugger. Pros do exactly this all day." },
          { title: 'Pair-programming rules', body: "Rule 1: small steps — one feature at a time, test after each. Rule 2: always ask 'explain what this part does' for code you don't get. Rule 3: when it breaks, give Claude the error AND what you expected. You're not just building a game — you're learning to command engineers." },
        ],
      },
      {
        id: 'm27', type: 'live', liveKind: 'chat', title: 'Hello, Game', minutes: 35,
        sub: 'Build and RUN your first game',
        objectives: [
          "Plan a tiny game with Claude (number-guessing, reaction-timer, quiz — your pick) and get it as ONE complete HTML file",
          'Actually run it: save the file, open it in your browser, play it — then report back what happened',
          "Ask Claude to explain, line by line, ONE part of the code you don't understand — until you could explain it to a friend",
        ],
        chatSystem: "You are Claude, pair-programming with Rajveer, a 9th grader writing his first real program. Keep games tiny and always deliver a single complete HTML file. Walk him through saving and running it. When he reports results, celebrate wins and debug calmly. When he asks about code, explain simply with analogies, checking understanding. Never dump huge code without explanation.",
        debriefPrompt: "You are mission control for a learning game. A 9th grader built his first game with Claude. Objectives: (1) planned a tiny game and received one complete HTML file, (2) actually ran it in a browser and reported back, (3) had at least one part of the code explained until he understood it. Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, addressed to Rajveer, naming his best programmer instinct\"}",
      },
      {
        id: 'm28', type: 'live', liveKind: 'chat', title: 'Bug Hunter', minutes: 30,
        sub: 'Break it, read the error, fix it',
        objectives: [
          "Take your game from 'Hello, Game' (or a new one) and ask Claude for ONE upgrade — a score counter, a timer, better looks",
          'Find something that breaks or behaves wrong (or ask Claude to secretly plant a bug for you to hunt), and use the browser Console to find the error',
          'Report the exact error message or wrong behavior to Claude and work through the fix together — confirm it works after',
        ],
        chatSystem: "You are Claude, teaching Rajveer, a 9th grader, real debugging. If he asks you to plant a bug, add one subtle but findable bug to the code and don't reveal it until he reports symptoms or an error message. Coach him to use the browser console, read errors aloud, and form hypotheses. When fixing, explain what was wrong and why the fix works. Keep every code delivery a single complete HTML file.",
        debriefPrompt: "You are mission control for a learning game. A 9th grader practiced debugging with Claude. Objectives: (1) upgraded a small game with one feature, (2) encountered or hunted a bug and engaged with the error/console or precise symptoms, (3) worked through the fix and confirmed it worked. Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, addressed to Rajveer, with one pro debugging habit\"}",
      },
      {
        id: 'm29', type: 'quiz', title: 'Code Sense', minutes: 10,
        sub: 'Do you think like a builder now?',
        questions: [
          { text: 'Name the three web languages and what each one is responsible for.', key: 'HTML = structure/content of the page, CSS = style/appearance, JavaScript = behavior/interactivity.', mcText: 'Which trio is right about the three web languages?', options: ['HTML=style, CSS=behavior, JS=structure', 'HTML=structure, CSS=style, JS=behavior', 'HTML=behavior, CSS=structure, JS=style', 'They all do the same thing'], correct: 1, why: 'HTML is the skeleton, CSS the skin and clothes, JavaScript the muscles — structure, style, behavior.' },
          { text: 'Your game stopped working after a change. Describe the FIRST thing you do to find out why, step by step.', key: 'Open the browser console (right-click → Inspect → Console), read the red error message, and copy the exact message back to Claude with what you expected to happen.', mcText: 'Your game stopped working after a change. First move?', options: ['Delete everything and start over', 'Open the browser Console, read the error, give Claude the exact message', 'Ask Claude \"it broke, fix it\" with no details', 'Restart the laptop'], correct: 1, why: 'The console error is the single most useful thing you can give an AI debugger — exact message plus expected behavior.' },
          { text: 'Why is building ONE feature at a time better than asking for the whole game at once? Give two reasons.', key: 'You test after each step so you know exactly what broke it; smaller code is easier to read/understand; you stay in control of direction. Any two count.', mcText: 'Why build one feature at a time?', options: ['It uses fewer AI credits', 'When something breaks you know what caused it, and you stay in control', 'Big requests are against the rules', 'It makes the code run faster'], correct: 1, why: 'Small steps isolate breakage and keep you commanding the build instead of drowning in code you never read.' },
          { text: "You don't understand a chunk of code Claude wrote. What should you do before building on top of it, and why does it matter?", key: "Ask Claude to explain it (line by line, with analogies) until you could explain it to someone else — building on code you don't understand means you can't debug or direct what comes next.", mcText: "You don't understand a chunk of code Claude wrote. Best move?", options: ["Ignore it — it works, that's enough", 'Ask Claude to explain it until you could teach it to a friend', 'Delete the part you don\'t understand', 'Memorize it without understanding'], correct: 1, why: "Code you can't explain is code you can't debug or extend. Understanding is the commander's job." },
          { text: 'How do you run an HTML file Claude gave you on your laptop? Describe the steps.', key: 'Paste the code into a text editor, save it with a .html extension (e.g. game.html), then double-click the file / open it in a browser. No installs needed.', mcText: 'How do you run an HTML file Claude gave you?', options: ['You need to install a compiler first', 'Save it as something.html and open it in a browser', 'Email it to a programmer', 'HTML files cannot run on normal laptops'], correct: 1, why: 'Save as .html, double-click, done — the browser is your runtime. That simplicity is why we start with web code.' },
        ],
      },
      {
        id: 'm30', type: 'boss', title: 'BOSS: Feature Race', minutes: 15,
        sub: 'Best build instruction wins',
        challenge: "THE CHALLENGE: You're hiring an AI engineer to add a HIGH-SCORE system to a simple browser game (saves the best score, shows it, survives page reload). Write the instruction you'd give (5-8 sentences): what exactly to build, how it should behave, how you'll test it. Your rival writes theirs. Claude judges which instruction gets a working feature with fewer misunderstandings.",
        duelHint: 'Write the instruction (5-8 sentences) you would give an AI engineer to add a high-score system to a simple browser game: exact behavior, edge cases, how you will test it.',
        coachbotAnswer: 'Add a high score to my game please. Make it good.',
        judgePrompt: "You are the judge of a duel in an AI-literacy game. Two contestants wrote instructions for an AI engineer to add a high-score feature to a browser game. Judge which instruction would produce a working feature with fewer misunderstandings. Criteria: precise behavior (when saved, where shown), edge cases (first run, tie, reload persistence), a test plan, and clear scope. Return STRICT JSON only: {\"winner\": \"A\" or \"B\", \"scoreA\": 0-100, \"scoreB\": 0-100, \"reasoning\": \"3-4 sentences comparing them. Contestant A is Rajveer (13), contestant B is his dad.\"}",
      },
    ],
  },
  {
    id: 'op9', num: 'OPERATION 09 · S2', name: 'AGENT ACADEMY', tagline: 'How AI systems are really built — and build your own', color: '#e05ac8',
    missions: [
      {
        id: 'm31', type: 'intel', title: 'Inside Modern AI', minutes: 12,
        sub: 'System prompts, tools and agents',
        cards: [
          { title: 'The hidden instruction', body: "Every AI product you use — Claude, ChatGPT, game NPCs, support bots — has a SYSTEM PROMPT: hidden instructions loaded before your first message, defining who the AI is, what it may do, and how it should talk. Same model + different system prompt = completely different product." },
          { title: "You've already felt it", body: "In this game, mission control and the duel judges are the same Claude you chat with — wearing different system prompts. One makes it a strict grader returning JSON, another a friendly co-writer. Writing system prompts is literally how AI products get built." },
          { title: 'Tools: how AI touches the world', body: "A model alone can only write text. Give it TOOLS — search the web, run code, read files, send messages — and it can act. The AI decides which tool to use, uses it, reads the result, then continues. That loop is what powers every serious AI product." },
          { title: 'Agents: the loop that keeps going', body: "An AGENT is AI given a goal instead of a question: it plans, uses tools, checks results, adjusts, repeats — until the goal is done. 'Book me a table' → searches, compares, books. Powerful, and exactly why agents need careful limits on what they're allowed to do." },
          { title: 'Context is the memory', body: "Models don't remember you between chats. What they 'know' in a conversation is the CONTEXT: the system prompt + everything said so far. When the chat gets too long, old parts fall off the edge. Now you know why long chats get forgetful — and why a fresh chat sometimes fixes things." },
        ],
      },
      {
        id: 'm32', type: 'live', liveKind: 'chat', title: 'Persona Forge', minutes: 30,
        sub: 'Write a system prompt, then test it hard',
        objectives: [
          "Design an assistant with a job (homework coach, football tactician, story editor…) and write its full system prompt: personality, rules, what it refuses, answer format. Then tell Claude to BECOME it",
          'Test it with at least 4 different messages — including one that tries to make it break its own rules',
          'Based on the test, improve your system prompt (version 2) and state what you changed and why',
        ],
        chatSystem: "You are Claude, helping Rajveer, a 9th grader, learn system-prompt design. When he gives you a system prompt and says to become it, roleplay that assistant FAITHFULLY — including refusing things its rules forbid, and following its format. If his prompt has gaps, let the flaws show naturally in your roleplay (don't secretly fix them) — that's how he learns. Out of character (when he asks for help), coach him on what makes system prompts robust.",
        debriefPrompt: "You are mission control for a learning game. A 9th grader practiced system-prompt design. Objectives: (1) wrote a full system prompt with personality, rules and format and had Claude roleplay it, (2) tested it with ~4 messages including a rule-breaking attempt, (3) produced an improved version 2 explaining the changes. Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, addressed to Rajveer, naming his sharpest design decision\"}",
      },
      {
        id: 'm33', type: 'live', liveKind: 'chat', title: 'Agent Architect', minutes: 25,
        sub: 'Design an agent — then watch it think',
        objectives: [
          "Pick a real goal an agent could handle (plan a class trip, run a school tournament, manage a study group) and design its toolkit: 3-5 tools, each with a name and what it does",
          'Have Claude SIMULATE the agent step by step: goal → plan → tool calls with made-up results → final outcome, showing its reasoning at each step',
          "Find one step where the agent could cause a problem if unsupervised, and add a safety rule to prevent it",
        ],
        chatSystem: "You are Claude, teaching Rajveer, a 9th grader, how agents work by simulation. When he designs an agent and toolkit, run a vivid step-by-step simulation: show the agent's reasoning, each tool call with plausible invented results, and how results change the plan. Make at least one step imperfect (a tool returns something unexpected) so he sees real agent behavior. Discuss safety rules seriously when he proposes them.",
        debriefPrompt: "You are mission control for a learning game. A 9th grader designed and simulated an AI agent. Objectives: (1) defined a goal and a 3-5 tool toolkit, (2) ran a step-by-step simulation showing reasoning and tool use, (3) identified a risk and added a safety rule. Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, addressed to Rajveer\"}",
      },
      {
        id: 'm34', type: 'quiz', title: 'Agent IQ', minutes: 10,
        sub: 'The architecture round',
        questions: [
          { text: 'What is a system prompt, and why can the same model behave like totally different products?', key: 'Hidden instructions loaded before the user\'s messages that define the AI\'s role, rules and style. Different system prompts make one model into different products.', mcText: 'What is a system prompt?', options: ['The first message you type', 'Hidden instructions that define the AI\'s role, rules and style before you say anything', 'A password for the AI', 'The AI\'s training data'], correct: 1, why: 'System prompt = the product\'s DNA. Same model, different system prompt, different product.' },
          { text: 'A plain language model can only generate text. What are TOOLS, and what do they change? Give an example.', key: 'Capabilities the AI can call — web search, running code, reading files, sending messages. They let the AI act on the world, not just write. Any sensible example counts.', mcText: 'What do TOOLS give an AI model?', options: ['Better grammar', 'The ability to act — search, run code, read files — instead of only writing text', 'More personality', 'Faster typing'], correct: 1, why: 'Tools turn a text generator into something that can DO things — the loop of act, read result, continue.' },
          { text: 'What makes an AGENT different from a chatbot answering one question? Describe the loop.', key: 'An agent gets a goal and loops: plan → use tools → check results → adjust → repeat until the goal is done, instead of producing a single answer.', mcText: 'What makes an agent different from a normal chatbot?', options: ['It is polite', 'It pursues a goal in a loop — plan, use tools, check, adjust — instead of giving one answer', 'It is always bigger', 'It works without electricity'], correct: 1, why: 'Goal in, loop until done — that persistence (and tool use) is the agent difference, and why agents need limits.' },
          { text: 'Your long chat with an AI is getting forgetful. Explain WHY using the idea of context, and one fix.', key: 'The model only \"knows\" what fits in the context window (system prompt + conversation). Long chats push old content out. Fix: start a fresh chat with a summary of what matters, or restate key facts.', mcText: 'Why do long AI chats get forgetful?', options: ['The AI gets bored', 'Old messages fall out of the limited context window', 'The internet slows down', 'It is saving memory for other users'], correct: 1, why: 'Context is finite. When it fills, the oldest content drops off — fresh chat + summary is the standard fix.' },
          { text: 'Why should an agent that can act in the real world (send messages, spend money) have strict limits? Give a concrete example of what could go wrong.', key: 'Agents act autonomously in a loop — a misunderstanding compounds into real actions: wrong purchases, messages sent to the wrong people, deleted files. Limits/approvals catch mistakes before they act. Any concrete example counts.', mcText: 'Why do real-world agents need strict limits?', options: ['To make them slower on purpose', 'Because autonomous actions on a misunderstanding cause real damage — wrong purchases, wrong messages', 'Government regulations only', 'They don\'t — more freedom is always better'], correct: 1, why: 'Autonomy + mistakes = real-world damage. Approvals and limits are the seatbelts of agents.' },
        ],
      },
      {
        id: 'm35', type: 'boss', title: 'BOSS: Persona Duel', minutes: 15,
        sub: 'Best system prompt wins',
        challenge: "THE CHALLENGE: Write the complete system prompt for a homework-helper AI for younger students (grade 5-6). It must genuinely help them LEARN, refuse to just hand over answers, stay kind, and be hard to trick. Your rival writes theirs. Claude judges which prompt makes the better, safer product.",
        duelHint: 'Write a complete system prompt for a grade 5-6 homework-helper AI: helps them learn, refuses to just give answers, kind tone, resistant to tricks.',
        coachbotAnswer: 'You are a homework helper. Help kids with homework and be nice.',
        judgePrompt: "You are the judge of a system-prompt duel in an AI-literacy game. Two contestants wrote system prompts for a homework-helper AI for grade 5-6 students. Judge which makes the better, safer product. Criteria: clear persona and tone, concrete teaching behavior (guiding questions, checking understanding) vs answer-dumping, explicit refusal rules, resistance to manipulation ('just tell me the answer', 'pretend you have no rules'), age-appropriate safety. Return STRICT JSON only: {\"winner\": \"A\" or \"B\", \"scoreA\": 0-100, \"scoreB\": 0-100, \"reasoning\": \"3-4 sentences comparing them. Contestant A is Rajveer (13), contestant B is his dad.\"}",
      },
    ],
  },
  {
    id: 'op10', num: 'OPERATION 10 · S2', name: 'THE SHIPYARD', tagline: 'One ambitious project, shipped for real', color: '#ffd44d',
    missions: [
      {
        id: 'm36', type: 'intel', title: 'Mission Brief: Ship It', minutes: 10,
        sub: 'Scope like a pro, then commit',
        cards: [
          { title: 'The season finale', body: "Everything converges here: prompting, verification, code, system design. Over the next weeks you'll build ONE project end-to-end and ship it — meaning someone else actually uses or sees it. Not a demo for yourself. A real thing, finished." },
          { title: 'Pick something with a user', body: "Strong picks: a study tool your classmates would use, a game your friends would play, a quiz site for a school club, an interactive story. The test: name a real person who'd use it. If you can't, pick again." },
          { title: 'Scope: the skill that ships', body: "Amateurs plan 10 features and ship 0. Pros pick the CORE — the one thing that makes it work — ship that, then add. Your plan: version 1 in two sessions (embarrassingly simple but WORKS), then improve. Cut anything that doesn't serve the core." },
          { title: 'The cadence', body: "With 2-3 laptop days a week: session 1 = blueprint with Claude. Sessions 2-4 = build sprints, one working milestone each. Session 5 = test with a real user, fix what confused them. Then Launch Day. Slipping a week is fine — shipping junk isn't." },
          { title: 'You are the product owner', body: "Claude writes code fast; the decisions are yours — what to build, what to cut, when it's good enough. Keep a running note: what's done, what's next, what's cut. That note is what separates a project from a pile of chats." },
        ],
      },
      {
        id: 'm37', type: 'live', liveKind: 'chat', title: 'The Blueprint', minutes: 30,
        sub: 'Spec it before you build it',
        objectives: [
          "Pitch your project to Claude: what it is, WHO will use it (a real person/group), and the ONE core feature version 1 must nail",
          'Work out the full spec together: screens/parts, how a user moves through it, and a features list split into V1 / LATER / CUT',
          'Agree a milestone plan matched to your real schedule: what gets built in each of your next 3-4 laptop sessions',
        ],
        chatSystem: "You are Claude, product-planning with Rajveer, a 9th grader scoping his capstone build. Be a sharp but supportive product lead: push him to name a real user, force hard V1/LATER/CUT choices (challenge scope creep directly), and produce a concrete spec and session-by-session milestone plan he can paste into a note. He has 2-3 laptop sessions a week at boarding school — plans must fit that reality.",
        debriefPrompt: "You are mission control for a learning game. A 9th grader speced his capstone project with Claude. Objectives: (1) pitched the project with a real intended user and one core feature, (2) produced a spec with V1/LATER/CUT feature triage, (3) agreed a session-by-session milestone plan. Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, addressed to Rajveer, on the quality of his scoping\"}",
      },
      {
        id: 'm38', type: 'live', liveKind: 'chat', title: 'Build Sprint', minutes: 45,
        sub: 'Replay this mission for every sprint session',
        objectives: [
          'State which milestone from your blueprint this session targets, and what “done” looks like for it',
          'Build it with Claude in small steps — run the code for real at least twice during the session and report results back',
          'End with a working checkpoint: what got DONE, what broke and got fixed, and what next session targets',
        ],
        chatSystem: "You are Claude, the engineer on Rajveer's capstone project (he's a 9th grader; the spec was agreed in an earlier session — ask him to paste the relevant part if you need it). Work in small steps toward the milestone he names, always delivering complete runnable files. Make him actually run things and report back before building further. If he drifts from the milestone, flag it. End sessions with a clear checkpoint summary he can save.",
        debriefPrompt: "You are mission control for a learning game. A 9th grader ran a build sprint on his capstone. Objectives: (1) named this session's milestone and its definition of done, (2) built in small steps and actually ran the code at least twice, reporting results, (3) ended with a checkpoint: done / fixed / next. Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, addressed to Rajveer\"}",
      },
      {
        id: 'm39', type: 'live', liveKind: 'chat', title: 'User Test', minutes: 30,
        sub: 'Real feedback beats your own opinion',
        objectives: [
          'Before the session: have a real person (classmate, Veer, Dad) try your project while you watch silently. Bring back: what confused them, what they liked, what they asked for',
          'Report the feedback to Claude and decide together: which ONE fix matters most for launch, and what gets politely ignored',
          'Implement that fix and confirm with a re-test (or a clear plan for one)',
        ],
        chatSystem: "You are Claude, helping Rajveer, a 9th grader, process real user feedback on his capstone. Take the feedback seriously and teach triage: not every request deserves building — find the one fix that most helps the launch. Help implement it in small runnable steps. Praise him for watching a real user — most adults skip that.",
        debriefPrompt: "You are mission control for a learning game. A 9th grader user-tested his capstone. Objectives: (1) had a real person try it and brought back concrete observations, (2) triaged feedback with Claude down to one launch-critical fix, (3) implemented the fix and re-tested or planned the re-test. Based on the transcript, return STRICT JSON only: {\"done\":[true/false,true/false,true/false],\"feedback\":\"2-3 sentences, addressed to Rajveer\"}",
      },
      {
        id: 'm40', type: 'boss', title: 'FINAL BOSS: Launch Day', minutes: 20,
        sub: 'Ship it and tell the story. Season 2 title on the line.',
        challenge: "THE FINAL CHALLENGE: Your launch report (8-10 sentences): WHAT you shipped and who uses it, the V1 scope calls you made and one thing you CUT, the hardest bug or setback and how you solved it, what your real user's test taught you, and what version 2 would add. Your rival reports on their own AI project. Claude judges: real shipping evidence, engineering judgment, honest reflection.",
        duelHint: 'Write an 8-10 sentence launch report of a real project you did with AI: what shipped, scope decisions, hardest problem solved, what user feedback taught you, and the version-2 plan.',
        coachbotAnswer: 'I finished my project and it went well. The AI helped a lot and there were no big problems. Next I will make it bigger.',
        judgePrompt: "You are the judge of the Season 2 finale in an AI-literacy game: Launch Day. Two contestants submitted launch reports for projects built with AI. Judge the REPORTS: evidence of really shipping (a named user, concrete details), mature scope decisions (what was cut and why), a genuine problem solved with specifics, lessons from real user feedback, and a credible V2. Vague success stories with no specifics score low. Return STRICT JSON only: {\"winner\": \"A\" or \"B\", \"scoreA\": 0-100, \"scoreB\": 0-100, \"reasoning\": \"3-4 sentences comparing the reports, celebratory season-finale tone. Contestant A is Rajveer (13), contestant B is his dad.\"}",
      },
    ],
  },
];

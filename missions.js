// PromptOps — Season 1 content
// Ops 1–2 fully playable; Ops 3–6 locked previews.

export const XP_RULES = { intel: 30, quiz: 50, live: 60, boss: 100 };

export const RANKS = [
  { name: 'Bronze Operator', min: 0, icon: '🥉' },
  { name: 'Silver Operator', min: 200, icon: '🥈' },
  { name: 'Gold Operator', min: 500, icon: '🥇' },
  { name: 'Platinum Operator', min: 900, icon: '💠' },
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
        sub: '5 questions — write your answers in your own words',
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
        sub: 'Write your answers — no guessing here',
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
        sub: 'Write your answers — think like a fact-checker',
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
        sub: 'Judgment calls: deepfakes, privacy, credit — in your own words',
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
];

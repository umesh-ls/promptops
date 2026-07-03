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
        sub: '5 questions on the fundamentals',
        questions: [
          { text: 'At its core, what does a large language model do?', options: ['Searches a giant database of facts', 'Predicts what text should come next, token by token', 'Copies answers from websites in real time', 'Runs logic rules written by programmers'], correct: 1, why: "It's a next-token prediction machine. Everything else — the explanations, the jokes, the code — emerges from that one skill." },
          { text: 'Where does Claude\'s knowledge come from?', options: ['Live internet access', 'Patterns learned from training text', 'A team of humans typing answers', 'Your phone\'s files'], correct: 1, why: 'Training on billions of pages of text. No live browsing by default, no humans behind the curtain.' },
          { text: 'Claude states something confidently. What does that tell you?', options: ["It's definitely true", "It's probably a lie", 'Nothing — it can be confidently wrong', 'It was fact-checked first'], correct: 2, why: 'Confidence and correctness are unrelated for an LLM. Confident-but-wrong answers are called hallucinations.' },
          { text: 'You ask about a football match from yesterday. What happens?', options: ['It looks up the score online', "It likely doesn't know — training has a cutoff date", 'It always knows recent sports', 'It asks a human'], correct: 1, why: "Without a search tool, the model only knows what was in its training data — which ends at a cutoff date." },
          { text: 'AI gives you a fact for your history homework. Best move?', options: ['Paste it straight in — AI is always right', 'Verify it against a reliable source', 'Ask the AI if it\'s sure (that proves it)', 'Never use AI for homework'], correct: 1, why: "Asking 'are you sure?' doesn't verify anything — the model can double down on a hallucination. Cross-check facts that matter." },
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
        sub: 'Pick the stronger prompt — 5 rounds',
        questions: [
          { text: 'You want help revising for a biology test. Stronger prompt?', options: ["'tell me about biology'", "'Act as a biology teacher. I'm in 9th grade with a cell-division test Friday. Quiz me with 5 questions, one at a time, and correct my answers.'"], correct: 1, why: 'Role + context + a concrete task + an interactive format. The vague one gets a random textbook dump.' },
          { text: 'Which TASK is sharper?', options: ["'explain photosynthesis'", "'explain photosynthesis in 5 steps, each step one sentence, like a recipe'"], correct: 1, why: 'Numbers and structure make tasks concrete. "Like a recipe" is a format instruction — free upgrade.' },
          { text: 'The answer you got is too complicated. Best follow-up?', options: ["'that's bad, try again'", "'simpler please — explain it to a 10-year-old, and use a cricket analogy'"], correct: 1, why: "Don't just complain — steer. Say HOW to fix it. The model follows precise direction beautifully." },
          { text: 'Why does giving the AI a ROLE help?', options: ['It makes the AI smarter', 'It loads the right vocabulary, tone and depth for your need', 'Roles are required or it refuses', 'It makes answers longer'], correct: 1, why: "The model can write like anyone. A role tells it which 'voice' and depth to use — coach vs professor vs examiner." },
          { text: 'You need a study plan you can stick on your wall. What\'s missing: "Make me a study plan for finals"?', options: ['A magic word', 'Context (subjects, dates, hours free) and format (table for one week)', 'Politeness', 'Nothing — it\'s perfect'], correct: 1, why: 'Without your subjects, timeline and a format, you get a generic plan for an imaginary student. Context + format = a plan for YOU.' },
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
        judgePrompt: "You are the judge of a prompt-writing duel in a learning game. Two people each wrote a prompt asking an AI to create a one-week exam study plan. Judge which PROMPT would produce the more useful, personalized result. Criteria: clear task, real context, specific format, a role if useful. Return STRICT JSON only: {\"winner\": \"A\" or \"B\", \"scoreA\": 0-100, \"scoreB\": 0-100, \"reasoning\": \"3-4 sentences comparing them, naming what each did well and what decided it. Contestant A is Rajveer (13), contestant B is his dad.\"}",
      },
    ],
  },
  {
    id: 'op3', num: 'OPERATION 03', name: 'FAKE HUNTER', tagline: 'Catch hallucinations & verify like a pro', color: '#ffb930', locked: true,
    missions: [
      { id: 'm8', type: 'intel', title: 'Why AI Lies (Without Lying)', minutes: 10, sub: 'Hallucinations explained' },
      { id: 'm9', type: 'quiz', title: 'Spot the Fake', minutes: 10, sub: 'Find the hallucinations hidden in real-looking answers' },
      { id: 'm10', type: 'live', title: 'Stress Test', minutes: 15, sub: 'Try to make Claude admit uncertainty — live' },
      { id: 'm11', type: 'boss', title: 'BOSS: Truth Tribunal', minutes: 12, sub: 'You vs Dad: who catches more fakes?' },
    ],
  },
  {
    id: 'op4', num: 'OPERATION 04', name: 'CREATIVE OPS', tagline: 'Stories, ideas & remixing with AI', color: '#b96eff', locked: true,
    missions: [
      { id: 'm12', type: 'intel', title: 'The Co-Writer Mindset', minutes: 8, sub: 'AI as creative partner, not vending machine' },
      { id: 'm13', type: 'live', title: 'Story Machine', minutes: 20, sub: 'Co-write a story, one twist at a time' },
      { id: 'm14', type: 'live', title: 'Idea Storm', minutes: 15, sub: '30 ideas in 10 minutes — then pick and sharpen' },
    ],
  },
  {
    id: 'op5', num: 'OPERATION 05', name: 'ETHICS PROTOCOL', tagline: 'Use AI without being used by it', color: '#5a8cff', locked: true,
    missions: [
      { id: 'm15', type: 'intel', title: 'The School Question', minutes: 10, sub: 'Learning tool vs cheating machine — where\'s the line?' },
      { id: 'm16', type: 'quiz', title: 'Dilemma Room', minutes: 10, sub: 'Judgment calls: deepfakes, privacy, credit' },
      { id: 'm17', type: 'boss', title: 'BOSS: The Debate', minutes: 15, sub: 'Argue an AI-ethics case — Claude moderates' },
    ],
  },
  {
    id: 'op6', num: 'OPERATION 06', name: 'FINAL BUILD', tagline: 'Capstone: build something real with Claude', color: '#00e0d0', locked: true,
    missions: [
      { id: 'm18', type: 'intel', title: 'Project Briefing', minutes: 8, sub: 'Pick your build: quiz game, study tool, story world…' },
      { id: 'm19', type: 'live', title: 'The Build', minutes: 40, sub: 'Build it step by step with Claude as your engineer' },
      { id: 'm20', type: 'boss', title: 'FINAL BOSS: Demo Day', minutes: 15, sub: 'Present your build. Dad & Claude score it.' },
    ],
  },
];

<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# NextWork AI Projects

Hands-on AI projects I'm building through [NextWork](https://www.nextwork.org), following the **AI Beginner Roadmap** learnlist. It covers AI agents, workflow automation, and shipping real things with AI tools. Each project has its own folder with a README explaining what I built, what went wrong, and what I learned.

This sits alongside my [AWS Cloud Portfolio](https://github.com/PuseletsoPhiri/aws-cloud-portfolio), which documents my AWS bootcamp work.

## Progress

| # | Project | Tools | Status | Details |
|---|---------|-------|--------|---------|
| 1 | [Ship a Landing Page with v0 and Vercel](https://nextwork.ai/projects/065fd851-4e5d-5bd2-828b-d653483d86a9) | v0, Vercel, GitHub | ✅ Done | [Project folder](ship-landing-page-with-v0-and-vercel) |
| 2 | [Automate Your Calendar with AI](https://nextwork.ai/projects/6ac4b62d-0558-51eb-a3cc-89522aa5cf45) | n8n, ChatGPT (OpenAI), Google Calendar | ✅ Done | [Project folder](automate-calendar-n8n) |
| 3 | [Build a Blog Writing Crew with CrewAI](https://nextwork.ai/projects/99b558af-381c-5c9e-afef-a2d5e19992c0) | CrewAI, Python, Google Gemini | 🔄 In progress | [Project folder](blog-writing-crew-crewai) |

## Project summaries

**1. Ship a Landing Page with v0 and Vercel**
Built an e-commerce landing page by describing it in plain English, letting v0 generate the code, and deploying it with Vercel. Covers prompt-to-code generation, a GitHub pull request workflow, and continuous deployment with HTTPS by default.

**2. Automate Your Calendar with AI**
Built an n8n workflow where a chat message such as "book a meeting tomorrow at 3pm" becomes a real Google Calendar event. Covers workflow triggers, the AI Agent node, tools, `$fromAI()` expressions, and system messages.

**3. Build a Blog Writing Crew with CrewAI** (in progress)
Building a multi-agent system where a Researcher, a Writer, and an Editor work in sequence to produce a blog post, using CrewAI and the free tier of Google Gemini.

## Repository structure
```
nextwork-ai-projects/
├── README.md
├── ship-landing-page-v0-vercel/
├── automate-calendar-n8n/
└── blog-writing-crew-crewai/
```

## Skills and tools

| Area | What I've used |
|------|----------------|
| AI-assisted development | v0 (prompt-to-code), prompt iteration |
| Deployment | Vercel, GitHub pull requests, continuous deployment |
| Workflow automation | n8n, triggers, AI Agent node, tools, system messages |
| AI integration | OpenAI chat models, Google Calendar integration, `$fromAI()` expressions |
| Multi-agent systems | CrewAI agents, tasks, and sequential processes (in progress) |

## Security note
No API keys, passwords, or credentials are stored in this repository. Keys such as the Gemini API key live in local `.env` files that are excluded from version control.

## About
I'm Puseletso Phiri, an IT graduate from South Africa building skills in cloud and AI.

- GitHub: [PuseletsoPhiri](https://github.com/PuseletsoPhiri)
- Email: khalabiphiri@protonmail.com

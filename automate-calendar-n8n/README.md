<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# AUTOMATE YOUR CALENDAR WITH AI

## Introducing Today's Project!

In this project, I will demonstrate AI workflow automation. I'm doing this project to learn how to use n8n to create automated workflows for scheduling events in my Google Calendar

### Key tools and concepts

The key tools I used include n8n and AI agents. Key concepts I learnt include dynamic expressions and workflows.

### Challenges and wins

This project took me approximately 40 minutes. The most challenging part was getting the AI to book a meeting with constraints.

### Why I did this project

I did this project today to learn how to set up AI workflows in n8n. Another skill I want to learn is OpenClaw

## Exploring n8n

In this step, I will sign up for n8n and explore the workspace because I will be using it to create an AI workflow

![Exploring n8n](https://nextwork.ai/exuberant_purple_zany_armadillo/uploads/6ac4b62d-0558-51eb-a3cc-89522aa5cf45_c9d8f7a2)

## Starting an AI Workflow

In this step, I will create a new workflow in n8n and add a chat trigger because I want to test this workflow by triggering it in the chat

![Starting an AI Workflow](https://nextwork.ai/exuberant_purple_zany_armadillo/uploads/6ac4b62d-0558-51eb-a3cc-89522aa5cf45_a4b3c2d1)

### Understanding workflows

A workflow is a set of steps to complete tasks. A workflow becomes an AI workflow when it uses AI to automate tasks or decisions.

### Configuring workflow triggers

To set up a workflow, I first configured a workflow trigger. My trigger is a trigger for chat messages. Other options include a manual trigger.

## Integrating ChatGPT

In this step, I will connect an AI chat model to my workflow because I'm building an AI workflow

![Integrating ChatGPT](https://nextwork.ai/exuberant_purple_zany_armadillo/uploads/6ac4b62d-0558-51eb-a3cc-89522aa5cf45_fmtkjyrg)

### Connecting AI agents

I connected my trigger with an AI agent node. AI agents are like smart assistants that can think on their own. They use AI to understand situations, make decisions, and act, whatever the task is new or unpredictable. But, in this project, I am building an AI workflow.

### Key components of an AI workflow

An AI workflow can be broken into three key components, which are chat model, memory and tool.

![Integrating ChatGPT](https://nextwork.ai/exuberant_purple_zany_armadillo/uploads/6ac4b62d-0558-51eb-a3cc-89522aa5cf45_o5p6q7r8)

### Choosing the AI model

My workflow's chat model uses GPT-4o-mini. I connected with OpenAI by using free credits

## Integrating Google Calendar

In this step, I will add a connection to Google Calendar because I need to be able to communicate with my Google Calendar.

![Integrating Google Calendar](https://nextwork.ai/exuberant_purple_zany_armadillo/uploads/6ac4b62d-0558-51eb-a3cc-89522aa5cf45_c9d8dfgv2)

### Understanding tools in AI workflows

In this workflow, the tool is a third-party software that the agent can use to do a task and it is needed to interact with third-party apps.

### Security considerations for integrations

To connect with Google Calendar, I allowed n8n access to my Google Calendar events viewing and editing. This is needed because without it my workflow couldn't add or edit my Google Calendar

## Configuring Dynamic Expressions

I updated the start and end times to let the AI model control when events are scheduled because if I left them as-is (hard-coded), the Calendar tool would always create events starting immediately, regardless of what time I asked for in the chat.

![Configuring Dynamic Expressions](https://nextwork.ai/exuberant_purple_zany_armadillo/uploads/6ac4b62d-0558-51eb-a3cc-89522aa5cf45_897rg465e)

## Writing a System Message

In this step, I will write a system message to make today's date a usable variable. I also need to set the mode to expression mode.

![Writing a System Message](https://nextwork.ai/exuberant_purple_zany_armadillo/uploads/6ac4b62d-0558-51eb-a3cc-89522aa5cf45_rfgdhn456)

### Understanding system messages

A system message is an instruction or a piece of information given to an AI model to guide its behaviour or provide context for a conversation. It helps the AI understand its role, limitations, or specific tasks it needs to perform. I configured it to include time and timezones. I set it to expression mode because the time I pass in won't always be the same.

## Testing the Workflow

In this step, I will test my workflow by using the chat to create a calendar event. I expect a new event at the correct time in my calendar.

![Testing the Workflow](https://nextwork.ai/exuberant_purple_zany_armadillo/uploads/6ac4b62d-0558-51eb-a3cc-89522aa5cf45_w3x4y5z6)

### Verifying the results

I tested my workflow by asking AI chat to create a booking at 9am. I validated whether it was successful by checking my Google Calendar and saw it had created an event successfully.

## Changing My AI Agent's Personality

In this project extension, I will change how my calendar assistant talks and books meetings and showcase advanced prompt engineering skills because this quite a generic-sounding AI

### Updating system messages

I updated the system message. Changes I made include the assistant's personality from a basic calendar assistant to an overly enthusiastic and energetic assistant. Added instructions to respond with excitement and positive language.

### Observing agent behavior changes

When I tested my workflow again, I noticed it responded with emojis, excitement and positive language.

### Adding constraints with system messages

You can also set up constraints with your system message! I did this by including constraints for booking times like prime numbers and odd days. As a result, it doesn't let me book on odd days and non-prime minutes

![Changing My AI Agent's Personality](https://nextwork.ai/exuberant_purple_zany_armadillo/uploads/6ac4b62d-0558-51eb-a3cc-89522aa5cf45_fewargtr52)


# Типа агентство — система КП (архитектура)

## Overview
This application is designed as a high-end B2B sales tool. It allows an agency (Типа агентство) to generate personalized commercial proposals that feel like bespoke, high-budget digital documents for clients.

## Key Design Principles
1. **Premium Minimalism**: Using plenty of white space, large typography (Inter), and a single accent color (#3337AD).
2. **Stateless Distribution**: Proposals are generated via Gemini AI and encoded directly into the URL (Base64). This allows the agency to send a "personal link" that works instantly without a database, maintaining privacy and speed.
3. **Component Composition**: Every section of the proposal is a standalone component (Hero, Services, GrowthTool, etc.), allowing for future dynamic ordering or optional blocks.

## Technical Stack
- **React 18**: Frontend framework.
- **Tailwind CSS**: Styling engine for rapid, maintainable UI.
- **Gemini AI (gemini-3-flash-preview)**: Generates tailored marketing copy, audience segments, and rubrics based on the client's specific niche.
- **Intersection Observer API**: Used for "scroll reveal" animations without heavy library overhead.

## Content Logic
The AI is instructed to avoid "marketing fluff" and focus on "Business Systems". The structure follows a psychological sales funnel:
1. **Validation** (Hero)
2. **Framework** (Services)
3. **Logic** (Growth Tool)
4. **Empathy** (Audience)
5. **Execution** (Rubrics)
6. **Conversion** (Pricing)

## Project Structure
- `components/UI/`: Basic design system elements.
- `components/ProposalBlocks/`: The modular sections of the proposal.
- `services/geminiService.ts`: The bridge to the LLM, enforcing JSON schemas for predictable rendering.
- `pages/GeneratorPage.tsx`: The internal tools for the agency.
- `pages/ProposalPage.tsx`: The public-facing client presentation.

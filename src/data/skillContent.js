export const SKILL_CONTENT = `# ArbiPilot — Skill for AI Agents

> ArbiPilot makes AI-assisted onchain execution clearer and safer on Arbitrum. It helps agents move from natural language intent to explained, validated, deterministic execution.

## What ArbiPilot Does

ArbiPilot is not a generic chatbot wallet.
It is a constrained execution layer for agentic onchain actions.

The system is designed to:
- interpret natural language intent
- validate supported actions
- explain what will happen before signing
- surface execution context and risk
- constrain final execution to deterministic paths

## Core Thesis

Today, onchain execution is either too technical for users or too opaque when delegated to AI.
ArbiPilot bridges that gap by turning natural language intent into explained, validated, deterministic execution on Arbitrum.

## Current Execution Scope

The first supported execution path is a constrained swap flow on Arbitrum Sepolia.
This is not meant to be an unconstrained trading bot.
It is a demonstration of a broader design principle:

> Explain first. Execute second.

## Why This Matters

AI agents are increasingly used to assist with wallets and onchain actions.
But users still face the same trust problem:
- they do not fully understand what the system is doing
- they are asked to approve transactions anyway
- most wallet experiences remain black boxes

ArbiPilot addresses that by separating:
- language understanding
- execution validation
- deterministic transaction preparation

## Functional Flow

1. User describes intent in natural language
2. ArbiPilot parses and structures that intent
3. The system validates that the action is supported
4. The interface explains the route, scope, and risk
5. Only then is deterministic execution prepared

## Design Principles

### 1. AI interprets, code constrains
The model can help understand what the user wants, but it should not freely invent execution paths.

### 2. Execution should be reviewable
A user should be able to inspect what is going to happen before a wallet signature becomes the point of commitment.

### 3. Convenience should not require blind trust
Natural language is useful, but signing should still happen with clarity.

## Current Stack

- Next.js
- React
- Wagmi
- Viem
- Arbitrum Sepolia
- deterministic execution adapters
- explainability / risk preview UI
- registry-ready identity path

## Future Expansion

The current implementation starts with swaps, but the broader pattern can expand toward:
- approvals
- bridge flows
- multi-step DeFi execution
- team review flows
- agent supervision layers

## Summary

ArbiPilot is a clarity layer for AI-assisted onchain execution.
It helps agents and users move from intent to action with more transparency, more validation, and less black-box trust.

- App: https://arbipilot.vercel.app
- Repository: https://github.com/edison-alpha/ARB-Pilot
`;

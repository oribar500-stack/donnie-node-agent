# Donnie Node Agent

Donnie Node Agent is an open-source Node.js agent for managing Docker-based Minecraft server infrastructure on Linux.

It is being developed as part of the Donnie Host project.

## What it does

The agent is designed to run on Linux VPS nodes and connect them to a central control panel.

Planned and active functionality includes:

- Node registration
- Secure communication with the Donnie Host backend
- CPU, RAM and disk monitoring
- Docker container management
- Minecraft server lifecycle management
- Server creation
- Start / Stop / Restart / Kill
- Console and logs
- Port allocation
- Backups
- File management
- Plugin and mod management
- Node heartbeat monitoring

## Architecture

```text
Donnie Host Control Panel
        ↓
Backend API
        ↓
Scheduler
        ↓
Donnie Node Agent
        ↓
Linux VPS
        ↓
Docker
        ↓
Minecraft Server Containers

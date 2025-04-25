#!/usr/bin/env python3
"""3-tasks.py"""
from typing import List
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Waits for a random delay between 0 and max_delay seconds."""
    delays = []
    tasks = []

    for _ in range(n):
        task = task_wait_random(max_delay)
        tasks.append(task)

    for task in tasks:
        delay = await task
        delays.append(delay)

    return delays

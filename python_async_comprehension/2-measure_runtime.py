#!/usr/bin/env python3
"""
Module doc here
"""
import asyncio
import random
import time
import typing
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Function doc here
    """
    start_time: float = time.time()
    await asyncio.gather(async_comprehension(), async_comprehension(),
                         async_comprehension(), async_comprehension())
    end_time: float = time.time()
    return end_time - start_time

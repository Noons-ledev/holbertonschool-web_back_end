#!/usr/bin/env python3
"""
Module Doc
"""
import asyncio
import random
import typing
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """Function doc here"""
    result = []
    async for i in async_generator():
        result.append(i)
    return result

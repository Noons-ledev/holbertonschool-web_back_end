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
    result = [x async for x in async_generator()]
    return result

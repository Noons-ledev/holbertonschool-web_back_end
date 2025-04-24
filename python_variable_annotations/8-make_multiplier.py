#!/usr/bin/env python3
"""
module doc here
"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """
    function doc here
    """
    def multiply(x: float) -> float:
        return multiplier * x

    return multiply

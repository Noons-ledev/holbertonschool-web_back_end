#!/usr/bin/env python3
"""
Module doc here
"""
import typing


def to_kv(k: str, v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    """
    function doc here
    """
    result: typing.Tuple[str, float] = (k, v * v)
    return result

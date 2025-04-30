#!/usr/bin/env python3
"""
Module doc here
"""


def index_range(page, page_size):
    """Function doc in here"""
    if page == 1:
        return (0, page_size)
    if page != 0:
        return ((page_size * (page - 1)), page * page_size)

    
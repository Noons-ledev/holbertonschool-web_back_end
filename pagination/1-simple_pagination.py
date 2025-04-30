#!/usr/bin/env python3
"""
Module doc here
"""
import csv
import math
from typing import List


def index_range(page, page_size) -> tuple:
    """Function doc in here"""
    if page == 1:
        return (0, page_size)
    if page != 0:
        return ((page_size * (page - 1)), page * page_size)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        a: int
        b: int
        a, b = index_range(page, page_size)
        data = self.dataset()
        return data[a:b]

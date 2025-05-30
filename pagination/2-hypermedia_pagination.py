#!/usr/bin/env python3
"""
Module doc here
"""
import csv
import math
from typing import List, Tuple


def index_range(page, page_size) -> Tuple[int, int]:
    """Function doc in here"""
    start: int = (page - 1) * page_size
    end: int = start + page_size
    return (start, end)


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
        """
        Function doc here
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        a: int
        b: int
        a, b = index_range(page, page_size)
        data = self.dataset()
        return data[a:b]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """
        Function doc here
        """
        total_pages: int = math.ceil(len(self.dataset()) / page_size)
        next_page: int = page + 1
        prev_page: int = page - 1
        if page >= total_pages:
            next_page = None
        if page <= 1:
            prev_page = None
        return {"page_size": page_size,
                "page": page,
                "data": self.get_page(page, page_size),
                "next_page": next_page,
                "prev_page": prev_page,
                "total_pages": total_pages}

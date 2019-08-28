import json

from collections import OrderedDict
from hashlib import md5

from quest.date import DateManager
from quest.expirience import TaskExpirienseMixin


class QuestTask(TaskExpirienseMixin):
    def __init__(self, title, positive_motivation, negative_motivation, description=None, difficulty=None,
                 expiration_date=None, periodicity=None, **kwargs):
        self.__title = title
        self.__description = description or ''

        self.__difficulty = difficulty or 1.0

        self.__positive_motivation_mult = positive_motivation
        self.__negative_motivation_mult = negative_motivation

        self.date_manager = DateManager(expiration_date, **kwargs)

        self.__periodicity = periodicity

        self.__success = None

        self.__quest_id = self.quest_id

    @property
    def title(self):
        return self.__title

    @title.setter
    def title(self, value):
        self.__title = value

    @property
    def description(self):
        return self.__description

    @description.setter
    def description(self, value):
        self.__description = value

    @property
    def periodicity(self):
        return self.__periodicity

    @periodicity.setter
    def periodicity(self, value):
        self.__periodicity = value

    @property
    def success(self):
        return self.__success

    @property
    def quest_id(self):
        try:
            return self.__quest_id
        except AttributeError:
            dump = self.dump()
            ordered_dump = OrderedDict((key, dump[key]) for key in sorted(dump.keys()))
            self.__quest_id = md5(json.dumps(ordered_dump))

        return self.__quest_id

    def complete_quest(self, success: bool):
        """Завершаем квест и возвращаем опыт, если квест еще не завершен.

        Returns
        -------
        float or None
            Вернет None, если квест уже был завершен, чтобы избежать повторного завершения.
        """
        if self.success is None:
            self.date_manager.set_complete()
            self.__success = success

            return self.expirience
        else:
            return None

    def edit(self, title=None, description=None, positive_motivation=None, negative_motivation=None, difficulty=None,
             expiration_date=None, expiration_date_set_none=None, periodicity=None):
        """Метод для редактирования квеста"""
        self.date_manager.set_last_edit()

        self.title = title or self.title
        self.description = description or self.description
        self.positive_motivation_mult = positive_motivation or self.positive_motivation_mult
        self.negative_motivation_mult = negative_motivation or self.negative_motivation_mult
        self.difficulty = difficulty or self.difficulty
        self.periodicity = periodicity or self.periodicity

        if expiration_date:
            self.date_manager.expiration_date = expiration_date
        elif expiration_date_set_none:
            self.date_manager.expiration_date = None

    # TODO dump и load должны либо выгружать и загружать все значения в строках, либо load должен принимать в т.ч. и
    #  строки, а затем превращать в валидные значения для конструктора.
    def dump(self):
        """Выгружаем квест в словарь.

        Returns
        -------
        dict
        """
        data = {
            'title': self.title,
            'description': self.description,
            'difficulty': self.difficulty,
            'expirience': self.expirience,
            'positive_motivation': self.positive_motivation_mult,
            'negative_motivation': self.negative_motivation_mult,
            'success': self.success,
            'quest_id': self.quest_id
        }
        data.update(self.date_manager.dump())

        return data

    @classmethod
    def load(cls, **kwargs):
        """Загружаем квест из словаря."""
        return cls(**kwargs)
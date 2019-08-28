from datetime import datetime as dt


class DateManager:
    def __init__(self, expiration_date=None, creation_date=None, last_edit_date=None, last_update_date=None,
                 completion_date=None, **kwargs):
        self.__creation_date = creation_date or dt.now()

        self.__start_date = None

        self.__expiration_date = expiration_date  # type: dt

        self.__last_edit_date = last_edit_date  # type: dt
        self.__last_update_date = last_update_date  # type: dt
        self.__completion_date = completion_date  # type: dt

    @property
    def creation_date(self):
        """datetime: Дата создания задачи"""
        return self.__creation_date

    @property
    def start_date(self):
        return self.__start_date

    @property
    def expiration_date(self):
        """datetime or None: Срок выполнения задачи."""
        return self.__expiration_date

    @expiration_date.setter
    def expiration_date(self, value):
        if isinstance(value, dt) or value is None:
            self.__expiration_date = value

    @property
    def last_edit_date(self):
        return self.__last_edit_date

    @property
    def last_update_date(self):
        return self.__last_update_date

    @property
    def completion_date(self):
        return self.__completion_date

    def dump(self):
        return {
            'creation_date': self.creation_date,
            'expiration_date': self.expiration_date,
            'last_edit_date': self.last_edit_date,
            'last_update_date': self.last_update_date,
            'completion_date': self.completion_date,
            'start_date': self.start_date
        }

    def set_complete(self):
        self.__completion_date = dt.now()

    def set_last_edit(self):
        self.__last_edit_date = dt.now()

    def set_last_update(self):
        self.__last_update_date = dt.now()

    def set_start(self):
        self.__start_date = dt.now()
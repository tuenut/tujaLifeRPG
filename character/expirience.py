class ExpirienceSystem:
    def __init__(self):
        self.__expirience = 0
        self.__level = 0

    @property
    def expirience(self):
        return self.__expirience

    @property
    def level(self):
        return self.__level

    @property
    def expirience_amount_to_next_level(self):
        return 1000 * (self.__level + 1)

    def gain_expirience(self, expirience):
        if self.__expirience + expirience >= self.expirience_amount_to_next_level:
            self.__expirience += expirience - self.expirience_amount_to_next_level
            self.__level += 1
        else:
            self.__expirience += expirience
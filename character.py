from quests import QuestsList, ActiveQuests, CompletedQuests


class QuestJournal:
    def __init__(self):
        self.active_quests = ActiveQuests()
        self.completed_quests = CompletedQuests()
        self.quests_collection = QuestsList()


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


class Character:
    def __init__(self, name):
        self.__name = name
        self.__quest_journal = QuestJournal()
        self.__expirience_sub_system = ExpirienceSystem()

    @property
    def name(self):
        return self.__name

    @property
    def level(self):
        return self.__expirience_sub_system.level

    @property
    def expirience(self):
        return self.__expirience_sub_system.expirience

    def create_quest(self):
        pass

    def get_quest(self):
        pass

    def complete_quest(self):
        pass

    def edit_quest(self):
        pass



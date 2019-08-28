from character.expirience import ExpirienceSystem
from quest.journal import QuestJournal


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
        """создать новый квест и поместить его в коллекцию квестов."""
        self.__quest_journal.add_quest()

    def get_quest(self):
        pass

    def complete_quest(self):
        pass

    def edit_quest(self):
        pass
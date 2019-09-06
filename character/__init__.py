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

    @property
    def active_quests(self):
        return self.__quest_journal.active_quests

    @property
    def completed_quests(self):
        return self.__quest_journal.completed_quests

    @property
    def quests_collection(self):
        return self.__quest_journal.quests_collection

    def create_quest(self, title, **kwargs):
        """создать новый квест и поместить его в коллекцию квестов."""
        self.__quest_journal.create_quest(title=title, **kwargs)

    def get_quest(self):
        pass

    def complete_quest(self):
        pass

    def edit_quest(self):
        pass
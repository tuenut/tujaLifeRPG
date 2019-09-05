from .quests import QuestTask


class QuestJournal:
    """Журнал заданий.

    Содержит список активных заданий, список завершенных заданий, общую коллекцию заданий.

    В коллеции хранятся все задания, которые когда-либо создавались и не были удалены явно. По сути, там хранятся только
     параметры для заданий, т.к. они не активны. Так же это должен быть set() или его аналог, в смысле исключения
     повторения параметров.

    В активных заданиях должны храниться непосредственные инстансы заданий, в том числе могут повторяться параметры
     задания.

    В выполненных заданиях храним исторические данные о том, какие задания были выполнены.

    """

    def __init__(self):
        self.__active_quests = []
        self.__completed_quests = []
        self.__quests_collection = {}

    @property
    def active_quests(self):
        return self.__active_quests

    @property
    def completed_quests(self):
        return self.__completed_quests

    @property
    def quests_collection(self):
        return self.__quests_collection

    def add_quest(self, quest_md5: str, quest_parameters: dict):
        self.__quests_collection.update({quest_md5: quest_parameters})
        return quest_md5

    def create_quest(self, **kwargs):
        # TODO может quest_id засунуть в dump и пусть dump отдает словарь типа {'%quest_id%': {**quest_parameters}}
        quest = QuestTask(**kwargs)
        self.add_quest(quest.quest_id, quest.dump())

    def remove_quest(self, quest_md5):
        return self.__quests_collection.pop(quest_md5)

    def start_new_quest(self, quest_md5):
        try:
            quest_parameters = self.quests_collection[quest_md5]
        except KeyError:
            # TODO задачи нет в списке известных. Сначала создайте.
            raise

        quest = QuestTask(**quest_parameters)
        self.__active_quests.append(quest)

    def close_cuest(self, quest: QuestTask, success: bool):
        quest_index = self.__active_quests.index(quest)
        completion_quest = self.__active_quests.pop(quest_index)  # type: QuestTask

        expirience = completion_quest.complete_quest(success)

        self.__completed_quests.append(completion_quest.dump())

        return expirience
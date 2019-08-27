from datetime import datetime as dt


class QuestTask:
    __BASE_EXPIRIENCE = 1.0

    def __init__(self, title, positive_motivation, negative_motivation, description=None, difficulty=None,
                 expiration_date=None, periodicity=None):
        self.__creation_date = dt.now()
        self.__title = title
        self.__description = description or ''

        self.__difficulty = difficulty or 1.0

        self.positive_motivation_mult = positive_motivation
        self.negative_motivation_mult = negative_motivation

        self.__last_edit_date = None  # type: dt
        self.__last_update_date = None  # type: dt
        self.__completion_date = None  # type: dt
        self.__expiration_date = expiration_date  # type: dt

        self.__periodicity = periodicity

    @property
    def title(self):
        return self.__title

    @title.setter
    def title(self, value):
        self.__title = value

    @property
    def _base_expirience(self):
        """float: Базовый опыт задачи.

        Рассчитывается как условный базовый опыт за "единичную задачу", умноженный на коэффициент сложности.
        """
        return self.__BASE_EXPIRIENCE * self.__difficulty

    @property
    def positive_motivation_mult(self):
        """float: Коэффициент позитивной мотивации.

        Если выполнение задачи способствует получению какой-то выгоды(деньги, навыки, удовольствие) и при этом не влечет
         за собой каких-то негативных последствий при не выполнении(например, штраф), то такая задача имеет не нулевую
         позитивную мотивацию. Чем больше прибыль, тем больше модификатор.

        Часть опыта, рассчитываемая из позитивной мотивации, будет вычтена из общей суммы опыта за задачу, потому что
         выполнять задачу с позитивной мотивацией легко и приятно, а по ее выполнении можно получить какой-то бонус в
         реальном мире. Не выполнение такой задачи не лишит вас чего-то, в то время как выполнение может что-то
         принести, таким образом вы выполняете ее по своей "доброй воле".
        """
        return self.__positive_motivation

    @positive_motivation_mult.setter
    def positive_motivation_mult(self, value):
        self.__positive_motivation = value

    @property
    def negative_motivation_mult(self):
        """float: Коэффициент негативной мотивации.

        Если в случае невыполнения задачи последуют негативные последствия (штраф, выговор, увольнение итп), то такая
         задача имеет негативную мотивацию. Чем хуже последствия, тем выше модификатор.

        Часть опыта, рассчитываемая из негативной мотивации, будет прибавлена к общей сумме опыта за задачу, потому что
         для выполнения такой задачи требуется преодолеть нежелание ее делать. Такая задача может не принести вам ничего
         нового, но ее не выполнение лишит вас чего-то, тем самым вынуждает ее делать.
        """
        return self.__negative_motivation

    @negative_motivation_mult.setter
    def negative_motivation_mult(self, value):
        self.__negative_motivation = value

    @property
    def urgency_mult(self):
        """float: Коэффициент срочности задачи.

        Если задачу нужно сделать в течение двух дней - коэффициент 100%.
        Если задачу нежно сделать в течение недели - коэффициент 50%.
        Если задачу нужно сделать за месяц(31 день) - коэффициент 25%.
        Иначе коэффициент 0%. Задачи без срока выполнения, либо имеющие длинный срок выполнения выглядят малозначимыми.
        """
        if self.expiration_date is None:
            self.__urgency = 0.0

        else:
            delta_hours = round((self.expiration_date - self.creation_date).total_seconds() // 3600)

            if delta_hours <= 24 * 2:
                self.__urgency = 1.0

            elif delta_hours <= 24 * 7:
                self.__urgency = 0.5

            elif delta_hours <= 24 * 31:
                self.__urgency = 0.25

            else:
                self.__urgency = 0.0

        return self.__urgency

    @property
    def total_expirience(self):
        """float: Суммарный опыт за выполнение задачи."""
        return self._base_expirience + self.exp_nm_weight - self.exp_pm_weight + self.exp_urgency_weight

    @property
    def exp_pm_weight(self):
        """float: Часть опыта, рассчитываемая от позитивной мотивации."""
        return self._base_expirience * self.positive_motivation_mult

    @property
    def exp_nm_weight(self):
        """float: Часть опыта, рассчитываемая от негативной мотивации."""
        return self._base_expirience * self.negative_motivation_mult

    @property
    def exp_urgency_weight(self):
        """float: Часть опыта, рассчитываемая от срочности."""
        return self._base_expirience * self.urgency_mult

    @property
    def expiration_date(self):
        """datetime or None: Срок выполнения задачи."""
        return self.__expiration_date

    @property
    def creation_date(self):
        """datetime: Дата создания задачи"""
        return self.__creation_date

    def dump(self):
        return {
            'title': self.title,
            'description': self.__description,
            'expirience': self.total_expirience,
            'positive_motivation': self.positive_motivation_mult,
            'negative_motivation': self.negative_motivation_mult,
            'expiration_date': self.expiration_date,
        }


class BaseQuestsList:
    """Класс-контейнер для задач.

    Должен сожержать в себе список задач и операции, которые можно соверщить над задачами
    """

    def __init__(self):
        self.__quests_list = []

    @property
    def quests(self):
        return self.__quests_list

    def add_quest(self, quest):
        self.__quests_list.append(quest)

    def remove_quest(self, quest):
        index = self.__quests_list.index(quest)
        self.__quests_list.pop(index)


class QuestsList(BaseQuestsList):
    pass


class ActiveQuests(BaseQuestsList):
    pass


class CompletedQuests(BaseQuestsList):
    pass

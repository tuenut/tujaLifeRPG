class TaskExpirienseMixin:
    __BASE_EXPIRIENCE = 1.0
    __difficulty = None
    date_manager = None

    @property
    def expirience(self):
        """float: Суммарный опыт за выполнение задачи."""
        base_exp = self.__BASE_EXPIRIENCE * self.difficulty

        exp_pm_weight = base_exp * self.positive_motivation_mult
        exp_nm_weight = base_exp * self.negative_motivation_mult
        exp_urgency_weight = base_exp * self.urgency_mult

        total_expirience = base_exp - exp_pm_weight + exp_nm_weight + exp_urgency_weight

        return total_expirience

    @property
    def difficulty(self):
        return self.__difficulty

    @difficulty.setter
    def difficulty(self, value):
        self.__difficulty = value

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
        if self.date_manager.expiration_date is None:
            self.__urgency = 0.0

        else:
            delta_hours = round(
                (self.date_manager.expiration_date - self.date_manager.creation_date).total_seconds() // 3600)

            if delta_hours <= 24 * 2:
                self.__urgency = 1.0

            elif delta_hours <= 24 * 7:
                self.__urgency = 0.5

            elif delta_hours <= 24 * 31:
                self.__urgency = 0.25

            else:
                self.__urgency = 0.0

        return self.__urgency
